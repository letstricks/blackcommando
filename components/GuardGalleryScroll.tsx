"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShieldAlert, Radio, ShieldCheck, Award } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function GuardGalleryScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Armed Security Guard");

  const guardProfiles = [
    {
      id: "armed",
      title: "Armed Security Guard",
      code: "ROLE: ARMED-01",
      badge: "ARMED PROTECTION",
      badgeColor: "bg-red-600/20 text-red-400 border-red-600/40",
      icon: ShieldAlert,
      image: "/guard-armed.jpg",
      specs: [
        "Statutory Firearms License",
        "Cash Transit & High-Value Escort",
        "100% Police Verified Records",
      ],
      desc: "Specially trained and licensed armed personnel for banks, cash replenishment convoys, jewelry hubs, and high-risk industrial facilities.",
    },
    {
      id: "radio",
      title: "Tactical Patrol & Comms Officer",
      code: "ROLE: COMMS-02",
      badge: "24/7 WIRELESS LINK",
      badgeColor: "bg-amber-600/20 text-amber-400 border-amber-600/40",
      icon: Radio,
      image: "/guard-radio.jpg",
      specs: [
        "Direct 24/7 Control Room Comms",
        "Hourly Electronic Clock-In",
        "Rapid Backup Dispatch Protocol",
      ],
      desc: "Equipped with two-way VHF/UHF wireless transceivers maintaining constant contact with our central control room in Tiruppur.",
    },
    {
      id: "attention",
      title: "Commercial & Industrial Guard",
      code: "ROLE: STATIC-03",
      badge: "POST DISCIPLINE",
      badgeColor: "bg-blue-600/20 text-blue-400 border-blue-600/40",
      icon: ShieldCheck,
      image: "/guard-attention.jpg",
      specs: [
        "Material Gate-Pass Verification",
        "Strict Visitor Register Control",
        "Fire Safety & First Aid Trained",
      ],
      desc: "Vigilant front-gate security, worker shift frisking, vehicle inspection, and perimeter surveillance for factories and commercial campuses.",
    },
    {
      id: "salute",
      title: "Executive Protocol & Corporate Guard",
      code: "ROLE: PROTOCOL-04",
      badge: "CEREMONIAL SALUTE",
      badgeColor: "bg-emerald-600/20 text-emerald-400 border-emerald-600/40",
      icon: Award,
      image: "/guard-salute.jpg",
      specs: [
        "Front-Desk Concierge Etiquette",
        "VIP Executive Movement Escort",
        "Spotless Uniform Discipline",
      ],
      desc: "Courteous, dignified, and alert presence at corporate corporate office entrances, hospital main gates, and executive suites.",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleOpenQuote = (role: string) => {
    setSelectedRole(role);
    setIsQuoteOpen(true);
  };

  return (
    <section className="py-24 bg-[#08090c] border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Left/Right Scroll Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-red-500 font-bold mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              Real Personnel // Field Ready
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight uppercase">
              Security Force In Uniform
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-neutral-400 font-mono hidden sm:inline-block">
              SWIPE / SCROLL →
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full bg-neutral-900 border border-white/15 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors shadow-lg active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full bg-neutral-900 border border-white/15 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors shadow-lg active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Cards Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none focus:outline-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {guardProfiles.map((guard) => {
            const Icon = guard.icon;
            return (
              <div
                key={guard.id}
                className="snap-start shrink-0 w-[300px] sm:w-[340px] md:w-[370px] rounded-3xl bg-gradient-to-b from-[#13151f] to-[#0a0b10] border border-white/10 hover:border-red-600/70 transition-all duration-400 shadow-2xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo Display with High Quality Portrait Frame */}
                <div className="relative h-[340px] sm:h-[380px] w-full bg-gradient-to-b from-neutral-800 to-black overflow-hidden flex items-center justify-center">
                  <Image
                    src={guard.image}
                    alt={guard.title}
                    fill
                    sizes="(max-width: 768px) 320px, 370px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-105"
                  />
                  {/* Subtle vignette fade at the bottom of the photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#13151f] via-transparent to-black/20" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border backdrop-blur-md uppercase tracking-wider ${guard.badgeColor}`}>
                      {guard.badge}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-300 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10">
                      {guard.code}
                    </span>
                  </div>
                </div>

                {/* Content Dossier */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-red-500">
                      <Icon className="w-4 h-4" />
                      <span className="text-xs font-bold uppercase tracking-wider">Verified Personnel</span>
                    </div>

                    <h3 className="text-xl font-black text-white uppercase tracking-tight group-hover:text-red-400 transition-colors">
                      {guard.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mt-2">
                      {guard.desc}
                    </p>

                    {/* Specs List */}
                    <div className="space-y-1.5 pt-3 border-t border-white/10 mt-4 text-[11px] font-medium text-neutral-300">
                      {guard.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleOpenQuote(guard.title)}
                    className="w-full mt-4 py-3 rounded-xl bg-white/[0.04] hover:bg-red-600 text-white border border-white/15 hover:border-red-600 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Deployment</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedRole}
      />
    </section>
  );
}
