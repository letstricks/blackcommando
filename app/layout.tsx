import type { Metadata, Viewport } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "./globals.css";
import EmergencyBar from "@/components/EmergencyBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { MotionProvider } from "@/components/MotionPrimitives";
import { SITE_CONFIG } from "@/lib/site-data";

export const viewport: Viewport = {
  themeColor: "#282B4A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Black Cat Commando Security Force | Private Security Services Tiruppur",
  description:
    "ISO 9001:2015 certified private security force in Tiruppur, Tamil Nadu. Trained, police-verified guards for textile mills, industries, residences, events, and executive protection.",
  keywords: [
    "Black Cat Commando Security Force",
    "Security Services Tiruppur",
    "Security Agency Tamil Nadu",
    "Private Security Guards",
    "Industrial Security Services",
    "Textile Mill Security Guard",
    "Event Security Bouncers",
    "ISO 9001:2015 Security Agency",
  ],
  authors: [{ name: SITE_CONFIG.companyName }],
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Black Cat Commando Security Force | Tiruppur, Tamil Nadu",
    description:
      "Trained, disciplined, and reliable security personnel for homes, businesses, events, and industry across Tamil Nadu.",
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
    <html lang="en">
      <body className="bg-indigo-800 text-vanilla-100 min-h-screen flex flex-col font-sans selection:bg-vanilla-100 selection:text-indigo-800">
        <MotionProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-vanilla-100 focus:text-indigo-800 focus:font-semibold"
          >
            Skip to main content
          </a>

          <EmergencyBar />
          <Navbar />

          <main id="main-content" className="flex-grow">
            {children}
          </main>

          <Footer />
          <FloatingActions />
        </MotionProvider>
      </body>
    </html>
  );
}
