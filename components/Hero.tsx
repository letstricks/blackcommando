"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

const PILLARS = [
  {
    num: "01",
    title: "Reliability",
    desc: "Police-verified, background-checked, and thoroughly trained personnel.",
  },
  {
    num: "02",
    title: "Vigilance",
    desc: "24/7 command center, strict post discipline, and logged shift handovers.",
  },
  {
    num: "03",
    title: "Transparency",
    desc: "ISO 9001:2015 certified standards, PF/ESI compliance, and clear tariffs.",
  },
  {
    num: "04",
    title: "Rapid Response",
    desc: "Immediate supervisory dispatch and mobile quick response teams.",
  },
] as const;

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-indigo-800 border-b border-vanilla-100/10">
        {/* Operational visual blended softly into Midnight Indigo */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/hero-operative.jpg"
            alt="Executive security officer in tailored uniform on stair patrol"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-55"
          />
          <div className="absolute inset-0 hero-indigo-scrim" />
          <div className="absolute inset-x-0 bottom-0 h-40 hero-indigo-bottom" />
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-24 pb-16 flex-grow flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
            className="w-full max-w-2xl space-y-6"
          >
            {/* Accreditation Meta Row */}
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-lg bg-indigo-900/90 border border-vanilla-100/15 text-xs font-mono text-vanilla-200 tabular-nums">
              <span
                className="w-2 h-2 rounded-full bg-status-live"
                aria-hidden="true"
              />
              <span>
                {SITE_CONFIG.credentials.isoStandard} Certified · Reg{" "}
                {SITE_CONFIG.credentials.certificateNo}
              </span>
            </div>

            {/* Kicker */}
            <p className="text-sm sm:text-base text-indigo-200 font-medium">
              {SITE_CONFIG.tagline}
            </p>

            {/* Primary Display Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[-0.03em] text-vanilla-100 leading-[1.04]">
              Black Cat Commando Security Force
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-indigo-200 leading-relaxed max-w-xl">
              Disciplined, police-verified security personnel for textile mills,
              industrial plants, residences, and executive protection across
              Tiruppur and Tamil Nadu.
            </p>

            {/* Primary & Secondary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <motion.button
                type="button"
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                onClick={() => setIsQuoteOpen(true)}
                className="h-12 px-6 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 font-semibold text-sm inline-flex items-center gap-2 transition-colors duration-150 cursor-pointer"
              >
                <span>Request Free Assessment</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
              </motion.button>

              <Link
                href="/services"
                className="h-12 px-6 rounded-lg bg-indigo-900/80 hover:bg-indigo-700 border border-vanilla-100/25 text-vanilla-100 font-medium text-sm inline-flex items-center transition-colors duration-150"
              >
                Explore Services
              </Link>
            </div>

            {/* Quiet direct download link for official service quotation */}
            <div className="pt-1">
              <a
                href={SITE_CONFIG.documents[0].href}
                download={SITE_CONFIG.documents[0].fileName}
                className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-vanilla-100 transition-colors duration-150 underline underline-offset-4 decoration-vanilla-100/30"
              >
                <FileDown className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                <span>
                  Download Standard Service Agreement & Quotation ({SITE_CONFIG.documents[0].fileName})
                </span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom 4 Pillars */}
        <div className="relative z-10 border-t border-vanilla-100/12 bg-indigo-900/95">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.12, ease: EDITORIAL_EASE }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="space-y-2 sm:border-l sm:first:border-l-0 sm:pl-6 sm:first:pl-0 border-vanilla-100/10"
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs text-indigo-400 tabular-nums">
                      {pillar.num}
                    </span>
                    <h2 className="font-display text-base font-semibold text-vanilla-100">
                      {pillar.title}
                    </h2>
                  </div>
                  <p className="text-sm text-indigo-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
