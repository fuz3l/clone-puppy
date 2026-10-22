"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { syncLenisGSAP } from "@/lib/gsapSetup";

/**
 * SmoothScroll — Lenis smooth scroll with GSAP ticker sync.
 * Drives Lenis via gsap.ticker so ScrollTrigger scrub is always accurate.
 *
 * @param {{ children: React.ReactNode }} props
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    // Sync: GSAP ticker drives lenis.raf; lenis scroll event updates ScrollTrigger
    syncLenisGSAP(lenis);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return children;
}
