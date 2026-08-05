"use client";

import { useState } from "react";
import { PHONE_NUMBER } from "@/lib/constants";

const ENQUIRY_TYPES = ["Become a Seller", "Bulk Buyer", "Brand Partnership", "Media / PR", "Other"];

const BUSINESS_TYPES = [
  "Manufacturer / Factory",
  "Wholesaler / Distributor",
  "Retailer / Shop Owner",
  "E-Commerce Seller",
  "Importer / Exporter",
  "Brand / OEM",
  "Media / Content Creator",
  "Logistics Partner",
  "Other",
];

const VOLUME_OPTIONS = [
  "Under ₹1 Lakh / month",
  "₹1–5 Lakh / month",
  "₹5–20 Lakh / month",
  "₹20–50 Lakh / month",
  "₹50 Lakh – ₹1 Crore / month",
  "Above ₹1 Crore / month",
];

export function EnquiryFormClient() {
  const [selectedType, setSelectedType] = useState(ENQUIRY_TYPES[0]);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const company = data.get("company") as string;
    const phone = data.get("phone") as string;
    const email = data.get("email") as string;
    const city = data.get("city") as string;
    const businessType = data.get("businessType") as string;
    const volume = data.get("volume") as string;
    const message = data.get("message") as string;

    const whatsappText = encodeURIComponent(
      `*Lotwaala Business Enquiry*\n\nType: ${selectedType}\nName: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nCity: ${city}\nBusiness Type: ${businessType}\nMonthly Volume: ${volume}\n\nMessage:\n${message}`
    );
    const whatsappUrl = `https://wa.me/91${PHONE_NUMBER}?text=${whatsappText}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
    setSelectedType(ENQUIRY_TYPES[0]);
  };

  return (
    <div className="rounded-2xl border border-[#e2e8f0] bg-white shadow-sm overflow-hidden">
      {/* Enquiry type tabs */}
      <div className="border-b border-[#e2e8f0] bg-[#f8fafc] p-4">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#6366f1]">
          I want to:
        </p>
        <div className="flex flex-wrap gap-2">
          {ENQUIRY_TYPES.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all ${
                selectedType === type
                  ? "bg-[#6366f1] text-white shadow-md"
                  : "border border-[#e2e8f0] bg-white text-[#64748b] hover:border-[#6366f1] hover:text-[#6366f1]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="text-5xl">✅</div>
            <h3 className="mt-4 text-2xl font-extrabold text-[#0f172a]">Enquiry Sent!</h3>
            <p className="mt-2 text-[#64748b]">
              Your enquiry has been sent via WhatsApp to our team. We&apos;ll respond within 24 business hours.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-[#6366f1] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#4f46e5] transition-colors"
            >
              Send Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-name">
                  Full Name <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  id="enq-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Rajesh Kumar"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-company">
                  Company / Business Name <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  id="enq-company"
                  type="text"
                  name="company"
                  required
                  placeholder="Kumar Enterprises"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-phone">
                  Phone / WhatsApp <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  id="enq-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98XXXXXXXX"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-email">
                  Business Email <span className="text-[#ef4444]">*</span>
                </label>
                <input
                  id="enq-email"
                  type="email"
                  name="email"
                  required
                  placeholder="rajesh@company.com"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-city">
                  City
                </label>
                <input
                  id="enq-city"
                  type="text"
                  name="city"
                  placeholder="Delhi, Mumbai, Surat…"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* GST Number */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-gst">
                  GST Number{" "}
                  <span className="text-xs font-normal text-[#94a3b8]">(Optional — required for sellers)</span>
                </label>
                <input
                  id="enq-gst"
                  type="text"
                  name="gst"
                  placeholder="22AAAAA0000A1Z5"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                />
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-businessType">
                  Business Type
                </label>
                <select
                  id="enq-businessType"
                  name="businessType"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                >
                  <option value="">Select business type</option>
                  {BUSINESS_TYPES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Monthly Volume */}
              <div>
                <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-volume">
                  Monthly Inventory Volume
                </label>
                <select
                  id="enq-volume"
                  name="volume"
                  className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all"
                >
                  <option value="">Select volume range</option>
                  {VOLUME_OPTIONS.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-[#0f172a]" htmlFor="enq-message">
                Message / Details <span className="text-[#ef4444]">*</span>
              </label>
              <textarea
                id="enq-message"
                name="message"
                rows={4}
                required
                placeholder={
                  selectedType === "Become a Seller"
                    ? "Tell us about your products, stock quantities, and what you'd like to sell on Lotwaala…"
                    : selectedType === "Bulk Buyer"
                    ? "Tell us what products you're looking for, your quantity requirements, and target cities…"
                    : "Tell us about your enquiry or partnership proposal…"
                }
                className="mt-1.5 w-full rounded-xl border border-[#e2e8f0] px-4 py-2.5 text-[#0f172a] placeholder-[#cbd5e1] focus:border-[#6366f1] focus:outline-none focus:ring-2 focus:ring-[#6366f1]/20 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-[#6366f1] to-[#4f46e5] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#6366f1] focus:ring-offset-2"
            >
              Send Enquiry via WhatsApp →
            </button>
            <p className="text-center text-xs text-[#94a3b8]">
              Your enquiry will be sent directly to our team on WhatsApp. We respond within 24 business hours (Mon–Sat, 9 AM – 6 PM IST).
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
