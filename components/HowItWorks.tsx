"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, FileDown } from "lucide-react";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE, RevealBlock, SplitHeadline } from "./MotionPrimitives";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Site Security Audit",
      timing: "Scheduled Walkthrough",
      summary:
        "Our Tiruppur field operations officer inspects entry/exit points, perimeter lighting, blind spots, and shift rotation requirements.",
      deliverable: "Signed Vulnerability & Post Map",
    },
    {
      num: "02",
      title: "Roster & Commercial SLA",
      timing: "Written Proposal",
      summary:
        "Transparent commercial quotation based on 8-hour/26-day tariffs, itemizing base charges and applicable 18% GST.",
      deliverable: "6-Page Service Agreement & Tariff",
    },
    {
      num: "03",
      title: "Vetted Force Induction",
      timing: "Prior to Handover",
      summary:
        "Verified personnel briefed on visitor registers, material gate passes, fire extinguisher locations, and emergency escalation.",
      deliverable: "Police-Verified Personnel Dossier",
    },
    {
      num: "04",
      title: "24/7 Active Supervision",
      timing: "Ongoing Operations",
      summary:
        "Surprise day/night officer rounds, reliever continuity, attendance closures on the 25th, and clean billing on the 1st.",
      deliverable: "Monthly Muster & Dispatch Logs",
    },
  ];

  const current = steps[activeStep];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 sm:py-24 bg-indigo-950 border-b border-vanilla-100/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <p className="font-mono text-xs text-gold-300 tracking-[0.16em] uppercase">
              Mobilization Workflow
            </p>
            <SplitHeadline
              as="h2"
              text="Four phases from site survey to active command"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-vanilla-50 leading-[1.06]"
            />
          </div>

          <span className="font-mono text-xs text-gold-300 shrink-0">
            Mobilization Notice: 15 Days · Phase {current.num} / 04
          </span>
        </RevealBlock>

        {/* Horizontal Edge-to-Edge Rail Selector (2x2 compact on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border border-vanilla-100/15 gap-px bg-vanilla-100/15">
          {steps.map((step, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`relative p-4 sm:p-6 text-left transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-indigo-800 text-vanilla-50"
                    : "bg-indigo-950 hover:bg-indigo-900/70 text-indigo-200"
                }`}
              >
                {isSelected && (
                  <motion.span
                    layoutId="how-rail-bar"
                    transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
                    className="absolute top-0 left-0 right-0 h-1 bg-gold-400"
                  />
                )}
                <span
                  className={`font-mono text-xs block mb-2 ${
                    isSelected ? "text-gold-300 font-bold" : "text-indigo-400"
                  }`}
                >
                  Phase {step.num} · {step.timing}
                </span>
                <span className="font-display text-lg font-bold block">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean Unboxed Typographic Output Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.num}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
            className="pt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-3">
              <p className="text-lg sm:text-xl text-vanilla-50 leading-relaxed">
                {current.summary}
              </p>
              <div className="inline-flex items-center gap-2.5 text-xs font-mono text-gold-300">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" aria-hidden="true" />
                <span>Output Artifact: {current.deliverable}</span>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-wrap lg:justify-end items-center gap-3">
              <a
                href={buildWhatsappUrl(
                  "Hello Black Cat Commando Security Force, I would like to schedule a Site Security Audit for our premises."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="h-11 px-6 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 text-sm font-bold inline-flex items-center gap-2 transition-colors"
              >
                <span>Schedule Free Site Survey</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={SITE_CONFIG.documents[0].href}
                download={SITE_CONFIG.documents[0].fileName}
                className="h-11 px-4 rounded-xl border border-vanilla-100/20 hover:border-gold-400/50 text-vanilla-50 text-sm font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <FileDown className="w-4 h-4 text-gold-400" aria-hidden="true" />
                <span>Download Quotation PDF</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
