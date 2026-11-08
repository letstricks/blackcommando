import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Black Cat Commando Security Force",
  description: "Privacy Policy and data protection terms for Black Cat Commando Security Force.",
};

export default function PrivacyPage() {
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
          <ShieldCheck className="w-8 h-8 text-badge-gold" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
              Privacy Policy
            </h1>
            <p className="text-xs text-tactical-400 font-mono mt-0.5">
              Last Updated: January 2026 • ISO 9001:2015 Compliant Standard
            </p>
          </div>
        </div>

        <div className="space-y-4 text-sm text-tactical-300 leading-relaxed">
          <h2 className="text-lg font-bold text-white uppercase">1. Information We Collect</h2>
          <p>
            Black Cat Commando Security Force collects client contact details, site assessment inquiry specifications, and guard job application details submitted through our online portal, phone, or physical office at P.N. Road, Tiruppur.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">2. Use of Security Assessment Data</h2>
          <p>
            Any floor plans, access log records, CCTV specifications, or site vulnerability assessments shared with us remain strictly confidential. We do not sell, rent, or disclose client site layout information to any external commercial third parties.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">3. Candidate & Personnel Verification</h2>
          <p>
            Job application data is utilized strictly for recruitment background checks, address validation, police verification, and statutory PF/ESI registration.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">4. Statutory Transparency</h2>
          <p>
            We comply with applicable Indian information technology and data protection standards governing commercial private security agencies.
          </p>

          <h2 className="text-lg font-bold text-white uppercase">5. Contact Our Privacy Cell</h2>
          <p>
            For inquiries regarding client data, write to: <br />
            <strong>Black Cat Commando Security Force</strong> <br />
            D. No. 6/2921, Karupparayan Kovil Street, P.N. Road, Tiruppur, Tamil Nadu — 641602 <br />
            Email: <a href="mailto:contact@blackcatcommandosecurity.com" className="text-badge-gold hover:underline">contact@blackcatcommandosecurity.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
