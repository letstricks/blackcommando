"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, FileDown } from "lucide-react";
import Logo from "./Logo";
import { SITE_CONFIG } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 border-t border-vanilla-100/12 pt-16 pb-10 text-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-vanilla-100/10">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <Logo className="w-10 h-10" />
              <div className="leading-none">
                <span className="font-display font-bold text-base text-vanilla-50 block">
                  Black Cat Commando
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-gold-300 block mt-1">
                  Security Force · Tiruppur
                </span>
              </div>
            </Link>
            <p className="text-sm text-indigo-200 leading-relaxed max-w-sm">
              {SITE_CONFIG.tagline} {SITE_CONFIG.credentials.isoStandard}{" "}
              certified private security agency serving Tamil Nadu 24/7.
            </p>
            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.documents.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.href}
                  download={doc.fileName}
                  className="h-9 px-3.5 rounded-xl glass-indigo-soft hover:border-gold-400/50 text-xs font-semibold text-vanilla-50 inline-flex items-center gap-1.5 transition-colors"
                >
                  <FileDown className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                  <span>{doc.shortTitle}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold-300">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-vanilla-50 transition-colors">
                  Services &amp; Capabilities
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-vanilla-50 transition-colors">
                  About &amp; Official Documents
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-vanilla-50 transition-colors">
                  Operational Standards
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-vanilla-50 transition-colors">
                  Sectors Protected
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-vanilla-50 transition-colors">
                  Guard Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-vanilla-50 transition-colors">
                  Contact &amp; Map
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-gold-300">
              24/7 Operations Center
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{SITE_CONFIG.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5 font-mono tabular-nums">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.contact.primaryPhoneHref}
                  className="text-vanilla-50 hover:text-gold-300 transition-colors"
                >
                  {SITE_CONFIG.contact.primaryPhoneDisplay}
                </a>
                <span className="text-indigo-400">/</span>
                <a
                  href={SITE_CONFIG.contact.secondaryPhoneHref}
                  className="text-vanilla-50 hover:text-gold-300 transition-colors"
                >
                  {SITE_CONFIG.contact.secondaryPhoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" aria-hidden="true" />
                <a
                  href={SITE_CONFIG.contact.emailHref}
                  className="text-vanilla-50 hover:text-gold-300 transition-colors"
                >
                  {SITE_CONFIG.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-indigo-300">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 tabular-nums">
            <span>PAN: {SITE_CONFIG.credentials.pan}</span>
            <span>GST: {SITE_CONFIG.credentials.gst}</span>
            <span>SAC: {SITE_CONFIG.credentials.sac}</span>
            <span>GOVT REG: {SITE_CONFIG.credentials.govtReg}</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-vanilla-50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-vanilla-50 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
