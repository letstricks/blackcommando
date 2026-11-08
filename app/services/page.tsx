import React from "react";
import type { Metadata } from "next";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Services | Black Cat Commando Security Force",
  description:
    "Explore our complete range of private security services: armed & unarmed guards, residential protection, industrial security, event crowd management, VIP escort, and site risk audits.",
};

export default function ServicesPage() {
  return (
    <div>
      <ServicesSection />
      <HowItWorks />
      <ContactSection />
    </div>
  );
}
