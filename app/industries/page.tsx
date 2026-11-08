import React from "react";
import type { Metadata } from "next";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Industries | Black Cat Commando Security Force",
  description:
    "Tailored private security deployments for textile mills, factories, IT campuses, hospitals, schools, residential societies, and events across Tamil Nadu.",
};

export default function IndustriesPage() {
  return (
    <div>
      <IndustriesSection />
      <ContactSection />
    </div>
  );
}
