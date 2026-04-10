import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import CtaBanner from '@/components/CtaBanner';
import HeroSlider from '@/components/HeroSlider';

export const metadata: Metadata = {
  title: 'About Sree Travels | Jharkhand\'s #1 Cab Service Since 2015',
  description: 'Learn about Sree Travels — Jharkhand\'s most trusted cab service since 2015. 50,000+ happy customers, 100+ verified cabs, 15+ cities. Police-verified drivers, transparent pricing, 24/7 availability. Call +919204714249.',
  keywords: [
    'about sree travels', 'sree travels jamshedpur', 'best cab company jharkhand',
    'cab service company jamshedpur', 'sree travels history', 'sree travels reviews',
    'trusted cab service jharkhand', 'cab service since 2015',
  ],
  alternates: { canonical: 'https://www.sreetravel.com/about' },
  openGraph: {
    title: 'About Sree Travels | Jharkhand\'s #1 Cab Service',
    description: 'Since 2015, serving 50,000+ happy customers across 15+ cities.',
    url: 'https://sreetravel.com/about',
    images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: 'About Sree Travels' }],
  },
};

export default function AboutPage() {
  return (
    <div className="page-content">
      <section className="hero-section" style={{ minHeight: '50vh' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '4rem' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginBottom: '1rem' }}>
            🏆 Trusted Since 2015
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1.5rem' }}>
            <span className="gold-text">About Sree Travels</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#94a3b8', fontWeight: 600 }}>
              Jharkhand&apos;s #1 Cab Service | 50,000+ Happy Customers
            </span>
          </h1>
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Our Story */}
        <div className="content-block">
          <h2><span className="gold-text">Our Story</span></h2>
          <p style={{ lineHeight: 1.8 }}>
            Founded in <strong>2015 in Jamshedpur, Jharkhand</strong>, Sree Travels started with a simple mission: to provide <strong>safe, reliable, and affordable cab services</strong> to the people of Jharkhand. What began as a small fleet of 5 cabs has grown into the region&apos;s most trusted transportation company, now operating <strong>100+ verified vehicles</strong> across <strong>15+ cities</strong>.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Over the past {new Date().getFullYear() - 2015} years, we have served <strong>more than 50,000 happy customers</strong> — from daily commuters in Jamshedpur to corporate executives traveling between Ranchi and Kolkata, pilgrims visiting Deoghar&apos;s Baidyanath Dham, and families taking weekend trips to Puri. Every ride with Sree Travels is backed by our core values of safety, transparency, and customer satisfaction.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-grid" style={{ margin: '3rem 0' }}>
          <div className="stat-card glass-card">
            <div className="number">{new Date().getFullYear() - 2015}+</div>
            <div className="label">Years of Service</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">50K+</div>
            <div className="label">Happy Customers</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">100+</div>
            <div className="label">Verified Cabs</div>
          </div>
          <div className="stat-card glass-card">
            <div className="number">15+</div>
            <div className="label">Cities Covered</div>
          </div>
        </div>

        {/* What Makes Us Different */}
        <div className="content-block">
          <h2>What Makes <span className="gold-text">Sree Travels</span> Different?</h2>
          <div className="services-grid" style={{ marginTop: '1.5rem' }}>
            {[
              { icon: '🛡️', title: 'Police-Verified Drivers', desc: 'Every driver undergoes rigorous police verification, background checks, and regular training. We never compromise on your safety.' },
              { icon: '📍', title: 'GPS-Tracked Fleet', desc: 'All our vehicles are equipped with real-time GPS tracking. Share your live location with family for complete peace of mind.' },
              { icon: '💰', title: 'Zero Hidden Charges', desc: 'Our pricing is 100% transparent. The fare you see includes toll, fuel, driver allowance — no surprise charges at the end.' },
              { icon: '🕐', title: '24/7 Availability', desc: 'We operate 24 hours a day, 365 days a year. Early morning flights, late-night arrivals, festival rush — we are always available.' },
              { icon: '📱', title: '30-Second WhatsApp Booking', desc: 'No app downloads needed. Simply send us a WhatsApp message at +91 92047 14249 and your cab is confirmed in seconds.' },
              { icon: '🧹', title: 'Sanitized AC Cabs', desc: 'Every vehicle is thoroughly sanitized before each trip. Clean interiors, fresh AC, and comfortable seating guaranteed.' },
              { icon: '💳', title: 'All Payment Methods', desc: 'Pay however you prefer — Cash, UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card, or Net Banking.' },
              { icon: '🔄', title: 'Free Cancellation', desc: 'Plans changed? Cancel your booking free of charge up to 2 hours before your scheduled pickup. Full refund, no questions asked.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Fleet */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Our <span className="gold-text">Fleet</span></h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
            We operate a diverse fleet of well-maintained, air-conditioned vehicles to suit every budget and group size. From economical hatchbacks for solo travelers to spacious Tempo Travellers for large groups, we have the perfect ride for your journey.
          </p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead><tr><th>Vehicle</th><th>Type</th><th>Seating</th><th>Starting Rate</th><th>Best For</th></tr></thead>
              <tbody>
                <tr><td>Swift Dzire</td><td>Hatchback</td><td>4 Passengers</td><td>₹11/km</td><td>Budget trips, solo/couples</td></tr>
                <tr><td>Honda City / Ciaz</td><td>Sedan</td><td>4 Passengers</td><td>₹13/km</td><td>Comfort, corporate</td></tr>
                <tr><td>Maruti Ertiga</td><td>SUV</td><td>6 Passengers</td><td>₹16/km</td><td>Families, luggage</td></tr>
                <tr><td>Toyota Innova</td><td>SUV</td><td>7 Passengers</td><td>₹18/km</td><td>Large families, groups</td></tr>
                <tr><td>Innova Crysta</td><td>Premium SUV</td><td>7 Passengers</td><td>₹22/km</td><td>Premium, VIP, weddings</td></tr>
                <tr><td>Tempo Traveller</td><td>Mini-bus</td><td>12 Passengers</td><td>₹25/km</td><td>Groups, pilgrimages</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Service Areas */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Cities We <span className="gold-text">Serve</span></h2>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            Sree Travels provides comprehensive cab services across all major cities in Jharkhand and outstation routes to West Bengal, Bihar, Odisha, and beyond.
          </p>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>
            {['Jamshedpur', 'Ranchi', 'Dhanbad', 'Bokaro', 'Deoghar', 'Hazaribagh', 'Giridih', 'Dumka', 'Chaibasa', 'Adityapur', 'Kolkata', 'Patna', 'Puri', 'Bhubaneswar', 'Gaya'].map(city => (
              <span key={city} className="area-tag">🏙️ {city}</span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            Ready to <span className="gold-text">Book Your Cab</span>?
          </h2>
          <BookingWidget />
        </div>

        <div style={{ marginTop: '3rem' }}>
          <CtaBanner
            title="Contact Sree Travels Today!"
            subtitle="24/7 Available | 15+ Cities | 100+ Cabs | ☎ +91 92047 14249"
            whatsappMessage="Hi Sree Travels, I want to book a cab"
          />
        </div>
      </div>
    </div>
  );
}
