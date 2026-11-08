import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Why Choose Us | Black Cat Commando Security Force",
  description:
    "Discover why textile mills, corporate towers, and residential communities trust Black Cat Commando Security Force: 100% police verified, trained teams, 24/7 control room, and ISO 9001:2015 certification.",
};

export default function WhyChooseUsPage() {
  return (
    <div>
      <WhyChooseUs />
      <HowItWorks />
      <ContactSection />
    </div>
  );
}
