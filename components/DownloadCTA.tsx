import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";

export default function DownloadCTA() {
  return (
    <section className="relative overflow-hidden gradient-dark py-28 text-white">
      {/* Animated background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-[#2563eb]/15 blur-[100px] animate-blob" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[350px] rounded-full bg-[#7c3aed]/10 blur-[100px] animate-blob delay-400" />
        <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4]/8 blur-[80px] animate-blob delay-700" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mx-auto animate-bounce-subtle">
          <Image
            src="/logo.png"
            alt="Lotwaala"
            width={80}
            height={80}
            className="mx-auto h-20 w-20 rounded-2xl object-contain drop-shadow-2xl"
          />
        </div>

        <div className="mt-4 flex items-center justify-center gap-1.5 animate-fade-in-up delay-100">
          <Sparkles className="h-4 w-4 text-[#f59e0b]" />
          <span className="text-sm font-semibold text-white/50">
            50,000+ downloads
          </span>
          <Sparkles className="h-4 w-4 text-[#f59e0b]" />
        </div>

        <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl animate-fade-in-up delay-200">
          Start Wholesaling{" "}
          <span className="bg-gradient-to-r from-[#60a5fa] to-[#a78bfa] bg-clip-text text-transparent">
            Smarter
          </span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/50 animate-fade-in-up delay-300">
          Join 10,000+ wholesalers already using Lotwaala. Download the app and
          get access to India&apos;s largest wholesale marketplace — completely
          free.
        </p>

        {/* App screenshots preview */}
        <div className="mt-10 flex items-center justify-center gap-4 animate-fade-in-up delay-300">
          {[
            { src: "/screenshots/dashboard.png", alt: "Dashboard" },
            { src: "/screenshots/explore.png", alt: "Explore Products" },
            { src: "/screenshots/orders.png", alt: "Orders" },
          ].map((img, i) => (
            <div
              key={img.alt}
              className={`w-[90px] sm:w-[120px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl transition-transform duration-500 hover:scale-105 ${
                i === 1 ? "scale-110 ring-white/20" : "opacity-70"
              }`}
            >
              <Image
                src={img.src}
                alt={`Lotwaala App ${img.alt}`}
                width={120}
                height={240}
                className="h-auto w-full object-cover object-top"
              />
            </div>
          ))}
        </div>

        {/* Download buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up delay-400">
          <Link
            href={PLAY_STORE_URL}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-base font-bold text-[#0f172a] shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 sm:w-auto"
          >
            Download for Android
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
          <Link
            href={APP_STORE_URL}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 sm:w-auto"
          >
            Download for iOS
          </Link>
        </div>

        <p className="mt-8 text-sm text-white/30 animate-fade-in-up delay-500">
          Free forever &middot; Available on Android &amp; iOS &middot; No ads
        </p>
      </div>
    </section>
  );
}
