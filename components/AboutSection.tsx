"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileDown, ExternalLink, Copy, Check } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock, SplitHeadline, ParallaxMedia } from "./MotionPrimitives";

export default function AboutSection() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const credentials = [
    {
      label: "ISO 9001:2015 Cert",
      value: SITE_CONFIG.credentials.certificateNo,
      note: `${SITE_CONFIG.credentials.validity} · ${SITE_CONFIG.credentials.accreditationBody}`,
    },
    {
      label: "GST Registration",
      value: SITE_CONFIG.credentials.gst,
      note: `SAC Code ${SITE_CONFIG.credentials.sac}`,
    },
    {
      label: "PAN Number",
      value: SITE_CONFIG.credentials.pan,
      note: `Govt Ref ${SITE_CONFIG.credentials.govtReg}`,
    },
    {
      label: "Headquarters",
      value: "518/418 P.N. Road",
      note: "Opp. Pushpa Theatre Bus Stop, Tiruppur 641602",
    },
  ];

  async function handleCopy(label: string, val: string) {
    try {
      await navigator.clipboard.writeText(val);
      setCopiedKey(label);
      setTimeout(() => setCopiedKey(null), 1800);
    } catch {
      // Ignore clipboard denials in HTTP contexts
    }
  }

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-indigo-900 border-b border-vanilla-100/12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Narrative + Statutory Hairline Matrix */}
        <RevealBlock className="lg:col-span-6 px-6 sm:px-10 py-16 sm:py-24 space-y-8 lg:border-r border-vanilla-100/12">
          <div className="space-y-3">
            <p className="font-mono text-xs text-gold-300 tracking-[0.16em] uppercase">
              About The Force
            </p>
            <SplitHeadline
              as="h2"
              text="Discipline. Integrity. Vigilance."
              className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.025em] text-vanilla-50 leading-[1.06]"
            />
          </div>

          <p className="text-base sm:text-lg text-vanilla-100 leading-relaxed">
            Black Cat Commando Security Force is an {SITE_CONFIG.credentials.isoStandard}{" "}
            certified private security agency headquartered in Tiruppur,
            protecting industrial plants, commercial establishments, and
            residential properties across Tamil Nadu.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-vanilla-100/12 border-y border-vanilla-100/12">
            <div className="py-5 sm:pr-6 space-y-1.5">
              <span className="font-mono text-xs text-gold-300 block uppercase">
                Our Mission
              </span>
              <p className="text-sm text-indigo-200 leading-relaxed">
                Deliver dependable, ethical, and proactive protection so
                clients operate without disruption.
              </p>
            </div>
            <div className="py-5 sm:pl-6 space-y-1.5">
              <span className="font-mono text-xs text-gold-300 block uppercase">
                Our Vision
              </span>
              <p className="text-sm text-indigo-200 leading-relaxed">
                Uphold Tamil Nadu’s benchmark in statutory compliance and
                disciplined site governance.
              </p>
            </div>
          </div>

          {/* Copyable Statutory Ledger Rows */}
          <div className="divide-y divide-vanilla-100/12 border-b border-vanilla-100/12">
            {credentials.map((cred) => {
              const copied = copiedKey === cred.label;
              return (
                <div
                  key={cred.label}
                  className="py-3.5 flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold-300 block">
                      {cred.label}
                    </span>
                    <span className="font-mono text-sm font-bold text-vanilla-50 block truncate mt-0.5 tabular-nums">
                      {cred.value}
                    </span>
                    <span className="text-xs text-indigo-300 block mt-0.5">
                      {cred.note}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(cred.label, cred.value)}
                    aria-label={`Copy ${cred.label}`}
                    className="h-8 px-3 rounded-lg border border-vanilla-100/18 text-xs font-mono text-indigo-200 hover:text-gold-300 hover:border-gold-400/50 inline-flex items-center gap-1.5 shrink-0 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-status-live" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </RevealBlock>

        {/* Right Full-Bleed Squad Image + Edge-to-Edge Official Document Vault */}
        <RevealBlock delay={0.06} className="lg:col-span-6 flex flex-col justify-between bg-indigo-950">
          <div className="relative h-72 sm:h-80 overflow-hidden border-b border-vanilla-100/12">
            <ParallaxMedia yRange={24} className="w-full h-full">
              <Image
                src="/guard-squad.jpg"
                alt="Black Cat Commando Security Force uniformed deployment squad"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </ParallaxMedia>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(23,25,45,0.12) 0%, rgba(23,25,45,0.88) 100%)",
              }}
            />
            <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between gap-3">
              <span className="font-mono text-xs text-vanilla-50">
                Parade Inspection &amp; Supervisory Roster
              </span>
              <span className="font-mono text-xs text-gold-300">
                Tiruppur HQ
              </span>
            </div>
          </div>

          <div className="light-surface flex-grow bg-vanilla-50 text-indigo-900 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="border-b border-indigo-800/15 pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-600 font-semibold block">
                Official Documentation
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-indigo-900 mt-1">
                Download Tariff Quotation &amp; ISO Certificate
              </h3>
            </div>

            <div className="divide-y divide-indigo-800/12 border-b border-indigo-800/12">
              {SITE_CONFIG.documents.map((doc) => (
                <div
                  key={doc.fileName}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] text-gold-600 font-semibold block">
                      {doc.fileName}
                    </span>
                    <p className="font-bold text-base text-indigo-900 mt-0.5">
                      {doc.title}
                    </p>
                    <p className="text-xs text-indigo-700 mt-0.5">
                      {doc.subtitle}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={doc.href}
                      download={doc.fileName}
                      className="h-10 px-4 rounded-xl bg-indigo-800 hover:bg-indigo-950 text-vanilla-50 text-xs font-bold inline-flex items-center gap-2 transition-colors"
                    >
                      <FileDown className="w-3.5 h-3.5 text-gold-400" strokeWidth={1.8} aria-hidden="true" />
                      <span>Download PDF</span>
                    </a>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${doc.title} in new tab`}
                      className="h-10 w-10 rounded-xl border border-indigo-800/20 bg-white hover:bg-vanilla-100 text-indigo-900 inline-flex items-center justify-center transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.6} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
