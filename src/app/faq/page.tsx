import { Metadata } from 'next';
import HeroSlider from '@/components/HeroSlider';
import CtaBanner from '@/components/CtaBanner';
import FaqSection from '@/components/FaqSection';

export const metadata: Metadata = {
  title: 'FAQ — Sree Travels | Cab Service Questions Answered | Jharkhand',
  description: 'Frequently asked questions about Sree Travels cab service in Jharkhand. Booking process, fares, cancellation, payment, vehicle types, driver verification, and more. Call +919204714249.',
  keywords: [
    'sree travels faq', 'cab booking faq jharkhand', 'taxi service questions jamshedpur',
    'cab fare questions ranchi', 'how to book cab jharkhand', 'cab cancellation policy',
    'cab payment methods jharkhand', 'outstation cab faq', 'airport taxi faq',
  ],
  alternates: { canonical: 'https://www.sreetravel.com/faq' },
  openGraph: {
    title: 'FAQ — Sree Travels | All Your Questions Answered',
    description: 'Everything you need to know about booking cabs in Jharkhand with Sree Travels.',
    url: 'https://www.sreetravel.com/faq',
    images: [{ url: '/background/IMG-20250403-WA0019.jpg', width: 1200, height: 630, alt: 'Sree Travels FAQ' }],
  },
};

const allFaqs = [
  // Booking
  { question: 'How do I book a cab with Sree Travels?', answer: 'You can book a cab by calling +91 92047 14249, sending a WhatsApp message, or using the online booking form on our website. Share your pickup location, destination, date, time, and preferred cab type. You will receive instant confirmation with driver details.' },
  { question: 'What is the fastest way to book a cab?', answer: 'WhatsApp is the fastest way — send your travel details to +91 92047 14249 and get confirmed in under 30 seconds. No app download required. You can also use the booking form on any page of our website.' },
  { question: 'Can I book a cab for someone else?', answer: 'Absolutely! Just provide the passenger\'s name, phone number, and pickup details. We will coordinate directly with them and share driver details on their phone as well.' },
  { question: 'How far in advance should I book?', answer: 'We recommend booking at least 2-3 hours in advance for local trips and 12-24 hours for outstation trips. However, we do accommodate last-minute bookings subject to cab availability. For airport transfers, book at least 4 hours ahead.' },
  
  // Pricing
  { question: 'What is the starting fare for a cab in Jharkhand?', answer: 'Local taxi starts at ₹799 for a 4hr/40km hatchback package. One-way outstation cabs start at ₹11/km (Hatchback), ₹13/km (Sedan), ₹16/km (SUV), ₹18/km (Innova Crysta). Call +919204714249 for exact fare to your destination.' },
  { question: 'Are tolls and fuel charges included in the fare?', answer: 'Yes, for most routes, toll charges and fuel costs are included in the quoted fare. For interstate travel (e.g., Jharkhand to West Bengal), state entry taxes may be charged extra as actuals.' },
  { question: 'Do you charge extra for night travel?', answer: 'No additional night charges for outstation trips. For local taxi bookings between 10 PM and 6 AM, a nominal night surcharge of 10% may apply. We believe in transparent pricing with no hidden charges.' },
  { question: 'Is there a minimum billing for outstation trips?', answer: 'Yes, for round trip outstation bookings, there is a minimum billing of 250 km per day. For one-way trips, billing is based on actual distance traveled. Call +919204714249 for details.' },
  
  // Fleet
  { question: 'Which types of cabs are available?', answer: 'We offer Swift Dzire (Hatchback, 4-seater), Honda City/Ciaz (Sedan, 4-seater), Maruti Ertiga (MPV, 6-seater), Toyota Innova (SUV, 6-7 seater), Innova Crysta (Premium, 7-seater), and Tempo Traveller (Mini-bus, 12-15 seater). All vehicles are AC, GPS-tracked, and well-maintained.' },
  { question: 'Are all cabs air-conditioned?', answer: 'Yes, 100% of our fleet is fully air-conditioned. We ensure the AC is properly serviced before every trip. You can enjoy comfortable travel in any weather with Sree Travels.' },
  { question: 'Can I request a specific car model?', answer: 'Yes, you can request a specific vehicle model like Innova Crysta or Swift Dzire. We will try our best to accommodate your preference, subject to availability on your travel date.' },
  
  // Safety
  { question: 'Are your drivers police-verified?', answer: 'Yes, all Sree Travels drivers are 100% police-verified with proper background checks. They carry at least 5 years of professional driving experience and undergo regular training on road safety and customer service.' },
  { question: 'Do your cabs have GPS tracking?', answer: 'Yes, every cab in our fleet is equipped with real-time GPS tracking. You can share your live trip location with family members for complete peace of mind during your journey.' },
  { question: 'Is Sree Travels safe for women and solo travelers?', answer: 'Absolutely. Safety is our highest priority. All drivers are police-verified, vehicles are GPS-tracked, and we provide a 24/7 emergency helpline. Many of our regular customers are women professionals and solo travelers who trust us for daily commute and outstation trips.' },
  
  // Cancellation
  { question: 'What is the cancellation policy?', answer: 'Free cancellation is available up to 2 hours before your scheduled pickup time. Full refund is processed instantly, no questions asked. Cancellations within 2 hours may attract a nominal cancellation fee of ₹200-500 depending on the trip type.' },
  { question: 'Can I change my booking date or time?', answer: 'Yes, you can modify your booking date, time, pickup location, or destination by contacting us at least 2 hours before the original pickup time. Call or WhatsApp +91 92047 14249 to reschedule.' },
  
  // Payment
  { question: 'What payment methods do you accept?', answer: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), Credit Card, Debit Card, and Net Banking. For corporate clients, we also offer monthly billing with GST invoices.' },
  { question: 'Do I need to pay in advance?', answer: 'No advance payment is required for most bookings. You can pay the driver directly at the end of your trip via cash or UPI. For wedding bookings and multi-day trips, a 20% advance is required to confirm the reservation.' },
  
  // Services
  { question: 'Do you provide airport pickup and drop service?', answer: 'Yes, we provide 24/7 airport transfer service for Birsa Munda Airport (Ranchi), Deoghar Airport, and all nearby airports. We track your flight status and adjust pickup time for delays — no extra charges. Free 30-minute waiting at the airport.' },
  { question: 'Can I book a cab for a wedding?', answer: 'Yes! We offer premium wedding car packages starting at ₹4,999/day. Decorated Innova Crysta, Fortuner, and Mercedes available with professionally dressed chauffeur. We also arrange fleet transport for wedding guests. Call +919204714249 for wedding packages.' },
  { question: 'Do you offer corporate cab packages?', answer: 'Yes, we offer customized corporate cab packages starting at ₹15,999/month. Includes dedicated fleet, GST billing, monthly reports, employee transport solutions, and a dedicated account manager. Email info@sreetravel.com for corporate proposals.' },
  
  // Cities
  { question: 'Which cities do you serve in Jharkhand?', answer: 'We serve 15+ cities across Jharkhand: Jamshedpur, Ranchi, Dhanbad, Bokaro Steel City, Deoghar, Hazaribagh, Giridih, Dumka, Chaibasa, Adityapur, Ramgarh, Koderma, Phusro, Daltonganj, and Pakur. We also serve outstation routes to Kolkata, Patna, Puri, Bhubaneswar, and other inter-state destinations.' },
  { question: 'Do you provide cabs outside Jharkhand?', answer: 'Yes! We provide outstation cabs from Jharkhand to West Bengal (Kolkata, Durgapur), Bihar (Patna, Gaya, Bodh Gaya), Odisha (Puri, Bhubaneswar), and other states. One-way and round-trip options available.' },
  
  // Miscellaneous
  { question: 'Can I carry pets in the cab?', answer: 'Yes, pets are allowed in our cabs with prior intimation. Please inform us while booking so we can assign a pet-friendly vehicle. A nominal cleaning charge of ₹200-500 may apply.' },
  { question: 'Do you provide child seats?', answer: 'Yes, child/baby seats are available on request at no extra charge. Please mention the requirement while booking so we can ensure one is fitted in your cab.' },
  { question: 'What happens if the cab breaks down during the trip?', answer: 'In the rare event of a breakdown, we arrange an immediate replacement cab at no extra charge. Our 24/7 roadside assistance ensures you reach your destination on time. Call +919204714249 for emergency support.' },
  { question: 'How do I contact Sree Travels?', answer: 'Call: +91 92047 14249 (24/7). WhatsApp: +91 92047 14249. Email: info@sreetravel.com. Office: Dimna Road, Mango, Jamshedpur, Jharkhand – 831018. We respond to WhatsApp messages within 60 seconds.' },
];

export default function FaqPage() {
  return (
    <div className="page-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFaqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />

      <section className="hero-section" style={{ minHeight: '40vh' }}>
        <HeroSlider />
        <div className="container-main" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem', paddingBottom: '3rem' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 0.85rem', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', borderRadius: '8px', fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600, marginBottom: '1rem' }}>
            ❓ 30+ Questions Answered
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '1rem' }}>
            <span className="gold-text">Frequently Asked Questions</span><br />
            <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', color: '#94a3b8', fontWeight: 600 }}>
              Everything About Sree Travels Cab Service in Jharkhand
            </span>
          </h1>
        </div>
      </section>

      <div className="container-main section-spacing">
        {/* Category Sections */}
        {[
          { title: '📞 Booking & Reservations', faqs: allFaqs.slice(0, 4) },
          { title: '💰 Pricing & Fares', faqs: allFaqs.slice(4, 8) },
          { title: '🚗 Our Fleet', faqs: allFaqs.slice(8, 11) },
          { title: '🛡️ Safety & Security', faqs: allFaqs.slice(11, 14) },
          { title: '❌ Cancellation & Changes', faqs: allFaqs.slice(14, 16) },
          { title: '💳 Payment', faqs: allFaqs.slice(16, 18) },
          { title: '🚕 Our Services', faqs: allFaqs.slice(18, 21) },
          { title: '🏙️ Cities & Coverage', faqs: allFaqs.slice(21, 23) },
          { title: '📋 Other Questions', faqs: allFaqs.slice(23) },
        ].map((category, ci) => (
          <div key={ci} className="content-block" style={{ marginBottom: '2.5rem' }}>
            <h2><span className="gold-text">{category.title}</span></h2>
            <div style={{ marginTop: '1rem' }}>
              <FaqSection faqs={category.faqs} />
            </div>
          </div>
        ))}

        {/* Internal Links */}
        <div className="content-block" style={{ marginTop: '3rem' }}>
          <h2>Explore <span className="gold-text">Our Services</span></h2>
          <div className="internal-links-grid" style={{ marginTop: '1rem' }}>
            <a href="/jamshedpur/one-way-cab" className="internal-link">🚗 One Way Cab</a>
            <a href="/jamshedpur/round-trip-cab" className="internal-link">🔄 Round Trip Cab</a>
            <a href="/jamshedpur/outstation-cab" className="internal-link">🛣️ Outstation Cab</a>
            <a href="/jamshedpur/local-taxi" className="internal-link">🏙️ Local Taxi</a>
            <a href="/jamshedpur/airport-cab" className="internal-link">✈️ Airport Cab</a>
            <a href="/jamshedpur/wedding-cab" className="internal-link">💒 Wedding Cab</a>
            <a href="/jamshedpur/corporate-cab" className="internal-link">🏢 Corporate Cab</a>
            <a href="/fare-chart" className="internal-link">📊 Fare Chart</a>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem' }}>
          <CtaBanner
            title="Still Have Questions? Call Us!"
            subtitle="24/7 support | ☎ +91 92047 14249 | WhatsApp in 30 seconds"
            whatsappMessage="Hi Sree Travels, I have a question about your cab service"
          />
        </div>
      </div>
    </div>
  );
}
