"use client";

import { useEffect, useRef } from "react";
import { trackWhatsAppClick } from "@/lib/analytics-events";

/**
 * Attaches click-tracking to the WhatsApp button after hydration.
 * The parent WhatsAppButton renders the <a> as a server component;
 * this wrapper adds the analytics event without blocking first paint.
 */
export default function WhatsAppButtonClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.querySelector("a");
    if (!el) return;

    const handler = () => trackWhatsAppClick("floating_button");
    el.addEventListener("click", handler);
    return () => el.removeEventListener("click", handler);
  }, []);

  return <div ref={ref}>{children}</div>;
}
