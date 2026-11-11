"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MoveHorizontal,
} from "lucide-react";
import { GUARD_PROFILES } from "@/lib/site-data";
import { EDITORIAL_EASE, RevealBlock, SplitHeadline } from "./MotionPrimitives";

const GUARD_TAB_LABELS: Record<string, string> = {
  armed: "Armed Guard",
  radio: "Patrol Comms",
  attention: "Industrial Gate",
  salute: "Executive Guard",
};

export default function GuardGalleryScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selectedProfile = GUARD_PROFILES[selectedIdx];

  const scrollToIndex = (index: number) => {
    const clamped = Math.max(0, Math.min(index, GUARD_PROFILES.length - 1));
    setSelectedIdx(clamped);

    const container = trackRef.current;
    if (!container) return;
    const targetCard = container.children[clamped] as HTMLElement | undefined;
    if (!targetCard) return;

    const targetLeft = targetCard.offsetLeft - 16;
    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  };

  const handleTrackScroll = () => {
    const container = trackRef.current;
    if (!container) return;

    const centerX = container.scrollLeft + container.clientWidth * 0.35;
    let closestIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - centerX);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = idx;
      }
    });

    if (closestIdx !== selectedIdx) {
      setSelectedIdx(closestIdx);
    }
  };

  return (
    <section
      id="team"
      className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
    >
      {/* Header + Controls */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-6 sm:pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-indigo-800/12">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs text-gold-600 font-semibold tracking-[0.16em] uppercase">
            Uniformed Force Lineup
          </p>
          <SplitHeadline
            as="h2"
            text="Clean turnout, disciplined field presence"
            className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
          />
          <p className="text-sm text-indigo-700 leading-relaxed">
            Swipe or scroll through active guard categories — police-verified,
            clean standard uniform, and post-order briefed.
          </p>
        </div>

        {/* Interactive Role Pills + Arrow Controls */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3">
          <div
            role="tablist"
            aria-label="Inspect security personnel roles"
            className="flex flex-wrap sm:flex-nowrap gap-1 border border-indigo-800/15 rounded-full p-1 bg-vanilla-50/80"
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
                  onClick={() => scrollToIndex(idx)}
                  className={`relative px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap transition-colors cursor-pointer ${
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

          {/* Horizontal Scroll Stepper Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollToIndex(selectedIdx - 1)}
              disabled={selectedIdx === 0}
              aria-label="Previous security guard profile"
              className="w-10 h-10 rounded-full border border-indigo-800/20 bg-white/80 hover:bg-indigo-800 hover:text-vanilla-50 disabled:opacity-35 disabled:pointer-events-none text-indigo-900 inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono text-xs font-bold text-indigo-800 tabular-nums px-1">
              {selectedIdx + 1} / {GUARD_PROFILES.length}
            </span>
            <button
              type="button"
              onClick={() => scrollToIndex(selectedIdx + 1)}
              disabled={selectedIdx === GUARD_PROFILES.length - 1}
              aria-label="Next security guard profile"
              className="w-10 h-10 rounded-full border border-indigo-800/20 bg-white/80 hover:bg-indigo-800 hover:text-vanilla-50 disabled:opacity-35 disabled:pointer-events-none text-indigo-900 inline-flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Viewport With Next-Card Peek On Mobile & Desktop */}
      <div className="relative max-w-7xl mx-auto">
        <div
          ref={trackRef}
          onScroll={handleTrackScroll}
          aria-label="Security personnel horizontal scroll showcase"
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth divide-x divide-indigo-800/12 border-b border-indigo-800/12 pb-2"
          style={{ scrollbarWidth: "thin" }}
        >
          {GUARD_PROFILES.map((guard, idx) => {
            const isSelected = idx === selectedIdx;
            return (
              <div
                key={guard.id}
                onClick={() => scrollToIndex(idx)}
                className={`group snap-start shrink-0 w-[82vw] sm:w-[46vw] md:w-[340px] lg:w-[360px] flex flex-col text-left transition-colors duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-indigo-900 text-vanilla-50"
                    : "bg-vanilla-50/80 hover:bg-white text-indigo-900"
                }`}
              >
                <div className="relative h-80 sm:h-[340px] w-full bg-white overflow-hidden border-b border-indigo-800/12">
                  <Image
                    src={guard.image}
                    alt={`${guard.title} — ${guard.category}`}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 82vw, 360px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 sm:p-6 space-y-2.5 flex-grow">
                  <span
                    className={`font-mono text-[11px] inline-flex items-center gap-1.5 ${
                      isSelected ? "text-gold-300" : "text-gold-600 font-semibold"
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>
                      {guard.num} · {guard.category}
                    </span>
                  </span>
                  <h3 className="font-display text-lg font-bold leading-snug">
                    {guard.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isSelected ? "text-indigo-200" : "text-indigo-700"
                    }`}
                  >
                    {guard.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Scroll Affordance + Selected Spec Bar */}
        <RevealBlock className="px-5 sm:px-6 py-4 space-y-3">
          <div className="flex items-center justify-between text-[11px] font-mono text-indigo-600 lg:hidden">
            <span className="inline-flex items-center gap-1.5">
              <MoveHorizontal className="w-3.5 h-3.5 text-gold-600" aria-hidden="true" />
              <span>Swipe left or right to view all personnel</span>
            </span>
            <span className="font-bold text-indigo-900">
              {selectedIdx + 1} of {GUARD_PROFILES.length}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProfile.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-indigo-800 text-gold-300 font-bold shrink-0">
                  {selectedProfile.num}
                </span>
                <span className="text-sm font-bold text-indigo-900">
                  {selectedProfile.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono text-indigo-800">
                {selectedProfile.specs.map((spec) => (
                  <span key={spec} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 shrink-0" aria-hidden="true" />
                    <span>{spec}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </RevealBlock>
      </div>
    </section>
  );
}
