// Dark / light theme toggle: saved in localStorage, dark is the default.
// Kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts.
(() => {
  const button = document.querySelector('[data-theme-toggle]')
  if (!button) return
  const root = document.documentElement
  const meta = document.querySelector('meta[name="theme-color"]')
  const sync = (theme) => {
    const light = theme === 'light'
    if (light) root.setAttribute('data-theme', 'light')
    else root.removeAttribute('data-theme')
    button.setAttribute('aria-pressed', String(light))
    button.setAttribute('aria-label', light ? button.dataset.toDark : button.dataset.toLight)
    if (meta) meta.setAttribute('content', light ? '#f5f3ee' : '#0b0b0c')
  }
  // Sync the button with the theme applied before paint (no save).
  sync(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark')
  button.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    sync(next)
    try {
      localStorage.setItem('portfolio-theme', next)
    } catch (e) {}
  })
})()
