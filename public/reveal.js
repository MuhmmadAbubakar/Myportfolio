// Scroll reveal: sections and cards fade up as they enter the viewport.
// Kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const targets = Array.from(
    document.querySelectorAll(
      '.section-intro, .about-heading, .about-copy, .focus, .github-band, ' +
        '.project-card, .expertise-card, .experience-row, ' +
        '.testimonials-summary, .testimonial-card, .testimonials-more, ' +
        '.contact-copy, .contact-actions',
    ),
  )
  // No JS, reduced motion, or no observer: everything stays visible.
  if (!targets.length || reduceMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'))
    return
  }
  document.documentElement.classList.add('js-reveal')
  // Stagger cards inside each grid, capped so the group lands fast.
  for (const selector of ['.projects-grid', '.expertise-grid', '.testimonial-grid', '.experience-list']) {
    const group = document.querySelector(selector)
    if (!group) continue
    Array.from(group.children).forEach((child, index) => {
      child.style.transitionDelay = `${Math.min(index, 4) * 70}ms`
    })
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )
  targets.forEach((el) => observer.observe(el))
  // Cards opened by "See more" start hidden; reveal them on click.
  const toggle = document.querySelector('.testimonials-toggle')
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.querySelectorAll('.testimonial-extra').forEach((card) => card.classList.add('is-visible'))
    })
  }
})()
