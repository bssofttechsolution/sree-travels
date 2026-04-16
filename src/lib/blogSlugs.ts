/**
 * Blog slug generator — shared between generateStaticParams & sitemap.
 * Only high-quality, hand-curated blog articles.
 * Thin template-generated content has been removed to improve SEO.
 */

const QUALITY_BLOG_SLUGS = [
  'exploring-jharkhand',
  'choose-right-cab',
  'top-10-destinations',
  'safety-standards',
  'fleet-guide',
  'number-one-rated',
];

/**
 * Returns every blog slug that should exist on the site.
 * Limited to high-quality, unique content articles only.
 */
export function getAllBlogSlugs(): string[] {
  return [...QUALITY_BLOG_SLUGS];
}
