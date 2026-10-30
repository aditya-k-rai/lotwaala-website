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
  const textColor = variant === "dark" ? "text-slate-300" : "text-[#334155]";
  const hoverColor = variant === "dark" ? "hover:text-white" : "hover:text-[#4338ca]";
  const activeColor = variant === "dark" ? "text-white font-semibold" : "text-[#0f172a] font-semibold";

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
