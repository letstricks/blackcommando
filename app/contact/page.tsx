import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { SITE_CONFIG } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact | Black Cat Commando Security Force",
  description: `Contact ${SITE_CONFIG.companyName}. Office: ${SITE_CONFIG.address.full}. 24/7 Operations Mobile: ${SITE_CONFIG.contact.primaryPhoneDisplay}. Request a free site security audit.`,
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}
