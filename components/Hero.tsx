"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import QuoteModal from "./QuoteModal";

export default function Hero() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  // Mouse move parallax tracker
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2; // -1 to 1
      setMousePos({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[94vh] flex flex-col justify-between overflow-hidden bg-[#08090c] select-none"
      >
        {/* Parallax Background Operative Image (Subtle 3D Mouse + Scroll Shift) */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat bg-right lg:bg-[right_10%] opacity-90 will-change-transform pointer-events-none transition-transform duration-300 ease-out"
          style={{
            backgroundImage: "url('/hero-operative.jpg')",
            transform: `translate3d(${mousePos.x * -18}px, ${scrollY * 0.35 + mousePos.y * -14}px, 0) scale(1.06)`,
          }}
        />

        {/* Tactical Scanning Radar Grid Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)",
            backgroundSize: "40px 40px",
            transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 8}px, 0)`,
          }}
        />

        {/* Tactical Scanning Laser Bar (Slow Vertical Sweep) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-25 z-0">
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent blur-[1px] animate-scanline" />
        </div>

        {/* Ambient Pulsing Red Glow on the Right */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none animate-pulse-slow" />

        {/* Gradient Overlays: Deep pure black on left and bottom for razor-sharp typography */}
        <div className="absolute inset-0 hero-gradient-overlay pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-48 hero-bottom-fade pointer-events-none" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 sm:pt-24 pb-14 flex-grow flex flex-col justify-center">
          <div className="w-full max-w-2xl lg:max-w-3xl space-y-6">
            
            {/* Top Telemetry & Official Insignia Pill */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Official Logo Badge Pill with Float Animation */}
              <div
                className="inline-flex items-center gap-3.5 px-4 py-2 rounded-full bg-black/85 border border-white/20 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-red-600/80 hover:shadow-red-600/20"
                style={{
                  transform: `translate3d(${mousePos.x * 8}px, ${mousePos.y * 6}px, 0)`,
                }}
              >
                {/* Official Black Cat Commando Logo Image */}
                <div className="relative w-9 h-9 rounded-full bg-black border border-red-600 p-0.5 flex items-center justify-center shrink-0 shadow-lg">
                  <Image
                    src="/logo-white.png"
                    alt="Black Cat Commando Security Force"
                    width={34}
                    height={34}
                    className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]"
                    priority
                  />
                  {/* Glowing Radar Pulse Dot */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600 border border-white"></span>
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                  <span className="text-xs sm:text-sm font-black tracking-wider text-white uppercase font-sans whitespace-nowrap">
                    BLACK CAT COMMANDO SECURITY FORCE
                  </span>
                  <span className="text-neutral-500 hidden sm:inline">•</span>
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-wide whitespace-nowrap">
                    ISO 9001:2015 CERTIFIED
                  </span>
                </div>
              </div>

              {/* Tactical Status Beacon Pill */}
              <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/40 border border-red-600/30 text-[11px] font-bold text-red-400 uppercase tracking-wider backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                <span>Command Active // 24/7 Patrol</span>
              </div>
            </div>

            {/* Kicker Sentence */}
            <p className="text-base sm:text-lg text-neutral-300 font-medium tracking-wide">
              Confidentiality and vigilance are our strong points.
            </p>

            {/* Main Headline (Bigger, Bolder Arial Typeface) */}
            <h1
              className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.04] uppercase transition-transform duration-300 ease-out"
              style={{
                transform: `translate3d(${mousePos.x * 5}px, ${mousePos.y * 4}px, 0)`,
              }}
            >
              Security Force
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-neutral-300 font-normal leading-relaxed max-w-xl">
              Professional, disciplined security services for businesses, residences and events. 
              Vigilance you can trust, protection you can count on.
            </p>

            {/* Action Buttons: Accent Deep Red & Monochrome Outline with Hover Lift & Glow */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsQuoteOpen(true)}
                className="relative overflow-hidden group px-9 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-sm sm:text-base uppercase tracking-wider transition-all shadow-xl shadow-red-600/40 hover:shadow-red-600/70 hover:scale-105 active:scale-95"
              >
                {/* Shimmer Light Reflection Effect */}
                <span className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <span className="relative z-10 flex items-center gap-2">
                  <span>Contact Us</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </button>

              <Link
                href="/services"
                className="px-9 py-4 rounded-full border-2 border-white/40 hover:border-white text-white font-black text-sm sm:text-base uppercase tracking-wider hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom 4 Numbered Pillars with Hover Scale & Deep Red Accents */}
        <div className="relative z-10 border-t border-white/10 bg-[#08090c]/90 backdrop-blur-md py-9">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* 01. Reliability */}
              <div className="relative group space-y-2 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300">
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-black text-lg group-hover:scale-110 transition-transform origin-left">01.</span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">Reliability</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Police-verified, background-checked and thoroughly trained personnel.
                </p>
              </div>

              {/* 02. Vigilance */}
              <div className="relative group space-y-2 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300">
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-black text-lg group-hover:scale-110 transition-transform origin-left">02.</span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">Vigilance</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  24/7 command center, strict post discipline, and electronic shift rounds.
                </p>
              </div>

              {/* 03. Transparency */}
              <div className="relative group space-y-2 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300">
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-black text-lg group-hover:scale-110 transition-transform origin-left">03.</span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">Transparency</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  ISO 9001:2015 certified standard, statutory compliance, and honest pricing.
                </p>
              </div>

              {/* 04. Rapid Response */}
              <div className="relative group space-y-2 p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300">
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-black text-lg group-hover:scale-110 transition-transform origin-left">04.</span>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-wide group-hover:text-red-400 transition-colors">Rapid Response</h4>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  Immediate supervisory dispatch and mobile quick response teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
