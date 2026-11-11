"use client";

import React from "react";
import Image from "next/image";
import { FileDown, ExternalLink, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-data";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="light-surface py-20 sm:py-24 bg-vanilla-100 text-ink-primary border-b border-indigo-800/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Narrative */}
          <RevealBlock className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs text-ink-muted tracking-wide">
                05 · About The Force
              </p>
              <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-ink-primary leading-[1.08]">
                Discipline. Integrity. Vigilance.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-ink-primary leading-relaxed max-w-2xl">
              Black Cat Commando Security Force is an ISO 9001:2015 certified
              private security agency headquartered in Tiruppur, committed to
              protecting industrial plants, commercial establishments, and
              residential communities across Tamil Nadu.
            </p>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl">
              Every operative undergoes antecedent verification, physical
              turnout screening, and fire-safety drilling before deployment,
              supervised around the clock by experienced field officers.
            </p>

            {/* Mission & Vision */}
            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <StaggerItem className="p-6 rounded-xl bg-vanilla-50 border border-indigo-800/12">
                <h3 className="font-mono text-xs text-ink-muted mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  Deliver dependable, ethical, and proactive security so clients
                  operate without disruption.
                </p>
              </StaggerItem>

              <StaggerItem className="p-6 rounded-xl bg-vanilla-50 border border-indigo-800/12">
                <h3 className="font-mono text-xs text-ink-muted mb-2">
                  Our Vision
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed">
                  To set the regional benchmark in commercial private security
                  through training discipline and accountability.
                </p>
              </StaggerItem>
            </StaggerGrid>

            {/* Muster Inspection Visual */}
            <div className="relative rounded-xl overflow-hidden border border-indigo-800/15 h-52 sm:h-60 bg-indigo-900">
              <Image
                src="/guard-squad.jpg"
                alt="Security Force daily muster and field briefing"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/35 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] text-indigo-200 block">
                    Daily Muster & Briefing
                  </span>
                  <h4 className="font-display text-base font-semibold text-vanilla-100 mt-0.5">
                    Disciplined personnel inspected before shift handover
                  </h4>
                </div>
                <span className="font-mono text-xs text-vanilla-200 bg-indigo-950/80 border border-vanilla-100/20 px-2.5 py-1 rounded-md hidden sm:inline-block tabular-nums">
                  MUSTER-01
                </span>
              </div>
            </div>
          </RevealBlock>

          {/* Right Official Accreditation & Downloadable Dossier Card (Midnight Indigo) */}
          <RevealBlock
            delay={0.08}
            className="lg:col-span-5 bg-indigo-800 text-vanilla-100 rounded-2xl p-6 sm:p-8 space-y-6 border border-indigo-900"
          >
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-vanilla-100/12">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-indigo-950 border border-vanilla-100/20 p-1.5 flex items-center justify-center shrink-0">
                  <Image
                    src="/logo-white.png"
                    alt="Black Cat Commando Security Force emblem"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-vanilla-100">
                    Official Accreditation
                  </h3>
                  <p className="text-xs font-mono text-indigo-300">
                    {SITE_CONFIG.credentials.isoStandard} QMS
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-900 border border-vanilla-100/15 text-xs font-mono text-status-live">
                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                <span>Verified</span>
              </span>
            </div>

            <dl className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">ISO Registration</dt>
                <dd className="font-mono font-semibold text-vanilla-100 tabular-nums">
                  {SITE_CONFIG.credentials.certificateNo}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">Accreditation</dt>
                <dd className="text-vanilla-100 text-right">
                  {SITE_CONFIG.credentials.accreditationBody}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">Validity</dt>
                <dd className="font-mono text-status-live tabular-nums">
                  {SITE_CONFIG.credentials.validity}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">GSTIN</dt>
                <dd className="font-mono text-vanilla-100 tabular-nums">
                  {SITE_CONFIG.credentials.gst}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">PAN / SAC / Govt</dt>
                <dd className="font-mono text-vanilla-100 tabular-nums">
                  {SITE_CONFIG.credentials.pan} · {SITE_CONFIG.credentials.sac} ·{" "}
                  {SITE_CONFIG.credentials.govtReg}
                </dd>
              </div>
              <div className="flex justify-between gap-4 py-1.5 border-b border-vanilla-100/10">
                <dt className="text-indigo-300">Head Office</dt>
                <dd className="text-vanilla-100 text-right">
                  P.N. Road, Tiruppur — 641602
                </dd>
              </div>
            </dl>

            {/* Downloadable Official PDFs */}
            <div className="space-y-3 pt-1">
              <div className="font-mono text-xs text-indigo-300">
                Downloadable Official Documents
              </div>

              {SITE_CONFIG.documents.map((doc) => (
                <div
                  key={doc.id}
                  className="p-4 rounded-xl bg-indigo-900 border border-vanilla-100/15 space-y-3"
                >
                  <div>
                    <div className="text-sm font-semibold text-vanilla-100">
                      {doc.title}
                    </div>
                    <div className="text-xs text-indigo-300 mt-0.5 leading-relaxed">
                      {doc.subtitle}
                    </div>
                    <div className="text-[11px] font-mono text-indigo-400 mt-1">
                      {doc.meta}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={doc.href}
                      download={doc.fileName}
                      className="h-9 px-3.5 rounded-lg bg-vanilla-100 hover:bg-vanilla-50 text-indigo-800 text-xs font-semibold inline-flex items-center gap-1.5 transition-colors duration-150"
                    >
                      <FileDown className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>Download PDF</span>
                    </a>
                    <a
                      href={doc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-9 px-3.5 rounded-lg bg-indigo-800 hover:bg-indigo-700 border border-vanilla-100/20 text-vanilla-100 text-xs font-medium inline-flex items-center gap-1.5 transition-colors duration-150"
                    >
                      <ExternalLink className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden="true" />
                      <span>View</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-indigo-300 leading-relaxed pt-2 border-t border-vanilla-100/10">
              <strong className="text-vanilla-100 font-medium">
                Civilian Notice:
              </strong>{" "}
              Private commercial security contractor. No affiliation with the
              National Security Guard (NSG) or state police forces.
            </p>
          </RevealBlock>
        </div>
      </div>
    </section>
  );
}
