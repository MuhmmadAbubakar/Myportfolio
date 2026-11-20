// Project cards expand on tap as well as on hover and keyboard focus.
// Kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts. Without JS, hover and
// keyboard focus still reveal the story through CSS alone.
// Tapping a card (anywhere except on a link inside it) pins that card
// open; tapping it again, or tapping anywhere outside the cards,
// closes it. Only one card is ever pinned open at a time.
(() => {
  const grid = document.querySelector('.projects-grid')
  if (!grid) return
  const cards = [...grid.querySelectorAll('.project-card')]
  if (!cards.length) return
  const closeAll = () => {
    cards.forEach((card) => card.classList.remove('is-expanded'))
  }
  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Links inside the card keep working as links.
      if (event.target.closest('a')) return
      const wasOpen = card.classList.contains('is-expanded')
      closeAll()
      if (!wasOpen) card.classList.add('is-expanded')
    })
  })
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.project-card')) closeAll()
  })
})()
