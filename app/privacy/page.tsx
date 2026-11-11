import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Cat Commando Security Force",
  description:
    "Privacy Policy and data protection terms for Black Cat Commando Security Force.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-indigo-300 hover:text-vanilla-100 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
        <span>Return to Home</span>
      </Link>

      <div className="bg-indigo-900 border border-vanilla-100/15 rounded-2xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-3 pb-4 border-b border-vanilla-100/12">
          <ShieldCheck className="w-7 h-7 text-vanilla-100" strokeWidth={1.5} aria-hidden="true" />
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-semibold text-vanilla-100 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-indigo-300 font-mono mt-0.5">
              ISO 9001:2015 Compliant Standard · Cert {SITE_CONFIG.credentials.certificateNo}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-indigo-200 leading-relaxed">
          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            1. Information We Collect
          </h2>
          <p>
            {SITE_CONFIG.companyName} collects client contact details, site
            assessment inquiry specifications, and guard job application details
            submitted through our website, telephone, or headquarters at{" "}
            {SITE_CONFIG.address.full}.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            2. Use of Security Assessment Data
          </h2>
          <p>
            Floor plans, access log procedures, CCTV specifications, and site
            vulnerability assessments shared with us remain confidential. We do
            not sell, rent, or disclose client site layout details to external
            commercial third parties.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            3. Candidate & Personnel Verification
          </h2>
          <p>
            Job application data is used strictly for recruitment background
            checks, address validation, police verification, and statutory
            PF/ESI registration.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            4. Statutory Transparency
          </h2>
          <p>
            We operate in compliance with applicable Indian information
            technology and data protection requirements governing commercial
            private security contractors.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            5. Contact Our Privacy Cell
          </h2>
          <p>
            For inquiries regarding client data, contact:
            <br />
            <strong className="text-vanilla-100">{SITE_CONFIG.companyName}</strong>
            <br />
            {SITE_CONFIG.address.full}
            <br />
            Mobile:{" "}
            <a
              href={SITE_CONFIG.contact.primaryPhoneHref}
              className="text-vanilla-100 underline tabular-nums"
            >
              {SITE_CONFIG.contact.primaryPhoneDisplay}
            </a>{" "}
            /{" "}
            <a
              href={SITE_CONFIG.contact.secondaryPhoneHref}
              className="text-vanilla-100 underline tabular-nums"
            >
              {SITE_CONFIG.contact.secondaryPhoneDisplay}
            </a>
            <br />
            Email:{" "}
            <a
              href={SITE_CONFIG.contact.emailHref}
              className="text-vanilla-100 underline"
            >
              {SITE_CONFIG.contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
