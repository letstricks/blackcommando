"use client";

import React from "react";
import { ShieldCheck, Building2, Headset, Award } from "lucide-react";

export default function TrustStrip() {
  const stats = [
    {
      value: "500+",
      label: "Trained Guards",
      sub: "Police-verified & vetted",
      icon: ShieldCheck,
    },
    {
      value: "120+",
      label: "Sites Protected",
      sub: "Industries, malls & residences",
      icon: Building2,
    },
    {
      value: "24/7",
      label: "Tactical Support",
      sub: "Active control room dispatch",
      icon: Headset,
    },
    {
      value: "12+",
      label: "Years of Service",
      sub: "Discipline & proven vigilance",
      icon: Award,
    },
  ];

  return (
    <section className="relative z-20 bg-[#0c0d12] border-y border-white/10 py-10 overflow-hidden font-sans">
      {/* Background Subtle Radar Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={i}
                className={`pt-6 sm:pt-0 ${
                  i !== 0 ? "sm:pl-8" : ""
                } flex flex-col justify-center group cursor-default`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-red-500 group-hover:border-red-600/70 group-hover:bg-red-600/10 group-hover:scale-110 transition-all duration-300 shadow-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:text-red-500 transition-colors">
                    {st.value}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-neutral-200 tracking-wide uppercase">
                  {st.label}
                </h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  {st.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
