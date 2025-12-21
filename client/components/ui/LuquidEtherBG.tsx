"use client";

import { LiquidEther } from "@/components/ui/liquid-ether";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReducedMotion) return null;


export default function LiquidEtherBG() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <LiquidEther
        className="w-full h-full"
        baseColor="#0a0a0a"
        highlightColor="#ffffff"
        intensity={0.25}
        speed={0.15}
      />
    </div>
  );
}
