import Link from "next/link";
import { ChevronRight } from "lucide-react";

// ─── Breadcrumb — semantic nav with structured data hint ─────────────────────

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  variant?: "light" | "dark";
}

export default function Breadcrumb({ items, variant = "dark" }: BreadcrumbProps) {
  const textColor = variant === "dark" ? "text-white/40" : "text-[#94a3b8]";
  const hoverColor = variant === "dark" ? "hover:text-white/70" : "hover:text-[#2563eb]";
  const activeColor = variant === "dark" ? "text-white/70" : "text-[#0f172a]";

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-sm ${textColor}`}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {isLast || !item.href ? (
              <span className={isLast ? activeColor : ""}>{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${hoverColor}`}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
