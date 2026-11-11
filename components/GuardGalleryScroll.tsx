"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { GUARD_PROFILES } from "@/lib/site-data";
import {
  EDITORIAL_EASE,
  RevealBlock,
  SplitHeadline,
} from "./MotionPrimitives";

const GUARD_TAB_LABELS: Record<string, string> = {
  armed: "Armed Guard",
  radio: "Patrol Comms",
  attention: "Industrial Gate",
  salute: "Executive Guard",
};

export default function GuardGalleryScroll() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedProfile = GUARD_PROFILES[selectedIdx];

  return (
    <section
      id="team"
      className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-indigo-800/12">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs text-gold-600 font-semibold tracking-[0.16em] uppercase">
            Uniformed Force Lineup
          </p>
          <SplitHeadline
            as="h2"
            text="Clean turnout, disciplined field presence"
            className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
          />
        </div>

        <div
          role="tablist"
          aria-label="Inspect security personnel roles"
          className="flex flex-wrap sm:flex-nowrap gap-1 border border-indigo-800/15 rounded-full p-1 self-start lg:self-auto shrink-0"
        >
          {GUARD_PROFILES.map((guard, idx) => {
            const active = idx === selectedIdx;
            const shortLabel = GUARD_TAB_LABELS[guard.id] || guard.title;
            return (
              <button
                key={guard.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedIdx(idx)}
                className={`relative px-3.5 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
                  active
                    ? "text-vanilla-50 font-semibold"
                    : "text-indigo-700 hover:text-indigo-950"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="guard-role-pill"
                    transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                    className="absolute inset-0 rounded-full bg-indigo-800 z-0"
                  />
                )}
                <span className="relative z-10">
                  {guard.num} {shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Seamless Architectural 4-Column Portrait Ledger Strip (Zero Box Fatigue) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-indigo-800/12 border-b border-indigo-800/12">
        {GUARD_PROFILES.map((guard, idx) => {
          const isSelected = idx === selectedIdx;
          return (
            <button
              key={guard.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`group text-left flex flex-col transition-colors duration-200 cursor-pointer ${
                isSelected
                  ? "bg-indigo-900 text-vanilla-50"
                  : "bg-vanilla-50/75 hover:bg-white text-indigo-900"
              }`}
            >
              <div className="relative h-80 w-full bg-white overflow-hidden border-b border-indigo-800/12">
                <Image
                  src={guard.image}
                  alt={`${guard.title} — ${guard.category}`}
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 space-y-2.5 flex-grow">
                <span
                  className={`font-mono text-[11px] inline-flex items-center gap-1.5 ${
                    isSelected ? "text-gold-300" : "text-gold-600 font-semibold"
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>
                    {guard.num} · {guard.category}
                  </span>
                </span>
                <h3 className="font-display text-lg font-bold leading-snug">
                  {guard.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed ${
                    isSelected ? "text-indigo-200" : "text-indigo-700"
                  }`}
                >
                  {guard.desc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Role Specification Ticker */}
      <RevealBlock className="max-w-7xl mx-auto px-6 py-5">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProfile.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
            className="flex flex-wrap items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded bg-indigo-800 text-gold-300 font-bold">
                {selectedProfile.num}
              </span>
              <span className="text-sm font-bold text-indigo-900">
                {selectedProfile.title}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-indigo-800">
              {selectedProfile.specs.map((spec) => (
                <span key={spec} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
                  <span>{spec}</span>
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </RevealBlock>
    </section>
  );
}
