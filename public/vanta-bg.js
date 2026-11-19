// Vanta TOPOLOGY background: a dull-gold animated mesh behind all content.
// Vendored locally (public/vendor/p5.min.js and vanta.topology.min.js)
// because the site's Content-Security-Policy (script-src 'self') blocks
// CDN scripts and inline scripts. TOPOLOGY is a p5 effect, not a three.js
// one, so no three.js is needed. Skips itself when the user prefers
// reduced motion, when p5/Vanta failed to load, or when the effect
// cannot start — the plain theme background remains.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = document.getElementById('vanta-bg')
  if (!el || typeof window.p5 === 'undefined' || !window.VANTA || !window.VANTA.TOPOLOGY) return
  // Dull gold mesh (0x8a6d2f), drawn at low alpha by the effect itself, so
  // text stays clearly readable. Canvas background matches the page
  // background of the current theme (tokens.css --bg-0).
  const backgrounds = { dark: 0x0b0b0c, light: 0xf5f3ee }
  const backgroundsCss = { dark: '#0b0b0c', light: '#f5f3ee' }
  const theme = () =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  let effect = null
  try {
    effect = window.VANTA.TOPOLOGY({
      el: el,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x8a6d2f,
      backgroundColor: backgrounds[theme()],
    })
  } catch (e) {
    return
  }
  if (!effect) return
  // Keep the canvas background in step with the theme toggle.
  // setOptions alone does not repaint the canvas background, so update
  // the canvas style directly as well.
  const syncBackground = () => {
    const current = theme()
    try {
      effect.setOptions({ backgroundColor: backgrounds[current] })
    } catch (e) {}
    const canvas = effect.getCanvasElement ? effect.getCanvasElement() : null
    if (canvas) canvas.style.background = backgroundsCss[current]
  }
  if ('MutationObserver' in window) {
    new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'data-theme') {
          syncBackground()
          break
        }
      }
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
  }
})()
