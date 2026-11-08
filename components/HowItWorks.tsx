import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Consult",
      desc: "Tell us your facility requirements, shift hours, and threat profile.",
    },
    {
      num: "02",
      title: "Assess",
      desc: "Our officers survey your site perimeter, blind spots, and entry gates.",
    },
    {
      num: "03",
      title: "Deploy",
      desc: "Vetted, uniform-equipped guards take over posts punctually on schedule.",
    },
    {
      num: "04",
      title: "Monitor",
      desc: "Ongoing midnight supervisor checks, shift logs, and 24/7 control room support.",
    },
  ];

  return (
    <section className="py-24 bg-[#0c0d12] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-red-500 font-bold mb-2">
            Execution
          </p>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
            How It Works
          </h2>
        </div>

        {/* Steps with Animated Connecting Pipeline */}
        <div className="relative">
          {/* Subtle Pipeline Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-red-600/30 via-white/20 to-red-600/30 -translate-y-6 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 relative z-10">
            {steps.map((st, i) => (
              <div
                key={st.num}
                className="group p-8 rounded-2xl bg-[#10121a]/90 border border-white/10 hover:border-red-600/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-600/10 relative overflow-hidden"
              >
                {/* Active Step Indicator Dot */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-black text-red-500 group-hover:scale-110 transition-transform origin-left block">
                    {st.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-neutral-400 group-hover:border-red-600 group-hover:text-red-500 transition-colors">
                    0{i + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-red-400 transition-colors">
                  {st.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {st.desc}
                </p>

                {/* Bottom Red Glow Bar on Hover */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
