"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", label: "Services", href: "/services" },
    { num: "02", label: "About", href: "/about" },
    { num: "03", label: "Why Us", href: "/why-choose-us" },
    { num: "04", label: "Industries", href: "/industries" },
    { num: "05", label: "Careers", href: "/careers" },
    { num: "06", label: "Contact", href: "/contact" },
  ];

  const whatsappHref = buildWhatsappUrl(
    "Hello Black Cat Commando Security Force, I would like to request a security deployment quote."
  );

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-[background-color,border-color] duration-200 ease-editorial ${
          scrolled
            ? "bg-indigo-800/95 backdrop-blur-md border-b border-vanilla-100/15"
            : "bg-indigo-800 border-b border-vanilla-100/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <Logo variant="horizontal" />

          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 text-sm font-medium transition-colors duration-150 flex items-center gap-1.5 ${
                    isActive
                      ? "text-vanilla-100"
                      : "text-indigo-300 hover:text-vanilla-100"
                  }`}
                >
                  <span className="font-mono text-xs text-indigo-400 tabular-nums">
                    {link.num}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-vanilla-100 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.contact.primaryPhoneHref}
              className="w-10 h-10 rounded-lg bg-indigo-900 border border-vanilla-100/15 text-vanilla-100 flex items-center justify-center hover:bg-indigo-700 hover:border-vanilla-100/30 transition-colors duration-150"
              aria-label={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
              title={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-indigo-900 border border-vanilla-100/15 text-vanilla-100 flex items-center justify-center hover:bg-indigo-700 hover:border-vanilla-100/30 transition-colors duration-150"
              aria-label="Message on WhatsApp"
              title="Message on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
            </a>

            <motion.button
              type="button"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
              onClick={() => setIsQuoteModalOpen(true)}
              className="h-10 px-4 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 text-sm font-semibold transition-colors duration-150 cursor-pointer"
            >
              Get Quote
            </motion.button>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-lg flex items-center justify-center text-vanilla-100 hover:bg-indigo-700 transition-colors duration-150 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: EDITORIAL_EASE }}
              className="lg:hidden bg-indigo-900 border-b border-vanilla-100/15 px-4 py-4 space-y-1"
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "bg-indigo-700 text-vanilla-100"
                        : "text-indigo-200 hover:bg-indigo-800 hover:text-vanilla-100"
                    }`}
                  >
                    <span className="font-mono text-xs text-indigo-400 tabular-nums">
                      {link.num}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-vanilla-100/10 flex flex-col gap-2">
                <a
                  href={SITE_CONFIG.contact.primaryPhoneHref}
                  className="h-11 px-4 rounded-lg border border-vanilla-100/20 text-vanilla-100 text-sm font-medium flex items-center justify-center gap-2 tabular-nums"
                >
                  <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                  <span>{SITE_CONFIG.contact.primaryPhoneDisplay}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsQuoteModalOpen(true);
                  }}
                  className="h-11 px-4 rounded-lg bg-vanilla-100 text-indigo-800 text-sm font-semibold cursor-pointer"
                >
                  Request Free Assessment
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
