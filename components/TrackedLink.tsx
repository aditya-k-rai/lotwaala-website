"use client";

import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";
import { event } from "@/lib/gtag";

type TrackedLinkProps = LinkProps & {
  eventName: string;
  eventParams?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  style?: React.CSSProperties;
};

// Drop-in replacement for next/link that fires a GA4 event onClick.
// Use from server components without converting them — only this wrapper is client.

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...rest
}: TrackedLinkProps) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        event(eventName, eventParams ?? {});
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
