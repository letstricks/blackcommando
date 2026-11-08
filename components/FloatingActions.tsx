"use client";

import React, { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function FloatingActions() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const whatsappText = encodeURIComponent(
    "Hello Black Cat Commando Security Force, I would like to inquire about security services."
  );

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-5 z-40 flex flex-col items-end gap-2.5 sm:gap-3 select-none font-sans">
        {/* Floating Quick Assessment Pill (Desktop & Tablet only to avoid interrupting mobile viewport) */}
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="hidden md:inline-flex relative overflow-hidden group px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl shadow-red-600/50 hover:shadow-red-600/80 transition-all hover:scale-105 active:scale-95"
        >
          {/* Shimmer Effect */}
          <span className="absolute inset-0 w-1/2 h-full bg-white/25 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700 pointer-events-none" />
          <span className="relative z-10 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            Get Free Assessment
          </span>
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/919440334046?text=${whatsappText}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 transition-all hover:scale-110 active:scale-95"
        >
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5 sm:h-3 sm:w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-white" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+919440334046"
          aria-label="Call"
          className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#12141d]/90 backdrop-blur-sm border border-white/20 text-white shadow-xl hover:bg-red-600 hover:border-red-600 transition-all hover:scale-105 active:scale-95"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
