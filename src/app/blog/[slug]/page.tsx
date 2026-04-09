import React from 'react';
import { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import CtaBanner from '@/components/CtaBanner';
import BookingWidget from '@/components/BookingWidget';
import BlogSection from '@/components/BlogSection';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const formattedTitle = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${formattedTitle} | Sree Travels Blog`,
    description: `Read our comprehensive guide on ${formattedTitle}. Discover essential travel tips, cab booking insights, route guides, and local knowledge from Sree Travels — Jharkhand's #1 cab service since 2015.`,
    keywords: [
      formattedTitle.toLowerCase(),
      `${formattedTitle.toLowerCase()} guide`,
      `${formattedTitle.toLowerCase()} tips`,
      'sree travels blog', 'jharkhand travel guide', 'cab service tips',
    ],
    alternates: { canonical: `https://sreetravel.com/blog/${params.slug}` },
    openGraph: {
      title: formattedTitle,
      description: `Comprehensive guide on ${formattedTitle} by Sree Travels.`,
      url: `https://sreetravel.com/blog/${params.slug}`,
      type: 'article',
      images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: formattedTitle }],
    },
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const words = params.slug.split('-');
  const title = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const isRoute = params.slug.includes('-to-');
  const locationKeyword = isRoute
    ? words.slice(-3).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
    : (words.length > 0 ? words[words.length - 1].charAt(0).toUpperCase() + words[words.length - 1].slice(1) : '');

  const articleDate = new Date();
  articleDate.setDate(articleDate.getDate() - Math.floor(Math.random() * 7 + 1));
  const formattedDate = articleDate.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="page-content" style={{ background: 'var(--darker)', minHeight: '100vh' }}>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "author": { "@type": "Organization", "name": "Sree Travels" },
            "publisher": {
              "@type": "Organization",
              "name": "Sree Travels",
              "logo": { "@type": "ImageObject", "url": "https://sreetravel.com/logo.webp" },
            },
            "datePublished": articleDate.toISOString(),
            "dateModified": new Date().toISOString(),
            "mainEntityOfPage": `https://sreetravel.com/blog/${params.slug}`,
            "description": `Comprehensive guide on ${title} by Sree Travels.`,
          }),
        }}
      />

      {/* Blog Hero */}
      <section style={{ background: 'linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e3a5f 100%)', paddingTop: '6rem', paddingBottom: '4rem', borderBottom: '1px solid var(--card-border)' }}>
        <div className="container-main" style={{ maxWidth: '850px', margin: '0 auto' }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Travel Guides', href: '#' },
            { label: title },
          ]} />

          <div style={{ display: 'inline-block', padding: '0.3rem 0.75rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '6px', fontSize: '0.75rem', color: '#f59e0b', fontWeight: 600, marginTop: '1rem', marginBottom: '1rem' }}>
            📚 Travel Guide
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, lineHeight: '1.2', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            {title}
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--gradient-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '0.9rem' }}>S</div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.85rem' }}>Sree Travels Editorial</div>
                <div style={{ fontSize: '0.75rem' }}>Travel Experts Since 2015</div>
              </div>
            </div>
            <span style={{ color: 'var(--card-border)' }}>|</span>
            <span>{formattedDate}</span>
            <span style={{ color: 'var(--card-border)' }}>|</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="section-spacing">
        <div className="container-main" style={{ maxWidth: '850px', margin: '0 auto' }}>

          <article style={{ background: 'var(--card-bg)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '24px', padding: '2.5rem clamp(1.5rem, 4vw, 4rem)', border: '1px solid var(--card-border)', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>

            {/* Introduction */}
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
              Welcome to our in-depth guide on <strong style={{ color: 'var(--text-primary)' }}>{title}</strong>. Whether you&apos;re a first-time visitor, a frequent traveler, or a local resident exploring new options, this guide is designed to give you everything you need to know about traveling smartly around {locationKeyword}. At <strong style={{ color: 'var(--primary)' }}>Sree Travels</strong>, we&apos;ve been serving Jharkhand since 2015 with 50,000+ completed trips, and we&apos;re sharing our insider knowledge with you.
            </p>

            {/* Section 1 */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(245,158,11,0.2)' }}>1. Understanding Your Travel Options</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              When it comes to &quot;{title}&quot;, most travelers face a common dilemma: should they use public transport, hail a local auto-rickshaw, use ride-hailing apps like Ola or Uber, or book a dedicated cab service? Let&apos;s break down each option:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text-primary)' }}>Public Transport:</strong> Buses and trains are cheap but unreliable in terms of timing. No door-to-door service, limited AC options, and crowded during peak hours.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text-primary)' }}>Auto-Rickshaw:</strong> Good for short distances but uncomfortable for long trips. No AC, meter disputes are common, and they can&apos;t do outstation trips.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text-primary)' }}>Ride Apps (Ola/Uber):</strong> Convenient but subject to surge pricing (2-3x during rain or rush hours). Limited coverage in Jharkhand cities beyond Ranchi.</li>
              <li style={{ marginBottom: '0.5rem' }}><strong style={{ color: 'var(--text-primary)' }}>Dedicated Cab Service (Sree Travels):</strong> Fixed pricing with zero surge, police-verified drivers, door-to-door AC service, perfect for both local and outstation trips. Book via WhatsApp in 30 seconds.</li>
            </ul>

            {/* Section 2 */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(245,158,11,0.2)' }}>2. Expert Tips for Traveling Around {locationKeyword}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
              {[
                { icon: '🌅', title: 'Best Time to Start', text: 'Start your journey early (before 7 AM) to avoid traffic and enjoy cooler temperatures. This is especially important for highway travel.' },
                { icon: '🚗', title: 'Vehicle Selection', text: 'Choose Sedan (Swift Dzire) for budget trips, SUV (Ertiga/Innova) for families, or Innova Crysta for premium comfort on long distances.' },
                { icon: '💧', title: 'Stay Hydrated', text: 'Carry water bottles. While our cabs have AC, long journeys require regular hydration. We can make stops for refreshments anytime.' },
                { icon: '📱', title: 'Stay Connected', text: 'Our GPS-tracked vehicles let you share live location with family. USB charging ports available in all cabs for your devices.' },
              ].map((tip, i) => (
                <div key={i} style={{ background: 'rgba(15,23,42,0.5)', padding: '1.25rem', borderRadius: '16px', border: '1px solid var(--card-border)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                  <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{tip.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{tip.text}</p>
                </div>
              ))}
            </div>

            {/* Expert Insight Box */}
            <div style={{ padding: '1.75rem', marginBottom: '2.5rem', background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '16px' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>💡 Insider Tip from Our Drivers</h3>
              <p style={{ lineHeight: '1.7', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                &quot;Our drivers who handle routes around {locationKeyword} every day recommend keeping some cash handy for roadside food stalls — they often have the best local cuisine! Also, if you&apos;re traveling with luggage, the Ertiga or Innova is ideal as they provide generous boot space without compromising on passenger comfort.&quot;
              </p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontStyle: 'italic' }}>— Sree Travels Driver Team, Jamshedpur</p>
            </div>

            {/* Section 3 */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(245,158,11,0.2)' }}>3. Cost Comparison: Different Travel Options</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Let&apos;s be real — cost matters. Here&apos;s how different options compare for traveling in and around {locationKeyword}:
            </p>
            <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1px solid var(--card-border)', background: 'var(--card-bg)', marginBottom: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                <thead>
                  <tr>
                    <th style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--primary)', fontWeight: 700, textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid rgba(245,158,11,0.2)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Factor</th>
                    <th style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--primary)', fontWeight: 700, textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid rgba(245,158,11,0.2)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Sree Travels ✅</th>
                    <th style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--text-secondary)', fontWeight: 700, textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid rgba(245,158,11,0.2)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Ola/Uber</th>
                    <th style={{ background: 'rgba(245,158,11,0.1)', color: 'var(--text-secondary)', fontWeight: 700, textAlign: 'left', padding: '0.85rem 1rem', borderBottom: '2px solid rgba(245,158,11,0.2)', fontSize: '0.8rem', textTransform: 'uppercase' }}>Auto</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Pricing</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: '#22c55e', fontWeight: 700 }}>Fixed — No Surge</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Surge 2-3x</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Haggling</td></tr>
                  <tr><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>AC</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: '#22c55e', fontWeight: 700 }}>✅ Always</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Usually</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>❌ No</td></tr>
                  <tr><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Outstation</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: '#22c55e', fontWeight: 700 }}>✅ Specialized</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Limited</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>❌ No</td></tr>
                  <tr><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Safety</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: '#22c55e', fontWeight: 700 }}>Police Verified</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>Basic check</td><td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid var(--card-border)', color: 'var(--text-secondary)' }}>❌ None</td></tr>
                </tbody>
              </table>
            </div>

            {/* Section 4 */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(245,158,11,0.2)' }}>4. Safety Measures We Take</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
              Your safety during travel around {locationKeyword} is our absolute highest priority. Here&apos;s what Sree Travels does differently:
            </p>
            <ul style={{ lineHeight: '1.8', marginBottom: '2rem', color: 'var(--text-secondary)', paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '0.5rem' }}>🛡️ <strong>100% police-verified drivers</strong> with mandatory background checks every 6 months</li>
              <li style={{ marginBottom: '0.5rem' }}>📍 <strong>Real-time GPS tracking</strong> on every vehicle — share live location with family</li>
              <li style={{ marginBottom: '0.5rem' }}>🧹 <strong>Sanitized interiors</strong> before every trip — deep-cleaned weekly</li>
              <li style={{ marginBottom: '0.5rem' }}>🔧 <strong>Regular maintenance</strong> — every cab serviced every 10,000 km without exception</li>
              <li style={{ marginBottom: '0.5rem' }}>📞 <strong>24/7 emergency helpline</strong> — direct line to our operations team during your trip</li>
              <li style={{ marginBottom: '0.5rem' }}>🚫 <strong>Strict no-tolerance policy</strong> for rash driving, phone use while driving, or route deviation</li>
            </ul>

            {/* Conclusion */}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)', paddingBottom: '0.5rem', borderBottom: '2px solid rgba(245,158,11,0.2)' }}>Ready to Travel?</h2>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Whether you&apos;re searching for information about &quot;{title}&quot; for planning purposes or ready to book right now, Sree Travels is here to make your journey safe, comfortable, and affordable. With transparent pricing, verified drivers, and 24/7 availability across Jharkhand, we&apos;re the smart choice for every trip.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '0', color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--primary)' }}>Book now:</strong> Call <a href="tel:+919204714249" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 700 }}>+91 92047 14249</a> or{' '}
              <a href="https://wa.me/919204714249" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 700 }}>WhatsApp us</a> for instant booking. Your cab will be confirmed in under 30 seconds!
            </p>
          </article>

          {/* Booking Widget */}
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '2rem' }}>Ready to travel to <span className="gold-text">{locationKeyword || 'your destination'}</span>?</h3>
            <BookingWidget defaultTo={locationKeyword} />
          </div>

          {/* Related Articles */}
          <div style={{ marginTop: '4rem' }}>
            <BlogSection pageName={locationKeyword || 'Jharkhand'} type={isRoute ? 'route' : 'city'} />
          </div>

        </div>
      </section>

      <CtaBanner
        title="Book Your Verified Cab Instantly!"
        subtitle="24/7 Availability across Jharkhand and Outstation."
        whatsappMessage={`Hi Sree Travels, I was reading about ${title} and want to book a cab.`}
      />

    </div>
  );
}
