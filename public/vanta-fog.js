// Vanta FOG background: a soft, slow gold haze layered in front of the
// TOPOLOGY mesh (see public/vanta-bg.js), so the two effects run together
// behind all content. FOG is a three.js shader effect, vendored locally
// (public/vendor/three.min.js r121 and vanta.fog.min.js) because the
// site's Content-Security-Policy (script-src 'self') blocks CDN scripts
// and inline scripts. Its canvas is opaque by design, so the layer is
// made translucent in CSS (#vanta-fog canvas { opacity: 0.4 }) and the
// topology mesh shows through the haze. Colours are dull muted golds in
// both themes so text stays clearly readable.
//
// Skips itself when the user prefers reduced motion, on small screens
// (under 700px, for performance: two animated canvases is heavy on a
// phone), when three.js/Vanta failed to load, or when the effect cannot
// start, the topology layer and the plain theme background remain.
//
// Theme colours: the vendored shader base rebuilds its uniforms from
// the options on every setOptions call (setOptions -> updateUniforms),
// so calling setOptions with the new theme colours repaints the fog
// live, no destroy and re-create needed (verified in the vendored
// vanta.fog.min.js source).
(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  if (window.innerWidth < 700) return
  const el = document.getElementById('vanta-fog')
  if (!el || typeof window.THREE === 'undefined' || !window.VANTA || !window.VANTA.FOG) return
  // Dull muted golds; base matches the page background of the theme
  // (tokens.css --bg-0) so the haze blends with the page.
  const colours = {
    dark: {
      baseColor: 0x0b0b0c,
      backgroundColor: 0x0b0b0c,
      lowlightColor: 0x3a2f1a,
      midtoneColor: 0x7a683a,
      highlightColor: 0x8a6d2f,
    },
    light: {
      baseColor: 0xf5f3ee,
      backgroundColor: 0xf5f3ee,
      lowlightColor: 0xd8cdb4,
      midtoneColor: 0xa08c5a,
      highlightColor: 0x8a6d2f,
    },
  }
  const theme = () =>
    document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark'
  let effect = null
  try {
    effect = window.VANTA.FOG({
      el: el,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      blurFactor: 0.5,
      speed: 0.6,
      zoom: 0.9,
      ...colours[theme()],
    })
  } catch (e) {
    return
  }
  if (!effect) return
  // Keep the fog colours in step with the theme toggle.
  if ('MutationObserver' in window) {
    new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === 'data-theme') {
          try {
            effect.setOptions(colours[theme()])
          } catch (e) {}
          break
        }
      }
    }).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
  }
})()
