"use client";

import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock, SplitHeadline } from "./MotionPrimitives";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Verified Recruitment",
      desc: "Permanent address verification and police clearance documentation completed prior to post assignment.",
    },
    {
      num: "02",
      title: `${SITE_CONFIG.credentials.isoStandard} Quality System`,
      desc: `Management system certified under ${SITE_CONFIG.credentials.certificateNo} (${SITE_CONFIG.credentials.accreditationBody}).`,
    },
    {
      num: "03",
      title: "Statutory PF, ESI & GST",
      desc: `Clean payroll deductions and GST invoicing under SAC ${SITE_CONFIG.credentials.sac} (${SITE_CONFIG.credentials.gst}).`,
    },
    {
      num: "04",
      title: "Turnout & Shift Discipline",
      desc: "Standard uniform issue kit, daily shift handover registers, and mandatory gate muster logs.",
    },
    {
      num: "05",
      title: "24/7 Field Supervision",
      desc: "Day and night surprise inspections by Tiruppur operations officers backed by central dispatch.",
    },
    {
      num: "06",
      title: "Scheduled Reliever Coverage",
      desc: "Planned relief rotation keeps gates and sensitive perimeters manned continuously without gaps.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-start">
        {/* Left Sticky Editorial Manifesto */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 px-6 sm:px-10 py-16 sm:py-24 space-y-6">
          <div className="space-y-3">
            <p className="font-mono text-xs text-gold-600 font-semibold tracking-[0.16em] uppercase">
              Operational Standards
            </p>
            <SplitHeadline
              as="h2"
              text="Why organizations retain Black Cat Commando"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
            />
          </div>

          <p className="text-sm sm:text-base text-indigo-700 leading-relaxed">
            Industrial and commercial sites depend on documented post discipline,
            verified personnel records, and clean statutory tax billing.
          </p>

          <div className="pt-4 border-t border-indigo-800/12 flex flex-col gap-2 font-mono text-xs text-indigo-800">
            <div className="inline-flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-gold-600" aria-hidden="true" />
              <span>PAN: {SITE_CONFIG.credentials.pan}</span>
            </div>
            <span>GOVT REG: {SITE_CONFIG.credentials.govtReg}</span>
            <span>CERT NO: {SITE_CONFIG.credentials.certificateNo}</span>
          </div>
        </div>

        {/* Right Flush Architectural Hairline Ledger (Zero Box Fatigue) */}
        <RevealBlock className="lg:col-span-7 lg:border-l border-indigo-800/12 divide-y divide-indigo-800/12">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="group px-6 sm:px-10 py-8 flex items-start justify-between gap-6 hover:bg-vanilla-50/80 transition-colors duration-150"
            >
              <div className="flex items-start gap-6">
                <span className="font-mono text-sm font-bold text-gold-600 tabular-nums pt-1 shrink-0">
                  {pt.num}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-indigo-900 group-hover:translate-x-0.5 transition-transform">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-indigo-700 leading-relaxed max-w-xl">
                    {pt.desc}
                  </p>
                </div>
              </div>
              <CheckCircle2
                className="w-5 h-5 text-gold-600 shrink-0 mt-1"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>
          ))}
        </RevealBlock>
      </div>
    </section>
  );
}
