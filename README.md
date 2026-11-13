# Abubakar Mughal — Portfolio

A static Astro portfolio in English, Urdu, Spanish, and Japanese. Includes web development, RPA automation, and GoHighLevel experience at Hashturn, o1e Mortgage, and HL Pro Tools.

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

The production site is generated in `dist/`. No server, translation service, or client-side JavaScript is needed.

## Content and languages

- `src/data/site.ts`: name, contact email, GitHub profile, and published origin.
- `src/data/i18n.ts`: all translated content and language routes.
- `src/data/projects.ts`: translated project descriptions and the Hash Movies live link.
- `src/components/`: shared page sections.
- `src/styles/`: responsive styles, theme tokens, and Urdu/Japanese typography.

English is at `/`, Urdu at `/ur/`, Spanish at `/es/`, and Japanese at `/ja/`. Every page has a language switcher, translated metadata, and alternate-language links. Urdu uses a right-to-left layout and a self-hosted Noto Naskh Arabic font. Japanese fonts are also self-hosted. Language choices use native links and work with JavaScript disabled.

Experience descriptions are based on the supplied roles. No employment dates, performance statistics, testimonials, or unverified GitHub projects are included. The contact button opens the visitor’s email app to `m.abubakarmughal23@gmail.com`.

The selected work section features Hash Movies with a captured homepage preview and a live website link, plus o1e Mortgage's GoHighLevel work. The latter uses a clearly labelled HTML/CSS dashboard illustration based on the supplied visual reference; it does not claim authorship of the GoHighLevel platform or expose a private dashboard link.

## Hosting

`.openai/hosting.json` identifies the private Sites preview. The static output can also be deployed to another host. Set `SITE_URL` to that host’s actual origin before building so canonical links, the sitemap, and social metadata use the right domain. `public/_headers` supplies security and caching rules for hosts that support it. `wrangler.jsonc` configures a static Cloudflare deployment.

## Attribution

Adapted from the MIT-licensed Tomoshibi Astro template by Seu. The original license is preserved in `LICENSE`.
