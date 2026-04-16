'use client';

/**
 * BlogSection — Links to quality blog articles only.
 * Replaces the previous version that generated links to thousands of
 * template-based thin content pages (which Google flagged as spam).
 */

const QUALITY_ARTICLES = [
  {
    slug: 'exploring-jharkhand',
    title: 'Exploring Jharkhand: A Complete Travel Guide',
    category: 'Travel Guide',
    readTime: '7 min',
  },
  {
    slug: 'choose-right-cab',
    title: 'How to Choose the Right Cab for Your Trip',
    category: 'Tips',
    readTime: '5 min',
  },
  {
    slug: 'top-10-destinations',
    title: 'Top 10 Destinations in Jharkhand by Cab',
    category: 'Travel Guide',
    readTime: '6 min',
  },
  {
    slug: 'safety-standards',
    title: 'Our Safety Standards: Police-Verified Drivers & GPS Tracking',
    category: 'Safety',
    readTime: '4 min',
  },
  {
    slug: 'fleet-guide',
    title: 'Complete Fleet Guide: Sedan vs SUV vs Innova Crysta',
    category: 'Vehicle Guide',
    readTime: '5 min',
  },
  {
    slug: 'number-one-rated',
    title: 'Why Sree Travels is #1 Rated in Jharkhand',
    category: 'About Us',
    readTime: '4 min',
  },
];

interface BlogSectionProps {
  pageName?: string;
  type?: 'city' | 'route';
}

export default function BlogSection({ pageName }: BlogSectionProps) {
  // Show 3 related articles
  const articles = QUALITY_ARTICLES.slice(0, 3);

  return (
    <div className="content-block" style={{ marginTop: '2.5rem' }}>
      <h2>Travel Guides {pageName ? `for ${pageName}` : ''}</h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1rem',
          marginTop: '1rem',
        }}
      >
        {articles.map((article) => (
          <a
            key={article.slug}
            href={`/blog/${article.slug}`}
            style={{
              display: 'block',
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              padding: '1.25rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '0.2rem 0.6rem',
                background: 'rgba(245,158,11,0.12)',
                border: '1px solid rgba(245,158,11,0.25)',
                borderRadius: '6px',
                fontSize: '0.7rem',
                color: '#f59e0b',
                fontWeight: 600,
                marginBottom: '0.5rem',
              }}
            >
              {article.category} • {article.readTime}
            </div>
            <h3
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-primary)',
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              {article.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
