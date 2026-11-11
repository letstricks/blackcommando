"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  defaultService = SERVICES_LIST[0].title,
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: defaultService as string,
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setFormData((prev) => ({ ...prev, serviceNeeded: defaultService }));
  }, [defaultService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `Security Assessment Quotation Inquiry:
• Name: ${formData.name}
• Mobile: ${formData.phone}
• Email: ${formData.email}
• Location: ${formData.location}
• Service Needed: ${formData.serviceNeeded}
• Notes: ${formData.message || "Standard shift quote"}`;
    window.open(buildWhatsappUrl(summary), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quote-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-950/75 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.26, ease: EDITORIAL_EASE }}
            className="w-full max-w-lg rounded-3xl bg-indigo-900/95 backdrop-blur-xl border border-gold-400/35 p-6 sm:p-8 shadow-2xl relative text-vanilla-50"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-xl glass-indigo-soft text-indigo-200 hover:text-vanilla-50 inline-flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-vanilla-50">
                  Quotation Inquiry Ready
                </h3>
                <p className="text-sm text-indigo-200">
                  Opened directly with {SITE_CONFIG.companyName} on WhatsApp (
                  {SITE_CONFIG.contact.primaryPhoneDisplay}).
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="h-10 px-6 rounded-xl bg-gold-400 text-indigo-950 font-bold text-xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="pr-8">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold-300 block">
                    24/7 Dispatch Desk · Tiruppur HQ
                  </span>
                  <h2
                    id="quote-modal-title"
                    className="font-display text-2xl font-bold text-vanilla-50 mt-1"
                  >
                    Request Site Assessment
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-indigo-950/75 border border-vanilla-100/18 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Mobile *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 mobile number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-indigo-950/75 border border-vanilla-100/18 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="email@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-indigo-950/75 border border-vanilla-100/18 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-indigo-200 mb-1">
                      Site Location *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Tiruppur / Coimbatore"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full h-10 px-3 rounded-xl bg-indigo-950/75 border border-vanilla-100/18 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-indigo-200 mb-1">
                    Service Program
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceNeeded: e.target.value })
                    }
                    className="w-full h-10 px-3 rounded-xl bg-indigo-950 border border-vanilla-100/20 text-sm text-vanilla-50 focus:border-gold-400 outline-none"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.num} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-indigo-200 mb-1">
                    Requirement Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Number of guards, 8h/12h shifts, or special requirements"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full p-3 rounded-xl bg-indigo-950/75 border border-vanilla-100/18 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 font-bold text-sm inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                  <span>Send Request</span>
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
