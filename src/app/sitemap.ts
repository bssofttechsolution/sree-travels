import { MetadataRoute } from 'next';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';
import { localRoutes } from '@/lib/localRoutes';
import { getAllBlogSlugs } from '@/lib/blogSlugs';

/**
 * Sitemap generator — only high-value, indexable pages.
 * Blog spam pages have been removed to preserve crawl budget.
 * Dates are fixed to the last meaningful update date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sreetravel.com';
  // Use a fixed date — only update when content actually changes
  const lastUpdate = '2026-04-16T00:00:00.000Z';

  const urls: MetadataRoute.Sitemap = [];

  // ── Homepage ──
  urls.push({
    url: baseUrl,
    lastModified: lastUpdate,
    changeFrequency: 'weekly',
    priority: 1,
  });

  // ── Static Pages ──
  ['about', 'contact', 'faq', 'fare-chart'].forEach(page => {
    urls.push({
      url: `${baseUrl}/${page}`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // ── City Hub Pages (highest priority after homepage) ──
  jharkhandCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/cab-service-${city.slug}`,
      lastModified: lastUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // ── Service × City Pages ──
  jharkhandCities.forEach(city => {
    services.forEach(service => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: lastUpdate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  // ── Fleet × City Pages ──
  jharkhandCities.forEach(city => {
    fleet.forEach(vehicle => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
        lastModified: lastUpdate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // ── Route Pages (high priority — transactional intent) ──
  routes.forEach(route => {
    urls.push({
      url: `${baseUrl}/${route.from}-to-${route.to}-cab`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // ── Local Route Pages ──
  localRoutes.forEach(route => {
    urls.push({
      url: `${baseUrl}/local-taxi-${route.city}/${route.slug}`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  // ── Quality Blog Articles (only 6) ──
  getAllBlogSlugs().forEach(slug => {
    urls.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: lastUpdate,
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  });

  return urls;
}
