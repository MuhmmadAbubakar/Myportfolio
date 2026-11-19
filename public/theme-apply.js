// Apply the saved theme before first paint so the page never flashes
// the wrong theme. No saved choice means dark, the default.
// Loaded as a classic (parser-blocking) script from <head> on purpose,
// and kept as an external file because the site's Content-Security-Policy
// (script-src 'self') blocks inline scripts.
try {
  if (localStorage.getItem('portfolio-theme') === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  }
} catch (e) {}
