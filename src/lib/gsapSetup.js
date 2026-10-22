/**
 * GSAP + ScrollTrigger setup with Lenis RAF ticker sync.
 * Import this module in any client component that registers ScrollTriggers.
 * Safe to import multiple times — registration is idempotent.
 */
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Call once after Lenis is instantiated to sync Lenis RAF with GSAP ticker.
 * @param {import('lenis').default} lenis
 */
export function syncLenisGSAP(lenis) {
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });
  gsap.ticker.lagSmoothing(0);
  lenis.on("scroll", ScrollTrigger.update);
}

export { gsap, ScrollTrigger };
