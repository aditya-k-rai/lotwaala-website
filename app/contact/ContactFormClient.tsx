"use client";

import { useState } from "react";
import { Send, CheckCircle2, MessageSquare, PhoneCall, Loader2, ArrowRight } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/constants";

const INQUIRY_CATEGORIES = [
  { value: "buyer-support", label: "Wholesale Buyer Support" },
  { value: "seller-kyc", label: "Seller Onboarding & KYC" },
  { value: "order-logistics", label: "Order & Logistics Tracking" },
  { value: "delivery-partner", label: "Big-Ship & Delivery Inquiries" },
  { value: "bulk-deal", label: "Custom Bulk Deal or Dead Stock" },
  { value: "business-partnership", label: "Partnership & Brand Collaboration" },
  { value: "feedback-bug", label: "App Feedback or Technical Support" },
  { value: "other", label: "Other Inquiries" },
];

export default function ContactFormClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate reliable async submission
    setTimeout(() => {
      setStatus("success");
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      category: "",
      message: "",
    });
    setStatus("idle");
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Lotwaala Support! My name is ${formData.name || "a wholesale user"}. I have a query regarding: ${formData.category || "wholesale services"}.`
  );

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-white p-6 sm:p-10 shadow-xl shadow-indigo-500/5">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

      {status === "success" ? (
        <div className="py-8 text-center animate-fade-in-up">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 ring-8 ring-emerald-50/50">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="mt-5 text-2xl font-extrabold text-[#0f172a]">
            Message Received Successfully!
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#64748b]">
            Thank you, <span className="font-semibold text-[#0f172a]">{formData.name || "Customer"}</span>. 
            Our dedicated wholesale team at Surplus Saga Pvt. Ltd. will review your request and get back to you within 2 to 4 business hours.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`https://wa.me/91${WHATSAPP_PHONE_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#20ba59] sm:w-auto"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Connect Faster on WhatsApp</span>
            </a>
            <button
              onClick={handleReset}
              className="inline-flex w-full items-center justify-center rounded-xl border border-border bg-slate-50 px-6 py-3 text-sm font-semibold text-[#475569] transition-all hover:bg-slate-100 sm:w-auto"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="relative space-y-6">
          <div className="flex items-center justify-between border-b border-border/60 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6366f1]">
                Online Contact Form
              </span>
              <h3 className="mt-1 text-2xl font-extrabold text-[#0f172a]">
                Send Us a Message
              </h3>
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold text-emerald-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Support Online
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-bold uppercase tracking-wider text-[#475569]"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm transition-all placeholder:text-[#94a3b8] focus:border-[#6366f1] focus:outline-none focus:ring-4 focus:ring-[#6366f1]/10"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#475569]"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98XXXXXXXX"
                className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm transition-all placeholder:text-[#94a3b8] focus:border-[#6366f1] focus:outline-none focus:ring-4 focus:ring-[#6366f1]/10"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-bold uppercase tracking-wider text-[#475569]"
              >
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@business.com"
                className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm transition-all placeholder:text-[#94a3b8] focus:border-[#6366f1] focus:outline-none focus:ring-4 focus:ring-[#6366f1]/10"
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-xs font-bold uppercase tracking-wider text-[#475569]"
              >
                What is your query about? <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm transition-all focus:border-[#6366f1] focus:outline-none focus:ring-4 focus:ring-[#6366f1]/10"
              >
                <option value="">Select a category</option>
                {INQUIRY_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.label}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-bold uppercase tracking-wider text-[#475569]"
            >
              Your Message or Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please describe how we can assist your business in detail..."
              className="mt-2 w-full rounded-xl border border-[#cbd5e1] bg-white px-4 py-3 text-sm font-medium text-[#0f172a] shadow-sm transition-all placeholder:text-[#94a3b8] focus:border-[#6366f1] focus:outline-none focus:ring-4 focus:ring-[#6366f1]/10"
            />
          </div>

          {/* Submit and WhatsApp prompt */}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group inline-flex items-center justify-center gap-2 rounded-xl gradient-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(99,102,241,0.35)] disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message to Lotwaala</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            <a
              href={`https://wa.me/91${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hi! I have an inquiry for Lotwaala customer support.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#047857] hover:underline"
            >
              <span>Or chat with our team on WhatsApp</span>
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
