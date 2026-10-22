"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * TwoWaysSection Component
 * Exact match to visual reference:
 * - Center wooden signpost with 2 arrow signs ("Puppies in Dubai" & "Imported for you")
 * - Left: Dubai skyline silhouette + striped awning showroom window + "Meet local puppies"
 * - Right: Dotted flight path arc with puppy airplane + "See imported puppies"
 * - Mascot puppy standing at the base of the signpost
 */
export default function TwoWaysSection() {
  return (
    <section
      id="two-ways"
      data-mascot-anchor="two-ways"
      className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 overflow-hidden"
      style={{ backgroundColor: "#FDE6C0" }}
    >
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-cocoa tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Two ways to
            <br className="sm:hidden" /> meet your puppy
          </h2>
        </div>

        {/* Interactive Signpost & Dual Columns */}
        <div className="relative">
          {/* Wooden Arrow Signs & Vertical Pole (Centered on Desktop) */}
          <div className="relative z-20 flex flex-col items-center mb-6">
            <div className="flex items-center justify-center gap-1 sm:gap-3">
              {/* Left Arrow Sign: Puppies in Dubai */}
              <div
                className="relative px-5 sm:px-7 py-2 sm:py-2.5 bg-[#C98B54] border-[2.5px] border-cocoa shadow-hard text-cocoa font-black text-base sm:text-xl select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  clipPath: "polygon(18px 0%, 100% 0%, 100% 100%, 18px 100%, 0% 50%)",
                }}
              >
                <span className="pl-3 sm:pl-4">Puppies in Dubai</span>
              </div>

              {/* Right Arrow Sign: Imported for you */}
              <div
                className="relative px-5 sm:px-7 py-2 sm:py-2.5 bg-[#C98B54] border-[2.5px] border-cocoa shadow-hard text-cocoa font-black text-base sm:text-xl select-none"
                style={{
                  fontFamily: "var(--font-display)",
                  clipPath: "polygon(0% 0%, calc(100% - 18px) 0%, 100% 50%, calc(100% - 18px) 100%, 0% 100%)",
                }}
              >
                <span className="pr-3 sm:pr-4">Imported for you</span>
              </div>
            </div>

            {/* Wooden Center Post Pole (extends down to floor) */}
            <div
              className="w-4 sm:w-5 bg-[#8C522B] border-x-[2.5px] border-cocoa absolute top-8 bottom-[-220px] sm:bottom-[-260px] z-0 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(42,22,12,0.12) 3px, rgba(42,22,12,0.12) 4px)",
              }}
            />
          </div>

          {/* Dual Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-end relative z-10 pt-4 sm:pt-6">
            {/* =========================================================================
                LEFT SIDE: Local Dubai Showroom
               ========================================================================= */}
            <div className="flex flex-col items-center text-center px-4">
              {/* Showroom Window with Striped Awning & Skyline */}
              <div className="relative w-full max-w-sm h-56 sm:h-64 flex items-end justify-center mb-6">
                {/* Background Skyline Silhouette */}
                <div className="absolute inset-x-0 bottom-2 flex items-end justify-center opacity-65 pointer-events-none">
                  <svg
                    viewBox="0 0 280 80"
                    className="w-full h-24 stroke-cocoa stroke-[2] fill-none"
                    preserveAspectRatio="none"
                  >
                    <rect x="10" y="44" width="22" height="34" />
                    <rect x="36" y="30" width="24" height="48" />
                    <rect x="64" y="48" width="18" height="30" />
                    {/* Burj silhouette */}
                    <polygon points="100,78 100,38 104,26 106,12 108,26 112,38 112,78" />
                    <line x1="106" y1="12" x2="106" y2="4" strokeWidth="2" />
                    <rect x="120" y="36" width="22" height="42" />
                    <rect x="146" y="46" width="20" height="32" />
                    <rect x="170" y="24" width="28" height="54" />
                    <rect x="202" y="38" width="22" height="40" />
                    <rect x="228" y="50" width="20" height="28" />
                    <line x1="0" y1="78" x2="280" y2="78" strokeWidth="2.5" />
                  </svg>
                </div>

                {/* Showroom Shop Frame with Striped Awning */}
                <div className="relative z-10 w-32 sm:w-36 h-44 sm:h-48 border-[2.5px] border-cocoa bg-milk shadow-hard flex flex-col justify-between overflow-hidden">
                  {/* Striped Awning */}
                  <div className="w-full h-6 flex overflow-hidden border-b-2 border-cocoa">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${
                          i % 2 === 0 ? "bg-[#B5511F]" : "bg-[#FFFDF8]"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Real puppy photo in showroom */}
                  <div className="relative flex-1 w-full bg-sand/30">
                    <Image
                      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80"
                      alt="Puppy in showroom"
                      fill
                      sizes="144px"
                      className="object-cover"
                    />
                  </div>

                  {/* "In our showroom" bottom caption */}
                  <div className="py-1 px-1 bg-cream/95 border-t border-cocoa/20 text-center">
                    <span
                      className="text-[11px] font-bold text-cocoa tracking-tight"
                      style={{ fontFamily: "var(--font-script)" }}
                    >
                      In our showroom
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-cocoa/85 font-medium leading-relaxed max-w-xs mb-6">
                See them, love them, take them home. Come meet our locally
                available puppies before you decide.
              </p>

              {/* Action Button */}
              <Link
                href="/puppies?origin=local"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#B5511F] hover:bg-[#9E4316] text-white text-xs sm:text-sm font-extrabold border-2 border-cocoa shadow-hard hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150"
              >
                Meet local puppies
              </Link>
            </div>

            {/* =========================================================================
                RIGHT SIDE: Korean Imports with Flight Arc
               ========================================================================= */}
            <div className="flex flex-col items-center text-center px-4">
              {/* Flight Arc & Airplane */}
              <div className="relative w-full max-w-sm h-56 sm:h-64 flex items-end justify-center mb-6">
                {/* Dotted Flight Path Curve */}
                <div className="relative w-full h-44 sm:h-48 flex items-center justify-center">
                  <svg
                    viewBox="0 0 320 140"
                    className="w-full h-full stroke-cocoa fill-none stroke-[2.5]"
                    preserveAspectRatio="none"
                  >
                    {/* Dotted arc */}
                    <path
                      d="M 30 110 Q 160 10 290 110"
                      strokeDasharray="6 6"
                      stroke="#B5511F"
                    />
                    {/* Korea dot */}
                    <circle cx="30" cy="110" r="4.5" fill="#B5511F" stroke="#2A160C" strokeWidth="2" />
                    {/* Dubai dot */}
                    <circle cx="290" cy="110" r="4.5" fill="#B5511F" stroke="#2A160C" strokeWidth="2" />
                  </svg>

                  {/* Korea & Dubai Labels */}
                  <span
                    className="absolute bottom-2 left-4 text-xs font-bold text-cocoa tracking-wide"
                    style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}
                  >
                    Korea
                  </span>
                  <span
                    className="absolute bottom-2 right-4 text-xs font-bold text-cocoa tracking-wide"
                    style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}
                  >
                    Dubai
                  </span>

                  {/* Airplane flying on arc with puppy window */}
                  <div
                    className="absolute top-7 left-1/2 -translate-x-1/2"
                    style={{ transform: "translate(-50%, -20%) rotate(8deg)" }}
                  >
                    <div className="relative w-28 h-16 sm:w-32 sm:h-18">
                      <svg viewBox="0 0 140 70" className="w-full h-full" fill="none">
                        {/* Plane Tail Fin */}
                        <polygon
                          points="18,35 6,8 30,12 38,35"
                          fill="#B5511F"
                          stroke="#2A160C"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        {/* Lower Wing */}
                        <polygon
                          points="60,40 50,65 72,60 84,40"
                          fill="#B5511F"
                          stroke="#2A160C"
                          strokeWidth="2.5"
                          strokeLinejoin="round"
                        />
                        {/* Fuselage Body */}
                        <path
                          d="M 14 38 C 14 26 36 20 80 20 C 114 20 134 28 134 38 C 134 48 114 54 80 54 C 36 54 14 48 14 38 Z"
                          fill="#FFFDF8"
                          stroke="#2A160C"
                          strokeWidth="2.5"
                        />
                        {/* Cockpit / Nose line */}
                        <path
                          d="M 120 28 Q 130 38 120 46"
                          stroke="#2A160C"
                          strokeWidth="2"
                        />
                      </svg>

                      {/* Round Puppy Window in Center of Plane */}
                      <div className="absolute top-1/2 left-[52%] -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 border-cocoa overflow-hidden shadow-xs bg-sand">
                        <Image
                          src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=160&q=80"
                          alt="Puppy in plane"
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-cocoa/85 font-medium leading-relaxed max-w-xs mb-6">
                Exclusive Korean teacup puppies, delivered. Order from the
                world&apos;s most reputable breeders and let us handle the import.
              </p>

              {/* Action Button */}
              <Link
                href="/puppies?origin=imported"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#B5511F] hover:bg-[#9E4316] text-white text-xs sm:text-sm font-extrabold border-2 border-cocoa shadow-hard hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150"
              >
                See imported puppies
              </Link>
            </div>
          </div>

          {/* Mascot Puppy Standing at the Signpost Base */}
          <div className="relative flex justify-center pt-2 sm:pt-4 z-30 select-none">
            <div className="w-20 sm:w-24 h-20 sm:h-24 hover:scale-105 transition-transform cursor-pointer">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                {/* Tail */}
                <path d="M78 68 Q92 60 90 48" stroke="#2A160C" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="89" cy="46" r="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                {/* Body */}
                <ellipse cx="56" cy="72" rx="28" ry="18" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                {/* Paws */}
                <ellipse cx="40" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                <ellipse cx="58" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                <ellipse cx="74" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                {/* Head */}
                <circle cx="34" cy="46" r="22" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                {/* Ears */}
                <ellipse cx="18" cy="38" rx="7" ry="14" fill="#E2943A" stroke="#2A160C" strokeWidth="3" transform="rotate(-15 18 38)" />
                <ellipse cx="50" cy="38" rx="7" ry="14" fill="#E2943A" stroke="#2A160C" strokeWidth="3" transform="rotate(15 50 38)" />
                {/* Eyes */}
                <circle cx="28" cy="44" r="3.5" fill="#2A160C" />
                <circle cx="40" cy="44" r="3.5" fill="#2A160C" />
                <circle cx="29" cy="43" r="1" fill="#FFFDF8" />
                <circle cx="41" cy="43" r="1" fill="#FFFDF8" />
                {/* Nose */}
                <ellipse cx="34" cy="52" rx="3.5" ry="2.5" fill="#5A2E17" />
                {/* Mouth */}
                <path d="M32 55 Q34 57 36 55" stroke="#2A160C" strokeWidth="2" strokeLinecap="round" />
                {/* Collar */}
                <path d="M22 64 Q34 70 46 64" stroke="#B5511F" strokeWidth="4.5" strokeLinecap="round" />
                <circle cx="34" cy="68" r="2.5" fill="#E8B04A" stroke="#2A160C" strokeWidth="1.5" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
