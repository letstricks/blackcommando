"use client";

import React from "react";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Consult",
      desc: "Share your facility size, gate count, shift structure, and required guard strength.",
    },
    {
      num: "02",
      title: "Assess",
      desc: "Our field officer surveys entry gates, blind spots, and perimeter lighting.",
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Vetted, uniform-equipped guards assume post duties with documented handover orders.",
    },
    {
      num: "04",
      title: "Monitor",
      desc: "Continuous night checks, attendance verification, and 24/7 command center backup.",
    },
  ];

  return (
    <section className="light-surface py-20 sm:py-24 bg-vanilla-100 text-ink-primary border-b border-indigo-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="space-y-3 max-w-2xl mb-12">
          <p className="font-mono text-xs text-ink-muted tracking-wide">
            07 · Deployment Process
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-ink-primary leading-[1.1]">
            Four steps from audit to post handover
          </h2>
        </RevealBlock>

        <div className="relative">
          <div
            className="hidden lg:block absolute top-11 left-8 right-8 h-px bg-indigo-800/15 pointer-events-none"
            aria-hidden="true"
          />

          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
            {steps.map((st) => (
              <StaggerItem
                key={st.num}
                className="rounded-xl bg-vanilla-50 border border-indigo-800/12 p-6 sm:p-7"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-sm font-semibold text-vanilla-100 bg-indigo-800 px-2.5 py-1 rounded-md tabular-nums">
                    {st.num}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    Step {st.num}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-ink-primary mb-2">
                  {st.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  {st.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </div>
    </section>
  );
}
