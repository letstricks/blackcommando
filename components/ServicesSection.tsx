"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import QuoteModal from "./QuoteModal";
import { SERVICES_LIST } from "@/lib/site-data";
import {
  RevealBlock,
  StaggerGrid,
  StaggerItem,
  EDITORIAL_EASE,
} from "./MotionPrimitives";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>(
    SERVICES_LIST[0].title
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenQuote = (title: string) => {
    setSelectedService(title);
    setIsModalOpen(true);
  };

  return (
    <section
      id="services"
      className="light-surface py-20 sm:py-24 bg-vanilla-100 text-ink-primary border-b border-indigo-800/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-ink-muted tracking-wide">
              01 · Service Capabilities
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-ink-primary leading-[1.1]">
              Comprehensive security services for every site
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
            Each deployment is backed by background screening, uniform turnout
            standards, and 24/7 field supervision.
          </p>
        </RevealBlock>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES_LIST.map((service) => (
            <StaggerItem key={service.num}>
              <motion.button
                type="button"
                whileTap={{ scale: 0.985 }}
                transition={{ duration: 0.14, ease: EDITORIAL_EASE }}
                onClick={() => handleOpenQuote(service.title)}
                className="w-full h-full text-left rounded-xl bg-vanilla-50 hover:bg-white border border-indigo-800/12 hover:border-indigo-800/35 p-6 flex flex-col justify-between transition-[background-color,border-color] duration-150 cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm font-medium text-ink-muted tabular-nums">
                      {service.num}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-vanilla-200/80 group-hover:bg-indigo-800 text-ink-primary group-hover:text-vanilla-100 flex items-center justify-center transition-colors duration-150">
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-ink-primary leading-snug mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-ink-secondary leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-indigo-800/10 flex items-center justify-between text-xs font-medium text-ink-secondary group-hover:text-ink-primary">
                  <span>Request Assessment</span>
                  <span className="font-mono text-ink-muted group-hover:text-ink-primary">
                    Quote →
                  </span>
                </div>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={selectedService}
      />
    </section>
  );
}
