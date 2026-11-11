"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  FileDown,
  MessageCircle,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE, RevealBlock, SplitHeadline } from "./MotionPrimitives";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    serviceNeeded: SERVICES_LIST[0].title as string,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `New Site Security Assessment Request:
• Name: ${formData.name}
• Mobile: ${formData.phone}
• Email: ${formData.email}
• Site Location: ${formData.location}
• Service Needed: ${formData.serviceNeeded}
• Details: ${formData.message || "Standard commercial requirement"}`;
    window.open(buildWhatsappUrl(summary), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-indigo-800/12">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs text-gold-600 font-semibold tracking-[0.16em] uppercase">
            Command Center &amp; Site Audit
          </p>
          <SplitHeadline
            as="h2"
            text="Request a free site assessment"
            className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
          />
        </div>
        <p className="text-sm text-indigo-700 max-w-sm">
          Reach our 24/7 Tiruppur operations desk directly or visit our P.N.
          Road headquarters opposite Pushpa Theatre Bus Stop.
        </p>
      </div>

      {/* Seamless 50/50 Full-Bleed Architectural Split */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Flush Indigo Minimalist Underline Form */}
        <RevealBlock className="lg:col-span-7 bg-indigo-900 text-vanilla-50 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
              className="py-12 text-center space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-vanilla-50">
                Dispatch Request Ready
              </h3>
              <p className="text-sm text-indigo-200 max-w-md mx-auto">
                Your assessment details have been opened in WhatsApp for our
                Tiruppur operations officer.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="h-10 px-5 rounded-xl border border-vanilla-100/25 text-xs font-semibold text-vanilla-50 hover:border-gold-400 cursor-pointer"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-vanilla-50">
                  Site Assessment &amp; Deployment Form
                </h3>
                <p className="text-xs text-indigo-300 mt-1">
                  Provide your site details and required shift cadence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    id="contact-phone"
                    required
                    type="tel"
                    placeholder="+91 mobile number"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Email *
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-location" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Site Location *
                  </label>
                  <input
                    id="contact-location"
                    required
                    type="text"
                    placeholder="Tiruppur / Palladam / Coimbatore"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-service" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                  Service Needed *
                </label>
                <select
                  id="contact-service"
                  value={formData.serviceNeeded}
                  onChange={(e) =>
                    setFormData({ ...formData, serviceNeeded: e.target.value })
                  }
                  className="w-full h-11 bg-indigo-950 border-b border-vanilla-100/25 px-3 text-sm text-vanilla-50 focus:border-gold-400 outline-none transition-colors"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.num} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                  Site Requirements
                </label>
                <textarea
                  id="contact-message"
                  rows={3}
                  placeholder="Guard count, shift duration (8h/12h), or inspection notes"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full py-2.5 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="relative overflow-hidden shimmer-on-hover h-12 px-8 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 font-bold text-sm inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer"
              >
                <Send className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                <span>Request Free Site Assessment</span>
              </button>
            </form>
          )}
        </RevealBlock>

        {/* Right Flush Dispatch Ledger + Seamless Embedded Map */}
        <RevealBlock delay={0.06} className="lg:col-span-5 flex flex-col justify-between bg-vanilla-50 lg:border-l border-indigo-800/12">
          <div className="p-8 sm:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-indigo-800/12 pb-4">
              <h3 className="font-display text-xl font-bold text-indigo-900">
                Head Office &amp; Dispatch
              </h3>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs text-status-live-dark font-semibold">
                <span className="w-2 h-2 rounded-full bg-status-live-dark" aria-hidden="true" />
                Open 24h
              </span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="font-mono text-[10px] uppercase text-indigo-600 block">
                    Office Address
                  </span>
                  <p className="text-indigo-900 font-medium leading-snug mt-0.5">
                    {SITE_CONFIG.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="font-mono text-[10px] uppercase text-indigo-600 block">
                    24/7 Operations Mobile
                  </span>
                  <div className="font-mono font-bold text-indigo-900 mt-0.5 tabular-nums flex flex-wrap gap-x-2">
                    <a
                      href={SITE_CONFIG.contact.primaryPhoneHref}
                      className="hover:text-gold-600 transition-colors"
                    >
                      {SITE_CONFIG.contact.primaryPhoneDisplay}
                    </a>
                    <span className="text-indigo-400">/</span>
                    <a
                      href={SITE_CONFIG.contact.secondaryPhoneHref}
                      className="hover:text-gold-600 transition-colors"
                    >
                      {SITE_CONFIG.contact.secondaryPhoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-600 shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <span className="font-mono text-[10px] uppercase text-indigo-600 block">
                    Official Email
                  </span>
                  <a
                    href={SITE_CONFIG.contact.emailHref}
                    className="text-indigo-900 font-medium hover:text-gold-600 transition-colors block mt-0.5"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <a
                href={buildWhatsappUrl(
                  "Hello Black Cat Commando, I would like to discuss security guard deployment."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 rounded-xl bg-indigo-800 hover:bg-indigo-950 text-vanilla-50 text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={SITE_CONFIG.documents[0].href}
                download={SITE_CONFIG.documents[0].fileName}
                className="h-11 rounded-xl border border-indigo-800/20 bg-white hover:bg-vanilla-100 text-indigo-900 text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <FileDown className="w-4 h-4 text-indigo-800" strokeWidth={1.6} aria-hidden="true" />
                <span>Quotation PDF</span>
              </a>
            </div>
          </div>

          <div className="border-t border-indigo-800/12">
            <div className="px-6 py-3 bg-indigo-800 text-vanilla-50 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-bold truncate">
                  {SITE_CONFIG.companyName}
                </p>
                <p className="font-mono text-[11px] text-indigo-200 truncate">
                  {SITE_CONFIG.address.short}
                </p>
              </div>
              <a
                href={SITE_CONFIG.map.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gold-400 hover:bg-gold-300 text-indigo-950 text-xs font-bold inline-flex items-center gap-1.5 shrink-0 transition-colors"
              >
                <span>Directions</span>
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            </div>

            <iframe
              title="Black Cat Commando Security Force Tiruppur Head Office Map"
              src={SITE_CONFIG.map.embedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 border-0 block"
            />
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
