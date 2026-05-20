import {
  ShieldCheck,
  RefreshCw,
  Lock,
  Truck,
  MessageSquare,
  BarChart3,
} from "lucide-react";
import { APP_FEATURES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  verified: <ShieldCheck className="h-6 w-6" />,
  realtime: <RefreshCw className="h-6 w-6" />,
  secure: <Lock className="h-6 w-6" />,
  logistics: <Truck className="h-6 w-6" />,
  negotiation: <MessageSquare className="h-6 w-6" />,
  analytics: <BarChart3 className="h-6 w-6" />,
};

const ICON_COLORS: Record<string, { gradient: string; glow: string }> = {
  verified:    { gradient: "from-[#10b981] to-[#34d399]", glow: "rgba(16, 185, 129, 0.15)" },
  realtime:    { gradient: "from-[#6366f1] to-[#818cf8]", glow: "rgba(99, 102, 241, 0.15)" },
  secure:      { gradient: "from-[#f59e0b] to-[#fbbf24]", glow: "rgba(245, 158, 11, 0.15)" },
  logistics:   { gradient: "from-[#8b5cf6] to-[#a78bfa]", glow: "rgba(139, 92, 246, 0.15)" },
  negotiation: { gradient: "from-[#ec4899] to-[#f472b6]", glow: "rgba(236, 72, 153, 0.15)" },
  analytics:   { gradient: "from-[#06b6d4] to-[#22d3ee]", glow: "rgba(6, 182, 212, 0.15)" },
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-white relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/15 bg-[#6366f1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
            Why Lotwaala
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            Everything a Wholesaler Needs,{" "}
            <span className="gradient-text-primary">in One App</span>
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Built for India&apos;s wholesale marketplace — from verified sellers
            to doorstep logistics.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APP_FEATURES.map((feature, i) => {
            const colors = ICON_COLORS[feature.id];
            return (
              <div
                key={feature.id}
                className={`group relative rounded-2xl bg-white p-7 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up delay-${i * 100}`}
                style={{
                  border: '1px solid rgba(0,0,0,0.04)',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
                }}
              >
                {/* Hover glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `0 8px 40px ${colors.glow}, 0 0 0 1px rgba(99,102,241,0.08)` }}
                />

                <div className="relative">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${colors.gradient} text-white shadow-md transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                  >
                    {ICON_MAP[feature.id]}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#0f172a]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#64748b]">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
