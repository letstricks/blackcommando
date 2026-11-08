import React from "react";
import type { Metadata } from "next";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "About Us | Black Cat Commando Security Force",
  description:
    "Learn about Black Cat Commando Security Force, our ISO 9001:2015 certification, mission, leadership, and private security operations across Tamil Nadu.",
};

export default function AboutPage() {
  return (
    <div>
      <AboutSection />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}
