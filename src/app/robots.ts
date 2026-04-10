import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/fonts/'],
      },
    ],
    sitemap: [
      'https://www.sreetravel.com/sitemap.xml',
    ],
  };
}
