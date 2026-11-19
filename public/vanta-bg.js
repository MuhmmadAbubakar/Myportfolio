// Vanta TOPOLOGY background: a dull-gold animated mesh behind all content.
// Vendored locally (public/vendor/p5.min.js and vanta.topology.min.js)
// because the site's Content-Security-Policy (script-src 'self') blocks
// CDN scripts and inline scripts. TOPOLOGY is a p5 effect, not a three.js
// one, so no three.js is needed. Skips itself when the user prefers
// reduced motion, when p5/Vanta failed to load, or when the effect
// cannot start — the plain theme background remains.
//
// Why the mesh looked static (found by reading the vendored effect):
// TOPOLOGY builds its noise flow-field once in setup and never rebuilds
// it, its per-frame counter is incremented but never read, and draw()
// never clears or fades the canvas — so 4,500 faint particle trails
// accumulate forever until the mesh saturates and stops changing.
// The effect also defines no mouse handler, so the mouse does nothing
// even with mouseControls on, and the `speed` option is inert here.
// Two fixes below make the motion visible without touching the vendored
// effect: (1) each frame is faded slightly toward the theme background
// before the effect draws, so old trails decay instead of piling up
// into bright bands and the moving particles stay visible; (2) a very
// slow CSS drift on #vanta-bg (see base.css) keeps the whole mesh
// gently moving. Both stop entirely under prefers-reduced-motion.
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const el = document.getElementById('vanta-bg')
  if (!el || typeof window.p5 === 'undefined' || !window.VANTA || !window.VANTA.TOPOLOGY) return
  // Dull muted gold mesh (0x7a683a), drawn at low alpha by the effect
  // itself, so text stays clearly readable. Canvas background matches
  // the page background of the current theme (tokens.css --bg-0).
  const backgrounds = { dark: 0x0b0b0c, light: 0xf5f3ee }
  const backgroundsCss = { dark: '#0b0b0c', light: '#f5f3ee' }
  // Same colours as RGB triples, for the per-frame fade below.
  const backgroundsRgb = { dark: [11, 11, 12], light: [245, 243, 238] }
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
      color: 0x7a683a,
      backgroundColor: backgrounds[theme()],
    })
  } catch (e) {
    return
  }
  if (!effect) return
  // Fade each frame toward the theme background before the effect draws,
  // so particle trails decay over about a second instead of accumulating
  // forever into bright, saturated bands. The moving particles stay
  // visible as the mesh churns; the static field underneath no longer
  // freezes the picture. Wrapped around the effect's own draw, so the
  // effect itself is untouched.
  let fadeRgb = backgroundsRgb[theme()]
  if (effect.p5 && typeof effect.p5.draw === 'function') {
    const p = effect.p5
    const originalDraw = p.draw.bind(p)
    p.draw = function () {
      p.push()
      p.resetMatrix()
      p.noStroke()
      // Alpha 10/255 per frame: trails fade in well under a second.
      p.fill(fadeRgb[0], fadeRgb[1], fadeRgb[2], 10)
      p.rect(0, 0, p.width, p.height)
      p.pop()
      originalDraw()
    }
  }
  // Keep the canvas background (and the fade colour) in step with the
  // theme toggle. setOptions alone does not repaint the canvas
  // background, so update the canvas style directly as well.
  const syncBackground = () => {
    const current = theme()
    fadeRgb = backgroundsRgb[current]
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
