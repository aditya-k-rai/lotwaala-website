"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { IOS_APP_INTEREST_URL, PLAY_STORE_URL } from "@/lib/constants";
import { trackAppDownload, trackWhatsAppClick } from "@/lib/analytics-events";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row lg:justify-start animate-fade-in-up delay-300">
      <Link
        href={PLAY_STORE_URL}
        onClick={() => trackAppDownload("play_store", "hero")}
        className="group relative isolate inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[linear-gradient(120deg,#7c3aed_0%,#a855f7_34%,#22d3ee_72%,#38bdf8_100%)] bg-[length:180%_180%] px-5 py-2.5 text-sm font-extrabold text-white shadow-[0_14px_34px_rgba(56,189,248,0.24),inset_0_1px_0_rgba(255,255,255,0.30)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_0_36px_rgba(34,211,238,0.42),0_16px_38px_rgba(124,58,237,0.26)] active:translate-y-0 active:scale-[0.99] sm:w-auto sm:px-6 animate-gradient"
      >
        <span className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.48),transparent_28%),linear-gradient(110deg,transparent,rgba(255,255,255,0.34),transparent)] opacity-80 animate-shimmer transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute inset-[2px] -z-10 rounded-full bg-white/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute -left-10 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-white/20 blur-xl transition-transform duration-500 group-hover:translate-x-8" />
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/18 shadow-[inset_0_1px_0_rgba(255,255,255,0.38),0_0_18px_rgba(255,255,255,0.18)] ring-1 ring-white/25 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-white/25">
          <Zap className="h-4 w-4 fill-white/20" />
        </span>
        <span className="whitespace-nowrap">Download for Android</span>
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover:bg-white/20">
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </Link>
      <a
        href={IOS_APP_INTEREST_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download for iOS — message us on WhatsApp"
        onClick={() => trackWhatsAppClick("hero_ios_notify")}
        className="group relative isolate inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035))] px-5 py-2.5 text-sm font-extrabold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_12px_30px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:border-[#25D366]/55 hover:bg-[#25D366]/10 hover:shadow-[0_0_30px_rgba(37,211,102,0.26),inset_0_1px_0_rgba(255,255,255,0.16)] active:translate-y-0 active:scale-[0.99] sm:w-auto sm:px-6"
      >
        <span className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,transparent,rgba(37,211,102,0.20),transparent)] opacity-0 animate-shimmer transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute -right-8 top-1/2 h-14 w-14 -translate-y-1/2 rounded-full bg-[#25D366]/20 blur-xl transition-transform duration-500 group-hover:-translate-x-7" />
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366]/15 ring-1 ring-[#25D366]/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]/22 group-hover:shadow-[0_0_18px_rgba(37,211,102,0.35)]">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="h-4 w-4 text-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.45)] transition-transform duration-300 group-hover:-rotate-6"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M16.004 2.667A13.22 13.22 0 0 0 2.788 15.883a13.1 13.1 0 0 0 1.776 6.59L2.667 29.333l7.073-1.854a13.24 13.24 0 0 0 6.264 1.588h.005A13.22 13.22 0 0 0 29.333 15.89 13.22 13.22 0 0 0 16.004 2.667Zm6.027 16.173c-.33-.166-1.953-.964-2.256-1.074-.303-.113-.524-.166-.744.166s-.854 1.074-1.047 1.294c-.193.22-.386.248-.716.083a9.03 9.03 0 0 1-2.656-1.64 9.96 9.96 0 0 1-1.837-2.29c-.193-.33-.02-.508.145-.672.148-.148.33-.386.496-.58.166-.193.22-.33.33-.55.11-.22.056-.413-.028-.58-.083-.166-.744-1.793-1.02-2.456-.268-.644-.54-.557-.744-.567-.193-.01-.413-.01-.634-.01a1.22 1.22 0 0 0-.882.413c-.303.33-1.157 1.13-1.157 2.756s1.185 3.197 1.35 3.417c.166.22 2.332 3.56 5.65 4.994.79.34 1.406.544 1.886.696.793.252 1.514.216 2.084.131.636-.095 1.953-.798 2.228-1.568.276-.77.276-1.43.193-1.568-.083-.138-.303-.22-.634-.386Z" />
          </svg>
        </span>
        <span className="flex flex-col items-start leading-tight">
          <span>Download for iOS</span>
          <span className="text-[9px] font-medium uppercase tracking-wide text-[#25D366]/90">
            Notify me via WhatsApp
          </span>
        </span>
      </a>
    </div>
  );
}
