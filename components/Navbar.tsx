"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, FileDown, Phone, ArrowRight } from "lucide-react";
import Logo from "./Logo";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Why Us", href: "/why-choose-us" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-indigo-950/78 backdrop-blur-xl border-b border-vanilla-100/15 shadow-2xl"
            : "bg-indigo-800/80 backdrop-blur-lg border-b border-vanilla-100/10"
        }`}
      >
        {/* Top Scroll Progress Beam */}
        <motion.div
          style={{ scaleX }}
          className="h-[2px] w-full origin-left bg-gold-400"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between gap-4">
          {/* Brand Crest + Name */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group whitespace-nowrap"
          >
            <Logo className="w-10 h-10 transition-transform duration-200 group-hover:scale-105" />
            <div className="leading-none">
              <span className="font-display font-bold text-sm sm:text-base tracking-tight text-vanilla-50 block">
                Black Cat Commando
              </span>
              <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-gold-300 block mt-1">
                Security Force
              </span>
            </div>
          </Link>

          {/* Single-Row Clean Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-1 whitespace-nowrap"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-2 text-xs sm:text-[13px] font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? "text-vanilla-50"
                      : "text-indigo-200 hover:text-vanilla-50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ duration: 0.26, ease: EDITORIAL_EASE }}
                      className="absolute inset-x-2 -bottom-0.5 h-[2px] rounded-full bg-gold-400"
                    />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Utility Actions */}
          <div className="hidden lg:flex items-center gap-2.5 shrink-0">
            <a
              href={SITE_CONFIG.documents[0].href}
              download={SITE_CONFIG.documents[0].fileName}
              className="h-9 px-3.5 rounded-xl glass-indigo-soft hover:border-gold-400/50 text-vanilla-50 text-xs font-medium inline-flex items-center gap-1.5 transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <FileDown className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
              <span>Quotation PDF</span>
            </a>

            <a
              href={SITE_CONFIG.contact.primaryPhoneHref}
              aria-label={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
              className="h-9 w-9 rounded-xl glass-indigo-soft hover:border-gold-400/50 text-gold-300 inline-flex items-center justify-center transition-colors duration-150 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={1.6} />
            </a>

            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="relative overflow-hidden shimmer-on-hover h-9 px-4 rounded-xl bg-vanilla-100 hover:bg-vanilla-50 text-indigo-950 text-xs font-bold inline-flex items-center gap-1.5 transition-colors duration-150 cursor-pointer whitespace-nowrap shrink-0 shadow-md"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden h-10 w-10 rounded-xl glass-indigo-soft text-vanilla-50 inline-flex items-center justify-center cursor-pointer"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? (
              <X className="w-5 h-5" strokeWidth={1.6} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.6} />
            )}
          </button>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.24, ease: EDITORIAL_EASE }}
              className="lg:hidden overflow-hidden border-t border-vanilla-100/12 bg-indigo-950/92 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium ${
                        isActive
                          ? "bg-gold-400/15 border border-gold-400/35 text-vanilla-50"
                          : "glass-indigo-soft text-indigo-200 hover:text-vanilla-50"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-gold-400" aria-hidden="true" />
                    </Link>
                  );
                })}

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={SITE_CONFIG.documents[0].href}
                    download={SITE_CONFIG.documents[0].fileName}
                    className="h-11 px-4 rounded-xl glass-indigo-soft text-vanilla-50 text-sm font-medium inline-flex items-center justify-center gap-2"
                  >
                    <FileDown className="w-4 h-4 text-gold-400" aria-hidden="true" />
                    <span>Quotation PDF</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      setIsQuoteOpen(true);
                    }}
                    className="h-11 px-4 rounded-xl bg-gold-400 text-indigo-950 text-sm font-bold inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
