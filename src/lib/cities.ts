// ============================================================
// SREE TRAVELS — JHARKHAND CITIES DATA
// All 15 cities with complete SEO metadata
// ============================================================

export interface CityData {
  slug: string;
  name: string;
  aka: string[];
  district: string;
  population: string;
  pincode: string;
  latitude: number;
  longitude: number;
  airportCode: string | null;
  nearestAirport: { name: string; code: string; distance: number };
  railwayStation: string;
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
  seoDescription: string;
  reviews: { name: string; text: string; rating: number }[];
}

export const jharkhandCities: CityData[] = [
  {
    slug: "jamshedpur",
    name: "Jamshedpur",
    aka: ["Tata Nagar", "Steel City", "JSR"],
    district: "East Singhbhum",
    population: "1.3 million",
    pincode: "831001",
    latitude: 22.8046,
    longitude: 86.2029,
    airportCode: null,
    nearestAirport: { name: "Ranchi Airport", code: "IXR", distance: 130 },
    railwayStation: "Tatanagar Junction",
    tier: 1,
    localities: [
      "Mango", "Bistupur", "Sakchi", "Jugsalai", "Adityapur",
      "Gamharia", "Telco Colony", "Kadma", "Golmuri", "Dimna",
      "Baridih", "Sonari", "Boram", "Ulidih", "Bhuiyadih",
      "Agrico", "Sidhgora", "Sitaramdera", "Pardih", "Marine Drive"
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
      "Tata Steel Zoo", "Jayanti Sarovar", "Bhubneshwari Temple"
    ],
    seoDescription: "Searching for the best cab service in Jamshedpur (Tata) or Tatanagar railway station? Sree Travels is the #1 rated car rental in Jamshedpur, offering premium AC cabs across Tata Nagar. Whether you need an outstation taxi booking online from Tata to Ranchi cab, local Tatanagar taxi service, or corporate car rental in Jamshedpur, our 50+ verified cabs are available 24/7. Get the lowest fares for Jamshedpur to Ranchi cab, Tata to Dhanbad taxi, and airport drop services from Jamshedpur. Call +919204714249 for instant cab booking in Tata.",
    reviews: [
      { name: "Rajesh Kumar", text: "Best cab service in Tata! I regularly book Sree Travels for car rental in Jamshedpur. Always punctual from Tatanagar station.", rating: 5 },
      { name: "Priya Singh", text: "Took an Innova for Tata to Ranchi cab service. Driver was very professional and the Jamshedpur/Tata to Ranchi road was covered very smoothly. Highly recommended!", rating: 5 },
      { name: "Amit Sharma", text: "Very reliable Tatanagar taxi booking for airport transfers. The best car rental in Jamshedpur/Tata without a doubt.", rating: 5 }
    ]
  },
  {
    slug: "ranchi",
    name: "Ranchi",
    aka: ["City of Waterfalls", "Capital City"],
    district: "Ranchi",
    population: "1.1 million",
    pincode: "834001",
    latitude: 23.3441,
    longitude: 85.3096,
    airportCode: "IXR",
    nearestAirport: { name: "Birsa Munda Airport", code: "IXR", distance: 7 },
    railwayStation: "Ranchi Junction",
    tier: 1,
    localities: [
      "Doranda", "Kanke", "Lalpur", "Harmu", "Dhurwa",
      "Morabadi", "Bariatu", "Hinoo", "Kokar", "Ratu Road",
      "Booty More", "Argora", "Namkum", "Hatia", "Ashok Nagar",
      "Chutia", "Upper Bazar", "Main Road", "Piska More", "Mesra"
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
      "Tagore Hill", "Pahari Mandir", "Ranchi Lake"
    ],
    seoDescription: "Looking for the best cab service in Ranchi or a reliable Ranchi to Jamshedpur/Tata cab? Sree Travels provides top-rated car rental in Ranchi with 40+ verified AC cabs. Whether you need a Ranchi to Tata cab for business, Birsa Munda airport taxi booking, or an outstation taxi from Ranchi to Dhanbad/Bokaro, we guarantee transparent pricing and punctual service. Book your one way cab from Ranchi to Tata or local Ranchi sightseeing taxi today online or via call.",
    reviews: [
      { name: "Sanjay Verma", text: "Excellent car rental in Ranchi! I use their Ranchi to Tata cab service weekly. Very punctual and affordable compared to others.", rating: 5 },
      { name: "Neha Gupta", text: "Booked Innova Crysta for Ranchi to Jamshedpur (Tatanagar) trip. Best cab service in Ranchi — comfortable ride, professional driver.", rating: 5 },
      { name: "Vikram Jha", text: "Top-notch airport transfer service and outstation taxi booking online in Ranchi. Always on time for early morning flights.", rating: 5 }
    ]
  },
  {
    slug: "dhanbad",
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
    seoDescription: "Dhanbad, the Coal Capital of India, is a major industrial city in Jharkhand known for its coal mines and IIT (ISM). Located on the Grand Trunk Road, Dhanbad has excellent rail connectivity through Dhanbad Junction. Sree Travels offers reliable cab services across Dhanbad for local commutes, outstation journeys to Kolkata, Ranchi, and beyond. Our fleet of AC cabs with verified drivers ensures you travel safely from Jharia to Bank More, Sindri to Govindpur — anywhere in Dhanbad.",
    reviews: [
      { name: "Ravi Prasad", text: "I regularly travel from Dhanbad to Bokaro for work. Sree Travels is my go-to cab service. Always reliable!", rating: 5 },
      { name: "Pooja Devi", text: "Booked Swift Dzire for Dhanbad to Kolkata trip. Very comfortable and affordable. Driver was very experienced.", rating: 5 },
      { name: "Manish Tiwari", text: "Best taxi service in Dhanbad for local travel. Clean cars, polite drivers, and fair pricing.", rating: 5 }
    ]
  },
  {
    slug: "bokaro",
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
    seoDescription: "Bokaro Steel City, home to Bokaro Steel Plant (SAIL), is a well-planned industrial city in Jharkhand. Known for its organized sectors and greenery, Bokaro is a major hub for industrial and corporate travel. Sree Travels provides professional cab services across Bokaro for local commutes, outstation trips, and corporate bookings. Our fleet serves all sectors, Chas, City Centre, and beyond.",
    reviews: [
      { name: "Suresh Mahato", text: "I use Sree Travels for my office travel in Bokaro. Always clean and comfortable cabs. Highly recommend!", rating: 5 },
      { name: "Anita Roy", text: "Booked Ertiga for family trip from Bokaro to Ranchi. Very smooth ride and professional driver.", rating: 5 },
      { name: "Deepak Kumar", text: "Best cab service in Bokaro Steel City. Reliable for both local and outstation travel.", rating: 5 }
    ]
  },
  {
    slug: "deoghar",
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
    seoDescription: "Deoghar, home to the sacred Baidyanath Dham temple (one of the 12 Jyotirlingas), is the most important pilgrimage city in Jharkhand. Millions of devotees visit during Sravani Mela every year. Sree Travels provides dedicated pilgrimage cab services in Deoghar, including temple darshan tours, airport transfers from the new Deoghar Airport, and outstation trips. Book reliable cabs for hassle-free travel to and from Baidyanath Dham.",
    reviews: [
      { name: "Ramesh Pandey", text: "Booked cab for Baidyanath Dham visit. Driver knew all the temple routes. Very helpful service!", rating: 5 },
      { name: "Sunita Devi", text: "Excellent service during Sravani Mela. Got cab on time despite heavy rush. Thank you Sree Travels!", rating: 5 },
      { name: "Arun Mishra", text: "Used Sree Travels for Deoghar to Kolkata trip. Smooth journey, clean car, affordable fare.", rating: 5 }
    ]
  },
  {
    slug: "hazaribagh",
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
    seoDescription: "Hazaribagh, meaning 'City of Thousand Gardens', is a scenic hill town in Jharkhand known for its pleasant climate's Hazaribagh National Park. Located on NH 33, it serves as a gateway to many natural attractions. Sree Travels provides reliable cab services across Hazaribagh for local travel, outstation journeys, and tourism packages to destinations like Netarhat and Rajrappa.",
    reviews: [
      { name: "Vivek Sinha", text: "Booked cab for Hazaribagh to Ranchi trip. Driver was punctual, car was clean. Great service!", rating: 5 },
      { name: "Kavita Kumari", text: "Used Sree Travels for Hazaribagh local sightseeing. Covered all major attractions comfortably.", rating: 5 },
      { name: "Manoj Pathak", text: "Reliable cab service in Hazaribagh. I book them regularly for my Bokaro office travel.", rating: 5 }
    ]
  },
  {
    slug: "giridih",
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
    seoDescription: "Giridih, located at the foot of the famous Parasnath Hill (highest peak of Jharkhand), is an important city for both pilgrimage and commerce. The Jain pilgrimage to Parasnath Hill at Madhuban attracts devotees from across India. Sree Travels provides cab services across Giridih for local travel, Parasnath pilgrimages, and outstation trips to Dhanbad, Bokaro, Ranchi, and beyond.",
    reviews: [
      { name: "Rakesh Jain", text: "Booked cab for Parasnath Hill pilgrimage from Giridih. Driver was experienced with hill routes. Excellent!", rating: 5 },
      { name: "Suman Kumari", text: "Great cab service for Giridih locals. Clean cars and reasonable pricing.", rating: 5 },
      { name: "Pankaj Verma", text: "Used Sree Travels for Giridih to Dhanbad round trip. Very comfortable sedan cab.", rating: 5 }
    ]
  },
  {
    slug: "dumka",
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
    seoDescription: "Dumka, the headquarters of Santhal Pargana division, is an important administrative city in eastern Jharkhand. It serves as a gateway to the Santhal tribal culture and heritage. Sree Travels provides cab services across Dumka for local travel, connections to Deoghar, Jamshedpur, and outstation journeys to Kolkata and Patna.",
    reviews: [
      { name: "Santosh Murmu", text: "Best cab service available in Dumka. Clean cars and professional drivers.", rating: 5 },
      { name: "Rita Baskey", text: "Booked cab from Dumka to Deoghar for Baidyanath Dham visit. Very smooth ride.", rating: 5 },
      { name: "Ajay Tudu", text: "Reliable outstation cab service from Dumka. Used for Kolkata trip — no complaints.", rating: 5 }
    ]
  },
  {
    slug: "chaibasa",
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
    seoDescription: "Chaibasa, headquarters of West Singhbhum district, is a scenic town surrounded by hills and forests of the Saranda Forest Range. Known for its tribal culture and natural beauty, Chaibasa serves as a gateway to the mineral-rich region of southern Jharkhand. Sree Travels provides cab services for Chaibasa residents connecting to Jamshedpur, Ranchi, Rourkela, and beyond.",
    reviews: [
      { name: "Birsa Hembrom", text: "Good cab service from Chaibasa to Jamshedpur. Always available when I need.", rating: 5 },
      { name: "Lakshmi Mahato", text: "Used Sree Travels for Chaibasa local travel. Affordable and reliable.", rating: 5 },
      { name: "Sunil Singh", text: "Booked cab from Chaibasa to Ranchi. Clean car, experienced driver. Very satisfied.", rating: 5 }
    ]
  },
  {
    slug: "adityapur",
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
    seoDescription: "Adityapur (Gamharia), one of Asia's largest industrial areas, is located adjacent to Jamshedpur in Seraikela-Kharsawan district. The area is home to hundreds of industries and factories, making it a major hub for corporate and business travel. Sree Travels provides dedicated cab services for Adityapur's industrial workforce and residents for local commutes and outstation travel.",
    reviews: [
      { name: "Rohit Agarwal", text: "I use Sree Travels daily for my Adityapur to Bistupur commute. Very reliable service.", rating: 5 },
      { name: "Meera Devi", text: "Good cab service from Adityapur. Clean cars, always on time.", rating: 5 },
      { name: "Suraj Mahato", text: "Booked cab from Gamharia to Ranchi. Comfortable sedan, fair pricing.", rating: 5 }
    ]
  },
  {
    slug: "ramgarh",
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
    seoDescription: "Ramgarh, known for the scenic Patratu Valley and the sacred Rajrappa Temple, is an important town between Ranchi and Bokaro. The Ramgarh Cantonment area has historical military significance. Sree Travels serves Ramgarh residents with cab services to Ranchi, Bokaro, Hazaribagh, and all major Jharkhand destinations.",
    reviews: [
      { name: "Anil Kumar", text: "Good cab service from Ramgarh to Ranchi. Always available and affordable.", rating: 5 },
      { name: "Savita Devi", text: "Booked cab for Patratu Valley sightseeing. Great experience!", rating: 5 },
      { name: "Rajesh Mahto", text: "Reliable cab service in Ramgarh. I recommend Sree Travels.", rating: 5 }
    ]
  },
  {
    slug: "koderma",
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
    seoDescription: "Koderma, known as the Mica City of India, is located in northern Jharkhand at the junction of major rail and road routes. The nearby town of Jhumri Tilaiya is famous as a cultural reference point. Sree Travels provides cab services from Koderma to major cities like Ranchi, Hazaribagh, Patna, and beyond.",
    reviews: [
      { name: "Dinesh Prasad", text: "Good cab service from Koderma. Used for Ranchi trip — very comfortable.", rating: 5 },
      { name: "Rashmi Kumari", text: "Reliable cab booking from Koderma. Sree Travels is our family's preferred service.", rating: 5 },
      { name: "Sudhir Singh", text: "Booked cab from Koderma to Hazaribagh. Punctual and affordable.", rating: 5 }
    ]
  },
  {
    slug: "phusro",
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
    seoDescription: "Phusro (Petarbar), part of the Bokaro district coalfield region, is an important town on the Dhanbad-Bokaro corridor. Sree Travels provides cab services from Phusro connecting to Dhanbad, Bokaro, Ranchi, and other Jharkhand destinations.",
    reviews: [
      { name: "Govind Das", text: "Good cab service from Phusro. I commute to Dhanbad regularly. Sree Travels is reliable.", rating: 5 },
      { name: "Kiran Devi", text: "Used cab from Phusro to Bokaro. Clean car and fair price.", rating: 5 },
      { name: "Manoj Kumar", text: "Reliable cab service in Phusro area. Recommended for outstation travel.", rating: 5 }
    ]
  },
  {
    slug: "daltonganj",
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
    seoDescription: "Daltonganj (Medininagar), the headquarters of Palamu district, is the gateway to Betla National Park and the scenic hill station of Netarhat. Located in western Jharkhand, Daltonganj is an important administrative and tourism center. Sree Travels provides cab services from Daltonganj to Ranchi, Netarhat, Betla, and other destinations.",
    reviews: [
      { name: "Rishab Kumar", text: "Booked cab from Daltonganj to Netarhat. Amazing scenic route, great cab service!", rating: 5 },
      { name: "Geeta Devi", text: "Used Sree Travels for Daltonganj to Ranchi trip. Very comfortable and on time.", rating: 5 },
      { name: "Pramod Singh", text: "Reliable cab service in Daltonganj area. Good for Betla National Park visits.", rating: 5 }
    ]
  },
  {
    slug: "pakur",
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
    seoDescription: "Pakur, located in northeast Jharkhand near the Rajmahal Hills, is an emerging district headquarters. It serves as a gateway to Sahibganj and the Ganga river belt region. Sree Travels provides cab services from Pakur connecting to Dumka, Deoghar, Kolkata, and other major destinations.",
    reviews: [
      { name: "Ashok Marandi", text: "Good cab service from Pakur. Used for Dumka trip. Very reliable.", rating: 5 },
      { name: "Babita Devi", text: "Booked cab from Pakur to Deoghar for temple visit. Comfortable ride.", rating: 5 },
      { name: "Nirmal Hembrom", text: "Sree Travels is the best cab option in Pakur. Clean cars, good drivers.", rating: 5 }
    ]
  },
  {
    slug: "kolkata",
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
    seoDescription: "Kolkata, the City of Joy and capital of West Bengal, is a major gateway for travel to Jharkhand. Located on the banks of the Hooghly River, it is connected to Jamshedpur, Ranchi, Dhanbad, and all Jharkhand cities via excellent highways. Sree Travels provides premium outstation cab services from Kolkata to all major Jharkhand cities and beyond with GPS-tracked fleet, AC cabs, and 24/7 availability. Book Kolkata to Jamshedpur cab, Kolkata to Ranchi cab at best fares.",
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
