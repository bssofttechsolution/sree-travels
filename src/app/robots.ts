import { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt — no Crawl-delay, proper allow/disallow rules.
 * The conflicting static public/robots.txt has been deleted.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/fonts/'],
      },
    ],
    sitemap: [
      'https://sreetravel.com/sitemap.xml',
    ],
  };
}
