// ─── Lotwaala — App Showcase & SEO Constants ─────────────────────────────────

export const SITE_NAME = "Lotwaala";
export const SITE_URL = "https://lotwaala.com";
export const SITE_TAGLINE =
  "Your Entire Wholesale Market, Now in Your Pocket.";
export const SITE_DESCRIPTION =
  "Lotwaala is India's #1 wholesaler app and wholesale marketplace. Connect with verified wholesalers, browse bulk inventory, and close deals — all from your phone. Download now for free.";

export const APP_STORE_URL = "#"; // Replace with real App Store link when available
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.lotwallaim.app";
export const PHONE_NUMBER = "9429690230";

// ─── Primary Keywords ────────────────────────────────────────────────────────

export const PRIMARY_KEYWORDS = [
  "Wholesaler App",
  "Wholesale Marketplace",
  "Bulk Inventory India",
  "Wholesale App India",
  "B2B Wholesale Platform",
  "Dead Stock App",
  "Wholesale Market App Download",
] as const;

// ─── PDF SEO Keywords — Long-Term Evergreen ──────────────────────────────────

export const LONG_TERM_KEYWORDS = [
  { keyword: "wholesale products India", volume: 6000, cpc: 25, difficulty: 70, intent: "Buyer" },
  { keyword: "garment suppliers India", volume: 4500, cpc: 18, difficulty: 65, intent: "Seller" },
  { keyword: "buy bulk goods India", volume: 3200, cpc: 30, difficulty: 60, intent: "Buyer" },
  { keyword: "wholesale market in Delhi", volume: 3000, cpc: 15, difficulty: 50, intent: "Both" },
  { keyword: "buy in bulk India", volume: 2800, cpc: 22, difficulty: 55, intent: "Buyer" },
  { keyword: "bulk wholesale suppliers", volume: 2500, cpc: 20, difficulty: 58, intent: "Buyer" },
  { keyword: "online bulk suppliers", volume: 1900, cpc: 28, difficulty: 62, intent: "Buyer" },
  { keyword: "electronics wholesale India", volume: 1600, cpc: 10, difficulty: 45, intent: "Buyer" },
  { keyword: "buy bulk garments", volume: 1200, cpc: 18, difficulty: 50, intent: "Buyer" },
  { keyword: "wholesale chains India", volume: 1000, cpc: 12, difficulty: 40, intent: "Research" },
] as const;

// ─── PDF SEO Keywords — Short-Term / Seasonal ────────────────────────────────

export const SHORT_TERM_KEYWORDS = [
  { keyword: "Diwali decoration wholesale", volume: 5000, cpc: 35, difficulty: "High", intent: "Buyer" },
  { keyword: "bulk grocery online", volume: 4200, cpc: 18, difficulty: "Medium", intent: "Buyer" },
  { keyword: "wholesale floral garlands", volume: 3000, cpc: 25, difficulty: "Medium", intent: "Buyer" },
  { keyword: "Navratri dress wholesale", volume: 2800, cpc: 20, difficulty: "Medium", intent: "Buyer" },
  { keyword: "bulk electronic deals India", volume: 2500, cpc: 40, difficulty: "High", intent: "Buyer" },
  { keyword: "bulk spice order", volume: 1800, cpc: 22, difficulty: "Medium", intent: "Buyer" },
  { keyword: "bulk hand sanitizer India", volume: 1500, cpc: 50, difficulty: "High", intent: "Buyer" },
  { keyword: "wholesale paper packaging", volume: 800, cpc: 15, difficulty: "Low", intent: "Buyer" },
  { keyword: "bulk steel supplier India", volume: 600, cpc: 30, difficulty: "Medium", intent: "Buyer" },
  { keyword: "bulk chemical suppliers India", volume: 500, cpc: 35, difficulty: "High", intent: "Buyer" },
] as const;

// ─── App Install Focus Keywords ──────────────────────────────────────────────

export const APP_INSTALL_KEYWORDS = [
  "bulk buying app India",
  "wholesale marketplace app",
  "B2B bulk trading app",
  "wholesaler app download",
  "wholesale market app",
  "B2B wholesale app India",
  "bulk inventory app",
  "wholesale supplier app",
  "dead stock marketplace India",
] as const;

// ─── Programmatic SEO Data ───────────────────────────────────────────────────

export const CATEGORIES = [
  {
    slug: "electronics",
    name: "Electronics",
    description: "Smartphones, laptops, accessories & gadgets",
    keywords: ["electronics wholesale India", "bulk electronic deals India", "wholesale electronics suppliers", "buy electronics in bulk"],
  },
  {
    slug: "clothing",
    name: "Clothing & Apparel",
    description: "Men's, women's & kids' garments in bulk",
    keywords: ["garment suppliers India", "buy bulk garments", "wholesale clothing India", "bulk apparel suppliers"],
  },
  {
    slug: "footwear",
    name: "Footwear",
    description: "Shoes, sandals, sneakers & sports footwear",
    keywords: ["wholesale footwear India", "bulk shoes suppliers", "wholesale sandals India", "footwear wholesale market"],
  },
  {
    slug: "home-appliances",
    name: "Home Appliances",
    description: "Kitchen, cleaning & household appliances",
    keywords: ["wholesale home appliances India", "bulk kitchen appliances", "household appliances wholesale", "home appliance suppliers"],
  },
  {
    slug: "toys",
    name: "Toys & Games",
    description: "Action figures, board games & educational toys",
    keywords: ["wholesale toys India", "bulk toys suppliers", "wholesale games India", "buy toys in bulk"],
  },
  {
    slug: "cosmetics",
    name: "Cosmetics & Beauty",
    description: "Skincare, haircare, makeup & fragrances",
    keywords: ["wholesale cosmetics India", "bulk beauty products", "cosmetics suppliers India", "wholesale makeup India"],
  },
  {
    slug: "stationery",
    name: "Stationery & Office",
    description: "Notebooks, pens, printers & office supplies",
    keywords: ["wholesale stationery India", "bulk office supplies", "stationery suppliers India", "wholesale notebooks pens"],
  },
  {
    slug: "fmcg",
    name: "FMCG & Grocery",
    description: "Packaged food, beverages & daily essentials",
    keywords: ["bulk grocery online", "wholesale FMCG India", "bulk spice order", "wholesale grocery suppliers"],
  },
  {
    slug: "furniture",
    name: "Furniture",
    description: "Home & office furniture in bulk",
    keywords: ["wholesale furniture India", "bulk furniture suppliers", "office furniture wholesale", "home furniture wholesale"],
  },
  {
    slug: "auto-parts",
    name: "Auto Parts",
    description: "Car & bike parts, accessories & lubricants",
    keywords: ["wholesale auto parts India", "bulk car parts", "auto accessories wholesale", "vehicle parts suppliers"],
  },
  {
    slug: "textiles",
    name: "Textiles & Fabrics",
    description: "Raw fabrics, finished textiles & home linen",
    keywords: ["textile wholesale India", "bulk fabric suppliers", "wholesale textiles Surat", "fabric wholesale market"],
  },
  {
    slug: "jewellery",
    name: "Jewellery & Accessories",
    description: "Imitation jewellery, watches & fashion accessories",
    keywords: ["wholesale jewellery India", "bulk imitation jewellery", "fashion accessories wholesale", "jewellery suppliers India"],
  },
] as const;

export const CITIES = [
  { slug: "delhi", name: "Delhi", state: "Delhi" },
  { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
  { slug: "bangalore", name: "Bangalore", state: "Karnataka" },
  { slug: "hyderabad", name: "Hyderabad", state: "Telangana" },
  { slug: "chennai", name: "Chennai", state: "Tamil Nadu" },
  { slug: "kolkata", name: "Kolkata", state: "West Bengal" },
  { slug: "pune", name: "Pune", state: "Maharashtra" },
  { slug: "ahmedabad", name: "Ahmedabad", state: "Gujarat" },
  { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
  { slug: "lucknow", name: "Lucknow", state: "Uttar Pradesh" },
  { slug: "surat", name: "Surat", state: "Gujarat" },
  { slug: "indore", name: "Indore", state: "Madhya Pradesh" },
  { slug: "chandigarh", name: "Chandigarh", state: "Chandigarh" },
  { slug: "patna", name: "Patna", state: "Bihar" },
  { slug: "bhopal", name: "Bhopal", state: "Madhya Pradesh" },
  { slug: "nagpur", name: "Nagpur", state: "Maharashtra" },
  { slug: "coimbatore", name: "Coimbatore", state: "Tamil Nadu" },
  { slug: "ludhiana", name: "Ludhiana", state: "Punjab" },
  { slug: "kanpur", name: "Kanpur", state: "Uttar Pradesh" },
  { slug: "rajkot", name: "Rajkot", state: "Gujarat" },
] as const;

// ─── City-Specific SEO Data (from PDF) ───────────────────────────────────────

export const CITY_SEO_DATA: Record<string, { searchVolume: number; strength: string; targetKeyword: string; description: string }> = {
  delhi:     { searchVolume: 5000, strength: "Very High", targetKeyword: "wholesale market Delhi", description: "Delhi is India's largest wholesale hub, home to iconic markets like Chandni Chowk, Sadar Bazaar, and Karol Bagh. From electronics to textiles, Delhi's wholesale markets serve millions of retailers across North India." },
  mumbai:    { searchVolume: 4500, strength: "Very High", targetKeyword: "bulk suppliers Mumbai", description: "Mumbai's wholesale markets — including Crawford Market, Mangaldas Market, and Zaveri Bazaar — supply bulk goods to retailers across Western India. The city is a powerhouse for textiles, jewellery, and FMCG wholesale." },
  bangalore: { searchVolume: 4000, strength: "High", targetKeyword: "wholesale Bangalore", description: "Bangalore's growing wholesale sector spans electronics on SP Road, textiles on Avenue Road, and fresh produce at Yeshwanthpur Market. The city's tech-savvy retailers are rapidly adopting app-based wholesale sourcing." },
  chennai:   { searchVolume: 3500, strength: "High", targetKeyword: "bulk market Chennai", description: "Chennai's wholesale hubs — T. Nagar, George Town, and Koyambedu — are major supply centers for South India. The city excels in textiles, auto parts, and FMCG wholesale distribution." },
  hyderabad: { searchVolume: 3000, strength: "Medium", targetKeyword: "wholesale Hyderabad", description: "Hyderabad's wholesale markets like Begum Bazaar, Sultan Bazaar, and Moazzam Jahi Market serve Telangana and Andhra Pradesh. The city is known for wholesale jewellery, textiles, and spices." },
  pune:      { searchVolume: 2500, strength: "Medium", targetKeyword: "bulk suppliers Pune", description: "Pune's wholesale landscape includes Tulsi Baug, Shivaji Market, and Mahatma Phule Mandai. The city is a growing hub for electronics, FMCG, and auto parts wholesale." },
  surat:     { searchVolume: 2200, strength: "High", targetKeyword: "textile wholesale Surat", description: "Surat is India's undisputed textile wholesale capital. The city's textile markets — including Ring Road and Sahara Darwaza — supply fabrics and garments to the entire nation." },
  kolkata:   { searchVolume: 2000, strength: "High", targetKeyword: "Burrabazar wholesale", description: "Kolkata's Burrabazar is one of the oldest and largest wholesale markets in Asia. From FMCG to textiles, the city's wholesale ecosystem supports retailers across Eastern India." },
  ahmedabad: { searchVolume: 2000, strength: "Medium/High", targetKeyword: "textile market Ahmedabad", description: "Ahmedabad's wholesale sector is anchored by textiles, with markets like Raipur Gate and Relief Road. The city is also a hub for chemicals, machinery, and FMCG wholesale." },
  jaipur:    { searchVolume: 1800, strength: "Medium", targetKeyword: "handicraft wholesale Jaipur", description: "Jaipur's wholesale markets — Johari Bazaar, Bapu Bazaar, and Tripolia Bazaar — are famous for jewellery, textiles, and handicrafts. The city serves as the wholesale gateway for Rajasthan." },
  lucknow:   { searchVolume: 1500, strength: "Medium", targetKeyword: "wholesale market Lucknow", description: "Lucknow's Aminabad and Chowk markets are traditional wholesale hubs for textiles, chikankari garments, and FMCG products serving Uttar Pradesh's vast retail network." },
  indore:    { searchVolume: 1200, strength: "Medium", targetKeyword: "wholesale market Indore", description: "Indore's Sarafa Bazaar and Rajwada area house thriving wholesale businesses in textiles, FMCG, and electronics. The city is Central India's largest wholesale distribution center." },
  chandigarh: { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale Chandigarh", description: "Chandigarh's Sector 17 and Industrial Area serve as wholesale hubs for Punjab, Haryana, and Himachal Pradesh, specializing in electronics, clothing, and FMCG." },
  patna:     { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale market Patna", description: "Patna's wholesale markets in Boring Road and Kankarbagh serve Bihar's retail ecosystem with FMCG, textiles, and electronics at competitive wholesale prices." },
  bhopal:    { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Bhopal", description: "Bhopal's wholesale markets in New Market and Chowk Bazaar supply retailers across Madhya Pradesh with textiles, FMCG, and household goods at bulk prices." },
  nagpur:    { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale market Nagpur", description: "Nagpur, at the geographic center of India, is a key wholesale distribution hub. Markets like Itwari and Gandhibagh serve retailers across central India." },
  coimbatore: { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Coimbatore", description: "Coimbatore's wholesale sector spans textiles at Oppanakara Street, machinery, and auto parts. The city is a key industrial and wholesale hub for western Tamil Nadu." },
  ludhiana:  { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale Ludhiana", description: "Ludhiana is India's hosiery and knitwear capital, with wholesale markets supplying garments, textiles, and auto parts to retailers across Punjab and beyond." },
  kanpur:    { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale Kanpur", description: "Kanpur's Naveen Market and General Ganj are major wholesale centers for leather goods, textiles, and FMCG, serving retailers across Uttar Pradesh." },
  rajkot:    { searchVolume: 700, strength: "Medium", targetKeyword: "wholesale Rajkot", description: "Rajkot's wholesale markets specialize in machinery, auto parts, and textiles. The city is a key distribution center for the Saurashtra region of Gujarat." },
};

// ─── Festivals — Seasonal Landing Pages ──────────────────────────────────────

export const FESTIVALS = [
  {
    slug: "diwali",
    name: "Diwali",
    description: "India's festival of lights drives massive wholesale demand for decorations, lighting, gifting items, sweets, and festive clothing.",
    keywords: ["Diwali decoration wholesale", "Diwali wholesale deals", "bulk Diwali lights", "wholesale Diwali gifts India"],
    relatedCategories: ["electronics", "clothing", "home-appliances", "toys", "jewellery"],
    season: "October–November",
  },
  {
    slug: "navratri",
    name: "Navratri",
    description: "Navratri drives wholesale demand for traditional clothing, chaniya cholis, jewellery, and festive decorations across India.",
    keywords: ["Navratri dress wholesale", "wholesale chaniya choli", "bulk Navratri outfits", "wholesale Navratri decorations"],
    relatedCategories: ["clothing", "jewellery", "textiles", "cosmetics"],
    season: "September–October",
  },
  {
    slug: "holi",
    name: "Holi",
    description: "The festival of colors creates wholesale demand for colors, water guns, sweets, and festive clothing in bulk.",
    keywords: ["wholesale Holi colors", "bulk Holi products", "wholesale pichkari India", "Holi celebration wholesale"],
    relatedCategories: ["toys", "fmcg", "clothing", "cosmetics"],
    season: "March",
  },
  {
    slug: "raksha-bandhan",
    name: "Raksha Bandhan",
    description: "Raksha Bandhan drives bulk demand for rakhis, gift boxes, sweets, and festive packaging materials across India.",
    keywords: ["wholesale rakhi India", "bulk rakhi suppliers", "wholesale gift boxes", "Raksha Bandhan wholesale"],
    relatedCategories: ["jewellery", "fmcg", "stationery", "cosmetics"],
    season: "August",
  },
  {
    slug: "christmas",
    name: "Christmas",
    description: "Christmas season creates wholesale demand for decorations, gifting items, toys, clothing, and festive packaging.",
    keywords: ["wholesale Christmas decorations", "bulk Christmas gifts India", "wholesale Christmas trees", "Christmas wholesale deals"],
    relatedCategories: ["toys", "electronics", "clothing", "home-appliances", "stationery"],
    season: "December",
  },
  {
    slug: "eid",
    name: "Eid",
    description: "Eid celebrations drive wholesale demand for festive clothing, perfumes, gifting items, and food products in bulk.",
    keywords: ["wholesale Eid clothing", "bulk Eid gifts India", "wholesale attar perfume", "Eid wholesale market"],
    relatedCategories: ["clothing", "cosmetics", "fmcg", "jewellery", "textiles"],
    season: "Varies",
  },
] as const;

// ─── App Features (for Feature Grid) ────────────────────────────────────────

export const APP_FEATURES = [
  {
    id: "verified",
    title: "Verified Sellers",
    description: "Every wholesaler is KYC-verified with ratings and reviews from real buyers.",
  },
  {
    id: "realtime",
    title: "Real-Time Inventory",
    description: "Live stock updates. No stale listings. What you see is what's available.",
  },
  {
    id: "secure",
    title: "Secure Payments",
    description: "Escrow-protected transactions. Your money is safe until the goods arrive.",
  },
  {
    id: "logistics",
    title: "Built-In Logistics",
    description: "Integrated shipping across 120+ Indian cities. We handle the delivery.",
  },
  {
    id: "negotiation",
    title: "Price Negotiation",
    description: "Chat directly with sellers. Negotiate bulk pricing in real time.",
  },
  {
    id: "analytics",
    title: "Market Insights",
    description: "Track trending products, pricing history, and demand signals.",
  },
] as const;

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Download the App",
    description: "Get Lotwaala free on Android or iOS. Create your business profile in 60 seconds.",
  },
  {
    step: 2,
    title: "Browse & Connect",
    description: "Search thousands of wholesale listings by category and city. Chat with verified sellers.",
  },
  {
    step: 3,
    title: "Close the Deal",
    description: "Negotiate pricing, pay securely through the app, and get doorstep delivery.",
  },
] as const;

// ─── Social Proof Stats ─────────────────────────────────────────────────────

export const STATS = [
  { value: "10,000+", label: "Active Wholesalers" },
  { value: "120+", label: "Cities Covered" },
  { value: "50K+", label: "App Downloads" },
  { value: "4.8★", label: "App Store Rating" },
] as const;

// ─── FAQ Generators ──────────────────────────────────────────────────────────

export function generateMarketFAQs(cityName: string, categoryName: string) {
  return [
    {
      question: `Where can I find wholesale ${categoryName.toLowerCase()} in ${cityName}?`,
      answer: `You can find verified wholesale ${categoryName.toLowerCase()} suppliers in ${cityName} on the Lotwaala app. Download the app for free on Android or iOS to browse thousands of bulk ${categoryName.toLowerCase()} listings from verified wholesalers in ${cityName}.`,
    },
    {
      question: `How to buy bulk ${categoryName.toLowerCase()} in ${cityName}?`,
      answer: `Buying bulk ${categoryName.toLowerCase()} in ${cityName} is easy with Lotwaala. Simply download the app, search for "${categoryName} in ${cityName}", browse listings with live inventory, negotiate prices via chat, and place your order with secure payment and doorstep delivery.`,
    },
    {
      question: `Is Lotwaala free to use for ${categoryName.toLowerCase()} wholesale in ${cityName}?`,
      answer: `Yes! Lotwaala is completely free to download and use. There are no subscription fees or hidden charges. Connect with verified ${categoryName.toLowerCase()} wholesalers in ${cityName} at zero cost.`,
    },
    {
      question: `How many ${categoryName.toLowerCase()} wholesalers are on Lotwaala in ${cityName}?`,
      answer: `Lotwaala has a growing network of verified ${categoryName.toLowerCase()} wholesalers in ${cityName}. With 10,000+ wholesalers across 120+ Indian cities, you'll find competitive bulk pricing and real-time inventory for ${categoryName.toLowerCase()} in ${cityName}.`,
    },
    {
      question: `How do I download the Lotwaala wholesale app?`,
      answer: `Download Lotwaala for free from the Google Play Store (Android) or Apple App Store (iOS). Create your business profile in under 60 seconds and start browsing wholesale ${categoryName.toLowerCase()} listings in ${cityName} immediately.`,
    },
  ];
}

export function generateCityFAQs(cityName: string, state: string) {
  return [
    {
      question: `How to find wholesalers in ${cityName}?`,
      answer: `Lotwaala is the easiest way to find verified wholesalers in ${cityName}, ${state}. Download the free app to browse wholesale suppliers across 12+ categories including electronics, clothing, textiles, FMCG, and more — all in ${cityName}.`,
    },
    {
      question: `What wholesale categories are available in ${cityName} on Lotwaala?`,
      answer: `Lotwaala offers wholesale listings in ${cityName} across all major categories: Electronics, Clothing & Apparel, Footwear, Home Appliances, Toys & Games, Cosmetics & Beauty, Stationery, FMCG & Grocery, Furniture, Auto Parts, Textiles & Fabrics, and Jewellery & Accessories.`,
    },
    {
      question: `Is the Lotwaala app free for wholesale buyers in ${cityName}?`,
      answer: `Yes, Lotwaala is 100% free. Download the app, create your account, and start connecting with wholesale suppliers in ${cityName} — no subscription, no commission. Available on both Android and iOS.`,
    },
  ];
}

export function generateCategoryFAQs(categoryName: string) {
  return [
    {
      question: `Where can I find wholesale ${categoryName.toLowerCase()} suppliers in India?`,
      answer: `Lotwaala connects you with verified ${categoryName.toLowerCase()} wholesalers across 20+ major Indian cities including Delhi, Mumbai, Bangalore, Chennai, and more. Download the free app to browse bulk ${categoryName.toLowerCase()} listings with real-time inventory.`,
    },
    {
      question: `How to buy ${categoryName.toLowerCase()} in bulk online in India?`,
      answer: `With the Lotwaala app, buying ${categoryName.toLowerCase()} in bulk is simple. Search by city or browse all listings, compare prices from multiple wholesalers, negotiate via in-app chat, and pay securely with doorstep delivery across India.`,
    },
    {
      question: `What are the best cities for wholesale ${categoryName.toLowerCase()} in India?`,
      answer: `The top cities for wholesale ${categoryName.toLowerCase()} on Lotwaala include Delhi, Mumbai, Bangalore, Surat, Ahmedabad, and Chennai. Each city has verified local wholesalers offering competitive bulk pricing for ${categoryName.toLowerCase()}.`,
    },
  ];
}

export function generateFestivalFAQs(festivalName: string, season: string) {
  return [
    {
      question: `Where to buy ${festivalName} wholesale products in bulk?`,
      answer: `Lotwaala is your one-stop wholesale marketplace app for all ${festivalName} products. Buy decorations, gifts, clothing, and festive supplies in bulk from verified wholesalers across India. Download the free app to get started.`,
    },
    {
      question: `When should I start wholesale ${festivalName} buying?`,
      answer: `For ${festivalName} (${season}), we recommend starting your wholesale purchases 4-6 weeks in advance. Lotwaala offers year-round access to ${festivalName}-related wholesale suppliers so you can plan early and get the best bulk prices.`,
    },
    {
      question: `Does Lotwaala offer bulk deals for ${festivalName} season?`,
      answer: `Yes! Lotwaala wholesalers offer special bulk pricing during ${festivalName} season. Download the app for free to compare prices from thousands of verified suppliers and negotiate directly for the best ${festivalName} wholesale deals.`,
    },
  ];
}
