// Chat endpoint for the portfolio chatbot (see src/components/ChatWidget.astro).
// A Netlify Function: it runs server-side, so the Google API key stays in
// Netlify's environment variables and is never shipped to the browser.
// The key is read from process.env.API_KEY at runtime. Until the
// site owner adds that variable in Netlify, every request gets the friendly
// offline fallback below, so the widget still works gracefully.
// Model: gemini-3.5-flash via Google AI Studio, which has a free tier.
// Google's own API error said gemini-2.5-flash "is no longer available to
// new users" and suggested gemini-3.8-flash, but 3.8-flash kept answering
// 503 "high demand" for 20+ minutes, so the function tries 3.5-flash,
// the previous current flash model (2026-11-20).
// Note: this file uses ESM because the repo's package.json has
// "type": "module"; Netlify bundles it the same way.

const SYSTEM_PROMPT =
  "You are the assistant on Abubakar Mughal's portfolio website. " +
  'Answer short questions about his work in plain, human language, no em dashes. ' +
  'He is a web developer and automation expert: web development (HTML, CSS, JavaScript, TypeScript, Astro, Next.js, React), ' +
  'GoHighLevel (CRM, pipelines, calendars, workflows, AI automation), ' +
  'AI agents and automation (Hermes, Grok, Muse AI, RPA), game development and e-commerce. ' +
  'He works as Senior at Hashturn, Agency Admin at o1e Mortgage for 8 months, and Technical Expert at HL Pro Tools, ' +
  'where he helped 1700+ users in one year with a CSAT of 3.94 out of 4 and an average live chat response under 4 minutes. ' +
  'His projects are Hash Movies, o1e Mortgage, Hermes (a local AI agent, Ollama, Qwen3 5.2B, 21 tools, 52 skills) ' +
  'and Daily Report Automation (Microsoft Teams and Power Automate). ' +
  'He is based in Multan, Pakistan, works remotely, and is flexible for USA time zones (EST, PST, MDT). ' +
  'For serious enquiries, point people to m.abubakarmughal23@gmail.com and https://github.com/MuhmmadAbubakar. ' +
  'Do not claim experience he has not stated, such as Zapier, n8n, Make or Voice AI. ' +
  'If you do not know something, say so and point to his email. ' +
  'Keep replies short, under about 80 words. ' +
  "Reply in the same language as the visitor's latest message."

const FALLBACK_REPLY =
  "I can't reach the chat right now, email Abubakar at m.abubakarmughal23@gmail.com."

const MAX_MESSAGE_CHARS = 500
const MAX_HISTORY = 6
// Generous output cap: Gemini 3 models spend part of the output budget on
// internal thinking, so a small cap can cut the visible answer off
// mid-sentence. Replies are still asked to stay short (about 80 words) in
// the system prompt, and output is billed per token actually generated.
const MAX_TOKENS = 1024

// Best-effort abuse guard: at most 10 requests per 10 minutes per IP, the
// server-side half of the ~10-messages-per-visitor-session cap (the widget
// enforces 10 messages per session client-side too). This is only a light
// guard. Netlify Functions run on ephemeral serverless instances, so the
// counters reset whenever a new instance starts and are not shared between
// instances. Real abuse protection would need a shared store (for example
// Upstash Redis), which is out of scope for this widget.
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 10
const hitsByIp = new Map()

function json(statusCode, body) {
  return {
    statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  }
}

function fallback() {
  return json(200, { reply: FALLBACK_REPLY, fallback: true })
}

function clientIp(event) {
  const forwarded = event.headers['x-forwarded-for'] || event.headers['X-Forwarded-For']
  if (forwarded) return forwarded.split(',')[0].trim()
  return event.headers['client-ip'] || event.headers['Client-Ip'] || 'unknown'
}

function isRateLimited(ip) {
  const now = Date.now()
  const hits = (hitsByIp.get(ip) || []).filter((time) => now - time < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) {
    hitsByIp.set(ip, hits)
    return true
  }
  hits.push(now)
  hitsByIp.set(ip, hits)
  return false
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method not allowed' })
  }

  if (isRateLimited(clientIp(event))) {
    return json(429, {
      error: 'Too many messages for now. Please wait a few minutes and try again.',
    })
  }

  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch {
    return json(400, { error: 'Invalid request' })
  }

  const messages = body.messages
  if (!Array.isArray(messages) || messages.length === 0) {
    return json(400, { error: 'A message is required' })
  }

  const history = []
  for (const item of messages) {
    if (!item || typeof item !== 'object') return json(400, { error: 'Invalid message' })
    if (item.role !== 'user' && item.role !== 'assistant') {
      return json(400, { error: 'Invalid message' })
    }
    if (typeof item.content !== 'string') return json(400, { error: 'Invalid message' })
    const content = item.content.trim()
    if (content.length === 0 || content.length > MAX_MESSAGE_CHARS) {
      return json(400, { error: 'Message must be between 1 and 500 characters' })
    }
    history.push({ role: item.role, content })
  }
  const recent = history.slice(-MAX_HISTORY)

  const apiKey = process.env.API_KEY
  if (!apiKey) {
    console.error('chat: API_KEY is not set')
    return fallback()
  }

  // Gemini can briefly refuse with 503 under high demand, and a request can
  // hang long enough to hit the timeout, so retry once on those transient
  // failures after a short pause. Other errors (bad key, wrong model) will
  // not fix themselves, so they return the fallback straight away.
  const ATTEMPT_TIMEOUT_MS = 8000
  const RETRY_DELAY_MS = 2000
  for (let attempt = 1; attempt <= 2; attempt += 1) {
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), ATTEMPT_TIMEOUT_MS)
    try {
      // Gemini roles are "user" and "model"; the widget sends "user"/"assistant".
      const contents = recent.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }))
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-goog-api-key': apiKey,
          },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { temperature: 0.7, maxOutputTokens: MAX_TOKENS },
          }),
          signal: controller.signal,
        },
      )
      if (!response.ok) {
        const detail = await response.text().catch(() => '')
        console.error('chat: Gemini error', response.status, detail.slice(0, 200))
        if ((response.status === 503 || response.status === 429) && attempt === 1) {
          await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS))
          continue
        }
        return fallback()
      }
      const data = await response.json()
      const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim()
      if (!reply) return fallback()
      return json(200, { reply })
    } catch (error) {
      // Network failure, timeout, or bad JSON: never leak the error to visitors.
      console.error(
        'chat: Gemini request failed',
        error instanceof Error ? error.message : 'unknown',
      )
      if (attempt === 1) {
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS))
        continue
      }
      return fallback()
    } finally {
      clearTimeout(timeout)
    }
  }
  return fallback()
}
