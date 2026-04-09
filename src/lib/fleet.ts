// ============================================================
// SREE TRAVELS — FLEET CONFIGURATION
// All 7 fleet/vehicle types
// ============================================================

export interface FleetData {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  brand: string;
  model: string;
  type: string;
  image?: string;
  seatingCapacity: number;
  luggageCapacity: string;
  acType: string;
  fuelType: string;
  perKmRate: number;
  features: string[];
  bestFor: string[];
  specs: { label: string; value: string }[];
  description: string;
  faqs: { question: string; answer: string }[];
}

export const fleet: FleetData[] = [
  {
    slug: "swift-dzire-cab",
    name: "Swift Dzire Cab",
    shortName: "Swift Dzire",
    icon: "🚗",
    image: "/fleet/SwiftDzire.webp",
    brand: "Maruti Suzuki",
    model: "Swift Dzire",
    type: "Hatchback / Compact Sedan",
    seatingCapacity: 4,
    luggageCapacity: "2 large + 1 small bag",
    acType: "Full AC",
    fuelType: "Petrol / CNG",
    perKmRate: 12,
    features: [
      "Air Conditioned cabin",
      "Comfortable 4-seater",
      "Good mileage — affordable rates",
      "Spacious boot for luggage",
      "USB charging port",
      "Music system"
    ],
    bestFor: [
      "Solo travelers and couples",
      "Short outstation trips (up to 300 km)",
      "Airport transfers",
      "Office commute",
      "Budget-friendly travel"
    ],
    specs: [
      { label: "Seating", value: "4 passengers + driver" },
      { label: "Boot Space", value: "378 liters" },
      { label: "AC", value: "Full automatic AC" },
      { label: "Fuel", value: "Petrol / CNG" },
      { label: "Mileage", value: "22-24 km/l" },
      { label: "Rate", value: "₹12/km onwards" }
    ],
    description: "The Maruti Suzuki Swift Dzire is India's most popular compact sedan, known for its reliability, fuel efficiency, and comfortable ride. With spacious interiors, good boot space, and excellent AC, the Swift Dzire is the perfect choice for budget-conscious travelers who don't want to compromise on comfort. Ideal for couples, solo travelers, and small families for city and short outstation trips.",
    faqs: [
      {
        question: "What is Swift Dzire cab rate in {city}?",
        answer: "Swift Dzire cab rate in {city} starts at ₹12/km for outstation trips. Local 4hr/40km package starts at ₹999. Airport transfer starts at ₹1,499. Call +919204714249."
      },
      {
        question: "How many people can sit in Swift Dzire cab?",
        answer: "Swift Dzire cab comfortably seats 4 passengers plus the driver. It has good legroom for front and rear passengers with adequate boot space for 2 large bags."
      },
      {
        question: "Is Swift Dzire good for outstation trip from {city}?",
        answer: "Yes, Swift Dzire is excellent for outstation trips of up to 300 km from {city}. It's affordable, fuel-efficient, and comfortable. For longer trips or families, consider Innova or Ertiga."
      },
      {
        question: "Does Swift Dzire have AC?",
        answer: "Yes, all our Swift Dzire cabs in {city} are fully air-conditioned with automatic climate control. We ensure AC is properly serviced before every trip."
      },
      {
        question: "Is Swift Dzire available 24 hours in {city}?",
        answer: "Yes, Swift Dzire cabs are available 24/7 in {city}. Whether you need an early morning airport drop at 4 AM or a late-night trip, call +919204714249."
      }
    ]
  },
  {
    slug: "innova-cab",
    name: "Innova Cab",
    shortName: "Toyota Innova",
    icon: "🚙",
    image: "/fleet/toyota_innova.webp",
    brand: "Toyota",
    model: "Innova",
    type: "MUV / MPV",
    seatingCapacity: 6,
    luggageCapacity: "4 large bags",
    acType: "Full AC with rear vents",
    fuelType: "Diesel",
    perKmRate: 15,
    features: [
      "Spacious 6/7-seater",
      "Powerful diesel engine",
      "Dual AC — front & rear",
      "Large boot space",
      "Smooth highway ride",
      "USB charging points"
    ],
    bestFor: [
      "Family trips (5-6 people)",
      "Long outstation journeys",
      "Corporate travel",
      "Airport group transfers",
      "Wedding guest transport"
    ],
    specs: [
      { label: "Seating", value: "6-7 passengers + driver" },
      { label: "Boot Space", value: "300+ liters" },
      { label: "AC", value: "Dual zone AC" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.4L Diesel" },
      { label: "Rate", value: "₹15/km onwards" }
    ],
    description: "The Toyota Innova is India's most trusted MPV, known for its bulletproof reliability, spacious interiors, and comfortable ride quality. With seating for 6-7 passengers, dual AC zones, and ample luggage space, the Innova is the go-to choice for family outstation trips, corporate travel, and group airport transfers. Toyota's legendary build quality ensures a safe and comfortable journey on any road.",
    faqs: [
      {
        question: "What is Innova cab rate in {city}?",
        answer: "Innova cab rate in {city} starts at ₹15/km for outstation trips. Local 4hr/40km package starts at ₹1,699. Airport transfer starts at ₹2,499. Call +919204714249."
      },
      {
        question: "How many people can sit in Innova cab?",
        answer: "Innova cab comfortably seats 6-7 passengers plus the driver. It has 3 rows of seating. For maximum comfort, we recommend 6 passengers so the third row has space for luggage."
      },
      {
        question: "Is driver included in Innova cab hire in {city}?",
        answer: "Yes, all Innova cab bookings in {city} include a professional, police-verified driver. We do not offer self-drive Innova for safety reasons."
      },
      {
        question: "Is Innova good for long road trips?",
        answer: "Yes, Toyota Innova is the best vehicle for long road trips from {city}. Its diesel engine is powerful, efficient, and built for highways. Comfortable ride even on rough roads."
      },
      {
        question: "Can I book Innova for wedding in {city}?",
        answer: "Yes, Innova cabs are available for wedding bookings in {city}. We provide decorated Innova for baarat and guest transport. Call +919204714249 for wedding packages."
      }
    ]
  },
  {
    slug: "innova-crysta-cab",
    name: "Innova Crysta Cab",
    shortName: "Innova Crysta",
    icon: "👑",
    image: "/fleet/innovacrysta.webp",
    brand: "Toyota",
    model: "Innova Crysta",
    type: "Premium MPV",
    seatingCapacity: 7,
    luggageCapacity: "4 large + 2 small bags",
    acType: "Automatic climate control with rear AC",
    fuelType: "Diesel",
    perKmRate: 18,
    features: [
      "Premium 7-seater with captain seats",
      "Automatic climate control",
      "Rear AC vents with controls",
      "Premium leather upholstery",
      "USB charging all rows",
      "GPS navigation system"
    ],
    bestFor: [
      "Premium family travel",
      "Corporate VIP transport",
      "Long outstation trips in comfort",
      "Airport transfers for executives",
      "Wedding premium car"
    ],
    specs: [
      { label: "Seating", value: "7 passengers + driver" },
      { label: "Boot Space", value: "300 liters" },
      { label: "AC", value: "Auto climate control" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.4L / 2.7L" },
      { label: "Rate", value: "₹18/km onwards" }
    ],
    description: "The Toyota Innova Crysta is the premium version of India's most trusted MPV. With captain seats in the second row, automatic climate control, premium leather upholstery, and a refined diesel engine, the Crysta offers a luxury travel experience. Perfect for those who want comfort, space, and prestige in their journey. The go-to choice for corporate VIPs, premium family travel, and luxury outstation trips.",
    faqs: [
      {
        question: "What is Innova Crysta cab rate in {city}?",
        answer: "Innova Crysta cab rate in {city} starts at ₹18/km for outstation trips. Local 4hr/40km package starts at ₹2,499. Airport transfer from ₹3,499. Call +919204714249."
      },
      {
        question: "How many people can sit in Innova Crysta?",
        answer: "Innova Crysta seats 7 passengers plus driver. With captain seats in the second row, it offers premium comfort for 6 passengers with ample luggage space."
      },
      {
        question: "What is difference between Innova and Innova Crysta?",
        answer: "Innova Crysta has captain seats (vs bench in Innova), automatic AC, premium leather upholstery, more powerful engine, and better ride quality. It's Toyota's premium MPV variant."
      },
      {
        question: "Is Innova Crysta available for outstation from {city}?",
        answer: "Yes, Innova Crysta is available for outstation trips from {city} to all destinations. It's the best choice for long-distance luxury travel. Call +919204714249 to book."
      },
      {
        question: "Can I book Innova Crysta for airport transfer in {city}?",
        answer: "Yes, Innova Crysta airport transfer available from {city}. Perfect for business travelers and families. Spacious boot for luggage. Book at +919204714249."
      }
    ]
  },
  {
    slug: "ertiga-cab",
    name: "Ertiga Cab",
    shortName: "Maruti Ertiga",
    icon: "🚐",
    image: "/fleet/Mariti_ertiga.webp",
    brand: "Maruti Suzuki",
    model: "Ertiga",
    type: "MPV / Family Car",
    seatingCapacity: 6,
    luggageCapacity: "3 large bags",
    acType: "Full AC with rear vents",
    fuelType: "Petrol / CNG",
    perKmRate: 14,
    features: [
      "Spacious 6-seater",
      "Good fuel efficiency",
      "Rear AC vents",
      "Comfortable suspension",
      "USB charging",
      "Music system with Bluetooth"
    ],
    bestFor: [
      "Small families (4-5 people)",
      "Budget-friendly group travel",
      "Weekend outstation trips",
      "Local city tours",
      "Office commute for groups"
    ],
    specs: [
      { label: "Seating", value: "6 passengers + driver" },
      { label: "Boot Space", value: "209 liters" },
      { label: "AC", value: "AC with rear vents" },
      { label: "Fuel", value: "Petrol / CNG" },
      { label: "Mileage", value: "19-21 km/l" },
      { label: "Rate", value: "₹14/km onwards" }
    ],
    description: "The Maruti Suzuki Ertiga is the perfect mid-range MPV for families who need more space than a sedan but at a lower cost than an Innova. With 6 comfortable seats, decent luggage space, and excellent fuel efficiency, the Ertiga delivers value for money. Great for weekend family trips, group airport transfers, and city tours.",
    faqs: [
      {
        question: "What is Ertiga cab rate in {city}?",
        answer: "Ertiga cab rate in {city} starts at ₹14/km for outstation trips. Local 4hr/40km package starts at ₹1,499. Call +919204714249 for exact fare to your destination."
      },
      {
        question: "How many people can sit in Ertiga?",
        answer: "Ertiga comfortably seats 6 passengers plus driver. It has 3 rows of seating. For luggage comfort, we recommend 5 passengers for outstation trips."
      },
      {
        question: "Is Ertiga better than Innova for trips?",
        answer: "Ertiga is more affordable than Innova and great for shorter trips. For long highways and premium comfort, Innova is better. Ertiga is ideal for budget-conscious families."
      },
      {
        question: "Is Ertiga available for outstation from {city}?",
        answer: "Yes, Ertiga is available for outstation trips from {city} to all destinations. It's a popular choice for family trips to Kolkata, Ranchi, and other cities."
      },
      {
        question: "Can I book Ertiga for full day in {city}?",
        answer: "Yes, full-day Ertiga rental available in {city} at ₹1,499 for 4hr/40km and ₹2,499 for 8hr/80km package. Call +919204714249."
      }
    ]
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    shortName: "Tempo Traveller",
    icon: "🚌",
    image: "/fleet/tampo_traveler.webp",
    brand: "Force Motors",
    model: "Tempo Traveller",
    type: "Mini Bus",
    seatingCapacity: 12,
    luggageCapacity: "10+ bags",
    acType: "Full AC with multiple vents",
    fuelType: "Diesel",
    perKmRate: 22,
    features: [
      "12/15-seater options",
      "Full AC with multiple vents",
      "Push-back reclining seats",
      "Large luggage carrier on top",
      "Music system with mic",
      "Curtained windows"
    ],
    bestFor: [
      "Group travel (8-12 people)",
      "Family reunion trips",
      "Pilgrimage group tours",
      "Corporate team outings",
      "Wedding guest transport"
    ],
    specs: [
      { label: "Seating", value: "12-15 passengers + driver" },
      { label: "Luggage", value: "Roof carrier + internal" },
      { label: "AC", value: "Multi-zone AC" },
      { label: "Fuel", value: "Diesel" },
      { label: "Engine", value: "2.6L Diesel" },
      { label: "Rate", value: "₹22/km onwards" }
    ],
    description: "The Tempo Traveller is the ultimate group travel vehicle, seating 12-15 passengers with push-back reclining seats, full AC, and ample luggage space. With roof-top carrier and spacious interiors, it's perfect for large families, pilgrimage groups, corporate team outings, and wedding guest transport. Travel together, save together — the Tempo Traveller offers the best per-person value for group travel.",
    faqs: [
      {
        question: "What is Tempo Traveller rate in {city}?",
        answer: "Tempo Traveller rate in {city} starts at ₹22/km for outstation trips. Local 4hr/40km package starts at ₹3,499. Minimum booking charge may apply. Call +919204714249."
      },
      {
        question: "How many people can sit in Tempo Traveller?",
        answer: "Tempo Traveller seats 12-15 passengers depending on configuration. We offer both 12-seater (more spacious) and 15-seater (more seats) options in {city}."
      },
      {
        question: "Is Tempo Traveller available for pilgrimage from {city}?",
        answer: "Yes, Tempo Traveller is very popular for group pilgrimages from {city}. We offer special packages for Baidyanath Dham, Parasnath, and other temple tours."
      },
      {
        question: "Can I book Tempo Traveller for multi-day trip?",
        answer: "Yes, multi-day Tempo Traveller bookings available from {city}. Driver stay, allowance, toll, and parking included. Call +919204714249 for multi-day package pricing."
      },
      {
        question: "Does Tempo Traveller have AC?",
        answer: "Yes, all our Tempo Travellers in {city} are fully air-conditioned with multiple AC vents for all rows. Push-back reclining seats ensure comfortable travel."
      }
    ]
  },
  {
    slug: "sedan-cab",
    name: "Sedan Cab",
    shortName: "Sedan",
    icon: "🚘",
    image: "/fleet/sedan.webp",
    brand: "Various",
    model: "Honda City / Ciaz / Verna",
    type: "Premium Sedan",
    seatingCapacity: 4,
    luggageCapacity: "3 large bags",
    acType: "Automatic climate control",
    fuelType: "Petrol / Diesel",
    perKmRate: 14,
    features: [
      "Premium comfort & ride quality",
      "Automatic climate control AC",
      "Spacious rear legroom",
      "Premium upholstery",
      "USB charging",
      "Large boot space"
    ],
    bestFor: [
      "Business travel",
      "Comfortable long-distance trips",
      "Airport VIP transfers",
      "Client meetings",
      "Special occasions"
    ],
    specs: [
      { label: "Seating", value: "4 passengers + driver" },
      { label: "Boot Space", value: "500+ liters" },
      { label: "AC", value: "Automatic AC" },
      { label: "Fuel", value: "Petrol / Diesel" },
      { label: "Models", value: "Honda City / Ciaz / Verna" },
      { label: "Rate", value: "₹14/km onwards" }
    ],
    description: "Our premium sedan fleet includes Honda City, Maruti Ciaz, and Hyundai Verna — India's most comfortable sedans. With superior ride quality, automatic climate control, spacious rear legroom, and premium interiors, sedan cabs are perfect for business travelers, client pickups, and those who prefer comfort over everything. Large boot space accommodates 3 large suitcases easily.",
    faqs: [
      {
        question: "What is sedan cab rate in {city}?",
        answer: "Sedan cab rate in {city} starts at ₹14/km for outstation trips. Local 4hr/40km package starts at ₹1,299. Airport transfer from ₹1,999. Call +919204714249."
      },
      {
        question: "Which sedan models are available in {city}?",
        answer: "In {city}, we offer Honda City, Maruti Ciaz, and Hyundai Verna as sedan options. Subject to availability, you can request a specific model."
      },
      {
        question: "Is sedan better than hatchback for outstation?",
        answer: "Yes, sedans offer superior comfort, more legroom, larger boot, and better ride quality compared to hatchbacks. Ideal for trips over 200 km from {city}."
      },
      {
        question: "Can I book sedan for business meeting in {city}?",
        answer: "Yes, sedan cabs in {city} are ideal for business travel. Professional driver, clean car, and premium feel. Perfect for client meetings and corporate travel."
      },
      {
        question: "Is sedan available for full day rental in {city}?",
        answer: "Yes, full-day sedan rental available in {city}. 4hr/40km at ₹1,299 and 8hr/80km at ₹2,199. Extension available at hourly rates."
      }
    ]
  },
  {
    slug: "luxury-cab",
    name: "Luxury Cab",
    shortName: "Luxury",
    icon: "✨",
    image: "/fleet/luxury.webp",
    brand: "Toyota / Mercedes",
    model: "Innova Crysta / Fortuner / Mercedes",
    type: "Luxury Vehicle",
    seatingCapacity: 4,
    luggageCapacity: "4 large bags",
    acType: "Dual zone automatic AC",
    fuelType: "Diesel / Petrol",
    perKmRate: 25,
    features: [
      "Premium luxury vehicles",
      "Professional chauffeur",
      "Leather seats & premium interior",
      "Advanced infotainment system",
      "Dual zone climate control",
      "VIP-grade comfort"
    ],
    bestFor: [
      "VIP and executive travel",
      "Wedding premium car",
      "Celebrity and dignitary transport",
      "Special occasion vehicle",
      "Luxury vacation travel"
    ],
    specs: [
      { label: "Seating", value: "4-7 passengers + chauffeur" },
      { label: "Boot Space", value: "500+ liters" },
      { label: "AC", value: "Dual zone auto AC" },
      { label: "Interior", value: "Premium leather" },
      { label: "Models", value: "Crysta / Fortuner / Mercedes" },
      { label: "Rate", value: "₹25/km onwards" }
    ],
    description: "Experience the finest in luxury ground transportation with our premium fleet of Innova Crysta, Toyota Fortuner, and Mercedes-Benz vehicles. Each luxury cab comes with a professionally dressed chauffeur, premium leather interiors, dual-zone climate control, and VIP-grade service. Perfect for executives, weddings, special celebrations, and those who demand nothing but the best.",
    faqs: [
      {
        question: "What luxury cars are available in {city}?",
        answer: "In {city}, we offer Innova Crysta, Toyota Fortuner, and Mercedes-Benz as luxury cab options. Availability varies — call +919204714249 to check and book."
      },
      {
        question: "What is luxury cab rate in {city}?",
        answer: "Luxury cab rate in {city} starts at ₹25/km. Innova Crysta from ₹18/km, Fortuner from ₹25/km, Mercedes from ₹35/km. Call +919204714249 for exact quotation."
      },
      {
        question: "Can I book luxury car for wedding in {city}?",
        answer: "Yes, luxury cars are available for wedding bookings in {city}. We provide decorated Fortuner and Mercedes with professional chauffeur. Call for wedding packages."
      },
      {
        question: "Does luxury cab come with professional chauffeur?",
        answer: "Yes, all luxury cab bookings in {city} include a professionally dressed chauffeur. No self-drive option available for premium vehicles."
      },
      {
        question: "Is luxury cab available for airport transfer?",
        answer: "Yes, luxury airport transfer available in {city}. Perfect for VIP arrivals and corporate executives. Book in advance at +919204714249."
      }
    ]
  }
];

export function getFleetBySlug(slug: string): FleetData | undefined {
  return fleet.find(v => v.slug === slug);
}

export function getAllFleetSlugs(): string[] {
  return fleet.map(v => v.slug);
}

export function getFleetForCity(tier: 1 | 2 | 3): FleetData[] {
  if (tier === 3) {
    return fleet.filter(v =>
      ["swift-dzire-cab", "innova-cab", "ertiga-cab"].includes(v.slug)
    );
  }
  if (tier === 2) {
    return fleet.filter(v =>
      ["swift-dzire-cab", "innova-cab", "innova-crysta-cab", "ertiga-cab", "tempo-traveller"].includes(v.slug)
    );
  }
  return fleet;
}
