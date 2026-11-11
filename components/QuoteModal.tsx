"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG, SERVICES_LIST } from "@/lib/site-data";
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
    serviceNeeded: defaultService,
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
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
          transition={{ duration: 0.18, ease: EDITORIAL_EASE }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-indigo-950/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-indigo-900 border border-vanilla-100/20 rounded-2xl overflow-hidden text-vanilla-100"
          >
            {/* Header */}
            <div className="p-6 border-b border-vanilla-100/12 flex items-start justify-between gap-4">
              <div>
                <h3
                  id="quote-modal-title"
                  className="font-display text-xl font-semibold text-vanilla-100"
                >
                  Request Free Site Assessment
                </h3>
                <p className="text-xs text-indigo-300 mt-1 leading-relaxed">
                  Our supervisory officer will assess your premises and prepare
                  a deployment schedule.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-9 h-9 rounded-lg text-indigo-300 hover:text-vanilla-100 hover:bg-indigo-800 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-indigo-800 border border-vanilla-100/20 flex items-center justify-center text-status-live mb-3">
                    <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-vanilla-100">
                    Assessment Request Logged
                  </h4>
                  <p className="text-sm text-indigo-200 mt-2 max-w-sm leading-relaxed">
                    Thank you. Our team will contact you within 24 hours. For
                    immediate assistance, call{" "}
                    <strong className="text-vanilla-100 tabular-nums">
                      {SITE_CONFIG.contact.primaryPhoneDisplay}
                    </strong>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      onClose();
                    }}
                    className="mt-6 h-10 px-6 rounded-lg bg-vanilla-100 text-indigo-800 text-xs font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="modal-name"
                        className="block text-xs font-medium text-indigo-200 mb-1.5"
                      >
                        Name *
                      </label>
                      <input
                        id="modal-name"
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
                        htmlFor="modal-phone"
                        className="block text-xs font-medium text-indigo-200 mb-1.5"
                      >
                        Mobile Number *
                      </label>
                      <input
                        id="modal-phone"
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
                        htmlFor="modal-email"
                        className="block text-xs font-medium text-indigo-200 mb-1.5"
                      >
                        Email *
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        placeholder="Email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="modal-location"
                        className="block text-xs font-medium text-indigo-200 mb-1.5"
                      >
                        Location / City *
                      </label>
                      <input
                        id="modal-location"
                        type="text"
                        required
                        placeholder="Tiruppur"
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
                      htmlFor="modal-service"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Service Needed *
                    </label>
                    <select
                      id="modal-service"
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          serviceNeeded: e.target.value,
                        })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 focus:outline-none focus:border-vanilla-100"
                    >
                      {SERVICES_LIST.map((service) => (
                        <option key={service.num} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                      <option value="Factory / Industrial">
                        Factory / Industrial
                      </option>
                      <option value="Corporate Office">Corporate Office</option>
                      <option value="Residential Society">
                        Residential Society
                      </option>
                      <option value="Warehouse / Logistics">
                        Warehouse / Logistics
                      </option>
                      <option value="Retail / Showroom">
                        Retail / Showroom
                      </option>
                      <option value="Event / Temporary">
                        Event / Temporary
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="modal-notes"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Site Notes
                    </label>
                    <textarea
                      id="modal-notes"
                      rows={2}
                      placeholder="Specify shifts or guard strength"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-indigo-950 border border-vanilla-100/15 rounded-lg p-3 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.985 }}
                    transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                    className="w-full h-11 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-150 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                        <span>Submit Assessment Request</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
