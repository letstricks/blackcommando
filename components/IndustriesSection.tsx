import React from "react";

export default function IndustriesSection() {
  const industries = [
    { name: "Factories & Textile Mills", detail: "Gate-pass control, labor frisking & scrap theft prevention." },
    { name: "Corporate Offices & IT", detail: "Front-desk concierge, visitor badges & after-hours lockup." },
    { name: "Residential Societies", detail: "Vehicle gate logs, resident safety & midnight perimeter rounds." },
    { name: "Hospitals & Healthcare", detail: "Casualty area vigilance, doctor protection & ambulance clearance." },
    { name: "Schools & Colleges", detail: "Student entry/exit security & unauthorized visitor denial." },
    { name: "Malls & Retail Showrooms", detail: "Anti-pilferage surveillance, baggage checking & crowd control." },
    { name: "Banks & Financial Hubs", detail: "Armed guards, vault vigilance & cash replenishment transit." },
    { name: "Construction Sites", detail: "Heavy machinery night watch, material delivery & worker passes." },
    { name: "Events & Conventions", detail: "VIP green room escorts, ticket scanning & emergency aisles." },
  ];

  return (
    <section id="industries" className="py-24 bg-[#08090c] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-2">
            Coverage
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            Industries Served
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {industries.map((ind, i) => (
            <div
              key={i}
              className="card-dark rounded-2xl p-7 flex flex-col justify-between hover:border-red-600/50 transition-colors"
            >
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                  {ind.name}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {ind.detail}
                </p>
              </div>
              <div className="mt-5 pt-3.5 border-t border-white/10 text-xs text-red-500 font-bold uppercase tracking-wider">
                Specialized Protocol
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
