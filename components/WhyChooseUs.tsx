"use client";

import React from "react";
import { Check } from "lucide-react";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Verified Personnel",
      desc: "Background-checked and police-verified guards with permanent identity documentation on file.",
    },
    {
      num: "02",
      title: "Structured Training",
      desc: "Post discipline, industrial fire safety, first-aid readiness, and emergency response drills.",
    },
    {
      num: "03",
      title: "Supervised Teams",
      desc: "Randomized night inspections, shift log verification, and daily supervisory reporting.",
    },
    {
      num: "04",
      title: "24/7 Control Room",
      desc: "Always reachable Tiruppur command desk with rapid replacement and relief deployment.",
    },
    {
      num: "05",
      title: "Tailored Post Orders",
      desc: "Security deployment plans engineered around your gate volume, shifts, and perimeter risk.",
    },
    {
      num: "06",
      title: "Transparent Contracts",
      desc: "Clear monthly rate schedules, statutory PF/ESI compliance, and documented service terms.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-20 sm:py-24 bg-indigo-800 border-b border-vanilla-100/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-indigo-300 tracking-wide">
              06 · Operational Standards
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
              Why clients rely on our force
            </h2>
          </div>
          <p className="text-sm sm:text-base text-indigo-200 max-w-md leading-relaxed">
            Built for long-term industrial and commercial continuity with strict
            accountability at every shift change.
          </p>
        </RevealBlock>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {points.map((pt) => (
            <StaggerItem
              key={pt.num}
              className="rounded-xl bg-indigo-900 border border-vanilla-100/12 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-medium text-indigo-300 tabular-nums">
                    {pt.num}
                  </span>
                  <div className="w-7 h-7 rounded-md bg-indigo-800 border border-vanilla-100/15 flex items-center justify-center text-vanilla-100">
                    <Check className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                </div>
                <h3 className="font-display text-lg font-semibold text-vanilla-100 mb-2">
                  {pt.title}
                </h3>
                <p className="text-sm text-indigo-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-vanilla-100/10 text-xs font-mono text-indigo-400">
                ISO 9001:2015 Standard
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
