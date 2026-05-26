"use client";

import { useEffect, useState } from "react";
import { grantConsent, denyConsent } from "@/lib/gtag";
import { trackConsent } from "@/lib/analytics-events";

const STORAGE_KEY = "lotwaala_consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        setVisible(stored !== "granted" && stored !== "denied");
      } catch {
        setVisible(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const handle = (granted: boolean) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, granted ? "granted" : "denied");
    } catch {}
    if (granted) grantConsent();
    else denyConsent();
    trackConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#1a2238]/95 px-3 py-2 backdrop-blur-md shadow-lg sm:px-4 sm:py-1.5"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 sm:min-h-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-snug text-white/75 sm:text-sm">
          We use cookies to understand how you use Lotwaala and improve the app
          experience. See our analytics policy for details.
        </p>
        <div className="flex w-full gap-2 sm:w-auto sm:flex-shrink-0">
          <button
            type="button"
            onClick={() => handle(false)}
            className="flex-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 sm:flex-none sm:px-4"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => handle(true)}
            className="flex-1 rounded-full gradient-primary px-4 py-1.5 text-xs font-bold text-white shadow-md transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] sm:flex-none sm:px-5"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
