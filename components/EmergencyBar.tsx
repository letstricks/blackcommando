import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export default function EmergencyBar() {
  return (
    <div className="bg-[#08090c] border-b border-white/5 text-[11px] text-neutral-400 py-2 px-4 sm:px-8 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Status */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
          <span className="text-neutral-300 font-medium tracking-wide">
            24/7 Control Room Active • ISO 9001:2015 Certified
          </span>
        </div>

        {/* Right Contact Details (Matching Reference Header) */}
        <div className="hidden sm:flex items-center gap-6 font-normal">
          <a
            href="tel:+919440334046"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-red-500" />
            <span>+91 94403 34046</span>
          </a>

          <span className="text-neutral-700">|</span>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-red-500" />
            <span>P.N. Road, Tiruppur, TN</span>
          </div>

          <span className="text-neutral-700">|</span>

          <a
            href="mailto:contact@blackcatcommandosecurity.com"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3 text-red-500" />
            <span>contact@blackcatcommandosecurity.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
