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

export const PRIMARY_KEYWORDS = [
  "Wholesaler App",
  "Wholesale Marketplace",
  "Bulk Inventory India",
  "Wholesale App India",
  "B2B Wholesale Platform",
  "Dead Stock App",
  "Wholesale Market App Download",
] as const;

// ─── Programmatic SEO Data ───────────────────────────────────────────────────

export const CATEGORIES = [
  { slug: "electronics", name: "Electronics", description: "Smartphones, laptops, accessories & gadgets" },
  { slug: "clothing", name: "Clothing & Apparel", description: "Men's, women's & kids' garments in bulk" },
  { slug: "footwear", name: "Footwear", description: "Shoes, sandals, sneakers & sports footwear" },
  { slug: "home-appliances", name: "Home Appliances", description: "Kitchen, cleaning & household appliances" },
  { slug: "toys", name: "Toys & Games", description: "Action figures, board games & educational toys" },
  { slug: "cosmetics", name: "Cosmetics & Beauty", description: "Skincare, haircare, makeup & fragrances" },
  { slug: "stationery", name: "Stationery & Office", description: "Notebooks, pens, printers & office supplies" },
  { slug: "fmcg", name: "FMCG & Grocery", description: "Packaged food, beverages & daily essentials" },
  { slug: "furniture", name: "Furniture", description: "Home & office furniture in bulk" },
  { slug: "auto-parts", name: "Auto Parts", description: "Car & bike parts, accessories & lubricants" },
  { slug: "textiles", name: "Textiles & Fabrics", description: "Raw fabrics, finished textiles & home linen" },
  { slug: "jewellery", name: "Jewellery & Accessories", description: "Imitation jewellery, watches & fashion accessories" },
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
