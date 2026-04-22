import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Sree Travels | Best Cab Service in Jamshedpur (Tata) & Ranchi | ☎ +919204714249",
    template: "%s | Sree Travels — Jharkhand's #1 Cab Service",
  },
  description:
    "Book the best cab service in Jamshedpur (Tata/Tatanagar) & Ranchi, Jharkhand ✅ Jamshedpur ✅ Tata ✅ Ranchi ✅ Dhanbad ✅ Bokaro ✅ Hazaribagh — AC cabs from ₹999, 24/7 taxi service, police-verified drivers, GPS tracked fleet. One way, round trip, outstation, airport & local taxi. Tata to Ranchi cab ₹2,499. Call +919204714249. Sree Travels — Trusted since 2015. 50,000+ happy customers.",
  keywords: [
    // Core brand
    "sree travels", "sree travels jamshedpur", "sree travels tata", "sree cab service", "sreetravel",
    // Jamshedpur / Tata / Tatanagar variants (PRIMARY)
    "cab service in jamshedpur", "cab service jamshedpur", "taxi jamshedpur", "taxi in jamshedpur",
    "cab service in tata", "tata cab service", "cab in tata nagar", "taxi tata", "tatanagar taxi",
    "tata jamshedpur cab", "tatanagar cab booking", "car rental jamshedpur", "car rental tata",
    "best cab service in jamshedpur", "best taxi service in tata", "cab booking jamshedpur",
    "taxi service jamshedpur", "taxi service tata", "cab near me jamshedpur", "taxi near me tata",
    // Ranchi variants (SECONDARY)
    "cab service ranchi", "cab service in ranchi", "taxi ranchi", "taxi in ranchi",
    "car rental ranchi", "cab booking ranchi", "taxi service ranchi", "best cab service ranchi",
    "cab near me ranchi", "taxi near me ranchi", "ranchi airport cab", "ranchi airport taxi",
    // Dhanbad, Bokaro, Hazaribagh
    "cab service dhanbad", "cab dhanbad", "taxi dhanbad", "cab bokaro", "taxi bokaro",
    "cab service bokaro", "cab hazaribagh", "taxi hazaribagh", "cab service hazaribagh",
    "cab booking dhanbad", "cab booking bokaro",
    // Service-specific
    "one way cab jamshedpur", "one way cab tata", "round trip cab jharkhand", "outstation cab jamshedpur",
    "outstation cab tata", "airport cab jamshedpur", "airport taxi ranchi", "local taxi jamshedpur",
    "local taxi tata", "corporate cab jharkhand", "wedding car rental jamshedpur",
    // Route-specific high-volume (PRIMARY ROUTES)
    "jamshedpur to ranchi cab", "tata to ranchi cab", "tatanagar to ranchi cab",
    "ranchi to jamshedpur cab", "ranchi to tata cab", "ranchi to tatanagar cab",
    "jamshedpur to kolkata cab", "tata to kolkata cab",
    "ranchi to patna cab", "ranchi to kolkata cab",
    "dhanbad to kolkata cab", "dhanbad to ranchi cab",
    "bokaro to ranchi cab", "bokaro to jamshedpur cab",
    "jamshedpur to puri cab", "tata to puri cab",
    "jamshedpur to dhanbad cab", "tata to dhanbad cab",
    "jamshedpur to bokaro cab", "jamshedpur to deoghar cab",
    "jamshedpur to patna cab", "ranchi to dhanbad cab",
    // Long-tail
    "best cab service in jamshedpur tata", "cheapest taxi in ranchi", "cheapest cab in jamshedpur",
    "reliable cab service jharkhand", "24/7 taxi service jamshedpur", "24/7 cab service tata",
    "AC cab booking online jharkhand", "verified driver cab jamshedpur",
    "cab service near me jharkhand", "taxi near me jamshedpur tata",
    // Fleet
    "innova cab jamshedpur", "innova cab tata", "ertiga cab ranchi", "swift dzire taxi jharkhand",
    "tempo traveller jharkhand", "innova crysta on rent jamshedpur", "innova crysta tata",
    // Near-me & voice search
    "cab service near me", "taxi near me", "book cab online", "book taxi online jamshedpur",
    "best taxi service near me jharkhand", "affordable cab booking",
    // Comparison / alternative
    "ola alternative jamshedpur", "uber alternative ranchi", "ola alternative tata",
    // Jharkhand state
    "cab service jharkhand", "best cab service jharkhand", "taxi service jharkhand",
    "car rental jharkhand", "outstation cab jharkhand",
  ],
  metadataBase: new URL("https://www.sreetravel.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.sreetravel.com",
    siteName: "Sree Travels",
    title: "Sree Travels | Best Cab Service in Jamshedpur (Tata) & Ranchi, Jharkhand",
    description: "Book reliable AC cab service in Jamshedpur (Tata/Tatanagar), Ranchi, Dhanbad, Bokaro & 15+ Jharkhand cities. Police-verified drivers, fixed pricing, 24/7 availability. Tata to Ranchi cab ₹2,499. 50,000+ happy customers. Call +919204714249.",
    images: [
      {
        url: "/background/IMG-20250403-WA0019.jpg",
        width: 1200,
        height: 630,
        alt: "Sree Travels — Best Cab Service in Jamshedpur Tata & Ranchi Jharkhand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sree Travels — #1 Cab Service in Jamshedpur/Tata & Ranchi | ☎ +919204714249",
    description: "Book AC cab in Jamshedpur (Tata), Ranchi, Dhanbad, Bokaro. 24/7, verified drivers, ₹11/km. Call +919204714249.",
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
    canonical: 'https://www.sreetravel.com',
  },
  other: {
    'geo.region': 'IN-JH',
    'geo.placename': 'Jamshedpur, Tata, Jharkhand',
    'geo.position': '22.8046;86.2029',
    'ICBM': '22.8046, 86.2029',
    'author': 'Sree Travels',
    'format-detection': 'telephone=yes',
  },
  verification: {},
  category: 'travel',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#f59e0b" />
        <link rel="alternate" hrefLang="en-IN" href="https://www.sreetravel.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.sreetravel.com" />
        {/* TaxiService + LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "TaxiService"],
              "@id": "https://www.sreetravel.com/#organization",
              name: "Sree Travels",
              alternateName: ["Sree Cab Service", "Sree Travels Jamshedpur", "Sree Travels Tata", "Sree Travels Ranchi"],
              url: "https://www.sreetravel.com",
              logo: "https://www.sreetravel.com/logo.webp",
              image: [
                "https://www.sreetravel.com/logo.webp",
                "https://www.sreetravel.com/background/IMG-20250403-WA0019.jpg",
              ],
              telephone: "+919204714249",
              email: "info@sreetravel.com",
              foundingDate: "2015",
              description: "Best cab service in Jamshedpur (Tata/Tatanagar) & Ranchi, Jharkhand. Trusted since 2015 with 100+ verified cabs, police-verified drivers, GPS tracking, and transparent pricing. Available 24/7 for local taxi, outstation cab, airport transfer, and corporate car rental across 15+ cities in Jharkhand.",
              slogan: "Jharkhand's Most Trusted Cab Service Since 2015",
              knowsAbout: ["Cab Service", "Taxi Booking", "Car Rental", "Airport Transfer", "Outstation Cab", "Local Taxi"],
              knowsLanguage: ["Hindi", "English"],
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
                { "@type": "City", name: "Jamshedpur", alternateName: "Tata" },
                { "@type": "City", name: "Tatanagar", alternateName: "Tata Nagar" },
                { "@type": "City", name: "Ranchi" },
                { "@type": "City", name: "Dhanbad" },
                { "@type": "City", name: "Bokaro Steel City", alternateName: "Bokaro" },
                { "@type": "City", name: "Hazaribagh" },
                { "@type": "City", name: "Deoghar" },
                { "@type": "City", name: "Giridih" },
                { "@type": "City", name: "Dumka" },
                { "@type": "City", name: "Chaibasa" },
                { "@type": "City", name: "Adityapur", alternateName: "Gamharia" },
                { "@type": "City", name: "Ramgarh" },
                { "@type": "City", name: "Daltonganj", alternateName: "Medininagar" },
                { "@type": "City", name: "Kolkata", alternateName: "Calcutta" },
                { "@type": "State", name: "Jharkhand" },
                { "@type": "State", name: "West Bengal" },
                { "@type": "GeoCircle", geoMidpoint: { "@type": "GeoCoordinates", latitude: 22.8046, longitude: 86.2029 }, geoRadius: "300000" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Cab Services in Jamshedpur Tata & Ranchi",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "One Way Cab", description: "Affordable one-way cab from Jamshedpur/Tata, Ranchi & all Jharkhand cities" }, price: "1799", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Round Trip Cab", description: "Round trip cab service with same driver, 10% discount" }, price: "2999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Outstation Cab", description: "Outstation cab from Jamshedpur/Tata to Ranchi, Kolkata, Patna & more" }, price: "1999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Airport Transfer", description: "Ranchi Airport & Kolkata Airport cab transfer" }, price: "1499", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Local Taxi", description: "Hourly local taxi rental in Jamshedpur, Ranchi, Dhanbad" }, price: "799", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Car Rental", description: "Monthly corporate cab packages with GST billing" }, price: "15999", priceCurrency: "INR" },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Car Rental", description: "Decorated wedding cars with professional chauffeur" }, price: "4999", priceCurrency: "INR" },
                ],
              },
              priceRange: "₹999 - ₹25,000",
              currenciesAccepted: "INR",
              paymentAccepted: "Cash, UPI, Google Pay, PhonePe, Paytm, Credit Card, Debit Card",
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
              review: [
                { "@type": "Review", author: { "@type": "Person", name: "Rajesh Kumar" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Best cab service in Tata! I regularly book Sree Travels for car rental in Jamshedpur. Always punctual from Tatanagar station." },
                { "@type": "Review", author: { "@type": "Person", name: "Priya Singh" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Took an Innova for Tata to Ranchi cab service. Driver was very professional. Highly recommended!" },
                { "@type": "Review", author: { "@type": "Person", name: "Sanjay Verma" }, reviewRating: { "@type": "Rating", ratingValue: "5" }, reviewBody: "Excellent car rental in Ranchi! I use their Ranchi to Tata cab service weekly. Very punctual and affordable." },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61572039087941",
                "https://www.instagram.com/sreetravel.in/",
                "https://www.linkedin.com/in/sreetravel/",
                "https://g.page/r/CQtNNAPh6kJlEBM"
              ],
              potentialAction: {
                "@type": "ReserveAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://wa.me/919204714249?text=Hi%20Sree%20Travels%2C%20I%20want%20to%20book%20a%20cab",
                  actionPlatform: ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
                },
                result: { "@type": "Reservation", name: "Cab Booking" },
              },
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
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.sreetravel.com/#organization",
              name: "Sree Travels",
              url: "https://www.sreetravel.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.sreetravel.com/logo.webp",
                width: 200,
                height: 200,
              },
              foundingDate: "2015",
              founder: { "@type": "Person", name: "Sree Travels Team" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+919204714249",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["Hindi", "English"],
              },
              sameAs: [
                "https://www.facebook.com/profile.php?id=61572039087941",
                "https://www.instagram.com/sreetravel.in/",
                "https://www.linkedin.com/in/sreetravel/",
                "https://g.page/r/CQtNNAPh6kJlEBM"
              ],
            }),
          }}
        />
      </head>
      <body id="top" className={inter.className}>
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
                <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                  <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(66,133,244,0.15)', border: '1px solid rgba(66,133,244,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4285F4', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61572039087941" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.instagram.com/sreetravel.in/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/sreetravel/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  <a href="https://wa.me/919204714249" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#25D366', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </a>
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
                  <li><a href="/fare-chart">📊 Fare Chart</a></li>
                  <li><a href="/faq">❓ FAQ</a></li>
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

            {/* Google Business Review CTA */}
            <div style={{ textAlign: 'center', margin: '2rem 0 1.5rem', padding: '1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '16px', border: '1px solid rgba(66,133,244,0.15)' }}>
              <p style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>⭐ Rated 4.8/5 on Google — 2,800+ Happy Customers</p>
              <p style={{ fontSize: 'clamp(0.78rem, 2vw, 0.88rem)', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Your feedback helps us serve Jharkhand better! Leave us a review on Google.</p>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(66,133,244,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                ⭐ Rate Us on Google
              </a>
            </div>

            <div className="footer-bottom">
              <p>© {new Date().getFullYear()} Sree Travels. All rights reserved. | Jharkhand&apos;s #1 Cab Service Since 2015 | <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Google Verified Business</a></p>
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
      {/* Google Analytics (gtag.js) — using next/script for optimal loading */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-F8MDEJ8F61"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F8MDEJ8F61');
        `}
      </Script>
    </html>
  );
}
