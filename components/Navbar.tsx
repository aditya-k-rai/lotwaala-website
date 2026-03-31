"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import { SITE_NAME, PLAY_STORE_URL } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#features", label: "Features", color: "#ff007f" }, // Vivid pink
  { href: "#how-it-works", label: "How It Works", color: "#7928ca" }, // Vibrant purple
  { href: "/market/delhi/electronics", label: "Markets", color: "#00f0ff" }, // Electric cyan
];

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 overflow-visible" role="navigation">
      {/* Scroll progress bar — CodePen CSS effect via JS width */}
      <div 
        className="nav-scroll-progress transition-[width] duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      <div 
        className="nav-scroll-line transition-[width] duration-75 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Dark glass base */}
      <div className="absolute inset-0 glass-dark z-[-2]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 animate-fade-in-down" onClick={() => setIsMobileMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="Lotwaala Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-xl object-contain bg-white"
              priority
            />
            <span className="text-xl font-extrabold tracking-tight text-white">
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Center links — with CodePen color-fill hover effect */}
          <div className="hidden items-center gap-3 md:flex animate-fade-in-down delay-100">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-codepen text-sm font-semibold text-white/70"
                style={{ "--clr": link.color } as React.CSSProperties}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-3 animate-fade-in-down delay-200">
            <Link
              href={PLAY_STORE_URL}
              className="group hidden sm:inline-flex items-center gap-2 rounded-full gradient-primary px-5 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Download App</span>
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white/70 transition-all duration-300 hover:bg-white/10 hover:text-white md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 animate-scale-in" />
              ) : (
                <Menu className="h-6 w-6 animate-scale-in" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[64px] left-0 right-0 z-40 bg-[#0a0a1a]/95 backdrop-blur-3xl border-b border-white/5 shadow-2xl md:hidden animate-fade-in-down origin-top">
          <div className="flex flex-col gap-4 p-6">
            {NAV_LINKS.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-white/80 p-3 rounded-2xl border border-white/5 transition-all w-full flex items-center justify-between"
                style={{ backgroundColor: `${link.color}15`, borderLeft: `4px solid ${link.color}` } as React.CSSProperties}
              >
                {link.label}
                <span style={{ color: link.color }}>&rarr;</span>
              </Link>
            ))}
            
            <div className="mt-4 pt-6 border-t border-white/10">
              <Link
                href={PLAY_STORE_URL}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full gradient-primary px-5 py-4 text-base font-bold text-white shadow-md active:scale-95 transition-transform"
              >
                <Download className="h-5 w-5" />
                <span>Download Lotwaala App</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
