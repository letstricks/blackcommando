"use client";

import React, { useState } from "react";
import { Calculator, ShieldCheck, Check, ArrowRight, UserCheck, Clock, Building } from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function CostCalculator() {
  const [siteType, setSiteType] = useState("Factory / Industrial");
  const [shiftDuration, setShiftDuration] = useState("12h"); // 8h, 12h, 24h
  const [guardCount, setGuardCount] = useState(4);
  const [armedGuard, setArmedGuard] = useState(false);
  const [nightPatrol, setNightPatrol] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Approximate realistic estimation multipliers for personnel management
  const calculateTotalShiftsPerDay = () => {
    if (shiftDuration === "8h") return 3;
    if (shiftDuration === "12h") return 2;
    return 1;
  };

  const totalOperatives = guardCount * (shiftDuration === "24h" ? 3 : calculateTotalShiftsPerDay());

  return (
    <section className="py-20 bg-tactical-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-tactical-950 via-tactical-900 to-black border border-tactical-700 rounded-3xl p-6 sm:p-10 shadow-2xl tactical-box">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Configurator */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-tactical-850 border border-badge-gold/30 text-badge-gold text-xs font-mono font-bold tracking-widest uppercase">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Requirement Estimator</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight font-display">
                  Configure Your Security Detail
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-tactical-300">
                  Select your property type and guard strength to review deployment parameters and request a formal quote.
                </p>
              </div>

              {/* Facility Selection */}
              <div>
                <label className="block text-xs font-mono font-bold text-tactical-300 uppercase tracking-wider mb-2">
                  1. Select Facility Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    "Factory / Industrial",
                    "Corporate Office",
                    "Residential Society",
                    "Warehouse / Logistics",
                    "Retail / Showroom",
                    "Event / Temporary",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setSiteType(type)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-bold text-left transition-all border ${
                        siteType === type
                          ? "bg-badge-gold text-tactical-950 border-badge-gold shadow-md"
                          : "bg-tactical-950 text-tactical-300 border-tactical-800 hover:border-tactical-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Shift Duration */}
              <div>
                <label className="block text-xs font-mono font-bold text-tactical-300 uppercase tracking-wider mb-2">
                  2. Shift Structure
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "8h", label: "8-Hour Shifts", desc: "3 shifts per 24h" },
                    { id: "12h", label: "12-Hour Shifts", desc: "Day/Night 2 shifts" },
                    { id: "24h", label: "24-Hour Continuous", desc: "Rotating posts" },
                  ].map((shift) => (
                    <button
                      key={shift.id}
                      type="button"
                      onClick={() => setShiftDuration(shift.id)}
                      className={`p-3 rounded-lg text-left border transition-all ${
                        shiftDuration === shift.id
                          ? "bg-tactical-850 border-badge-gold text-white"
                          : "bg-tactical-950 border-tactical-800 text-tactical-400 hover:border-tactical-700"
                      }`}
                    >
                      <div className="text-xs font-bold uppercase">{shift.label}</div>
                      <div className="text-[10px] text-tactical-400 mt-0.5">{shift.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guards per shift Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-mono font-bold text-tactical-300 uppercase tracking-wider">
                    3. Guards Needed Per Shift: <span className="text-badge-gold text-sm">{guardCount} Guards</span>
                  </label>
                  <span className="text-[11px] font-mono text-tactical-400">Range: 1 - 20</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={guardCount}
                  onChange={(e) => setGuardCount(parseInt(e.target.value))}
                  className="w-full accent-badge-gold cursor-pointer bg-tactical-800 h-2 rounded-lg"
                />
              </div>

              {/* Addon checkboxes */}
              <div className="flex flex-wrap gap-4 pt-2">
                <label className="flex items-center gap-2 text-xs text-tactical-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={armedGuard}
                    onChange={(e) => setArmedGuard(e.target.checked)}
                    className="accent-badge-gold w-4 h-4 rounded"
                  />
                  <span>Require Licensed Armed Guard(s)</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-tactical-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={nightPatrol}
                    onChange={(e) => setNightPatrol(e.target.checked)}
                    className="accent-badge-gold w-4 h-4 rounded"
                  />
                  <span>Include Midnight Supervisor Electronic Patrol</span>
                </label>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-tactical-950 border border-tactical-700 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl tactical-box">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-tactical-800">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                    Estimated Deployment Plan
                  </h4>
                  <span className="text-xs font-bold text-badge-gold font-mono uppercase">
                    PSARA Standard
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-1.5 border-b border-tactical-900">
                    <span className="text-tactical-400">Target Facility:</span>
                    <span className="text-white font-bold">{siteType}</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-tactical-900">
                    <span className="text-tactical-400">Guard Strength (Per Shift):</span>
                    <span className="text-white font-bold">{guardCount} Guards</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-tactical-900">
                    <span className="text-tactical-400">Operational Shifts:</span>
                    <span className="text-white font-bold">{shiftDuration.toUpperCase()} Rotations</span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-tactical-900">
                    <span className="text-tactical-400">Armed Security:</span>
                    <span className={armedGuard ? "text-badge-gold font-bold" : "text-tactical-500"}>
                      {armedGuard ? "Yes (Licensed Operative)" : "Standard Unarmed"}
                    </span>
                  </div>

                  <div className="flex justify-between py-1.5 border-b border-tactical-900">
                    <span className="text-tactical-400">Night Inspection:</span>
                    <span className={nightPatrol ? "text-emerald-400 font-bold" : "text-tactical-500"}>
                      {nightPatrol ? "Active Electronic Patrol" : "Standard Post"}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-tactical-900/90 border border-tactical-800 mt-2">
                    <div className="text-[11px] text-tactical-400 uppercase">Estimated Total Operatives:</div>
                    <div className="text-2xl font-black text-badge-gold font-display mt-0.5">
                      {totalOperatives} Guards / Roster
                    </div>
                    <div className="text-[10px] text-tactical-400 mt-1">
                      Includes reliever roster, PF/ESI statutory compliance, and supervisor visits.
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-tactical-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3.5 bg-gradient-to-r from-badge-gold via-yellow-400 to-badge-gold text-tactical-950 font-black rounded-xl uppercase tracking-wider text-xs sm:text-sm hover:brightness-110 shadow-lg shadow-badge-gold/20 flex items-center justify-center gap-2 transition-all"
                >
                  <ShieldCheck className="w-4 h-4 text-tactical-950" />
                  <span>Request Official Commercial Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={siteType}
      />
    </section>
  );
}
