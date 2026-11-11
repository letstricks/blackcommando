"use client";

import React from "react";
import Image from "next/image";
import { Radio, ShieldCheck, CheckCircle2 } from "lucide-react";
import {
  RevealBlock,
  SplitHeadline,
  ParallaxMedia,
} from "./MotionPrimitives";

export default function OperationsShowcase() {
  return (
    <section
      id="operations"
      className="relative overflow-hidden bg-indigo-950 border-b border-vanilla-100/12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-vanilla-100/12">
        <div className="space-y-2 max-w-2xl">
          <p className="font-mono text-xs text-gold-300 tracking-[0.16em] uppercase">
            Field Operations
          </p>
          <SplitHeadline
            as="h2"
            text="Supervised deployment from gatehouse to perimeter"
            className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-vanilla-50 leading-[1.06]"
          />
        </div>
        <p className="text-sm text-indigo-200 max-w-sm">
          Supported by day and night supervisory checks, scheduled shift
          relievers, and our Tiruppur 24/7 operations desk.
        </p>
      </div>

      {/* Seamless Edge-to-Edge 1px Hairline Media Mosaic */}
      <RevealBlock className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-px bg-vanilla-100/15">
        <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] overflow-hidden bg-indigo-950">
          <ParallaxMedia yRange={24} className="absolute inset-0">
            <Image
              src="/guard-squad.jpg"
              alt="Black Cat Commando Security Force uniformed squadron parade muster"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />
          </ParallaxMedia>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(23,25,45,0.16) 0%, rgba(23,25,45,0.52) 55%, rgba(23,25,45,0.92) 100%)",
            }}
          />

          <div className="relative z-10 h-full min-h-[380px] sm:min-h-[460px] p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-gold-300 inline-flex items-center gap-2 bg-indigo-950/75 px-3 py-1 rounded">
                <Radio className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                <span>Tiruppur HQ · Mobile Supervision</span>
              </span>
              <span className="font-mono text-xs text-status-live bg-indigo-950/75 px-3 py-1 rounded">
                Open 24 Hours
              </span>
            </div>

            <div className="max-w-lg">
              <p className="font-mono text-[11px] text-gold-300 mb-1.5">
                Field Command &amp; Reliever Audits
              </p>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-vanilla-50 leading-tight">
                24/7 supervisory rounds &amp; gate checks
              </h3>
              <p className="mt-2 text-sm text-indigo-200">
                Day and night inspections across spinning mills, plants,
                warehouses, and gated communities.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 gap-px bg-vanilla-100/15">
          <div className="relative min-h-[225px] overflow-hidden bg-indigo-950">
            <ParallaxMedia yRange={18} className="absolute inset-0">
              <Image
                src="/command-center.jpg"
                alt="Security surveillance and gate monitoring array"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(23,25,45,0.22) 0%, rgba(23,25,45,0.88) 100%)",
              }}
            />
            <div className="relative z-10 h-full min-h-[225px] p-7 flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] text-gold-300">
                  Access Control
                </p>
                <h3 className="font-display text-xl font-bold text-vanilla-50">
                  Visitor &amp; material pass logging
                </h3>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" aria-hidden="true" />
            </div>
          </div>

          <div className="relative min-h-[225px] overflow-hidden bg-indigo-950">
            <ParallaxMedia yRange={18} className="absolute inset-0">
              <Image
                src="/hero-security.jpg"
                alt="High-security vault and perimeter access protection"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(23,25,45,0.22) 0%, rgba(23,25,45,0.88) 100%)",
              }}
            />
            <div className="relative z-10 h-full min-h-[225px] p-7 flex items-end justify-between gap-3">
              <div>
                <p className="font-mono text-[11px] text-gold-300">
                  Asset Safeguard
                </p>
                <h3 className="font-display text-xl font-bold text-vanilla-50">
                  Strict perimeter &amp; lockup discipline
                </h3>
              </div>
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>
      </RevealBlock>
    </section>
  );
}
