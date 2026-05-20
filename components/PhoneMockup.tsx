import Image from "next/image";

const SCREENSHOTS = [
  {
    src: "/screenshots/explore.png",
    alt: "Lotwaala App — Explore wholesale products with live inventory",
  },
  {
    src: "/screenshots/dashboard.png",
    alt: "Lotwaala App — Seller dashboard with orders and revenue tracking",
  },
  {
    src: "/screenshots/orders.png",
    alt: "Lotwaala App — Order management and delivery tracking",
  },
  {
    src: "/screenshots/splash.png",
    alt: "Lotwaala App — Quick account setup in seconds",
  },
];

export default function PhoneMockup() {
  return (
    <div className="relative animate-float">
      {/* Multi-layer glow behind phone */}
      <div className="absolute -inset-16 rounded-full bg-[#6366f1]/12 blur-[100px] animate-blob" />
      <div className="absolute -inset-20 rounded-full bg-[#a855f7]/6 blur-[120px] animate-blob delay-400" />

      {/* Phone frame */}
      <div className="relative w-[280px] rounded-[48px] phone-frame p-[14px] sm:w-[300px]">
        {/* Side button details */}
        <div className="absolute -right-[2px] top-28 h-12 w-[3px] rounded-l bg-[#2a2a4a]" />
        <div className="absolute -right-[2px] top-44 h-12 w-[3px] rounded-l bg-[#2a2a4a]" />
        <div className="absolute -left-[2px] top-36 h-16 w-[3px] rounded-r bg-[#2a2a4a]" />

        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-[14px] z-20 h-[28px] w-[90px] -translate-x-1/2 rounded-full bg-black">
          {/* Camera dot */}
          <div className="absolute right-4 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full bg-[#1a1a2e] ring-1 ring-[#2a2a3e]">
            <div className="absolute left-1/2 top-1/2 h-[4px] w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e3a5f]" />
          </div>
        </div>

        {/* Screen with slideshow */}
        <div className="relative overflow-hidden rounded-[36px] bg-[#f0f0f0]" style={{ aspectRatio: "9/19.5" }}>
          {SCREENSHOTS.map((screenshot, i) => (
            <div
              key={screenshot.src}
              className={`absolute inset-0 phone-slide-${i + 1}`}
              style={{ opacity: 0 }}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                fill
                className="object-cover object-top"
                priority={i === 0}
                sizes="300px"
              />
            </div>
          ))}

          {/* Bottom gradient fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 bg-gradient-to-t from-black/10 to-transparent" />
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-[22px] left-1/2 z-20 flex -translate-x-1/2 gap-1.5">
          {SCREENSHOTS.map((_, i) => (
            <div
              key={i}
              className={`h-[6px] w-[6px] rounded-full bg-white dot-${i + 1}`}
              style={{ opacity: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Reflection / shine effect on frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[48px]">
        <div className="absolute left-3 top-0 h-full w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent" />
        <div className="absolute right-6 top-8 h-1/3 w-[1px] bg-gradient-to-b from-white/10 to-transparent" />
      </div>
    </div>
  );
}
