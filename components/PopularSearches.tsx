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
        <div className="flex items-center gap-2 text-sm font-bold text-[#1e293b]">
          <Search className="h-4 w-4" />
          <span>{title}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {searches.map((search) => (
            <Link
              key={search.href}
              href={search.href}
              className="rounded-full border border-[#cbd5e1] bg-white px-4 py-2 text-sm font-semibold text-[#334155] transition-all hover:border-[#1d4ed8]/50 hover:text-[#1d4ed8] hover:shadow-sm"
            >
              {search.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
