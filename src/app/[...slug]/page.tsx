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
      const titleName = isJSR ? 'Jamshedpur (Tata)' : city.name;
      const seoName = isJSR ? 'Jamshedpur, Tatanagar' : city.name;
      return {
        title: `Cab Service in ${titleName} | Car Rental & Taxi Booking ☎ +919204714249`,
        description: `Book the best cab service in ${seoName}, Jharkhand ✅ One Way ✅ Round Trip ✅ Outstation ✅ Local Taxi ✅ Airport Transfer. AC cabs from ₹${city.localFare.hatchback_4hr}. GPS tracked, verified drivers. 24/7 service. Call +919204714249. Trusted since 2015.`,
        keywords: [
          `cab service ${city.name.toLowerCase()}`, `taxi ${city.name.toLowerCase()}`, `taxi service ${city.name.toLowerCase()}`,
          `cab booking ${city.name.toLowerCase()}`, `car rental ${city.name.toLowerCase()}`, `best cab ${city.name.toLowerCase()}`,
          `outstation cab ${city.name.toLowerCase()}`, `airport taxi ${city.name.toLowerCase()}`, `local taxi ${city.name.toLowerCase()}`,
          ...(isJSR ? ['cab service in tata', 'tatanagar taxi', 'car rental tata', 'tata cab service', 'tatanagar cab booking', 'tata taxi booking online'] : []),
          `24/7 cab ${city.name.toLowerCase()}`, `cab near me ${city.name.toLowerCase()}`, `taxi near me ${city.name.toLowerCase()}`,
          `one way cab ${city.name.toLowerCase()}`, `round trip cab ${city.name.toLowerCase()}`,
          `cheapest cab ${city.name.toLowerCase()}`, `sree travels ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://www.sreetravel.com/cab-service-${city.slug}` },
        openGraph: {
          title: `Cab Service in ${titleName} | Sree Travels`,
          description: `Book AC cab in ${seoName}. One way, round trip, outstation, airport & local. ₹${city.localFare.hatchback_4hr} onwards. ☎ +919204714249`,
          url: `https://www.sreetravel.com/cab-service-${city.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `Cab Service in ${titleName}` }],
        },
      };
    }
    case 'service-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const service = getServiceBySlug(matched.serviceSlug)!;
      const isJSR = city.slug === 'jamshedpur';
      const titleName = isJSR ? 'Jamshedpur/Tata' : city.name;
      return {
        title: `${service.name} in ${titleName} | ₹${service.startingPrice} Onwards | ☎ +919204714249`,
        description: `Book ${service.name.toLowerCase()} in ${isJSR ? 'Jamshedpur/Tatanagar' : city.name}, Jharkhand ✅ AC cab ✅ Verified driver ✅ Fixed price ✅ GPS tracked. Starting ₹${service.startingPrice} ${service.priceUnit}. 24/7 availability. Call +919204714249. Sree Travels.`,
        keywords: [
          `${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.name.toLowerCase()} in ${city.name.toLowerCase()}`,
          ...(isJSR ? [`${service.name.toLowerCase()} tata`, `${service.name.toLowerCase()} tatanagar`] : []),
          `book ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `${service.slug.replace(/-/g, ' ')} ${city.name.toLowerCase()}`,
          `cheap ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
          `best ${service.name.toLowerCase()} ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://www.sreetravel.com/${city.slug}/${service.slug}` },
        openGraph: {
          title: `${service.name} in ${titleName} | Sree Travels`,
          description: `₹${service.startingPrice} ${service.priceUnit}. Book now ☎ +919204714249`,
          url: `https://www.sreetravel.com/${city.slug}/${service.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${service.name} in ${titleName}` }],
        },
      };
    }
    case 'fleet-in-city': {
      const city = getCityBySlug(matched.citySlug)!;
      const vehicle = getFleetBySlug(matched.fleetSlug)!;
      return {
        title: `${vehicle.name} in ${city.name} | ₹${vehicle.perKmRate}/km | ☎ +919204714249`,
        description: `Hire ${vehicle.shortName} in ${city.name}, Jharkhand ✅ AC ✅ ${vehicle.seatingCapacity}-seater ✅ GPS tracked ✅ Verified driver. ₹${vehicle.perKmRate}/km onwards. Best for ${vehicle.bestFor.slice(0,2).join(' & ')}. Call +919204714249.`,
        keywords: [
          `${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} on rent ${city.name.toLowerCase()}`,
          `hire ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} cab ${city.name.toLowerCase()}`,
          `${vehicle.shortName.toLowerCase()} taxi ${city.name.toLowerCase()}`,
          `book ${vehicle.shortName.toLowerCase()} ${city.name.toLowerCase()}`,
        ],
        alternates: { canonical: `https://www.sreetravel.com/${city.slug}/${vehicle.slug}` },
        openGraph: {
          title: `${vehicle.name} in ${city.name} | Sree Travels`,
          description: `₹${vehicle.perKmRate}/km | ${vehicle.seatingCapacity} seater. Book now ☎ +919204714249`,
          url: `https://www.sreetravel.com/${city.slug}/${vehicle.slug}`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${vehicle.name} in ${city.name}` }],
        },
      };
    }
    case 'outstation-route': {
      const route = getRoute(matched.from, matched.to)!;
      const isFromJSR = matched.from === 'jamshedpur';
      const isToJSR = matched.to === 'jamshedpur';
      
      const fromName = isFromJSR ? 'Jamshedpur/Tata' : route.fromName;
      const toName = isToJSR ? 'Jamshedpur/Tata' : route.toName;
      const seoFromName = isFromJSR ? 'Jamshedpur (Tata)' : route.fromName;
      const seoToName = isToJSR ? 'Jamshedpur (Tata)' : route.toName;

      return {
        title: `${seoFromName} to ${seoToName} Cab | ₹${route.fares.hatchback.toLocaleString()} | ☎ +919204714249`,
        description: `Book ${fromName} to ${toName} cab ✅ One Way ₹${route.fares.hatchback.toLocaleString()} ✅ AC cab ✅ ${route.distanceKm}km ✅ ${route.durationHrs}hrs ✅ Sedan ₹${route.fares.sedan.toLocaleString()} ✅ SUV ₹${route.fares.suv.toLocaleString()}. Toll included. Call +919204714249.`,
        keywords: [
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi`,
          ...(isFromJSR ? [`tata to ${route.toName.toLowerCase()} cab`, `tatanagar to ${route.toName.toLowerCase()} cab`, `car rental tata to ${route.toName.toLowerCase()}`] : []),
          ...(isToJSR ? [`${route.fromName.toLowerCase()} to tata cab`, `${route.fromName.toLowerCase()} to tatanagar taxi`] : []),
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} taxi fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} cab fare`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} distance`,
          `${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()} one way cab`,
          `cab from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `taxi from ${route.fromName.toLowerCase()} to ${route.toName.toLowerCase()}`,
          `outstation cab ${route.fromName.toLowerCase()}`,
          `${route.fromName.toLowerCase()} ${route.toName.toLowerCase()} cab booking`,
        ],
        alternates: { canonical: `https://www.sreetravel.com/${route.from}-to-${route.to}-cab` },
        openGraph: {
          title: `${fromName} to ${toName} Cab \u2014 \u20b9${route.fares.hatchback.toLocaleString()} Onwards`,
          description: `${route.distanceKm}km \u2022 ${route.durationHrs}hrs. AC cab with verified driver. Book now \u260e +919204714249`,
          url: `https://www.sreetravel.com/${route.from}-to-${route.to}-cab`,
          images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: `${seoFromName} to ${seoToName} Cab` }],
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
        alternates: { canonical: `https://www.sreetravel.com/local-taxi-${lr.city}/${lr.slug}` },
        openGraph: {
          title: `Taxi ${lr.fromArea} to ${lr.toArea} \u2014 \u20b9${lr.startingFare}`,
          description: `${lr.distanceKm}km \u2022 ${lr.durationMin}min. Book now \u260e +919204714249`,
          url: `https://www.sreetravel.com/local-taxi-${lr.city}/${lr.slug}`,
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
  const cityRoutes = getRoutesByFrom(city.slug).slice(0, 6);
  const cityLocalRoutes = getLocalRoutesByCity(city.slug);

  const faqs = [
    { question: `What is the cab fare in ${city.name}?`, answer: `Local taxi in ${city.name} starts at ₹${city.localFare.hatchback_4hr} for 4hr/40km (Hatchback). Sedan ₹${city.localFare.sedan_4hr}, SUV ₹${city.localFare.suv_4hr}. Call +919204714249 for outstation quotes.` },
    { question: `How to book a cab in ${city.name}?`, answer: `Book via WhatsApp at +91 92047 14249 or call us. Share pickup, destination, date, cab type. Instant confirmation with driver details.` },
    { question: `Do you provide cab service at night in ${city.name}?`, answer: `Yes, 24/7 cab service in ${city.name} including late-night and early morning. All drivers are police-verified.` },
    { question: `Which cabs are available in ${city.name}?`, answer: `Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga, and Tempo Traveller — all AC, GPS-tracked.` },
    { question: `Do you serve all areas of ${city.name}?`, answer: `Yes, all localities including ${city.localities.slice(0, 5).join(', ')}, and more.` },
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="city" data={{ areaServed: `${city.name}, Jharkhand`, faqs, reviews: city.reviews, breadcrumbs: [{ name: 'Home', url: '/' }, { name: 'Jharkhand', url: '/' }, { name: `Cab Service ${city.name}`, url: `/cab-service-${city.slug}` }] }} />

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
              🏆 #1 Rated Cab Service in {displayCityName}
            </div>
            <h1 style={{ marginBottom: '1rem' }}>
              <span className="gold-text">Cab Service in {isJSR ? 'Jamshedpur/Tata (Tatanagar)' : city.name}</span><br />
              <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>
                Book 24/7 | +91 92047 14249 | AC Cabs from ₹{city.localFare.hatchback_4hr}
              </span>
            </h1>
          </div>
          <BookingWidget defaultFrom={city.name} cityName={city.name} />
        </div>
      </section>

      <div className="container-main">
        {/* About */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>About Our Cab Service in {isJSR ? 'Jamshedpur (Tata/Tatanagar)' : city.name}</h2>
            <p>{city.seoDescription}</p>
            <p>Whether you need a quick local ride from {city.localities[0]} to {city.localities[1]}, an outstation trip, or airport transfer — Sree Travels has you covered with {city.tier === 1 ? '50+' : city.tier === 2 ? '30+' : '15+'} verified cabs, 24/7 availability, GPS-tracked fleet, and sanitized AC cabs.</p>
            {city.aka.length > 0 && <p>{city.name} ({city.aka.join(', ')}), {city.district} district. Population: {city.population}. Railway: {city.railwayStation}. Nearest Airport: {city.nearestAirport.name} ({city.nearestAirport.code}), {city.nearestAirport.distance}km away.</p>}
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

        {/* Nearby Airports & Stations */}
        <section className="section-spacing">
          <div className="content-block">
            <h2>{isJSR ? 'Tatanagar Railway Station & Airport Cab Service' : `${city.railwayStation} & Airport Transfer`}</h2>
            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              {isJSR ? (
                <>
                  <p style={{ marginBottom: '0.75rem' }}><strong>Tatanagar Junction Railway Station</strong> is the main railway station serving Jamshedpur/Tata. Sree Travels provides 24/7 cab service from Tatanagar station to any destination — local areas like Bistupur, Mango, Sakchi, Adityapur, or outstation routes to Ranchi, Kolkata, Dhanbad, and more. Our drivers are stationed near the station round the clock for instant pickup.</p>
                  <p style={{ marginBottom: '0.75rem' }}><strong>Birsa Munda Airport (Ranchi)</strong> is the nearest airport, {city.nearestAirport.distance}km from Jamshedpur. Book a <strong>Ranchi Airport to Jamshedpur cab</strong> or <strong>Jamshedpur to Ranchi Airport taxi</strong> starting at ₹2,499. Flight tracking included — no extra charge for delays.</p>
                  <p><strong>Sonari Airport</strong> (IXW) is a smaller airport near Jamshedpur with limited flights. We provide cab service to/from Sonari Airstrip as well.</p>
                </>
              ) : (
                <>
                  <p style={{ marginBottom: '0.75rem' }}><strong>{city.railwayStation}</strong> is the main railway station in {city.name}. Book instant pickup/drop cab service available 24/7.</p>
                  <p><strong>{city.nearestAirport.name}</strong> ({city.nearestAirport.code}) is {city.nearestAirport.distance}km away. We provide reliable airport transfer service with flight tracking.</p>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Corporate & Industrial */}
        {isJSR && (
          <section className="section-spacing">
            <div className="content-block">
              <h2>Corporate Cab Service in Jamshedpur/Tata</h2>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '0.75rem' }}>Jamshedpur (Tata Nagar) is home to major industrial establishments including <strong>Tata Steel</strong>, <strong>Tata Motors</strong>, <strong>Tinplate Company</strong>, <strong>Tata Cummins</strong>, and the <strong>Adityapur Industrial Area</strong> — one of Asia&apos;s largest industrial estates. Sree Travels provides dedicated corporate cab service for executives, employees, and visiting clients.</p>
                <p style={{ marginBottom: '0.75rem' }}>We serve top educational institutions including <strong>XLRI Jamshedpur</strong> (India&apos;s premier B-school), <strong>NIT Jamshedpur</strong>, <strong>Loyola School</strong>, and <strong>JUSCO</strong>. Monthly corporate packages with GST billing, dedicated driver allotment, and centralized billing are available for all companies in Jamshedpur/Tata.</p>
                <p>Contact us for corporate tie-up rates: <a href="tel:+919204714249" style={{ color: 'var(--primary)' }}>+91 92047 14249</a></p>
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

  const faqs = [
    { question: `How much is ${shortFromName} to ${shortToName} cab fare?`, answer: `Starts at ₹${route.fares.hatchback.toLocaleString()} (Hatchback), Sedan ₹${route.fares.sedan.toLocaleString()}, SUV ₹${route.fares.suv.toLocaleString()}, Crysta ₹${route.fares.crysta.toLocaleString()}. All inclusive of toll, fuel, driver.` },
    { question: `How long does ${shortFromName} to ${shortToName} take?`, answer: `Approximately ${route.durationHrs} hours via ${route.nh}. Distance: ${route.distanceKm} km. Best time: ${route.bestTime}.` },
    { question: `Which route does the cab take?`, answer: `${shortFromName} → ${route.via.join(' → ')} → ${shortToName}. Road condition: ${route.roadCondition}.` },
    { question: `Are tolls included?`, answer: `Yes, tolls of ~₹${route.tolls} are included. State taxes extra if applicable.` },
    { question: `Can I book one way cab?`, answer: `Yes! One way from ₹${route.fares.hatchback.toLocaleString()}. No return fare. Call +919204714249.` },
    { question: `Best cab for this trip?`, answer: `${route.distanceKm > 300 ? 'Innova/Crysta for long comfort' : 'Swift Dzire or Sedan for affordable comfort'}. Tempo Traveller for groups.` },
    { question: `Available at night?`, answer: `Yes, 24/7 service. Experienced night-driving drivers available.` },
  ];

  return (
    <div className="page-content">
      <SchemaMarkup type="route" data={{ from: route.fromName, to: route.toName, distance: route.distanceKm, fare: route.fares.hatchback, areaServed: `${route.fromName} to ${route.toName}`, faqs, breadcrumbs: [{ name: 'Home', url: '/' }, { name: `Cab ${route.fromName}`, url: `/cab-service-${route.from}` }, { name: `${route.fromName} to ${route.toName}`, url: `/${route.from}-to-${route.to}-cab` }] }} />

      <section className="hero-section">
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: `Cab ${shortFromName}`, href: `/cab-service-${route.from}` },
            { label: `${shortFromName} to ${shortToName}` },
          ]} />
          <h1 style={{ marginBottom: '1rem' }}>
            <span className="gold-text">{fromName} to {toName} Cab Service</span><br />
            <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1.2rem)', color: '#94a3b8', fontWeight: 600 }}>+91 92047 14249 | ₹{route.fares.hatchback.toLocaleString()} | {route.distanceKm} km</span>
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
          <h2>{route.fromName} to {route.toName} Cab Fare 2025</h2>
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

        {/* Related */}
        {relatedRoutes.length > 0 && (
          <div className="content-block">
            <h2>Similar Routes</h2>
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

        <BlogSection pageName={`${route.fromName} to ${route.toName}`} type="route" />

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
