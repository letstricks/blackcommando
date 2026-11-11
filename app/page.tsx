import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GuardGalleryScroll from "@/components/GuardGalleryScroll";
import CostCalculator from "@/components/CostCalculator";
import OperationsShowcase from "@/components/OperationsShowcase";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import IndustriesSection from "@/components/IndustriesSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesSection />
      <GuardGalleryScroll />
      <CostCalculator />
      <OperationsShowcase />
      <AboutSection />
      <WhyChooseUs />
      <HowItWorks />
      <IndustriesSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
