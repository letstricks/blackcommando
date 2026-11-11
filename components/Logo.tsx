import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10" }: LogoProps) {
  return (
    <div
      className={`relative flex items-center justify-center rounded-xl bg-indigo-950/90 border border-gold-400/45 overflow-hidden shrink-0 shadow-md ${className}`}
    >
      <Image
        src="/logo-white.png"
        alt="Black Cat Commando Security Force emblem"
        fill
        sizes="48px"
        className="object-contain p-1"
      />
    </div>
  );
}
