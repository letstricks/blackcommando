"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock, EDITORIAL_EASE } from "./MotionPrimitives";

export default function CareersSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    isExServiceman: "No",
    location: "",
    role: "Security Guard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section
      id="careers"
      className="py-20 sm:py-24 bg-indigo-800 border-b border-vanilla-100/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Narrative */}
          <RevealBlock className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs text-indigo-300 tracking-wide">
                Careers & Recruitment
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
                Join our security force
              </h2>
              <p className="text-sm sm:text-base text-indigo-200 leading-relaxed">
                We recruit disciplined, physically fit candidates for static
                guard, armed guard, and supervisory postings across Tiruppur and
                nearby industrial belts.
              </p>
            </div>

            <div className="relative rounded-xl overflow-hidden border border-vanilla-100/15 h-56 bg-indigo-900">
              <Image
                src="/guard-squad.jpg"
                alt="Security guard training and muster parade"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/35 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-indigo-200 block">
                    Uniforms & Drilling Provided
                  </span>
                  <h3 className="font-display text-base font-semibold text-vanilla-100 mt-0.5">
                    Stable postings with statutory PF & ESI coverage
                  </h3>
                </div>
                <span className="font-mono text-xs text-status-live bg-indigo-950/85 border border-vanilla-100/20 px-2.5 py-1 rounded-md">
                  Hiring
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-indigo-900 border border-vanilla-100/12">
                <h3 className="text-sm font-semibold text-vanilla-100 mb-1">
                  Training & Uniform Kit
                </h3>
                <p className="text-xs text-indigo-300 leading-relaxed">
                  Issued uniform kit, fire safety orientation, and post
                  protocol onboarding before duty assignment.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-900 border border-vanilla-100/12">
                <h3 className="text-sm font-semibold text-vanilla-100 mb-1">
                  Statutory PF & ESI Benefits
                </h3>
                <p className="text-xs text-indigo-300 leading-relaxed">
                  On-time monthly salary disbursements with Provident Fund and
                  Employees&apos; State Insurance coverage.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-indigo-900 border border-vanilla-100/12">
                <h3 className="text-sm font-semibold text-vanilla-100 mb-1">
                  Ex-Servicemen Priority
                </h3>
                <p className="text-xs text-indigo-300 leading-relaxed">
                  Direct consideration for Head Guard, Security Officer, and
                  Field Supervisor roles for ex-armed forces personnel.
                </p>
              </div>
            </div>
          </RevealBlock>

          {/* Right Form */}
          <RevealBlock
            delay={0.08}
            className="lg:col-span-6 bg-indigo-900 border border-vanilla-100/15 rounded-2xl p-6 sm:p-8"
          >
            <h3 className="font-display text-xl font-semibold text-vanilla-100 pb-4 mb-6 border-b border-vanilla-100/12">
              Guard Enlistment Application
            </h3>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-800 border border-vanilla-100/20 flex items-center justify-center text-status-live mb-4">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h4 className="font-display text-lg font-semibold text-vanilla-100">
                  Application Received
                </h4>
                <p className="text-sm text-indigo-200 mt-2 max-w-sm leading-relaxed">
                  Our recruitment officer will contact you for document and
                  physical verification at {SITE_CONFIG.address.line1},{" "}
                  {SITE_CONFIG.address.city}. You can also call{" "}
                  <strong className="text-vanilla-100 tabular-nums">
                    {SITE_CONFIG.contact.primaryPhoneDisplay}
                  </strong>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 h-10 px-5 rounded-lg bg-vanilla-100 text-indigo-800 text-xs font-semibold cursor-pointer"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="career-name"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="career-name"
                      type="text"
                      required
                      placeholder="Candidate full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="career-phone"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Mobile Number *
                    </label>
                    <input
                      id="career-phone"
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
                      htmlFor="career-age"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Age *
                    </label>
                    <input
                      id="career-age"
                      type="number"
                      min="18"
                      max="60"
                      required
                      placeholder="28"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({ ...formData, age: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 placeholder-indigo-400 focus:outline-none focus:border-vanilla-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="career-city"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Current City *
                    </label>
                    <input
                      id="career-city"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="career-role"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Preferred Role
                    </label>
                    <select
                      id="career-role"
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 focus:outline-none focus:border-vanilla-100"
                    >
                      <option value="Security Guard">Security Guard</option>
                      <option value="Armed Guard">Armed Guard</option>
                      <option value="Head Guard / Supervisor">
                        Head Guard / Supervisor
                      </option>
                      <option value="Security Officer">Security Officer</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="career-exserviceman"
                      className="block text-xs font-medium text-indigo-200 mb-1.5"
                    >
                      Ex-Serviceman
                    </label>
                    <select
                      id="career-exserviceman"
                      value={formData.isExServiceman}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          isExServiceman: e.target.value,
                        })
                      }
                      className="w-full h-11 bg-indigo-950 border border-vanilla-100/15 rounded-lg px-3.5 text-sm text-vanilla-100 focus:outline-none focus:border-vanilla-100"
                    >
                      <option value="No">No (Civilian)</option>
                      <option value="Yes">Yes (Armed Forces / Police)</option>
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileTap={{ scale: 0.985 }}
                  transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                  className="w-full h-12 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-150 disabled:opacity-50 cursor-pointer mt-2"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      <span>Submit Application</span>
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
