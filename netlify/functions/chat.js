// Chat endpoint for the portfolio chatbot (see src/components/ChatWidget.astro).
// A Netlify Function: it runs server-side, so the DeepSeek API key stays in
// Netlify's environment variables and is never shipped to the browser.
// The key is read from process.env.DEEPSEEK_API_KEY or process.env.API_KEY
// at runtime. Until the site owner adds one of those variables in Netlify,
// every request gets the friendly offline fallback below, so the widget
// still works gracefully.
// Model: deepseek-flash (DeepSeek-V4.1-Flash-1017), verified on DeepSeek's
// own pricing page (api-docs.deepseek.com/quick_start/pricing, 2026-11-20),
// which lists only deepseek-flash and deepseek-v4-pro.
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
  'Keep replies short, under about 80 words.'

const FALLBACK_REPLY =
  "I can't reach the chat right now, email Abubakar at m.abubakarmughal23@gmail.com."

const MAX_MESSAGE_CHARS = 500
const MAX_HISTORY = 6
const MAX_TOKENS = 300

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

  const apiKey = process.env.DEEPSEEK_API_KEY || process.env.API_KEY
  if (!apiKey) return fallback()

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 9000)
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-flash',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...recent],
        temperature: 0.7,
        max_tokens: MAX_TOKENS,
      }),
      signal: controller.signal,
    })
    if (!response.ok) return fallback()
    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content?.trim()
    if (!reply) return fallback()
    return json(200, { reply })
  } catch {
    // Network failure, timeout, or bad JSON: never leak the error.
    return fallback()
  } finally {
    clearTimeout(timeout)
  }
}
