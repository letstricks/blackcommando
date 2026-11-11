import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import CostCalculator from "@/components/CostCalculator";
import GuardGalleryScroll from "@/components/GuardGalleryScroll";
import OperationsShowcase from "@/components/OperationsShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutSection from "@/components/AboutSection";
import IndustriesSection from "@/components/IndustriesSection";
import HowItWorks from "@/components/HowItWorks";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <CostCalculator />
      <GuardGalleryScroll />
      <OperationsShowcase />
      <WhyChooseUs />
      <AboutSection />
      <IndustriesSection />
      <HowItWorks />
      <ContactSection />
    </>
  );
}
