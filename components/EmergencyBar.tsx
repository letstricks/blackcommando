import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function EmergencyBar() {
  return (
    <div className="bg-indigo-950 border-b border-vanilla-100/10 text-xs text-indigo-300 py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-status-live shrink-0"
            aria-hidden="true"
          />
          <span className="text-vanilla-100 font-medium">
            24/7 Control Room Active
          </span>
          <span className="text-indigo-400 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          <span className="text-indigo-300 font-mono text-[11px] hidden sm:inline tabular-nums">
            {SITE_CONFIG.credentials.isoStandard}
          </span>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={SITE_CONFIG.contact.primaryPhoneHref}
            className="flex items-center gap-2 text-indigo-300 hover:text-vanilla-100 transition-colors tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-vanilla-200" strokeWidth={1.5} aria-hidden="true" />
            <span>{SITE_CONFIG.contact.primaryPhoneDisplay}</span>
          </a>

          <span className="text-indigo-600" aria-hidden="true">|</span>

          <div className="flex items-center gap-2 text-indigo-300">
            <MapPin className="w-3.5 h-3.5 text-vanilla-200" strokeWidth={1.5} aria-hidden="true" />
            <span>{SITE_CONFIG.address.short}</span>
          </div>

          <span className="text-indigo-600" aria-hidden="true">|</span>

          <a
            href={SITE_CONFIG.contact.emailHref}
            className="flex items-center gap-2 text-indigo-300 hover:text-vanilla-100 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-vanilla-200" strokeWidth={1.5} aria-hidden="true" />
            <span>{SITE_CONFIG.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
