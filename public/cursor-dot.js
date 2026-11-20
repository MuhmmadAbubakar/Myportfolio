// Gold dot cursor (styled in src/styles/base.css).
// Kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts. The dot only runs on
// devices with a fine pointer (a mouse or trackpad) and is skipped
// entirely under prefers-reduced-motion, so touch users and users who
// asked for less motion keep the native cursor. The native cursor is
// hidden only once this script has run, via the has-dot-cursor class
// on <html>, so if this file fails to load the normal cursor stays.
// The dot follows the pointer with a slight ease, grows to 16px with
// a faint ring over interactive elements, and hides when the pointer
// leaves the window.
(() => {
  if (!window.matchMedia('(pointer: fine)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const dot = document.createElement('div')
  dot.id = 'cursor-dot'
  dot.setAttribute('aria-hidden', 'true')
  document.body.appendChild(dot)
  document.documentElement.classList.add('has-dot-cursor')

  const INTERACTIVE =
    'a, button, input, textarea, select, summary, label, [role="button"], [tabindex]'

  let targetX = -100
  let targetY = -100
  let x = -100
  let y = -100
  let targetScale = 1
  let scale = 1
  let visible = false
  let raf = 0

  const render = () => {
    x += (targetX - x) * 0.25
    y += (targetY - y) * 0.25
    scale += (targetScale - scale) * 0.2
    dot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`
    const settled =
      Math.abs(targetX - x) < 0.1 &&
      Math.abs(targetY - y) < 0.1 &&
      Math.abs(targetScale - scale) < 0.01
    raf = settled ? 0 : requestAnimationFrame(render)
  }
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(render)
  }

  document.addEventListener('mousemove', (event) => {
    targetX = event.clientX
    targetY = event.clientY
    if (!visible) {
      visible = true
      dot.classList.add('is-visible')
    }
    schedule()
  })

  document.addEventListener('mouseover', (event) => {
    const interactive =
      event.target instanceof Element && event.target.closest(INTERACTIVE)
    targetScale = interactive ? 2 : 1
    dot.classList.toggle('is-hover', Boolean(interactive))
    schedule()
  })

  document.documentElement.addEventListener('mouseleave', () => {
    visible = false
    dot.classList.remove('is-visible')
  })
})()
