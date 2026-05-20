import Link from "next/link";
import { Search } from "lucide-react";

// ─── Popular Searches — keyword-rich internal link cloud ─────────────────────

interface PopularSearchesProps {
  searches: { label: string; href: string }[];
  title?: string;
}

export default function PopularSearches({
  searches,
  title = "Popular Wholesale Searches",
}: PopularSearchesProps) {
  return (
    <section className="py-12 bg-bg-subtle">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-sm font-bold text-[#94a3b8]">
          <Search className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {searches.map((search) => (
            <Link
              key={search.href}
              href={search.href}
              className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-medium text-[#475569] transition-all hover:border-[#2563eb]/30 hover:text-[#2563eb] hover:shadow-sm"
            >
              {search.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
