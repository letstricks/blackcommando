"use client";

import React from "react";
import { Phone, MapPin, Mail, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export default function EmergencyBar() {
  return (
    <div className="bg-indigo-950 border-b border-vanilla-100/12 py-2 px-4 sm:px-6 text-xs text-indigo-200">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5">
        <div className="flex items-center gap-4 min-w-0">
          <div className="inline-flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status-live opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-status-live" />
            </span>
            <span className="font-mono font-semibold text-vanilla-50">
              24/7 Operations Control Room
            </span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1.5 font-mono text-indigo-300 shrink-0">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
            <span>
              {SITE_CONFIG.credentials.isoStandard} · Cert{" "}
              {SITE_CONFIG.credentials.certificateNo}
            </span>
          </span>
        </div>

        <div className="flex items-center gap-5 min-w-0 flex-wrap">
          <a
            href={SITE_CONFIG.contact.primaryPhoneHref}
            className="inline-flex items-center gap-1.5 font-mono font-semibold text-gold-300 hover:text-vanilla-50 transition-colors shrink-0 tabular-nums"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
            <span>{SITE_CONFIG.contact.primaryPhoneDisplay}</span>
          </a>

          <span className="hidden lg:inline-flex items-center gap-1.5 font-mono text-indigo-300 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-gold-400/85" strokeWidth={1.6} aria-hidden="true" />
            <span>518/418, P.N. Road, Tiruppur</span>
          </span>

          <a
            href={SITE_CONFIG.contact.emailHref}
            className="hidden sm:inline-flex items-center gap-1.5 font-mono text-indigo-300 hover:text-vanilla-50 transition-colors shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-gold-400/85" strokeWidth={1.6} aria-hidden="true" />
            <span>{SITE_CONFIG.contact.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
