"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import Logo from "./Logo";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { num: "01", label: "Services", href: "/services" },
    { num: "02", label: "About us", href: "/about" },
    { num: "03", label: "Why Us", href: "/why-choose-us" },
    { num: "04", label: "Industries", href: "/industries" },
    { num: "05", label: "Careers", href: "/careers" },
    { num: "06", label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#08090c]/95 backdrop-blur-md border-b border-red-600/30 py-3.5 shadow-2xl shadow-black/80"
            : "bg-transparent border-b border-white/5 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo in Navbar (Black and White Emblem + Bold Typeface) */}
          <Logo variant="horizontal" />

          {/* Desktop Numbered Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors flex items-center gap-1.5 font-bold ${
                    isActive
                      ? "text-red-500"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span className="text-red-500 font-bold text-xs">{link.num}.</span>
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Call Icon */}
            <a
              href="tel:+919440334046"
              className="w-9 h-9 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-colors shadow-md"
              title="Call Operations"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/919440334046"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-neutral-900 border border-white/20 text-white flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-colors shadow-md"
              title="WhatsApp Operations"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Accent Pill Button (Deep Red) */}
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="ml-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all uppercase tracking-wider shadow-md shadow-red-600/30 hover:scale-105"
            >
              Get Quote
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#08090c] border-b border-white/10 px-6 py-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-bold text-neutral-200 hover:text-white py-1.5"
              >
                <span className="text-red-500 mr-2">{link.num}.</span>
                <span>{link.label}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-white/10 flex gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full py-3.5 rounded-full bg-red-600 text-white text-sm font-bold uppercase tracking-wider text-center"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  );
}
