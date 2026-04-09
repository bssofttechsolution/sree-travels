import { Metadata } from 'next';
import CtaBanner from '@/components/CtaBanner';
import BookingWidget from '@/components/BookingWidget';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'Contact Sree Travels | Book Cab ☎ +919204714249 | WhatsApp Booking',
  description: 'Contact Sree Travels for cab booking in Jharkhand. ☎ Call +919204714249, WhatsApp booking in 30 seconds. Office: Dimna Road, Mango, Jamshedpur. 24/7 available. Email: info@sreetravel.com.',
  keywords: [
    'contact sree travels', 'sree travels phone number', 'sree travels jamshedpur contact',
    'cab booking jamshedpur phone number', 'sree travels whatsapp', 'sree travels address',
    'taxi booking number jamshedpur', 'cab service contact jharkhand',
  ],
  alternates: { canonical: 'https://sreetravel.com/contact' },
  openGraph: {
    title: 'Contact Sree Travels | ☎ +919204714249',
    description: 'Call, WhatsApp, or visit us. 24/7 cab booking across Jharkhand.',
    url: 'https://sreetravel.com/contact',
    images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: 'Contact Sree Travels' }],
  },
};

export default function ContactPage() {
  return (
    <div className="page-content">
      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '3rem' }}>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span className="gold-text">Contact Us</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#94a3b8', fontWeight: 600 }}>
              We&apos;re available 24/7 — Call, WhatsApp, or Email
            </span>
          </h1>
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Contact Cards */}
        <div className="services-grid" style={{ marginBottom: '3rem' }}>
          <a href="tel:+919204714249" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📞</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Call Us</h3>
            <p style={{ color: 'var(--primary)', fontSize: '1.25rem', fontWeight: 800 }}>+91 92047 14249</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Available 24/7 — Instant response</p>
          </a>
          <a href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>💬</div>
            <h3 style={{ marginBottom: '0.5rem' }}>WhatsApp</h3>
            <p style={{ color: '#25D366', fontSize: '1.25rem', fontWeight: 800 }}>+91 92047 14249</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Book in 30 seconds — No app needed</p>
          </a>
          <a href="mailto:info@sreetravel.com" className="glass-card" style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✉️</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: 700 }}>info@sreetravel.com</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>Corporate queries & bulk booking</p>
          </a>
          <div className="glass-card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>📍</div>
            <h3 style={{ marginBottom: '0.5rem' }}>Office Address</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 600 }}>Dimna Road, Mango</p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Jamshedpur, Jharkhand – 831018</p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Office <span className="gold-text">Hours</span></h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Day</th><th>Booking Hours</th><th>Office Hours</th></tr></thead>
              <tbody>
                <tr><td>Monday – Friday</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>9:00 AM – 8:00 PM</td></tr>
                <tr><td>Saturday</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>9:00 AM – 6:00 PM</td></tr>
                <tr><td>Sunday & Holidays</td><td style={{ color: '#22c55e', fontWeight: 700 }}>24/7 (Always Open)</td><td>10:00 AM – 4:00 PM</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
            * Cab booking is available 24 hours a day, 365 days a year via phone and WhatsApp. Office visits are during listed hours only.
          </p>
        </div>

        {/* Map */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Find Us on <span className="gold-text">Map</span></h2>
          <div style={{ width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)', marginTop: '1rem' }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Dimna%20Road,%20Mango,%20Jamshedpur,%20Jharkhand&t=&z=14&ie=UTF8&iwloc=&output=embed">
            </iframe>
          </div>
        </div>

        {/* Quick Booking Form */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Quick <span className="gold-text">Booking</span></h2>
          <p style={{ marginBottom: '1.5rem' }}>Fill in your details and book your cab instantly:</p>
          <BookingWidget />
        </div>

        {/* FAQ */}
        <div className="content-block" style={{ marginBottom: '3rem' }}>
          <h2>Frequently Asked <span className="gold-text">Questions</span></h2>
          <div style={{ marginTop: '1rem' }}>
            {[
              { q: 'How do I book a cab with Sree Travels?', a: 'Simply call us at +91 92047 14249 or send a WhatsApp message. Share your pickup location, destination, date, and preferred cab type. You will receive instant confirmation with driver details.' },
              { q: 'What is the fastest way to book?', a: 'WhatsApp is the fastest — send your travel details and get confirmed in under 30 seconds. No app download required.' },
              { q: 'Can I book for someone else?', a: 'Absolutely! Just provide the passenger\'s name, phone number, and pickup details. We will coordinate directly with them.' },
              { q: 'Do you offer corporate billing?', a: 'Yes, we provide monthly billing with detailed trip reports for corporate clients. Contact us at info@sreetravel.com for corporate accounts.' },
              { q: 'How far in advance should I book?', a: 'We recommend booking at least 2-3 hours in advance for local trips and 24 hours for outstation trips. However, we do accommodate last-minute bookings subject to cab availability.' },
            ].map((faq, i) => (
              <div key={i} className="glass-card" style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <CtaBanner
          title="Ready to Book? Call Us Now!"
          subtitle="24/7 | 15+ Cities | 100+ Cabs | ☎ +91 92047 14249"
          whatsappMessage="Hi Sree Travels, I want to book a cab"
        />
      </div>

      {/* ContactPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Sree Travels",
            "url": "https://sreetravel.com/contact",
            "mainEntity": {
              "@type": "TaxiService",
              "name": "Sree Travels",
              "telephone": "+919204714249",
              "email": "info@sreetravel.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dimna Road, Mango",
                "addressLocality": "Jamshedpur",
                "addressRegion": "Jharkhand",
                "postalCode": "831018",
                "addressCountry": "IN",
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 22.8046,
                "longitude": 86.2029,
              },
            },
          }),
        }}
      />
    </div>
  );
}
