import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-data";

interface LogoProps {
  variant?: "horizontal" | "badge";
  tone?: "dark" | "light";
  className?: string;
  showSubtitle?: boolean;
}

export default function Logo({
  variant = "horizontal",
  tone = "dark",
  className = "",
  showSubtitle = true,
}: LogoProps) {
  const isLight = tone === "light";

  if (variant === "badge") {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <div className="w-28 h-28 rounded-full bg-indigo-950 border border-vanilla-100/20 p-2 flex items-center justify-center">
          <Image
            src="/logo-white.png"
            alt={`${SITE_CONFIG.companyName} official insignia`}
            width={112}
            height={112}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        <div className="mt-4 space-y-1">
          <div
            className={`text-lg font-display font-semibold tracking-tight ${
              isLight ? "text-ink-primary" : "text-vanilla-100"
            }`}
          >
            {SITE_CONFIG.shortName}
          </div>
          {showSubtitle && (
            <div
              className={`text-xs font-mono tracking-wide ${
                isLight ? "text-ink-secondary" : "text-indigo-300"
              }`}
            >
              Security Force · {SITE_CONFIG.subLabel}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 rounded-lg focus-visible:outline-none ${className}`}
    >
      <div className="w-10 h-10 shrink-0 rounded-full bg-indigo-950 border border-vanilla-100/25 group-hover:border-vanilla-100/50 transition-colors duration-150 flex items-center justify-center p-1">
        <Image
          src="/logo-white.png"
          alt={`${SITE_CONFIG.companyName} emblem`}
          width={36}
          height={36}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`text-base font-display font-semibold tracking-tight leading-tight transition-colors duration-150 ${
            isLight
              ? "text-ink-primary group-hover:text-ink-secondary"
              : "text-vanilla-100 group-hover:text-vanilla-50"
          }`}
        >
          Black Cat Commando
        </span>
        {showSubtitle && (
          <span
            className={`text-xs leading-tight mt-0.5 ${
              isLight ? "text-ink-muted" : "text-indigo-300"
            }`}
          >
            Security Force
          </span>
        )}
      </div>
    </Link>
  );
}
