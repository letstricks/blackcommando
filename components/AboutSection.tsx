import React from "react";
import Image from "next/image";
import { Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-[#0c0d12] border-t border-white/5 relative overflow-hidden font-sans">
      {/* Parallax Depth Blobs */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-red-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-7">
            <p className="text-sm uppercase tracking-widest text-red-500 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              About The Force
            </p>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight uppercase">
              Discipline. Integrity. Vigilance.
            </h2>
            <p className="text-base sm:text-xl text-neutral-200 font-normal leading-relaxed">
              Black Cat Commando Security Force is a professional security service provider committed to safeguarding people, property, and peace of mind across Tamil Nadu.
            </p>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              Our personnel are carefully screened, thoroughly trained, and led by experienced field supervisors. Every client receives dependable, courteous, and alert protection.
            </p>

            {/* Mission & Vision with Hover Depth */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-600/50 hover:-translate-y-1 transition-all duration-300">
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider block mb-1.5">
                  Our Mission
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  Deliver reliable, ethical, and proactive security so our clients focus completely on what matters.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-600/50 hover:-translate-y-1 transition-all duration-300">
                <span className="text-sm font-bold text-red-500 uppercase tracking-wider block mb-1.5">
                  Our Vision
                </span>
                <p className="text-sm text-neutral-300 leading-relaxed font-light">
                  To be the most trusted name in private security through discipline, integrity, and service.
                </p>
              </div>
            </div>

            {/* Operational Inspection Photo Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group mt-4 h-48 sm:h-56 shadow-2xl">
              <Image
                src="/guard-squad.jpg"
                alt="Security Guard Inspection Parade"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">
                    Daily Muster & Inspection
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                    Disciplined Personnel Ready For Deployment
                  </h4>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-black/80 border border-white/20 text-neutral-300 font-mono hidden sm:inline-block">
                  MUSTER-01
                </span>
              </div>
            </div>
          </div>

          {/* Right ISO Certificate Card with Official Insignia & Holographic Sheen */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#14161f] to-[#08090c] border border-white/15 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl relative group hover:border-red-600/70 transition-all duration-500 overflow-hidden">
            {/* Ambient Red Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-red-600/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Shimmer Light Reflection Sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[350%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-black border border-red-600 p-1 flex items-center justify-center shrink-0 shadow-lg">
                  <Image
                    src="/logo-white.png"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="w-full h-full object-contain filter drop-shadow-[0_1px_4px_rgba(255,255,255,0.3)]"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black uppercase tracking-wider text-white">
                    Official Accreditation
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono">ISO 9001:2015 QMS</p>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/40 font-bold font-mono flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                VERIFIED
              </span>
            </div>

            <div className="space-y-4 text-sm relative z-10">
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-400">REGISTRATION:</span>
                <span className="text-white font-mono font-bold">230422083182QRA</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-400">ACCREDITATION:</span>
                <span className="text-neutral-200">Qchecker Reckoning (QRA)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-400">LOCATION:</span>
                <span className="text-neutral-200">P.N. Road, Tiruppur, TN</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-400">SCOPE:</span>
                <span className="text-red-500 font-bold">PRIVATE SECURITY</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-white/5">
                <span className="text-neutral-400">VALIDITY:</span>
                <span className="text-emerald-400 font-mono font-bold">2026 — 2029 (ACTIVE)</span>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/10 font-light relative z-10">
              <strong className="text-neutral-200">Civilian Notice:</strong> Private commercial security contractor. We have no affiliation with the National Security Guard (NSG) or state police forces.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
