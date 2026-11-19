# Abubakar Mughal: Portfolio

A static Astro portfolio in English, Urdu, Spanish, and Japanese. A GoHighLevel AI Operator portfolio: CRM, workflows, and AI automation for agencies, with web development, RPA automation, and Agentic AI experience at Hashturn, o1e Mortgage, and HL Pro Tools.

## Local development

Requires Node 22.12+ (Node 24 recommended) and pnpm 10.33.0.

```sh
pnpm install
pnpm dev
```

If pnpm is not installed, use `npx --yes pnpm@10.33.0 install`, then `npm run dev`.

## Verify and build

```sh
npm run typecheck
npm run build
npm run preview
```

The production site is generated in `dist/`. No server or translation service is needed; the only client-side JavaScript is the small Testimonials “See more” toggle.

## Content and languages

- `src/data/site.ts`: name, contact email, GitHub profile, and published origin.
- `src/data/i18n.ts`: all translated content and language routes.
- `src/data/projects.ts`: translated project descriptions and the Hash Movies live link.
- `src/components/`: shared page sections.
- `src/styles/`: responsive styles, theme tokens, and Urdu/Japanese typography.

English is at `/`, Urdu at `/ur/`, Spanish at `/es/`, and Japanese at `/ja/`. The translated pages are still published at those paths, with translated metadata and alternate-language links, but there is no language switcher in the header. Urdu uses a right-to-left layout and a self-hosted Noto Naskh Arabic font. Japanese fonts are also self-hosted.

Experience descriptions are based on the supplied roles. Hashturn is listed as a Senior role with Agentic AI and GoHighLevel workflow work, and o1e Mortgage as Agency Admin for 8 months on GoHighLevel. The About section presents the work as a GoHighLevel AI Operator: CRM, workflows, and AI automation. The hero “Experience Across” strip is a scrolling marquee of the three companies where he has worked: Hashturn, o1e Mortgage, and HL Pro Tools. The Testimonials section shows the 4 strongest of the 10 supplied 5-star client reviews first, with a “See more” button revealing the remaining 6. All 10 reviews are quoted in English in every language, without reviewer names. None were supplied with the reviews. No employment dates, performance statistics, or unverified GitHub projects are included. The contact button opens the visitor’s email app to `m.abubakarmughal23@gmail.com`.

The selected work section features Hash Movies with a captured homepage preview and a live website link, plus o1e Mortgage's GoHighLevel work. The latter uses a clearly labelled HTML/CSS dashboard illustration based on the supplied visual reference; it does not claim authorship of the GoHighLevel platform or expose a private dashboard link.

## Hosting

### Netlify

For a Git-connected deployment, commit this portfolio directory as the repository root, including `netlify.toml`, `package.json`, and `pnpm-lock.yaml`. The included configuration uses:

- Base directory: `.` (the portfolio repository root)
- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: `22`

Netlify installs dependencies and builds the site before publishing. It automatically supplies the production URL for canonical links and the sitemap; set `SITE_URL` if you need to override that origin.

For a manual deployment, run `npm run build`, then upload the **`dist` folder** to your existing site's Deploys page. `index.html` must be at the top level of the uploaded folder, alongside `_astro`, `fonts`, and the `ur`, `es`, and `ja` folders. Uploading the source folder or `public` folder does not build the Astro pages and can produce Netlify's default 404. The prepared `netlify-deploy.zip` contains the built files with `index.html` at the archive root; rebuild and recreate the ZIP after future changes.

If you instead deploy the parent `Movie website` repository, its existing Netlify configuration targets `SR_Stodio-main`. That separate repository must use `tomoshibi-main` as its base directory to build this portfolio. The configuration in this portfolio assumes this folder is the repository root.

This is a static multipage site. Each language has its own generated `index.html`; no catch-all SPA redirect is required.

### Other hosts

`.openai/hosting.json` records the reserved Sites project; it has not been published. For another host or a manual deployment, set `SITE_URL` to the final origin before building so canonical links, the sitemap, and social metadata use the right domain. `public/_headers` supplies security and caching rules for hosts that support it. `wrangler.jsonc` configures a static Cloudflare deployment.

## Attribution

Adapted from the MIT-licensed Tomoshibi Astro template by Seu. The original license is preserved in `LICENSE`.
