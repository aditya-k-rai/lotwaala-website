import Link from "next/link";
import { ArrowRight, Star, Sparkles } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL, STATS } from "@/lib/constants";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* ── Animated background blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#2563eb]/[0.06] blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#7c3aed]/[0.06] blur-3xl animate-blob delay-400" />
        <div className="absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#06b6d4]/[0.04] blur-3xl animate-blob delay-700" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ── Left column: Copy ── */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-[#eff6ff] px-4 py-2 text-sm font-semibold text-[#2563eb] shadow-sm">
              <Star className="h-4 w-4 fill-[#2563eb] text-[#2563eb] animate-bounce-subtle" />
              <span>Rated 4.8 on Play Store</span>
              <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
            </div>

            {/* Headline — keyword-rich H1 */}
            <h1 className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0f172a] sm:text-5xl lg:text-[3.5rem] animate-fade-in-up delay-100">
              Your Entire{" "}
              <span className="gradient-text-primary">Wholesale Market</span>,
              <br />
              Now in Your Pocket.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-[#475569] sm:text-xl lg:max-w-lg animate-fade-in-up delay-200">
              The <strong className="text-[#0f172a]">wholesaler app</strong>{" "}
              that connects you with verified suppliers in 120+ cities. Browse
              bulk inventory, negotiate prices, and close deals — all from your
              phone.
            </p>

            {/* Download buttons */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up delay-300">
              <Link
                href={PLAY_STORE_URL}
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl gradient-primary px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:brightness-110 hover:-translate-y-1 animate-pulse-glow sm:w-auto"
              >
                Download for Android
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                href={APP_STORE_URL}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border-2 border-[#e2e8f0] bg-white px-8 py-4 text-base font-bold text-[#0f172a] shadow-sm transition-all duration-300 hover:border-[#2563eb]/30 hover:shadow-md hover:-translate-y-1 sm:w-auto"
              >
                Download for iOS
              </Link>
            </div>

            {/* Trust line */}
            <p className="mt-6 text-sm text-[#94a3b8] animate-fade-in-up delay-400">
              Free download &middot; No credit card required &middot; 50K+
              businesses trust Lotwaala
            </p>
          </div>

          {/* ── Right column: Phone Mockup ── */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right delay-300">
            <PhoneMockup />
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div className="mt-20 grid grid-cols-2 gap-6 rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-lg sm:grid-cols-4 sm:p-8 animate-fade-in-up delay-500">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`text-center animate-scale-in delay-${(i + 5) * 100}`}>
              <p className="text-2xl font-extrabold text-[#0f172a] sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-[#94a3b8]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
