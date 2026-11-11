"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, FileDown, MessageCircle, Plus, Minus } from "lucide-react";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site-data";
import {
  EDITORIAL_EASE,
  RevealBlock,
  SplitHeadline,
  ParallaxBackdrop,
} from "./MotionPrimitives";

const SITE_CATEGORIES = [
  "Factory / Industrial",
  "Corporate Office",
  "Residential Society",
  "Warehouse / Logistics",
  "Retail / Showroom",
  "Event / Temporary",
] as const;

const SHIFT_OPTIONS = [
  { id: "8h", label: "8-Hour Shift", postsPerDay: 3, hint: "3 shifts / day" },
  { id: "12h", label: "12-Hour Shift", postsPerDay: 2, hint: "2 shifts / day" },
  { id: "24h", label: "24h Full Cycle", postsPerDay: 3, hint: "Continuous cycle" },
] as const;

export default function CostCalculator() {
  const [siteType, setSiteType] = useState<string>(SITE_CATEGORIES[0]);
  const [guardsCount, setGuardsCount] = useState<number>(4);
  const [officersCount, setOfficersCount] = useState<number>(1);
  const [shiftId, setShiftId] = useState<"8h" | "12h" | "24h">("8h");

  const guardUnitRate = SITE_CONFIG.standardRates[0].monthlyRate;
  const officerUnitRate = SITE_CONFIG.standardRates[1].monthlyRate;

  const guardsSubtotal = guardsCount * guardUnitRate;
  const officersSubtotal = officersCount * officerUnitRate;
  const baseTotal = guardsSubtotal + officersSubtotal;
  const gstAmount = Math.round(baseTotal * 0.18);
  const grandTotal = baseTotal + gstAmount;

  const guardSharePct =
    grandTotal > 0 ? Math.round((guardsSubtotal / grandTotal) * 100) : 0;
  const officerSharePct =
    grandTotal > 0 ? Math.round((officersSubtotal / grandTotal) * 100) : 0;
  const gstSharePct = Math.max(0, 100 - guardSharePct - officerSharePct);

  const selectedShift =
    SHIFT_OPTIONS.find((s) => s.id === shiftId) || SHIFT_OPTIONS[0];
  const dailyShiftPosts =
    (guardsCount + officersCount) * selectedShift.postsPerDay;

  const formatINR = (num: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(num);

  const quoteSummaryText = `Hello Black Cat Commando Security Force, I would like a commercial quotation for:
• Facility Type: ${siteType}
• Security Guards (8h/26d): ${guardsCount} (${formatINR(guardsSubtotal)})
• Head Guards / Officers (8h/26d): ${officersCount} (${formatINR(officersSubtotal)})
• Shift Rotation: ${selectedShift.label} (${dailyShiftPosts} shift-posts/day)
• Monthly Base: ${formatINR(baseTotal)}
• Estimated Monthly Total incl. 18% GST: ${formatINR(grandTotal)}`;

  return (
    <section
      id="calculator"
      className="relative overflow-hidden bg-indigo-900 border-b border-vanilla-100/12"
    >
      <ParallaxBackdrop range={44} className="absolute inset-0 indigo-grid-bg opacity-65" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Seamless Control Surface */}
        <RevealBlock className="lg:col-span-7 px-5 sm:px-10 lg:px-12 py-12 sm:py-24 space-y-8 sm:space-y-10 lg:border-r border-vanilla-100/12">
          <div className="space-y-3">
            <p className="font-mono text-xs text-gold-300 tracking-[0.16em] uppercase inline-flex items-center gap-2">
              <Calculator className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
              <span>Commercial Tariff Calculator</span>
            </p>
            <SplitHeadline
              as="h2"
              text="Estimate monthly strength & GST billing"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-vanilla-50 leading-[1.06]"
            />
            <p className="text-sm sm:text-base text-indigo-200 max-w-xl">
              Calculated directly from our 8-hour, 26-day commercial schedule (₹20,000 per Guard and ₹22,000 per Head Guard / Officer, plus 18% GST).
            </p>
          </div>

          {/* 1. Facility Underline Pills */}
          <div className="space-y-3 pt-2 border-t border-vanilla-100/12">
            <span className="font-mono text-xs text-gold-300 uppercase tracking-wider block">
              01 · Facility Category
            </span>
            <div className="flex flex-wrap gap-2">
              {SITE_CATEGORIES.map((cat) => {
                const active = siteType === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSiteType(cat)}
                    className={`relative px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                      active
                        ? "text-indigo-950 font-bold"
                        : "border border-vanilla-100/18 text-indigo-200 hover:border-gold-400/50 hover:text-vanilla-50"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="calc-facility-bg"
                        transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
                        className="absolute inset-0 rounded-full bg-gold-400 z-0"
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Shift Bar */}
          <div className="space-y-3 pt-4 border-t border-vanilla-100/12">
            <span className="font-mono text-xs text-gold-300 uppercase tracking-wider block">
              02 · Shift Rotation Schedule
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 border border-vanilla-100/15 divide-y sm:divide-y-0 sm:divide-x divide-vanilla-100/15 rounded-xl overflow-hidden">
              {SHIFT_OPTIONS.map((opt) => {
                const active = shiftId === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setShiftId(opt.id)}
                    className={`px-4 py-3 text-left transition-colors cursor-pointer ${
                      active
                        ? "bg-vanilla-100 text-indigo-950"
                        : "bg-transparent text-indigo-200 hover:bg-indigo-800/50 hover:text-vanilla-50"
                    }`}
                  >
                    <span className="text-xs font-bold block">{opt.label}</span>
                    <span
                      className={`text-[11px] font-mono block mt-0.5 ${
                        active ? "text-indigo-700" : "text-indigo-300"
                      }`}
                    >
                      {opt.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Hairline Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-vanilla-100/12">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="guards-range" className="text-xs font-mono uppercase tracking-wider text-vanilla-50">
                  Security Guards
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease security guards"
                    onClick={() => setGuardsCount((v) => Math.max(0, v - 1))}
                    className="w-7 h-7 rounded-full border border-vanilla-100/20 text-vanilla-50 inline-flex items-center justify-center cursor-pointer hover:border-gold-400"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-mono text-base font-bold text-gold-300 tabular-nums">
                    {guardsCount}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase security guards"
                    onClick={() => setGuardsCount((v) => Math.min(30, v + 1))}
                    className="w-7 h-7 rounded-full border border-vanilla-100/20 text-vanilla-50 inline-flex items-center justify-center cursor-pointer hover:border-gold-400"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <input
                id="guards-range"
                type="range"
                min={0}
                max={30}
                value={guardsCount}
                onChange={(e) => setGuardsCount(Number(e.target.value))}
                className="w-full accent-gold-400 cursor-pointer"
              />
              <span className="block font-mono text-[11px] text-indigo-300 tabular-nums">
                ₹20,000 / person / month
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label htmlFor="officers-range" className="text-xs font-mono uppercase tracking-wider text-vanilla-50">
                  Head Guard / Officer
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease head guards"
                    onClick={() => setOfficersCount((v) => Math.max(0, v - 1))}
                    className="w-7 h-7 rounded-full border border-vanilla-100/20 text-vanilla-50 inline-flex items-center justify-center cursor-pointer hover:border-gold-400"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center font-mono text-base font-bold text-gold-300 tabular-nums">
                    {officersCount}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase head guards"
                    onClick={() => setOfficersCount((v) => Math.min(10, v + 1))}
                    className="w-7 h-7 rounded-full border border-vanilla-100/20 text-vanilla-50 inline-flex items-center justify-center cursor-pointer hover:border-gold-400"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              <input
                id="officers-range"
                type="range"
                min={0}
                max={10}
                value={officersCount}
                onChange={(e) => setOfficersCount(Number(e.target.value))}
                className="w-full accent-gold-400 cursor-pointer"
              />
              <span className="block font-mono text-[11px] text-indigo-300 tabular-nums">
                ₹22,000 / person / month
              </span>
            </div>
          </div>
        </RevealBlock>

        {/* Right Full-Height Flush Vanilla Invoice Ledger (Zero Card Padding Slop) */}
        <RevealBlock
          delay={0.06}
          className="light-surface lg:col-span-5 bg-vanilla-50 text-indigo-900 px-6 sm:px-10 py-16 sm:py-24 flex flex-col justify-between border-t lg:border-t-0 border-l-0 border-indigo-800/15"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-indigo-800/15 pb-4">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold-600 font-semibold block">
                  Proforma Ledger
                </span>
                <span className="font-display text-2xl font-bold text-indigo-900">
                  Monthly Billing Summary
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-indigo-800 tabular-nums">
                SAC {SITE_CONFIG.credentials.sac}
              </span>
            </div>

            {/* Live Ratio Hairline Track */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-indigo-600 tabular-nums">
                <span>Guards {guardSharePct}%</span>
                <span>Officers {officerSharePct}%</span>
                <span>GST {gstSharePct}%</span>
              </div>
              <div className="h-2 w-full flex bg-indigo-800/10 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: `${guardSharePct}%` }}
                  transition={{ duration: 0.32, ease: EDITORIAL_EASE }}
                  className="h-full bg-indigo-800"
                />
                <motion.div
                  animate={{ width: `${officerSharePct}%` }}
                  transition={{ duration: 0.32, ease: EDITORIAL_EASE }}
                  className="h-full bg-gold-500"
                />
                <motion.div
                  animate={{ width: `${gstSharePct}%` }}
                  transition={{ duration: 0.32, ease: EDITORIAL_EASE }}
                  className="h-full bg-indigo-400"
                />
              </div>
            </div>

            <dl className="divide-y divide-indigo-800/12 text-sm border-y border-indigo-800/12">
              <div className="py-3 flex justify-between items-center">
                <dt className="text-indigo-700">Facility Type</dt>
                <dd className="font-bold text-indigo-900">{siteType}</dd>
              </div>
              <div className="py-3 flex justify-between items-center tabular-nums">
                <dt className="text-indigo-700">Guards ({guardsCount} × ₹20,000)</dt>
                <dd className="font-mono font-bold text-indigo-900">
                  {formatINR(guardsSubtotal)}
                </dd>
              </div>
              <div className="py-3 flex justify-between items-center tabular-nums">
                <dt className="text-indigo-700">Officers ({officersCount} × ₹22,000)</dt>
                <dd className="font-mono font-bold text-indigo-900">
                  {formatINR(officersSubtotal)}
                </dd>
              </div>
              <div className="py-3 flex justify-between items-center tabular-nums">
                <dt className="text-indigo-700">GST (18%)</dt>
                <dd className="font-mono font-bold text-indigo-900">
                  {formatINR(gstAmount)}
                </dd>
              </div>
              <div className="py-3 flex justify-between items-center tabular-nums">
                <dt className="text-indigo-700">Shift Coverage</dt>
                <dd className="font-mono font-bold text-indigo-900">
                  {dailyShiftPosts} shift-posts / 24h
                </dd>
              </div>
            </dl>

            <div className="pt-2">
              <span className="font-mono text-[11px] uppercase tracking-wider text-gold-600 font-semibold block">
                Estimated Monthly Total (Incl. 18% GST)
              </span>
              <div className="mt-1 font-display text-4xl sm:text-5xl font-bold text-indigo-900 tracking-tight tabular-nums">
                {formatINR(grandTotal)}
              </div>
              <p className="mt-2 text-xs text-indigo-600">
                Attendance closed on the 25th; invoice raised on the 1st of the
                succeeding month.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-8">
            <a
              href={buildWhatsappUrl(quoteSummaryText)}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden shimmer-on-hover w-full h-12 rounded-xl bg-indigo-800 hover:bg-indigo-950 text-vanilla-50 font-bold text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
              <span>Request Official Quote on WhatsApp</span>
            </a>

            <a
              href={SITE_CONFIG.documents[0].href}
              download={SITE_CONFIG.documents[0].fileName}
              className="w-full h-11 rounded-xl border border-indigo-800/20 bg-white hover:bg-vanilla-100 text-indigo-900 font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors"
            >
              <FileDown className="w-4 h-4 text-indigo-800" strokeWidth={1.6} aria-hidden="true" />
              <span>Download Quotation PDF ({SITE_CONFIG.documents[0].fileName})</span>
            </a>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
