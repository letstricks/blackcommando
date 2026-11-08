import React from "react";
import type { Metadata } from "next";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Careers | Black Cat Commando Security Force",
  description:
    "Join our security force. We hire disciplined, fit, and dedicated individuals. PF, ESI, free uniforms, comprehensive training, and priority for ex-servicemen.",
};

export default function CareersPage() {
  return (
    <div>
      <CareersSection />
      <ContactSection />
    </div>
  );
}
