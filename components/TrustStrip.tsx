"use client";

import React from "react";
import { ShieldCheck, Award, FileCheck2, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock } from "./MotionPrimitives";

export default function TrustStrip() {
  const pillars = [
    {
      title: SITE_CONFIG.credentials.isoStandard,
      subtitle: "Certified QMS",
      detail: SITE_CONFIG.credentials.certificateNo,
      icon: Award,
    },
    {
      title: "Police-Verified",
      subtitle: "Vetted Force",
      detail: "Permanent ID Dossiers",
      icon: ShieldCheck,
    },
    {
      title: "PF & ESI",
      subtitle: "Statutory Compliance",
      detail: `SAC ${SITE_CONFIG.credentials.sac} · GST Registered`,
      icon: FileCheck2,
    },
    {
      title: "24/7 Support",
      subtitle: "Active Supervision",
      detail: "P.N. Road, Tiruppur HQ",
      icon: Clock,
    },
  ];

  return (
    <section
      aria-label="Verified credentials and commitments"
      className="light-surface relative bg-vanilla-100 border-b border-indigo-800/15"
    >
      <RevealBlock className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-indigo-800/12">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="px-6 py-7 flex items-center gap-4 hover:bg-vanilla-50/70 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-full bg-indigo-800/8 flex items-center justify-center text-indigo-800 shrink-0">
                  <Icon className="w-4 h-4" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="font-display text-lg font-bold text-indigo-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-xs font-semibold text-indigo-700 mt-0.5">
                    {item.subtitle}
                  </div>
                  <div className="font-mono text-[11px] text-indigo-600 mt-0.5">
                    {item.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </RevealBlock>
    </section>
  );
}
