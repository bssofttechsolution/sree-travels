import { MetadataRoute } from 'next';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';
import { localRoutes } from '@/lib/localRoutes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.sreetravel.com';
  const now = new Date().toISOString();

  const urls: MetadataRoute.Sitemap = [];

  // Homepage
  urls.push({
    url: baseUrl,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  });

  // Static Pages
  urls.push({
    url: `${baseUrl}/about`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  urls.push({
    url: `${baseUrl}/contact`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  // City Hub Pages
  jharkhandCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/cab-service-${city.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Service × City Pages
  jharkhandCities.forEach(city => {
    services.forEach(service => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  // Fleet × City Pages
  jharkhandCities.forEach(city => {
    fleet.forEach(vehicle => {
      urls.push({
        url: `${baseUrl}/${city.slug}/${vehicle.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Route Pages
  routes.forEach(route => {
    urls.push({
      url: `${baseUrl}/${route.from}-to-${route.to}-cab`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Local Route Pages
  localRoutes.forEach(route => {
    urls.push({
      url: `${baseUrl}/local-taxi-${route.city}/${route.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return urls;
}
