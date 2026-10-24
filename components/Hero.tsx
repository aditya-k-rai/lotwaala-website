import { Star, Sparkles } from "lucide-react";
import { STATS } from "@/lib/constants";
import PhoneMockup from "./PhoneMockup";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* ── Animated background elements ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hero-bg-container">
        {/* Gradient orbs — optimized for mobile GPU rasterization */}
        <div className="absolute -top-40 -right-40 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-[#ff007f]/[0.15] blur-[50px] sm:blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-[#7928ca]/[0.18] blur-[50px] sm:blur-[100px] animate-blob delay-400 mix-blend-screen" />
        <div className="absolute top-1/4 left-1/3 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-[#00f0ff]/[0.15] blur-[50px] sm:blur-[100px] animate-blob delay-700 mix-blend-screen" />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30 mix-blend-overlay" />

        {/* Floating neon mini-orbs */}
        <div className="absolute top-24 left-[15%] h-2 w-2 rounded-full bg-[#ff007f] animate-float opacity-80 shadow-[0_0_15px_#ff007f]" />
        <div className="absolute top-48 right-[20%] h-3 w-3 rounded-full bg-[#7928ca] animate-float delay-200 opacity-70 shadow-[0_0_20px_#7928ca]" />
        <div className="absolute bottom-40 left-[30%] h-2.5 w-2.5 rounded-full bg-[#00f0ff] animate-float delay-500 opacity-80 shadow-[0_0_15px_#00f0ff]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: Copy ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/10 px-4 py-2 text-sm font-semibold text-[#a5b4fc] shadow-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24] animate-bounce-subtle" />
              <span>Rated 4.8 on Play Store</span>
              <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
            </div>

            {/* Headline — instantaneous LCP paint */}
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Buy{" "}
              <span className="gradient-text-light">Wholesale Products Online</span>{" "}
              in India
              <br />
              From 120+ Cities in India — Free App
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70 sm:text-xl lg:max-w-lg">
              India&apos;s #1 <strong className="text-white">wholesale products marketplace app</strong>. Connect with verified wholesalers in <strong className="text-white">Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, Surat, Jaipur</strong> and 110+ more cities in India. Browse <strong className="text-white">100,000+ bulk inventory items</strong>, negotiate wholesale prices, and close deals — all from your phone. Delivery is supported in-app through our Big-Ship tie-up and other major delivery partners for transportation across India.
            </p>

            {/* Download buttons — client component for onClick tracking */}
            <HeroButtons />

            {/* Trust line */}
            <p className="mt-6 text-sm text-white/50">
              Free download &middot; No credit card required &middot; 50K+
              businesses trust Lotwaala
            </p>
          </div>

          {/* ── Right column: Phone Mockup — immediate paint ── */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>

        {/* ── Stats bar — glass card ── */}
        <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl glass-card-dark p-6 sm:grid-cols-4 sm:p-8 animate-fade-in-up delay-500">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center animate-scale-in delay-${(i + 5) * 100}`}>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
