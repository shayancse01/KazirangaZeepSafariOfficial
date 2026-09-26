export const ranges = [
  {
    name: "Kohora",
    tag: "Central • most rhinos",
    time: "7:30 AM / 1:30 PM",
    seats: "6 per jeep",
    note: "Tall grass, best first-timer loop.",
  },
  {
    name: "Bagori",
    tag: "Western • tall grass",
    time: "7:30 AM / 1:30 PM",
    seats: "6 per jeep",
    note: "Rhino + wild buffalo country.",
  },
  {
    name: "Agoratoli",
    tag: "Eastern • birds + water",
    time: "7:30 AM / 1:30 PM",
    seats: "6 per jeep",
    note: "Pelicans, elephants, wide beels.",
  },
  {
    name: "Burapahar",
    tag: "Ghorakati • quiet",
    time: "7:30 AM / 1:30 PM",
    seats: "6 per jeep",
    note: "Hills, gibbons, fewer jeeps.",
  },
];

export const slots = [
  { slot: "Morning", time: "7:30 – 10:00 AM", note: "Cool light, active rhinos" },
  { slot: "Afternoon", time: "1:30 – 3:00 PM", note: "Warm light, easy photos" },
];

export const faqs = [
  {
    q: "When is the park open?",
    a: "Typically November to April. Closed in monsoon (May–October) when the Brahmaputra floods the grasslands. Dates shift slightly every year.",
  },
  {
    q: "What should I bring?",
    a: "Park permit + ID, a light jacket for morning slots, binoculars if you have them. No plastic litter — carry water in a reusable bottle.",
  },
  {
    q: "Will we see a rhino?",
    a: "Very likely in Central and Western ranges — Kaziranga holds two-thirds of the world's one-horned rhinos. Tigers are shy; consider any sighting a bonus.",
  },
  {
    q: "How do I book?",
    a: "Pick a range + slot below and send a request. We confirm on WhatsApp with jeep number and reporting point. Pay after confirmation.",
  },
];

export const gallerySlots = [
  "Rhino • 4:3",
  "Grassland • 1:1",
  "Jeep • 4:3",
  "Beel • 1:1",
  "Elephant • 4:3",
  "Sunset • 1:1",
];

export const prices: Array<[string, string]> = [
  ["Indian — Central / Western", "₹6,500"],
  ["Indian — Eastern / Burapahar", "₹6,000"],
  ["Foreigner — any range", "₹12,500"],
];

export const steps: Array<[string, string, string]> = [
  ["01", "Choose range", "Kohora for rhinos, Agoratoli for birds."],
  ["02", "Pick a slot", "Morning for action, afternoon for light."],
  ["03", "Show up", "We ping jeep no. on WhatsApp. Hop in."],
];

export const rangeOptions = [
  "Kohora (Central)",
  "Bagori (Western)",
  "Agoratoli (Eastern)",
  "Burapahar",
];

export const slotOptions = ["Morning 7:30 AM", "Afternoon 1:30 PM"];

export const siteNav: Array<[string, string]> = [
  ["Home", "/"],
  ["About", "/about"],
  ["Booking", "/booking"],
  ["Timings & Rates", "/timings"],
  ["Zones", "/zones"],
  ["How to Book", "/how-to-book"],
  ["Packages", "/packages"],
  ["Reach", "/reach"],
  ["Hotels", "/hotels"],
  ["Things to Do", "/experiences"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

export const guestOptions = ["1", "2", "3", "4", "5", "6"];

export const packages = [
  {
    name: "Day Safari",
    span: "1 safari • Kohora / Bagori",
    body: "One open-jeep slot with driver + guide and entry help. Best for Guwahati day-trippers — in at sunrise, out by lunch.",
    points: ["1 jeep slot", "Up to 6 seats", "Guide included"],
  },
  {
    name: "Rhino Weekend",
    span: "2 days • 3 safaris + culture",
    body: "Central + Eastern ranges, an evening of Assamese culture at the Orchid Park, and a slow morning for birds. Our most-booked story.",
    points: ["3 jeep slots", "Orchid Park evening", "Stay help included"],
  },
  {
    name: "Photographer",
    span: "Custom • dawn-first routing",
    body: "Dawn-first routing, window seats held, beel-side waits for light. Built around grassland, wetland and golden-hour frames.",
    points: ["Window seats", "Bird + beel focus", "Flexible slots"],
  },
];

export const hotelGroups = [
  {
    name: "Kohora lodges",
    body: "Walk-to-gate stays near the Central Range — wake up, report by 6:45 AM, hop in. Best for first safaris.",
  },
  {
    name: "Resorts & retreats",
    body: "Greener compounds with sit-outs and Assamese kitchens. Good for families and slow second days.",
  },
  {
    name: "Homestays",
    body: "Village rooms, home food, weaving looms next door. Pair with the culture trail in Things to Do.",
  },
];

export const posts = [
  {
    tag: "Guide",
    title: "Which range should you pick first?",
    body: "Kohora for rhinos, Agoratoli for birds, Bagori for buffalo country, Burapahar for quiet — how to choose by season and light.",
  },
  {
    tag: "Photo",
    title: "A morning slot, frame by frame",
    body: "6:45 AM report to 10 AM exit — what the grass does at dawn and where the camera should point.",
  },
  {
    tag: "Plan",
    title: "Two days in Kaziranga, done right",
    body: "Safari + Orchid Park + tea estate + waterfall: a slow itinerary that doesn't rush the wild.",
  },
];

export const wildlife = [
  "One-horned rhinoceros",
  "Majestic elephants",
  "Wild water buffaloes",
  "Swamp deer & birds",
];

export const landscapes = ["Grasslands", "Lush forests", "Wetlands"];

export const experiences = [
  {
    n: "01",
    title: "Jeep safari",
    body: "The classic way in — open safari vehicle through grasslands, forests and wetlands. Spot rhinos, wild elephants, deer and birds, range by range. Made for photography and big scenic views.",
  },
  {
    n: "02",
    title: "Elephant safari",
    body: "A slower, higher perch over the tall grass — a completely different feel for the same wild ground. Subject to availability and park regulations.",
  },
  {
    n: "03",
    title: "Birdwatching",
    body: "Resident and migratory birds everywhere: storks, eagles, hornbills and waterbirds around the wetlands. Bring binoculars and a camera, leave early.",
  },
  {
    n: "04",
    title: "Orchid & Biodiversity Park",
    body: "Orchids and native plants, Assamese cultural performances, local handicrafts and Assamese food — all in one gentle stop near the park.",
  },
  {
    n: "05",
    title: "Tea gardens",
    body: "Walk a nearby estate like Hathikuli — green rows, tea cultivation stories and an honest taste of Assam's tea culture.",
  },
  {
    n: "06",
    title: "Kakochang waterfall",
    body: "A scenic, easy day trip from the park. Greenery walk, nature photography and a slow afternoon by the water.",
  },
  {
    n: "07",
    title: "Villages & culture",
    body: "Assamese, Mising and Karbi villages: traditional weaving, handicrafts, folk music and regional cuisine. Meet the people behind the landscape.",
  },
  {
    n: "08",
    title: "Boat ride & dolphins",
    body: "An authorised Brahmaputra boat ride with a quiet mission — look for the endangered river dolphin breaking the surface.",
  },
];
