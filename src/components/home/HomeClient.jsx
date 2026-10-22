"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeHero from "./HomeHero";
import MeetThePups from "./MeetThePups";
import TwoWaysSection from "./TwoWaysSection";
import TrustSection from "./TrustSection";

gsap.registerPlugin(ScrollTrigger);

/**
 * Day-to-night background journey definition.
 * Each entry maps a section selector → [bg, ink] CSS token values.
 */
const BG_JOURNEY = [
  { selector: "#hero",      bg: "#FFE9C7", ink: "#2A160C" },
  { selector: "#meet-pups", bg: "#FFE9C7", ink: "#2A160C" },
  { selector: "#two-ways",  bg: "#F6B86A", ink: "#2A160C" },
  { selector: "#journey",   bg: "#F6B86A", ink: "#2A160C" },
  { selector: "#trust",     bg: "#B5511F", ink: "#FFFDF8" },
  { selector: "#families",  bg: "#5A2E17", ink: "#FFFDF8" },
  { selector: "#faq",       bg: "#1D0F09", ink: "#FFFDF8" },
  { selector: "#cta",       bg: "#1D0F09", ink: "#FFFDF8" },
];

/**
 * HomeClient — root client component for the home page.
 * Owns all GSAP ScrollTriggers (in one useGSAP with cleanup).
 * Passes refs down to child sections as needed.
 */
export default function HomeClient() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      // Respect reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const root = document.documentElement;

      // Day-to-night: set --page-bg / --page-ink on scroll into each section
      BG_JOURNEY.forEach(({ selector, bg, ink }) => {
        const el = document.querySelector(selector);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: "top 60%",
          onEnter: () => {
            gsap.to(root, {
              "--page-bg": bg,
              "--page-ink": ink,
              duration: 0.8,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
          onEnterBack: () => {
            gsap.to(root, {
              "--page-bg": bg,
              "--page-ink": ink,
              duration: 0.8,
              ease: "power2.out",
              overwrite: "auto",
            });
          },
        });
      });

      // Generic fade-in-up for section children with data-reveal
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="home-page">
      <HomeHero />
      <MeetThePups />
      <TwoWaysSection />
      <TrustSection />
    </div>
  );
}
