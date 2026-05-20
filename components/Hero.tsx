import Link from "next/link";
import { ArrowRight, Star, Sparkles, Zap } from "lucide-react";
import { PHONE_NUMBER, PLAY_STORE_URL, STATS } from "@/lib/constants";
import PhoneMockup from "./PhoneMockup";

const IOS_WHATSAPP_HREF = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
  "Hi! I'm interested in the Lotwaala iOS app. Please let me know when it's available."
)}`;

export default function Hero() {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[90vh] flex items-center">
      {/* ── Animated background elements ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-[#ff007f]/[0.15] blur-[100px] animate-blob mix-blend-screen" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#7928ca]/[0.18] blur-[100px] animate-blob delay-400 mix-blend-screen" />
        <div className="absolute top-1/4 left-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#00f0ff]/[0.15] blur-[100px] animate-blob delay-700 mix-blend-screen" />

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
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-[#6366f1]/20 bg-[#6366f1]/10 px-4 py-2 text-sm font-semibold text-[#a5b4fc] shadow-sm backdrop-blur-sm">
              <Star className="h-4 w-4 fill-[#fbbf24] text-[#fbbf24] animate-bounce-subtle" />
              <span>Rated 4.8 on Play Store</span>
              <Sparkles className="h-3.5 w-3.5 text-[#fbbf24]" />
            </div>

            {/* Headline */}
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] animate-fade-in-up delay-100">
              Buy{" "}
              <span className="gradient-text-light">Wholesale Products</span>{" "}
              Online —
              <br />
              India&apos;s #1 Wholesale Marketplace.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/50 sm:text-xl lg:max-w-lg animate-fade-in-up delay-200">
              The <strong className="text-white/80">wholesale products app</strong>{" "}
              that serves <strong className="text-white/80">all of India</strong> —
              connecting retailers with 1,00,000+ wholesale products from
              verified wholesalers in 50+ major cities, with pan-India delivery.
              Browse bulk inventory, negotiate prices, and close deals — all
              from your phone.
            </p>

            {/* Download buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up delay-300">
              <Link
                href={PLAY_STORE_URL}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full gradient-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_32px_rgba(99,102,241,0.5)] hover:-translate-y-1 sm:w-auto"
              >
                <Zap className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Download for Android
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <a
                href={IOS_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/25 hover:-translate-y-1 sm:w-auto"
              >
                Download for iOS
              </a>
            </div>

            {/* iOS WhatsApp redirect note */}
            <p className="mt-3 text-xs text-white/40 lg:text-left text-center animate-fade-in-up delay-350">
              iOS app coming soon — tap above to message us on WhatsApp ({PHONE_NUMBER}) and we&apos;ll notify you the moment it&apos;s live.
            </p>

            {/* Trust line */}
            <p className="mt-6 text-sm text-white/30 animate-fade-in-up delay-400">
              Free download &middot; No credit card required &middot; 50K+
              businesses trust Lotwaala
            </p>
          </div>

          {/* ── Right column: Phone Mockup ── */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right delay-300">
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
