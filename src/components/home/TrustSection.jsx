"use client";

import Container from "@/components/ui/Container";
import { Heart, Plane, MessageSquare, Globe } from "lucide-react";

/**
 * TrustSection Component ("Why families trust us" / "puppy passport")
 * Exact match to visual reference:
 * - Caramel/terracotta backdrop
 * - Open leather-bound passport / notebook with cream guilloche pages
 * - Left page: script "puppy passport" + H2 "Why families trust TeddyPups" + sitting mascot puppy
 * - Right page: 4 authentic passport stamps with icons and guarantees
 */
export default function TrustSection() {
  return (
    <section
      id="trust"
      data-mascot-anchor="trust"
      className="relative pt-16 sm:pt-20 pb-20 sm:pb-24 overflow-hidden"
      style={{ backgroundColor: "#D4803C" }}
    >
      <Container>
        {/* Open Passport / Notebook Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl p-3 sm:p-5 shadow-[8px_10px_0_#2A160C] bg-[#5A2E17] border-[3px] border-cocoa">
          {/* Inner Open Pages (Left & Right Pages) */}
          <div
            className="relative rounded-2xl bg-[#FFFDF7] border-2 border-cocoa/40 overflow-hidden shadow-inner grid grid-cols-1 md:grid-cols-2"
            style={{
              backgroundImage: `
                radial-gradient(circle at 50% 50%, rgba(181, 81, 31, 0.05) 0, rgba(181, 81, 31, 0.05) 12px, transparent 13px),
                radial-gradient(circle at 0% 0%, rgba(42, 22, 12, 0.04) 0, rgba(42, 22, 12, 0.04) 20px, transparent 21px)
              `,
              backgroundSize: "44px 44px, 60px 60px",
            }}
          >
            {/* Center Gutter / Spine Fold Divider */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 pointer-events-none z-10 bg-gradient-to-r from-transparent via-cocoa/10 to-transparent border-x border-cocoa/15" />

            {/* =========================================================================
                LEFT PAGE: Title, Passport Eyebrow & Mascot Puppy
               ========================================================================= */}
            <div className="p-8 sm:p-12 md:pr-10 flex flex-col justify-between relative">
              <div>
                {/* Script Eyebrow */}
                <p
                  className="text-2xl sm:text-3xl font-bold text-[#B5511F] mb-3"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  puppy passport
                </p>

                {/* Display Title */}
                <h2
                  className="text-4xl sm:text-5xl md:text-5xl font-black text-cocoa tracking-tight leading-[1.05]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why
                  <br />
                  families trust
                  <br />
                  TeddyPups
                </h2>
              </div>

              {/* Sitting Mascot Puppy at Bottom of Left Page */}
              <div className="relative pt-12 sm:pt-16 flex justify-end md:justify-center pr-4 md:pr-0 select-none">
                <div className="w-24 sm:w-28 h-24 sm:h-28 hover:scale-105 transition-transform cursor-pointer">
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

            {/* =========================================================================
                RIGHT PAGE: 4 Passport Stamps Grid
               ========================================================================= */}
            <div className="p-8 sm:p-12 md:pl-10 grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-8 items-center border-t md:border-t-0 border-cocoa/15">
              {/* Stamp 1: Vet-checked & healthy */}
              <div className="flex flex-col items-center text-center">
                {/* Round Brown Stamp */}
                <div
                  className="w-24 h-24 rounded-full border-2 border-dashed border-[#B5511F] p-1 flex items-center justify-center mb-3 -rotate-2 shadow-xs"
                  style={{ backgroundColor: "rgba(181, 81, 31, 0.04)" }}
                >
                  <div className="w-full h-full rounded-full border border-[#B5511F] flex flex-col items-center justify-center p-2">
                    <Heart className="w-4 h-4 text-[#B5511F] mb-1" />
                    <span
                      className="text-[10px] font-black text-[#B5511F] uppercase tracking-wider leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Vet-checked
                      <br />
                      &amp; healthy
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-cocoa/75 leading-relaxed font-medium">
                  Every puppy comes vaccinated, dewormed, and with a verified
                  health certificate.
                </p>
              </div>

              {/* Stamp 2: Korea to Dubai, safely */}
              <div className="flex flex-col items-center text-center">
                {/* Rectangular Green Airmail Stamp */}
                <div
                  className="w-28 h-20 rounded-md border-2 border-dashed border-[#1F7A4D] p-1 flex items-center justify-center mb-3 rotate-2 shadow-xs"
                  style={{ backgroundColor: "rgba(31, 122, 77, 0.04)" }}
                >
                  <div className="w-full h-full rounded-sm border border-[#1F7A4D] flex flex-col items-center justify-center p-2">
                    <Plane className="w-4 h-4 text-[#1F7A4D] mb-1" />
                    <span
                      className="text-[10px] font-black text-[#1F7A4D] uppercase tracking-wider leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Korea to
                      <br />
                      Dubai, safely
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-cocoa/75 leading-relaxed font-medium">
                  Trusted breeders, safe travel, and premium care from start to
                  finish.
                </p>
              </div>

              {/* Stamp 3: Support 24/7 */}
              <div className="flex flex-col items-center text-center">
                {/* Oval Brown Stamp */}
                <div
                  className="w-28 h-18 rounded-full border-2 border-dashed border-cocoa/60 p-1 flex items-center justify-center mb-3 -rotate-3 shadow-xs"
                  style={{ backgroundColor: "rgba(42, 22, 12, 0.04)" }}
                >
                  <div className="w-full h-full rounded-full border border-cocoa/60 flex flex-col items-center justify-center p-2">
                    <MessageSquare className="w-4 h-4 text-cocoa/70 mb-0.5" />
                    <span
                      className="text-[10px] font-black text-cocoa/80 uppercase tracking-wider leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Support 24/7
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-cocoa/75 leading-relaxed font-medium">
                  Always here to help, from choosing your puppy to post-delivery
                  support.
                </p>
              </div>

              {/* Stamp 4: Trusted by families worldwide */}
              <div className="flex flex-col items-center text-center">
                {/* Circular Scalloped/Dotted Rust Stamp */}
                <div
                  className="w-24 h-24 rounded-full border-2 border-dotted border-[#B5511F] p-1 flex items-center justify-center mb-3 rotate-3 shadow-xs"
                  style={{ backgroundColor: "rgba(181, 81, 31, 0.05)" }}
                >
                  <div className="w-full h-full rounded-full border border-[#B5511F] flex flex-col items-center justify-center p-2">
                    <Globe className="w-4 h-4 text-[#B5511F] mb-1" />
                    <span
                      className="text-[9px] font-black text-[#B5511F] uppercase tracking-wider leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Trusted
                      <br />
                      by families
                      <br />
                      worldwide
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-xs text-cocoa/75 leading-relaxed font-medium">
                  Puppies delivered to loving homes all around the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
