"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Navigation,
  FileDown,
} from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST, buildWhatsappUrl } from "@/lib/site-data";
import { RevealBlock, EDITORIAL_EASE } from "./MotionPrimitives";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES_LIST[0].title as string,
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const whatsappHref = buildWhatsappUrl(
    "Hello Black Cat Commando Security Force, I would like to inquire about security services for my facility."
  );

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 bg-indigo-800 border-b border-vanilla-100/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-indigo-300 tracking-wide">
              10 · Command Center & Site Audit
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
              Request a free site assessment
            </h2>
          </div>
          <p className="text-sm sm:text-base text-indigo-200 max-w-md leading-relaxed">
            Reach our 24/7 Tiruppur operations desk directly or visit our P.N.
            Road headquarters opposite Pushpa Theatre Bus Stop.
          </p>
        </RevealBlock>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Assessment Form */}
          <RevealBlock className="lg:col-span-7 bg-indigo-900 border border-vanilla-100/15 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center flex-grow">
                <div className="w-14 h-14 rounded-full bg-indigo-800 border border-vanilla-100/20 flex items-center justify-center text-status-live mb-4">
                  <CheckCircle2 className="w-7 h-7" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-vanilla-100">
                  Inquiry Logged
                </h3>
                <p className="text-sm sm:text-base text-indigo-200 mt-2 max-w-md leading-relaxed">
                  Our operations supervisor will reach out within 24 hours. For
                  immediate deployment, call{" "}
                  <strong className="text-vanilla-100 tabular-nums">
                    {SITE_CONFIG.contact.primaryPhoneDisplay}
                  </strong>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 h-11 px-6 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="+91 mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-location"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Site Location *
                    </label>
                    <input
                      id="contact-location"
                      type="text"
                      required
                      placeholder="Tiruppur / Palladam / Coimbatore"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs font-medium text-indigo-200 mb-1.5"
                  >
                    Service Needed *
                  </label>
                  <select
                    id="contact-service"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 focus:outline-none focus:border-vanilla-100"
                  >
                    {SERVICES_LIST.map((service) => (
                      <option key={service.num} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-indigo-200 mb-1.5"
                  >
                    Site Requirements
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Guard count, shift duration (8h/12h), or inspection notes"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-indigo-950 border border-vanilla-100/15 rounded-lg p-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                  className="w-full h-12 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-150 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      <span>Request Free Site Assessment</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </RevealBlock>

          {/* Command Center Info & Verified Google Map */}
          <RevealBlock
            delay={0.08}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="bg-vanilla-100 text-ink-primary rounded-2xl p-6 sm:p-7 space-y-5 border border-vanilla-300">
              <div className="flex items-center justify-between pb-3 border-b border-indigo-800/12">
                <h3 className="font-display text-lg font-semibold text-ink-primary">
                  Head Office & Dispatch
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-status-live-dark">
                  <span className="w-2 h-2 rounded-full bg-status-live-dark" aria-hidden="true" />
                  Open 24h
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-800 text-vanilla-100 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-primary">
                      Office Address
                    </h4>
                    <p className="text-ink-secondary leading-relaxed mt-0.5">
                      {SITE_CONFIG.address.full}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-800 text-vanilla-100 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-semibold text-ink-primary">
                      24/7 Operations Mobile
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href={SITE_CONFIG.contact.primaryPhoneHref}
                        className="text-ink-primary font-mono font-semibold hover:underline tabular-nums"
                      >
                        {SITE_CONFIG.contact.primaryPhoneDisplay}
                      </a>
                      <span className="text-ink-muted" aria-hidden="true">
                        /
                      </span>
                      <a
                        href={SITE_CONFIG.contact.secondaryPhoneHref}
                        className="text-ink-secondary font-mono hover:text-ink-primary hover:underline tabular-nums"
                      >
                        {SITE_CONFIG.contact.secondaryPhoneDisplay}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-800 text-vanilla-100 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink-primary">
                      Official Email
                    </h4>
                    <a
                      href={SITE_CONFIG.contact.emailHref}
                      className="text-ink-secondary hover:text-ink-primary hover:underline break-all"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 px-4 rounded-lg bg-indigo-800 hover:bg-indigo-700 text-vanilla-100 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={SITE_CONFIG.documents[0].href}
                  download={SITE_CONFIG.documents[0].fileName}
                  className="h-11 px-4 rounded-lg bg-vanilla-50 hover:bg-white border border-indigo-800/20 text-ink-primary text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <FileDown className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>Quotation PDF</span>
                </a>
              </div>
            </div>

            {/* Verified Google Map Embed Card */}
            <div className="rounded-2xl overflow-hidden border border-vanilla-100/15 bg-indigo-900 flex flex-col">
              <div className="px-4 py-3 border-b border-vanilla-100/12 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-semibold text-vanilla-100">
                    {SITE_CONFIG.companyName}
                  </h4>
                  <p className="text-[11px] font-mono text-indigo-300">
                    {SITE_CONFIG.address.short}
                  </p>
                </div>
                <a
                  href={SITE_CONFIG.map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-8 px-3 rounded-md bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 text-xs font-semibold inline-flex items-center gap-1.5 shrink-0 transition-colors duration-150"
                >
                  <Navigation className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                  <span>Directions</span>
                </a>
              </div>

              <div className="h-64 w-full bg-indigo-950">
                <iframe
                  title="Black Cat Commando Security Force Tiruppur Location"
                  src={SITE_CONFIG.map.embedSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
