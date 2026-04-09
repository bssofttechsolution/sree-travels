import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import CtaBanner from '@/components/CtaBanner';
import HeroSlider from '@/components/HeroSlider';
import BlogSection from '@/components/BlogSection';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Sree Travels | Best Cab Service in Jharkhand | Book Online ☎ +919204714249',
  description: 'Book the best cab service in Jharkhand ✅ Jamshedpur ✅ Ranchi ✅ Dhanbad ✅ Bokaro — AC cabs from ₹999, verified drivers, GPS tracking. One way, round trip, outstation, airport & local taxi. 50,000+ happy customers. Call +919204714249. Since 2015.',
  keywords: [
    'sree travels', 'cab service jharkhand', 'best cab service jamshedpur',
    'taxi jamshedpur', 'cab ranchi', 'outstation cab jharkhand',
    'one way cab jamshedpur', 'airport taxi ranchi', 'car rental jharkhand',
    'jamshedpur to ranchi cab', 'jamshedpur to kolkata cab',
    'cab booking online jharkhand', 'taxi near me jamshedpur',
    'book cab online jharkhand', '24/7 cab service jharkhand',
  ],
  alternates: { canonical: 'https://sreetravel.com' },
  openGraph: {
    title: 'Sree Travels | Best Cab Service in Jharkhand',
    description: 'Book reliable AC cabs in Jharkhand — 15+ cities, 100+ cabs, 24/7 service. ☎ +919204714249',
    url: 'https://sreetravel.com',
    images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: 'Sree Travels Jharkhand' }],
  },
};

export default function HomePage() {
  const tier1Cities = jharkhandCities.filter(c => c.tier === 1);
  const topRoutes = routes.filter(r => r.from === 'jamshedpur').slice(0, 6);

  return (
    <div className="page-content">
      {/* HERO SECTION */}
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px', marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginBottom: '1rem' }}>
              🏆 Jharkhand&apos;s Most Trusted Cab Service — Since 2015
            </div>
            <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
              <span className="gold-text">Book Your Cab</span> in Jharkhand<br />
              <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: '#94a3b8', fontWeight: 600 }}>
                15 Cities • 100+ Cabs • 24/7 Service
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '1rem', maxWidth: '550px', marginBottom: '1.5rem' }}>
              Reliable AC cabs with professional drivers for local travel, outstation trips, airport transfers, and corporate needs. 
              Serving Jamshedpur, Ranchi, Dhanbad, Bokaro & more.
            </p>
            <div className="hero-btn-group">
              <a href="tel:+919204714249" className="btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 1.75rem', display: 'flex' }}>
                📞 Call Now: +91 92047 14249
              </a>
              <a href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="btn-whatsapp pulse-animation" style={{ fontSize: '1rem', padding: '0.85rem 1.75rem', display: 'flex' }}>
                💬 Book on WhatsApp
              </a>
            </div>
          </div>
          <BookingWidget />
        </div>
      </section>

      {/* STATS */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(30,58,138,0.08) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="number">15+</div>
              <div className="label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="number">100+</div>
              <div className="label">Verified Cabs</div>
            </div>
            <div className="stat-card">
              <div className="number">50K+</div>
              <div className="label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="number">4.8★</div>
              <div className="label">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS BAR */}
      <section style={{ background: 'linear-gradient(90deg, var(--darker), rgba(15,23,42,0.95), var(--darker))', borderTop: '1px solid rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.1)', padding: '1.75rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2.5rem', alignItems: 'center' }}>
            {[
              '✅ 100% Verified Drivers',
              '📡 GPS Tracked Fleet',
              '💰 No Hidden Charges',
              '🔒 Safe & Secure Rides',
              '⭐ 4.8★ Rated on Google',
              '🏆 Since 2015',
            ].map((badge, i) => (
              <span key={i} style={{ fontSize: '0.88rem', color: '#cbd5e1', fontWeight: 600, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span className="gold-text">Our Cab Services</span> Across Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            From local taxi rides to outstation trips – we cover every travel need in 15+ cities
          </p>
          <div className="services-grid">
            {services.filter(s => s.slug !== 'pilgrimage-cab').map(service => (
              <a key={service.slug} href={`/jamshedpur/${service.slug}`} className="service-card">
                <div className="icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <div className="price">₹{service.startingPrice} {service.priceUnit}</div>
                <p>Available in all 15 cities</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CITIES WE SERVE */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(49,46,129,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span className="gold-text">Cities We Serve</span> in Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Comprehensive cab service coverage across all major Jharkhand cities
          </p>
          <div className="services-grid">
            {jharkhandCities.map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="service-card">
                <div className="icon">🏙️</div>
                <h3>Cab Service in {city.name}</h3>
                <div className="price">From ₹{city.localFare.hatchback_4hr}</div>
                <p>{city.localities.slice(0, 4).join(', ')}...</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span className="gold-text">Popular Outstation Routes</span> from Jamshedpur
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Book AC cab for outstation trips at affordable rates – all inclusive pricing
          </p>
          <div className="routes-grid">
            {topRoutes.map(route => (
              <a key={`${route.from}-${route.to}`} href={`/${route.from}-to-${route.to}-cab`} className="route-card">
                <div className="route-info">
                  <h3>{route.fromName} → {route.toName}</h3>
                  <div className="route-meta">
                    <span>📏 {route.distanceKm} km</span>
                    <span>⏱️ {route.durationHrs} hrs</span>
                  </div>
                </div>
                <div className="route-fare">
                  <div className="price">₹{route.fares.hatchback.toLocaleString()}</div>
                  <div className="label">Hatchback onwards</div>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a href="/cab-service-jamshedpur" className="btn-outline">View All Routes →</a>
          </div>
        </div>
      </section>

      {/* OUR FLEET */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(120,53,15,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span className="gold-text">Our Fleet</span> — Choose Your Ride
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Well-maintained AC vehicles for every budget and group size
          </p>
          <div className="fleet-grid">
            {fleet.map(vehicle => (
              <a key={vehicle.slug} href={`/jamshedpur/${vehicle.slug}`} className="fleet-card" style={{ backgroundImage: `url(${vehicle.image})` }}>
                <div className="icon">{vehicle.icon}</div>
                <h3>{vehicle.shortName}</h3>
                <div className="capacity">{vehicle.seatingCapacity} passengers • {vehicle.type}</div>
                <div className="rate">₹{vehicle.perKmRate}/km onwards</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <span className="gold-text">Why Choose</span> Sree Travels?
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Jharkhand&apos;s most trusted cab service — here&apos;s why 50,000+ customers trust us
          </p>
          <div className="services-grid">
            {[
              { icon: '🛡️', title: 'Verified Drivers', desc: '100% police-verified, trained professional drivers with 5+ years experience' },
              { icon: '📍', title: 'GPS Tracked Fleet', desc: 'Real-time vehicle tracking for your safety. Share live location with family' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Fixed fares with toll, fuel & driver allowance included' },
              { icon: '🕐', title: '24/7 Availability', desc: 'Book anytime — early morning, late night, holidays. We never say no' },
              { icon: '🧹', title: 'Clean & Sanitized', desc: 'Every cab sanitized before trip. Clean AC, fresh interiors guaranteed' },
              { icon: '❌', title: 'Free Cancellation', desc: 'Cancel free up to 2 hours before trip. No questions asked refund' },
              { icon: '📱', title: 'WhatsApp Booking', desc: 'Book in 30 seconds via WhatsApp. No app download needed' },
              { icon: '💳', title: 'All Payments', desc: 'UPI, Google Pay, PhonePe, Cash, Card — pay however you like' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(6,78,59,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="gold-text">Book Your Cab</span> in 3 Easy Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { step: '1', icon: '📞', title: 'Call or WhatsApp', desc: 'Contact us at +91 92047 14249 via call or WhatsApp. Tell us your travel plan.' },
              { step: '2', icon: '📝', title: 'Share Details', desc: 'Share pickup location, destination, date, and preferred cab type. Get instant fare quote.' },
              { step: '3', icon: '✅', title: 'Ride Confirmed', desc: 'Get confirmed booking with driver name, phone number, and vehicle details on WhatsApp.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '32px', height: '32px', background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '0.9rem' }}>
                  {item.step}
                </div>
                <div style={{ fontSize: '2.5rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="gold-text">What Our Customers</span> Say
          </h2>
          <div className="reviews-grid">
            {tier1Cities.flatMap(city => city.reviews.slice(0, 1).map((review, i) => (
              <div key={`${city.slug}-${i}`} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                <div className="review-author">{review.name} — {city.name}</div>
              </div>
            )))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(30,41,59,0.4) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div className="content-block">
            <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <span className="gold-text">About Sree Travels</span> — Jharkhand&apos;s Most Trusted Cab Service
            </h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Sree Travels</strong> is Jharkhand&apos;s premier cab service, operating since 2015 from our headquarters in Jamshedpur. We provide reliable, affordable, and safe taxi services across <strong>15+ cities in Jharkhand</strong> including Jamshedpur, Ranchi, Dhanbad, Bokaro Steel City, Deoghar, Hazaribagh, Giridih, Dumka, Chaibasa, and Adityapur.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                Whether you need a <strong>one way cab from Jamshedpur to Ranchi</strong>, a <strong>round trip taxi from Dhanbad to Kolkata</strong>, an <strong>airport transfer in Ranchi</strong>, or a <strong>local taxi for hourly rental</strong>, Sree Travels has you covered. Our fleet includes Swift Dzire, Honda City Sedan, Toyota Innova, Innova Crysta, Maruti Ertiga, and Tempo Travellers — all AC, GPS-tracked, and regularly maintained.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                What sets us apart from competitors is our commitment to <strong>transparent pricing with zero hidden charges</strong>. Every fare includes toll, fuel, and driver allowance. Our drivers are <strong>100% police-verified</strong> with 5+ years of driving experience. We accept all payment methods — Cash, UPI, Google Pay, PhonePe, and Card.
              </p>
              <p>
                With <strong>50,000+ satisfied customers</strong> and a <strong>4.8★ Google rating</strong>, Sree Travels is the natural choice for anyone looking for a <strong>reliable cab service in Jharkhand</strong>. Book instantly via WhatsApp at +91 92047 14249 — no app download required.
              </p>
            </div>
          </div>

          {/* PAYMENT & BOOKING OPTIONS */}
          <div style={{ marginTop: '3rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Accepted <span className="gold-text">Payment Methods</span></h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              {['Cash', 'Google Pay', 'PhonePe', 'Paytm', 'UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method, i) => (
                <span key={i} className="area-tag">💳 {method}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="section-spacing" style={{ background: 'var(--darker)' }}>
        <div className="container-main">
          <BlogSection pageName="Jharkhand" type="home" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section-spacing">
        <div className="container-main">
          <CtaBanner
            title="Ready to Book Your Cab? Call Us Now!"
            subtitle="Available 24/7 across 15+ Jharkhand cities. Best rates guaranteed."
            whatsappMessage="Hi Sree Travels, I want to book a cab in Jharkhand"
          />
        </div>
      </section>
    </div>
  );
}
