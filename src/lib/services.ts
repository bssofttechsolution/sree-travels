// ============================================================
// SREE TRAVELS — SERVICES CONFIGURATION
// All 8 service types with content templates
// ============================================================

export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  startingPrice: number;
  priceUnit: string;
  features: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export const services: ServiceData[] = [
  {
    slug: "one-way-cab",
    name: "One Way Cab",
    shortName: "One Way",
    icon: "🚗",
    description: "Pay only for one side travel — no return fare charges. Perfect for one-way trips between cities. Book affordable one way cab with professional drivers, AC vehicles, and transparent pricing. Best for office travel, hospital trips, station drops, and single-direction journeys.",
    startingPrice: 1799,
    priceUnit: "onwards",
    features: [
      "Pay only one-way fare — no return charges",
      "AC cab with professional driver",
      "Door-to-door pickup & drop",
      "Available for all cities in Jharkhand",
      "Multiple vehicle options: Hatchback, Sedan, SUV",
      "Toll & driver allowance included"
    ],
    benefits: [
      "Save 40-50% compared to round-trip fares",
      "No waiting charges unlike autos/shared cabs",
      "Fixed price — know your fare before booking",
      "Private cab — no sharing with strangers",
      "Luggage space — carry as much as you need",
      "24/7 availability including nights and holidays"
    ],
    faqs: [
      {
        question: "What is one way cab fare from {city}?",
        answer: "One way cab fare from {city} starts at ₹{price} depending on destination. Hatchback cabs are most affordable, while SUV and Innova Crysta cost more. Call +919204714249 for exact fare quote."
      },
      {
        question: "How to book one way cab in {city}?",
        answer: "You can book one way cab in {city} by calling +91 92047 14249 or sending WhatsApp message. Share your pickup location, destination, date and preferred cab type. We'll confirm immediately."
      },
      {
        question: "Is one way cab cheaper than round trip in {city}?",
        answer: "Yes! One way cab from {city} is 40-50% cheaper than round trip because you pay only for one direction travel. No return fare, no waiting charges."
      },
      {
        question: "Which cabs are available for one way trip from {city}?",
        answer: "For one way cab from {city}, we offer Swift Dzire, Honda City, Toyota Innova, Innova Crysta, Ertiga, and Tempo Traveller. All vehicles are AC, GPS-tracked, and well-maintained."
      },
      {
        question: "Can I book one way cab at night from {city}?",
        answer: "Yes, Sree Travels provides 24/7 one way cab service from {city} including late-night bookings and early morning trips. All our drivers are police-verified for your safety."
      }
    ]
  },
  {
    slug: "round-trip-cab",
    name: "Round Trip Cab",
    shortName: "Round Trip",
    icon: "🔄",
    description: "Book a round trip cab for your return journey. Get 10% discount on return trip. Ideal for weekend getaways, family trips, and business travel. Driver waits at destination and brings you back comfortably.",
    startingPrice: 2999,
    priceUnit: "onwards",
    features: [
      "10% discount on return trip booking",
      "Same driver for both sides of journey",
      "Driver waiting time included",
      "Flexible scheduling — return anytime",
      "Multi-day round trip available",
      "All-inclusive pricing with tolls & fuel"
    ],
    benefits: [
      "Same trusted driver for your entire trip",
      "No hassle of finding return cab",
      "10% discount on round trip fare",
      "Driver waits at destination — your car, your time",
      "Multi-day trips with overnight driver stay available",
      "Best for weekend trips and family vacations"
    ],
    faqs: [
      {
        question: "What is round trip cab fare from {city}?",
        answer: "Round trip cab fare from {city} starts at ₹{price} with 10% discount on return trip. Fare depends on destination and cab type. Call +919204714249 for exact quote."
      },
      {
        question: "Is round trip cheaper than two one-way cabs?",
        answer: "Yes! Round trip from {city} gives you 10% discount on the return fare, plus you get the same driver for both sides. This is usually 15-20% cheaper than booking two separate one-way cabs."
      },
      {
        question: "How long will driver wait at destination?",
        answer: "For day round trips from {city}, driver waiting time of up to 4 hours is included. For multi-day trips, driver allowance and stay arrangements are made separately."
      },
      {
        question: "Can I book multi-day round trip from {city}?",
        answer: "Yes, we offer multi-day round trip cabs from {city}. Driver stay, allowance, and parking charges are included. Call +919204714249 for multi-day trip packages."
      },
      {
        question: "Can I change return date for round trip cab?",
        answer: "Yes, you can modify your return date by informing us at least 6 hours before. Call or WhatsApp +919204714249 to reschedule your round trip cab from {city}."
      }
    ]
  },
  {
    slug: "outstation-cab",
    name: "Outstation Cab",
    shortName: "Outstation",
    icon: "🛣️",
    description: "Travel beyond city limits with our outstation cab service. Comfortable long-distance travel in AC cabs with experienced drivers who know the routes. Available for one-way, round trip, and multi-city tours.",
    startingPrice: 1999,
    priceUnit: "onwards",
    features: [
      "Long-distance travel across states",
      "Experienced highway drivers",
      "All-inclusive fare with toll & fuel",
      "One way & round trip options",
      "Multi-city tour packages",
      "24/7 roadside assistance"
    ],
    benefits: [
      "Travel comfortably over long distances",
      "Experienced drivers familiar with inter-city routes",
      "All tolls, fuel, and driver charges included",
      "Stop wherever you want — flexible itinerary",
      "No train/bus booking hassles",
      "Door-to-door service — pickup from your location"
    ],
    faqs: [
      {
        question: "What is outstation cab fare from {city}?",
        answer: "Outstation cab from {city} starts at ₹{price} per trip depending on destination. We offer competitive rates for Hatchback, Sedan, SUV, and Tempo Traveller. Call +919204714249 for destination-specific fare."
      },
      {
        question: "Which routes are available for outstation cab from {city}?",
        answer: "From {city}, outstation cabs are available to all major cities including Kolkata, Ranchi, Patna, Dhanbad, Bokaro, Puri, Bhubaneswar, and many more. Call for any destination."
      },
      {
        question: "Is toll included in outstation cab fare?",
        answer: "Yes, for most routes from {city}, toll charges are included in the quoted fare. State taxes, if applicable during interstate travel, may be charged extra."
      },
      {
        question: "Can I book outstation cab for next day from {city}?",
        answer: "Yes, advance booking for outstation cab from {city} is available. We recommend booking at least 6-12 hours in advance for guaranteed availability. Call +919204714249."
      },
      {
        question: "Do you provide outstation cab with driver from {city}?",
        answer: "Yes, all outstation cabs from {city} come with an experienced, police-verified professional driver. We do not offer self-drive options for safety reasons."
      }
    ]
  },
  {
    slug: "local-taxi",
    name: "Local Taxi",
    shortName: "Local",
    icon: "🏙️",
    description: "Hourly rental cab service for local travel within the city. Choose from 4-hour/40km or 8-hour/80km packages. Perfect for shopping trips, hospital visits, city tours, and multi-stop errands.",
    startingPrice: 799,
    priceUnit: "for 4hr/40km",
    features: [
      "4hr/40km & 8hr/80km packages",
      "Multiple city stops allowed",
      "Driver waits at each location",
      "AC cab — Hatchback, Sedan, SUV",
      "Flexible timing within package hours",
      "Extension available at per-hour rate"
    ],
    benefits: [
      "Much cheaper than booking multiple autos",
      "Your own cab for the entire duration",
      "Make multiple stops — shopping, hospital, office",
      "Driver waits — no need to find new cab each time",
      "More comfortable than auto-rickshaws",
      "Available from 5 AM to midnight"
    ],
    faqs: [
      {
        question: "What is local taxi fare in {city}?",
        answer: "Local taxi fare in {city} starts at ₹{price} for 4hr/40km package (Hatchback). Sedan starts at ₹1,099 and SUV at ₹1,499 for the same package. 8hr/80km packages also available."
      },
      {
        question: "Can I make multiple stops with local taxi in {city}?",
        answer: "Yes! Our local taxi service in {city} allows unlimited stops within your package hours and kilometers. Shop, visit hospital, pick up family — the cab is yours."
      },
      {
        question: "What happens if I exceed the package limit?",
        answer: "If you exceed the 4hr/40km or 8hr/80km package in {city}, extra charges apply at ₹12-15/km and ₹100-150/hour depending on cab type. We inform you before any additional charges."
      },
      {
        question: "Is local taxi available for airport pickup in {city}?",
        answer: "Yes, local taxi from {city} can be used for airport pickup/drop. However, we recommend our dedicated airport transfer service for better rates and guaranteed availability."
      },
      {
        question: "Can I book local taxi for full day in {city}?",
        answer: "Yes, full-day (8hr/80km) local taxi packages are available in {city}. Great for city tours, sightseeing, and multi-stop business meetings. Call +919204714249."
      }
    ]
  },
  {
    slug: "airport-cab",
    name: "Airport Cab",
    shortName: "Airport",
    icon: "✈️",
    description: "Reliable airport transfer service with flight tracking and meet & greet. Never miss your flight with our punctual airport cab service. Available for both pickup and drop at nearest airports.",
    startingPrice: 1499,
    priceUnit: "onwards",
    features: [
      "Flight tracking — we adjust for delays",
      "Meet & greet at arrivals",
      "Available 24/7 including early morning",
      "Luggage assistance included",
      "Free 30-min waiting at airport",
      "Drop-off at terminal door"
    ],
    benefits: [
      "Never miss a flight — we track your flight status",
      "No surge pricing unlike app-based cabs",
      "Fixed fare — know cost before booking",
      "Early morning flights? We pickup at 3 AM",
      "Clean, spacious boot for luggage",
      "Professional driver who knows airport routes"
    ],
    faqs: [
      {
        question: "How much is airport cab fare from {city}?",
        answer: "Airport cab from {city} starts at ₹{price} depending on airport distance and cab type. We cover the nearest airport with fixed, transparent pricing. Call +919204714249 for exact fare."
      },
      {
        question: "Do you provide early morning airport cab from {city}?",
        answer: "Yes! We provide airport cab from {city} at any time — including 3 AM, 4 AM, and 5 AM pickups for early morning flights. Book at least 4 hours in advance."
      },
      {
        question: "Do you track flight arrival for airport pickup?",
        answer: "Yes, for airport pickup at {city}'s nearest airport, we track your flight status. If your flight is delayed, our driver adjusts arrival time accordingly — no extra charges."
      },
      {
        question: "How long will driver wait at airport for pickup?",
        answer: "Our driver provides 30 minutes of free waiting time at the airport for pickup from {city}. After that, ₹100/hour waiting charge applies."
      },
      {
        question: "Can I book airport cab from {city} for group travel?",
        answer: "Yes, for group airport transfers from {city}, we offer Innova (6-seater), Innova Crysta (7-seater), and Tempo Traveller (12-seater). Call +919204714249 for group bookings."
      }
    ]
  },
  {
    slug: "wedding-cab",
    name: "Wedding Cab",
    shortName: "Wedding",
    icon: "💒",
    description: "Make your wedding special with our decorated wedding car service. Premium vehicles with ribbons, flowers, and professional chauffeurs. Available for baarat, vidaai, and wedding guest transport.",
    startingPrice: 4999,
    priceUnit: "per day",
    features: [
      "Decorated car with ribbons & flowers",
      "Professional chauffeur in formal dress",
      "Premium vehicles: Crysta, Fortuner, Mercedes",
      "Baarat & Vidaai special packages",
      "Guest transport fleet available",
      "Multi-day wedding packages"
    ],
    benefits: [
      "Make a grand impression at your wedding",
      "Professional chauffeur adds to the occasion",
      "Premium decorated vehicles for the couple",
      "Guest transport — no one worries about parking",
      "Multi-day packages for destination weddings",
      "Photography-friendly vehicles"
    ],
    faqs: [
      {
        question: "What is wedding car rental price in {city}?",
        answer: "Wedding car rental in {city} starts at ₹{price} per day. Innova Crysta decorated at ₹6,999, Fortuner at ₹9,999, and luxury vehicles from ₹15,999. Call +919204714249 for wedding packages."
      },
      {
        question: "Do you provide decorated cars for wedding in {city}?",
        answer: "Yes! We provide fully decorated wedding cars in {city} with ribbons, flowers, and bows. Decoration is complimentary for our premium wedding packages."
      },
      {
        question: "Can I book multiple cars for wedding guests in {city}?",
        answer: "Yes, we provide fleet booking for wedding guest transport in {city}. From sedan to Tempo Traveller, we can arrange transport for 50-500+ guests. Call for fleet pricing."
      },
      {
        question: "Do you provide chauffeur in formal dress for wedding?",
        answer: "Yes, all wedding car bookings in {city} come with a professionally dressed chauffeur in formal attire. Black suit and tie for premium bookings."
      },
      {
        question: "Can I book wedding car for baarat in {city}?",
        answer: "Yes, we provide special baarat car packages in {city} with decorated vehicle, slow-drive mode, and coordinated fleet for baraat procession. Call +919204714249."
      }
    ]
  },
  {
    slug: "corporate-cab",
    name: "Corporate Cab",
    shortName: "Corporate",
    icon: "🏢",
    description: "Professional corporate cab service with monthly packages, employee transport, and business travel solutions. GST billing, dedicated account manager, and customized fleet for your corporate needs.",
    startingPrice: 15999,
    priceUnit: "per month",
    features: [
      "Monthly & quarterly packages available",
      "GST invoice & corporate billing",
      "Dedicated account manager",
      "Employee pickup & drop service",
      "Customized route planning",
      "Real-time GPS tracking for fleet"
    ],
    benefits: [
      "Save 30-40% compared to daily bookings",
      "GST billing for tax benefits",
      "Dedicated fleet for your company",
      "Employee safety with GPS-tracked vehicles",
      "Monthly reports and analytics",
      "Flexible cancellation and rescheduling"
    ],
    faqs: [
      {
        question: "What is corporate cab package price in {city}?",
        answer: "Corporate cab packages in {city} start at ₹{price}/month for a dedicated sedan. Custom packages available based on routes, timing, and fleet size. Call +919204714249 for corporate quotation."
      },
      {
        question: "Do you provide GST invoice for corporate cab?",
        answer: "Yes, all corporate cab services in {city} come with proper GST invoice and corporate billing. We also provide monthly summary statements for your accounts department."
      },
      {
        question: "Can you handle employee transport for our {city} office?",
        answer: "Yes, we specialize in employee transport solutions in {city}. Customized routes, timing, and dedicated vehicles with trained drivers. We handle transport for companies with 10-500+ employees."
      },
      {
        question: "What vehicles are available for corporate cab in {city}?",
        answer: "For corporate cab service in {city}, we offer Swift Dzire, Honda City, Toyota Innova, Innova Crysta, and Tempo Traveller. Vehicle selection depends on your team size and route requirements."
      },
      {
        question: "Is there a minimum contract period for corporate cab?",
        answer: "Minimum contract period for corporate cab in {city} is 1 month. We offer better rates for quarterly (3-month) and annual contracts. Call +919204714249."
      }
    ]
  },
  {
    slug: "pilgrimage-cab",
    name: "Pilgrimage Cab",
    shortName: "Pilgrimage",
    icon: "🙏",
    description: "Specialized pilgrimage cab service for temple visits and religious tours. Experienced drivers who know temple routes, darshan timings, and local customs. Available for Baidyanath Dham, Parasnath, and other sacred sites.",
    startingPrice: 1999,
    priceUnit: "onwards",
    features: [
      "Drivers familiar with temple routes",
      "Knowledge of darshan timings",
      "Multi-temple tour packages",
      "Comfortable vehicles for senior citizens",
      "Flexible waiting at temples",
      "Group pilgrimage transport available"
    ],
    benefits: [
      "No hassle navigating unfamiliar temple areas",
      "Drivers who know darshan timings save your time",
      "Comfortable travel for elderly family members",
      "Multi-temple tours in single booking",
      "All temple route knowledge with driver",
      "Group rates for community pilgrimages"
    ],
    faqs: [
      {
        question: "Do you provide cab for Baidyanath Dham from {city}?",
        answer: "Yes, we provide dedicated pilgrimage cab from {city} to Baidyanath Dham, Deoghar. Our drivers know the temple routes, parking areas, and darshan timings. Call +919204714249."
      },
      {
        question: "What is pilgrimage cab fare from {city}?",
        answer: "Pilgrimage cab from {city} starts at ₹{price} depending on destination. We offer special packages for temple visits including waiting time. Call for pilgrimage packages."
      },
      {
        question: "Do drivers know temple routes and darshan timings?",
        answer: "Yes, our pilgrimage cab drivers from {city} are experienced with temple routes, parking areas, shoe deposit points, and darshan timings. They help you plan your visit efficiently."
      },
      {
        question: "Can I book cab for multiple temple visits?",
        answer: "Yes, we offer multi-temple tour packages from {city}. Visit Baidyanath Dham, Parasnath, Rajrappa, and other sacred sites in one trip. Call +919204714249 for tour packages."
      },
      {
        question: "Is pilgrimage cab available for senior citizens?",
        answer: "Yes, our pilgrimage cabs from {city} are senior-citizen friendly. We provide comfortable vehicles with easy entry/exit and drivers who assist elderly passengers."
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

// Services available per city tier
export function getServicesForCity(tier: 1 | 2 | 3): ServiceData[] {
  if (tier === 3) {
    return services.filter(s =>
      ["one-way-cab", "outstation-cab", "local-taxi", "airport-cab"].includes(s.slug)
    );
  }
  if (tier === 2) {
    // Deoghar gets pilgrimage-cab instead of corporate-cab
    return services;
  }
  return services.filter(s => s.slug !== "pilgrimage-cab");
}
