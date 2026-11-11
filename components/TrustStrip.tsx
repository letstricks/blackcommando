"use client";

import React from "react";
import { ShieldCheck, Building2, Headset, Award } from "lucide-react";
import { StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function TrustStrip() {
  const stats = [
    {
      value: "500+",
      label: "Trained Guards",
      sub: "Police-verified and vetted personnel",
      icon: ShieldCheck,
    },
    {
      value: "120+",
      label: "Sites Protected",
      sub: "Textile mills, plants, and residences",
      icon: Building2,
    },
    {
      value: "24/7",
      label: "Control Room",
      sub: "Active Tiruppur supervisory dispatch",
      icon: Headset,
    },
    {
      value: "12+",
      label: "Years of Service",
      sub: "Consistent discipline across Tamil Nadu",
      icon: Award,
    },
  ];

  return (
    <section className="bg-indigo-950 border-b border-vanilla-100/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <StaggerItem
                key={st.label}
                className={`flex flex-col justify-start ${
                  idx !== 0 ? "lg:border-l lg:border-vanilla-100/10 lg:pl-8" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-indigo-900 border border-vanilla-100/15 flex items-center justify-center text-vanilla-200 shrink-0">
                    <Icon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <span className="font-display text-3xl sm:text-4xl font-semibold text-vanilla-100 tracking-tight tabular-nums">
                    {st.value}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-vanilla-100">
                  {st.label}
                </h3>
                <p className="text-xs text-indigo-400 mt-1 leading-relaxed">
                  {st.sub}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>
    </section>
  );
}
