"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { GUARD_PROFILES } from "@/lib/site-data";
import { RevealBlock, EDITORIAL_EASE } from "./MotionPrimitives";

export default function GuardGalleryScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string>(GUARD_PROFILES[0].title);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleOpenQuote = (role: string) => {
    setSelectedRole(role);
    setIsQuoteOpen(true);
  };

  return (
    <section className="py-20 sm:py-24 bg-indigo-800 border-b border-vanilla-100/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-indigo-300 tracking-wide">
              02 · Uniformed Cadre
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-vanilla-100 leading-[1.1]">
              Security force in uniform
            </h2>
            <p className="text-sm sm:text-base text-indigo-200 leading-relaxed">
              Verified personnel deployed across industrial gates, control desks,
              and corporate lobbies in clean standard-issue uniforms.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
              onClick={() => scroll("left")}
              aria-label="Scroll guard profiles left"
              className="w-11 h-11 rounded-lg bg-indigo-900 border border-vanilla-100/20 text-vanilla-100 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-150 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
              onClick={() => scroll("right")}
              aria-label="Scroll guard profiles right"
              className="w-11 h-11 rounded-lg bg-indigo-900 border border-vanilla-100/20 text-vanilla-100 flex items-center justify-center hover:bg-indigo-700 transition-colors duration-150 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} aria-hidden="true" />
            </motion.button>
          </div>
        </RevealBlock>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {GUARD_PROFILES.map((guard) => (
            <article
              key={guard.id}
              className="snap-start shrink-0 w-[300px] sm:w-[330px] rounded-2xl bg-indigo-900 border border-vanilla-100/12 overflow-hidden flex flex-col justify-between"
            >
              {/* Clean unobstructed portrait photo frame — zero badges or overlay text */}
              <div className="p-3 pb-0">
                <div className="relative h-[340px] w-full rounded-xl bg-vanilla-50 overflow-hidden">
                  <Image
                    src={guard.image}
                    alt={`${guard.title} in clean blue uniform`}
                    fill
                    sizes="(max-width: 768px) 300px, 330px"
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Structured Role Dossier Below Photo */}
              <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-2">
                    <span className="tabular-nums">{guard.num}</span>
                    <span>{guard.category}</span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-vanilla-100 leading-snug">
                    {guard.title}
                  </h3>

                  <p className="text-sm text-indigo-300 leading-relaxed mt-2">
                    {guard.desc}
                  </p>

                  <ul className="space-y-1.5 pt-4 mt-4 border-t border-vanilla-100/10 text-xs text-indigo-200">
                    {guard.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-vanilla-100/70 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  type="button"
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                  onClick={() => handleOpenQuote(guard.title)}
                  className="w-full h-11 rounded-lg bg-indigo-800 hover:bg-vanilla-100 text-vanilla-100 hover:text-indigo-800 border border-vanilla-100/20 text-sm font-medium transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Deployment</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </motion.button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        defaultService={selectedRole}
      />
    </section>
  );
}
