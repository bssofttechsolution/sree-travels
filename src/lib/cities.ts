// ============================================================
// SREE TRAVELS — JHARKHAND CITIES DATA
// All 15 cities with complete SEO metadata
// ============================================================

export interface NearbyAttraction {
  name: string;
  distanceKm: number;
  description: string;
  type: 'temple' | 'nature' | 'park' | 'dam' | 'museum' | 'hill' | 'waterfall' | 'wildlife' | 'historical' | 'lake' | 'beach' | 'other';
}

export interface CityData {
  slug: string;
  name: string;
  hindiName: string;
  aka: string[];
  district: string;
  population: string;
  pincode: string;
  latitude: number;
  longitude: number;
  airportCode: string | null;
  nearestAirport: { name: string; code: string; distance: number };
  railwayStation: string;
  additionalStations?: string[];
  tier: 1 | 2 | 3;
  localities: string[];
  localFare: {
    hatchback_4hr: number;
    sedan_4hr: number;
    suv_4hr: number;
    hatchback_8hr: number;
    sedan_8hr: number;
    suv_8hr: number;
  };
  touristPlaces: string[];
  nearbyAttractions: NearbyAttraction[];
  seoTitle: string;
  seoH1: string;
  seoDescription: string;
  longDescription: string;
  transportGuide: string;
  corporateInfo: string;
  stationInfo: string;
  hindiKeywords: string[];
  nearMeKeywords: string[];
  localKeywords: string[];
  reviews: { name: string; text: string; rating: number }[];
}

export const jharkhandCities: CityData[] = [
  {
    slug: "jamshedpur",
    name: "Jamshedpur",
    hindiName: "जमशेदपुर",
    aka: ["Tata Nagar", "Steel City", "JSR", "Tata", "Tatanagar"],
    district: "East Singhbhum",
    population: "1.3 million",
    pincode: "831001",
    latitude: 22.8046,
    longitude: 86.2029,
    airportCode: null,
    nearestAirport: { name: "Birsa Munda Airport, Ranchi", code: "IXR", distance: 130 },
    railwayStation: "Tatanagar Junction (TATA)",
    additionalStations: ["Gamharia Station", "Adityapur Halt"],
    tier: 1,
    localities: [
      "Mango", "Bistupur", "Sakchi", "Jugsalai", "Adityapur",
      "Gamharia", "Telco Colony", "Kadma", "Golmuri", "Dimna",
      "Baridih", "Sonari", "Boram", "Ulidih", "Bhuiyadih",
      "Agrico", "Sidhgora", "Sitaramdera", "Pardih", "Marine Drive",
      "Vijay Nagar", "Kalimati", "Azad Nagar", "Birsanagar", "Kasidih",
      "Bagbera", "New Baridih", "Nildih", "Govindpur", "Chandil Road"
    ],
    localFare: {
      hatchback_4hr: 999,
      sedan_4hr: 1299,
      suv_4hr: 1699,
      hatchback_8hr: 1699,
      sedan_8hr: 2199,
      suv_8hr: 2899
    },
    touristPlaces: [
      "Jubilee Park", "Dalma Wildlife Sanctuary", "Dimna Lake",
      "Tata Steel Zoo", "Jayanti Sarovar", "Bhubneshwari Temple",
      "Hudco Lake", "Russi Modi Centre", "JRD Tata Sports Complex"
    ],
    nearbyAttractions: [
      { name: "Jubilee Park", distanceKm: 2, description: "Beautifully landscaped park in Bistupur built by Tata Steel. Features musical fountain, rose garden, and zoo. Perfect for family outings.", type: "park" },
      { name: "Dalma Wildlife Sanctuary", distanceKm: 13, description: "Home to wild elephants, deer, and sloth bears. Located on Dalma Hills with panoramic views of Jamshedpur. Best visited October–March.", type: "wildlife" },
      { name: "Dimna Lake", distanceKm: 12, description: "Scenic reservoir surrounded by hills. Popular for boating, picnics, and bird watching. Serene getaway from Jamshedpur city.", type: "lake" },
      { name: "Tata Steel Zoological Park", distanceKm: 4, description: "One of the best-maintained zoos in Jharkhand featuring lions, tigers, leopards, and exotic birds within Jubilee Park complex.", type: "park" },
      { name: "Bhubneshwari Temple", distanceKm: 5, description: "Ancient hilltop temple dedicated to Goddess Bhubneshwari. Offers stunning views of Subarnarekha river and Jamshedpur skyline.", type: "temple" },
      { name: "Chandil Dam", distanceKm: 35, description: "Massive dam on Subarnarekha river, popular weekend getaway from Jamshedpur. Ideal for a scenic drive and boating.", type: "dam" },
      { name: "Ghatsila", distanceKm: 45, description: "Charming copper-mining town with Phuldungri Hill, Burudi Lake, and Galudihi Barrage. Popular day trip from Jamshedpur.", type: "nature" },
      { name: "Ranchi Hills", distanceKm: 130, description: "State capital surrounded by waterfalls and hills. Book Jamshedpur to Ranchi cab for a day trip covering Hundru Falls and Rock Garden.", type: "waterfall" }
    ],
    seoTitle: "Best Cab Service in Jamshedpur (Tata) 2026 | Car Rental Tatanagar ☎ +919204714249",
    seoH1: "Cab Service in Jamshedpur / Tata (Tatanagar) — Book Online 2026",
    seoDescription: "Searching for the best cab service in Jamshedpur (Tata) or Tatanagar railway station in 2026? Sree Travels is the #1 rated car rental in Jamshedpur, offering premium AC cabs across Tata Nagar. Whether you need an outstation taxi booking online from Tata to Ranchi cab, local Tatanagar taxi service, or corporate car rental in Jamshedpur, our 50+ verified cabs are available 24/7. Get the lowest fares for Jamshedpur to Ranchi cab ₹1,499, Tata to Dhanbad taxi, Jamshedpur to Kolkata cab, and Ranchi airport drop services. Call +919204714249 for instant cab booking in Tata/Jamshedpur.",
    longDescription: "Jamshedpur, popularly known as Tata or Tata Nagar, is the largest city in Jharkhand and India's first planned industrial city. Founded by Jamsetji Tata in 1919, this Steel City is home to Tata Steel — the world's first integrated steel plant outside the West. Located in East Singhbhum district along the Subarnarekha and Kharkai rivers, Jamshedpur has a population of 1.3 million and serves as the economic powerhouse of Jharkhand.\n\nSree Travels has been providing the best cab service in Jamshedpur (Tata) since 2015. With over 50 verified AC cabs, GPS-tracked fleet, and police-verified drivers, we serve every corner of the city — from Bistupur and Mango to Adityapur Industrial Area and Gamharia. Whether you need a local taxi from Tatanagar Junction, an outstation cab from Jamshedpur to Ranchi (₹1,499), Kolkata (₹3,999), Dhanbad (₹1,999), or an airport transfer to Birsa Munda Airport — Sree Travels guarantees the lowest fares with zero hidden charges.\n\nJamshedpur is well connected by NH-33 to Ranchi (130 km), NH-49 to Kolkata (260 km), and NH-32 to Dhanbad (80 km). The city is a major hub for corporate travel due to the presence of Tata Steel, Tata Motors, Tata Cummins, Tinplate Company, XLRI Jamshedpur (India's premier business school), and NIT Jamshedpur. Adityapur Industrial Area, located adjacent to the city, is one of Asia's largest industrial estates with 1,000+ factories.\n\nFor tourists, Jamshedpur offers Jubilee Park (with its famous musical fountain), Dalma Wildlife Sanctuary, Dimna Lake, Tata Steel Zoo, Jayanti Sarovar, and the sacred Bhubneshwari Temple. Day trips to Chandil Dam (35 km), Ghatsila (45 km), and Hundru Falls near Ranchi (140 km) are popular weekend getaways.\n\nBook your cab in Jamshedpur today with Sree Travels — Jharkhand's most trusted cab service since 2015. Call or WhatsApp +91 92047 14249 for instant booking. No app needed, no surge pricing, no hidden charges.",
    transportGuide: "Jamshedpur (Tata/Tatanagar) is well-connected to major cities across India by road, rail, and air.\n\n🚂 BY TRAIN: Tatanagar Junction (Station Code: TATA) is the main railway station, serving 100+ trains daily connecting to Kolkata (4-5 hrs), Ranchi (3-4 hrs), Delhi (18 hrs), Mumbai (24 hrs), Chennai (30 hrs), and Patna (8 hrs). Major trains include Rajdhani Express, Jan Shatabdi, and Steel Express. For cab pickup at Tatanagar Junction, call Sree Travels at +919204714249 — drivers stationed 24/7 at the station.\n\n✈️ BY AIR: The nearest major airport is Birsa Munda Airport, Ranchi (IXR) — 130 km away (~3 hours). Book a Jamshedpur to Ranchi Airport cab from ₹1,499. Sonari Airport (IXW) within Jamshedpur has limited operations. Kolkata Airport (CCU) is 260 km away.\n\n🚌 BY BUS: JBVNL and private operators run buses from Jamshedpur to Ranchi, Dhanbad, Kolkata, and Patna. Bus stands at Mango More and Sakchi. However, private cab is faster, more comfortable, and door-to-door.\n\n🚗 BY CAB: The fastest and most comfortable way to reach Jamshedpur is by cab. From Ranchi: 130 km via NH-33 (3 hrs, ₹1,499). From Kolkata: 260 km via NH-49 (5 hrs, ₹3,999). From Dhanbad: 80 km via NH-32 (2 hrs, ₹1,999). Sree Travels offers one way, round trip, and airport transfer on all routes. Book online 24/7.",
    corporateInfo: "Jamshedpur is India's premier industrial city with major corporate headquarters and manufacturing units. Sree Travels provides dedicated corporate cab service to all major companies:\n\n🏭 MAJOR COMPANIES: Tata Steel (HQ), Tata Motors (Telco), Tata Cummins Ltd, Tinplate Company of India, Tata Steel Long Products, TRF Limited, Tata Metaliks, NML (National Metallurgical Lab), JUSCO (Jamshedpur Utilities & Services Company)\n\n🎓 EDUCATIONAL INSTITUTIONS: XLRI Jamshedpur (India's #2 B-School), NIT Jamshedpur, IIM Ranchi Jamshedpur Campus, Loyola School, DBMS English School, JRS Degree College\n\n🏗️ INDUSTRIAL AREAS: Adityapur Industrial Area (Phase 1 & 2), Gamharia Industrial Estate, Kandra Industrial Area, TATA Industrial Complex\n\nWe offer: Monthly corporate cab packages starting ₹15,999 | GST billing | Dedicated driver allotment | Centralized billing portal | Airport transfer for visiting clients | Employee shuttle service. Contact: +919204714249",
    stationInfo: "📍 TATANAGAR JUNCTION (TATA): Jharkhand's busiest railway station. Our drivers are stationed 24/7 at Gate 1 (Main Exit), Gate 2 (Platform 1 Side), and the Parking Area. Average wait time: Under 5 minutes. We provide cab service to all areas — Bistupur (2 km), Mango (3 km), Sakchi (1.5 km), Adityapur (8 km), Telco (5 km), Dimna (10 km). Also available for outstation pickup from Tatanagar to Ranchi, Kolkata, Dhanbad, and all Jharkhand cities.\n\n📍 GAMHARIA STATION: Located near Adityapur Industrial Area. Cab pickup available. Convenient for workers and executives in the industrial belt.\n\n📍 SONARI AIRPORT (IXW): Small airstrip with limited commercial flights. We provide airport transfer service. Located 8 km from Bistupur.\n\n📍 BUS STANDS: Mango Bus Stand and Sakchi Bus Stand. Cab pickup available from both locations.",
    hindiKeywords: [
      "जमशेदपुर कैब सर्विस", "टाटा कैब सर्विस", "टाटानगर टैक्सी", "जमशेदपुर टैक्सी",
      "टाटा से रांची कैब", "जमशेदपुर से रांची टैक्सी", "जमशेदपुर से कोलकाता कैब",
      "टाटानगर स्टेशन कैब", "जमशेदपुर कार रेंटल", "टाटा में कैब बुकिंग",
      "जमशेदपुर में सबसे अच्छी कैब", "टाटा गाड़ी भाड़ा", "जमशेदपुर से धनबाद गाड़ी"
    ],
    nearMeKeywords: [
      "cab near me jamshedpur", "taxi near me tata", "cab service near tatanagar station",
      "car rental near me jamshedpur", "taxi near bistupur", "cab near sakchi",
      "best cab near me tata nagar", "24 hour cab near me jamshedpur",
      "cheapest cab near me in tata", "cab service near me jharkhand"
    ],
    localKeywords: [
      "jamshedpur to ranchi cab fare 2026", "tata to ranchi taxi", "tatanagar to kolkata cab",
      "jamshedpur cab booking online", "tata cab booking whatsapp", "jamshedpur airport cab",
      "tatanagar station taxi stand", "adityapur cab service", "mango jamshedpur taxi",
      "bistupur cab booking", "jamshedpur outstation cab rate", "tata to dhanbad cab fare",
      "jamshedpur to puri cab", "jamshedpur to bokaro taxi", "cab service gamharia",
      "tata to deoghar cab", "jamshedpur to patna cab", "xlri jamshedpur cab",
      "nit jamshedpur taxi", "tata steel plant cab service"
    ],
    reviews: [
      { name: "Rajesh Kumar", text: "Best cab service in Tata! I regularly book Sree Travels for car rental in Jamshedpur. Always punctual from Tatanagar station.", rating: 5 },
      { name: "Priya Singh", text: "Took an Innova for Tata to Ranchi cab service. Driver was very professional and the Jamshedpur/Tata to Ranchi road was covered very smoothly. Highly recommended!", rating: 5 },
      { name: "Amit Sharma", text: "Very reliable Tatanagar taxi booking for airport transfers. The best car rental in Jamshedpur/Tata without a doubt.", rating: 5 },
      { name: "Dr. Anurag Kashyap", text: "I booked Sree Travels for my XLRI campus to Ranchi Airport transfer. Driver arrived 15 minutes early, clean Innova Crysta, pleasant ride. Best service in Jamshedpur for corporate travel.", rating: 5 },
      { name: "Sunita Devi", text: "जमशेदपुर में सबसे अच्छी कैब सर्विस! मैंने टाटा से धनबाद के लिए बुक किया। गाड़ी एकदम साफ़ थी और ड्राइवर बहुत विनम्र था।", rating: 5 },
      { name: "Vikas Tiwari", text: "I travel Jamshedpur to Kolkata every week for business. Sree Travels is the only cab service I trust. AC sedan, on-time every single trip, toll included. No one is cheaper.", rating: 5 },
      { name: "Renu Mahato", text: "We booked Tempo Traveller from Jamshedpur to Deoghar for family pilgrimage. 12 of us traveled comfortably. Fair pricing, no hidden charges. Will recommend to everyone in Tata.", rating: 5 },
      { name: "Arun Sinha (Tata Steel)", text: "Our company has been using Sree Travels for corporate cab service in Jamshedpur for 2 years. Monthly billing, dedicated vehicles, GPS tracking — everything a corporate needs. Top-notch.", rating: 5 }
    ]
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    hindiName: "रांची",
    aka: ["City of Waterfalls", "Capital City", "Jharkhand Capital", "RNC"],
    district: "Ranchi",
    population: "1.1 million",
    pincode: "834001",
    latitude: 23.3441,
    longitude: 85.3096,
    airportCode: "IXR",
    nearestAirport: { name: "Birsa Munda Airport", code: "IXR", distance: 7 },
    railwayStation: "Ranchi Junction (RNC)",
    additionalStations: ["Hatia Junction (HTE)", "Namkum Station"],
    tier: 1,
    localities: [
      "Doranda", "Kanke", "Lalpur", "Harmu", "Dhurwa",
      "Morabadi", "Bariatu", "Hinoo", "Kokar", "Ratu Road",
      "Booty More", "Argora", "Namkum", "Hatia", "Ashok Nagar",
      "Chutia", "Upper Bazar", "Main Road", "Piska More", "Mesra",
      "Sukhdeonagar", "Kadru", "Pundag", "Kutchery Chowk", "Circular Road",
      "Kantatoli", "Albert Ekka Chowk", "Birsa Chowk", "Khelgaon", "Ormanjhi"
    ],
    localFare: {
      hatchback_4hr: 999,
      sedan_4hr: 1299,
      suv_4hr: 1699,
      hatchback_8hr: 1699,
      sedan_8hr: 2199,
      suv_8hr: 2899
    },
    touristPlaces: [
      "Hundru Falls", "Dassam Falls", "Rock Garden", "Kanke Dam",
      "Tagore Hill", "Pahari Mandir", "Ranchi Lake", "Jonha Falls",
      "Birsa Munda Museum", "Sun Temple Bundu", "Panchghagh Falls"
    ],
    nearbyAttractions: [
      { name: "Hundru Falls", distanceKm: 45, description: "Jharkhand's most famous waterfall — 98m high cascade on Subarnarekha river. A must-visit from Ranchi. Book a cab for day trip with Sree Travels.", type: "waterfall" },
      { name: "Dassam Falls", distanceKm: 40, description: "Beautiful 44m waterfall near Bundu on Kanchi river. Popular picnic spot from Ranchi. Best visited July–November.", type: "waterfall" },
      { name: "Jonha Falls (Gautamdhara)", distanceKm: 40, description: "140-foot waterfall with a Buddhist monastery at the base. Beautiful trek with 700+ stairs. Scenic day trip from Ranchi.", type: "waterfall" },
      { name: "Rock Garden", distanceKm: 4, description: "Unique park built from industrial waste materials on Kanke Dam. Features sculptures, cascading waterfalls, amphitheatre. Popular family outing.", type: "park" },
      { name: "Pahari Mandir", distanceKm: 3, description: "Hilltop Shiva temple with 468 steps. Stunning panoramic view of entire Ranchi city from the top. Best visited during sunrise.", type: "temple" },
      { name: "Tagore Hill", distanceKm: 5, description: "Historic hill where Rabindranath Tagore's elder brother lived. Peaceful green hilltop with views. Now a heritage park.", type: "hill" },
      { name: "Ranchi Lake (Bada Talab)", distanceKm: 2, description: "Central lake in heart of Ranchi city. Evening walks, boating facility, and food stalls around. Iconic Ranchi landmark.", type: "lake" },
      { name: "Kanke Dam", distanceKm: 7, description: "Scenic reservoir surrounded by forest. Beautiful sunset point. Adjacent to Rock Garden and Mental Hospital campus.", type: "dam" },
      { name: "Birsa Munda Museum", distanceKm: 3, description: "Museum dedicated to tribal hero Birsa Munda in the old Ranchi Jail building. Important historical and cultural site.", type: "museum" },
      { name: "Patratu Valley", distanceKm: 40, description: "Stunning valley drive with ghats and reservoir. One of the most beautiful drives in Jharkhand. Book Ranchi to Patratu cab.", type: "nature" },
      { name: "Netarhat", distanceKm: 160, description: "The 'Queen of Chotanagpur' — scenic hill station at 3,700 ft. Famous sunrise/sunset point. Book Ranchi to Netarhat cab for weekend trip.", type: "hill" },
      { name: "Betla National Park", distanceKm: 170, description: "Tiger reserve and national park in Palamu. Home to elephants, tigers, bison. Book Ranchi to Betla safari cab.", type: "wildlife" }
    ],
    seoTitle: "Best Cab Service in Ranchi 2026 | Airport Taxi & Car Rental ☎ +919204714249",
    seoH1: "Cab Service in Ranchi — Jharkhand Capital | Book Online 2026",
    seoDescription: "Looking for the best cab service in Ranchi or Birsa Munda Airport taxi in 2026? Sree Travels provides the #1 rated car rental in Ranchi with 40+ verified AC cabs. Ranchi to Jamshedpur/Tata cab ₹2,499. Birsa Munda airport taxi ₹499. Outstation cab from Ranchi to Patna, Kolkata, Dhanbad, Bokaro. Local taxi from ₹999. 24/7 service. Ranchi Junction & Hatia Station pickup. Call +919204714249 for instant cab booking in Ranchi.",
    longDescription: "Ranchi, the capital city of Jharkhand, is known as the 'City of Waterfalls' for its numerous scenic waterfalls including Hundru Falls (98m), Dassam Falls, and Jonha Falls. Located on the Chota Nagpur Plateau at an elevation of 651 meters, Ranchi enjoys pleasant weather year-round and serves as the administrative, political, and educational hub of Jharkhand state.\n\nSree Travels is the most trusted cab service in Ranchi, operating since 2015 with 40+ verified AC cabs. We provide comprehensive taxi services across the city — from Birsa Munda Airport (IXR) transfers (₹499 city drop), Ranchi Junction and Hatia station pickups, local sightseeing tours, to outstation cabs connecting all major cities. Book Ranchi to Jamshedpur/Tata cab (₹2,499), Ranchi to Patna cab, Ranchi to Kolkata cab, or Ranchi to Dhanbad cab at the lowest guaranteed fares.\n\nAs the state capital, Ranchi is home to the Jharkhand High Court, Raj Bhavan (Governor's House), State Secretariat (Project Building), Jharkhand Vidhan Sabha, and all major government offices. This makes Ranchi a major hub for government employees, advocates, and official travel. Sree Travels provides dedicated cab service for government officials, court appearances, and secretariat visits.\n\nRanchi is also an educational powerhouse — home to BIT Mesra (one of India's top engineering colleges), Ranchi University, National University of Study and Research in Law (NUSRL), Xavier Institute of Social Service (XISS), and Central University of Jharkhand. We serve thousands of students and faculty with reliable campus-to-airport and inter-city cab service.\n\nFor medical tourism, Ranchi has RIMS (Rajendra Institute of Medical Sciences) — Jharkhand's premier government hospital, Medica Superspeciality Hospital, Orchid Medical Centre, and Raj Hospital. Patients from across Jharkhand and Bihar travel to Ranchi for treatment. Sree Travels provides medical emergency cab service 24/7.\n\nPopular tourist destinations around Ranchi include Hundru Falls (45 km), Dassam Falls (40 km), Jonha Falls (40 km), Rock Garden (4 km), Pahari Mandir, Tagore Hill, and Ranchi Lake. For weekend getaways, Patratu Valley (40 km) and Netarhat hill station (160 km) are top choices. All accessible by booking a cab with Sree Travels.\n\nBook your Ranchi cab today — WhatsApp or call +91 92047 14249. Transparent pricing, no hidden charges, police-verified drivers, GPS tracking.",
    transportGuide: "Ranchi, the capital of Jharkhand, is well-connected by air, rail, and road.\n\n✈️ BY AIR: Birsa Munda Airport (IXR) is Ranchi's international airport, located 7 km from the city center. It offers daily flights to Delhi, Mumbai, Kolkata, Bengaluru, Patna, Hyderabad, and Chennai via Air India, IndiGo, SpiceJet, and Vistara. Sree Travels provides 24/7 airport cab service — city drop from ₹499, pickup within 10 minutes of your call. Jamshedpur/Tata to Ranchi Airport cab: ₹1,499.\n\n🚂 BY TRAIN: Ranchi Junction (RNC) is the main railway station with trains to Delhi (Rajdhani Express), Kolkata (Hatia Express), Mumbai (LTT Express), Patna, and Jamshedpur. Hatia Junction (HTE) is the second major station, originating several long-distance trains. Sree Travels drivers are stationed at both stations 24/7. Cab available from platform exit in under 5 minutes.\n\n🚌 BY BUS: Birsa Munda Bus Terminal (Kanta Toli) connects Ranchi to Jamshedpur, Dhanbad, Bokaro, Hazaribagh, and Patna. State transport (JBVNL) and private Volvo buses available. However, cab is faster, comfortable, and door-to-door.\n\n🚗 BY CAB: Ranchi is connected via excellent highways. From Jamshedpur/Tata: 130 km via NH-33 (3 hrs, ₹2,499). From Dhanbad: 160 km (3.5 hrs, ₹2,899). From Bokaro: 100 km (2.5 hrs, ₹2,199). From Patna: 330 km (6 hrs, ₹5,299). From Kolkata: 390 km (7 hrs, ₹5,999). Sree Travels offers one way and round trip on all routes.",
    corporateInfo: "Ranchi is a major government, corporate, and educational hub as the state capital of Jharkhand. Sree Travels provides specialized cab services to:\n\n🏛️ GOVERNMENT OFFICES: Jharkhand High Court, Raj Bhavan, State Secretariat (Project Building), Jharkhand Vidhan Sabha, Doranda Complex, DGP Headquarters, Income Tax Office, GST Bhawan. We serve advocates, bureaucrats, and government employees daily.\n\n🏥 MEDICAL INSTITUTIONS: RIMS (Rajendra Institute of Medical Sciences), Medica Superspeciality Hospital, Orchid Medical Centre, Raj Hospital, Sadar Hospital, TMH Jamshedpur referral transfers\n\n🎓 EDUCATIONAL INSTITUTIONS: BIT Mesra (Birla Institute of Technology), Ranchi University, NUSRL (National Law University), XISS (Xavier Institute), Central University of Jharkhand, Amity University Jharkhand, St. Xavier's College\n\n🏢 CORPORATE: MECON Limited (HQ), HEC (Heavy Engineering Corporation), CCL (Central Coalfields Ltd), Vedanta Electrosteel, CMPDI (Central Mine Planning), Coal India subsidiaries\n\nMonthly corporate packages starting ₹15,999 | GST billing | Airport transfer for dignitaries | Court hearing cab service | Hospital emergency transport. Contact: +919204714249",
    stationInfo: "📍 RANCHI JUNCTION (RNC): Main station connecting to Delhi, Mumbai, Kolkata, and all major cities. Our drivers are stationed 24/7 at the main exit, auto stand area, and VIP lounge exit. Average pickup time: Under 5 minutes. Services to Doranda (3 km), Lalpur (2 km), Airport (6 km), Morabadi (2 km), Bariatu (4 km).\n\n📍 HATIA JUNCTION (HTE): Second major station, originating point for many long-distance trains. Cab pickup available 24/7 from the main exit. Connects to Namkum, Dhurwa, Mesra, and south Ranchi areas.\n\n📍 BIRSA MUNDA AIRPORT (IXR): International airport 7 km from city center. Domestic terminal with IndiGo, Air India, SpiceJet, Vistara flights. Cab waiting at arrival gate — no pre-booking needed, but advance booking recommended for outstation trips. Airport to city: ₹499 (Hatchback), ₹599 (Sedan).\n\n📍 BIRSA MUNDA BUS TERMINAL (KANTA TOLI): Main inter-city bus stand. Cab available for pickup. Also serves as pickup point for local taxi bookings.",
    hindiKeywords: [
      "रांची कैब सर्विस", "रांची टैक्सी", "रांची एयरपोर्ट कैब", "रांची कार रेंटल",
      "रांची से जमशेदपुर कैब", "रांची से टाटा टैक्सी", "रांची से पटना कैब",
      "रांची से कोलकाता टैक्सी", "बिरसा मुंडा एयरपोर्ट टैक्सी",
      "रांची में कैब बुकिंग", "रांची में सबसे अच्छी टैक्सी", "रांची लोकल टैक्सी",
      "हटिया स्टेशन कैब", "रांची जंक्शन टैक्सी", "रांची से धनबाद कैब"
    ],
    nearMeKeywords: [
      "cab near me ranchi", "taxi near me ranchi", "cab service near ranchi airport",
      "car rental near me ranchi", "taxi near ranchi junction", "cab near hatia station",
      "best cab near me ranchi", "24 hour cab near me ranchi",
      "cheapest cab near me ranchi", "airport taxi near me ranchi"
    ],
    localKeywords: [
      "ranchi to jamshedpur cab fare 2026", "ranchi to tata taxi", "ranchi airport cab booking",
      "birsa munda airport taxi", "ranchi cab booking online", "ranchi to patna cab",
      "ranchi to kolkata cab", "ranchi to dhanbad cab", "ranchi to bokaro taxi",
      "ranchi local taxi rate", "ranchi sightseeing cab", "hundru falls cab from ranchi",
      "ranchi to netarhat cab", "ranchi to deoghar cab", "hatia station cab service",
      "ranchi junction pickup cab", "ranchi to patratu valley taxi", "best cab service ranchi 2026",
      "ranchi corporate cab", "ranchi government office taxi"
    ],
    reviews: [
      { name: "Sanjay Verma", text: "Excellent car rental in Ranchi! I use their Ranchi to Tata cab service weekly. Very punctual and affordable compared to others.", rating: 5 },
      { name: "Neha Gupta", text: "Booked Innova Crysta for Ranchi to Jamshedpur (Tatanagar) trip. Best cab service in Ranchi — comfortable ride, professional driver.", rating: 5 },
      { name: "Vikram Jha", text: "Top-notch airport transfer service and outstation taxi booking online in Ranchi. Always on time for early morning flights.", rating: 5 },
      { name: "Advocate Suresh Pandey", text: "I travel from Ranchi Junction to High Court complex daily. Sree Travels' monthly package is perfect — same driver, always on time, very affordable for daily commute.", rating: 5 },
      { name: "Meera Kumari", text: "रांची एयरपोर्ट से टाटा (जमशेदपुर) के लिए कैब बुक की। गाड़ी एकदम नई थी, AC बढ़िया चल रही थी। किराया भी बहुत कम था। बहुत अच्छी सर्विस!", rating: 5 },
      { name: "Prof. R.K. Singh (BIT Mesra)", text: "Sree Travels is our go-to for BIT Mesra to Airport transfers. They understand academic schedules and always accommodate early morning flights. Highly reliable in Ranchi.", rating: 5 },
      { name: "Amitabh Roy", text: "Booked cab for Ranchi sightseeing — Hundru Falls, Rock Garden, Pahari Mandir. Driver was excellent guide too! Fair pricing for full day: ₹2,199. Best sightseeing cab in Ranchi.", rating: 5 },
      { name: "Dr. Priya Sinha (RIMS)", text: "I recommend Sree Travels to all patients coming to RIMS Ranchi from Jamshedpur, Dhanbad, Bokaro. Clean cabs, verified drivers, perfect for medical travel.", rating: 5 }
    ]
  },
  {
    slug: "dhanbad",
    hindiName: "धनबाद",
    name: "Dhanbad",
    aka: ["Coal Capital of India", "Black Diamond City"],
    district: "Dhanbad",
    population: "1.2 million",
    pincode: "826001",
    latitude: 23.7957,
    longitude: 86.4304,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 160 },
    railwayStation: "Dhanbad Junction",
    tier: 1,
    localities: [
      "Jharia", "Sindri", "Katras", "Phusro", "Topchanchi",
      "Govindpur", "Hirapur", "Saraidhela", "Kenduadih", "Bank More",
      "Dhansar", "Bhaga", "Wasseypur", "Joraphatak", "Putki",
      "Baliapur", "Tundi", "Nirsa", "Bhuli", "City Centre"
    ],
    localFare: {
      hatchback_4hr: 899,
      sedan_4hr: 1199,
      suv_4hr: 1599,
      hatchback_8hr: 1599,
      sedan_8hr: 2099,
      suv_8hr: 2799
    },
    touristPlaces: [
      "Maithon Dam", "Panchet Dam", "Topchanchi Lake",
      "Shakti Mandir", "Indian School of Mines", "Bhatinda Falls"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Dhanbad, the Coal Capital of India, is a major industrial city in Jharkhand known for its coal mines and IIT (ISM). Located on the Grand Trunk Road, Dhanbad has excellent rail connectivity through Dhanbad Junction. Sree Travels offers reliable cab services across Dhanbad for local commutes, outstation journeys to Kolkata, Ranchi, and beyond. Our fleet of AC cabs with verified drivers ensures you travel safely from Jharia to Bank More, Sindri to Govindpur — anywhere in Dhanbad.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Ravi Prasad", text: "I regularly travel from Dhanbad to Bokaro for work. Sree Travels is my go-to cab service. Always reliable!", rating: 5 },
      { name: "Pooja Devi", text: "Booked Swift Dzire for Dhanbad to Kolkata trip. Very comfortable and affordable. Driver was very experienced.", rating: 5 },
      { name: "Manish Tiwari", text: "Best taxi service in Dhanbad for local travel. Clean cars, polite drivers, and fair pricing.", rating: 5 }
    ]
  },
  {
    slug: "bokaro",
    hindiName: "बोकारो",
    name: "Bokaro Steel City",
    aka: ["Steel City", "Bokaro"],
    district: "Bokaro",
    population: "0.6 million",
    pincode: "827001",
    latitude: 23.6693,
    longitude: 86.1511,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 100 },
    railwayStation: "Bokaro Steel City Station",
    tier: 1,
    localities: [
      "Sector 1", "Sector 4", "Sector 9", "Sector 12", "Chas",
      "City Centre", "Naya More", "Balidih", "Kandra", "Phusro",
      "Bermo", "Tenughat", "Jai Prakash Nagar", "Marafari", "Siwandih"
    ],
    localFare: {
      hatchback_4hr: 899,
      sedan_4hr: 1199,
      suv_4hr: 1599,
      hatchback_8hr: 1599,
      sedan_8hr: 2099,
      suv_8hr: 2799
    },
    touristPlaces: [
      "Bokaro Steel Plant", "City Park", "Garga Dam", "Jawaharlal Nehru Biological Park",
      "Parasnath Hill (nearby)", "Tenughat Dam"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Bokaro Steel City, home to Bokaro Steel Plant (SAIL), is a well-planned industrial city in Jharkhand. Known for its organized sectors and greenery, Bokaro is a major hub for industrial and corporate travel. Sree Travels provides professional cab services across Bokaro for local commutes, outstation trips, and corporate bookings. Our fleet serves all sectors, Chas, City Centre, and beyond.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Suresh Mahato", text: "I use Sree Travels for my office travel in Bokaro. Always clean and comfortable cabs. Highly recommend!", rating: 5 },
      { name: "Anita Roy", text: "Booked Ertiga for family trip from Bokaro to Ranchi. Very smooth ride and professional driver.", rating: 5 },
      { name: "Deepak Kumar", text: "Best cab service in Bokaro Steel City. Reliable for both local and outstation travel.", rating: 5 }
    ]
  },
  {
    slug: "deoghar",
    hindiName: "देवघर",
    name: "Deoghar",
    aka: ["Baidyanath Dham", "Temple City"],
    district: "Deoghar",
    population: "0.4 million",
    pincode: "814112",
    latitude: 24.4764,
    longitude: 86.6942,
    airportCode: "DBR",
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 15 },
    railwayStation: "Jasidih Junction",
    tier: 2,
    localities: [
      "Tower Chowk", "Kachahri", "Satsang Ashram", "Baidyanath Dham",
      "Jasidih", "Mohanpur", "Rohini", "Tapin North", "Madhupur",
      "Nandan Pahar", "Sravani Mela Ground", "Bazar Samiti"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Baidyanath Temple", "Nandan Pahar", "Trikut Pahar",
      "Satsang Ashram", "Tapovan Hills", "Naulakha Mandir"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Deoghar, home to the sacred Baidyanath Dham temple (one of the 12 Jyotirlingas), is the most important pilgrimage city in Jharkhand. Millions of devotees visit during Sravani Mela every year. Sree Travels provides dedicated pilgrimage cab services in Deoghar, including temple darshan tours, airport transfers from the new Deoghar Airport, and outstation trips. Book reliable cabs for hassle-free travel to and from Baidyanath Dham.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Ramesh Pandey", text: "Booked cab for Baidyanath Dham visit. Driver knew all the temple routes. Very helpful service!", rating: 5 },
      { name: "Sunita Devi", text: "Excellent service during Sravani Mela. Got cab on time despite heavy rush. Thank you Sree Travels!", rating: 5 },
      { name: "Arun Mishra", text: "Used Sree Travels for Deoghar to Kolkata trip. Smooth journey, clean car, affordable fare.", rating: 5 }
    ]
  },
  {
    slug: "hazaribagh",
    hindiName: "हज़ारीबाग",
    name: "Hazaribagh",
    aka: ["City of Thousand Gardens", "Lake City"],
    district: "Hazaribagh",
    population: "0.3 million",
    pincode: "825301",
    latitude: 23.9925,
    longitude: 85.3637,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 100 },
    railwayStation: "Hazaribagh Road Station",
    tier: 2,
    localities: [
      "Court Area", "Keredari", "Barhi", "Ichak", "Bishnugarh",
      "Canary Hill", "Hazaribagh Lake", "Civil Lines", "Boddom Bazar",
      "Guru Gobind Singh Nagar", "Sadak Tola", "Sadar Hospital Area"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Hazaribagh Lake", "Canary Hill", "Hazaribagh National Park",
      "Konar Dam", "Rajrappa Temple", "Isko Rock Art"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Hazaribagh, meaning 'City of Thousand Gardens', is a scenic hill town in Jharkhand known for its pleasant climate's Hazaribagh National Park. Located on NH 33, it serves as a gateway to many natural attractions. Sree Travels provides reliable cab services across Hazaribagh for local travel, outstation journeys, and tourism packages to destinations like Netarhat and Rajrappa.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Vivek Sinha", text: "Booked cab for Hazaribagh to Ranchi trip. Driver was punctual, car was clean. Great service!", rating: 5 },
      { name: "Kavita Kumari", text: "Used Sree Travels for Hazaribagh local sightseeing. Covered all major attractions comfortably.", rating: 5 },
      { name: "Manoj Pathak", text: "Reliable cab service in Hazaribagh. I book them regularly for my Bokaro office travel.", rating: 5 }
    ]
  },
  {
    slug: "giridih",
    hindiName: "गिरिडीह",
    name: "Giridih",
    aka: ["Land of Hills"],
    district: "Giridih",
    population: "0.25 million",
    pincode: "815301",
    latitude: 24.1854,
    longitude: 86.3015,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 170 },
    railwayStation: "Giridih Station",
    tier: 2,
    localities: [
      "Gandhi Chowk", "Bagodar", "Tisri", "Bengabad", "Dhanwar",
      "Surguja Colony", "Station Road", "Court Area", "Gawan",
      "Harihar Colony", "Parasnath", "Madhuban"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Parasnath Hill", "Madhuban Jain Temple", "Usri Falls",
      "Khandoli Dam", "Harihar Dham"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Giridih, located at the foot of the famous Parasnath Hill (highest peak of Jharkhand), is an important city for both pilgrimage and commerce. The Jain pilgrimage to Parasnath Hill at Madhuban attracts devotees from across India. Sree Travels provides cab services across Giridih for local travel, Parasnath pilgrimages, and outstation trips to Dhanbad, Bokaro, Ranchi, and beyond.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Rakesh Jain", text: "Booked cab for Parasnath Hill pilgrimage from Giridih. Driver was experienced with hill routes. Excellent!", rating: 5 },
      { name: "Suman Kumari", text: "Great cab service for Giridih locals. Clean cars and reasonable pricing.", rating: 5 },
      { name: "Pankaj Verma", text: "Used Sree Travels for Giridih to Dhanbad round trip. Very comfortable sedan cab.", rating: 5 }
    ]
  },
  {
    slug: "dumka",
    hindiName: "दुमका",
    name: "Dumka",
    aka: ["Santhal Pargana Headquarters"],
    district: "Dumka",
    population: "0.15 million",
    pincode: "814101",
    latitude: 24.2640,
    longitude: 87.2490,
    airportCode: null,
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 60 },
    railwayStation: "Dumka Station",
    tier: 2,
    localities: [
      "Hansdiha", "Jarmundi", "Shikaripara", "Gopikandar",
      "Maslia", "Raneshwar", "Court Area", "Station Road",
      "Sido Kanhu University Area", "Motijheel"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Masanjore Dam", "Sido Kanhu University", "Maluti Temples",
      "Baskinath Temple"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Dumka, the headquarters of Santhal Pargana division, is an important administrative city in eastern Jharkhand. It serves as a gateway to the Santhal tribal culture and heritage. Sree Travels provides cab services across Dumka for local travel, connections to Deoghar, Jamshedpur, and outstation journeys to Kolkata and Patna.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Santosh Murmu", text: "Best cab service available in Dumka. Clean cars and professional drivers.", rating: 5 },
      { name: "Rita Baskey", text: "Booked cab from Dumka to Deoghar for Baidyanath Dham visit. Very smooth ride.", rating: 5 },
      { name: "Ajay Tudu", text: "Reliable outstation cab service from Dumka. Used for Kolkata trip — no complaints.", rating: 5 }
    ]
  },
  {
    slug: "chaibasa",
    hindiName: "चाईबासा",
    name: "Chaibasa",
    aka: ["West Singhbhum HQ"],
    district: "West Singhbhum",
    population: "0.1 million",
    pincode: "833201",
    latitude: 22.5500,
    longitude: 85.8000,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 170 },
    railwayStation: "Chaibasa Station",
    tier: 2,
    localities: [
      "Thakurbadi", "Gudri", "Chhota Govindpur", "Bara Govindpur",
      "Court Area", "Station Road", "College Road", "Hata Gamharia",
      "Sundergarh Road"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Lupungutu Falls", "Hirni Falls", "Saranda Forest",
      "Kiriburu Hills", "Meghahatuburu"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Chaibasa, headquarters of West Singhbhum district, is a scenic town surrounded by hills and forests of the Saranda Forest Range. Known for its tribal culture and natural beauty, Chaibasa serves as a gateway to the mineral-rich region of southern Jharkhand. Sree Travels provides cab services for Chaibasa residents connecting to Jamshedpur, Ranchi, Rourkela, and beyond.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Birsa Hembrom", text: "Good cab service from Chaibasa to Jamshedpur. Always available when I need.", rating: 5 },
      { name: "Lakshmi Mahato", text: "Used Sree Travels for Chaibasa local travel. Affordable and reliable.", rating: 5 },
      { name: "Sunil Singh", text: "Booked cab from Chaibasa to Ranchi. Clean car, experienced driver. Very satisfied.", rating: 5 }
    ]
  },
  {
    slug: "adityapur",
    hindiName: "आदित्यपुर",
    name: "Adityapur",
    aka: ["Gamharia", "Industrial Area"],
    district: "Seraikela-Kharsawan",
    population: "0.2 million",
    pincode: "832109",
    latitude: 22.7817,
    longitude: 86.1645,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 135 },
    railwayStation: "Gamharia Station",
    tier: 2,
    localities: [
      "Adityapur Industrial Area", "Gamharia", "Kandra",
      "Seraikela", "Ichagarh", "Nimdih", "Champua Road",
      "Adityapur Phase 1", "Adityapur Phase 2"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Kailash Parvat Temple", "Adityapur Industrial Complex",
      "Gamharia Market", "Seraikela Palace"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Adityapur (Gamharia), one of Asia's largest industrial areas, is located adjacent to Jamshedpur in Seraikela-Kharsawan district. The area is home to hundreds of industries and factories, making it a major hub for corporate and business travel. Sree Travels provides dedicated cab services for Adityapur's industrial workforce and residents for local commutes and outstation travel.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Rohit Agarwal", text: "I use Sree Travels daily for my Adityapur to Bistupur commute. Very reliable service.", rating: 5 },
      { name: "Meera Devi", text: "Good cab service from Adityapur. Clean cars, always on time.", rating: 5 },
      { name: "Suraj Mahato", text: "Booked cab from Gamharia to Ranchi. Comfortable sedan, fair pricing.", rating: 5 }
    ]
  },
  {
    slug: "ramgarh",
    hindiName: "रामगढ़",
    name: "Ramgarh",
    aka: ["Ramgarh Cantonment"],
    district: "Ramgarh",
    population: "0.15 million",
    pincode: "829122",
    latitude: 23.6302,
    longitude: 85.5102,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 60 },
    railwayStation: "Ramgarh Cantonment Station",
    tier: 3,
    localities: [
      "Ramgarh Cantt", "Patratu", "Mandu", "Gola", "Dulmi",
      "Chitarpur", "Rajrappa", "Bhurkunda"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Patratu Valley", "Rajrappa Temple", "Patratu Dam",
      "Chitarpur Fort"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Ramgarh, known for the scenic Patratu Valley and the sacred Rajrappa Temple, is an important town between Ranchi and Bokaro. The Ramgarh Cantonment area has historical military significance. Sree Travels serves Ramgarh residents with cab services to Ranchi, Bokaro, Hazaribagh, and all major Jharkhand destinations.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Anil Kumar", text: "Good cab service from Ramgarh to Ranchi. Always available and affordable.", rating: 5 },
      { name: "Savita Devi", text: "Booked cab for Patratu Valley sightseeing. Great experience!", rating: 5 },
      { name: "Rajesh Mahto", text: "Reliable cab service in Ramgarh. I recommend Sree Travels.", rating: 5 }
    ]
  },
  {
    slug: "koderma",
    hindiName: "कोडरमा",
    name: "Koderma",
    aka: ["Mica City"],
    district: "Koderma",
    population: "0.1 million",
    pincode: "825409",
    latitude: 24.4672,
    longitude: 85.5937,
    airportCode: null,
    nearestAirport: { name: "Gaya Airport", code: "GAY", distance: 100 },
    railwayStation: "Koderma Junction",
    tier: 3,
    localities: [
      "Koderma Town", "Jhumri Tilaiya", "Domchanch", "Markacho",
      "Chandwara", "Satgawan"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Tilaiya Dam", "Koderma Wildlife Sanctuary",
      "Jhumri Tilaiya Market"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Koderma, known as the Mica City of India, is located in northern Jharkhand at the junction of major rail and road routes. The nearby town of Jhumri Tilaiya is famous as a cultural reference point. Sree Travels provides cab services from Koderma to major cities like Ranchi, Hazaribagh, Patna, and beyond.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Dinesh Prasad", text: "Good cab service from Koderma. Used for Ranchi trip — very comfortable.", rating: 5 },
      { name: "Rashmi Kumari", text: "Reliable cab booking from Koderma. Sree Travels is our family's preferred service.", rating: 5 },
      { name: "Sudhir Singh", text: "Booked cab from Koderma to Hazaribagh. Punctual and affordable.", rating: 5 }
    ]
  },
  {
    slug: "phusro",
    hindiName: "फुसरो",
    name: "Phusro",
    aka: ["Petarbar", "Coal Town"],
    district: "Bokaro",
    population: "0.1 million",
    pincode: "829144",
    latitude: 23.7500,
    longitude: 86.0000,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 140 },
    railwayStation: "Phusro Station",
    tier: 3,
    localities: [
      "Phusro Town", "Petarbar", "Jaridih", "Bermo",
      "Gomoh", "Tundi"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Gomoh Junction (historic)", "Topchanchi Lake (nearby)",
      "Bermo Industrial Area"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Phusro (Petarbar), part of the Bokaro district coalfield region, is an important town on the Dhanbad-Bokaro corridor. Sree Travels provides cab services from Phusro connecting to Dhanbad, Bokaro, Ranchi, and other Jharkhand destinations.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Govind Das", text: "Good cab service from Phusro. I commute to Dhanbad regularly. Sree Travels is reliable.", rating: 5 },
      { name: "Kiran Devi", text: "Used cab from Phusro to Bokaro. Clean car and fair price.", rating: 5 },
      { name: "Manoj Kumar", text: "Reliable cab service in Phusro area. Recommended for outstation travel.", rating: 5 }
    ]
  },
  {
    slug: "daltonganj",
    hindiName: "डालटनगंज",
    name: "Daltonganj",
    aka: ["Medininagar", "Palamu HQ"],
    district: "Palamu",
    population: "0.15 million",
    pincode: "822101",
    latitude: 24.0293,
    longitude: 84.0694,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 160 },
    railwayStation: "Daltonganj Station",
    tier: 3,
    localities: [
      "Medininagar", "Daltonganj Town", "Pandey More",
      "Untari", "Bishrampur", "Satbarwa", "Hussainabad"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Betla National Park", "Netarhat (Hill Station)", "Lodh Falls",
      "Palamu Fort", "Mahuadanr Wolf Sanctuary"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Daltonganj (Medininagar), the headquarters of Palamu district, is the gateway to Betla National Park and the scenic hill station of Netarhat. Located in western Jharkhand, Daltonganj is an important administrative and tourism center. Sree Travels provides cab services from Daltonganj to Ranchi, Netarhat, Betla, and other destinations.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Rishab Kumar", text: "Booked cab from Daltonganj to Netarhat. Amazing scenic route, great cab service!", rating: 5 },
      { name: "Geeta Devi", text: "Used Sree Travels for Daltonganj to Ranchi trip. Very comfortable and on time.", rating: 5 },
      { name: "Pramod Singh", text: "Reliable cab service in Daltonganj area. Good for Betla National Park visits.", rating: 5 }
    ]
  },
  {
    slug: "pakur",
    hindiName: "पाकुड़",
    name: "Pakur",
    aka: ["Sahibganj Division"],
    district: "Pakur",
    population: "0.08 million",
    pincode: "816107",
    latitude: 24.6363,
    longitude: 87.8424,
    airportCode: null,
    nearestAirport: { name: "Deoghar Airport", code: "DBR", distance: 120 },
    railwayStation: "Pakur Station",
    tier: 3,
    localities: [
      "Pakur Town", "Hiranpur", "Amrapara", "Littipara",
      "Maheshpur", "Pakuria"
    ],
    localFare: {
      hatchback_4hr: 799,
      sedan_4hr: 1099,
      suv_4hr: 1499,
      hatchback_8hr: 1499,
      sedan_8hr: 1999,
      suv_8hr: 2699
    },
    touristPlaces: [
      "Rajmahal Hills", "Tolapahar", "Ganga River (Sahibganj)",
      "Kanhaiya Sthan Temple"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Pakur, located in northeast Jharkhand near the Rajmahal Hills, is an emerging district headquarters. It serves as a gateway to Sahibganj and the Ganga river belt region. Sree Travels provides cab services from Pakur connecting to Dumka, Deoghar, Kolkata, and other major destinations.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Ashok Marandi", text: "Good cab service from Pakur. Used for Dumka trip. Very reliable.", rating: 5 },
      { name: "Babita Devi", text: "Booked cab from Pakur to Deoghar for temple visit. Comfortable ride.", rating: 5 },
      { name: "Nirmal Hembrom", text: "Sree Travels is the best cab option in Pakur. Clean cars, good drivers.", rating: 5 }
    ]
  },
  {
    slug: "kolkata",
    hindiName: "कोलकाता",
    name: "Kolkata",
    aka: ["Calcutta", "City of Joy", "KOL"],
    district: "Kolkata",
    population: "14.8 million",
    pincode: "700001",
    latitude: 22.5726,
    longitude: 88.3639,
    airportCode: "CCU",
    nearestAirport: { name: "Netaji Subhas Chandra Bose International Airport", code: "CCU", distance: 17 },
    railwayStation: "Howrah Junction",
    tier: 1,
    localities: [
      "Howrah", "Sealdah", "Park Street", "Salt Lake", "Rajarhat",
      "Newtown", "Gariahat", "Jadavpur", "Behala", "Esplanade",
      "Dum Dum", "Barrackpore", "Tollygunge", "Ballygunge", "Alipore",
      "Lake Town", "Kankurgachi", "Garia", "Kasba", "Ultadanga"
    ],
    localFare: {
      hatchback_4hr: 1099,
      sedan_4hr: 1399,
      suv_4hr: 1799,
      hatchback_8hr: 1899,
      sedan_8hr: 2399,
      suv_8hr: 3199
    },
    touristPlaces: [
      "Victoria Memorial", "Howrah Bridge", "Indian Museum",
      "Dakshineswar Kali Temple", "Science City", "Eco Park Newtown"
    ],
    nearbyAttractions: [],
    seoTitle: "",
    seoH1: "",
    seoDescription: "Kolkata, the City of Joy and capital of West Bengal, is a major gateway for travel to Jharkhand. Located on the banks of the Hooghly River, it is connected to Jamshedpur, Ranchi, Dhanbad, and all Jharkhand cities via excellent highways. Sree Travels provides premium outstation cab services from Kolkata to all major Jharkhand cities and beyond with GPS-tracked fleet, AC cabs, and 24/7 availability. Book Kolkata to Jamshedpur cab, Kolkata to Ranchi cab at best fares.",
    longDescription: "",
    transportGuide: "",
    corporateInfo: "",
    stationInfo: "",
    hindiKeywords: [],
    nearMeKeywords: [],
    localKeywords: [],
    reviews: [
      { name: "Subir Das", text: "Booked Sree Travels from Kolkata to Jamshedpur. Excellent service, car was on time at Howrah. Very comfortable journey.", rating: 5 },
      { name: "Meena Kumari", text: "Used their Kolkata to Ranchi cab service. Driver was experienced, AC car, very smooth ride. Will book again.", rating: 5 },
      { name: "Rakesh Gupta", text: "Sree Travels is best for Kolkata to Jharkhand travel. Affordable, reliable, clean cars. Highly recommended!", rating: 5 }
    ]
  }
];

export function getCityBySlug(slug: string): CityData | undefined {
  return jharkhandCities.find(city => city.slug === slug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): CityData[] {
  return jharkhandCities.filter(city => city.tier === tier);
}

export function getAllCitySlugs(): string[] {
  return jharkhandCities.map(city => city.slug);
}
