import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Black Cat Commando Security Force",
  description: "Terms of service and commercial security deployment terms for Black Cat Commando Security Force.",
};

export default function TermsPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-mono text-badge-gold hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Home</span>
      </Link>

      <div className="bg-tactical-900 border border-tactical-700 rounded-2xl p-8 sm:p-10 space-y-6 tactical-box">
        <div className="flex items-center gap-3 pb-4 border-b border-tactical-800">
          <ShieldAlert className="w-8 h-8 text-badge-gold" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
              Terms & Service Conditions
            </h1>
            <p className="text-xs text-tactical-400 font-mono mt-0.5">
              Commercial Private Security Standard • Effective 2026
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-tactical-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white uppercase">1. Legal Entity & Nature of Operations</h2>
          <p>
            Black Cat Commando Security Force is a private commercial civilian security agency certified under ISO 9001:2015 (Registration No: 230422083182QRA) operating from Tiruppur, Tamil Nadu. The agency is not part of, associated with, or affiliated with the National Security Guard (NSG), Indian Armed Forces, or government law enforcement.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">2. Deployment & Service Agreements</h2>
          <p>
            All security personnel assignments (armed, unarmed, bouncers, supervisors) are governed by formal Service Level Agreements (SLA) specifying shift durations, post orders, relief staffing, and agreed billing terms.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">3. Replacement Assurance</h2>
          <p>
            In the event that an assigned operative fails to meet post requirements, client notification ensures replacement within 24 hours without penalty.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">4. Statutory Compliance</h2>
          <p>
            We strictly enforce statutory employee benefits, including Provident Fund (PF), Employees' State Insurance (ESI), uniform issuance, and minimum wage regulations for all guards on duty.
          </p>
        </div>
      </div>
    </div>
  );
}
