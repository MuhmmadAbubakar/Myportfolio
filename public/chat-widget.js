// Floating chatbot widget (styled in src/styles/components.css).
// Kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts. Sends the last 6 messages to
// the Netlify Function at /.netlify/functions/chat, which holds the
// AI API key server-side, so no key ever reaches the browser and the
// browser never talks to the AI service directly (the CSP's connect-src
// 'self' would block that anyway).
// The function answers with { reply } or, when the key is missing or the
// API fails, with { reply, fallback: true }; network errors get the same
// friendly contact fallback here, with the email as a clickable link.
// All user-facing strings come from the widget element's data attributes,
// rendered by ChatWidget.astro from translations[lang].chat, so the widget
// speaks the page's language. When the server answers with fallback: true,
// or the request is rate limited, the local translated message is shown,
// not the server's English text.
// Abuse guard, client-side half: at most 10 messages per visitor session
// (the function enforces 10 requests per 10 minutes per IP server-side).
// All message text is inserted with textContent, never innerHTML, so a
// visitor's message can never run as markup. The dot cursor
// (public/cursor-dot.js) already grows over the widget's buttons and
// input, since they match its interactive selector.
;(() => {
  const widget = document.getElementById('chat-widget')
  const toggle = document.getElementById('chat-toggle')
  const panel = document.getElementById('chat-panel')
  const closeButton = document.getElementById('chat-close')
  const messagesBox = document.getElementById('chat-messages')
  const form = document.getElementById('chat-form')
  const input = document.getElementById('chat-input')
  const sendButton = document.getElementById('chat-send')
  if (
    !widget ||
    !toggle ||
    !panel ||
    !closeButton ||
    !messagesBox ||
    !form ||
    !input ||
    !sendButton
  )
    return

  const EMAIL = 'm.abubakarmughal23@gmail.com'
  // Translated strings from the widget element's data attributes, rendered
  // by ChatWidget.astro. The markup always sets them, so these are never
  // empty in practice; the empty fallbacks only guard against stale markup.
  const FALLBACK_REPLY = widget.dataset.fallback || ''
  const SESSION_CAP_REPLY = widget.dataset.sessionCap || ''
  const RATE_LIMIT_REPLY = widget.dataset.rateLimit || ''
  const OPEN_LABEL = widget.dataset.openLabel || ''
  const CLOSE_LABEL = widget.dataset.closeLabel || ''
  const TYPING_LABEL = widget.dataset.typingLabel || ''
  const MAX_HISTORY = 6
  const MAX_SESSION_MESSAGES = 10
  const history = []
  let sentCount = 0

  const setOpen = (open) => {
    widget.classList.toggle('is-open', open)
    panel.hidden = !open
    toggle.setAttribute('aria-expanded', String(open))
    toggle.setAttribute(
      'aria-label',
      open ? CLOSE_LABEL : OPEN_LABEL,
    )
    if (open) input.focus()
  }

  toggle.addEventListener('click', () => setOpen(panel.hidden))
  closeButton.addEventListener('click', () => setOpen(false))
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) setOpen(false)
  })

  const scrollToBottom = () => {
    messagesBox.scrollTop = messagesBox.scrollHeight
  }

  const addMessage = (role, text) => {
    const bubble = document.createElement('div')
    bubble.className = `chat-message chat-message-${role}`
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    bubble.appendChild(paragraph)
    messagesBox.appendChild(bubble)
    scrollToBottom()
    return bubble
  }

  // Assistant message with the email address as a clickable mailto link,
  // used for the offline fallback and the per-session cap. Built with DOM
  // nodes only, never innerHTML.
  const addMessageWithEmailLink = (text) => {
    if (!text.includes(EMAIL)) return addMessage('assistant', text)
    const bubble = document.createElement('div')
    bubble.className = 'chat-message chat-message-assistant'
    const paragraph = document.createElement('p')
    const [before, after] = text.split(EMAIL)
    paragraph.append(document.createTextNode(before))
    const link = document.createElement('a')
    link.href = `mailto:${EMAIL}`
    link.textContent = EMAIL
    paragraph.append(link)
    if (after) paragraph.append(document.createTextNode(after))
    bubble.appendChild(paragraph)
    messagesBox.appendChild(bubble)
    scrollToBottom()
    return bubble
  }

  const setBusy = (busy) => {
    input.disabled = busy
    sendButton.disabled = busy
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const text = input.value.trim()
    if (!text) return
    if (sentCount >= MAX_SESSION_MESSAGES) {
      addMessageWithEmailLink(SESSION_CAP_REPLY)
      input.value = ''
      return
    }
    input.value = ''
    addMessage('user', text)
    history.push({ role: 'user', content: text })
    sentCount += 1

    const typing = document.createElement('div')
    typing.className = 'chat-message chat-message-assistant chat-typing'
    typing.setAttribute('aria-label', TYPING_LABEL)
    for (let i = 0; i < 3; i += 1) {
      const dot = document.createElement('span')
      typing.appendChild(dot)
    }
    messagesBox.appendChild(typing)
    scrollToBottom()
    setBusy(true)

    let reply = null
    let isFallback = true
    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.slice(-MAX_HISTORY) }),
      })
      if (response.ok) {
        const data = await response.json()
        if (data && typeof data.reply === 'string' && data.reply.trim()) {
          reply = data.reply.trim()
          isFallback = data.fallback === true
        }
      } else if (response.status === 429) {
        // Show the local translated rate-limit message, not the server text.
        reply = RATE_LIMIT_REPLY
        isFallback = false
      }
    } catch {
      reply = null
    }

    typing.remove()
    // On a fallback, show the local translated message, not the server's
    // English reply text, and keep the history in the visitor's language.
    if (reply === null || isFallback) {
      addMessageWithEmailLink(FALLBACK_REPLY)
    } else {
      addMessage('assistant', reply)
    }
    history.push({
      role: 'assistant',
      content: reply === null || isFallback ? FALLBACK_REPLY : reply,
    })
    setBusy(false)
    input.focus()
  })
})()
