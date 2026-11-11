"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, FileDown, ShieldCheck, ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock, EDITORIAL_EASE } from "./MotionPrimitives";

export default function CostCalculator() {
  const [siteType, setSiteType] = useState("Factory / Industrial");
  const [shiftDuration, setShiftDuration] = useState<"8h" | "12h" | "24h">("8h");
  const [guardCount, setGuardCount] = useState(4);
  const [officerCount, setOfficerCount] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const shiftsMultiplier =
    shiftDuration === "8h" ? 3 : shiftDuration === "12h" ? 2 : 3;

  // Standard 26-day monthly rate per person from official quotation PDF
  const guardMonthlyBase = guardCount * 20000;
  const officerMonthlyBase = officerCount * 22000;
  const subtotalMonthly = guardMonthlyBase + officerMonthlyBase;
  const gstAmount = Math.round(subtotalMonthly * 0.18);
  const totalWithGst = subtotalMonthly + gstAmount;
  const dailyPostCoverage = (guardCount + officerCount) * shiftsMultiplier;

  return (
    <section className="light-surface py-20 sm:py-24 bg-vanilla-100 text-ink-primary border-b border-indigo-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="rounded-2xl bg-vanilla-50 border border-indigo-800/15 p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Configurator */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
                  <Calculator className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>03 · Deployment & Tariff Estimator</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-semibold text-ink-primary tracking-tight">
                  Estimate personnel strength and monthly tariff
                </h2>
                <p className="text-sm text-ink-secondary leading-relaxed max-w-xl">
                  Based on our published 8-hour, 26-day duty schedule (₹20,000 per
                  Security Guard and ₹22,000 per Head Guard / Officer, plus 18% GST).
                </p>
              </div>

              {/* 1. Facility Type */}
              <div>
                <span className="block text-xs font-mono text-ink-muted mb-2.5">
                  1. Facility Type
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Factory / Industrial",
                    "Corporate Office",
                    "Residential Society",
                    "Warehouse / Logistics",
                    "Retail / Showroom",
                    "Event / Temporary",
                  ].map((type) => {
                    const active = siteType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSiteType(type)}
                        className={`relative h-10 px-3 rounded-lg text-xs font-medium text-left transition-colors duration-150 border cursor-pointer ${
                          active
                            ? "bg-indigo-800 text-vanilla-100 border-indigo-800"
                            : "bg-white text-ink-secondary border-indigo-800/15 hover:border-indigo-800/35 hover:text-ink-primary"
                        }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Shift Structure with Framer Motion sliding tab */}
              <div>
                <span className="block text-xs font-mono text-ink-muted mb-2.5">
                  2. Shift Structure
                </span>
                <div className="grid grid-cols-3 gap-2 p-1 rounded-xl bg-vanilla-200/70 border border-indigo-800/12">
                  {[
                    { id: "8h" as const, label: "8-Hour Shift", desc: "3 shifts / 24h" },
                    { id: "12h" as const, label: "12-Hour Shift", desc: "2 shifts / 24h" },
                    { id: "24h" as const, label: "24h Continuous", desc: "Full cycle" },
                  ].map((shift) => {
                    const active = shiftDuration === shift.id;
                    return (
                      <button
                        key={shift.id}
                        type="button"
                        onClick={() => setShiftDuration(shift.id)}
                        className={`relative px-3 py-2.5 rounded-lg text-left transition-colors duration-150 cursor-pointer ${
                          active ? "text-vanilla-100" : "text-ink-secondary hover:text-ink-primary"
                        }`}
                      >
                        {active && (
                          <motion.span
                            layoutId="shift-pill"
                            transition={{ duration: 0.2, ease: EDITORIAL_EASE }}
                            className="absolute inset-0 rounded-lg bg-indigo-800"
                          />
                        )}
                        <span className="relative z-10 block text-xs font-semibold">
                          {shift.label}
                        </span>
                        <span
                          className={`relative z-10 block text-[11px] mt-0.5 ${
                            active ? "text-indigo-200" : "text-ink-muted"
                          }`}
                        >
                          {shift.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Guard & Officer Counts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="guard-range"
                      className="text-xs font-mono text-ink-muted"
                    >
                      3. Security Guards (₹20,000 / mo)
                    </label>
                    <span className="font-mono text-sm font-semibold text-ink-primary tabular-nums">
                      {guardCount}
                    </span>
                  </div>
                  <input
                    id="guard-range"
                    type="range"
                    min="1"
                    max="25"
                    value={guardCount}
                    onChange={(e) => setGuardCount(parseInt(e.target.value, 10))}
                    className="w-full accent-indigo-800 cursor-pointer h-2 rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="officer-range"
                      className="text-xs font-mono text-ink-muted"
                    >
                      4. Head Guard / Officer (₹22,000 / mo)
                    </label>
                    <span className="font-mono text-sm font-semibold text-ink-primary tabular-nums">
                      {officerCount}
                    </span>
                  </div>
                  <input
                    id="officer-range"
                    type="range"
                    min="0"
                    max="5"
                    value={officerCount}
                    onChange={(e) => setOfficerCount(parseInt(e.target.value, 10))}
                    className="w-full accent-indigo-800 cursor-pointer h-2 rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Summary Card in Midnight Indigo */}
            <div className="lg:col-span-5 bg-indigo-800 text-vanilla-100 rounded-xl p-6 sm:p-7 space-y-5 border border-indigo-900">
              <div className="flex items-center justify-between pb-4 border-b border-vanilla-100/12">
                <h3 className="font-display text-base font-semibold text-vanilla-100">
                  Estimated Service Schedule
                </h3>
                <span className="font-mono text-xs text-indigo-300">
                  SAC {SITE_CONFIG.credentials.sac}
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-1.5 border-b border-vanilla-100/10">
                  <span className="text-indigo-300">Facility</span>
                  <span className="font-medium text-vanilla-100">{siteType}</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-vanilla-100/10 tabular-nums">
                  <span className="text-indigo-300">
                    Security Guards ({guardCount} × ₹20,000)
                  </span>
                  <span className="font-mono text-vanilla-100">
                    ₹{guardMonthlyBase.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-vanilla-100/10 tabular-nums">
                  <span className="text-indigo-300">
                    Head Guard / Officer ({officerCount} × ₹22,000)
                  </span>
                  <span className="font-mono text-vanilla-100">
                    ₹{officerMonthlyBase.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-vanilla-100/10 tabular-nums">
                  <span className="text-indigo-300">GST (18%)</span>
                  <span className="font-mono text-indigo-200">
                    ₹{gstAmount.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-vanilla-100/10 tabular-nums">
                  <span className="text-indigo-300">24h Roster Equivalent</span>
                  <span className="font-mono text-vanilla-100">
                    {dailyPostCoverage} shift-posts / day
                  </span>
                </div>

                <div className="p-4 rounded-lg bg-indigo-900 border border-vanilla-100/12 mt-2">
                  <div className="text-xs font-mono text-indigo-300">
                    Estimated Monthly Total (Incl. 18% GST)
                  </div>
                  <div className="font-display text-3xl font-semibold text-vanilla-100 mt-1 tabular-nums">
                    ₹{totalWithGst.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xs text-indigo-300 mt-1">
                    26-day standard billing · 8h duty per person · Excl. site-specific allowances
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-11 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>Request Official Quote</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </motion.button>

                <a
                  href={SITE_CONFIG.documents[0].href}
                  download={SITE_CONFIG.documents[0].fileName}
                  className="w-full h-11 rounded-lg bg-indigo-900 hover:bg-indigo-700 border border-vanilla-100/20 text-vanilla-100 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors duration-150"
                >
                  <FileDown className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>Download Sample Quotation PDF</span>
                </a>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={siteType}
      />
    </section>
  );
}
