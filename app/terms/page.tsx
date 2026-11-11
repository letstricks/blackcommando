import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft, FileDown } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms & Conditions | Black Cat Commando Security Force",
  description:
    "Terms of service and commercial security deployment conditions for Black Cat Commando Security Force.",
};

export default function TermsPage() {
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
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-vanilla-100/12">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-7 h-7 text-vanilla-100" strokeWidth={1.5} aria-hidden="true" />
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-semibold text-vanilla-100 tracking-tight">
                Terms & Service Conditions
              </h1>
              <p className="text-xs text-indigo-300 font-mono mt-0.5">
                Commercial Private Security Standard · GST {SITE_CONFIG.credentials.gst}
              </p>
            </div>
          </div>

          <a
            href={SITE_CONFIG.documents[0].href}
            download={SITE_CONFIG.documents[0].fileName}
            className="h-10 px-4 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 text-xs font-semibold inline-flex items-center gap-2 shrink-0 transition-colors"
          >
            <FileDown className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            <span>Download Quotation & Terms PDF</span>
          </a>
        </div>

        <div className="space-y-4 text-sm text-indigo-200 leading-relaxed">
          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            1. Legal Entity & Scope of Operations
          </h2>
          <p>
            {SITE_CONFIG.companyName} is a private commercial civilian security
            agency certified under {SITE_CONFIG.credentials.isoStandard}{" "}
            (Registration No: {SITE_CONFIG.credentials.certificateNo}) operating
            from Tiruppur, Tamil Nadu. The agency is not affiliated with the
            National Security Guard (NSG), Indian Armed Forces, or government
            law enforcement.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            2. Deployment, Attendance & Billing Cycle
          </h2>
          <p>
            Security personnel assignments are governed by formal Service
            Agreements specifying cadre strength, duty hours (standard 8-hour,
            26-day schedule), attendance closure on the 25th of each month, and
            billing exclusive of applicable GST (18% under SAC{" "}
            {SITE_CONFIG.credentials.sac}).
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            3. Replacement & Supervision Assurance
          </h2>
          <p>
            Upon written or telephonic client intimation regarding any deployed
            personnel, immediate corrective action or replacement is initiated by
            our supervisory command.
          </p>

          <h2 className="font-display text-lg font-semibold text-vanilla-100">
            4. Statutory & Non-Solicitation Terms
          </h2>
          <p>
            All deployed operatives remain on our payroll with statutory
            coverage. As detailed in our standard service agreement, clients
            agree not to directly absorb or hire agency-deployed guards during
            the active contract and restriction period.
          </p>
        </div>
      </div>
    </div>
  );
}
