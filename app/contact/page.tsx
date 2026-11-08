import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Black Cat Commando Security Force",
  description:
    "Contact Black Cat Commando Security Force. Office: P.N. Road, Tiruppur, Tamil Nadu. 24/7 Operations Hotline: +91 94403 34046. Request a free site security audit.",
};

export default function ContactPage() {
  return (
    <div>
      <ContactSection />
    </div>
  );
}
