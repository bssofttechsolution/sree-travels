import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";
export const metadata: Metadata = {
  title: {
    default: "Sree Travels | Best Cab Service in Jharkhand | Book Online ☎ +919204714249",
    template: "%s | Sree Travels — Jharkhand's #1 Cab Service",
  },
  description:
    "Book the best cab service in Jharkhand ✅ Jamshedpur ✅ Ranchi ✅ Dhanbad ✅ Bokaro ✅ Deoghar — AC cabs from ₹999, 24/7 service, police-verified drivers, GPS tracked fleet. One way, round trip, outstation, airport & local taxi. Call +919204714249. Sree Travels — Trusted since 2015. 50,000+ happy customers.",
  keywords: [
    // Core brand
    "sree travels", "sree travels jamshedpur", "sree cab service",
    // City-level
    "cab service jharkhand", "taxi jamshedpur", "cab ranchi", "cab dhanbad", "cab bokaro",
    "taxi service jamshedpur", "taxi service ranchi", "taxi service dhanbad",
    "cab booking jamshedpur", "cab booking ranchi", "cab booking dhanbad",
    "car rental jamshedpur", "car hire ranchi", "car rental jharkhand",
    // Service-specific
    "one way cab jamshedpur", "round trip cab jharkhand", "outstation cab jamshedpur",
    "airport cab jamshedpur", "airport taxi ranchi", "local taxi jamshedpur",
    "corporate cab jharkhand", "wedding car rental jamshedpur",
    // Route-specific high-volume
    "jamshedpur to ranchi cab", "jamshedpur to kolkata cab", "ranchi to patna cab",
    "dhanbad to kolkata cab", "bokaro to ranchi cab", "jamshedpur to puri cab",
    "ranchi to kolkata taxi", "jamshedpur to deoghar cab",
    // Long-tail
    "best cab service in jamshedpur", "cheapest taxi in ranchi",
    "reliable cab service jharkhand", "24/7 taxi service jamshedpur",
    "AC cab booking online jharkhand", "verified driver cab jamshedpur",
    "taxi near me jamshedpur", "cab near me ranchi", "taxi near me dhanbad",
    // Fleet
    "innova cab jamshedpur", "ertiga cab ranchi", "swift dzire taxi jharkhand",
    "tempo traveller jharkhand", "innova crysta on rent jamshedpur",
    // Near-me & voice search
    "cab service near me", "taxi near me", "book cab online",
    "best taxi service near me jharkhand", "affordable cab booking",
    // Comparison
    "ola alternative jamshedpur", "uber alternative ranchi",
  ],
  metadataBase: new URL("https://www.sreetravel.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sreetravel.com",
    siteName: "Sree Travels",
    title: "Sree Travels | Best Cab Service in Jharkhand | ☎ +919204714249",
    description: "Book reliable AC cab service in Jharkhand — Jamshedpur, Ranchi, Dhanbad, Bokaro & 15+ cities. Police-verified drivers, fixed pricing, 24/7 availability. 50,000+ happy customers. Call +919204714249.",
    images: [
      {
        url: "/background/IMG-20250403-WA0019.jpg",
        width: 1200,
        height: 630,
        alt: "Sree Travels — Premium Cab Service in Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Travels — Jharkhand's #1 Cab Service | ☎ +919204714249",
    description: "Book AC cab in Jharkhand — Jamshedpur, Ranchi, Dhanbad, Bokaro. 24/7, verified drivers, fixed pricing. Call +919204714249.",
    images: ["/background/IMG-20250403-WA0019.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.sreetravel.com",
  },
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Jamshedpur',
    'geo.position': '22.8046;86.2029',
    'ICBM': '22.8046, 86.2029',
    'rating': 'general',
    'revisit-after': '3 days',
    'author': 'Sree Travels',
    'language': 'English',
    'distribution': 'global',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'travel',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f59e0b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* TaxiService + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["TaxiService", "LocalBusiness"],
              "@id": "https://www.sreetravel.com/#organization",
              name: "Sree Travels",
              alternateName: "Sree Cab Service",
              url: "https://www.sreetravel.com",
              logo: "https://www.sreetravel.com/logo.webp",
              image: "https://www.sreetravel.com/background/IMG-20250403-WA0019.jpg",
              telephone: "+919204714249",
              email: "info@sreetravel.com",
              foundingDate: "2015",
              description: "Jharkhand's most trusted cab service since 2015. Serving 15+ cities with 100+ verified cabs, police-verified drivers, and transparent pricing. Available 24/7 for local, outstation, airport transfers, and corporate travel.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dimna Road, Mango",
                addressLocality: "Jamshedpur",
                addressRegion: "Jharkhand",
                postalCode: "831018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.8046,
                longitude: 86.2029,
              },
              areaServed: [
                { "@type": "City", name: "Jamshedpur" },
                { "@type": "City", name: "Ranchi" },
                { "@type": "City", name: "Dhanbad" },
                { "@type": "City", name: "Bokaro Steel City" },
                { "@type": "City", name: "Deoghar" },
                { "@type": "City", name: "Hazaribagh" },
                { "@type": "City", name: "Giridih" },
                { "@type": "City", name: "Dumka" },
                { "@type": "City", name: "Chaibasa" },
                { "@type": "City", name: "Adityapur" },
                { "@type": "State", name: "Jharkhand" },
                { "@type": "State", name: "West Bengal" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cab Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "One Way Cab" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Round Trip Cab" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Taxi" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Car Rental" } },
                ],
              },
              priceRange: "₹999 - ₹25,000",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Card",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "2847",
                bestRating: "5",
                worstRating: "1",
              },
              sameAs: [
                "https://www.facebook.com/sreetravels",
                "https://www.instagram.com/sreetravels",
              ],
            }),
          }}
        />
        {/* WebSite Schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Sree Travels",
              url: "https://www.sreetravel.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.sreetravel.com/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body id="top">
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="site-footer">
          <div className="container-main">
            <div className="footer-grid">
              <div className="footer-section">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', borderRadius: '12px', padding: '0.2rem' }}>
                    <Image src="/logo.webp" alt="Sree Travels Logo" width={48} height={48} style={{ borderRadius: '8px' }} />
                  </div>
                  <h3 style={{ margin: 0 }}>Sree Travels</h3>
                </div>
                <p>
                  Jharkhand&apos;s most trusted cab service since 2015. We serve 15+ cities with 100+ verified
                  cabs, police-verified drivers, and transparent pricing. Available 24/7 for local, outstation,
                  airport transfers, and corporate travel.
                </p>
                <p style={{ marginTop: '0.75rem' }}>
                  📍 Dimna Road, Mango, Jamshedpur, Jharkhand – 831018<br />
                  📞 +91 92047 14249<br />
                  ✉️ info@sreetravel.com
                </p>
                {/* Social Media Links */}
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
                  <a href="https://www.facebook.com/sreetravels" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s ease' }}>f</a>
                  <a href="https://www.instagram.com/sreetravels" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s ease' }}>📷</a>
                  <a href="https://wa.me/919204714249" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', textDecoration: 'none', fontSize: '1rem', transition: 'all 0.3s ease' }}>💬</a>
                </div>
              </div>
              <div className="footer-section">
                <h3>🏙️ Our Cities</h3>
                <ul className="footer-links">
                  <li><a href="/cab-service-jamshedpur">Cab Jamshedpur</a></li>
                  <li><a href="/cab-service-ranchi">Cab Ranchi</a></li>
                  <li><a href="/cab-service-dhanbad">Cab Dhanbad</a></li>
                  <li><a href="/cab-service-bokaro">Cab Bokaro</a></li>
                  <li><a href="/cab-service-deoghar">Cab Deoghar</a></li>
                  <li><a href="/cab-service-hazaribagh">Cab Hazaribagh</a></li>
                  <li><a href="/cab-service-giridih">Cab Giridih</a></li>
                  <li><a href="/cab-service-dumka">Cab Dumka</a></li>
                  <li><a href="/cab-service-chaibasa">Cab Chaibasa</a></li>
                  <li><a href="/cab-service-adityapur">Cab Adityapur</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>🚗 Services</h3>
                <ul className="footer-links">
                  <li><a href="/jamshedpur/one-way-cab">One Way Cab</a></li>
                  <li><a href="/jamshedpur/round-trip-cab">Round Trip Cab</a></li>
                  <li><a href="/jamshedpur/outstation-cab">Outstation Cab</a></li>
                  <li><a href="/jamshedpur/local-taxi">Local Taxi</a></li>
                  <li><a href="/jamshedpur/airport-cab">Airport Cab</a></li>
                  <li><a href="/jamshedpur/wedding-cab">Wedding Cab</a></li>
                  <li><a href="/jamshedpur/corporate-cab">Corporate Cab</a></li>
                  <li><a href="/jamshedpur/pilgrimage-cab">Pilgrimage Cab</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>🛣️ Popular Routes</h3>
                <ul className="footer-links">
                  <li><a href="/jamshedpur-to-kolkata-cab">Jamshedpur → Kolkata</a></li>
                  <li><a href="/jamshedpur-to-ranchi-cab">Jamshedpur → Ranchi</a></li>
                  <li><a href="/ranchi-to-kolkata-cab">Ranchi → Kolkata</a></li>
                  <li><a href="/dhanbad-to-kolkata-cab">Dhanbad → Kolkata</a></li>
                  <li><a href="/bokaro-to-ranchi-cab">Bokaro → Ranchi</a></li>
                  <li><a href="/jamshedpur-to-puri-cab">Jamshedpur → Puri</a></li>
                  <li><a href="/ranchi-to-patna-cab">Ranchi → Patna</a></li>
                  <li><a href="/jamshedpur-to-deoghar-cab">Jamshedpur → Deoghar</a></li>
                  <li><a href="/dhanbad-to-ranchi-cab">Dhanbad → Ranchi</a></li>
                </ul>
              </div>
            </div>

            {/* SEO Keywords Footer Block */}
            <div style={{ padding: '1.5rem 0', borderTop: '1px solid var(--card-border)', marginBottom: '1rem' }}>
              <p style={{ color: 'rgba(148,163,184,0.5)', fontSize: '0.75rem', lineHeight: 1.8, textAlign: 'center' }}>
                cab service jamshedpur • taxi jamshedpur • cab ranchi • taxi ranchi • cab dhanbad • cab bokaro • outstation cab jharkhand • 
                one way cab jamshedpur • airport taxi ranchi • car rental jharkhand • jamshedpur to ranchi cab • jamshedpur to kolkata cab • 
                ranchi to patna taxi • dhanbad to kolkata cab • bokaro to ranchi cab • cab near me • taxi near me jharkhand • 
                innova cab jamshedpur • ertiga on rent ranchi • tempo traveller jharkhand • best cab service jharkhand • 
                24/7 taxi service • sree travels • sreetravel.com
              </p>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Sree Travels. All rights reserved. | Jharkhand&apos;s #1 Cab Service Since 2015</p>
              <p style={{ marginTop: '0.25rem' }}>📞 +91 92047 14249 | ✉️ info@sreetravel.com | 🌐 sreetravel.com</p>
            </div>
          </div>
        </footer>

        {/* Floating Action Buttons */}
        <div className="floating-buttons">
          <a
            href="https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab"
            target="_blank"
            rel="noopener noreferrer"
            className="float-btn float-wa"
            aria-label="Chat on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 0C5.398 0 0 5.398 0 12.031c0 2.12.553 4.195 1.603 6.012L.15 23.361l5.46-1.431A12.008 12.008 0 0012.03 24c6.633 0 12.031-5.398 12.031-12.031S18.664 0 12.031 0zm0 22.012c-1.782 0-3.528-.482-5.06-1.39l-.364-.217-3.766.986.995-3.666-.237-.378a10.021 10.021 0 01-1.536-5.316c0-5.541 4.512-10.053 10.053-10.053 5.54 0 10.051 4.511 10.051 10.053 0 5.541-4.51 10.05-10.05 10.05zm5.518-7.534c-.302-.152-1.793-.886-2.072-.988-.28-.101-.484-.152-.686.151-.202.302-.784.988-.962 1.19-.178.201-.357.227-.659.075-1.921-.973-3.3-2.617-3.87-3.593-.19-.323-.021-.497.132-.647.137-.137.302-.354.453-.53.151-.178.201-.303.302-.505.101-.203.05-.38-.026-.53s-.686-1.65-.939-2.261c-.247-.59-.497-.509-.686-.518-.178-.01-.382-.01-.584-.01-.202 0-.53.076-.808.38C6.915 8.1 6.132 8.834 6.132 10.323c0 1.49 1.159 2.932 1.32 3.146.161.215 2.144 3.275 5.19 4.516.726.297 1.291.473 1.733.606.727.23 1.385.198 1.905.12.58-.086 1.793-.732 2.045-1.442.251-.708.251-1.314.177-1.44-.075-.13-.279-.204-.582-.355z"/>
            </svg>
          </a>
          <a href="tel:+919204714249" className="float-btn float-call" aria-label="Call Now">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>

        {/* Mobile CTA bar removed — floating buttons provide WhatsApp + Call access */}
        {/* Back to Top */}
        <a href="#top" className="back-to-top" aria-label="Scroll to top">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
        </a>
      </body>
    </html>
  );
}
