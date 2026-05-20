interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  id?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
  id = "faq",
}: FAQSectionProps) {
  return (
    <section id={id} className="py-20 bg-white relative">
      <div className="absolute inset-0 dot-pattern opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/15 bg-[#6366f1]/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
            FAQ
          </div>
          <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-[#0f172a] sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-base text-[#475569]">{subtitle}</p>
          )}
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group rounded-2xl bg-white transition-all duration-400 open:shadow-[0_8px_32px_rgba(99,102,241,0.08)]"
              style={{
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              }}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left text-base font-bold text-[#0f172a] select-none marker:hidden list-none [&::-webkit-details-marker]:hidden transition-colors group-hover:text-[#6366f1]">
                <span>{faq.question}</span>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#6366f1] to-[#818cf8] text-white transition-transform duration-300 group-open:rotate-45 shadow-sm">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-5 pt-0 text-sm leading-relaxed text-[#64748b]">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
