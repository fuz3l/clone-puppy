"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { puppies } from "@/data/puppies";

/** Portraits shown in the ledge: first 5 available + 1 plant slot + mascot slot */
const LEDGE_PUPPIES = puppies.filter((p) => p.status === "available").slice(0, 6);

/**
 * Inline SVG: decorative potted plant for one ledge slot
 */
function PlantSVG() {
  return (
    <svg viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-20">
      {/* Pot */}
      <path d="M24 72 Q20 90 40 90 Q60 90 56 72Z" fill="#B5511F" stroke="#2A160C" strokeWidth="2.5"/>
      <rect x="18" y="68" width="44" height="8" rx="4" fill="#5A2E17" stroke="#2A160C" strokeWidth="2.5"/>
      {/* Stem */}
      <line x1="40" y1="68" x2="40" y2="44" stroke="#1F7A4D" strokeWidth="3" strokeLinecap="round"/>
      {/* Leaves */}
      <ellipse cx="28" cy="52" rx="13" ry="8" fill="#1F7A4D" stroke="#2A160C" strokeWidth="2" transform="rotate(-30 28 52)"/>
      <ellipse cx="52" cy="48" rx="13" ry="8" fill="#1F7A4D" stroke="#2A160C" strokeWidth="2" transform="rotate(30 52 48)"/>
      <ellipse cx="40" cy="38" rx="12" ry="10" fill="#1F7A4D" stroke="#2A160C" strokeWidth="2"/>
      {/* Flower */}
      <circle cx="40" cy="30" r="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="2"/>
      <circle cx="40" cy="30" r="3" fill="#FFE9C7"/>
    </svg>
  );
}

/**
 * Inline SVG: tiny mascot puppy face for the ledge center slot
 */
function MascotFace() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      {/* Body */}
      <ellipse cx="40" cy="52" rx="22" ry="18" fill="#F6B86A" stroke="#2A160C" strokeWidth="2.5"/>
      {/* Head */}
      <circle cx="40" cy="34" r="24" fill="#F6B86A" stroke="#2A160C" strokeWidth="2.5"/>
      {/* Ears */}
      <ellipse cx="20" cy="20" rx="9" ry="13" fill="#e09a4e" stroke="#2A160C" strokeWidth="2.5" transform="rotate(-15 20 20)"/>
      <ellipse cx="60" cy="20" rx="9" ry="13" fill="#e09a4e" stroke="#2A160C" strokeWidth="2.5" transform="rotate(15 60 20)"/>
      {/* Eyes */}
      <circle cx="32" cy="32" r="5" fill="#2A160C"/>
      <circle cx="48" cy="32" r="5" fill="#2A160C"/>
      <circle cx="34" cy="30" r="1.5" fill="white"/>
      <circle cx="50" cy="30" r="1.5" fill="white"/>
      {/* Nose */}
      <ellipse cx="40" cy="40" rx="5" ry="3.5" fill="#5A2E17"/>
      {/* Mouth */}
      <path d="M36 44 Q40 48 44 44" stroke="#2A160C" strokeWidth="2" strokeLinecap="round" fill="none"/>
      {/* Cheeks */}
      <circle cx="26" cy="40" r="4" fill="#FFB8A0" opacity="0.6"/>
      <circle cx="54" cy="40" r="4" fill="#FFB8A0" opacity="0.6"/>
    </svg>
  );
}

/**
 * One arch-shaped portrait in the ledge row.
 * @param {{ puppy: import('@/data/puppies').Puppy, index: number }} props
 */
function LedgePortrait({ puppy, index }) {
  const [hovered, setHovered] = useState(false);

  const isPlant = index === 3; // center slot = plant
  const isMascot = index === 6; // last slot = mascot face

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ transform: hovered ? "translateY(-12px)" : "translateY(0)", transition: "transform 0.3s ease" }}
    >
      {/* Speech bubble */}
      {hovered && !isPlant && !isMascot && (
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap
                     bg-cream border-2 border-cocoa rounded-xl px-3 py-1 text-xs font-bold text-cocoa
                     shadow-[3px_3px_0_#2A160C] z-20"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {puppy.breed}
          {/* Tail */}
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-9px] w-0 h-0
                           border-l-[6px] border-r-[6px] border-t-[9px]
                           border-l-transparent border-r-transparent border-t-cocoa" />
        </div>
      )}

      {/* Arch frame */}
      <div
        className="relative overflow-hidden border-[2.5px] border-cocoa bg-peach"
        style={{
          width: 88,
          height: 108,
          borderRadius: "44px 44px 8px 8px",
          boxShadow: "3px 3px 0 #2A160C",
        }}
      >
        {isPlant ? (
          <div className="flex items-end justify-center w-full h-full pb-1">
            <PlantSVG />
          </div>
        ) : isMascot ? (
          <div className="flex items-center justify-center w-full h-full">
            <MascotFace />
          </div>
        ) : (
          <Image
            src={puppy.images[0]}
            alt={`${puppy.name || puppy.breed} portrait`}
            fill
            sizes="88px"
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

/**
 * Quilted scallop SVG ledge
 */
function QuiltedLedge() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0">
      {/* Quilted diamond pattern background strip */}
      <div
        className="absolute bottom-0 left-0 right-0 h-28"
        style={{
          background: `#FFE9C7`,
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(42,22,12,0.12) 45%, rgba(42,22,12,0.12) 55%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(42,22,12,0.12) 45%, rgba(42,22,12,0.12) 55%, transparent 55%)
          `,
          backgroundSize: "28px 28px",
        }}
      />
      {/* Scallop SVG */}
      <svg
        viewBox="0 0 1440 48"
        preserveAspectRatio="none"
        className="absolute bottom-24 left-0 right-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48 Q30 0 60 48 Q90 0 120 48 Q150 0 180 48 Q210 0 240 48
             Q270 0 300 48 Q330 0 360 48 Q390 0 420 48 Q450 0 480 48
             Q510 0 540 48 Q570 0 600 48 Q630 0 660 48 Q690 0 720 48
             Q750 0 780 48 Q810 0 840 48 Q870 0 900 48 Q930 0 960 48
             Q990 0 1020 48 Q1050 0 1080 48 Q1110 0 1140 48 Q1170 0 1200 48
             Q1230 0 1260 48 Q1290 0 1320 48 Q1350 0 1380 48 Q1410 0 1440 48 Z"
          fill="#FFE9C7"
          stroke="#2A160C"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}

/**
 * Home page Hero section.
 * Peach radial-gradient bg. Script eyebrow. H1. Lede. Two CTAs.
 * Bottom: quilted diamond ledge with 7 arch-shaped puppy portraits.
 */
export default function HomeHero() {
  // 7 slots: indices 0-2 = puppies, 3 = plant, 4-5 = puppies, 6 = mascot
  const slots = [
    LEDGE_PUPPIES[0],
    LEDGE_PUPPIES[1],
    LEDGE_PUPPIES[2],
    null,           // plant
    LEDGE_PUPPIES[3],
    LEDGE_PUPPIES[4],
    null,           // mascot face
  ];

  return (
    <section
      id="hero"
      data-mascot-anchor="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-start pt-10 md:pt-16 overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 120% 80% at 50% 20%, #FFF8EB 0%, #FFE9C7 55%, #F6B86A 100%)",
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-3xl mx-auto">
        {/* Script eyebrow */}
        <p
          className="text-terracotta text-2xl md:text-3xl mb-3 relative inline-block"
          style={{ fontFamily: "var(--font-script)" }}
        >
          every puppy is family
          {/* Wavy underline */}
          <svg
            viewBox="0 0 200 10"
            className="absolute -bottom-2 left-0 right-0 w-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 5 Q25 0 50 5 Q75 10 100 5 Q125 0 150 5 Q175 10 200 5"
              stroke="#B5511F"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </p>

        {/* H1 */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl leading-[1.0] text-cocoa mb-5"
          style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
        >
          Premium teacup
          <br />
          puppies in Dubai
        </h1>

        {/* Lede */}
        <p className="text-cocoa/80 text-base md:text-lg max-w-md mb-8 leading-relaxed">
          Meet your new best friend in our Dubai showroom, or order a rare
          miniature breed from trusted breeders worldwide.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold text-cream
                       border-[2.5px] border-cocoa transition-transform active:scale-95"
            style={{ background: "#B5511F", boxShadow: "4px 4px 0 #2A160C" }}
          >
            View available puppies
          </Link>
          <a
            href="https://wa.me/971000000000?text=Hi%20TeddyPups!%20I%27d%20like%20to%20enquire%20about%20a%20puppy."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-base font-bold text-cocoa
                       border-[2.5px] border-cocoa bg-cream transition-transform active:scale-95"
            style={{ boxShadow: "4px 4px 0 #2A160C" }}
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      {/* Ledge */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Portraits row — sits just above the scallop top */}
        <div className="relative flex justify-center items-end gap-2 sm:gap-4 pb-28 px-4">
          {slots.map((puppy, i) => (
            <LedgePortrait
              key={i}
              puppy={puppy || { breed: "", images: [""] }}
              index={i}
            />
          ))}
        </div>

        {/* Quilted scalloped ledge */}
        <QuiltedLedge />
      </div>
    </section>
  );
}
