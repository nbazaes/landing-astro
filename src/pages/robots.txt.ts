import type { APIRoute } from 'astro';
import { getSiteData } from '../lib/site';
export const GET: APIRoute = async () => {
  const { profile } = await getSiteData('es');
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL('/sitemap.xml', profile.meta.ogUrl).href}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
