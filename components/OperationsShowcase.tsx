"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Radio, Users, ArrowUpRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function OperationsShowcase() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Armed & Unarmed Guards");

  const operations = [
    {
      id: "command",
      title: "24/7 Central Command & Control",
      category: "COMMAND CENTER",
      tag: "REAL-TIME MONITORING",
      desc: "Centralized CCTV video wall, GPS patrol monitoring, and instant incident dispatch operating 24 hours a day, 365 days a year.",
      image: "/command-center.jpg",
      icon: Eye,
      metric: "24/7 Command Active",
    },
    {
      id: "industrial",
      title: "Industrial & Manufacturing Patrols",
      category: "PERIMETER SECURITY",
      tag: "LOSS PREVENTION",
      desc: "Rigorous gate-pass controls, textile mill night patrols, shift labor frisking, and material theft prevention protocols.",
      image: "/industrial-patrol.jpg",
      icon: Shield,
      metric: "120+ Sites Secured",
    },
    {
      id: "vip",
      title: "Executive Protection & VIP Escort",
      category: "CLOSE PROTECTION",
      tag: "DISCREET TRANSIT",
      desc: "Tailored personal security officers (PSO), VIP convoy movement, and discreet armed/unarmed executive bodyguards.",
      image: "/vip-escort.jpg",
      icon: Radio,
      metric: "Elite Trained PSOs",
    },
    {
      id: "squad",
      title: "Trained Force & Shift Inspection",
      category: "FORCE DISCIPLINE",
      tag: "VERIFIED PERSONNEL",
      desc: "Daily muster parade, uniform inspection, emergency fire-drill readiness, and strict post discipline across all deployments.",
      image: "/guard-squad.jpg",
      icon: Users,
      metric: "100% Police Verified",
    },
  ];

  const handleOpenQuote = (title: string) => {
    setSelectedService(title);
    setIsQuoteOpen(true);
  };

  return (
    <section className="py-28 bg-[#090a0f] border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-red-500 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              Field Deployments // Live Visuals
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
              Vigilance In Action
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-300 max-w-md font-light leading-relaxed">
            Real photography from our operational deployments across Tamil Nadu — from modern textile facilities to 24/7 command centers.
          </p>
        </div>

        {/* 4 Large Visual Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {operations.map((op) => {
            const Icon = op.icon;
            return (
              <div
                key={op.id}
                onClick={() => handleOpenQuote(op.title)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 hover:border-red-600/70 transition-all duration-500 bg-[#0e1017] flex flex-col justify-end min-h-[420px] sm:min-h-[460px] cursor-pointer shadow-2xl hover:shadow-red-600/10"
              >
                {/* Photo Background with Zoom & Parallax */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={op.image}
                    alt={op.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90 group-hover:brightness-100"
                  />
                  {/* Cinematic Dark Gradient Layers for perfect text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/75 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#08090c]/85 via-transparent to-transparent" />
                </div>

                {/* Top Badge Indicators */}
                <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-[11px] font-bold text-white uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>{op.category}</span>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-white group-hover:bg-red-600 group-hover:border-red-600 transition-colors shadow-lg">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-500 tracking-widest uppercase">
                    <Icon className="w-4 h-4" />
                    <span>{op.tag}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="text-neutral-300 font-mono">{op.metric}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight group-hover:text-red-400 transition-colors">
                    {op.title}
                  </h3>

                  <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-xl">
                    {op.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:text-red-400 transition-colors">
                    <span>Deploy This Service</span>
                    <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>

                {/* Hover Bottom Glowing Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
              </div>
            );
          })}
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}
