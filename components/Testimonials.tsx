"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { RevealBlock, StaggerGrid, StaggerItem } from "./MotionPrimitives";

export default function Testimonials() {
  const reviews = [
    {
      quote:
        "Professional, punctual, and consistently alert. Gate logging and material verification at our export garment mill improved immediately once Black Cat Commando took charge.",
      author: "K. Subramanian",
      designation: "Managing Director",
      company: "Textile & Spinning Operations, Tiruppur",
      siteType: "Textile Manufacturing",
    },
    {
      quote:
        "Managing visitor traffic in a 320-apartment enclave requires polite firmness. Their guards maintain clean entry registers and coordinate deliveries without friction.",
      author: "Dr. R. Meenakshi",
      designation: "President, RWA",
      company: "Gated Residential Enclave, Coimbatore",
      siteType: "Residential Security",
    },
    {
      quote:
        "For our trade summit with over 5,000 attendees, their event squad managed VIP movement, badge checks, and vehicle lanes with steady discipline from open to close.",
      author: "V. Anand Kumar",
      designation: "Head of Operations",
      company: "Convention & Exhibition Venue, Kongu Region",
      siteType: "Event Security",
    },
  ];

  return (
    <section className="light-surface py-20 sm:py-24 bg-vanilla-100 text-ink-primary border-b border-indigo-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealBlock className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <p className="font-mono text-xs text-ink-muted tracking-wide">
              09 · Client Feedback
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-semibold tracking-tight text-ink-primary leading-[1.1]">
              Trusted across Tiruppur and Tamil Nadu
            </h2>
          </div>
          <p className="text-sm sm:text-base text-ink-secondary max-w-md leading-relaxed">
            Rated 5.0 stars across local client reviews for punctual shift
            handover and supervisory responsiveness.
          </p>
        </RevealBlock>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <StaggerItem
              key={rev.author}
              className="rounded-xl bg-vanilla-50 border border-indigo-800/12 p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div
                    className="flex items-center gap-1 text-indigo-800"
                    aria-label="5 out of 5 stars"
                  >
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Star
                        key={star}
                        className="w-3.5 h-3.5 fill-indigo-800"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span className="font-mono text-[11px] text-ink-muted bg-vanilla-200 px-2.5 py-1 rounded-md">
                    {rev.siteType}
                  </span>
                </div>

                <p className="text-sm text-ink-primary leading-relaxed mb-6">
                  “{rev.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-indigo-800/10 flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-semibold text-ink-primary">
                    {rev.author}
                  </h3>
                  <p className="text-xs text-ink-secondary">{rev.designation}</p>
                  <p className="text-xs text-ink-muted">{rev.company}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-lg bg-vanilla-200 border border-indigo-800/15 flex items-center justify-center text-status-live-dark shrink-0"
                  title="Verified client deployment"
                >
                  <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
