"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE, RevealBlock, SplitHeadline, ParallaxMedia } from "./MotionPrimitives";

export default function CareersSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    age: "",
    city: "Tiruppur",
    role: "Security Guard",
    exServiceman: "No (Civilian)",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `Guard Enlistment Application:
• Full Name: ${formData.fullName}
• Mobile: ${formData.phone}
• Age: ${formData.age}
• Current City: ${formData.city}
• Preferred Role: ${formData.role}
• Ex-Serviceman: ${formData.exServiceman}`;
    window.open(buildWhatsappUrl(summary), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const benefits = [
    {
      title: "Training & Uniform Kit",
      desc: "Issued uniform kit, fire safety orientation, and post protocol onboarding before duty assignment.",
    },
    {
      title: "Statutory PF & ESI Benefits",
      desc: "Timely monthly compensation with Provident Fund and Employees’ State Insurance compliance.",
    },
    {
      title: "Ex-Servicemen Priority",
      desc: "Direct consideration for Head Guard, Security Officer, and Field Supervisor roles for ex-armed forces personnel.",
    },
  ];

  return (
    <section
      id="careers"
      className="relative overflow-hidden bg-indigo-900 border-b border-vanilla-100/12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <RevealBlock className="lg:col-span-6 px-6 sm:px-10 py-16 sm:py-24 space-y-8 lg:border-r border-vanilla-100/12">
          <div className="space-y-3">
            <p className="font-mono text-xs text-gold-300 tracking-[0.16em] uppercase">
              Careers &amp; Recruitment
            </p>
            <SplitHeadline
              as="h2"
              text="Join our security force"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-vanilla-50 leading-[1.06]"
            />
            <p className="text-sm sm:text-base text-indigo-200 leading-relaxed">
              We recruit disciplined, physically fit candidates for static
              guard, armed guard, and supervisory postings across Tiruppur and
              Tamil Nadu.
            </p>
          </div>

          <div className="relative h-56 sm:h-64 overflow-hidden border border-vanilla-100/12">
            <ParallaxMedia yRange={22} className="w-full h-full">
              <Image
                src="/guard-squad.jpg"
                alt="Security force recruitment orientation and muster"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(23,25,45,0.12) 0%, rgba(23,25,45,0.88) 100%)",
              }}
            />
            <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-vanilla-50">
                Stable postings with statutory PF &amp; ESI coverage
              </span>
              <span className="font-mono text-xs text-status-live shrink-0">
                Recruiting
              </span>
            </div>
          </div>

          <div className="divide-y divide-vanilla-100/12 border-y border-vanilla-100/12">
            {benefits.map((b) => (
              <div key={b.title} className="py-4 flex items-start gap-3.5">
                <ShieldCheck
                  className="w-5 h-5 text-gold-400 shrink-0 mt-0.5"
                  strokeWidth={1.6}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-bold text-vanilla-50">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-200 mt-1 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealBlock>

        <RevealBlock delay={0.06} className="lg:col-span-6 bg-indigo-950 p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
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
                Application Prepared
              </h3>
              <p className="text-sm text-indigo-200 max-w-sm mx-auto">
                Your enlistment application has been opened in WhatsApp for our
                Tiruppur recruitment desk.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="h-10 px-5 rounded-xl border border-vanilla-100/25 text-xs font-semibold text-vanilla-50 hover:border-gold-400 cursor-pointer"
              >
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold text-vanilla-50">
                  Guard Enlistment Application
                </h3>
                <p className="text-xs text-indigo-300 mt-1">
                  Submit candidate profile directly to the Tiruppur hiring desk.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="career-name" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    id="career-name"
                    required
                    type="text"
                    placeholder="Candidate full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="career-phone" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    id="career-phone"
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
                  <label htmlFor="career-age" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Age *
                  </label>
                  <input
                    id="career-age"
                    required
                    type="number"
                    min={18}
                    max={60}
                    placeholder="Age"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="career-city" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Current City *
                  </label>
                  <input
                    id="career-city"
                    required
                    type="text"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full h-11 bg-transparent border-b border-vanilla-100/25 text-sm text-vanilla-50 placeholder:text-indigo-400 focus:border-gold-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="career-role" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Preferred Role
                  </label>
                  <select
                    id="career-role"
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full h-11 bg-indigo-900 border-b border-vanilla-100/25 px-3 text-sm text-vanilla-50 focus:border-gold-400 outline-none transition-colors"
                  >
                    <option value="Security Guard">Security Guard</option>
                    <option value="Armed Security Guard">
                      Armed Security Guard
                    </option>
                    <option value="Head Guard / Officer">
                      Head Guard / Officer
                    </option>
                    <option value="Field Supervisor">Field Supervisor</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="career-ex" className="block font-mono text-[11px] uppercase tracking-wider text-gold-300 mb-1.5">
                    Ex-Serviceman
                  </label>
                  <select
                    id="career-ex"
                    value={formData.exServiceman}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        exServiceman: e.target.value,
                      })
                    }
                    className="w-full h-11 bg-indigo-900 border-b border-vanilla-100/25 px-3 text-sm text-vanilla-50 focus:border-gold-400 outline-none transition-colors"
                  >
                    <option value="No (Civilian)">No (Civilian)</option>
                    <option value="Yes (Ex-Defence / CAPF)">
                      Yes (Ex-Defence / CAPF)
                    </option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="relative overflow-hidden shimmer-on-hover h-12 px-8 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 font-bold text-sm inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer"
              >
                <Send className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                <span>Submit Application</span>
              </button>
            </form>
          )}
        </RevealBlock>
      </div>
    </section>
  );
}
