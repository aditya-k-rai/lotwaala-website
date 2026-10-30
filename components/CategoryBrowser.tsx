import { ArrowRight } from "lucide-react";
import TrackedLink from "./TrackedLink";
import {
  ShieldCheck,
  Cpu,
  Shirt,
  Footprints,
  Home,
  Gamepad2,
  Sparkles,
  BookOpen,
  ShoppingBasket,
  Armchair,
  Car,
  Gem,
  Luggage,
  Smartphone,
  Wrench,
  UtensilsCrossed,
  Boxes,
  Dumbbell,
  Lightbulb,
  Baby,
  Stethoscope,
  Droplets,
  Wallet,
  Glasses,
  Dog,
  Palette,
  HardHat,
  Watch,
  Sprout,
  Gift,
  Bath,
  Layers,
  Cake,
  ConciergeBell,
  Briefcase,
  Flame,
  Scissors,
  Bed,
  Moon,
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  electronics:              <Cpu className="h-6 w-6" />,
  clothing:                 <Shirt className="h-6 w-6" />,
  footwear:                 <Footprints className="h-6 w-6" />,
  "home-appliances":         <Home className="h-6 w-6" />,
  toys:                     <Gamepad2 className="h-6 w-6" />,
  cosmetics:                <Sparkles className="h-6 w-6" />,
  stationery:               <BookOpen className="h-6 w-6" />,
  fmcg:                     <ShoppingBasket className="h-6 w-6" />,
  furniture:                <Armchair className="h-6 w-6" />,
  "auto-parts":             <Car className="h-6 w-6" />,
  textiles:                 <Scissors className="h-6 w-6" />,
  jewellery:                <Gem className="h-6 w-6" />,
  "bags-luggage":           <Luggage className="h-6 w-6" />,
  "mobile-accessories":     <Smartphone className="h-6 w-6" />,
  "hardware-tools":         <Wrench className="h-6 w-6" />,
  "kitchenware-utensils":    <UtensilsCrossed className="h-6 w-6" />,
  "packaging-materials":    <Boxes className="h-6 w-6" />,
  "sports-fitness":         <Dumbbell className="h-6 w-6" />,
  "electricals-lighting":   <Lightbulb className="h-6 w-6" />,
  "baby-kids-care":         <Baby className="h-6 w-6" />,
  "medical-supplies":       <Stethoscope className="h-6 w-6" />,
  "cleaning-sanitation":    <Droplets className="h-6 w-6" />,
  "leather-goods":          <Wallet className="h-6 w-6" />,
  "eyewear-sunglasses":     <Glasses className="h-6 w-6" />,
  "pet-supplies":           <Dog className="h-6 w-6" />,
  "handicrafts-decor":      <Palette className="h-6 w-6" />,
  "safety-industrial":      <HardHat className="h-6 w-6" />,
  "watches-clocks":         <Watch className="h-6 w-6" />,
  "gardening-agri":         <Sprout className="h-6 w-6" />,
  "gifts-novelties":        <Gift className="h-6 w-6" />,
  "bath-sanitaryware":      <Bath className="h-6 w-6" />,
  "footwear-materials":     <Layers className="h-6 w-6" />,
  "baking-confectionery":   <Cake className="h-6 w-6" />,
  "hotel-restaurant":       <ConciergeBell className="h-6 w-6" />,
  "tshirts-polos":          <Shirt className="h-6 w-6" />,
  "formal-casual-shirts":   <Briefcase className="h-6 w-6" />,
  "jeans-denim":            <Layers className="h-6 w-6" />,
  menswear:                 <Shirt className="h-6 w-6" />,
  "womenswear-sarees":      <Sparkles className="h-6 w-6" />,
  "ethnic-kurti":           <Sparkles className="h-6 w-6" />,
  "kidswear-babywear":      <Baby className="h-6 w-6" />,
  "innerwear-undergarments": <ShieldCheck className="h-6 w-6" />,
  "sportswear-activewear":  <Flame className="h-6 w-6" />,
  "uniforms-workwear":      <Briefcase className="h-6 w-6" />,
  "surat-raw-fabrics":      <Layers className="h-6 w-6" />,
  "home-textiles-bedding":  <Bed className="h-6 w-6" />,
  "lowers-trackpants":      <Footprints className="h-6 w-6" />,
  "oversized-tshirts":      <Shirt className="h-6 w-6" />,
  "hoodies-sweatshirts":    <Flame className="h-6 w-6" />,
  "shorts-cargos":          <Layers className="h-6 w-6" />,
  "nightwear-loungewear":   <Moon className="h-6 w-6" />,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  electronics:              "from-[#6366f1] to-[#818cf8]",
  clothing:                 "from-[#ec4899] to-[#f472b6]",
  footwear:                 "from-[#f59e0b] to-[#fbbf24]",
  "home-appliances":         "from-[#8b5cf6] to-[#a78bfa]",
  toys:                     "from-[#10b981] to-[#34d399]",
  cosmetics:                "from-[#f43f5e] to-[#fb7185]",
  stationery:               "from-[#06b6d4] to-[#22d3ee]",
  fmcg:                     "from-[#eab308] to-[#facc15]",
  furniture:                "from-[#7c3aed] to-[#a78bfa]",
  "auto-parts":             "from-[#0284c7] to-[#38bdf8]",
  textiles:                 "from-[#059669] to-[#34d399]",
  jewellery:                "from-[#ea580c] to-[#fb923c]",
  "bags-luggage":           "from-[#6366f1] to-[#a855f7]",
  "mobile-accessories":     "from-[#0ea5e9] to-[#38bdf8]",
  "hardware-tools":         "from-[#f97316] to-[#fb923c]",
  "kitchenware-utensils":    "from-[#e11d48] to-[#fb7185]",
  "packaging-materials":    "from-[#d97706] to-[#f59e0b]",
  "sports-fitness":         "from-[#16a34a] to-[#4ade80]",
  "electricals-lighting":   "from-[#eab308] to-[#fde047]",
  "baby-kids-care":         "from-[#ec4899] to-[#f472b6]",
  "medical-supplies":       "from-[#dc2626] to-[#f87171]",
  "cleaning-sanitation":    "from-[#0891b2] to-[#22d3ee]",
  "leather-goods":          "from-[#92400e] to-[#d97706]",
  "eyewear-sunglasses":     "from-[#4f46e5] to-[#818cf8]",
  "pet-supplies":           "from-[#f97316] to-[#fdba74]",
  "handicrafts-decor":      "from-[#a855f7] to-[#e879f9]",
  "safety-industrial":      "from-[#f59e0b] to-[#ea580c]",
  "watches-clocks":         "from-[#0f766e] to-[#14b8a6]",
  "gardening-agri":         "from-[#15803d] to-[#4ade80]",
  "gifts-novelties":        "from-[#db2777] to-[#f472b6]",
  "bath-sanitaryware":      "from-[#0284c7] to-[#06b6d4]",
  "footwear-materials":     "from-[#b45309] to-[#d97706]",
  "baking-confectionery":   "from-[#f43f5e] to-[#fda4af]",
  "hotel-restaurant":       "from-[#4338ca] to-[#6366f1]",
  "tshirts-polos":          "from-[#2563eb] to-[#60a5fa]",
  "formal-casual-shirts":   "from-[#0d9488] to-[#2dd4bf]",
  "jeans-denim":            "from-[#1d4ed8] to-[#3b82f6]",
  menswear:                 "from-[#1e3a8a] to-[#3b82f6]",
  "womenswear-sarees":      "from-[#be185d] to-[#f472b6]",
  "ethnic-kurti":           "from-[#d97706] to-[#fbbf24]",
  "kidswear-babywear":      "from-[#06b6d4] to-[#67e8f9]",
  "innerwear-undergarments": "from-[#e11d48] to-[#fb7185]",
  "sportswear-activewear":  "from-[#ea580c] to-[#f97316]",
  "uniforms-workwear":      "from-[#0369a1] to-[#38bdf8]",
  "surat-raw-fabrics":      "from-[#047857] to-[#34d399]",
  "home-textiles-bedding":  "from-[#7c3aed] to-[#c084fc]",
  "lowers-trackpants":      "from-[#4338ca] to-[#818cf8]",
  "oversized-tshirts":      "from-[#ec4899] to-[#c084fc]",
  "hoodies-sweatshirts":    "from-[#0891b2] to-[#38bdf8]",
  "shorts-cargos":          "from-[#65a30d] to-[#a3e635]",
  "nightwear-loungewear":   "from-[#6366f1] to-[#a855f7]",
};

export default function CategoryBrowser() {
  return (
    <section id="categories" className="py-24 bg-[#fafbff] relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#4338ca]/25 bg-[#4338ca]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#4338ca]">
            Browse Categories
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            Wholesale Products Across{" "}
            <span className="whitespace-nowrap gradient-text-primary">
              All Categories
            </span>
          </h2>
          <p className="mt-4 text-lg text-[#334155]">
            From electronics to textiles, find wholesale products and bulk
            suppliers for every category on Lotwaala.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat, i) => {
            const gradient = CATEGORY_GRADIENTS[cat.slug] ?? "from-[#6366f1] to-[#818cf8]";
            return (
              <TrackedLink
                key={cat.slug}
                href={`/market/category/${cat.slug}`}
                eventName="category_click"
                eventParams={{ category_slug: cat.slug, source: "home_grid" }}
                className={`group relative rounded-2xl bg-white p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2 active:scale-[0.98] cursor-pointer animate-fade-in-up delay-${Math.min(i * 100, 800)}`}
                style={{
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 8px 40px rgba(99,102,241,0.12), 0 0 0 1px rgba(99,102,241,0.1)' }} />

                <div className="relative">
                  {/* Motion Icon with hover and click feedback */}
                  <div
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-md transition-all duration-300 group-hover:scale-115 group-hover:-rotate-3 group-hover:shadow-xl active:scale-90 active:rotate-0`}
                  >
                    <div className="transition-transform duration-300 group-hover:scale-110">
                      {CATEGORY_ICONS[cat.slug] ?? <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mt-3.5 sm:mt-4 text-base font-bold text-[#0f172a]">
                    Wholesale {cat.name} Products
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#334155] leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Link — visible on mobile, hover-animated on desktop */}
                  <div className="mt-3 sm:mt-4 flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#4338ca] opacity-100 sm:opacity-0 transition-all duration-300 sm:group-hover:opacity-100 sm:group-hover:translate-x-1">
                    <span>Browse wholesale products</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </TrackedLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
