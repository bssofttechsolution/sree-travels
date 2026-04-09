// ============================================================
// SREE TRAVELS — LOCAL ROUTES DATA
// All local area-to-area routes within cities
// ============================================================

export interface LocalRouteData {
  city: string;
  cityName: string;
  fromArea: string;
  toArea: string;
  slug: string;
  distanceKm: number;
  durationMin: number;
  startingFare: number;
  fares: {
    hatchback: number;
    sedan: number;
    suv: number;
  };
  fromLandmarks: string[];
  toLandmarks: string[];
}

export const localRoutes: LocalRouteData[] = [
  // ========== JAMSHEDPUR LOCAL ROUTES ==========
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Mango", toArea: "Bistupur", slug: "mango-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Mango Market", "Dimna Road", "Mango Bridge", "Mango More"],
    toLandmarks: ["Bistupur Market", "Keenan Stadium", "Tata Main Hospital", "Jubilee Park"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sakchi", toArea: "Adityapur", slug: "sakchi-to-adityapur",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Sakchi Market", "Sakchi Bus Stand", "Sakchi Gurudwara", "Sakchi Court"],
    toLandmarks: ["Adityapur Industrial Area", "Gamharia", "Adityapur Phase 1", "Kandra Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Jugsalai", toArea: "Telco", slug: "jugsalai-to-telco",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Jugsalai Market", "Jugsalai Station", "Jugsalai More"],
    toLandmarks: ["Telco Colony", "Tata Motors Gate", "Telco Hospital", "W Town"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Dimna", toArea: "Jamshedpur Station", slug: "dimna-to-jamshedpur-station",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Dimna Lake", "Dimna Chowk", "Dimna Road"],
    toLandmarks: ["Tatanagar Station", "Platform 1", "Station Road", "Reservation Office"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Gamharia", toArea: "Jamshedpur", slug: "gamharia-to-jamshedpur",
    distanceKm: 12, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Gamharia Market", "Adityapur Industrial Area", "Gamharia Station"],
    toLandmarks: ["Bistupur", "Sakchi", "Tatanagar Station"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Boram", toArea: "Bistupur", slug: "boram-to-bistupur",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Boram Chowk", "Boram Road"],
    toLandmarks: ["Bistupur Market", "Keenan Stadium", "Main Road Bistupur"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Kadma", toArea: "Sakchi", slug: "kadma-to-sakchi",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Kadma Chowk", "Kadma More", "Kadma Bridge"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Golmuri", toArea: "Mango", slug: "golmuri-to-mango",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Golmuri Market", "Golmuri Club", "AG Office"],
    toLandmarks: ["Mango More", "Mango Market", "Dimna Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Sonari", toArea: "Bistupur", slug: "sonari-to-bistupur",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Sonari Airport Area", "Sonari More"],
    toLandmarks: ["Bistupur Market", "Main Road"]
  },
  {
    city: "jamshedpur", cityName: "Jamshedpur",
    fromArea: "Baridih", toArea: "Sakchi", slug: "baridih-to-sakchi",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Baridih Market", "Baridih Colony"],
    toLandmarks: ["Sakchi Market", "Sakchi Bus Stand"]
  },

  // ========== RANCHI LOCAL ROUTES ==========
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Doranda", toArea: "Kanke", slug: "doranda-to-kanke",
    distanceKm: 10, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Doranda Stadium", "Raj Bhawan", "Police Line"],
    toLandmarks: ["Kanke Dam", "RIMS Hospital", "Kanke Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Lalpur", toArea: "Ranchi Airport", slug: "lalpur-to-ranchi-airport",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Lalpur Chowk", "Lalpur Market"],
    toLandmarks: ["Birsa Munda Airport", "Terminal Building"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Harmu", toArea: "Dhurwa", slug: "harmu-to-dhurwa",
    distanceKm: 7, durationMin: 18,
    startingFare: 229,
    fares: { hatchback: 229, sedan: 329, suv: 429 },
    fromLandmarks: ["Harmu Housing Colony", "Harmu Road"],
    toLandmarks: ["Dhurwa Dam", "Dhurwa HEC Colony"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Morabadi", toArea: "Bariatu", slug: "morabadi-to-bariatu",
    distanceKm: 5, durationMin: 12,
    startingFare: 179,
    fares: { hatchback: 179, sedan: 279, suv: 379 },
    fromLandmarks: ["Morabadi Ground", "Morabadi Chowk"],
    toLandmarks: ["Bariatu Hospital", "Bariatu Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Hinoo", toArea: "Kokar", slug: "hinoo-to-kokar",
    distanceKm: 4, durationMin: 10,
    startingFare: 149,
    fares: { hatchback: 149, sedan: 249, suv: 349 },
    fromLandmarks: ["Hinoo Chowk", "Hinoo Market"],
    toLandmarks: ["Kokar Chowk", "Kokar Industrial Area"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Ratu Road", toArea: "Ranchi Station", slug: "ratu-road-to-ranchi-station",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Ratu Road", "Ratu More"],
    toLandmarks: ["Ranchi Junction Station", "Station Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Booty More", toArea: "Argora", slug: "booty-more-to-argora",
    distanceKm: 6, durationMin: 15,
    startingFare: 199,
    fares: { hatchback: 199, sedan: 299, suv: 399 },
    fromLandmarks: ["Booty More Chowk", "Booty More Market"],
    toLandmarks: ["Argora Chowk", "Argora Road"]
  },
  {
    city: "ranchi", cityName: "Ranchi",
    fromArea: "Namkum", toArea: "Hatia", slug: "namkum-to-hatia",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Namkum Chowk", "BIT Mesra Road"],
    toLandmarks: ["Hatia Station", "Hatia Dam", "HEC Colony"]
  },

  // ========== DHANBAD LOCAL ROUTES ==========
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Jharia", toArea: "Dhanbad Station", slug: "jharia-to-dhanbad-station",
    distanceKm: 15, durationMin: 30,
    startingFare: 349,
    fares: { hatchback: 349, sedan: 449, suv: 599 },
    fromLandmarks: ["Jharia Market", "Jharia Coal Mines", "Jharia Bus Stand"],
    toLandmarks: ["Dhanbad Junction", "Station Road", "Hirapur"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Sindri", toArea: "Dhanbad", slug: "sindri-to-dhanbad",
    distanceKm: 22, durationMin: 40,
    startingFare: 449,
    fares: { hatchback: 449, sedan: 599, suv: 799 },
    fromLandmarks: ["Sindri Town", "Sindri Fertilizer Factory", "Sindri More"],
    toLandmarks: ["Dhanbad Station", "Bank More", "City Centre"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Katras", toArea: "Dhanbad", slug: "katras-to-dhanbad",
    distanceKm: 12, durationMin: 25,
    startingFare: 299,
    fares: { hatchback: 299, sedan: 399, suv: 549 },
    fromLandmarks: ["Katras Market", "Katras More"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Phusro", toArea: "Dhanbad", slug: "phusro-to-dhanbad",
    distanceKm: 30, durationMin: 50,
    startingFare: 599,
    fares: { hatchback: 599, sedan: 799, suv: 999 },
    fromLandmarks: ["Phusro Town", "Phusro Station"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Topchanchi", toArea: "Dhanbad", slug: "topchanchi-to-dhanbad",
    distanceKm: 18, durationMin: 35,
    startingFare: 399,
    fares: { hatchback: 399, sedan: 549, suv: 699 },
    fromLandmarks: ["Topchanchi Lake", "Topchanchi Town"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
  {
    city: "dhanbad", cityName: "Dhanbad",
    fromArea: "Govindpur", toArea: "Dhanbad", slug: "govindpur-to-dhanbad",
    distanceKm: 8, durationMin: 20,
    startingFare: 249,
    fares: { hatchback: 249, sedan: 349, suv: 449 },
    fromLandmarks: ["Govindpur Market", "Govindpur Road"],
    toLandmarks: ["Dhanbad Station", "Bank More"]
  },
];

// ========== HELPER FUNCTIONS ==========

export function getLocalRoutesByCity(city: string): LocalRouteData[] {
  return localRoutes.filter(r => r.city === city);
}

export function getLocalRoute(city: string, slug: string): LocalRouteData | undefined {
  return localRoutes.find(r => r.city === city && r.slug === slug);
}

export function getAllLocalRouteParams(): { citySlug: string; routeSlug: string }[] {
  return localRoutes.map(r => ({
    citySlug: `local-taxi-${r.city}`,
    routeSlug: r.slug
  }));
}
