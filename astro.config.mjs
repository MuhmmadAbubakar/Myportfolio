import { defineConfig } from 'astro/config'
import { site } from './src/data/site.ts'

// Static, multilingual pages. Language navigation needs no client-side JavaScript.
// Deploy `dist/` to any static host.
export default defineConfig({
  // Netlify provides its production URL during builds. SITE_URL can override it
  // for a custom domain or a build uploaded manually to another host.
  site: process.env.SITE_URL || process.env.URL || site.url,
  build: {
    // Keep CSS in external files so the CSP can stay at `style-src 'self'`.
    inlineStylesheets: 'never',
  },
  vite: {
    build: {
      // Never inline small assets as data: URIs; `font-src 'self'` would block them.
      assetsInlineLimit: 0,
    },
  },
})
