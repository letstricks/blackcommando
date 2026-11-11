"use client";

import React, { useEffect, useRef } from "react";

/**
 * Interactive perimeter radar vector field tuned for Midnight Indigo (#282B4A)
 * and Sovereign Gold (#E2B45A). Pauses offscreen, caps DPR <= 2, respects reduced motion.
 */
export default function TacticalCanvasBackdrop({
  className = "",
}: {
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const palette = {
      accent: "rgba(226, 180, 90, 0.24)",
      ring: "rgba(238, 235, 218, 0.065)",
      node: "rgba(226, 180, 90, 0.48)",
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let isVisible = true;
    let rafId = 0;
    let lastTick = 0;
    let pointerX = -1000;
    let pointerY = -1000;

    const particles = Array.from({ length: 28 }, (_, i) => ({
      xFrac: ((i * 73) % 100) / 100,
      yFrac: ((i * 41 + 17) % 100) / 100,
      vx: ((i % 2 === 0 ? 1 : -1) * (0.00018 + (i % 5) * 0.00004)),
      vy: (((i % 3) - 1) * 0.00014),
      radius: i % 4 === 0 ? 2 : 1.25,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerX = e.clientX - rect.left;
      pointerY = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handlePointerMove, { passive: true });

    const drawFrame = (timeMs: number) => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.72;
      const cy = height * 0.44;
      const baseRadius = Math.min(width, height) * 0.46;

      // Concentric perimeter rings & angular sweep
      ctx.strokeStyle = palette.ring;
      ctx.lineWidth = 1;
      for (const mult of [0.38, 0.68, 1.0, 1.32]) {
        ctx.beginPath();
        ctx.arc(cx, cy, baseRadius * mult, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Rotating radar sweep vector
      const angle = prefersReduced ? 0.6 : (timeMs * 0.00028) % (Math.PI * 2);
      const sx = cx + Math.cos(angle) * baseRadius * 1.2;
      const sy = cy + Math.sin(angle) * baseRadius * 1.2;
      const grad = ctx.createLinearGradient(cx, cy, sx, sy);
      grad.addColorStop(0, palette.accent);
      grad.addColorStop(1, "transparent");
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(sx, sy);
      ctx.stroke();

      // Perimeter telemetry nodes & constellation links
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReduced) {
          p.xFrac = (p.xFrac + p.vx + 1) % 1;
          p.yFrac = (p.yFrac + p.vy + 1) % 1;
        }
        const px = p.xFrac * width;
        const py = p.yFrac * height;

        // Draw crosshairs for every 7th node
        ctx.fillStyle = palette.node;
        ctx.beginPath();
        ctx.arc(px, py, p.radius, 0, Math.PI * 2);
        ctx.fill();

        const dxPtr = px - pointerX;
        const dyPtr = py - pointerY;
        const distPtr = Math.hypot(dxPtr, dyPtr);
        if (distPtr < 160) {
          ctx.strokeStyle = palette.accent;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(pointerX, pointerY);
          ctx.stroke();
        }
      }
    };

    const loop = (now: number) => {
      rafId = window.requestAnimationFrame(loop);
      if (!isVisible || document.hidden) return;
      if (prefersReduced && lastTick > 0) return;
      if (now - lastTick < 40) return; // ~25fps calm atmospheric tick
      lastTick = now;
      drawFrame(now);
    };

    drawFrame(0);
    if (!prefersReduced) {
      rafId = window.requestAnimationFrame(loop);
    }

    return () => {
      window.cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none w-full h-full ${className}`}
      aria-hidden="true"
    />
  );
}

