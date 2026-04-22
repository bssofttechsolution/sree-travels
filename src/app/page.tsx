import { Metadata } from 'next';
import BookingWidget from '@/components/BookingWidget';
import CtaBanner from '@/components/CtaBanner';
import HeroSlider from '@/components/HeroSlider';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import { jharkhandCities } from '@/lib/cities';
import { services } from '@/lib/services';
import { fleet } from '@/lib/fleet';
import { routes } from '@/lib/routes';
import FareCalculator from '@/components/FareCalculator';

export const metadata: Metadata = {
  title: 'Sree Travels | Best Cab Service in Jamshedpur (Tata) & Ranchi | Taxi Booking Jharkhand',
  description: 'Book the best cab service in Jamshedpur (Tata/Tatanagar) & Ranchi, Jharkhand ✅ AC cabs from ₹999 ✅ Tata to Ranchi cab ₹2,499 ✅ Police-verified drivers ✅ GPS tracked ✅ 24/7 service. One way, outstation, airport & local taxi. Call +919204714249.',
  keywords: [
    'sree travels', 'sree travels jamshedpur', 'sree travels tata',
    'cab service in jamshedpur', 'cab service in tata', 'tata cab service', 'tatanagar taxi',
    'best cab service jamshedpur tata', 'best cab service in jamshedpur',
    'taxi tatanagar', 'car rental tata jamshedpur', 'car rental jamshedpur',
    'cab ranchi', 'cab service ranchi', 'taxi ranchi',
    'outstation cab jharkhand', 'outstation cab jamshedpur', 'outstation cab tata',
    'one way cab jamshedpur', 'one way cab tata',
    'airport taxi ranchi', 'airport cab ranchi',
    'car rental jharkhand', 'cab service jharkhand',
    'jamshedpur to ranchi cab', 'tata to ranchi cab', 'tatanagar to ranchi cab',
    'ranchi to jamshedpur cab', 'ranchi to tata cab',
    'jamshedpur to kolkata cab', 'tata to kolkata cab',
    'kolkata to jamshedpur cab', 'kolkata to tata cab', 'kolkata to jamshedpur taxi',
    'ranchi to kolkata cab', 'ranchi to kolkata taxi',
    'jamshedpur to ranchi taxi fare', 'ranchi to jamshedpur taxi fare',
    'jamshedpur to kolkata taxi fare', 'kolkata to jamshedpur cab fare',
    'cab booking online jharkhand', 'taxi near me jamshedpur',
    'book cab online jharkhand', '24/7 cab service tata tatanagar',
    'cab dhanbad', 'cab bokaro', 'cab hazaribagh',
    'jamshedpur to dhanbad cab', 'jamshedpur to bokaro cab',
    'best taxi service in tata', 'cheapest cab in jamshedpur',
    'tata to dhanbad cab', 'tata to bokaro cab', 'tata to kolkata cab',
    // Competitor-beating long-tail keywords
    'savaari alternative jamshedpur', 'makemytrip cab jamshedpur to ranchi',
    'gozo cab alternative ranchi', 'cheapest cab ranchi to kolkata',
    'one way taxi jamshedpur to kolkata', 'one way cab ranchi to jamshedpur',
    'cab service jamshedpur to ranchi fare 2026', 'ranchi to jamshedpur cab fare 2026',
    'jamshedpur to kolkata distance by cab', 'kolkata to jamshedpur one way cab',
    'best cab service jharkhand 2026', 'trusted cab service jamshedpur tata 2026',
    'cab near tatanagar station', 'cab from tatanagar railway station',
    'ranchi airport to jamshedpur cab', 'birsa munda airport cab to jamshedpur',
  ],
  alternates: { canonical: 'https://www.sreetravel.com' },
  openGraph: {
    title: 'Sree Travels | Best Cab Service in Jamshedpur (Tata) & Ranchi, Jharkhand',
    description: 'Book reliable AC cabs in Jamshedpur/Tata & Ranchi — 15+ cities, 100+ cabs, 24/7. Tata to Ranchi ₹2,499. ☎ +919204714249',
    url: 'https://www.sreetravel.com',
    images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: 'Sree Travels Best Cab Service Jamshedpur Tata Ranchi Jharkhand' }],
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
          <div style={{ maxWidth: '700px', marginBottom: '1.75rem' }}>
            <div style={{ display: 'inline-block', padding: '0.3rem 0.75rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', fontSize: '0.75rem', color: '#f59e0b', fontWeight: 600, marginBottom: '0.85rem' }}>
              🏆 Jharkhand&apos;s Most Trusted Cab Service — Since 2015
            </div>
            <h1 style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '0.85rem' }}>
              <span className="gold-text">Best Cab Service in Jamshedpur (Tata)</span> & Ranchi<br />
              <span style={{ fontSize: 'clamp(0.85rem, 2.5vw, 1.5rem)', color: '#94a3b8', fontWeight: 600 }}>
                15 Cities • 100+ Cabs • 24/7 Taxi Service • ₹11/km
              </span>
            </h1>
            <p style={{ color: '#94a3b8', fontSize: 'clamp(0.85rem, 2.5vw, 1rem)', maxWidth: '550px', marginBottom: '1.25rem', lineHeight: 1.6 }}>
              Book reliable AC cabs in Jamshedpur/Tata (Tatanagar), Ranchi, Dhanbad, Bokaro & Hazaribagh with professional police-verified drivers. One way cab, outstation trips, airport transfers & local taxi.
            </p>
            <div className="hero-btn-group">
              <a href="tel:+919204714249" className="btn-primary">
                📞 Call: +91 92047 14249
              </a>
              <a href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab" target="_blank" rel="noopener noreferrer" className="btn-whatsapp pulse-animation" aria-label="Book a cab on WhatsApp">
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
      <section style={{ background: 'linear-gradient(90deg, var(--darker), rgba(15,23,42,0.95), var(--darker))', borderTop: '1px solid rgba(245,158,11,0.1)', borderBottom: '1px solid rgba(245,158,11,0.1)', padding: '1.25rem 0' }}>
        <div className="container-main">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem 2rem', alignItems: 'center' }}>
            {[
              '✅ Verified Drivers',
              '📡 GPS Tracked',
              '💰 No Hidden Charges',
              '🔒 Safe Rides',
              '⭐ 4.8★ Google',
              '🏆 Since 2015',
              '📍 Google Verified Business',
            ].map((badge, i) => (
              <span key={i} style={{ fontSize: 'clamp(0.72rem, 2vw, 0.88rem)', color: '#cbd5e1', fontWeight: 600, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{badge === '📍 Google Verified Business' ? <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ color: '#4285F4', textDecoration: 'none' }}>{badge}</a> : badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Our Cab Services</span> Across Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '550px', marginLeft: 'auto', marginRight: 'auto', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
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
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Cities We Serve</span> in Jharkhand
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
            Comprehensive cab service coverage across all major Jharkhand cities
          </p>
          <div className="services-grid">
            {jharkhandCities.map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="service-card">
                <div className="icon">🏙️</div>
                <h3>Cab in {city.name}</h3>
                <div className="price">From ₹{city.localFare.hatchback_4hr}</div>
                <p>{city.localities.slice(0, 3).join(', ')}...</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ROUTES */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Popular Outstation Routes</span> from Jamshedpur
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
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
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/cab-service-jamshedpur" className="btn-outline">View All Routes →</a>
          </div>
        </div>
      </section>

      {/* OUR FLEET */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(120,53,15,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Our Fleet</span> — Choose Your Ride
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
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

      {/* FARE CALCULATOR */}
      <section className="section-spacing" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <FareCalculator />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '0.4rem' }}>
            <span className="gold-text">Why Choose</span> Sree Travels?
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: 'clamp(0.82rem, 2.5vw, 0.95rem)' }}>
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
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.88rem, 2.5vw, 1rem)', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO BOOK */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(6,78,59,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Book Your Cab</span> in 3 Easy Steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { step: '1', icon: '📞', title: 'Call or WhatsApp', desc: 'Contact us at +91 92047 14249 via call or WhatsApp. Tell us your travel plan.' },
              { step: '2', icon: '📝', title: 'Share Details', desc: 'Share pickup, destination, date & cab type. Get instant fare quote.' },
              { step: '3', icon: '✅', title: 'Ride Confirmed', desc: 'Get confirmed booking with driver name, phone & vehicle details on WhatsApp.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center', position: 'relative', paddingTop: '2rem' }}>
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', width: '30px', height: '30px', background: 'var(--gradient-gold)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: '#000', fontSize: '0.85rem' }}>
                  {item.step}
                </div>
                <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', marginBottom: '0.3rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.75rem, 2vw, 0.85rem)', lineHeight: 1.5 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="section-spacing">
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
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

      {/* GOOGLE REVIEWS CTA */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(66,133,244,0.05) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div style={{ textAlign: 'center', padding: '2.5rem 1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '20px', border: '1px solid rgba(66,133,244,0.15)', maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>⭐⭐⭐⭐⭐</div>
            <h2 style={{ marginBottom: '0.5rem' }}>
              <span className="gold-text">4.8/5 Rating</span> on Google — 2,800+ Reviews
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', marginBottom: '1.5rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
              Jharkhand&apos;s highest-rated cab service. Join thousands of happy customers who trust Sree Travels for safe, reliable, and affordable travel.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '12px', fontWeight: 700, fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 20px rgba(66,133,244,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                ⭐ Rate Us on Google
              </a>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.75rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(66,133,244,0.3)', color: '#4285F4', borderRadius: '12px', fontWeight: 700, fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                📍 View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(30,41,59,0.4) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <div className="content-block">
            <h2 style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
              <span className="gold-text">About Sree Travels</span> — Best Cab Service in Jamshedpur (Tata) & Ranchi
            </h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
              <p style={{ marginBottom: '0.85rem' }}>
                <strong>Sree Travels</strong> is the <strong>best cab service in Jamshedpur (Tata)</strong> and <strong>Ranchi</strong>, operating since 2015 from our headquarters on Dimna Road, Mango, Jamshedpur (Tatanagar). We are the <strong>#1 rated taxi service in Tata Nagar</strong> with 50,000+ satisfied customers, 100+ verified cabs, and 4.8★ Google rating. Whether you call it Jamshedpur, Tata, Tatanagar, or Steel City — Sree Travels is the name locals trust for reliable, affordable, and safe <strong>cab service in Tata/Jamshedpur</strong>.
              </p>
              <p style={{ marginBottom: '0.85rem' }}>
                Our fleet of AC cabs serves Jamshedpur (Tata), Ranchi, Dhanbad, Bokaro Steel City, Hazaribagh, Deoghar, Giridih, Dumka, Chaibasa, Adityapur (Gamharia), and 5+ more cities across Jharkhand. Whether you need a <strong>one way cab from Tata to Ranchi</strong> (₹2,499), a <strong>Jamshedpur to Kolkata cab</strong> (₹3,999), or a <strong>local taxi in Tatanagar</strong> from ₹999, Sree Travels has the perfect cab for you. Our fleet includes Swift Dzire, Honda City Sedan, Toyota Innova, Innova Crysta, Maruti Ertiga, and Tempo Travellers — all AC, GPS-tracked, and regularly maintained.
              </p>
              <p style={{ marginBottom: '0.85rem' }}>
                What makes Sree Travels the <strong>best taxi service in Jamshedpur/Tata</strong> compared to other <strong>cab services in Jamshedpur</strong>? Our commitment to <strong>transparent pricing with zero hidden charges</strong>. Every fare includes toll, fuel, and driver allowance. Our drivers are <strong>100% police-verified</strong> with 5+ years of driving experience. We accept all payment methods — Cash, UPI, Google Pay, PhonePe, Paytm, and Card.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Cab Service from Tatanagar Railway Station</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Need a <strong>cab from Tatanagar station</strong>? Sree Travels provides instant pickup from <strong>Tatanagar Junction railway station</strong> to any destination in Jamshedpur, Adityapur, Gamharia, or outstation routes to Ranchi, Kolkata, Dhanbad, and beyond. Our drivers are stationed near the station 24/7 for quick pickup. Book your <strong>Tatanagar station taxi</strong> via WhatsApp at +91 92047 14249 for instant confirmation.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Ranchi Airport Cab Service</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Flying into or out of Ranchi? Sree Travels is the most reliable <strong>Ranchi airport cab service</strong>. We provide <strong>Birsa Munda Airport taxi</strong> for both pickup and drop at fixed fares. Our drivers track your flight status — no extra charge for delays. Book <strong>airport cab from Ranchi</strong> to Jamshedpur (Tata), Dhanbad, Bokaro, or any Jharkhand city. Airport to Ranchi city from ₹499, Airport to Jamshedpur from ₹2,499.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Popular Routes from Jamshedpur/Tata</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Our most booked outstation routes include <strong>Jamshedpur to Ranchi cab</strong> (130km, 3hrs, ₹2,499), <strong>Tata to Kolkata cab</strong> (260km, 5-6hrs, ₹3,999), <strong>Jamshedpur to Dhanbad cab</strong> (80km, 2hrs, ₹1,999), <strong>Tata to Bokaro cab</strong> (120km, 3hrs, ₹2,399), and <strong>Jamshedpur to Puri cab</strong> (520km, 10hrs, ₹7,999). Every fare includes toll, fuel, and driver allowance with zero hidden charges. Book one way or round trip from Tata/Jamshedpur.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Local Taxi in Jamshedpur/Tata</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                For local travel within Jamshedpur (Tata), we offer 4hr/40km and 8hr/80km <strong>local taxi packages</strong> starting at just ₹999. Perfect for shopping in Bistupur, hospital visits, meetings at XLRI or NIT Jamshedpur, and exploring tourist places like Jubilee Park, Dimna Lake, and Dalma Wildlife Sanctuary. Our <strong>local cab service in Tata/Jamshedpur</strong> covers Mango, Bistupur, Sakchi, Jugsalai, Adityapur, Gamharia, Telco, Kadma, Golmuri, Sonari, Baridih, and all areas.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Cab Service in Ranchi</h3>
              <p style={{ marginBottom: '0.85rem' }}>
                Sree Travels is also the <strong>best cab service in Ranchi</strong>. We provide reliable <strong>car rental in Ranchi</strong> for local travel, outstation trips, corporate travel, and Birsa Munda Airport transfers. Our Ranchi fleet covers Doranda, Kanke, Lalpur, Harmu, Dhurwa, Morabadi, Bariatu, Hinoo, Kokar, Ratu Road, Booty More, Argora, Namkum, Hatia, and all major localities. Book <strong>Ranchi to Jamshedpur cab</strong>, <strong>Ranchi to Kolkata cab</strong>, <strong>Ranchi to Patna cab</strong>, and 50+ outstation routes from Ranchi.
              </p>
              <h3 style={{ marginBottom: '0.6rem', marginTop: '1.2rem', color: 'var(--text-primary)' }}>Why Sree Travels vs. Other Cab Services?</h3>
              <p>
                Unlike Ola and Uber which have <strong>limited availability in Jamshedpur/Tata</strong>, Sree Travels is a <strong>local cab service</strong> that guarantees availability 24/7, 365 days. We don&apos;t use surge pricing — our fares are fixed. Every driver is locally known, police-verified, and experienced with Jharkhand routes. With <strong>50,000+ satisfied customers</strong> and a <strong>4.8★ Google rating</strong>, Sree Travels is the natural choice for anyone looking for a <strong>reliable cab service in Jamshedpur, Tata, Ranchi</strong>, or anywhere in Jharkhand. Book instantly via WhatsApp at +91 92047 14249 — no app download required.
              </p>
            </div>
          </div>

          {/* PAYMENT & BOOKING OPTIONS */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1.25rem', color: 'var(--text-primary)', fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>Accepted <span className="gold-text">Payment Methods</span></h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem' }}>
              {['Cash', 'Google Pay', 'PhonePe', 'Paytm', 'UPI', 'Credit Card', 'Debit Card', 'Net Banking'].map((method, i) => (
                <span key={i} className="area-tag">💳 {method}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE FAQ — TRIGGERS RICH SNIPPET */}
      <section className="section-spacing">
        <div className="container-main">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  { '@type': 'Question', name: 'What is the cab fare from Jamshedpur (Tata) to Ranchi?', acceptedAnswer: { '@type': 'Answer', text: 'Jamshedpur (Tata) to Ranchi cab fare starts at ₹1,799 (Hatchback), ₹2,299 (Sedan), ₹2,999 (SUV), ₹3,499 (Innova Crysta). Distance: 130 km, Duration: 3 hrs. All-inclusive of toll, fuel, driver. Call +919204714249.' } },
                  { '@type': 'Question', name: 'Which is the best cab service in Jharkhand?', acceptedAnswer: { '@type': 'Answer', text: 'Sree Travels is rated the best cab service in Jharkhand with 4.8★ Google rating, 50,000+ happy customers, and 100+ verified cabs across 15+ cities including Tata (Tatanagar) and Ranchi. Police-verified drivers, GPS tracking, transparent pricing. Available 24/7. Call +919204714249.' } },
                  { '@type': 'Question', name: 'How to book a cab in Jamshedpur / Tata?', acceptedAnswer: { '@type': 'Answer', text: 'Book a cab in Jamshedpur or Tatanagar by calling +91 92047 14249 or sending a WhatsApp message. Share pickup, destination, date and cab type. Get instant confirmation with driver details in 30 seconds. No app download needed.' } },
                  { '@type': 'Question', name: 'Is Sree Travels available 24/7?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Sree Travels operates 24 hours a day, 7 days a week, 365 days a year across 15+ Jharkhand cities. Whether you need a cab at 3 AM for an airport transfer or a late-night ride, we are always available.' } },
                  { '@type': 'Question', name: 'Do you provide one way cab in Jharkhand?', acceptedAnswer: { '@type': 'Answer', text: 'Yes! Sree Travels provides one-way cab service across Jharkhand. Pay only for one direction — no return fare. Starting at ₹11/km (Hatchback). Available for Jamshedpur (Tata), Ranchi, Dhanbad, Bokaro and all 15+ cities.' } },
                  { '@type': 'Question', name: 'What types of cabs are available?', acceptedAnswer: { '@type': 'Answer', text: 'We offer 7 vehicle types: Swift Dzire (₹12/km), Sedan (₹14/km), Ertiga (₹14/km), Innova (₹15/km), Innova Crysta (₹18/km), Tempo Traveller (₹22/km), and Luxury cabs (₹25/km). All are AC, GPS-tracked, and well-maintained.' } },
                ],
              }),
            }}
          />
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Frequently Asked</span> Questions
          </h2>
          <FaqSection faqs={[
            { question: 'What is the cab fare from Jamshedpur (Tata) to Ranchi?', answer: 'Jamshedpur (Tata) to Ranchi cab fare starts at ₹1,799 (Hatchback), ₹2,299 (Sedan), ₹2,999 (SUV), ₹3,499 (Innova Crysta). Distance: 130 km, Duration: 3 hrs. All-inclusive of toll, fuel, driver. Call +919204714249.' },
            { question: 'Which is the best cab service in Jharkhand?', answer: 'Sree Travels is rated the best cab service in Jharkhand with 4.8★ Google rating, 50,000+ happy customers, and 100+ verified cabs across 15+ cities. Police-verified drivers, GPS tracking, transparent pricing. Available 24/7. Call +919204714249.' },
            { question: 'How to book a cab in Jamshedpur / Tata?', answer: 'Book a cab in Jamshedpur or Tatanagar by calling +91 92047 14249 or sending a WhatsApp message. Share pickup, destination, date and cab type. Get instant confirmation with driver details in 30 seconds. No app download needed.' },
            { question: 'Is Sree Travels available 24/7?', answer: 'Yes, Sree Travels operates 24 hours a day, 7 days a week, 365 days a year across 15+ Jharkhand cities. Whether you need a cab at 3 AM for an airport transfer or a late-night ride, we are always available.' },
            { question: 'Do you provide one way cab in Jharkhand?', answer: 'Yes! Sree Travels provides one-way cab service across Jharkhand. Pay only for one direction — no return fare. Starting at ₹11/km (Hatchback). Available for Jamshedpur (Tata), Ranchi, Dhanbad, Bokaro and all 15+ cities.' },
            { question: 'What types of cabs are available?', answer: 'We offer 7 vehicle types: Swift Dzire (₹12/km), Sedan (₹14/km), Ertiga (₹14/km), Innova (₹15/km), Innova Crysta (₹18/km), Tempo Traveller (₹22/km), and Luxury cabs (₹25/km). All are AC, GPS-tracked, and well-maintained.' },
          ]} />
          <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
            <a href="/faq" className="btn-outline">View All 30+ FAQs →</a>
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS — SEO JUICE */}
      <section className="section-spacing" style={{ background: 'linear-gradient(180deg, var(--dark) 0%, rgba(30,58,138,0.06) 50%, var(--dark) 100%)' }}>
        <div className="container-main">
          <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <span className="gold-text">Quick Links</span> — Explore Our Services
          </h2>
          <div className="internal-links-grid">
            <a href="/fare-chart" className="internal-link">📊 Fare Chart 2026</a>
            <a href="/faq" className="internal-link">❓ FAQ</a>
            <a href="/about" className="internal-link">ℹ️ About Us</a>
            <a href="/contact" className="internal-link">📞 Contact</a>
            {jharkhandCities.slice(0, 8).map(city => (
              <a key={city.slug} href={`/cab-service-${city.slug}`} className="internal-link">🏙️ Cab in {city.name}</a>
            ))}
            {services.filter(s => s.slug !== 'pilgrimage-cab').slice(0, 6).map(s => (
              <a key={s.slug} href={`/jamshedpur/${s.slug}`} className="internal-link">{s.icon} {s.shortName}</a>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="section-spacing" style={{ background: 'var(--darker)' }}>
        <div className="container-main">
          <BlogSection pageName="Jharkhand" />
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
