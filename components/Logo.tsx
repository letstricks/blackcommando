import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "horizontal" | "badge" | "compact" | "large";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "horizontal",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  // 1. Badge Variant (Used in Hero & Showcase)
  if (variant === "badge" || variant === "large") {
    const isLarge = variant === "large";
    return (
      <div className={`relative flex flex-col items-center justify-center text-center ${className}`}>
        {/* Glowing Radar Ring Behind Badge */}
        <div className="relative group">
          {/* Subtle Red Ambient Radar Glow */}
          <div className="absolute -inset-4 rounded-full bg-red-600/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow pointer-events-none" />

          {/* Circular Insignia Container */}
          <div className={`relative ${isLarge ? "w-36 h-36 sm:w-44 sm:h-44" : "w-28 h-28 sm:w-32 sm:h-32"} rounded-full bg-black/90 border-2 border-red-600/80 p-2 shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-500`}>
            {/* White Ring */}
            <div className="absolute inset-1 rounded-full border border-white/20 pointer-events-none" />
            
            <Image
              src="/logo-white.png"
              alt="Black Cat Commando Security Force Official Insignia"
              width={isLarge ? 170 : 120}
              height={isLarge ? 170 : 120}
              className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.3)]"
              priority
            />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase font-sans">
            BLACK CAT COMMANDO
          </div>
          {showSubtitle && (
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="h-[1px] w-6 bg-red-600"></span>
              <span className="text-xs font-black tracking-widest text-red-500 uppercase font-sans">
                SECURITY FORCE
              </span>
              <span className="h-[1px] w-6 bg-red-600"></span>
            </div>
          )}
          <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mt-0.5">
            (SECURITY SERVICE)
          </div>
        </div>
      </div>
    );
  }

  // 2. Horizontal Variant (Ideal for Navbar & Footer)
  return (
    <Link href="/" className={`group flex items-center gap-3.5 ${className}`}>
      {/* Official Insignia in Circle */}
      <div className="relative w-12 h-12 shrink-0 rounded-full bg-black border-2 border-white/80 group-hover:border-red-600 transition-all duration-300 flex items-center justify-center p-1.5 shadow-xl group-hover:scale-105">
        <Image
          src="/logo-white.png"
          alt="Black Cat Commando Security Force"
          width={44}
          height={44}
          className="w-full h-full object-contain filter drop-shadow-[0_1px_6px_rgba(255,255,255,0.2)]"
          priority
        />
        <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-red-600 rounded-full border-2 border-black" title="Command Center Active" />
      </div>

      {/* Bold Typography */}
      <div className="flex flex-col">
        <span className="text-base sm:text-lg font-black tracking-tight text-white uppercase font-sans group-hover:text-neutral-200 transition-colors leading-tight">
          BLACK CAT COMMANDO
        </span>
        {showSubtitle && (
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] font-black tracking-wider text-red-500 uppercase font-sans">
              SECURITY FORCE
            </span>
            <span className="text-neutral-600 text-xs">•</span>
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wide">
              (SECURITY SERVICE)
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
