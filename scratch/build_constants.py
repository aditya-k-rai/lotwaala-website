# Python script to generate clean lib/constants.ts with 34 categories and 50 cities
import os

constants_content = '''// ─── Lotwaala — App Showcase & SEO Constants ─────────────────────────────────

export const SITE_NAME = "Lotwaala";
export const SITE_URL = "https://lotwaala.com";
export const SITE_LOCALE = "en_IN";
export const SITE_LAST_MODIFIED = "2026-05-26";
export const SITE_TAGLINE =
  "Buy Wholesale Products Online - Your Entire Wholesale Market, Now in Your Pocket.";
export const SITE_DESCRIPTION =
  "Buy wholesale products online in India's #1 wholesale app. Connect with verified wholesalers in 120+ cities in India. Download free for Android & iOS.";

export const PHONE_NUMBER = "9266402725";
export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.lotwallaim.app";
export const APP_STORE_URL = ""; // Replace with the real App Store link when available.
export const IOS_APP_INTEREST_URL = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hi! I'm interested in the Lotwaala iOS app. Please let me know when it's available."
)}`;

// ─── Primary Keywords ────────────────────────────────────────────────────────

export const PRIMARY_KEYWORDS = [
  "Wholesale Products",
  "Wholesale Products Online",
  "Wholesale Products India",
  "Buy Wholesale Products",
  "Wholesale Products App",
  "Wholesale Goods Online",
  "Wholesaler App",
  "Wholesale Marketplace",
  "Bulk Inventory India",
  "Wholesale App India",
  "B2B Wholesale Platform",
  "Dead Stock App",
  "Wholesale Market App Download",
  "Wholesale Products Suppliers India",
  "Wholesale Goods App India",
] as const;

// ─── Wholesale Products — High-Intent Ranking Cluster ────────────────────────

export const WHOLESALE_PRODUCTS_KEYWORDS = [
  "wholesale products",
  "wholesale products online",
  "wholesale products India",
  "wholesale products app",
  "wholesale products suppliers",
  "buy wholesale products online India",
  "wholesale products near me",
  "wholesale products for resale",
  "wholesale products in bulk",
  "wholesale products marketplace",
  "wholesale products at factory price",
  "wholesale products for small business",
  "cheap wholesale products India",
  "wholesale products distributors India",
  "wholesale products dealers India",
  "wholesale products price list India",
  "wholesale goods online India",
  "wholesale items in bulk",
  "wholesale shopping app India",
  "wholesale products for retailers",
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

// ─── Programmatic SEO Data — 34 Wholesale Categories ─────────────────────────

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
  {
    slug: "bags-luggage",
    name: "Bags & Luggage",
    description: "School bags, travel suitcases, backpacks & duffels in bulk",
    keywords: ["wholesale bags India", "bulk luggage suppliers", "backpacks wholesale market", "travel bags wholesale"],
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    description: "Phone covers, tempered glass, chargers & power banks in bulk",
    keywords: ["mobile accessories wholesale India", "bulk phone cases", "charger suppliers India", "screen protector wholesale"],
  },
  {
    slug: "hardware-tools",
    name: "Hardware & Tools",
    description: "Hand tools, power tools, fasteners & plumbing hardware",
    keywords: ["wholesale hardware India", "bulk power tools suppliers", "plumbing hardware wholesale", "fasteners wholesale market"],
  },
  {
    slug: "kitchenware-utensils",
    name: "Kitchenware & Utensils",
    description: "Stainless steel utensils, non-stick cookware & kitchen gadgets",
    keywords: ["wholesale kitchenware India", "bulk utensils suppliers", "cookware wholesale market", "kitchen gadgets bulk"],
  },
  {
    slug: "packaging-materials",
    name: "Packaging & Boxes",
    description: "Corrugated boxes, bubble wrap, poly mailers & packing tape",
    keywords: ["wholesale packaging materials", "bulk packaging boxes India", "bubble wrap wholesale", "poly mailers bulk"],
  },
  {
    slug: "sports-fitness",
    name: "Sports & Fitness",
    description: "Gym equipment, sports goods, activewear & fitness gear",
    keywords: ["wholesale sports goods India", "bulk gym equipment", "fitness accessories wholesale", "sports gear bulk"],
  },
  {
    slug: "electricals-lighting",
    name: "Electricals & Lighting",
    description: "LED bulbs, switches, copper wires & decorative lights",
    keywords: ["wholesale electricals India", "bulk LED lights", "electrical wire suppliers", "decorative lighting wholesale"],
  },
  {
    slug: "baby-kids-care",
    name: "Baby & Kids Care",
    description: "Baby clothing, strollers, diapers & feeding supplies in bulk",
    keywords: ["wholesale baby products India", "bulk diaper suppliers", "baby clothing wholesale", "kids products bulk"],
  },
  {
    slug: "medical-supplies",
    name: "Medical & Surgical Supplies",
    description: "Surgical items, diagnostic equipment & wellness products",
    keywords: ["wholesale medical supplies India", "surgical instruments bulk", "wellness products wholesale", "medical equipment suppliers"],
  },
  {
    slug: "cleaning-sanitation",
    name: "Cleaning & Sanitation",
    description: "Mops, detergents, disinfectants, brooms & housekeeping items",
    keywords: ["wholesale cleaning products India", "bulk housekeeping supplies", "disinfectant wholesale", "cleaning detergent bulk"],
  },
  {
    slug: "leather-goods",
    name: "Leather Goods",
    description: "Leather jackets, wallets, belts, shoes & handbags in bulk",
    keywords: ["wholesale leather goods India", "bulk leather wallets", "leather belt suppliers", "leather jacket wholesale"],
  },
  {
    slug: "eyewear-sunglasses",
    name: "Eyewear & Sunglasses",
    description: "Optical frames, sunglasses, reading glasses & accessories",
    keywords: ["wholesale eyewear India", "bulk sunglasses suppliers", "optical frames wholesale", "reading glasses bulk"],
  },
  {
    slug: "pet-supplies",
    name: "Pet Supplies & Food",
    description: "Pet food, leashes, toys, grooming items & pet accessories",
    keywords: ["wholesale pet supplies India", "bulk pet food", "pet accessories wholesale", "dog toys bulk"],
  },
  {
    slug: "handicrafts-decor",
    name: "Handicrafts & Home Decor",
    description: "Artisanal crafts, wall art, brass items & decorative lamps",
    keywords: ["wholesale handicrafts India", "bulk home decor", "brass items wholesale", "decorative lamps bulk"],
  },
  {
    slug: "safety-industrial",
    name: "Safety & Industrial PPE",
    description: "Safety helmets, boots, gloves, high-vis vests & PPE gear",
    keywords: ["wholesale safety gear India", "industrial PPE bulk", "safety shoes wholesale", "protective gloves bulk"],
  },
  {
    slug: "watches-clocks",
    name: "Watches & Clocks",
    description: "Wristwatches, wall clocks, smartwatches & replacement straps",
    keywords: ["wholesale watches India", "bulk wall clocks", "smartwatch wholesale market", "watch straps bulk"],
  },
  {
    slug: "gardening-agri",
    name: "Gardening & Agriculture",
    description: "Planters, seeds, garden tools, fertilizers & sprayers",
    keywords: ["wholesale gardening tools India", "bulk planters suppliers", "agriculture tools wholesale", "fertilizer sprayers bulk"],
  },
  {
    slug: "gifts-novelties",
    name: "Gifts & Novelties",
    description: "Corporate gifts, customized items, keychains & festival favors",
    keywords: ["wholesale corporate gifts India", "bulk gift novelties", "promotional items wholesale", "festival favors bulk"],
  },
  {
    slug: "bath-sanitaryware",
    name: "Bath & Sanitaryware",
    description: "Bathroom fittings, faucets, showers & ceramic sanitary items",
    keywords: ["wholesale sanitaryware India", "bulk bath fittings", "faucets wholesale market", "bathroom accessories bulk"],
  },
  {
    slug: "footwear-materials",
    name: "Footwear Raw Materials",
    description: "Shoe soles, leather sheets, adhesives & upper materials",
    keywords: ["footwear raw materials wholesale", "bulk shoe soles India", "leather sheet suppliers", "shoe adhesive bulk"],
  },
  {
    slug: "baking-confectionery",
    name: "Baking & Confectionery",
    description: "Cake moulds, baking tools, chocolates & packaging supplies",
    keywords: ["wholesale baking supplies India", "bulk cake moulds", "confectionery packaging wholesale", "chocolate supplies bulk"],
  },
  {
    slug: "hotel-restaurant",
    name: "Hotel & Restaurant Supplies",
    description: "Commercial tableware, catering equipment & chef uniforms",
    keywords: ["wholesale restaurant supplies India", "bulk catering equipment", "hotel tableware wholesale", "chef uniforms bulk"],
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
  { slug: "agra", name: "Agra", state: "Uttar Pradesh" },
  { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh" },
  { slug: "meerut", name: "Meerut", state: "Uttar Pradesh" },
  { slug: "ghaziabad", name: "Ghaziabad", state: "Uttar Pradesh" },
  { slug: "noida", name: "Noida", state: "Uttar Pradesh" },
  { slug: "amritsar", name: "Amritsar", state: "Punjab" },
  { slug: "jalandhar", name: "Jalandhar", state: "Punjab" },
  { slug: "gurgaon", name: "Gurgaon", state: "Haryana" },
  { slug: "faridabad", name: "Faridabad", state: "Haryana" },
  { slug: "jodhpur", name: "Jodhpur", state: "Rajasthan" },
  { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
  { slug: "kota", name: "Kota", state: "Rajasthan" },
  { slug: "vadodara", name: "Vadodara", state: "Gujarat" },
  { slug: "jamnagar", name: "Jamnagar", state: "Gujarat" },
  { slug: "thane", name: "Thane", state: "Maharashtra" },
  { slug: "nashik", name: "Nashik", state: "Maharashtra" },
  { slug: "aurangabad", name: "Aurangabad", state: "Maharashtra" },
  { slug: "solapur", name: "Solapur", state: "Maharashtra" },
  { slug: "visakhapatnam", name: "Visakhapatnam", state: "Andhra Pradesh" },
  { slug: "vijayawada", name: "Vijayawada", state: "Andhra Pradesh" },
  { slug: "madurai", name: "Madurai", state: "Tamil Nadu" },
  { slug: "tiruchirappalli", name: "Tiruchirappalli", state: "Tamil Nadu" },
  { slug: "kochi", name: "Kochi", state: "Kerala" },
  { slug: "thiruvananthapuram", name: "Thiruvananthapuram", state: "Kerala" },
  { slug: "mysore", name: "Mysore", state: "Karnataka" },
  { slug: "raipur", name: "Raipur", state: "Chhattisgarh" },
  { slug: "ranchi", name: "Ranchi", state: "Jharkhand" },
  { slug: "bhubaneswar", name: "Bhubaneswar", state: "Odisha" },
  { slug: "guwahati", name: "Guwahati", state: "Assam" },
  { slug: "dehradun", name: "Dehradun", state: "Uttarakhand" },
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
  agra:      { searchVolume: 1200, strength: "Medium", targetKeyword: "wholesale products Agra", description: "Agra's Kinari Bazaar and Sadar Bazaar are bustling wholesale hubs for leather goods, footwear, handicrafts, and marble products. Source wholesale products in Agra at factory prices through Lotwaala." },
  varanasi:  { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale products Varanasi", description: "Varanasi is the wholesale capital for Banarasi silk sarees, brassware, and religious goods. Vishweshwarganj and Chowk markets supply wholesale products to retailers across North India." },
  meerut:    { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale market Meerut", description: "Meerut is India's sports goods wholesale capital, also a major hub for scissors, musical instruments, and publishing. Find verified wholesale products suppliers in Meerut on Lotwaala." },
  ghaziabad: { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale products Ghaziabad", description: "Ghaziabad's industrial zones and Turab Nagar market are key wholesale distribution hubs for NCR. Source wholesale electronics, FMCG, and home appliances in Ghaziabad." },
  noida:     { searchVolume: 1200, strength: "Medium", targetKeyword: "wholesale Noida", description: "Noida's Atta Market and Sector 18 are growing wholesale hubs serving Delhi-NCR with electronics, garments, and FMCG. Buy wholesale products online in Noida via Lotwaala." },
  amritsar:  { searchVolume: 1300, strength: "Medium", targetKeyword: "wholesale market Amritsar", description: "Amritsar's Hall Bazaar and Katra Ahluwalia supply wholesale textiles, dry fruits, papad-warian, and Punjabi jutti to retailers across Punjab and the border belt." },
  jalandhar: { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale Jalandhar", description: "Jalandhar is renowned for wholesale sports goods, hand tools, and leather products. The city's Rainak Bazaar and Model Town markets serve retailers across India and globally." },
  gurgaon:   { searchVolume: 1400, strength: "Medium/High", targetKeyword: "wholesale products Gurgaon", description: "Gurgaon's Sadar Bazaar and Sector 14 markets serve corporate India with wholesale electronics, stationery, FMCG, and gifting products. A high-value wholesale hub for NCR." },
  faridabad: { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale Faridabad", description: "Faridabad's industrial belt and NIT markets supply wholesale auto parts, machinery, garments, and FMCG to Haryana and Delhi-NCR retailers." },
  jodhpur:   { searchVolume: 1100, strength: "Medium", targetKeyword: "handicraft wholesale Jodhpur", description: "Jodhpur is a global wholesale hub for handicrafts, wooden furniture, textiles, and antiques. Sojati Gate, Tripolia Bazaar, and Nai Sarak supply wholesale products worldwide." },
  udaipur:   { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale Udaipur", description: "Udaipur's Bada Bazaar and Hathi Pol markets are famous for wholesale handicrafts, miniature paintings, silver jewellery, and textiles serving Rajasthan and tourist exports." },
  kota:      { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Kota", description: "Kota's wholesale market deals in Kota Doria sarees, stationery for the coaching industry, and stone products. A growing wholesale products hub for Hadoti region." },
  vadodara:  { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale Vadodara", description: "Vadodara's Mandvi and Raopura markets are major wholesale centers for chemicals, textiles, FMCG, and machinery in central Gujarat." },
  jamnagar:  { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Jamnagar", description: "Jamnagar is the world's brass parts capital and a key wholesale hub for bandhani textiles, oil seeds, and metal products serving global markets." },
  thane:     { searchVolume: 1200, strength: "Medium", targetKeyword: "wholesale products Thane", description: "Thane's Gokhale Road and Naupada markets are growing wholesale hubs for FMCG, textiles, and electronics, serving the Mumbai Metropolitan Region." },
  nashik:    { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale market Nashik", description: "Nashik's Main Road and Sarafa Bazaar are key wholesale hubs for grapes, wine, textiles, and FMCG. The city supplies wholesale products across northern Maharashtra." },
  aurangabad: { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale Aurangabad", description: "Aurangabad's Gulmandi and Paithan Gate markets are wholesale hubs for Paithani sarees, textiles, auto parts, and FMCG products in Marathwada region." },
  solapur:   { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale textiles Solapur", description: "Solapur is famous for wholesale towels (chaddars), bedsheets, and powerlooms textiles. The city supplies wholesale textile products to retailers across India." },
  visakhapatnam: { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale Visakhapatnam", description: "Visakhapatnam's Jagadamba Centre and One Town markets are major wholesale hubs for seafood, FMCG, electronics, and steel products in Andhra Pradesh." },
  vijayawada: { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale Vijayawada", description: "Vijayawada's Besant Road and Governorpet markets are key wholesale distribution centers for textiles, FMCG, and electronics, serving the Krishna delta region." },
  madurai:   { searchVolume: 1000, strength: "Medium", targetKeyword: "wholesale market Madurai", description: "Madurai's South Avani Moola Street and Puthu Mandapam are iconic wholesale hubs for textiles, Sungudi sarees, and temple jewellery in southern Tamil Nadu." },
  tiruchirappalli: { searchVolume: 700, strength: "Medium", targetKeyword: "wholesale Trichy", description: "Tiruchirappalli's Big Bazaar and Chinnakadai Street are bustling wholesale hubs for artificial diamonds, textiles, and FMCG in central Tamil Nadu." },
  kochi:     { searchVolume: 1200, strength: "Medium", targetKeyword: "wholesale products Kochi", description: "Kochi's Broadway and Jew Town markets are India's spice wholesale capital. Also a major hub for seafood, rubber, and ayurveda products serving global trade." },
  thiruvananthapuram: { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Thiruvananthapuram", description: "Thiruvananthapuram's Chalai Market is one of Kerala's largest wholesale hubs, dealing in FMCG, textiles, spices, and household goods at competitive bulk prices." },
  mysore:    { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale Mysore", description: "Mysore's Devaraja Market and Sayyaji Rao Road are wholesale centers for silk sarees, sandalwood, agarbatti, and traditional handicrafts of Karnataka." },
  raipur:    { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale market Raipur", description: "Raipur's Sadar Bazaar and Pandri markets are major wholesale hubs for steel, rice, electronics, and FMCG products distributed across central India." },
  ranchi:    { searchVolume: 800, strength: "Medium", targetKeyword: "wholesale Ranchi", description: "Ranchi's Upper Bazaar and Main Road are key wholesale distribution hubs for FMCG, textiles, electronics, and tribal handicrafts in Jharkhand." },
  bhubaneswar: { searchVolume: 900, strength: "Medium", targetKeyword: "wholesale Bhubaneswar", description: "Bhubaneswar's Unit-1 Market and Saheed Nagar are growing wholesale hubs for FMCG, textiles, sarees, and electronics serving Odisha's retail sector." },
  guwahati:  { searchVolume: 1100, strength: "Medium", targetKeyword: "wholesale products Guwahati", description: "Guwahati's Fancy Bazaar and Paltan Bazaar are the largest wholesale markets of Northeast India — hubs for tea, FMCG, textiles, and electronics serving all seven sister states." },
  dehradun:  { searchVolume: 700, strength: "Medium", targetKeyword: "wholesale Dehradun", description: "Dehradun's Paltan Bazaar and Rajpur Road markets are wholesale hubs for FMCG, basmati rice, herbal products, and textiles serving Uttarakhand and the hills." },
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

export function generateCityFAQs(cityName: string, state: string) {
  return [
    {
      question: `Where is the best wholesale market in ${cityName}?`,
      answer: `Lotwaala helps buyers explore the wholesale market in ${cityName}, ${state} online. Instead of visiting multiple physical markets, you can browse verified wholesale products suppliers, compare categories, and connect with bulk dealers through the free Lotwaala app.`,
    },
    {
      question: `How to find wholesalers in ${cityName}?`,
      answer: `Lotwaala is the easiest way to find verified wholesalers in ${cityName}, ${state}. Download the free app to browse wholesale products suppliers across 34+ categories including electronics, clothing, textiles, FMCG, and more - all in ${cityName}.`,
    },
    {
      question: `What wholesale categories are available in ${cityName} on Lotwaala?`,
      answer: `Lotwaala offers wholesale listings in ${cityName} across all major categories: Electronics, Clothing & Apparel, Footwear, Home Appliances, Toys & Games, Cosmetics & Beauty, Stationery, FMCG & Grocery, Furniture, Auto Parts, Textiles & Fabrics, Jewellery & Accessories, Bags & Luggage, Mobile Accessories, Hardware & Tools, Kitchenware, Packaging, Sports & Fitness, Electricals, Baby Care, Medical Supplies, Cleaning, Leather Goods, Eyewear, Pet Supplies, Handicrafts, Safety Gear, Watches, Gardening, Gifts, Bathware, Footwear Materials, Baking, and Hotel Supplies.`,
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
      question: `Where can I find wholesale ${categoryName.toLowerCase()} products suppliers in India?`,
      answer: `Lotwaala serves all of India and connects you with verified wholesale ${categoryName.toLowerCase()} products suppliers in 120+ cities in India including Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Jaipur, Surat, Lucknow, Indore, Agra, Varanasi, Kochi, Guwahati, Visakhapatnam and many more - with in-app delivery support through our Big-Ship tie-up and other major delivery partners. Download the free app to browse 1,00,000+ wholesale products with real-time inventory.`,
    },
    {
      question: `How to buy wholesale ${categoryName.toLowerCase()} products online in India?`,
      answer: `With the Lotwaala app, buying wholesale ${categoryName.toLowerCase()} products in bulk is simple. Search by city or browse all listings, compare prices from multiple wholesalers, negotiate via in-app chat, and pay securely with delivery support through Big-Ship and other major delivery partners across India.`,
    },
    {
      question: `What are the best cities for wholesale ${categoryName.toLowerCase()} products in India?`,
      answer: `The top cities for wholesale ${categoryName.toLowerCase()} products on Lotwaala include Delhi, Mumbai, Bangalore, Surat, Ahmedabad, and Chennai. Each city has verified local wholesalers offering competitive bulk pricing for ${categoryName.toLowerCase()}.`,
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
'''

target_file = r"c:\Users\Mighty\Downloads\Lotwaala Website\lotwaala-web\lib\constants.ts"
with open(target_file, "w", encoding="utf-8") as f:
    f.write(constants_content)

print("Successfully updated lib/constants.ts")
