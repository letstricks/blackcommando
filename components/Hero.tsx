"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, ShieldCheck } from "lucide-react";
import QuoteModal from "./QuoteModal";
import TacticalCanvasBackdrop from "./TacticalCanvasBackdrop";
import { SITE_CONFIG } from "@/lib/site-data";
import {
  EDITORIAL_EASE,
  SplitHeadline,
  ParallaxBackdrop,
  ParallaxMedia,
  MagneticWrap,
} from "./MotionPrimitives";

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-indigo-800 pt-10 sm:pt-14 lg:pt-16">
        {/* Radial Midnight Indigo Studio Atmosphere */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(70% 65% at 72% 45%, rgba(50, 54, 91, 0.72) 0%, rgba(40, 43, 74, 0.92) 55%, rgba(23, 25, 45, 1) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Interactive Canvas Radar Field + Slow Grid Parallax */}
        <div className="absolute inset-0 z-0 opacity-75">
          <TacticalCanvasBackdrop />
        </div>
        <ParallaxBackdrop range={48} className="absolute inset-0 indigo-grid-bg opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Editorial Hierarchy */}
            <div className="lg:col-span-6 space-y-7 pt-2">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                className="inline-flex items-center gap-3"
              >
                <span className="w-7 h-[2px] rounded-full bg-gold-400" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-vanilla-100 font-semibold">
                  {SITE_CONFIG.credentials.isoStandard} Certified
                </span>
              </motion.div>

              <div className="space-y-1">
                <SplitHeadline
                  immediate
                  text="Discipline."
                  className="font-display text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] text-vanilla-50 leading-[1.03]"
                />
                <SplitHeadline
                  immediate
                  text="Vigilance."
                  className="font-display text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] text-vanilla-50 leading-[1.03]"
                />
                <SplitHeadline
                  immediate
                  text="Protection."
                  className="font-display text-5xl sm:text-6xl lg:text-[68px] font-bold tracking-[-0.03em] text-gold-400 leading-[1.03]"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.16, ease: EDITORIAL_EASE }}
                className="text-base sm:text-lg text-indigo-200 leading-relaxed max-w-lg"
              >
                Comprehensive security solutions for industries, estates, events
                and commercial establishments across Tamil Nadu.
              </motion.p>

              {/* Action Row Matching Reference Pill Layout */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.48, delay: 0.22, ease: EDITORIAL_EASE }}
                className="flex flex-wrap items-center gap-3.5 pt-1"
              >
                <MagneticWrap>
                  <motion.button
                    type="button"
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setIsQuoteOpen(true)}
                    className="relative overflow-hidden shimmer-on-hover h-12 px-7 rounded-xl bg-gold-400 hover:bg-gold-300 text-indigo-950 font-bold text-sm inline-flex items-center gap-2.5 transition-colors duration-150 cursor-pointer shadow-xl"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </motion.button>
                </MagneticWrap>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
                  href={SITE_CONFIG.documents[0].href}
                  download={SITE_CONFIG.documents[0].fileName}
                  className="h-12 px-6 rounded-xl glass-indigo-soft hover:border-gold-400/50 text-vanilla-50 font-semibold text-sm inline-flex items-center gap-2.5 transition-colors duration-150"
                >
                  <FileDown className="w-4 h-4 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
                  <span>Quotation PDF</span>
                </motion.a>
              </motion.div>

              {/* Verified Registry Strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3, ease: EDITORIAL_EASE }}
                className="pt-4 border-t border-vanilla-100/12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-indigo-300"
              >
                <span className="inline-flex items-center gap-2 text-vanilla-100">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
                  <span>Cert {SITE_CONFIG.credentials.certificateNo}</span>
                </span>
                <span>GST {SITE_CONFIG.credentials.gst}</span>
                <span>{SITE_CONFIG.address.city}, Tamil Nadu</span>
              </motion.div>
            </div>

            {/* Right Commander Visual Framed by Animated Sovereign Gold Shield Crest */}
            <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-[4/4.35] flex items-end justify-center">
                {/* Animated Thin Gold Vector Shield Crest */}
                <svg
                  viewBox="0 0 420 460"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -inset-2 sm:-inset-4 w-[calc(100%+16px)] sm:w-[calc(100%+32px)] h-[calc(100%+16px)] sm:h-[calc(100%+32px)] pointer-events-none z-10"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="heroShieldGrad" x1="210" y1="18" x2="210" y2="440" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F0CD82" stopOpacity="0.95" />
                      <stop offset="55%" stopColor="#E2B45A" stopOpacity="0.58" />
                      <stop offset="100%" stopColor="#282B4A" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M210 18L36 82V218C36 330 112 414 210 442C308 414 384 330 384 218V82L210 18Z"
                    stroke="url(#heroShieldGrad)"
                    strokeWidth="2.4"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.35, ease: EDITORIAL_EASE }}
                  />
                  <motion.path
                    d="M210 42L60 96V216C60 310 124 382 210 408C296 382 360 310 360 216V96L210 42Z"
                    stroke="rgba(238,235,218,0.16)"
                    strokeWidth="1"
                    strokeLinejoin="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.4 }}
                  />
                </svg>

                {/* Studio Commander Portrait Blended Into Midnight Indigo */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: EDITORIAL_EASE }}
                  className="relative z-10 w-[78%] h-[88%] mb-2 rounded-3xl overflow-hidden"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(66% 74% at 50% 48%, #000 54%, transparent 94%)",
                    maskImage:
                      "radial-gradient(66% 74% at 50% 48%, #000 54%, transparent 94%)",
                  }}
                >
                  <ParallaxMedia yRange={18} className="w-full h-full">
                    <Image
                      src="/hero-commander.jpg"
                      alt="Black Cat Commando Security Force tactical commander"
                      fill
                      priority
                      unoptimized
                      sizes="(max-width: 1024px) 90vw, 480px"
                      className="object-cover object-top"
                    />
                  </ParallaxMedia>
                </motion.div>

                {/* Subtle Frosted Glass Dispatch Pill */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.36, ease: EDITORIAL_EASE }}
                  className="absolute bottom-5 right-3 sm:right-6 z-20 px-4 py-2.5 rounded-2xl glass-indigo border border-gold-400/30 shadow-2xl"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-status-live" aria-hidden="true" />
                    <div className="leading-tight">
                      <span className="block text-xs font-bold text-vanilla-50">
                        Tiruppur Command HQ
                      </span>
                      <span className="block font-mono text-[10px] text-gold-300 mt-0.5">
                        SAC {SITE_CONFIG.credentials.sac} · Open 24 Hours
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Curved Transition Wave Into Vanilla (#EEEBDA) */}
        <div className="relative z-20 w-full leading-none -mb-px" aria-hidden="true">
          <svg
            viewBox="0 0 1440 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-10 sm:h-14 lg:h-[72px] block"
          >
            <path
              d="M0 44C260 12 620 62 1040 34C1240 20 1365 6 1440 0V72H0V44Z"
              fill="#EEEBDA"
            />
          </svg>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
