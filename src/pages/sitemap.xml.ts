import type { APIRoute } from 'astro'
import { languages } from '../data/i18n'
export const GET: APIRoute = ({ site }) => {
  const alternates = languages
    .map(
      (item) =>
        `<xhtml:link rel="alternate" hreflang="${item.code}" href="${new URL(item.path, site).href}" />`,
    )
    .join('\n')
  const urls = languages
    .map(
      (item) =>
        `<url><loc>${new URL(item.path, site).href}</loc>${alternates}<xhtml:link rel="alternate" hreflang="x-default" href="${new URL('/', site).href}" /></url>`,
    )
    .join('\n')
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  )
}
