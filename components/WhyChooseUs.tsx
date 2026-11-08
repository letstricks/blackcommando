import React from "react";

export default function WhyChooseUs() {
  const points = [
    {
      num: "01",
      title: "Verified Personnel",
      desc: "Background-checked and police-verified guards with complete permanent identity records.",
    },
    {
      num: "02",
      title: "Professional Training",
      desc: "Discipline, industrial fire safety, first aid CPR, and crisis emergency response.",
    },
    {
      num: "03",
      title: "Supervised Teams",
      desc: "Randomized night inspections, electronic patrol logging, and daily shift reporting.",
    },
    {
      num: "04",
      title: "24/7 Control Room",
      desc: "Always reachable centralized command center with immediate response dispatch.",
    },
    {
      num: "05",
      title: "Custom Solutions",
      desc: "Security plans engineered around your specific site risks, not a generic template.",
    },
    {
      num: "06",
      title: "Transparent Pricing",
      desc: "Clear contractual terms, statutory compliance (PF/ESI), and zero hidden costs.",
    },
  ];

  return (
    <section id="why-choose-us" className="py-24 bg-[#08090c] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-2">
            The Advantage
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            Why Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {points.map((pt) => (
            <div
              key={pt.num}
              className="card-dark tactical-corners rounded-2xl p-8 flex flex-col justify-between hover:border-red-600/70 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-red-600/5 rounded-full blur-2xl group-hover:bg-red-600/15 transition-all pointer-events-none" />

              <div>
                <span className="text-3xl sm:text-4xl font-black text-red-500 group-hover:scale-110 transition-transform origin-left block mb-4">
                  {pt.num}
                </span>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-red-400 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {pt.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white font-medium transition-colors">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 group-hover:animate-ping" />
                  Guaranteed Standard
                </span>
                <span className="text-red-500 font-bold group-hover:translate-x-1 transition-transform">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
