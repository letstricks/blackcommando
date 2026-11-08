"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>("Armed & Unarmed Guards");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      num: "01",
      title: "Armed & Unarmed Guards",
      desc: "Uniformed, disciplined personnel for corporate offices, textile mills, and commercial campuses.",
    },
    {
      num: "02",
      title: "Residential Security",
      desc: "Gatekeeper access control, visitor register management, and round-the-clock perimeter patrol.",
    },
    {
      num: "03",
      title: "Event & VIP Crowd Security",
      desc: "Strategic crowd management, entry metal detection, and executive stage perimeter protection.",
    },
    {
      num: "04",
      title: "Industrial & Warehouse Security",
      desc: "Material gate-pass verification, shift labor frisking, and inventory loss prevention.",
    },
    {
      num: "05",
      title: "Corporate & Retail Security",
      desc: "Smart front-desk concierge reception, anti-pilferage surveillance, and visitor badge issuance.",
    },
    {
      num: "06",
      title: "Bodyguard & Escort Services",
      desc: "Discreet personal protection officers (PSO) and secure executive transit convoys.",
    },
    {
      num: "07",
      title: "Patrol & Quick Response Team",
      desc: "GPS-tracked mobile night patrol units with direct 24/7 command center dispatch.",
    },
    {
      num: "08",
      title: "Security Risk Consulting",
      desc: "Comprehensive physical site audits, CCTV vulnerability mapping, and emergency SOP design.",
    },
  ];

  const handleOpenQuote = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-28 bg-[#08090c] border-t border-white/5 font-sans relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 -left-40 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
            What We Do
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            Our Security Services
          </h2>
        </div>

        {/* Minimalist 8-Card Grid with 3D Hover Lift & Tactical Corner Crosshairs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {services.map((service, idx) => (
            <div
              key={service.num}
              onClick={() => handleOpenQuote(service.title)}
              className="card-dark tactical-corners rounded-2xl p-8 flex flex-col justify-between cursor-pointer group hover:border-red-600/70 transition-all duration-400 relative overflow-hidden"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/15 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className="text-3xl sm:text-4xl font-black text-red-500 group-hover:scale-110 transition-transform origin-left">
                    {service.num}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-300 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-red-400 transition-colors leading-snug relative z-10">
                  {service.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed font-light relative z-10">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm text-neutral-400 group-hover:text-white font-medium transition-colors relative z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
                  Request Assessment
                </span>
                <span className="text-red-500 font-bold text-base group-hover:translate-x-1.5 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}
