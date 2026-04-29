import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { jharkhandCities, getCityBySlug } from '@/lib/cities';
import { services, getServiceBySlug, getServicesForCity } from '@/lib/services';
import { fleet, getFleetBySlug, getFleetForCity } from '@/lib/fleet';
import { routes, getRoute, getRoutesByFrom, parseRouteSlug } from '@/lib/routes';
import { localRoutes, getLocalRoute, getLocalRoutesByCity } from '@/lib/localRoutes';
import BookingWidget from '@/components/BookingWidget';
import FaqSection from '@/components/FaqSection';
import Breadcrumb from '@/components/Breadcrumb';
import CtaBanner from '@/components/CtaBanner';
import SchemaMarkup from '@/components/SchemaMarkup';
import HeroSlider from '@/components/HeroSlider';
import BlogSection from '@/components/BlogSection';
import FareCalculator from '@/components/FareCalculator';

// ============================================================
// ROUTE MATCHING
// ============================================================

type PageType =
  | { type: 'city-hub'; citySlug: string }
  | { type: 'service-in-city'; citySlug: string; serviceSlug: string }
  | { type: 'fleet-in-city'; citySlug: string; fleetSlug: string }
  | { type: 'outstation-route'; from: string; to: string }
  | { type: 'local-route'; citySlug: string; routeSlug: string };

function matchRoute(slugParts: string[]): PageType | null {
  // Single segment routes
  if (slugParts.length === 1) {
    const slug = slugParts[0];

    // City Hub: /cab-service-[city]
    if (slug.startsWith('cab-service-')) {
      const citySlug = slug.replace('cab-service-', '');
      if (getCityBySlug(citySlug)) {
        return { type: 'city-hub', citySlug };
      }
    }

    // Outstation Route: /[from]-to-[to]-cab
    const routeParsed = parseRouteSlug(slug);
    if (routeParsed) {
      const route = getRoute(routeParsed.from, routeParsed.to);
      if (route) {
        return { type: 'outstation-route', from: routeParsed.from, to: routeParsed.to };
      }
    }
  }

  // Two-segment routes
  if (slugParts.length === 2) {
    const [first, second] = slugParts;

    // Local Route: /local-taxi-[city]/[area-route]
    if (first.startsWith('local-taxi-')) {
      const citySlug = first.replace('local-taxi-', '');
      const localRoute = getLocalRoute(citySlug, second);
      if (localRoute) {
        return { type: 'local-route', citySlug, routeSlug: second };
      }
    }

    // Service or Fleet in City: /[city]/[service-or-fleet]
    const city = getCityBySlug(first);
    if (city) {
      const service = getServiceBySlug(second);
      if (service) {
        return { type: 'service-in-city', citySlug: first, serviceSlug: second };
      }
      const vehicle = getFleetBySlug(second);
      if (vehicle) {
        return { type: 'fleet-in-city', citySlug: first, fleetSlug: second };
      }
    }
  }

  return null;
}

// ============================================================
// STATIC PARAMS
// ============================================================

export async function generateStaticParams() {
  const params: { slug: string[] }[] = [];

  // City hub pages
  jharkhandCities.forEach(city => {
    params.push({ slug: [`cab-service-${city.slug}`] });
  });

  // Service-in-city pages
  jharkhandCities.forEach(city => {
    services.forEach(service => {
      params.push({ slug: [city.slug, service.slug] });
    });
  });

  // Fleet-in-city pages
  jharkhandCities.forEach(city => {
    fleet.forEach(vehicle => {
      params.push({ slug: [city.slug, vehicle.slug] });
    });
  });

  // Route pages
  routes.forEach(route => {
    params.push({ slug: [`${route.from}-to-${route.to}-cab`] });
  });

  // Local route pages
  localRoutes.forEach(route => {
    params.push({ slug: [`local-taxi-${route.city}`, route.slug] });
  });

  return params;
}

// ============================================================
// METADATA
// ============================================================

interface PageProps {
  params: { slug: string[] };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const matched = matchRoute(params.slug);
  if (!matched) return {};

  switch (matched.type) {
    case 'city-hub': {
      const city = getCityBySlug(matched.citySlug)!;
      const isJSR = city.slug === 'jamshedpur';
      const isRanchi = city.slug === 'ranchi';
      const titleName = isJSR ? 'Jamshedpur (Tata)' : city.name;
      const seoName = isJSR ? 'Jamshedpur, Tatanagar' : city.name;
      const customTitle = city.seoTitle || `Cab Service ${titleName} 2026 | ₹${city.localFare.hatchback_4hr} | Sree Travels`;
      return {
        title: customTitle,
        description: `#1 cab in ${isJSR ? 'Jamshedpur (Tata)' : city.name} ✅ AC cabs ₹${city.localFare.hatchback_4hr} onwards ✅ 24/7 ✅ Verified drivers ✅ GPS tracked. Outstation, airport & local taxi. ☎ +919204714249`,
        keywords: [
          `cab service ${city.name.toLowerCase()}`, `taxi ${city.name.toLowerCase()}`, `taxi service ${city.name.toLowerCase()}`,
          `cab booking ${city.name.toLowerCase()}`, `car rental ${city.name.toLowerCase()}`, `best cab ${city.name.toLowerCase()}`,
          `outstation cab ${city.name.toLowerCase()}`, `airport taxi ${city.name.toLowerCase()}`, `local taxi ${city.name.toLowerCase()}`,
          ...(isJSR ? ['cab service in tata', 'tatanagar taxi', 'car rental tata', 'tata cab service', 'tatanagar cab booking', 'tata taxi booking online', 'jamshedpur to ranchi cab 2026', 'tata to ranchi cab fare'] : []),
          ...(isRanchi ? ['ranchi airport cab', 'birsa munda airport taxi', 'ranchi to jamshedpur cab 2026', 'ranchi to tata cab fare', 'hatia station cab'] : []),
          `24/7 cab ${city.name.toLowerCase()}`, `cab near me ${city.name.toLowerCase()}`, `taxi near me ${city.name.toLowerCase()}`,
          `one way cab ${city.name.toLowerCase()}`, `round trip cab ${city.name.toLowerCase()}`,
          `cheapest cab ${city.name.toLowerCase()}`, `sree travels ${city.name.toLowerCase()}`,
          `best cab service ${city.name.toLowerCase()} 2026`, `cab booking online ${city.name.toLowerCase()}`,
          ...(city.hindiKeywords || []),
          ...(city.nearMeKeywords || []),
          ...(city.localKeywords || []),
        ],
        alternates: { canonical: `https://sreetravel.com/cab-service-${city.slug}` },
        openGraph: {
          title: `Best Cab Service in ${titleName} 2026 | Sree Travels`,
          description: `Book AC cab in ${seoName}. One way, round trip, outstation, airport & local. ₹${city.localFare.hatchback_4hr} onwards. Verified drivers, GPS tracked. ☎ +919204714249`,
          url: `https://sreetravel.com/cab-service-${city.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `Best Cab Service in ${titleName} — Sree Travels Jharkhand` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: `Best Cab Service in ${titleName} 2026 | Sree Travels`,
          description: `₹${city.localFare.hatchback_4hr} onwards. 24/7 AC cab, verified drivers. ☎ +919204714249`,
          images: ['/background/IMG-20250403-WA0019.jpg'],
        },
        other: {
          'geo.region': 'IN-JH',
          'geo.placename': `${city.name}, ${city.district}, Jharkhand`,
          'geo.position': `${city.latitude};${city.longitude}`,
          'ICBM': `${city.latitude}, ${city.longitude}`,
          'dateModified': '2026-04-23',
          'revisit-after': '7 days',
          'language': 'English, Hindi',
          'coverage': 'Jharkhand, India',
          'distribution': 'global',
          'rating': 'general',
        },
      };
    }
    case 'service-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const service = getServiceBySlug(matched.serviceSlug)!;
      const isJSR = city.slug === 'jamshedpur';
      const titleName = isJSR ? 'Jamshedpur/Tata' : city.name;
      return {
        title: `${service.name} ${titleName} ₹${service.startingPrice} | Sree Travels`,
        description: `${service.name} in ${isJSR ? 'Jamshedpur/Tata' : city.name} from ₹${service.startingPrice} ${service.priceUnit}. AC cab, verified driver, GPS tracked. 24/7 booking ☎ +919204714249`,
        keywords: [
          `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`,
          ...(isJSR ? [`${service.name.toLowerCase()} tata`, `${service.name.toLowerCase()} tatanagar`] : []),
          `book ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.slug.replace(/-/g, ' ')} ${city.name.toLowerCase()}`,
          `cheap ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `best ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://sreetravel.com/${city.slug}/${service.slug}` },
        openGraph: {
          title: `${service.name} in ${titleName} | Sree Travels`,
          description: `₹${service.startingPrice} ${service.priceUnit}. Book now ☎ +919204714249`,
          url: `https://sreetravel.com/${city.slug}/${service.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${service.name} in ${titleName}` }],
        },
      };
    }
    case 'fleet-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const vehicle = getFleetBySlug(matched.fleetSlug)!;
      return {
        title: `${vehicle.shortName} ${city.name} ₹${vehicle.perKmRate}/km | Hire 2026`,
        description: `Hire ${vehicle.shortName} in ${city.name} ₹${vehicle.perKmRate}/km. ${vehicle.seatingCapacity}-seater AC, GPS tracked, verified driver. ☎ +919204714249`,
        keywords: [
          `${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} on rent ${city.name.toLowerCase()}`,
          `hire ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} cab ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} taxi ${city.name.toLowerCase()}`,
          `book ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://sreetravel.com/${city.slug}/${vehicle.slug}` },
        openGraph: {
          title: `${vehicle.name} in ${city.name} | Sree Travels`,
          description: `₹${vehicle.perKmRate}/km | ${vehicle.seatingCapacity} seater. Book now ☎ +919204714249`,
          url: `https://sreetravel.com/${city.slug}/${vehicle.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${vehicle.name} in ${city.name}` }],
        },
      };
    }
    case 'outstation-route': {
      const route = getRoute(matched.from, matched.to)!;
      const isFromJSR = matched.from === 'jamshedpur';
      const isToJSR = matched.to === 'jamshedpur';
      const fromCity = getCityBySlug(matched.from);
      
      const fromName = isFromJSR ? 'Jamshedpur/Tata' : route.fromName;
      const toName = isToJSR ? 'Jamshedpur/Tata' : route.toName;
      const seoFromName = isFromJSR ? 'Jamshedpur (Tata)' : route.fromName;
      const seoToName = isToJSR ? 'Jamshedpur (Tata)' : route.toName;

      // Hindi route keywords
      const hindiRouteKw: string[] = [];
      if (isFromJSR) hindiRouteKw.push(`जमशेदपुर से ${route.toName} कैब`, `टाटा से ${route.toName} टैक्सी`);
      if (isToJSR) hindiRouteKw.push(`${route.fromName} से जमशेदपुर कैब`, `${route.fromName} से टाटा टैक्सी`);
      if (matched.from === 'ranchi') hindiRouteKw.push(`रांची से ${route.toName} कैब`);
      if (matched.to === 'ranchi') hindiRouteKw.push(`${route.fromName} से रांची कैब`);

      return {
        title: `${seoFromName} to ${seoToName} Cab ₹${route.fares.hatchback.toLocaleString()} | 2026`,
        description: `${seoFromName}→${seoToName} cab ₹${route.fares.hatchback.toLocaleString()}. ${route.distanceKm}km, ${route.durationHrs}hrs. AC, toll included, verified driver. 24/7 ☎ +919204714249`,
        keywords: [
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab fare 2026`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab booking`,
          ...(isFromJSR ? [`tata to ${route.toName.toLowerCase()} cab`, `tatanagar to ${route.toName.toLowerCase()} cab`, `car rental tata to ${route.toName.toLowerCase()}`, `tata to ${route.toName.toLowerCase()} taxi fare 2026`] : []),
          ...(isToJSR ? [`${route.fromName.toLowerCase()} to tata cab`, `${route.fromName.toLowerCase()} to tatanagar taxi`, `${route.fromName.toLowerCase()} to tata cab fare 2026`] : []),
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} distance`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} one way cab`,
          `cab from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `taxi from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `cheapest cab ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `outstation cab ${route.fromName.toLowerCase()}`,
          `${route.fromName.toLowerCase()} ${route.toName.toLowerCase()} cab booking`,
          `how much ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} by car`,
          ...hindiRouteKw,
        ],
        alternates: { canonical: `https://sreetravel.com/${route.from}-to-${route.to}-cab` },
        openGraph: {
          title: `${fromName} to ${toName} Cab 2026 \u2014 \u20b9${route.fares.hatchback.toLocaleString()} Onwards`,
          description: `${route.distanceKm}km \u2022 ${route.durationHrs}hrs. AC cab, toll included, verified driver. Book now \u260e +919204714249`,
          url: `https://sreetravel.com/${route.from}-to-${route.to}-cab`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${seoFromName} to ${seoToName} Cab Service — Sree Travels` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: `${seoFromName} to ${seoToName} Cab \u2014 \u20b9${route.fares.hatchback.toLocaleString()}`,
          description: `${route.distanceKm}km, ${route.durationHrs}hrs. Book \u260e +919204714249`,
        },
        other: {
          'geo.region': 'IN-JH',
          'geo.placename': fromCity ? `${fromCity.name}, Jharkhand` : 'Jharkhand',
          'geo.position': fromCity ? `${fromCity.latitude};${fromCity.longitude}` : '22.8046;86.2029',
          'ICBM': fromCity ? `${fromCity.latitude}, ${fromCity.longitude}` : '22.8046, 86.2029',
          'dateModified': '2026-04-29',
          'revisit-after': '7 days',
        },
      };
    }
    case 'local-route': {
      const lr = getLocalRoute(matched.citySlug, matched.routeSlug)!;
      return {
        title: `Taxi ${lr.fromArea} to ${lr.toArea} ${lr.cityName} | ₹${lr.startingFare} | ☎ +919204714249`,
        description: `Book local taxi from ${lr.fromArea} to ${lr.toArea} in ${lr.cityName} ✅ ₹${lr.startingFare} onwards ✅ ${lr.distanceKm}km ✅ ${lr.durationMin} min ✅ AC cab ✅ Verified driver. 24/7 availability. Call +919204714249.`,
        keywords: [
          `${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} taxi`,
          `${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} cab`,
          `taxi ${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
          `cab ${lr.fromArea.toLowerCase()} ${lr.cityName.toLowerCase()}`,
          `local taxi ${lr.cityName.toLowerCase()}`,
          `auto ${lr.fromArea.toLowerCase()} to ${lr.toArea.toLowerCase()}`,
        ],
        alternates: { canonical: `https://sreetravel.com/local-taxi-${lr.city}/${lr.slug}` },
        openGraph: {
          title: `Taxi ${lr.fromArea} to ${lr.toArea} \u2014 \u20b9${lr.startingFare}`,
          description: `${lr.distanceKm}km \u2022 ${lr.durationMin}min. Book now \u260e +919204714249`,
          url: `https://sreetravel.com/local-taxi-${lr.city}/${lr.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `Taxi ${lr.fromArea} to ${lr.toArea}` }],
        },
      };
    }
  }
}

// ============================================================
// PAGE COMPONENT
// ============================================================

export default function DynamicPage({ params }: PageProps) {
  const matched = matchRoute(params.slug);
  if (!matched) notFound();

  switch (matched.type) {
    case 'city-hub':
      return <CityHubPage citySlug={matched.citySlug} />;
    case 'service-in-city':
      return <ServiceInCityPage citySlug={matched.citySlug} serviceSlug={matched.serviceSlug} />;
    case 'fleet-in-city':
      return <FleetInCityPage citySlug={matched.citySlug} fleetSlug={matched.fleetSlug} />;
    case 'outstation-route':
      return <OutstationRoutePage from={matched.from} to={matched.to} />;
    case 'local-route':
      return <LocalRoutePage citySlug={matched.citySlug} routeSlug={matched.routeSlug} />;
  }
}

// ============================================================
// CITY HUB PAGE
// ============================================================

function CityHubPage({ citySlug }: { citySlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur / Tata' : city.name;
  const cityServices = getServicesForCity(city.tier);
  const cityFleet = getFleetForCity(city.tier);
  const cityRoutes = getRoutesByFrom(city.slug); // Show ALL routes — no slice limit to prevent orphan pages
  const cityLocalRoutes = getLocalRoutesByCity(city.slug);
  const isRanchi = city.slug === 'ranchi';

  const faqs = [
    { question: `What is the cab fare in ${city.name}?`, answer: `Local taxi in ${city.name} starts at ₹${city.localFare.hatchback_4hr} for 4hr/40km (Hatchback). Sedan ₹${city.localFare.sedan_4hr}, SUV ₹${city.localFare.suv_4hr}. Call +919204714249 for outstation quotes.` },
    { question: `How to book a cab in ${city.name}?`, answer: `Book via WhatsApp at +91 92047 14249 or call us. Share pickup, destination, date, cab type. Instant confirmation with driver details. No app download needed.` },
    { question: `Do you provide cab service at night in ${city.name}?`, answer: `Yes, 24/7 cab service in ${city.name} including late-night and early morning. All drivers are police-verified with 5+ years experience.` },
    { question: `Which cabs are available in ${city.name}?`, answer: `Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga, and Tempo Traveller — all AC, GPS-tracked, sanitized.` },
    { question: `Do you serve all areas of ${city.name}?`, answer: `Yes, all localities including ${city.localities.slice(0, 8).join(', ')}, and ${city.localities.length - 8}+ more areas.` },
    { question: `Is Sree Travels cheaper than Ola/Uber in ${city.name}?`, answer: `Yes! We offer fixed pricing with no surge — unlike Ola/Uber which can charge 2-3x during peak hours. Our fares start at ₹${city.localFare.hatchback_4hr} and include all charges.` },
    { question: `${city.name} से कैब कैसे बुक करें? (How to book cab in Hindi)`, answer: `WhatsApp पर +91 92047 14249 पर मैसेज करें या कॉल करें। पिकअप लोकेशन, डेस्टिनेशन, डेट बताएं। तुरंत बुकिंग कन्फर्म। कोई एप्प डाउनलोड नहीं चाहिए।` },
    { question: `What payment modes are accepted?`, answer: `Cash, UPI (Google Pay, PhonePe, Paytm), Credit Card, Debit Card, Bank Transfer. For corporate clients — monthly invoices with GST billing.` },
    { question: `Are your drivers verified in ${city.name}?`, answer: `100% yes. All drivers are police-verified, Aadhaar-registered, with valid driving license. Background checks done every 6 months. Average 7+ years driving experience.` },
    { question: `Can I book a cab for outstation from ${city.name}?`, answer: `Yes! We offer one-way and round-trip outstation cabs from ${city.name} to all major cities. Popular routes: ${isJSR ? 'Jamshedpur to Ranchi (₹1,499), Kolkata (₹3,999), Dhanbad (₹1,999)' : isRanchi ? 'Ranchi to Jamshedpur/Tata (₹2,499), Patna (₹5,299), Kolkata (₹5,999)' : `${city.name} to Ranchi, Kolkata, Patna`}. Toll + fuel included.` },
    { question: `Do you provide airport cab service from ${city.name}?`, answer: `Yes! ${isJSR ? 'Jamshedpur to Ranchi Airport (Birsa Munda Airport) cab from ₹1,499. Also Kolkata Airport cab available.' : isRanchi ? 'Birsa Munda Airport to Ranchi city from ₹499. Airport pickup/drop 24/7 with flight tracking.' : `Airport transfer available from ${city.name}. Nearest airport: ${city.nearestAirport.name} (${city.nearestAirport.distance}km).`}` },
    { question: `Is there free cancellation?`, answer: `Yes! Free cancellation up to 2 hours before the trip. Full refund processed within 24 hours. No questions asked.` },
    { question: `What is the best cab service in ${city.name} in 2026?`, answer: `Sree Travels is rated #1 cab service in ${city.name} with 4.8/5 rating from 2,800+ customers. Fixed pricing, verified drivers, GPS tracking, 24/7 availability. Call +919204714249.` },
    { question: `Do you provide corporate cab service in ${city.name}?`, answer: `Yes! Monthly corporate packages from ₹15,999. GST billing, dedicated driver, centralized billing portal, employee shuttle service. Contact +919204714249 for corporate rates.` },
    ...(isJSR ? [
      { question: `Tatanagar station se cab kaise milegi?`, answer: `Tatanagar Junction (TATA) par hamare drivers 24/7 Gate 1 aur Gate 2 par stationed hain. Call karein +919204714249 — 5 minute mein cab mil jayegi. Bistupur, Mango, Sakchi, Adityapur — sabhi jagah service available.` },
      { question: `What is Jamshedpur to Ranchi cab fare in 2026?`, answer: `Jamshedpur/Tata to Ranchi cab fare in 2026: Hatchback ₹1,499, Sedan ₹1,499, SUV ₹2,299, Innova Crysta ₹5,499. Distance: 130 km, Time: 3-4 hours via NH-33. Toll included. Book: +919204714249.` },
    ] : []),
    ...(isRanchi ? [
      { question: `Ranchi Airport se city cab ka kiraya kitna hai?`, answer: `Birsa Munda Airport se Ranchi city cab ka kiraya: Hatchback ₹499, Sedan ₹599. Airport pickup 24/7 available. Flight tracking included — delay hone par koi extra charge nahi. Call +919204714249.` },
      { question: `What is Ranchi to Jamshedpur/Tata cab fare in 2026?`, answer: `Ranchi to Jamshedpur (Tata) cab fare in 2026: Hatchback ₹2,499, Sedan ₹3,199, SUV ₹4,299. Distance: 130 km, Time: 3-4 hours via NH-33. All inclusive. Book: +919204714249.` },
    ] : []),
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="city" data={{ areaServed: `${city.name}, Jharkhand`, cityName: city.name, postalCode: city.pincode, latitude: city.latitude, longitude: city.longitude, faqs, reviews: city.reviews, reviewCount: String(city.reviews.length), breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Jharkhand', url: '/' }, { name: `Cab Service ${city.name}`, url: `/cab-service-${city.slug}` }] }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Jharkhand', href: '/' },
            { label: `Cab Service ${displayCityName}` },
          ]} />
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginBottom: '1rem' }}>
              🏆 #1 Rated Cab Service in {displayCityName} — 2026
            </div>
            <h1 style={{ marginBottom: '1rem' }}>
              <span className="gold-text">{city.seoH1 || `Cab Service in ${isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name}`}</span><br />
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>
                Book 24/7 | +91 92047 14249 | AC Cabs from ₹{city.localFare.hatchback_4hr}
              </span>
            </h1>
          </div>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main">
        {/* Long-form Content Block — Critical for SEO ranking */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>Best Cab Service in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} — 2026 Guide</h2>
            {city.longDescription ? (
              city.longDescription.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)
            ) : (
              <>
                <p>{city.seoDescription}</p>
                <p>Whether you need a quick local ride from {city.localities[0]} to {city.localities[1]}, an outstation trip, or airport transfer — Sree Travels has you covered with {city.tier === 1 ? '50+' : city.tier === 2 ? '30+' : '15+'} verified cabs, 24/7 availability, GPS-tracked fleet, and sanitized AC cabs.</p>
              </>
            )}
            {city.aka.length > 0 && <p><strong>{city.name}</strong> ({city.aka.join(', ')}), <strong>{city.district}</strong> district. Population: {city.population}. Railway: {city.railwayStation}. Nearest Airport: {city.nearestAirport.name} ({city.nearestAirport.code}), {city.nearestAirport.distance}km away.{city.hindiName ? ` Hindi: ${city.hindiName}` : ''}</p>}
          </div>
        </section>

        {/* How to Book Guide */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>How to Book a Cab in {isJSR ? 'Jamshedpur/Tata' : city.name}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '0.75rem' }}>Booking a cab in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} with Sree Travels is quick and easy. Here&apos;s how:</p>
              <ol style={{ paddingLeft: '1.5rem', marginBottom: '0.75rem' }}>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 1:</strong> Call us at <a href="tel:+919204714249" style={{ color: 'var(--primary)' }}>+91 92047 14249</a> or send a WhatsApp message with your pickup location, destination, date/time, and preferred cab type.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 2:</strong> We instantly confirm your booking and share driver details (name, photo, vehicle number, GPS tracking link).</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 3:</strong> Your driver arrives 10 minutes early at your pickup point. Track live on GPS.</li>
                <li style={{ marginBottom: '0.5rem' }}><strong>Step 4:</strong> Enjoy your ride! Pay via Cash, UPI, Google Pay, PhonePe, or Card after the trip.</li>
              </ol>
              <p>No app download needed. No surge pricing. No hidden charges. Just reliable {isJSR ? 'cab service in Tata/Jamshedpur' : `cab service in ${city.name}`} from Jharkhand&apos;s most trusted travel company.</p>
            </div>
          </div>
        </section>

        {/* Areas We Cover In Detail */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>Areas We Cover in {isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              <p style={{ marginBottom: '0.75rem' }}>Our {isJSR ? 'cab service covers every area of Jamshedpur and Tata Nagar' : `cab service covers all areas of ${city.name}`}. Here are some of the key localities we serve:</p>
              <ul style={{ paddingLeft: '1.5rem', columns: '2', columnGap: '2rem' }}>
                {city.localities.map(area => (
                  <li key={area} style={{ marginBottom: '0.4rem' }}><strong>{area}</strong> — Pickup & drop service available 24/7</li>
                ))}
              </ul>
              {isJSR && <p style={{ marginTop: '0.75rem' }}>We also cover extended areas like <strong>Adityapur Industrial Area</strong>, <strong>Gamharia</strong>, <strong>Chandil</strong>, <strong>Seraikela</strong>, and <strong>Ghatshila</strong>. Whether you need a cab from <strong>Tatanagar Railway Station</strong>, <strong>XLRI Campus</strong>, <strong>NIT Jamshedpur</strong>, <strong>Tata Motors Gate</strong>, or <strong>Jubilee Park</strong> — Sree Travels is just a call away.</p>}
            </div>
          </div>
        </section>

        {/* Station & Transport Hub Info — Dynamic */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>{isJSR ? 'Tatanagar Railway Station & Airport Cab Service' : isRanchi ? 'Ranchi Junction, Hatia Station & Airport Cab Service' : `${city.railwayStation} & Airport Transfer`}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {city.stationInfo ? (
                city.stationInfo.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)
              ) : (
                <>
                  <p style={{ marginBottom: '0.75rem' }}><strong>{city.railwayStation}</strong> is the main railway station in {city.name}. Book instant pickup/drop cab service available 24/7.</p>
                  <p><strong>{city.nearestAirport.name}</strong> ({city.nearestAirport.code}) is {city.nearestAirport.distance}km away. We provide reliable airport transfer service with flight tracking.</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* How to Reach — MASSIVE search volume keyword */}
        {city.transportGuide && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>How to Reach {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name} in 2026</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {city.transportGuide.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)}
              </div>
            </div>
          </section>
        )}

        {/* Corporate & Institutional — SEO for corporate searches */}
        {city.corporateInfo && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>{isJSR ? 'Corporate Cab Service in Jamshedpur/Tata' : isRanchi ? 'Government, Corporate & Institutional Cab Service in Ranchi' : `Corporate Cab Service in ${city.name}`}</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                {city.corporateInfo.split('\n\n').map((para, i) => <p key={i} style={{ marginBottom: '0.75rem' }}>{para}</p>)}
              </div>
            </div>
          </section>
        )}

        {/* Nearby Attractions with Details — SEO & Internal Links */}
        {city.nearbyAttractions && city.nearbyAttractions.length > 0 && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>Places to Visit Near {city.name} by Cab — 2026 Travel Guide</h2>
              <p style={{ marginBottom: '1rem' }}>Explore the best tourist destinations in and around {city.name} with Sree Travels. Book a comfortable AC cab for sightseeing, day trips, and weekend getaways.</p>
              <div className="services-grid" style={{ marginTop: '1rem' }}>
                {city.nearbyAttractions.map((attraction, i) => (
                  <div key={i} className="glass-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1rem', margin: 0 }}>{attraction.type === 'temple' ? '🛕' : attraction.type === 'waterfall' ? '💧' : attraction.type === 'wildlife' ? '🐘' : attraction.type === 'dam' ? '🌊' : attraction.type === 'hill' ? '⛰️' : attraction.type === 'lake' ? '🏞️' : attraction.type === 'museum' ? '🏛️' : '🌿'} {attraction.name}</h3>
                      <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, whiteSpace: 'nowrap' }}>{attraction.distanceKm} km</span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>{attraction.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        <div className="content-block">
          <h2>Our Cab Services in {city.name}</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {cityServices.map(s => (
              <a key={s.slug} href={`/${city.slug}/${s.slug}`} className="service-card">
                <div className="icon">{s.icon}</div>
                <h3>{s.name}</h3>
                <div className="price">₹{s.startingPrice} {s.priceUnit}</div>
                <p>in {city.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Routes */}
        {cityRoutes.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Popular Outstation Routes from {city.name}</h2>
            <div className="routes-grid" style={{ marginTop: '1rem' }}>
              {cityRoutes.map(r => (
                <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="route-card">
                  <div className="route-info">
                    <h3>{r.fromName} → {r.toName}</h3>
                    <div className="route-meta"><span>📏 {r.distanceKm} km</span><span>⏱️ {r.durationHrs} hrs</span></div>
                  </div>
                  <div className="route-fare">
                    <div className="price">₹{r.fares.hatchback.toLocaleString()}</div>
                    <div className="label">onwards</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Fleet */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Our Fleet in {city.name}</h2>
          <div className="fleet-grid" style={{ marginTop: '1rem' }}>
            {cityFleet.map(v => (
              <a key={v.slug} href={`/${city.slug}/${v.slug}`} className="fleet-card" style={{ backgroundImage: `url(${v.image})` }}>
                <div className="icon">{v.icon}</div>
                <h3>{v.shortName}</h3>
                <div className="capacity">{v.seatingCapacity} passengers</div>
                <div className="rate">₹{v.perKmRate}/km</div>
              </a>
            ))}
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        {/* Local Routes */}
        {cityLocalRoutes.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Local Taxi Routes in {city.name}</h2>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              {cityLocalRoutes.map(r => (
                <a key={r.slug} href={`/local-taxi-${r.city}/${r.slug}`} className="internal-link">🚖 {r.fromArea} → {r.toArea} (₹{r.startingFare})</a>
              ))}
            </div>
          </div>
        )}

        {/* Areas */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Areas We Serve in {city.name}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>
            {city.localities.map(a => <span key={a} className="area-tag">{a}</span>)}
          </div>
        </div>

        {/* Google Map */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>{city.name} Service Area Map</h2>
          <div style={{ width: '100%', height: '350px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--card-border)', marginTop: '1rem' }}>
            <iframe 
              title={`Google Map showing cab service area in ${city.name}, Jharkhand`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src={`https://maps.google.com/maps?q=${city.name},%20Jharkhand,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed`}>
            </iframe>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* Map shows central {city.name}. We provide pickups from all surrounding regions.</p>
        </div>

        {/* Tourist Places */}
        {city.touristPlaces.length > 0 && (
          <div className="content-block" style={{ marginTop: '2.5rem' }}>
            <h2>Tourist Places to Visit in {city.name} by Cab</h2>
            <p>Explore the best destinations in and around {city.name} with Sree Travels. Our drivers know every corner of the city and can take you to popular tourist spots comfortably.</p>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>
              {city.touristPlaces.map(p => <span key={p} className="area-tag">🏛️ {p}</span>)}
            </div>
          </div>
        )}

        {/* WHY SREE TRAVELS vs COMPETITORS */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Why Choose Sree Travels in {city.name}?</h2>
          <p style={{ marginBottom: '1rem' }}>When booking a cab in {city.name}, you have many options. Here&apos;s how Sree Travels compares with other cab services and ride aggregators:</p>
          <div className="fare-table-container">
            <table className="fare-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th style={{ color: 'var(--primary)' }}>Sree Travels ✅</th>
                  <th>Ola / Uber</th>
                  <th>Local Taxis</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Fixed Pricing</td><td style={{ color: '#22c55e' }}>✅ Yes, no surge</td><td>❌ Surge pricing</td><td>❌ Haggling</td></tr>
                <tr><td>Driver Verification</td><td style={{ color: '#22c55e' }}>✅ Police verified</td><td>⚠️ Basic check</td><td>❌ No checks</td></tr>
                <tr><td>Outstation Trips</td><td style={{ color: '#22c55e' }}>✅ Specialized</td><td>⚠️ Limited</td><td>⚠️ Unreliable</td></tr>
                <tr><td>WhatsApp Booking</td><td style={{ color: '#22c55e' }}>✅ 30-second booking</td><td>❌ App only</td><td>❌ Call only</td></tr>
                <tr><td>GPS Tracking</td><td style={{ color: '#22c55e' }}>✅ Real-time</td><td>✅ Yes</td><td>❌ No</td></tr>
                <tr><td>24/7 Availability</td><td style={{ color: '#22c55e' }}>✅ Always</td><td>⚠️ Area dependent</td><td>❌ Limited hours</td></tr>
                <tr><td>Free Cancellation</td><td style={{ color: '#22c55e' }}>✅ Up to 2hrs before</td><td>⚠️ Charges apply</td><td>❌ No policy</td></tr>
                <tr><td>Corporate Billing</td><td style={{ color: '#22c55e' }}>✅ Monthly invoices</td><td>⚠️ Limited</td><td>❌ Not available</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SREE TRAVELS GUARANTEE */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Our Guarantee for {city.name} Customers</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {[
              { icon: '🛡️', title: 'Safety First', desc: `All drivers serving ${city.name} are 100% police-verified with 5+ years of driving experience. Your family's safety is our top priority.` },
              { icon: '💰', title: 'Best Price Guarantee', desc: `We guarantee the most competitive fares in ${city.name}. If you find a lower rate from a verified service, we will match it.` },
              { icon: '⏰', title: 'On-Time Every Time', desc: `Our drivers in ${city.name} arrive 10 minutes before pickup. We understand the value of your time and never keep you waiting.` },
              { icon: '🔄', title: 'Hassle-Free Cancellation', desc: 'Changed plans? Cancel free up to 2 hours before your trip. No questions asked, full refund processed instantly.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>


        {/* Local Fare Table */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Local Taxi Fares in {city.name}</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Package</th><th>Hatchback</th><th>Sedan</th><th>SUV</th></tr></thead>
              <tbody>
                <tr><td>4 Hours / 40 km</td><td className="fare-price">₹{city.localFare.hatchback_4hr}</td><td className="fare-price">₹{city.localFare.sedan_4hr}</td><td className="fare-price">₹{city.localFare.suv_4hr}</td></tr>
                <tr><td>8 Hours / 80 km</td><td className="fare-price">₹{city.localFare.hatchback_8hr}</td><td className="fare-price">₹{city.localFare.sedan_8hr}</td><td className="fare-price">₹{city.localFare.suv_8hr}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Why Choose Sree Travels in {city.name}</h2>
          <ul className="features-list">
            <li>10+ Years Experience | Jharkhand&apos;s Most Trusted</li>
            <li>100% Police-Verified Drivers — Your Safety is Our Priority</li>
            <li>GPS-Tracked Fleet | Real-Time Monitoring </li>
            <li>Clean, Sanitized AC Cabs | Fresh Interiors</li>
            <li>No Hidden Charges | Transparent Fixed Fares</li>
            <li>Free Cancellation up to 2 Hours Before Trip</li>
            <li>24/7 WhatsApp Support: +91 92047 14249</li>
            <li>UPI / Cash / Card — All Payment Modes Accepted</li>
          </ul>
        </div>

        {/* Reviews */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>Customer Reviews — {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">{r.name} — {city.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <h2>FAQ — {city.name} Cab Service</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} cityName={city.name} /></div>
        </div>

        {/* Google Business Review CTA */}
        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '16px', border: '1px solid rgba(66,133,244,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐⭐⭐⭐⭐</div>
            <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '0.5rem' }}>
              <span className="gold-text">4.8/5</span> on Google — {city.name}&apos;s Most Trusted Cab Service
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', marginBottom: '1rem' }}>Love our cab service in {city.name}? Share your experience on Google!</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(66,133,244,0.3)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                ⭐ Rate Us on Google
              </a>
              <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(66,133,244,0.3)', color: '#4285F4', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                📍 View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <BlogSection pageName={city.name} type="city" />

        <div style={{ marginTop: '2.5rem', marginBottom: '2rem' }}>
          <CtaBanner title={`Book Cab in ${city.name} Now!`} subtitle="24/7 | AC Cabs | Verified Drivers" whatsappMessage={`Hi Sree Travels, I want to book a cab in ${city.name}`} />
        </div>
      </div>
    </div>
  );
}

// ============================================================
// SERVICE IN CITY PAGE
// ============================================================

function ServiceInCityPage({ citySlug, serviceSlug }: { citySlug: string; serviceSlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const service = getServiceBySlug(serviceSlug)!;
  const cityRoutes = getRoutesByFrom(city.slug);
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name;

  const faqs = service.faqs.map(f => ({
    question: f.question.replace(/\{city\}/g, city.name),
    answer: f.answer.replace(/\{city\}/g, city.name).replace(/\{price\}/g, String(service.startingPrice)),
  }));

  return (
    <div className="page-content">
      <SchemaMarkup type="service" data={{ areaServed: `${city.name}, Jharkhand`, faqs, reviews: city.reviews, serviceName: service.name, serviceDescription: service.description, price: String(service.startingPrice), priceUnit: service.priceUnit, breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${city.name}`, url: `/cab-service-${city.slug}` }, { name: service.name, url: `/${city.slug}/${service.slug}` }] }} />
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${isJSR ? 'Jamshedpur/Tata' : city.name}`, href: `/cab-service-${city.slug}` },
            { label: `${service.name}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{service.name} in {displayCityName}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>+91 92047 14249 | ₹{service.startingPrice} {service.priceUnit}</span>
          </h1>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="content-block">
          <h2>What is {service.name}?</h2>
          <p>{service.description}</p>
        </div>

        {cityRoutes.length > 0 && (
          <div className="content-block">
            <h2>{service.name} Fares from {city.name}</h2>
            <div className="fare-table-container" style={{ marginTop: '1rem' }}>
              <table className="fare-table">
                <thead><tr><th>Destination</th><th>Distance</th><th>Hatchback</th><th>Sedan</th><th>SUV</th><th>Crysta</th></tr></thead>
                <tbody>
                  {cityRoutes.slice(0, 10).map(r => (
                    <tr key={r.to}>
                      <td><a href={`/${r.from}-to-${r.to}-cab`} style={{ color: 'var(--primary)' }}>{r.toName}</a></td>
                      <td>{r.distanceKm} km</td>
                      <td className="fare-price">₹{r.fares.hatchback.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.sedan.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.suv.toLocaleString()}</td>
                      <td className="fare-price">₹{r.fares.crysta.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* Inclusive of toll, driver allowance, fuel.</p>
          </div>
        )}

        <div className="content-block">
          <h2>Benefits of {service.name}</h2>
          <ul className="features-list">{service.benefits.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Features</h2>
          <ul className="features-list">{service.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Areas Covered in {city.name}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{city.localities.map(a => <span key={a} className="area-tag">{a}</span>)}</div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        <div className="content-block">
          <h2>Other Services in {city.name}</h2>
          <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
            {services.filter(s => s.slug !== service.slug).slice(0, 6).map(s => (
              <a key={s.slug} href={`/${city.slug}/${s.slug}`} className="internal-link">{s.icon} {s.name}</a>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>Reviews — {service.name} {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card">
                <div className="review-stars">⭐⭐⭐⭐⭐</div>
                <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                <div className="review-author">{r.name} — {city.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>FAQ — {service.name} in {city.name}</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        <BlogSection pageName={`${city.name} ${service.name}`} type="city" />

        <CtaBanner title={`Book ${service.name} in ${city.name}!`} subtitle={`₹${service.startingPrice} ${service.priceUnit}`} whatsappMessage={`Hi, I want ${service.name} in ${city.name}`} />
      </div>
    </div>
  );
}

// ============================================================
// FLEET IN CITY PAGE
// ============================================================

function FleetInCityPage({ citySlug, fleetSlug }: { citySlug: string; fleetSlug: string }) {
  const city = getCityBySlug(citySlug)!;
  const vehicle = getFleetBySlug(fleetSlug)!;
  const cityRoutes = getRoutesByFrom(city.slug);
  const isJSR = city.slug === 'jamshedpur';
  const displayCityName = isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name;

  const faqs = vehicle.faqs.map(f => ({
    question: f.question.replace(/\{city\}/g, city.name),
    answer: f.answer.replace(/\{city\}/g, city.name).replace(/\{price\}/g, String(vehicle.perKmRate)),
  }));

  const fareKey = vehicle.slug === 'tempo-traveller' ? 'tempo' : vehicle.slug === 'innova-crysta' ? 'crysta' : vehicle.slug.includes('innova') || vehicle.slug.includes('ertiga') ? 'suv' : vehicle.slug.includes('dzire') ? 'sedan' : 'hatchback';

  return (
    <div className="page-content">
      <SchemaMarkup type="fleet" data={{ areaServed: `${city.name}, Jharkhand`, faqs, reviews: city.reviews, vehicleName: vehicle.shortName, vehicleDescription: vehicle.description, vehicleImage: vehicle.image, price: String(vehicle.perKmRate), seatingCapacity: vehicle.seatingCapacity, breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${city.name}`, url: `/cab-service-${city.slug}` }, { name: vehicle.shortName, url: `/${city.slug}/${vehicle.slug}` }] }} />
      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${isJSR ? 'Jamshedpur/Tata' : city.name}`, href: `/cab-service-${city.slug}` },
            { label: vehicle.shortName },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{vehicle.name} in {displayCityName}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>Book Now +91 92047 14249 | ₹{vehicle.perKmRate}/km</span>
          </h1>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="content-block">
          <h2>About {vehicle.shortName}</h2>
          <p>{vehicle.description}</p>
        </div>

        <div className="content-block">
          <h2>Specifications</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Feature</th><th>Details</th></tr></thead>
              <tbody>{vehicle.specs.map((s, i) => <tr key={i}><td style={{ fontWeight: 600 }}>{s.label}</td><td>{s.value}</td></tr>)}</tbody>
            </table>
          </div>
        </div>

        {cityRoutes.length > 0 && (
          <div className="content-block">
            <h2>{vehicle.shortName} Fares from {city.name}</h2>
            <div className="fare-table-container" style={{ marginTop: '1rem' }}>
              <table className="fare-table">
                <thead><tr><th>Route</th><th>Distance</th><th>Price</th></tr></thead>
                <tbody>
                  {cityRoutes.slice(0, 12).map(r => (
                    <tr key={r.to}>
                      <td><a href={`/${r.from}-to-${r.to}-cab`} style={{ color: 'var(--primary)' }}>{r.fromName} to {r.toName}</a></td>
                      <td>{r.distanceKm} km</td>
                      <td className="fare-price">₹{(r.fares[fareKey as keyof typeof r.fares] || r.fares.sedan).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="content-block">
          <h2>Features</h2>
          <ul className="features-list">{vehicle.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
        </div>
        <div className="content-block">
          <h2>Best For</h2>
          <ul className="features-list">{vehicle.bestFor.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>

        <div className="content-block">
          <h2>Other Vehicles in {city.name}</h2>
          <div className="fleet-grid" style={{ marginTop: '0.75rem' }}>
            {fleet.filter(v => v.slug !== vehicle.slug).slice(0, 4).map(v => (
              <a key={v.slug} href={`/${city.slug}/${v.slug}`} className="fleet-card" style={{ backgroundImage: `url(${v.image})` }}>
                <div className="icon">{v.icon}</div><h3>{v.shortName}</h3><div className="rate">₹{v.perKmRate}/km</div>
              </a>
            ))}
          </div>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        <div className="content-block">
          <h2>Reviews — {vehicle.shortName} {city.name}</h2>
          <div className="reviews-grid" style={{ marginTop: '1rem' }}>
            {city.reviews.map((r, i) => (
              <div key={i} className="review-card"><div className="review-stars">⭐⭐⭐⭐⭐</div><p className="review-text">&ldquo;{r.text}&rdquo;</p><div className="review-author">{r.name}</div></div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h2>FAQ — {vehicle.shortName} {city.name}</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        <BlogSection pageName={`${city.name} ${vehicle.name}`} type="city" />

        <CtaBanner title={`Book ${vehicle.shortName} in ${city.name}!`} subtitle={`₹${vehicle.perKmRate}/km | ${vehicle.seatingCapacity} seater`} whatsappMessage={`Hi, I want ${vehicle.shortName} in ${city.name}`} />
      </div>
    </div>
  );
}

// ============================================================
// OUTSTATION ROUTE PAGE
// ============================================================

function OutstationRoutePage({ from, to }: { from: string; to: string }) {
  const route = getRoute(from, to)!;
  const relatedRoutes = routes.filter(r => r.from === route.from && r.to !== route.to).slice(0, 4);
  const reverseRoute = getRoute(route.to, route.from);
  
  const isFromJSR = from === 'jamshedpur';
  const isToJSR = to === 'jamshedpur';
  const fromName = isFromJSR ? 'Jamshedpur/Tata (Tatanagar)' : route.fromName;
  const toName = isToJSR ? 'Jamshedpur/Tata (Tatanagar)' : route.toName;
  const shortFromName = isFromJSR ? 'Jamshedpur/Tata' : route.fromName;
  const shortToName = isToJSR ? 'Jamshedpur/Tata' : route.toName;

  const fromCity = getCityBySlug(from);
  const toCity = getCityBySlug(to);

  const faqs = [
    { question: `What is ${shortFromName} to ${shortToName} cab fare in 2026?`, answer: `${shortFromName} to ${shortToName} cab fare in 2026: Hatchback ₹${route.fares.hatchback.toLocaleString()}, Sedan ₹${route.fares.sedan.toLocaleString()}, SUV ₹${route.fares.suv.toLocaleString()}, Innova Crysta ₹${route.fares.crysta.toLocaleString()}, Tempo Traveller ₹${route.fares.tempo.toLocaleString()}. All inclusive — toll, fuel, driver allowance included. No hidden charges.` },
    { question: `How long does ${shortFromName} to ${shortToName} take by cab?`, answer: `Approximately ${route.durationHrs} hours via ${route.nh}. Distance: ${route.distanceKm} km. Road condition: ${route.roadCondition}. Best time to travel: ${route.bestTime}.` },
    { question: `Which route does the cab take from ${shortFromName} to ${shortToName}?`, answer: `${shortFromName} → ${route.via.join(' → ')} → ${shortToName}. Highway: ${route.nh}. Road condition: ${route.roadCondition}.` },
    { question: `Are tolls included in ${shortFromName} to ${shortToName} cab fare?`, answer: `Yes! Toll charges of approximately ₹${route.tolls} are fully included in the quoted price. No extra charges. State taxes apply if crossing state borders.` },
    { question: `Can I book a one way cab from ${shortFromName} to ${shortToName}?`, answer: `Yes! One way cab from ${shortFromName} to ${shortToName} starting at ₹${route.fares.hatchback.toLocaleString()}. No return fare charged. Book via WhatsApp or call +919204714249.` },
    { question: `Which is the best cab type for ${shortFromName} to ${shortToName}?`, answer: `${route.distanceKm > 300 ? 'For this long-distance trip, we recommend Innova Crysta for premium comfort or SUV (Innova/Ertiga) for families.' : 'Swift Dzire (Sedan) for budget-friendly comfort, or Innova for family trips.'}. Tempo Traveller for groups of 8-12.` },
    { question: `Is ${shortFromName} to ${shortToName} cab available at night?`, answer: `Yes, 24/7 service including late night and early morning. All our drivers are experienced on this route and trained for night driving. GPS tracking active throughout.` },
    { question: `Is it safe to travel from ${shortFromName} to ${shortToName} by cab?`, answer: `Absolutely! All Sree Travels drivers are police-verified with 5+ years experience. GPS tracking is active throughout the journey. You can share live trip location with your family. The ${route.nh} highway is well-maintained and well-lit.` },
    { question: `How to book ${shortFromName} to ${shortToName} cab online?`, answer: `Call +91 92047 14249 or send WhatsApp message with: pickup location, date/time, and cab type. Instant confirmation with driver details. No app download needed.` },
    { question: `Is Sree Travels cheaper than Savaari/Ola for ${shortFromName} to ${shortToName}?`, answer: `Yes! Our fares start at ₹${route.fares.hatchback.toLocaleString()} — all inclusive. No surge pricing, no hidden charges. We are typically 15-30% cheaper than aggregator platforms for this route.` },
    { question: `Can I stop along the way during ${shortFromName} to ${shortToName} trip?`, answer: `Yes! You can stop for food, photos, or sightseeing anywhere along the route. ${route.pitStops.length > 0 ? 'Popular stops: ' + route.pitStops.join(', ') + '.' : ''} No extra charge for reasonable stops.` },
    ...(isFromJSR || isToJSR ? [
      { question: `${isFromJSR ? 'जमशेदपुर/टाटा' : route.fromName} से ${isToJSR ? 'जमशेदपुर/टाटा' : route.toName} कैब का किराया कितना है?`, answer: `${isFromJSR ? 'जमशेदपुर (टाटा)' : route.fromName} से ${isToJSR ? 'जमशेदपुर (टाटा)' : route.toName}: हैचबैक ₹${route.fares.hatchback.toLocaleString()}, सेडान ₹${route.fares.sedan.toLocaleString()}, SUV ₹${route.fares.suv.toLocaleString()}। टोल, फ्यूल, ड्राइवर सब शामिल। कॉल करें: +919204714249` },
    ] : []),
    ...(from === 'ranchi' || to === 'ranchi' ? [
      { question: `${from === 'ranchi' ? 'रांची' : route.fromName} से ${to === 'ranchi' ? 'रांची' : route.toName} कैब बुक कैसे करें?`, answer: `WhatsApp करें +91 92047 14249 पर। पिकअप लोकेशन, डेट, और गाड़ी का प्रकार बताएं। तुरंत बुकिंग कन्फर्म। किराया: ₹${route.fares.hatchback.toLocaleString()} से शुरू।` },
    ] : []),
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="route" data={{ from: route.fromName, to: route.toName, distance: route.distanceKm, fare: route.fares.hatchback, areaServed: `${route.fromName} to ${route.toName}`, faqs, reviews: fromCity?.reviews, reviewCount: String(fromCity?.reviews?.length || 3), breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${route.fromName}`, url: `/cab-service-${route.from}` }, { name: `${route.fromName} to ${route.toName}`, url: `/${route.from}-to-${route.to}-cab` }] }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${shortFromName}`, href: `/cab-service-${route.from}` },
            { label: `${shortFromName} to ${shortToName}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{fromName} to {toName} Cab Service 2026</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>₹{route.fares.hatchback.toLocaleString()} Onwards | {route.distanceKm} km | {route.durationHrs} hrs | ☎ +91 92047 14249</span>
          </h1>
          <BookingWidget defaultFrom={route.fromName} defaultTo={route.toName} />
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Quick Fare Box */}
        <div className="quick-fare-box" style={{ marginBottom: '2rem' }}>
          <div className="quick-fare-item"><span className="label">Distance</span><span className="value">{route.distanceKm} km</span></div>
          <div className="quick-fare-item"><span className="label">Duration</span><span className="value">{route.durationHrs} hrs</span></div>
          <div className="quick-fare-item"><span className="label">Starting Fare</span><span className="value green">₹{route.fares.hatchback.toLocaleString()}</span></div>
          <div className="quick-fare-item"><span className="label">Route</span><span className="value">{route.nh}</span></div>
          <div className="quick-fare-item"><span className="label">Tolls</span><span className="value">₹{route.tolls} (incl.)</span></div>
        </div>

        {/* Fare Table */}
        <div className="content-block">
          <h2>{route.fromName} to {route.toName} Cab Fare 2026 — Latest Rates</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Cab Type</th><th>Vehicle</th><th>Fare</th><th>Includes</th></tr></thead>
              <tbody>
                <tr><td>Hatchback</td><td>Swift Dzire</td><td className="fare-price">₹{route.fares.hatchback.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Sedan</td><td>Honda City / Ciaz</td><td className="fare-price">₹{route.fares.sedan.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>SUV</td><td>Ertiga / Innova</td><td className="fare-price">₹{route.fares.suv.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Premium SUV</td><td>Innova Crysta</td><td className="fare-price">₹{route.fares.crysta.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
                <tr><td>Tempo Traveller</td><td>12-Seater</td><td className="fare-price">₹{route.fares.tempo.toLocaleString()}</td><td>Toll + Driver + Fuel</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>* 10% off on round trip. State taxes extra.</p>
        </div>

        <div className="content-block" style={{ marginTop: '2.5rem' }}>
          <FareCalculator />
        </div>

        {/* Route Details */}
        <div className="content-block">
          <h2>Route Details</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <tbody>
                <tr><td style={{ fontWeight: 600 }}>Distance</td><td>{route.distanceKm} km</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Time</td><td>{route.durationHrs} hours</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Route</td><td>{route.fromName} → {route.via.join(' → ')} → {route.toName}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Highway</td><td>{route.nh}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Road</td><td>{route.roadCondition}</td></tr>
                <tr><td style={{ fontWeight: 600 }}>Tolls</td><td>~₹{route.tolls} (included)</td></tr>
                {route.statesCrossed.length > 1 && <tr><td style={{ fontWeight: 600 }}>States</td><td>{route.statesCrossed.join(' → ')}</td></tr>}
                <tr><td style={{ fontWeight: 600 }}>Best Time</td><td>{route.bestTime}</td></tr>
                {route.pitStops.length > 0 && <tr><td style={{ fontWeight: 600 }}>Pit Stops</td><td>{route.pitStops.join(', ')}</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Book */}
        <div className="content-block">
          <h2>Why Book with Sree Travels</h2>
          <ul className="features-list">
            <li>Experienced highway drivers who know the {route.fromName} to {route.toName} route inside out</li>
            <li>All tolls ({route.nh}), fuel, and driver allowance included in quoted price</li>
            <li>10% discount on round trip bookings</li>
            <li>24/7 availability — early morning, late night, holidays</li>
            <li>GPS-tracked, sanitized AC cabs with clean interiors</li>
            <li>Free cancellation up to 2 hours before pickup</li>
            <li>Multiple cab types — Hatchback, Sedan, SUV, Innova Crysta, Tempo Traveller</li>
            <li>Book via WhatsApp in 30 seconds — no app required</li>
          </ul>
        </div>

        {/* Unique Long-Form Route Guide (hand-crafted for top routes) */}
        {route.longContent && (
          <div className="content-block">
            <h2>Complete Travel Guide: {fromName} to {toName} by Cab</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 2, fontSize: 'clamp(0.88rem, 2.5vw, 0.98rem)' }}>
              {route.longContent.split('\n\n').map((para, i) => (
                <p key={i} style={{ marginBottom: '1rem' }}>{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Travel Guide */}
        <div className="content-block">
          <h2>{fromName} to {toName} Travel Guide</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>Planning to travel from <strong>{fromName} to {toName}</strong>? Here&apos;s everything you need to know about this {route.distanceKm}km journey. The route via <strong>{route.nh}</strong> takes approximately <strong>{route.durationHrs} hours</strong> and passes through {route.via.join(', ')}. Road condition is {route.roadCondition.toLowerCase()}, making it a comfortable cab ride.</p>
            <p style={{ marginBottom: '0.75rem' }}>Sree Travels is the most trusted {isFromJSR ? 'Jamshedpur/Tata' : route.fromName} to {isToJSR ? 'Jamshedpur/Tata' : route.toName} <strong>cab service</strong> with experienced drivers who travel this route daily. We offer both <strong>one way and round trip</strong> options. Book via WhatsApp at +91 92047 14249 for instant confirmation.</p>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Bus vs Train vs Cab — {route.fromName} to {route.toName}</h3>
            <div className="fare-table-container" style={{ marginTop: '0.5rem' }}>
              <table className="fare-table">
                <thead><tr><th>Feature</th><th style={{ color: 'var(--primary)' }}>Cab (Sree Travels) ✅</th><th>Bus</th><th>Train</th></tr></thead>
                <tbody>
                  <tr><td>Door-to-door</td><td style={{ color: '#22c55e' }}>✅ Pickup from your location</td><td>❌ Bus stand only</td><td>❌ Station only</td></tr>
                  <tr><td>Travel Time</td><td style={{ color: '#22c55e' }}>~{route.durationHrs} hrs (direct)</td><td>~{Math.round(Number(route.durationHrs) * 1.5)} hrs</td><td>Varies by schedule</td></tr>
                  <tr><td>Comfort</td><td style={{ color: '#22c55e' }}>AC, reclining seats</td><td>Basic</td><td>Class dependent</td></tr>
                  <tr><td>Luggage</td><td style={{ color: '#22c55e' }}>Unlimited boot space</td><td>Limited</td><td>Limited</td></tr>
                  <tr><td>Flexibility</td><td style={{ color: '#22c55e' }}>Depart anytime 24/7</td><td>Fixed schedule</td><td>Fixed schedule</td></tr>
                  <tr><td>Family Friendly</td><td style={{ color: '#22c55e' }}>Private cab</td><td>Crowded</td><td>Shared</td></tr>
                  <tr><td>Stops</td><td style={{ color: '#22c55e' }}>Stop anywhere en route</td><td>Fixed stops</td><td>Fixed stations</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '0.75rem' }}>For the <strong>{route.fromName} to {route.toName}</strong> route, a cab is the most comfortable and convenient option, especially for families, groups, elderly passengers, and those with luggage. With Sree Travels, your fare of ₹{route.fares.hatchback.toLocaleString()} includes toll, fuel, and driver allowance — no hidden charges.</p>
          </div>
        </div>

        {/* Travel Tips */}
        <div className="content-block">
          <h2>Travel Tips: {route.fromName} to {route.toName} by Cab</h2>
          <div className="services-grid" style={{ marginTop: '1rem' }}>
            {[
              { icon: '🌅', title: 'Best Departure Time', desc: `For ${route.fromName} to ${route.toName} (${route.distanceKm}km), we recommend departing ${Number(route.durationHrs) > 5 ? 'early morning (5-6 AM) to reach before dark' : 'anytime — the journey takes about ' + route.durationHrs + ' hours'}. Best season: ${route.bestTime}.` },
              { icon: '🍽️', title: 'Food Stops', desc: `${route.pitStops.length > 0 ? 'Good restaurant stops at: ' + route.pitStops.join(', ') + '.' : 'Your driver will know the best clean dhabas along the way.'} Ask your driver for recommendations — they drive this route daily.` },
              { icon: '🧳', title: 'What to Carry', desc: `For your ${route.fromName} to ${route.toName} trip, carry: valid ID proof, water bottles, phone charger (USB charging available in our cabs), light snacks, and comfortable clothing.` },
              { icon: '📱', title: 'Stay Connected', desc: 'Share your live trip location with family directly from our driver\'s GPS-tracked vehicle. Network coverage is good throughout this route via ' + route.nh + '.' },
            ].map((tip, i) => (
              <div key={i} className="glass-card">
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{tip.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pickup/Drop */}
        {route.pickupPoints.length > 0 && (
          <div className="content-block">
            <h2>Pickup Points in {route.fromName}</h2>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>{route.pickupPoints.map(p => <span key={p} className="area-tag">📍 {p}</span>)}</div>
          </div>
        )}
        {/* Drop Points */}
        {route.dropPoints.length > 0 && (
          <div className="content-block">
            <h2>Drop Points in {route.toName}</h2>
            <div className="area-tags" style={{ marginTop: '0.75rem' }}>{route.dropPoints.map(p => <span key={p} className="area-tag">📍 {p}</span>)}</div>
          </div>
        )}

        {/* Route Map */}
        <div className="content-block">
          <h2>{route.fromName} To {route.toName} Route Map</h2>
          <div style={{ width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--card-border)', marginTop: '1rem' }}>
            <iframe 
              title={`Route map from ${route.fromName} to ${route.toName}`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade" 
              src={`https://maps.google.com/maps?saddr=${route.fromName},India&daddr=${route.toName},India&output=embed`}>
            </iframe>
          </div>
        </div>

        {/* Reverse Route */}
        {reverseRoute && (
          <div className="content-block">
            <h2>{route.toName} to {route.fromName} Cab?</h2>
            <a href={`/${route.to}-to-${route.from}-cab`} className="route-card" style={{ marginTop: '0.75rem' }}>
              <div className="route-info"><h3>{route.toName} → {route.fromName}</h3><div className="route-meta"><span>📏 {reverseRoute.distanceKm} km</span></div></div>
              <div className="route-fare"><div className="price">₹{reverseRoute.fares.hatchback.toLocaleString()}</div><div className="label">onwards</div></div>
            </a>
          </div>
        )}

        {/* Cross-links to City Hub Pages — Critical for PageRank */}
        <div className="content-block">
          <h2>Cab Service in {route.fromName} & {route.toName}</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>Looking for more cab services? Visit our dedicated city pages for complete information:</p>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              <a href={`/cab-service-${route.from}`} className="internal-link">🏙️ Cab Service in {route.fromName} — All Services & Fares</a>
              <a href={`/cab-service-${route.to}`} className="internal-link">🏙️ Cab Service in {route.toName} — All Services & Fares</a>
              {fromCity && <a href={`/${route.from}/outstation-cab`} className="internal-link">🚗 Outstation Cab from {route.fromName}</a>}
              {toCity && <a href={`/${route.to}/outstation-cab`} className="internal-link">🚗 Outstation Cab from {route.toName}</a>}
            </div>
          </div>
        </div>

        {/* Related Routes */}
        {relatedRoutes.length > 0 && (
          <div className="content-block">
            <h2>Other Routes from {route.fromName}</h2>
            <div className="routes-grid" style={{ marginTop: '0.75rem' }}>
              {relatedRoutes.map(r => (
                <a key={r.to} href={`/${r.from}-to-${r.to}-cab`} className="route-card">
                  <div className="route-info"><h3>{r.fromName} → {r.toName}</h3><div className="route-meta"><span>{r.distanceKm} km</span><span>{r.durationHrs} hrs</span></div></div>
                  <div className="route-fare"><div className="price">₹{r.fares.hatchback.toLocaleString()}</div></div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="content-block">
          <h2>FAQ</h2>
          <div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div>
        </div>

        {/* Google Business Review CTA */}
        <div className="content-block">
          <div style={{ textAlign: 'center', padding: '2rem 1.5rem', background: 'linear-gradient(135deg, rgba(66,133,244,0.08), rgba(234,67,53,0.06), rgba(251,188,4,0.06), rgba(52,168,83,0.06))', borderRadius: '16px', border: '1px solid rgba(66,133,244,0.15)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⭐⭐⭐⭐⭐</div>
            <h3 style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)', marginBottom: '0.5rem' }}>
              <span className="gold-text">4.8/5</span> Google Rating — Jharkhand&apos;s Most Trusted Cab Service
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.8rem, 2vw, 0.88rem)', marginBottom: '1rem' }}>Travelled {route.fromName} to {route.toName} with us? Share your experience!</p>
            <a href="https://g.page/r/CQtNNAPh6kJlEBM/review" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.65rem 1.5rem', background: 'linear-gradient(135deg, #4285F4, #34A853)', color: '#fff', borderRadius: '10px', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s ease', boxShadow: '0 4px 15px rgba(66,133,244,0.3)' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              ⭐ Rate Us on Google
            </a>
          </div>
        </div>

        {/* SEO: Why Sree Travels vs Competitors for this route */}
        <div className="content-block">
          <h2>Why Book {shortFromName} to {shortToName} Cab with Sree Travels?</h2>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '0.75rem' }}>When searching for <strong>{route.fromName} to {route.toName} cab service</strong>, you&apos;ll find many options — Savaari, MakeMyTrip, GozoCabs, EaseMyTrip, and local operators. Here&apos;s why <strong>Sree Travels</strong> is the top-rated choice for this {route.distanceKm}km route:</p>
            <div className="fare-table-container" style={{ marginTop: '0.75rem' }}>
              <table className="fare-table">
                <thead><tr><th>Feature</th><th style={{ color: 'var(--primary)' }}>Sree Travels ✅</th><th>Savaari/MakeMyTrip</th><th>Local Operators</th></tr></thead>
                <tbody>
                  <tr><td>Starting Fare</td><td style={{ color: '#22c55e' }}>₹{route.fares.hatchback.toLocaleString()}</td><td>₹{Math.round(route.fares.hatchback * 1.2).toLocaleString()}+</td><td>Varies (haggling)</td></tr>
                  <tr><td>Hidden Charges</td><td style={{ color: '#22c55e' }}>✅ Zero — all inclusive</td><td>⚠️ Extra toll/tax</td><td>❌ Frequent</td></tr>
                  <tr><td>Driver Knowledge</td><td style={{ color: '#22c55e' }}>✅ Daily on this route</td><td>⚠️ Assigned randomly</td><td>⚠️ Variable</td></tr>
                  <tr><td>Booking Speed</td><td style={{ color: '#22c55e' }}>✅ 30 sec WhatsApp</td><td>⚠️ App/website forms</td><td>❌ Calls only</td></tr>
                  <tr><td>Cancellation</td><td style={{ color: '#22c55e' }}>✅ Free 2hr before</td><td>⚠️ Charges apply</td><td>❌ No policy</td></tr>
                  <tr><td>Customer Support</td><td style={{ color: '#22c55e' }}>✅ Direct call 24/7</td><td>⚠️ Call center</td><td>❌ Limited</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: '0.75rem' }}>With <strong>4.8★ Google rating</strong> and <strong>2,800+ verified reviews</strong>, Sree Travels is the <a href="https://g.page/r/CQtNNAPh6kJlEBM" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Google Verified</a> choice for {route.fromName} to {route.toName} cab booking in 2026. Book now via WhatsApp at <a href="https://wa.me/919204714249" style={{ color: 'var(--primary)' }}>+91 92047 14249</a>.</p>
          </div>
        </div>

        <BlogSection pageName={`${route.fromName} to ${route.toName}`} type="route" />

        {/* Related Routes — Internal Link Network for SEO (fixes 1,084 orphan pages) */}
        {(() => {
          const relatedFromRoutes = getRoutesByFrom(route.from).filter(r => r.to !== route.to).slice(0, 12);
          const relatedToRoutes = getRoutesByFrom(route.to).filter(r => r.to !== route.from).slice(0, 6);
          return (
            <div className="content-block" style={{ marginTop: '2.5rem' }}>
              {relatedFromRoutes.length > 0 && (
                <>
                  <h2>Other Routes from {route.fromName}</h2>
                  <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
                    {relatedFromRoutes.map(r => (
                      <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="internal-link">🚗 {r.fromName} → {r.toName} (₹{r.fares.hatchback.toLocaleString()})</a>
                    ))}
                  </div>
                </>
              )}
              {relatedToRoutes.length > 0 && (
                <div style={{ marginTop: '1.5rem' }}>
                  <h2>Routes from {route.toName}</h2>
                  <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
                    {relatedToRoutes.map(r => (
                      <a key={`${r.from}-${r.to}`} href={`/${r.from}-to-${r.to}-cab`} className="internal-link">🚗 {r.fromName} → {r.toName} (₹{r.fares.hatchback.toLocaleString()})</a>
                    ))}
                  </div>
                </div>
              )}
              <div style={{ textAlign: 'center', marginTop: '1.25rem' }}>
                <a href={`/cab-service-${route.from}`} className="btn-outline">View All {route.fromName} Routes →</a>
              </div>
            </div>
          );
        })()}

        <CtaBanner title={`Book ${route.fromName} to ${route.toName} Cab Now!`} subtitle={`₹${route.fares.hatchback.toLocaleString()} onwards | ${route.distanceKm} km`} whatsappMessage={`Hi, I want cab from ${route.fromName} to ${route.toName}`} />
      </div>
    </div>
  );
}

// ============================================================
// LOCAL ROUTE PAGE
// ============================================================

function LocalRoutePage({ citySlug, routeSlug }: { citySlug: string; routeSlug: string }) {
  const lr = getLocalRoute(citySlug, routeSlug)!;
  const otherRoutes = getLocalRoutesByCity(citySlug).filter(r => r.slug !== routeSlug);

  const faqs = [
    { question: `Taxi fare from ${lr.fromArea} to ${lr.toArea}?`, answer: `Starts at ₹${lr.startingFare} (Hatchback), Sedan ₹${lr.fares.sedan}, SUV ₹${lr.fares.suv}. Fixed fare — no meter.` },
    { question: `How long from ${lr.fromArea} to ${lr.toArea}?`, answer: `~${lr.durationMin} minutes, ~${lr.distanceKm} km. May vary with traffic.` },
    { question: `Available 24/7?`, answer: `Yes, 24/7 taxi from ${lr.fromArea} to ${lr.toArea}. Call/WhatsApp +919204714249.` },
    { question: `Why taxi over auto?`, answer: `AC, fixed fare, luggage space, GPS-tracked, verified driver — all from ₹${lr.startingFare}.` },
    { question: `Return taxi available?`, answer: `Yes, same fare for ${lr.toArea} to ${lr.fromArea}. Call +919204714249.` },
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="local-route" data={{ areaServed: lr.cityName, faqs }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${lr.cityName}`, href: `/cab-service-${lr.city}` },
            { label: `${lr.fromArea} to ${lr.toArea}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">Taxi: {lr.fromArea} to {lr.toArea}</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>{lr.cityName} | ₹{lr.startingFare} | +91 92047 14249</span>
          </h1>
          <BookingWidget defaultFrom={`${lr.fromArea}, ${lr.cityName}`} defaultTo={`${lr.toArea}, ${lr.cityName}`} cityName={lr.cityName} />
        </div>
      </section>

      <div className="container-main section-spacing">
        <div className="quick-fare-box" style={{ marginBottom: '2rem' }}>
          <div className="quick-fare-item"><span className="label">Distance</span><span className="value">~{lr.distanceKm} km</span></div>
          <div className="quick-fare-item"><span className="label">Time</span><span className="value">~{lr.durationMin} min</span></div>
          <div className="quick-fare-item"><span className="label">Fare</span><span className="value green">₹{lr.startingFare}</span></div>
        </div>

        <div className="content-block">
          <h2>{lr.fromArea} to {lr.toArea} Route</h2>
          <p>Reliable and affordable taxi from {lr.fromArea} to {lr.toArea} in {lr.cityName}. Distance: ~{lr.distanceKm} km, ~{lr.durationMin} minutes. AC cabs with professional drivers. Fixed fare from ₹{lr.startingFare} — no meter haggling. Much more comfortable than auto-rickshaws.</p>
        </div>

        <div className="content-block">
          <h2>Fare</h2>
          <div className="fare-table-container" style={{ marginTop: '1rem' }}>
            <table className="fare-table">
              <thead><tr><th>Cab Type</th><th>Capacity</th><th>Fare</th></tr></thead>
              <tbody>
                <tr><td>🚗 Hatchback</td><td>4 pax</td><td className="fare-price">₹{lr.fares.hatchback}</td></tr>
                <tr><td>🚘 Sedan</td><td>4 pax</td><td className="fare-price">₹{lr.fares.sedan}</td></tr>
                <tr><td>🚙 SUV</td><td>6 pax</td><td className="fare-price">₹{lr.fares.suv}</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="content-block">
          <h2>Pickup Points in {lr.fromArea}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{lr.fromLandmarks.map(l => <span key={l} className="area-tag">📍 {l}</span>)}</div>
        </div>
        <div className="content-block">
          <h2>Drop Points in {lr.toArea}</h2>
          <div className="area-tags" style={{ marginTop: '0.75rem' }}>{lr.toLandmarks.map(l => <span key={l} className="area-tag">📍 {l}</span>)}</div>
        </div>

        <div className="content-block">
          <h2>Why Taxi Over Auto</h2>
          <ul className="features-list">
            <li>Fixed fare — no haggling</li><li>AC comfort</li><li>GPS-tracked, verified driver</li>
            <li>Luggage space</li><li>Door-to-door</li><li>Available 24/7</li>
          </ul>
        </div>

        {otherRoutes.length > 0 && (
          <div className="content-block">
            <h2>Other Local Routes in {lr.cityName}</h2>
            <div className="internal-links-grid" style={{ marginTop: '0.75rem' }}>
              {otherRoutes.map(r => <a key={r.slug} href={`/local-taxi-${r.city}/${r.slug}`} className="internal-link">🚖 {r.fromArea} → {r.toArea} (₹{r.startingFare})</a>)}
            </div>
          </div>
        )}

        <div className="content-block"><h2>FAQ</h2><div style={{ marginTop: '1rem' }}><FaqSection faqs={faqs} /></div></div>

        <BlogSection pageName={`${lr.fromArea} to ${lr.toArea} in ${lr.cityName}`} type="route" />

        <CtaBanner title={`Book Taxi ${lr.fromArea} to ${lr.toArea} — ₹${lr.startingFare}!`} subtitle="24/7 | AC Cab | Professional Driver" whatsappMessage={`Hi, I need taxi from ${lr.fromArea} to ${lr.toArea} in ${lr.cityName}`} />
      </div>
    </div>
  );
}
