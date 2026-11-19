// Sticky header state: once the page is scrolled, the header switches
// to its near-solid background so no content scrolling underneath is
// legible through the frosted glass. Kept as an external file because
// the site's Content-Security-Policy (script-src 'self') blocks inline
// scripts. Without JS the header simply keeps its base background.
(() => {
  const header = document.querySelector('.site-header')
  if (!header) return
  const update = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 8)
  }
  update()
  let ticking = false
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        update()
        ticking = false
      })
    },
    { passive: true },
  )
})()
