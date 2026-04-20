/**
 * Blog slug generator — shared between generateStaticParams & sitemap.
 * Includes both hand-curated articles AND slugs that Google is actively crawling.
 * Removing crawled slugs wastes crawl budget on 404s — better to keep them indexed.
 */

const QUALITY_BLOG_SLUGS = [
  // ── Original quality articles ──
  'exploring-jharkhand',
  'choose-right-cab',
  'top-10-destinations',
  'safety-standards',
  'fleet-guide',
  'number-one-rated',

  // ── Google-crawled blog slugs (actively indexed — do NOT remove) ──
  'restaurants-kolkata-to-kharagpur',
  'suv-choice-jamshedpur-local-taxi',
  'road-trip-guide-bokaro-to-bodh-gaya',
  'train-vs-cab-jamshedpur-to-prayagraj-(allahabad)',
  'train-vs-cab-deoghar-tempo-traveller',
  'corporate-travel-jamshedpur-outstation-cab',
];

/**
 * Returns every blog slug that should exist on the site.
 * These are pre-rendered at build time via generateStaticParams.
 * dynamicParams = false ensures any slug NOT in this list returns 404.
 */
export function getAllBlogSlugs(): string[] {
  return [...QUALITY_BLOG_SLUGS];
}
