"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * 12 Curated Polaroid Moments of Happy Families with their Puppies
 */
const POLAROID_MOMENTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80",
    caption: "Lulu 🐾 with her new mummy ❤️",
    rotate: "-rotate-2",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80",
    caption: "Elevator mirror selfie on the way home 🛗",
    rotate: "rotate-1",
    tapeOffset: "top-[-12px] left-1/3 -translate-x-1/2 -rotate-3",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80",
    caption: "Coco settling right into the family couch 🛋️",
    rotate: "-rotate-1",
    tapeOffset: "top-[-10px] right-1/4 translate-x-1/2 rotate-2",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    caption: "Snowflake 🤍 the princess of Downtown Dubai",
    rotate: "rotate-2",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80",
    caption: "First morning garden cuddles with Milo ☀️",
    rotate: "-rotate-3",
    tapeOffset: "top-[-11px] left-1/4 -rotate-6",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80",
    caption: "Toby taking his first nap after arriving 😴",
    rotate: "rotate-2",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?auto=format&fit=crop&w=600&q=80",
    caption: "Dubai Marina view with little Bella 🌴",
    rotate: "-rotate-1",
    tapeOffset: "top-[-12px] right-1/3 rotate-3",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80",
    caption: "The kids couldn't believe their surprise! 🎁",
    rotate: "rotate-3",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2 -rotate-1",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=600&q=80",
    caption: "First road trip with our little Teddy 🚗",
    rotate: "-rotate-2",
    tapeOffset: "top-[-10px] left-1/3",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=600&q=80",
    caption: "Dinner time is serious business for Leo 🍖",
    rotate: "rotate-1",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2 rotate-2",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?auto=format&fit=crop&w=600&q=80",
    caption: "Pure love at first sight with Daisy 🌸",
    rotate: "-rotate-2",
    tapeOffset: "top-[-12px] right-1/4 -rotate-3",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?auto=format&fit=crop&w=600&q=80",
    caption: "First puppyccino date in Jumeirah ☕",
    rotate: "rotate-2",
    tapeOffset: "top-[-10px] left-1/2 -translate-x-1/2",
  },
];

export default function HappyFamiliesPage() {
  return (
    <div
      className="min-h-screen text-cocoa overflow-hidden"
      style={{
        backgroundColor: "#FFF8EC",
        backgroundImage: `repeating-linear-gradient(
          90deg,
          transparent,
          transparent 38px,
          rgba(42, 22, 12, 0.035) 38px,
          rgba(42, 22, 12, 0.035) 40px
        )`,
      }}
    >
      <Container className="pt-10 md:pt-16 pb-12">
        {/* Top Header & Pinned Note Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 md:mb-20">
          {/* Left Column: Heading, Subtitle & Heart */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Script Eyebrow */}
            <p
              className="text-2xl sm:text-3xl font-bold text-[#B5511F] mb-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              our wall of happy endings
            </p>

            {/* Display Title with Hand-drawn Heart Outline */}
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-4">
              <h1
                className="text-5xl sm:text-6xl md:text-7xl font-black text-cocoa tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Happy families
              </h1>

              {/* Hand-drawn Outline Heart */}
              <svg
                viewBox="0 0 32 32"
                className="w-10 h-10 sm:w-12 sm:h-12 text-[#B5511F] stroke-current fill-none stroke-[2.5]"
                style={{ transform: "rotate(10deg)" }}
              >
                <path
                  d="M16 27 C16 27 4 19 4 10.5 C4 5.5 8 2.5 12.5 2.5 C14.8 2.5 15.6 3.8 16 4.8 C16.4 3.8 17.2 2.5 19.5 2.5 C24 2.5 28 5.5 28 10.5 C28 19 16 27 16 27 Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Lede Paragraph */}
            <p className="text-base sm:text-lg text-cocoa/80 leading-relaxed max-w-xl mb-4 font-medium">
              Nothing makes us happier than seeing our puppies in loving homes!
              Here are some beautiful moments shared by our amazing clients
              after welcoming their furry friends.
            </p>

            {/* Moment Counter */}
            <p
              className="text-xl sm:text-2xl font-bold text-[#B5511F]"
              style={{ fontFamily: "var(--font-script)" }}
            >
              64 moments and counting
            </p>
          </div>

          {/* Right Column: Lined Paper Notepad Note with Washi Tape */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md bg-[#FFFDF9] border border-cocoa/15 rounded-md p-6 sm:p-7 shadow-[4px_6px_16px_rgba(42,22,12,0.08),2px_2px_0_#2A160C] rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Washi Tape Strip at top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#F3D9A8]/90 border border-cocoa/15 shadow-xs -rotate-1 rounded-xs flex items-center justify-center pointer-events-none">
                <div className="w-full h-full opacity-30 bg-repeat-x bg-[length:6px_6px]" />
              </div>

              {/* Lined Notebook Paper Lines Pattern */}
              <div
                className="w-full"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    transparent,
                    transparent 24px,
                    rgba(42, 22, 12, 0.08) 24px,
                    rgba(42, 22, 12, 0.08) 25px
                  )`,
                  lineHeight: "25px",
                }}
              >
                <p className="text-xs sm:text-sm text-cocoa/85 font-medium italic pt-1 mb-4">
                  &ldquo;TeddyPups truly made our dream a reality. They supported
                  us at every step of the import journey. Our Maltipoo arrived
                  healthy, cheerful, and absolutely perfect. Having 24/7 support
                  throughout the process gave us complete peace of mind.&rdquo;
                </p>

                <p className="text-xs sm:text-sm font-bold text-[#B5511F] pt-1">
                  Sarah M., Dubai, UAE
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Polaroid Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-9 mb-20">
          {POLAROID_MOMENTS.map((item) => (
            <div
              key={item.id}
              className={`relative bg-white border border-cocoa/15 p-3.5 pb-5 rounded-xs shadow-[4px_6px_18px_rgba(42,22,12,0.12),2px_2px_0_#2A160C] transition-all duration-300 ease-out hover:rotate-0 hover:scale-105 hover:z-20 hover:shadow-2xl ${item.rotate}`}
            >
              {/* Adhesive Washi Tape Strip */}
              <div
                className={`absolute ${item.tapeOffset} w-20 h-5 bg-[#F3D9A8]/85 border border-cocoa/15 shadow-xs z-10 pointer-events-none`}
              />

              {/* Photo Area */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xs bg-[#F7F2EB] border border-cocoa/10 mb-3">
                <Image
                  src={item.image}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Handwritten Script Caption at bottom of Polaroid */}
              <div className="text-center px-1">
                <p
                  className="text-sm sm:text-base font-semibold text-cocoa/90 leading-tight"
                  style={{ fontFamily: "var(--font-script)" }}
                >
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </div>
  );
}
