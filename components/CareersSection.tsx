"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2 } from "lucide-react";

export default function CareersSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    experience: "Fresher",
    isExServiceman: "No",
    location: "",
    role: "Security Guard",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="careers" className="py-24 bg-[#0b0c10] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-xs uppercase tracking-widest text-red-500 font-bold">
              Careers & Recruitment
            </p>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight uppercase">
              Join Our Force
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We hire disciplined, fit, and dedicated individuals. Build a respectable, stable career in private security with complete training, free uniforms, and PF/ESI coverage.
            </p>

            {/* Squad Parade Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group h-52 sm:h-64 shadow-2xl">
              <Image
                src="/guard-squad.jpg"
                alt="Security Force Muster and Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090c] via-[#08090c]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-red-500 uppercase tracking-wider block">
                    Uniforms & Training Provided
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white uppercase tracking-tight">
                    Disciplined Career with Statutory Benefits
                  </h4>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-600/40 font-mono font-bold">
                  NOW HIRING
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-2 text-xs">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                  Training & Uniforms Provided
                </h4>
                <p className="text-neutral-400 font-light">
                  Complete uniform kit, tactical belt, badges, and intensive fire safety & emergency response drilling.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                  Statutory Benefits: PF & ESI
                </h4>
                <p className="text-neutral-400 font-light">
                  Guaranteed on-time salary with medical insurance and social security coverage for all guards.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <h4 className="font-bold text-white uppercase tracking-wider mb-1">
                  Ex-Servicemen Priority
                </h4>
                <p className="text-neutral-400 font-light">
                  Fast-track recruitment and supervisory roles for ex-armed forces and paramilitary personnel.
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-6 bg-[#12141d] border border-white/10 rounded-2xl p-7 sm:p-9 shadow-xl">
            <h3 className="text-lg font-bold text-white tracking-tight pb-3 mb-5 border-b border-white/10">
              Quick Guard Application
            </h3>

            {submitted ? (
              <div className="py-10 text-center flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-white">Application Received</h4>
                <p className="text-xs text-neutral-300 mt-2 max-w-sm">
                  Our recruitment officer will contact you for physical verification at our Tiruppur branch.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700"
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Candidate Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Age *
                    </label>
                    <input
                      type="number"
                      min="18"
                      max="60"
                      required
                      placeholder="e.g. 28"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Current City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tiruppur"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    >
                      <option value="Security Guard">Security Guard</option>
                      <option value="Armed Guard">Armed Guard</option>
                      <option value="Field Supervisor">Field Supervisor</option>
                      <option value="Bouncer / VIP Escort">Bouncer / VIP Escort</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase mb-1">
                      Ex-Serviceman?
                    </label>
                    <select
                      value={formData.isExServiceman}
                      onChange={(e) => setFormData({ ...formData, isExServiceman: e.target.value })}
                      className="w-full bg-[#08090c] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-red-600"
                    >
                      <option value="No">No (Civilian)</option>
                      <option value="Yes">Yes (Armed Forces / Police)</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xl shadow-red-600/30"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
