"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowRight, Video } from "lucide-react";
import { puppies } from "@/data/puppies";
import { Puppy } from "@/components/Mascot";

/**
 * Curated list of puppies for the arched doors matching reference
 */
const DOOR_PUPPIES = [
  {
    ...puppies[0], // Max
    displayName: "Max",
    meta: "Maltipoo, boy, 3 months, with video",
    doorColor: "#C06437", // Warm terracotta
    defaultOpen: true,
  },
  {
    ...puppies[1], // Coco
    displayName: "Korean Teacup Maltipoo",
    meta: "girl, 2.5 months, with video",
    doorColor: "#5A2E17", // Dark walnut
    defaultOpen: true,
  },
  {
    ...puppies[2], // Bell
    displayName: "Korean Teacup Poodle",
    meta: "girl, 3 months",
    doorColor: "#D68B3E", // Honey oak
    defaultOpen: false,
  },
  {
    ...puppies[3], // Charlie
    displayName: "Maltipoo & Cavapoo",
    meta: "boy, 3 months Maltipoo & 2 months Cavapoo, with video",
    doorColor: "#9A4222", // Reddish cedar
    defaultOpen: false,
  },
  {
    ...puppies[4], // Teddy
    displayName: "Toy Poodle",
    meta: "boy & girl, 2 months",
    doorColor: "#462312", // Deep espresso
    defaultOpen: false,
  },
  {
    ...puppies[7], // Copper
    displayName: "Copper",
    meta: "Cavapoo, boy, 3 months",
    doorColor: "#C98642", // Caramel wood
    defaultOpen: false,
  },
  {
    ...puppies[6], // Cloud
    displayName: "Pomeranian",
    meta: "girl, 2 months",
    doorColor: "#522714", // Dark wood
    defaultOpen: false,
  },
  {
    ...puppies[8], // Pearl
    displayName: "Shih Tzu",
    meta: "girl, 2 months",
    doorColor: "#AB5330", // Sienna
    defaultOpen: false,
  },
];

/**
 * Single Arched Door Component
 */
function ArchedDoorCard({ pup, index }) {
  // First two doors open by default like the reference screenshot
  const [isOpen, setIsOpen] = useState(pup.defaultOpen ?? false);

  return (
    <div className="flex-shrink-0 flex flex-col items-center w-52 sm:w-60 select-none group">
      {/* Title & Metadata Above Door */}
      <div className="text-center h-20 flex flex-col justify-end pb-3 px-2">
        <h3
          className="text-lg sm:text-xl font-black text-cocoa leading-tight tracking-tight line-clamp-1"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {pup.displayName}
        </h3>
        <p className="text-xs text-cocoa/75 mt-1 font-semibold line-clamp-2 max-w-[210px] leading-snug">
          {pup.meta}
        </p>
      </div>

      {/* Arched Door Frame Container */}
      <div
        className="relative w-48 sm:w-56 h-72 sm:h-80 cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          if (!pup.defaultOpen) setIsOpen(false);
        }}
      >
        {/* Background Arch Slot (Always Visible behind door) */}
        <div
          className="absolute inset-0 bg-[#FFF3DC] border-[2.5px] border-cocoa overflow-hidden shadow-hard"
          style={{ borderRadius: "112px 112px 0 0" }}
        >
          {/* Real Puppy Photo Inside */}
          <div className="relative w-full h-full">
            <Image
              src={pup.images[0]}
              alt={pup.displayName}
              fill
              sizes="(max-width: 640px) 192px, 224px"
              className="object-cover"
            />

            {/* View Profile Overlay Badge when Open */}
            <Link
              href={`/puppies/${pup.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-cream/95 hover:bg-milk text-cocoa border-2 border-cocoa px-3 py-1 rounded-full text-xs font-black shadow-hard-sm hover:scale-105 transition-all flex items-center gap-1 z-10 whitespace-nowrap"
            >
              <span>View {pup.name || "Pup"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 3D Swinging Arched Wooden Door */}
        <div
          className="absolute inset-0 border-[2.5px] border-cocoa z-20 transition-transform duration-500 ease-out origin-left flex flex-col justify-between p-4"
          style={{
            backgroundColor: pup.doorColor,
            borderRadius: "112px 112px 0 0",
            transformOrigin: "left center",
            transform: isOpen ? "rotateY(-108deg)" : "rotateY(0deg)",
            boxShadow: isOpen
              ? "-6px 4px 12px rgba(42, 22, 12, 0.25)"
              : "4px 4px 0 #2A160C",
            backfaceVisibility: "hidden",
          }}
        >
          {/* Subtle Wood Plank Vertical Lines */}
          <div className="absolute inset-0 pointer-events-none flex opacity-20">
            <div className="w-1/2 border-r-2 border-cocoa" />
            <div className="w-1/2" />
          </div>

          {/* Stamped Paw Icon in Top Arch */}
          <div className="w-full flex justify-center pt-8 opacity-75">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="rgba(255, 255, 255, 0.45)"
            >
              <path d="M12 10c-1.5 0-2.8 1.2-2.8 2.7 0 1.2.8 2.2 1.8 2.5v.3c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-.3c1.1-.3 1.8-1.3 1.8-2.5 0-1.5-1.3-2.7-2.8-2.7z" />
              <ellipse
                cx="7.5"
                cy="8.5"
                rx="1.8"
                ry="2.5"
                transform="rotate(-18 7.5 8.5)"
              />
              <ellipse
                cx="16.5"
                cy="8.5"
                rx="1.8"
                ry="2.5"
                transform="rotate(18 16.5 8.5)"
              />
              <ellipse
                cx="10"
                cy="5"
                rx="1.8"
                ry="2.5"
                transform="rotate(-6 10 5)"
              />
              <ellipse
                cx="14"
                cy="5"
                rx="1.8"
                ry="2.5"
                transform="rotate(6 14 5)"
              />
            </svg>
          </div>

          {/* Golden Brass Door Handle/Knob on right edge */}
          <div className="relative w-full flex justify-end pr-2 pb-24">
            <div className="w-3.5 h-3.5 rounded-full bg-[#E8B04A] border-2 border-cocoa shadow-sm" />
          </div>

          {/* Click hint text on door */}
          <div className="text-center text-[11px] font-bold text-white/50 tracking-wider uppercase pb-2">
            Tap to open
          </div>
        </div>

        {/* "Available" Badge on Top Right */}
        <div
          className="absolute -top-2 -right-3 z-30 bg-cream text-cocoa text-xs font-extrabold px-3 py-1 rounded-full border-2 border-cocoa shadow-hard-sm pointer-events-none"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Available
        </div>
      </div>
    </div>
  );
}

/**
 * End Card: "Meet them all"
 */
function MeetAllCard() {
  return (
    <div className="flex-shrink-0 flex flex-col items-center w-52 sm:w-60 justify-end pb-0">
      <div className="h-20" />
      <Link
        href="/puppies"
        className="w-48 sm:w-56 h-72 sm:h-80 border-[2.5px] border-dashed border-cocoa bg-[#FFF4DC] hover:bg-[#FFEECB] rounded-t-[112px] shadow-hard flex flex-col items-center justify-center p-6 text-center group transition-all duration-200"
      >
        <div className="w-14 h-14 rounded-full bg-[#F6B86A] border-2 border-cocoa flex items-center justify-center shadow-hard-sm mb-4 group-hover:scale-110 transition-transform">
          <ArrowRight className="w-7 h-7 text-cocoa" />
        </div>
        <h4
          className="text-2xl font-black text-cocoa mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Meet them all
        </h4>
        <p className="text-xs font-bold text-cocoa/75">
          See all 15+ available teacup puppies
        </p>
      </Link>
    </div>
  );
}

/**
 * "Meet the pups" Section
 */
export default function MeetThePups() {
  const [mascotMood, setMascotMood] = useState("idle");
  const [speech, setSpeech] = useState("Woof! Pick your puppy! 🐾");

  const handleMascotClick = () => {
    const moods = ["jump", "play", "curious", "sneeze"];
    const sayings = [
      "I love these puppies! 💛",
      "They are all so cute!",
      "Teacup Maltipoos are my faves!",
      "Ready to go home with you! 🏡",
    ];
    const nextIndex = Math.floor(Math.random() * moods.length);
    setMascotMood(moods[nextIndex]);
    setSpeech(sayings[nextIndex]);
    setTimeout(() => setMascotMood("idle"), 1400);
  };

  return (
    <section
      id="meet-pups"
      data-mascot-anchor="meet-pups"
      className="relative pt-16 md:pt-24 bg-[#FFF9EE] overflow-hidden"
    >
      {/* Top Header Row */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-cocoa tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Meet the pups
          </h2>
          <p className="text-base sm:text-lg text-cocoa/80 mt-2 font-medium">
            Real puppies, real photos, looking for their families right now.
          </p>
        </div>

        {/* Terracotta Action Button */}
        <div>
          <Link
            href="/puppies"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-extrabold text-white border-[2.5px] border-cocoa shadow-hard hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150"
            style={{ backgroundColor: "#B5511F" }}
          >
            <span>See all available puppies</span>
          </Link>
        </div>
      </div>

      {/* Arched Doors Horizontal Track Area */}
      <div className="relative">
        {/* Horizontal Scroll Track */}
        <div className="overflow-x-auto pb-4 pt-2 px-4 sm:px-8 flex gap-4 sm:gap-6 no-scrollbar scroll-smooth">
          {DOOR_PUPPIES.map((pup, index) => (
            <ArchedDoorCard key={pup.slug} pup={pup} index={index} />
          ))}
          <MeetAllCard />
        </div>

        {/* Interactive Mascot Puppy on the Floor */}
        <div className="relative max-w-[1240px] mx-auto px-4 pointer-events-none">
          <div
            className="absolute -top-20 left-12 sm:left-48 z-30 pointer-events-auto cursor-pointer"
            onClick={handleMascotClick}
            title="Pet me!"
          >
            {/* Speech Bubble */}
            {speech && (
              <div
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-cream border-2 border-cocoa rounded-xl px-3 py-1 text-xs font-bold text-cocoa shadow-hard-sm whitespace-nowrap animate-bounce"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {speech}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-0 border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-cocoa" />
              </div>
            )}

            {/* Mascot Puppy Figure */}
            <div className="w-24 h-24 hover:scale-105 transition-transform">
              <Puppy mood={mascotMood} />
            </div>
          </div>
        </div>

        {/* Wooden Plank Floor Strip */}
        <div className="relative w-full h-20 sm:h-24 bg-[#E29B52] border-t-[2.5px] border-cocoa overflow-hidden flex">
          {/* Vertical Plank Seam Dividers */}
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 border-r-2 border-[#BE7833] h-full opacity-60"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
