import type { APIRoute } from 'astro';
import { getSiteData } from '../lib/site';
export const GET: APIRoute = async () => {
  const { profile } = await getSiteData('es');
  const urls = [
    '/',
    '/en/',
    '/terminal/',
    '/en/terminal/',
    '/proyectos/bazpos/',
    '/en/projects/bazpos/',
  ];
  const body = urls
    .map((path) => `<url><loc>${new URL(path, profile.meta.ogUrl).href}</loc></url>`)
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
