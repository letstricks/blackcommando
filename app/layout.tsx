import type { Metadata, Viewport } from "next";
import "./globals.css";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export const viewport: Viewport = {
  themeColor: "#08090c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Black Cat Commando Security Force | Professional Security Services",
  description:
    "Trained, disciplined and reliable security personnel for homes, businesses, events and industry. Request a free site assessment today. ISO 9001:2015 certified private security agency in Tiruppur, Tamil Nadu.",
  keywords: [
    "Black Cat Commando Security Force",
    "Security Services Tiruppur",
    "Security Agency Tamil Nadu",
    "Private Security Guards",
    "Industrial Security Services",
    "Textile Mill Security Guard",
    "Event Security Bouncers",
    "ISO 9001:2015 Security Agency",
    "PSARA Security Force",
  ],
  authors: [{ name: "Black Cat Commando Security Force" }],
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Black Cat Commando Security Force | Professional Security Services",
    description:
      "Trained, disciplined and reliable security personnel for homes, businesses, events and industry. Request a free site assessment today.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-tactical-950 text-tactical-100 min-h-screen flex flex-col font-sans selection:bg-badge-gold selection:text-black">
        {/* Top Emergency & Dispatch Bar */}
        <EmergencyBar />

        {/* Global Navigation Header */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky WhatsApp, Call & Quote Actions */}
        <FloatingActions />
      </body>
    </html>
  );
}
