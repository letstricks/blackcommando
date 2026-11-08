import React from "react";
import { Star, Quote, ShieldCheck, Building, CheckCircle2 } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Professional, punctual and always alert. Our premises feel safer. In our export garment mill, scrap leakage and gate logging were perpetual issues until Black Cat Commando took over. Their supervisor checks are relentless.",
      author: "K. Subramanian",
      designation: "Managing Director",
      company: "TexFab Exports & Spinning Mills, Tiruppur",
      rating: 5,
      siteType: "Textile Manufacturing",
    },
    {
      quote: "Managing visitor traffic in our 320-apartment residential complex was a constant headache. Black Cat Commando's guards are polite, strictly maintain digital gate registers, and handle delivery vehicles seamlessly.",
      author: "Dr. R. Meenakshi",
      designation: "President, RWA",
      company: "Green Meadows Residential Enclave, Coimbatore",
      rating: 5,
      siteType: "Gated Residential Community",
    },
    {
      quote: "We hosted an international textile machinery summit with over 5,000 visitors. Their event security team handled VIP movements, ticket screening, and parking with total military discipline. Highly recommended.",
      author: "V. Anand Kumar",
      designation: "Head of Operations",
      company: "Kongu Trade & Convention Center",
      rating: 5,
      siteType: "Commercial & Event Security",
    },
  ];

  return (
    <section className="py-20 bg-tactical-950 relative overflow-hidden">
      <div className="absolute inset-0 carbon-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tactical-850 border border-badge-gold/30 text-badge-gold text-xs font-mono font-bold tracking-widest uppercase mb-3">
            <Quote className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight font-display">
            Trusted Across Tamil Nadu
          </h2>
          <p className="mt-4 text-tactical-200 text-base sm:text-lg">
            See how our disciplined security guards protect industrial assets, commercial hubs, and private communities.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative bg-tactical-900/90 border border-tactical-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-badge-gold/50 transition-all duration-300 tactical-box"
            >
              <div>
                {/* Rating stars & Site badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-badge-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-badge-gold" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-tactical-400 bg-tactical-950 px-2.5 py-1 rounded border border-tactical-800">
                    {rev.siteType}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-tactical-200 italic leading-relaxed mb-6">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-tactical-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                    {rev.author}
                  </h4>
                  <p className="text-xs text-badge-gold font-medium">
                    {rev.designation}
                  </p>
                  <p className="text-[11px] text-tactical-400">
                    {rev.company}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0" title="Verified Client Deployment">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
