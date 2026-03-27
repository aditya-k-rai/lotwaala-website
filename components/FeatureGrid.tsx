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

const ICON_COLORS: Record<string, { bg: string; text: string; hoverBg: string }> = {
  verified:    { bg: "bg-[#dcfce7]", text: "text-[#16a34a]", hoverBg: "group-hover:bg-[#16a34a]" },
  realtime:    { bg: "bg-[#dbeafe]", text: "text-[#2563eb]", hoverBg: "group-hover:bg-[#2563eb]" },
  secure:      { bg: "bg-[#fef3c7]", text: "text-[#d97706]", hoverBg: "group-hover:bg-[#d97706]" },
  logistics:   { bg: "bg-[#ede9fe]", text: "text-[#7c3aed]", hoverBg: "group-hover:bg-[#7c3aed]" },
  negotiation: { bg: "bg-[#fce7f3]", text: "text-[#db2777]", hoverBg: "group-hover:bg-[#db2777]" },
  analytics:   { bg: "bg-[#cffafe]", text: "text-[#0891b2]", hoverBg: "group-hover:bg-[#0891b2]" },
};

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563eb]">
            Why Lotwaala
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
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
                className={`group rounded-2xl border border-[#e2e8f0] bg-white p-7 transition-all duration-300 hover:border-[#2563eb]/20 hover:shadow-xl hover:-translate-y-1.5 animate-fade-in-up delay-${i * 100}`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} ${colors.hoverBg} group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
