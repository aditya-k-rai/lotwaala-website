import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
} from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  electronics:      <Cpu className="h-6 w-6" />,
  clothing:         <Shirt className="h-6 w-6" />,
  footwear:         <Footprints className="h-6 w-6" />,
  "home-appliances": <Home className="h-6 w-6" />,
  toys:             <Gamepad2 className="h-6 w-6" />,
  cosmetics:        <Sparkles className="h-6 w-6" />,
  stationery:       <BookOpen className="h-6 w-6" />,
  fmcg:             <ShoppingBasket className="h-6 w-6" />,
  furniture:        <Armchair className="h-6 w-6" />,
  "auto-parts":     <Car className="h-6 w-6" />,
  textiles:         <ShieldCheck className="h-6 w-6" />,
  jewellery:        <Gem className="h-6 w-6" />,
};

const CATEGORY_GRADIENTS: Record<string, string> = {
  electronics:      "from-[#6366f1] to-[#818cf8]",
  clothing:         "from-[#ec4899] to-[#f472b6]",
  footwear:         "from-[#f59e0b] to-[#fbbf24]",
  "home-appliances": "from-[#8b5cf6] to-[#a78bfa]",
  toys:             "from-[#10b981] to-[#34d399]",
  cosmetics:        "from-[#f43f5e] to-[#fb7185]",
  stationery:       "from-[#06b6d4] to-[#22d3ee]",
  fmcg:             "from-[#eab308] to-[#facc15]",
  furniture:        "from-[#7c3aed] to-[#a78bfa]",
  "auto-parts":     "from-[#64748b] to-[#94a3b8]",
  textiles:         "from-[#059669] to-[#34d399]",
  jewellery:        "from-[#ea580c] to-[#fb923c]",
};

export default function CategoryBrowser() {
  return (
    <section id="categories" className="py-24 bg-[#fafbff] relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/15 bg-[#6366f1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
            Browse Categories
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            Wholesale Products Across{" "}
            <span className="gradient-text-primary">12 Categories</span>
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            From electronics to textiles — find bulk suppliers for every product
            category on Lotwaala.
          </p>
        </div>

        {/* Category Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CATEGORIES.map((cat, i) => {
            const gradient = CATEGORY_GRADIENTS[cat.slug] ?? "from-[#64748b] to-[#94a3b8]";
            return (
              <Link
                key={cat.slug}
                href={`/market/category/${cat.slug}`}
                className={`group relative rounded-2xl bg-white p-6 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-${Math.min(i * 100, 800)}`}
                style={{
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: '0 8px 40px rgba(99,102,241,0.1), 0 0 0 1px rgba(99,102,241,0.08)' }} />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {CATEGORY_ICONS[cat.slug] ?? <ShieldCheck className="h-6 w-6" />}
                  </div>

                  {/* Content */}
                  <h3 className="mt-4 text-base font-bold text-[#0f172a]">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#64748b] leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#6366f1] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                    <span>Browse wholesale</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
