import Image from "next/image";

const SCREENSHOTS = [
  {
    src: "/screenshots/splash.png",
    alt: "Lotwaala App Setup — Getting started with your wholesale account",
    label: "Quick Setup",
    description: "Create your account and start browsing in under 60 seconds",
  },
  {
    src: "/screenshots/explore.png",
    alt: "Lotwaala Explore Products — Browse wholesale listings with live inventory",
    label: "Explore Products",
    description: "Browse thousands of wholesale listings with real-time availability",
  },
  {
    src: "/screenshots/dashboard.png",
    alt: "Lotwaala Dashboard — Track orders, revenue, and stock at a glance",
    label: "Seller Dashboard",
    description: "Track orders, revenue, and stock levels all in one place",
  },
  {
    src: "/screenshots/orders.png",
    alt: "Lotwaala Orders — Manage wholesale orders and track delivery status",
    label: "Order Management",
    description: "Manage orders from placement to delivery with real-time updates",
  },
];

export default function AppShowcase() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/15 bg-[#6366f1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
            App Preview
          </div>
          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-[#0f172a] sm:text-4xl">
            See the App{" "}
            <span className="gradient-text-primary">in Action</span>
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Everything you need to run your wholesale business — from browsing
            products to managing orders.
          </p>
        </div>

        {/* Screenshots in phone frames */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {SCREENSHOTS.map((screenshot, i) => (
            <div
              key={screenshot.label}
              className={`group text-center animate-fade-in-up delay-${(i + 1) * 100}`}
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-full max-w-[200px] rounded-[32px] bg-gradient-to-b from-[#1e1e3f] to-[#0a0a1a] p-2 shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_30px_60px_-15px_rgba(99,102,241,0.3)]">
                {/* Dynamic island */}
                <div className="absolute left-1/2 top-2 z-10 h-[14px] w-[48px] -translate-x-1/2 rounded-full bg-black" />

                {/* Screen */}
                <div className="overflow-hidden rounded-[26px] bg-white">
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={200}
                    height={430}
                    className="h-auto w-full object-cover object-top"
                  />
                </div>

                {/* Glow ring on hover */}
                <div className="absolute -inset-1 rounded-[36px] bg-gradient-to-r from-[#6366f1]/20 via-[#a855f7]/20 to-[#06b6d4]/20 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100 -z-10" />
              </div>

              {/* Label + description */}
              <h3 className="mt-5 text-base font-bold text-[#0f172a]">
                {screenshot.label}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#64748b] px-2">
                {screenshot.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
