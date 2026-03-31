import { Download, Search, Handshake } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/lib/constants";

const STEP_ICONS = [
  <Download key="dl" className="h-7 w-7" />,
  <Search key="sr" className="h-7 w-7" />,
  <Handshake key="hs" className="h-7 w-7" />,
];

const STEP_COLORS = [
  { gradient: "from-[#6366f1] to-[#818cf8]", ring: "border-[#6366f1]/20", bg: "bg-[#6366f1]/5", badge: "from-[#6366f1] to-[#818cf8]" },
  { gradient: "from-[#8b5cf6] to-[#a78bfa]", ring: "border-[#8b5cf6]/20", bg: "bg-[#8b5cf6]/5", badge: "from-[#8b5cf6] to-[#a78bfa]" },
  { gradient: "from-[#10b981] to-[#34d399]", ring: "border-[#10b981]/20", bg: "bg-[#10b981]/5", badge: "from-[#10b981] to-[#34d399]" },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#fafbff] relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/15 bg-[#6366f1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
            Get Started
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
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
                {/* Connector line */}
                {i < HOW_IT_WORKS_STEPS.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-px w-full translate-x-1/2 md:block">
                    <div className="h-full w-full border-t-2 border-dashed border-[#6366f1]/15" />
                  </div>
                )}

                {/* Icon circle */}
                <div
                  className={`relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 ${colors.ring} ${colors.bg} transition-all duration-500 hover:scale-110 group`}
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${colors.gradient} text-white shadow-md transition-all duration-500 group-hover:shadow-lg`}>
                    {STEP_ICONS[i]}
                  </div>
                  {/* Step number badge */}
                  <span
                    className={`absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${colors.badge} text-sm font-bold text-white shadow-md ring-4 ring-[#fafbff]`}
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
