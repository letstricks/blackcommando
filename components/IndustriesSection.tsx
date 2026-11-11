"use client";

import React from "react";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function IndustriesSection() {
  const industries = [
    {
      num: "01",
      name: "Factories & Textile Mills",
      detail: "Gate-pass control, shift worker frisking, and scrap loss prevention.",
    },
    {
      num: "02",
      name: "Corporate Offices & IT",
      detail: "Front-desk concierge, visitor passes, and after-hours lockup.",
    },
    {
      num: "03",
      name: "Residential Societies",
      detail: "Vehicle gate logs, resident verification, and night perimeter patrols.",
    },
    {
      num: "04",
      name: "Hospitals & Healthcare",
      detail: "Emergency bay clearance, visitor regulation, and staff protection.",
    },
    {
      num: "05",
      name: "Schools & Colleges",
      detail: "Campus entry/exit discipline and unauthorized visitor screening.",
    },
    {
      num: "06",
      name: "Malls & Retail Showrooms",
      detail: "Anti-pilferage floor watch, baggage checks, and crowd flow control.",
    },
    {
      num: "07",
      name: "Banks & Financial Hubs",
      detail: "Armed guards, vault watch, and cash transit escort.",
    },
    {
      num: "08",
      name: "Construction Sites",
      detail: "Machinery night watch, material delivery logging, and labor passes.",
    },
    {
      num: "09",
      name: "Events & Conventions",
      detail: "VIP green-room escort, entry screening, and emergency aisle access.",
    },
  ];

  return (
    <section
      id="industries"
      className="py-20 sm:py-24 bg-indigo-900 border-b border-vanilla-100/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-indigo-300 tracking-wide">
              08 · Sector Coverage
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
              Industries we protect
            </h2>
          </div>
          <p className="text-sm sm:text-base text-indigo-200 max-w-md leading-relaxed">
            Post instructions tailored to each site's operating hours, cargo
            movement, and visitor density.
          </p>
        </RevealBlock>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <StaggerItem
              key={ind.num}
              className="rounded-xl bg-indigo-800 border border-vanilla-100/12 p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-indigo-400 tabular-nums block mb-3">
                  {ind.num}
                </span>
                <h3 className="font-display text-lg font-semibold text-vanilla-100 mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm text-indigo-300 leading-relaxed">
                  {ind.detail}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-vanilla-100/10 text-xs font-mono text-indigo-400">
                Dedicated Post Protocol
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
