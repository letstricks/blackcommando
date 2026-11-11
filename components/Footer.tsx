import React from "react";
import Link from "next/link";
import { FileDown, Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { SITE_CONFIG } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 border-t border-vanilla-100/10 py-16 text-indigo-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Logo variant="horizontal" />
            <p className="text-sm text-indigo-300 leading-relaxed">
              Disciplined, police-verified private security services for textile mills, industries, residences, and events across Tamil Nadu.
            </p>
            <div className="text-xs font-mono text-indigo-400 space-y-1 tabular-nums">
              <p>ISO 9001:2015 Cert: {SITE_CONFIG.credentials.certificateNo}</p>
              <p>
                GST: {SITE_CONFIG.credentials.gst} · SAC: {SITE_CONFIG.credentials.sac}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-vanilla-100">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-vanilla-100 transition-colors duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-vanilla-100 transition-colors duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-vanilla-100 transition-colors duration-150">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="hover:text-vanilla-100 transition-colors duration-150">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-vanilla-100 transition-colors duration-150">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-vanilla-100 transition-colors duration-150">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-vanilla-100 transition-colors duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Documents & Downloads */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-vanilla-100">
              Official Documents
            </h4>
            <div className="space-y-2.5">
              {SITE_CONFIG.documents.map((doc) => (
                <a
                  key={doc.id}
                  href={doc.href}
                  download={doc.fileName}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-indigo-900 border border-vanilla-100/12 hover:border-vanilla-100/30 transition-colors duration-150 group"
                >
                  <FileDown
                    className="w-4 h-4 text-vanilla-100 shrink-0 mt-0.5"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-xs font-semibold text-vanilla-100 group-hover:underline">
                      {doc.title}
                    </div>
                    <div className="text-[11px] font-mono text-indigo-400 mt-0.5">
                      {doc.fileName}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Col 4: Operations Headquarters */}
          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold text-vanilla-100">
              Headquarters
            </h4>
            <div className="flex items-start gap-2.5 text-indigo-300 leading-relaxed">
              <MapPin
                className="w-4 h-4 text-vanilla-200 shrink-0 mt-1"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>{SITE_CONFIG.address.full}</span>
            </div>

            <div className="space-y-1.5 pt-1">
              <a
                href={SITE_CONFIG.contact.primaryPhoneHref}
                className="flex items-center gap-2.5 text-vanilla-100 font-semibold hover:text-vanilla-50 transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-vanilla-200 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>{SITE_CONFIG.contact.primaryPhoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.contact.secondaryPhoneHref}
                className="flex items-center gap-2.5 text-indigo-300 hover:text-vanilla-100 transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>{SITE_CONFIG.contact.secondaryPhoneDisplay}</span>
              </a>
              <a
                href={SITE_CONFIG.contact.emailHref}
                className="flex items-center gap-2.5 text-indigo-300 hover:text-vanilla-100 transition-colors"
              >
                <Mail className="w-4 h-4 text-vanilla-200 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
            </div>

            <p className="text-status-live font-medium text-xs pt-1 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-status-live" aria-hidden="true" />
              <span>{SITE_CONFIG.contact.hours}</span>
            </p>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-6 border-t border-vanilla-100/10 text-xs text-indigo-400 leading-relaxed">
          <strong className="text-indigo-200 font-medium">
            Civilian Security Force Disclaimer:
          </strong>{" "}
          Black Cat Commando Security Force (BCC Security Services) is a private commercial security agency independently certified under ISO 9001:2015. The agency is a civilian commercial contractor and has no affiliation, sponsorship, or association with the National Security Guard (NSG), Indian Armed Forces, Ministry of Home Affairs, or State Police forces.
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-vanilla-100/10 flex flex-col sm:flex-row items-center justify-between text-xs text-indigo-400 gap-2">
          <span>© 2026 {SITE_CONFIG.companyName}. All rights reserved.</span>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-vanilla-100 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-vanilla-100 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
