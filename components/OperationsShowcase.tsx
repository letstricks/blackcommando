"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Shield, Eye, Radio, Users, ArrowUpRight } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function OperationsShowcase() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(
    "Armed & Unarmed Guards"
  );

  const operations = [
    {
      id: "command",
      title: "24/7 Central Command & Control",
      category: "Command Center",
      desc: "Centralized monitoring, shift attendance verification, and rapid incident dispatch operating 24 hours a day, 365 days a year.",
      image: "/command-center.jpg",
      icon: Eye,
      metric: "24/7 Dispatch",
    },
    {
      id: "industrial",
      title: "Industrial & Textile Mill Patrols",
      category: "Perimeter Security",
      desc: "Gate-pass verification, textile mill night rounds, shift frisking, and material loss prevention protocols.",
      image: "/industrial-patrol.jpg",
      icon: Shield,
      metric: "120+ Sites Secured",
    },
    {
      id: "vip",
      title: "Executive Protection & Escort",
      category: "Close Protection",
      desc: "Personal security officers (PSO), executive convoy transit, and discreet close protection for corporate leadership.",
      image: "/vip-escort.jpg",
      icon: Radio,
      metric: "Trained PSOs",
    },
    {
      id: "squad",
      title: "Trained Force & Shift Inspection",
      category: "Force Discipline",
      desc: "Daily muster parade, uniform inspection, fire-drill readiness, and strict post discipline across every site.",
      image: "/guard-squad.jpg",
      icon: Users,
      metric: "Police Verified",
    },
  ];

  const handleOpenQuote = (title: string) => {
    setSelectedService(title);
    setIsQuoteOpen(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-indigo-900 border-b border-vanilla-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-indigo-300 tracking-wide">
              04 · Field Operations
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
              Vigilance in action across Tamil Nadu
            </h2>
          </div>
          <p className="text-sm sm:text-base text-indigo-200 max-w-md leading-relaxed">
            Structured field procedures spanning manufacturing units, executive
            transit, and centralized supervision.
          </p>
        </RevealBlock>

        <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <StaggerItem key={op.id}>
                <button
                  type="button"
                  onClick={() => handleOpenQuote(op.title)}
                  className="group relative w-full text-left rounded-2xl overflow-hidden border border-vanilla-100/12 hover:border-vanilla-100/35 bg-indigo-950 flex flex-col justify-end min-h-[380px] sm:min-h-[420px] transition-[border-color] duration-150 cursor-pointer"
                >
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={op.image}
                      alt={op.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center opacity-80 group-hover:opacity-90 transition-opacity duration-200"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/75 to-indigo-950/20" />
                  </div>

                  <div className="relative z-10 p-6 sm:p-8 space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-200">
                        <Icon className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                        <span>{op.category}</span>
                        <span className="text-indigo-400" aria-hidden="true">
                          ·
                        </span>
                        <span className="text-vanilla-100">{op.metric}</span>
                      </div>

                      <div className="w-9 h-9 rounded-lg bg-indigo-900/90 border border-vanilla-100/20 flex items-center justify-center text-vanilla-100 group-hover:bg-vanilla-100 group-hover:text-indigo-800 transition-colors duration-150 shrink-0">
                        <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-vanilla-100 leading-snug">
                      {op.title}
                    </h3>

                    <p className="text-sm text-indigo-200 leading-relaxed max-w-xl">
                      {op.desc}
                    </p>
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGrid>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}
