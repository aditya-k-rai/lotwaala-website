import { Download, Search, Handshake } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const STEP_ICONS = [
  <Download key="dl" className="h-7 w-7" />,
  <Search key="sr" className="h-7 w-7" />,
  <Handshake key="hs" className="h-7 w-7" />,
];

const STEP_COLORS = [
  { ring: "border-[#2563eb]/20", bg: "bg-[#eff6ff]", text: "text-[#2563eb]", badge: "from-[#2563eb] to-[#3b82f6]" },
  { ring: "border-[#7c3aed]/20", bg: "bg-[#f5f3ff]", text: "text-[#7c3aed]", badge: "from-[#7c3aed] to-[#8b5cf6]" },
  { ring: "border-[#059669]/20", bg: "bg-[#ecfdf5]", text: "text-[#059669]", badge: "from-[#059669] to-[#10b981]" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#f8fafc]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563eb]">
            Get Started
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            Three Steps to Your First{" "}
            <span className="gradient-text-primary">Wholesale Deal</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const colors = STEP_COLORS[i];
            return (
              <div
                key={step.step}
                className={`relative text-center animate-fade-in-up delay-${(i + 1) * 200}`}
              >
                {/* Connector line — dashed, between cards */}
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 md:block">
                    <div className="h-full w-full border-t-2 border-dashed border-[#e2e8f0]" />
                  </div>
                )}

                {/* Icon circle */}
                <div
                  className={`relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 ${colors.ring} ${colors.bg} ${colors.text} transition-all duration-500 hover:scale-110 hover:shadow-lg`}
                >
                  {STEP_ICONS[i]}
                  {/* Step number badge */}
                  <span
                    className={`absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${colors.badge} text-sm font-bold text-white shadow-md`}
                  >
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0f172a]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
