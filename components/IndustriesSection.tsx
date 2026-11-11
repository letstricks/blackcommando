"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Factory, Home, Warehouse, Award, ShieldCheck, ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";
import {
  EDITORIAL_EASE,
  RevealBlock,
  SplitHeadline,
} from "./MotionPrimitives";

export default function IndustriesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const industries = [
    {
      num: "01",
      title: "Textile & Spinning Mills",
      desc: "Gatehouse entry checks, raw yarn movement ledgers, shift-change perimeter control, and fire-safety alertness across Tiruppur industrial belts.",
      icon: Factory,
    },
    {
      num: "02",
      title: "Corporate & Commercial Parks",
      desc: "Front-desk reception protocol, visitor badge verification, basement vehicle logging, and after-hours floor locks.",
      icon: Building2,
    },
    {
      num: "03",
      title: "Residential Gated Communities",
      desc: "Polite firm access control, delivery logging, guest clearance verification, and night foot patrols.",
      icon: Home,
    },
    {
      num: "04",
      title: "Warehouses & Logistics Yards",
      desc: "Vehicle weighbridge and loading bay supervision, invoice cross-checks, seal inspection, and yard perimeter watch.",
      icon: Warehouse,
    },
    {
      num: "05",
      title: "Events, Weddings & Exhibitions",
      desc: "Stage & VIP corridor protection, guest invitation verification, crowd channelization, and orderly parking supervision.",
      icon: Award,
    },
    {
      num: "06",
      title: "Hospitals & Educational Campuses",
      desc: "24/7 outpatient & gate queue coordination, ambulance lane clearance, campus gate discipline, and asset watch.",
      icon: ShieldCheck,
    },
  ];

  return (
    <>
      <section
        id="industries"
        className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-indigo-800/12">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-xs text-gold-600 font-semibold tracking-[0.16em] uppercase">
              Sectors Protected
            </p>
            <SplitHeadline
              as="h2"
              text="Domain-trained teams across industries"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
            />
          </div>
          <p className="text-sm text-indigo-700 max-w-sm">
            Briefed on sector-specific SOPs, material registers, and escalation
            protocols prior to Day-1 handover.
          </p>
        </div>

        {/* Interactive Full-Width Architectural Accordion Rows (Replaces 6-Card Grid Slop) */}
        <RevealBlock className="max-w-7xl mx-auto divide-y divide-indigo-800/12">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            const isOpen = idx === activeIdx;
            return (
              <div
                key={ind.num}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-indigo-900 text-vanilla-50" : "hover:bg-vanilla-50/80 text-indigo-900"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 sm:px-10 py-6 flex items-center justify-between gap-6 text-left cursor-pointer"
                >
                  <div className="flex items-center gap-6 min-w-0">
                    <span
                      className={`font-mono text-sm font-bold tabular-nums shrink-0 ${
                        isOpen ? "text-gold-400" : "text-indigo-500"
                      }`}
                    >
                      {ind.num}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold truncate">
                      {ind.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <Icon
                      className={`w-5 h-5 ${
                        isOpen ? "text-gold-400" : "text-indigo-700"
                      }`}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-10 pb-7 pl-16 sm:pl-24 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-vanilla-100/10 pt-5">
                        <p className="text-sm sm:text-base text-indigo-200 leading-relaxed max-w-2xl">
                          {ind.desc}
                        </p>
                        <button
                          type="button"
                          onClick={() => setSelectedIndustry(ind.title)}
                          className="h-10 px-5 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 text-xs font-bold inline-flex items-center gap-2 shrink-0 cursor-pointer transition-colors"
                        >
                          <span>Request Sector Briefing</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </RevealBlock>
      </section>

      <QuoteModal
        isOpen={Boolean(selectedIndustry)}
        onClose={() => setSelectedIndustry(null)}
        defaultService={selectedIndustry || undefined}
      />
    </>
  );
}
