"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Crosshair,
  Factory,
  Building2,
  CalendarCheck,
  Car,
  Radio,
  ClipboardCheck,
  ArrowRight,
  Check,
  Clock,
  FileDown,
} from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SERVICES_LIST, SITE_CONFIG } from "@/lib/site-data";
import {
  EDITORIAL_EASE,
  RevealBlock,
  SplitHeadline,
  ParallaxMedia,
} from "./MotionPrimitives";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "01": ShieldCheck,
  "02": Building2,
  "03": CalendarCheck,
  "04": Factory,
  "05": Building2,
  "06": Car,
  "07": Radio,
  "08": ClipboardCheck,
};

export default function ServicesSection() {
  const [selectedServiceNum, setSelectedServiceNum] = useState<string>("01");
  const [quoteModalService, setQuoteModalService] = useState<string | null>(
    null
  );

  const activeService =
    SERVICES_LIST.find((s) => s.num === selectedServiceNum) || SERVICES_LIST[0];
  const ActiveIcon = SERVICE_ICONS[activeService.num] || ShieldCheck;

  const partnerPoints = [
    `${SITE_CONFIG.credentials.isoStandard} Certified (Cert ${SITE_CONFIG.credentials.certificateNo})`,
    "Police-Verified & Trained Guards",
    "24/7 Supervised Operations",
    "Serving Across Tamil Nadu",
  ];

  return (
    <>
      <section
        id="services"
        className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
      >
        {/* PART 1: Edge-to-Edge Split Interactive Protection Index (No Nested Box Fatigue) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-indigo-800/12">
          <div className="space-y-2">
            <p className="font-mono text-xs text-gold-600 font-semibold uppercase tracking-[0.18em]">
              Protection Programs
            </p>
            <SplitHeadline
              as="h2"
              text="Security disciplines engineered for active duty"
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-indigo-900 leading-[1.06]"
            />
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-indigo-900 hover:text-gold-600 transition-colors shrink-0 pb-1"
          >
            <span>Explore Full Directory</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-indigo-800/12">
          {/* Left Hairline Interactive Index */}
          <div
            role="tablist"
            aria-label="Security service index"
            className="lg:col-span-5 divide-y divide-indigo-800/12 lg:border-r border-indigo-800/12"
          >
            {SERVICES_LIST.map((srv) => {
              const isSelected = selectedServiceNum === srv.num;
              return (
                <button
                  key={srv.num}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedServiceNum(srv.num)}
                  className={`relative w-full text-left px-6 py-4 flex items-center justify-between gap-4 transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? "bg-indigo-800 text-vanilla-50"
                      : "hover:bg-vanilla-50/75 text-indigo-900"
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="srv-active-edge"
                      transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gold-400"
                    />
                  )}
                  <div className="flex items-center gap-4 min-w-0">
                    <span
                      className={`font-mono text-xs tabular-nums ${
                        isSelected ? "text-gold-400 font-bold" : "text-indigo-500"
                      }`}
                    >
                      {srv.num}
                    </span>
                    <div className="min-w-0">
                      <span className="font-display text-sm sm:text-base font-bold block truncate">
                        {srv.title}
                      </span>
                      <span
                        className={`font-mono text-[11px] block mt-0.5 ${
                          isSelected ? "text-indigo-200" : "text-indigo-600"
                        }`}
                      >
                        {srv.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? "text-gold-400 translate-x-0.5" : "text-indigo-400"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right Flush Indigo Command Spec Panel (Zero Outer Margin Gap) */}
          <div className="lg:col-span-7 bg-indigo-900 text-vanilla-50 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.num}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
                className="space-y-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-vanilla-100/12 pb-5">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-gold-300 uppercase tracking-wider">
                    <ActiveIcon className="w-4 h-4 text-gold-400" aria-hidden="true" />
                    <span>
                      Program {activeService.num} · {activeService.category}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-indigo-200">
                    <Clock className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    <span>{activeService.shifts}</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-vanilla-50 tracking-tight">
                    {activeService.title}
                  </h3>
                  <p className="text-base text-indigo-200 leading-relaxed max-w-2xl">
                    {activeService.desc}
                  </p>
                </div>

                {/* Hairline Divided Deliverables */}
                <div className="border-t border-vanilla-100/12">
                  {activeService.deliverables.map((del) => (
                    <div
                      key={del}
                      className="py-3.5 border-b border-vanilla-100/10 flex items-center gap-3.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-gold-400 text-indigo-950 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
                      </span>
                      <span className="text-sm sm:text-base text-vanilla-50">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="font-mono text-xs text-indigo-200">
                    <span className="text-gold-300 uppercase">Ideal Sectors:</span>{" "}
                    {activeService.idealFor}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => setQuoteModalService(activeService.title)}
                    className="h-12 px-6 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Request Deployment Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>

                  <a
                    href={SITE_CONFIG.documents[0].href}
                    download={SITE_CONFIG.documents[0].fileName}
                    className="h-12 px-5 rounded-xl glass-indigo-soft hover:border-gold-400/50 text-vanilla-50 text-sm font-semibold inline-flex items-center gap-2 transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-gold-400" aria-hidden="true" />
                    <span>Download Quotation PDF</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* PART 2: Full-Bleed Architectural 50/50 Split Band (Zero Outer Card Box) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] overflow-hidden lg:border-r border-indigo-800/12">
            <ParallaxMedia yRange={24} className="w-full h-full">
              <Image
                src="/trusted-campus.jpg"
                alt="Modern corporate and industrial complex secured by Black Cat Commando"
                fill
                unoptimized
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(23,25,45,0.08) 0%, rgba(23,25,45,0.42) 100%)",
              }}
            />
          </div>

          <RevealBlock className="lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-center space-y-6 bg-vanilla-100">
            <div className="space-y-2">
              <span className="font-mono text-xs text-gold-600 font-semibold uppercase tracking-[0.16em] block">
                Institutional Assurance
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-indigo-900 leading-tight">
                Trusted Security Partner for Your Business
              </h3>
            </div>

            <ul className="divide-y divide-indigo-800/12 border-y border-indigo-800/12">
              {partnerPoints.map((pt) => (
                <li key={pt} className="py-3.5 flex items-center gap-3.5">
                  <span className="w-5 h-5 rounded-full bg-gold-400 text-indigo-950 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
                  </span>
                  <span className="text-sm sm:text-base font-medium text-indigo-900">
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={SITE_CONFIG.documents[0].href}
                download={SITE_CONFIG.documents[0].fileName}
                className="h-11 px-5 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors shadow-sm"
              >
                <FileDown className="w-4 h-4" strokeWidth={1.8} aria-hidden="true" />
                <span>Download Quotation PDF</span>
              </a>
              <a
                href={SITE_CONFIG.documents[1].href}
                download={SITE_CONFIG.documents[1].fileName}
                className="h-11 px-5 rounded-xl border border-indigo-800/20 bg-white/75 hover:bg-white text-indigo-900 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <FileDown className="w-4 h-4 text-indigo-800" strokeWidth={1.6} aria-hidden="true" />
                <span>ISO Certificate PDF</span>
              </a>
            </div>
          </RevealBlock>
        </div>
      </section>

      <QuoteModal
        isOpen={Boolean(quoteModalService)}
        onClose={() => setQuoteModalService(null)}
        defaultService={quoteModalService || SERVICES_LIST[0].title}
      />
    </>
  );
}
