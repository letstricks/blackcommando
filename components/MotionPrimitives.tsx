"use client";

import React, { useRef } from "react";
import {
  motion,
  MotionConfig,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  type Variants,
} from "framer-motion";

export const EDITORIAL_EASE = [0.22, 1, 0.36, 1] as const;

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      delay,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.04,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.46,
      ease: EDITORIAL_EASE,
    },
  },
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function RevealBlock({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      custom={delay}
      variants={revealVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGrid({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={staggerContainerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Word-by-word masked reveal with outer container observer (descender-safe,
 * never hides behind overflow:hidden bounds) and immediate mode for hero H1.
 */
export function SplitHeadline({
  text,
  className = "",
  as: Tag = "h1",
  immediate,
}: {
  text: string;
  className?: string;
  as?: "h1" | "h2";
  immediate?: boolean;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const prefersReduced = useReducedMotion();
  const shouldReveal = (immediate ?? Tag === "h1") || isInView;
  const words = text.split(" ");

  if (prefersReduced) {
    return (
      <Tag ref={ref} className={className}>
        {text}
      </Tag>
    );
  }

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block overflow-hidden align-bottom py-[0.07em] -my-[0.07em] mr-[0.25em]"
        >
          <motion.span
            initial={{ y: "72%", opacity: 0 }}
            animate={
              shouldReveal
                ? { y: "0%", opacity: 1 }
                : { y: "72%", opacity: 0 }
            }
            transition={{
              duration: 0.5,
              delay: Math.min(idx * 0.045, 0.28),
              ease: EDITORIAL_EASE,
            }}
            className="inline-block will-change-transform"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/**
 * Scroll-scrubbed background parallax layer clipped by parent overflow-hidden.
 */
export function ParallaxBackdrop({
  children,
  className = "",
  range = 56,
}: {
  children?: React.ReactNode;
  className?: string;
  range?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-range, range]);
  const y = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.4 });

  return (
    <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        style={prefersReduced ? undefined : { y }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Scroll-scrubbed photograph/media layer with gentle depth scale & vertical drift.
 */
export function ParallaxMedia({
  children,
  className = "",
  yRange = 28,
}: {
  children: React.ReactNode;
  className?: string;
  yRange?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [-yRange, yRange]);
  const y = useSpring(rawY, { stiffness: 140, damping: 26, mass: 0.4 });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={prefersReduced ? undefined : { y, scale: 1.09 }}
        className="w-full h-full relative will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Window-scroll linked credential track starting flush at x = 0px on initial load.
 */
export function ScrollCredentialStrip({ items }: { items: readonly string[] }) {
  const prefersReduced = useReducedMotion();
  const { scrollY } = useScroll();
  const rawX = useTransform(scrollY, [0, 1400], [0, -260]);
  const x = useSpring(rawX, { stiffness: 130, damping: 28 });

  return (
    <div className="relative overflow-hidden border-y border-vanilla-100/12 glass-indigo py-3.5">
      <motion.div
        style={prefersReduced ? undefined : { x }}
        className="flex items-center gap-8 whitespace-nowrap px-6 sm:px-10 font-mono text-xs text-indigo-200 will-change-transform"
      >
        {[...items, ...items].map((item, idx) => (
          <span key={`${item}-${idx}`} className="inline-flex items-center gap-8 shrink-0">
            <span className="inline-flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400" aria-hidden="true" />
              <span>{item}</span>
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Masked tabular metric reveal — always renders exact SSR number without 0+ flash.
 */
export function AnimatedStatNumber({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const prefersReduced = useReducedMotion();

  return (
    <span ref={ref} className="inline-block overflow-hidden align-bottom tabular-nums">
      <motion.span
        initial={prefersReduced ? false : { y: "75%", opacity: 0 }}
        animate={
          prefersReduced || isInView
            ? { y: "0%", opacity: 1 }
            : { y: "75%", opacity: 0 }
        }
        transition={{ duration: 0.5, ease: EDITORIAL_EASE }}
        className="inline-block will-change-transform"
      >
        {target}
        {suffix}
      </motion.span>
    </span>
  );
}

/**
 * 3D Spring-Physics Spatial Frosted Glass Card with cursor-tracked specular glow & mild tilt.
 */
export function SpatialGlassCard({
  children,
  className = "",
  enableTilt = true,
  tiltDeg = 4,
}: {
  children: React.ReactNode;
  className?: string;
  enableTilt?: boolean;
  tiltDeg?: number;
}) {
  const prefersReduced = useReducedMotion();
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const tiltXRaw = useMotionValue(0);
  const tiltYRaw = useMotionValue(0);

  const rotateX = useSpring(tiltXRaw, { stiffness: 220, damping: 24 });
  const rotateY = useSpring(tiltYRaw, { stiffness: 220, damping: 24 });

  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mouseX}px ${mouseY}px, var(--spotlight-tint), transparent 72%)`;

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);

    if (enableTilt && rect.width > 0 && rect.height > 0) {
      const nx = x / rect.width - 0.5;
      const ny = y / rect.height - 0.5;
      tiltYRaw.set(nx * tiltDeg * 2);
      tiltXRaw.set(-ny * tiltDeg * 2);
    }
  }

  function handlePointerLeave() {
    tiltXRaw.set(0);
    tiltYRaw.set(0);
  }

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={
        prefersReduced || !enableTilt
          ? undefined
          : {
              rotateX,
              rotateY,
              transformPerspective: 1100,
              transformStyle: "preserve-3d",
            }
      }
      whileHover={prefersReduced ? undefined : { y: -3 }}
      transition={{ duration: 0.22, ease: EDITORIAL_EASE }}
      className={`group relative overflow-hidden ${className}`}
    >
      {!prefersReduced && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
          style={{ background: spotlight }}
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

// Preserve GlassSpotlightCard export alias for any existing import callers
export const GlassSpotlightCard = SpatialGlassCard;

/**
 * Clamped magnetic button wrapper per ui-ux-pro-max micro-interaction guidance (<= 0.24 pull).
 */
export function MagneticWrap({
  children,
  className = "",
  strength = 0.22,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const prefersReduced = useReducedMotion();
  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 260, damping: 18 });
  const y = useSpring(yRaw, { stiffness: 260, damping: 18 });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    xRaw.set((e.clientX - rect.left - rect.width / 2) * strength);
    yRaw.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function onLeave() {
    xRaw.set(0);
    yRaw.set(0);
  }

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={prefersReduced ? undefined : { x, y }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.div>
  );
}
