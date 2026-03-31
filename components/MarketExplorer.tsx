import Link from "next/link";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { CITIES, CITY_SEO_DATA } from "@/lib/constants";

const TOP_CITIES = CITIES.filter((c) => CITY_SEO_DATA[c.slug]?.searchVolume >= 1800).sort(
  (a, b) => (CITY_SEO_DATA[b.slug]?.searchVolume ?? 0) - (CITY_SEO_DATA[a.slug]?.searchVolume ?? 0)
);

const CITY_GRADIENTS = [
  "from-[#6366f1] to-[#8b5cf6]",
  "from-[#10b981] to-[#34d399]",
  "from-[#f59e0b] to-[#fbbf24]",
  "from-[#ef4444] to-[#f87171]",
  "from-[#8b5cf6] to-[#c084fc]",
  "from-[#06b6d4] to-[#22d3ee]",
  "from-[#ec4899] to-[#f472b6]",
  "from-[#6366f1] to-[#818cf8]",
  "from-[#10b981] to-[#6ee7b7]",
  "from-[#f59e0b] to-[#fde68a]",
];

export default function MarketExplorer() {
  return (
    <section id="markets" className="relative py-24 overflow-hidden gradient-dark-mesh text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#a5b4fc]">
            Explore Markets
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Wholesale Markets Across{" "}
            <span className="gradient-text-light">India</span>
          </h2>
          <p className="mt-4 text-lg text-white/50">
            Browse verified wholesalers in India&apos;s top wholesale hubs. Find
            bulk suppliers, compare prices, and close deals in your city.
          </p>
        </div>

        {/* City Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {TOP_CITIES.map((city, i) => {
            const seoData = CITY_SEO_DATA[city.slug];
            const gradient = CITY_GRADIENTS[i % CITY_GRADIENTS.length];
            return (
              <Link
                key={city.slug}
                href={`/market/${city.slug}`}
                className="group relative overflow-hidden rounded-2xl glass-card-dark p-5 transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_16px_48px_rgba(99,102,241,0.15)]"
              >
                {/* Gradient top bar on hover */}
                <div
                  className={`absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r ${gradient} opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:h-[3px]`}
                />

                {/* City info */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <MapPin className="h-3 w-3" />
                      <span>{city.state}</span>
                    </div>
                    <h3 className="mt-1.5 text-lg font-bold text-white group-hover:text-[#a5b4fc] transition-colors">
                      {city.name}
                    </h3>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/20 transition-all duration-300 group-hover:text-[#818cf8] group-hover:translate-x-1" />
                </div>

                {seoData && (
                  <div className="mt-3 flex items-center gap-1.5 text-xs font-medium text-[#34d399]">
                    <TrendingUp className="h-3 w-3" />
                    <span>{seoData.searchVolume.toLocaleString()}+ monthly searches</span>
                  </div>
                )}

                {seoData && (
                  <p className="mt-2 text-xs text-white/20 truncate">
                    &ldquo;{seoData.targetKeyword}&rdquo;
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm text-white/30">
            Covering <strong className="text-white/60">20+ cities</strong>{" "}
            across India with <strong className="text-white/60">10,000+ verified wholesalers</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
