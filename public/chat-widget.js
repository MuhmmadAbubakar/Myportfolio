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
  const FALLBACK_REPLY = `I can't reach the chat right now, email Abubakar at ${EMAIL}.`
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
      open ? "Close chat with Abubakar's assistant" : "Open chat with Abubakar's assistant",
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
      addMessageWithEmailLink(`That's 10 messages for now, please email Abubakar at ${EMAIL}.`)
      input.value = ''
      return
    }
    input.value = ''
    addMessage('user', text)
    history.push({ role: 'user', content: text })
    sentCount += 1

    const typing = document.createElement('div')
    typing.className = 'chat-message chat-message-assistant chat-typing'
    typing.setAttribute('aria-label', 'Assistant is typing')
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
        const data = await response.json().catch(() => null)
        if (data && typeof data.error === 'string' && data.error.trim()) {
          reply = data.error.trim()
          isFallback = false
        }
      }
    } catch {
      reply = null
    }

    typing.remove()
    if (reply === null || isFallback) {
      addMessageWithEmailLink(reply === null ? FALLBACK_REPLY : reply)
    } else {
      addMessage('assistant', reply)
    }
    history.push({ role: 'assistant', content: reply === null ? FALLBACK_REPLY : reply })
    setBusy(false)
    input.focus()
  })
})()
