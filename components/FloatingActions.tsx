"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ClipboardList } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SITE_CONFIG, buildWhatsappUrl } from "@/lib/site-data";
import { EDITORIAL_EASE } from "./MotionPrimitives";

export default function FloatingActions() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const whatsappHref = buildWhatsappUrl(
    "Hello Black Cat Commando Security Force, I would like to inquire about security services."
  );

  return (
    <>
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
          onClick={() => setIsQuoteOpen(true)}
          className="hidden md:inline-flex h-11 px-4 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 border border-indigo-800/20 font-semibold text-xs items-center gap-2 shadow-lg transition-colors duration-150 cursor-pointer"
        >
          <ClipboardList className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          <span>Get Free Assessment</span>
        </motion.button>

        <div className="flex items-center gap-2">
          <a
            href={SITE_CONFIG.contact.primaryPhoneHref}
            aria-label={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
            title={`Call ${SITE_CONFIG.contact.primaryPhoneDisplay}`}
            className="w-11 h-11 rounded-lg bg-indigo-900 hover:bg-indigo-700 border border-vanilla-100/20 text-vanilla-100 flex items-center justify-center shadow-lg transition-colors duration-150"
          >
            <Phone className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Operations"
            title="WhatsApp Operations"
            className="w-11 h-11 rounded-lg bg-indigo-950 hover:bg-indigo-700 border border-vanilla-100/25 text-status-live flex items-center justify-center shadow-lg transition-colors duration-150"
          >
            <MessageCircle className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
          </a>
        </div>
      </div>

      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
}
