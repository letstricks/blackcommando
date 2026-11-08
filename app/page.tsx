import React from "react";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import GuardGalleryScroll from "@/components/GuardGalleryScroll";
import OperationsShowcase from "@/components/OperationsShowcase";
import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import IndustriesSection from "@/components/IndustriesSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Cinematic Operative Background & 4 Numbered Pillars */}
      <Hero />

      {/* Live Tactical Metrics & Trust Strip */}
      <TrustStrip />

      {/* 2. What We Do - Minimalist 8 Services */}
      <ServicesSection />

      {/* Uniformed Personnel Interactive Gallery Scroll (Real Guards) */}
      <GuardGalleryScroll />

      {/* Field Operations & Visual Showcase */}
      <OperationsShowcase />

      {/* 3. About The Force & ISO 9001:2015 Certification */}
      <AboutSection />

      {/* 4. Why Choose Us - 6 Numbered Advantages */}
      <WhyChooseUs />

      {/* 5. How It Works - 4 Disciplined Steps */}
      <HowItWorks />

      {/* 6. Industries Served */}
      <IndustriesSection />

      {/* 7. Contact Form & Google Map */}
      <ContactSection />
    </>
  );
}
