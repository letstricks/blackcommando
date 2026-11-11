"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ShieldCheck } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export default function FloatingActions() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.35, ease: EDITORIAL_EASE }}
        className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-40 flex flex-col items-end gap-2"
      >
        <motion.button
          type="button"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
          onClick={() => setIsQuoteOpen(true)}
          className="hidden sm:inline-flex h-10 px-4 rounded-xl bg-indigo-900/90 backdrop-blur-xl border border-gold-400/45 text-vanilla-50 text-xs font-semibold shadow-2xl items-center gap-2 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-gold-400" strokeWidth={1.6} aria-hidden="true" />
          <span>Get Free Assessment</span>
        </motion.button>

        <div className="flex items-center gap-2.5">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
            href={SITE_CONFIG.contact.primaryPhoneHref}
            aria-label={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
            className="w-11 h-11 rounded-xl bg-indigo-900/90 backdrop-blur-xl border border-vanilla-100/20 text-gold-300 shadow-xl flex items-center justify-center"
          >
            <Phone className="w-4 h-4" strokeWidth={1.8} />
          </motion.a>

          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.16, ease: EDITORIAL_EASE }}
            href={buildWhatsappUrl(
              "Hello Black Cat Commando, I need security guard services in Tamil Nadu."
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-11 h-11 rounded-xl bg-gold-400 text-indigo-950 shadow-xl flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.8} />
          </motion.a>
        </div>
      </motion.div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
