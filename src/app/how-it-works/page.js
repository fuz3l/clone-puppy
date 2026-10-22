"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  Search,
  Heart,
  FileCheck,
  Home as HomeIcon,
  Plane,
  ShieldCheck,
  Headphones,
  Award,
  Sparkles,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

/**
 * Storybook Skyline Illustration (Showroom in Dubai)
 */
function DubaiSkyline() {
  return (
    <div className="relative w-full h-44 sm:h-52 bg-[#FFF8EB] border-[2px] border-cocoa rounded-2xl overflow-hidden p-4 flex flex-col justify-between shadow-hard-sm">
      <span
        className="text-xs font-bold text-terracotta tracking-wide"
        style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}
      >
        In our showroom
      </span>

      {/* Golden Sun */}
      <div className="absolute top-4 right-10 w-12 h-12 rounded-full bg-[#F6B86A] opacity-90 border-[1.5px] border-cocoa/30" />

      {/* Skyline outline SVG */}
      <div className="w-full flex items-end justify-center pt-2">
        <svg viewBox="0 0 320 80" className="w-full h-24 text-cocoa stroke-current fill-none stroke-[2]" preserveAspectRatio="none">
          {/* Ground */}
          <line x1="0" y1="78" x2="320" y2="78" strokeWidth="2.5" />
          {/* Building 1 */}
          <rect x="20" y="44" width="22" height="34" />
          {/* Building 2 */}
          <rect x="48" y="32" width="26" height="46" />
          {/* Building 3 */}
          <rect x="80" y="50" width="20" height="28" />
          {/* Burj Khalifa silhouette */}
          <polygon points="120,78 120,40 125,28 127,12 129,28 134,40 134,78" />
          <line x1="127" y1="12" x2="127" y2="4" strokeWidth="2" />
          {/* Building 4 */}
          <rect x="142" y="36" width="24" height="42" />
          {/* Building 5 */}
          <rect x="172" y="46" width="22" height="32" />
          {/* Building 6 */}
          <rect x="200" y="26" width="30" height="52" />
          {/* Building 7 */}
          <rect x="236" y="40" width="24" height="38" />
          {/* Building 8 */}
          <rect x="266" y="52" width="24" height="26" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Storybook Flight Path Illustration (Korea -> Dubai)
 */
function FlightPathIllustration() {
  return (
    <div className="relative w-full h-44 sm:h-52 bg-[#FFF8EB] border-[2px] border-cocoa rounded-2xl overflow-hidden p-4 flex flex-col justify-between shadow-hard-sm">
      <div className="flex justify-between items-center text-xs font-bold text-terracotta tracking-wide">
        <span style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}>Seoul, Korea</span>
        <span style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}>Dubai, UAE</span>
      </div>

      {/* Flight arc */}
      <div className="relative w-full flex items-center justify-center my-auto">
        <svg viewBox="0 0 300 70" className="w-full h-16 stroke-cocoa fill-none stroke-[2]" preserveAspectRatio="none">
          {/* Left city dot */}
          <circle cx="20" cy="55" r="4" fill="#B5511F" stroke="#2A160C" strokeWidth="2" />
          {/* Flight arc curve */}
          <path d="M 20 55 Q 150 5 280 55" strokeDasharray="5 5" strokeWidth="2.5" />
          {/* Right city dot */}
          <circle cx="280" cy="55" r="4" fill="#1F7A4D" stroke="#2A160C" strokeWidth="2" />
        </svg>

        {/* Airplane in center */}
        <div className="absolute top-1 left-1/2 -translate-x-1/2 bg-cream border-2 border-cocoa rounded-full p-2 shadow-hard-sm">
          <Plane className="w-4 h-4 text-terracotta" />
        </div>
      </div>

      <div className="flex justify-between items-center text-[11px] font-bold text-cocoa/60 uppercase">
        <span>Certified Breeders</span>
        <span>VIP Arrival</span>
      </div>
    </div>
  );
}

/**
 * Small mascot cartoon pup
 */
function CartoonPuppy({ className = "w-16 h-16" }) {
  return (
    <div className={`relative ${className} select-none`}>
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
  );
}

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState("dubai"); // "dubai" | "imported"

  const stepList = [
    {
      num: "1",
      icon: Search,
      title: "Explore puppies",
      text: "Browse our showroom puppies online or visit us to see who steals your heart in person.",
    },
    {
      num: "2",
      icon: Heart,
      title: "Choose your pup",
      text: "Fall in love with your favorite teacup puppy, review their health records, and ask any questions.",
    },
    {
      num: "3",
      icon: FileCheck,
      title: "Finalise your choice",
      text: "Transparent pricing, official vet certificates, microchip transfer, and starter pack included.",
    },
    {
      num: "4",
      icon: HomeIcon,
      title: "Take your puppy home",
      text: "Bring your new best friend home same day, or let us arrange safe VIP door-to-door delivery across the UAE.",
    },
  ];

  const quickLinks = [
    { label: "Two ways home", href: "#two-ways-home" },
    { label: "Our puppy promise", href: "#promise" },
    { label: "Delivery & collection", href: "#delivery" },
    { label: "Why choose us", href: "#why-us" },
  ];

  return (
    <div className="min-h-screen bg-cream text-cocoa bg-storybook-dots">
      <Container className="pt-10 md:pt-16 pb-20">
        {/* Page Top Heading & Summary */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-4 border-b-2 border-sand/60">
          <div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-cocoa tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              How it works
            </h1>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-cocoa/80 leading-relaxed font-medium">
              A simple, transparent path to welcoming your new puppy. We guide you
              through every step, from choosing to happy cuddles at home.
            </p>
          </div>
        </div>

        {/* Quick Jump Pill Chips */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-16">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-cocoa/25 bg-milk hover:bg-sand/30 hover:border-cocoa text-xs sm:text-sm font-extrabold text-cocoa shadow-hard-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-terracotta" />
            </a>
          ))}
        </div>

        {/* =========================================================================
            SECTION 1: Two ways home
           ========================================================================= */}
        <section id="two-ways-home" className="mb-20 scroll-mt-28">
          {/* Eyebrow & Section Header + Toggle Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
            <div>
              <p
                className="text-2xl font-bold text-terracotta mb-1"
                style={{ fontFamily: "var(--font-script)" }}
              >
                find your puppy
              </p>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-cocoa tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Two ways home
              </h2>
            </div>

            {/* Segmented Pill Toggle + Mascot Pup */}
            <div className="flex items-center gap-3">
              <div className="inline-flex p-1 rounded-full bg-sand/60 border-2 border-cocoa shadow-hard-sm">
                <button
                  type="button"
                  onClick={() => setActiveTab("dubai")}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-150 ${
                    activeTab === "dubai"
                      ? "bg-terracotta text-white shadow-xs"
                      : "text-cocoa/80 hover:text-cocoa"
                  }`}
                >
                  In Dubai <span className="hidden sm:inline font-normal opacity-90">(ready to meet)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("imported")}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-150 ${
                    activeTab === "imported"
                      ? "bg-terracotta text-white shadow-xs"
                      : "text-cocoa/80 hover:text-cocoa"
                  }`}
                >
                  Imported <span className="hidden sm:inline font-normal opacity-90">(made for you)</span>
                </button>
              </div>

              {/* Little mascot pup illustration */}
              <CartoonPuppy className="w-12 h-12" />
            </div>
          </div>

          {/* Dual Panel (Text left, Illustration right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7">
              {activeTab === "dubai" ? (
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-cocoa mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Meet your puppy in person
                  </h3>
                  <p className="text-base text-cocoa/80 leading-relaxed font-medium">
                    Visit our cozy showroom in Dubai to meet our available teacup
                    puppies. Spend time playing, feeling their gentle temperament,
                    and bonding before making your choice. Take them home the very
                    same day!
                  </p>
                </div>
              ) : (
                <div>
                  <h3
                    className="text-2xl sm:text-3xl font-black text-cocoa mb-3"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Custom Korean teacup import
                  </h3>
                  <p className="text-base text-cocoa/80 leading-relaxed font-medium">
                    Looking for a rare miniature breed? We partner exclusively
                    with certified, reputable breeders in South Korea. We handle
                    live video introductions, comprehensive international vet checks,
                    climate-controlled VIP flights, and UAE customs clearance.
                  </p>
                </div>
              )}
            </div>

            <div className="lg:col-span-5">
              {activeTab === "dubai" ? <DubaiSkyline /> : <FlightPathIllustration />}
            </div>
          </div>

          {/* 4 Process Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stepList.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="border-[2.5px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard flex flex-col justify-between hover:-translate-y-1 transition-transform"
                >
                  <div>
                    {/* Step Number + Icon Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-sand/70 border-2 border-cocoa flex items-center justify-center shadow-xs">
                        <Icon className="w-5 h-5 text-terracotta" />
                      </div>
                      <span
                        className="text-xs font-bold text-terracotta px-2.5 py-0.5 rounded-full bg-sand/40 border border-cocoa/20"
                        style={{ fontFamily: "var(--font-script)", fontSize: "15px" }}
                      >
                        Step {step.num}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h4
                      className="text-lg font-black text-cocoa mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {step.title}
                    </h4>

                    {/* Step Text */}
                    <p className="text-xs sm:text-sm text-cocoa/75 leading-relaxed font-medium">
                      {step.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: Our premium puppy promise
           ========================================================================= */}
        <section id="promise" className="mb-20 scroll-mt-28">
          <div className="border-[2.5px] border-cocoa rounded-3xl bg-[#FFFBF2] p-8 sm:p-12 shadow-hard">
            <p
              className="text-2xl font-bold text-terracotta mb-2"
              style={{ fontFamily: "var(--font-script)" }}
            >
              puppy passport
            </p>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-cocoa tracking-tight mb-10"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our premium puppy promise
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 divide-y md:divide-y-0 md:divide-x-2 divide-cocoa/15 pt-2">
              <div className="pt-6 md:pt-0 md:pr-6">
                <div className="w-12 h-12 rounded-full bg-[#fde3b3] border-2 border-cocoa flex items-center justify-center shadow-hard-sm mb-4">
                  <ShieldCheck className="w-6 h-6 text-terracotta" />
                </div>
                <h3
                  className="text-xl font-black text-cocoa mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  100% Health Guarantee
                </h3>
                <p className="text-sm text-cocoa/75 leading-relaxed font-medium">
                  Every puppy comes fully vaccinated, dewormed, microchipped, and
                  backed by a comprehensive health warranty before leaving our care.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:px-6">
                <div className="w-12 h-12 rounded-full bg-[#fde3b3] border-2 border-cocoa flex items-center justify-center shadow-hard-sm mb-4">
                  <Award className="w-6 h-6 text-terracotta" />
                </div>
                <h3
                  className="text-xl font-black text-cocoa mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ethical Korean Heritage
                </h3>
                <p className="text-sm text-cocoa/75 leading-relaxed font-medium">
                  Hand-selected from top registered breeders in South Korea with
                  certified parentage, ethical care, and verified micro lineage.
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:pl-6">
                <div className="w-12 h-12 rounded-full bg-[#fde3b3] border-2 border-cocoa flex items-center justify-center shadow-hard-sm mb-4">
                  <Headphones className="w-6 h-6 text-terracotta" />
                </div>
                <h3
                  className="text-xl font-black text-cocoa mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Lifetime Pet Concierge
                </h3>
                <p className="text-sm text-cocoa/75 leading-relaxed font-medium">
                  Direct WhatsApp access to our pet care experts for nutrition,
                  potty training, settling in, and ongoing veterinary guidance for life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: Delivery & collection
           ========================================================================= */}
        <section id="delivery" className="mb-20 scroll-mt-28">
          <div className="mb-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black text-cocoa tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Delivery & collection
            </h2>
            <p className="text-base sm:text-lg text-cocoa/80 mt-2 font-medium max-w-2xl">
              Whether you pick up locally in Dubai or receive your pup
              internationally, every journey is VIP-class safe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 4 delivery points */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm">
                <h3
                  className="text-base font-black text-cocoa mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Showroom pickup (same day)
                </h3>
                <p className="text-xs text-cocoa/75 leading-relaxed font-medium">
                  Visit our Dubai showroom, meet your puppy, complete paperwork,
                  and take them home immediately.
                </p>
              </div>

              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm">
                <h3
                  className="text-base font-black text-cocoa mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Chauffeured delivery in Dubai
                </h3>
                <p className="text-xs text-cocoa/75 leading-relaxed font-medium">
                  Air-conditioned, gentle door-to-door transport within Dubai,
                  Abu Dhabi, and across the UAE.
                </p>
              </div>

              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm">
                <h3
                  className="text-base font-black text-cocoa mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Safe international flights
                </h3>
                <p className="text-xs text-cocoa/75 leading-relaxed font-medium">
                  Climate-controlled pet cabins with dedicated travel attendants
                  on trusted premier airlines.
                </p>
              </div>

              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm">
                <h3
                  className="text-base font-black text-cocoa mb-1.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Full travel documentation
                </h3>
                <p className="text-xs text-cocoa/75 leading-relaxed font-medium">
                  All customs clearance, import permits, and international pet
                  passports fully handled for you.
                </p>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-5">
              <FlightPathIllustration />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: Why choose us
           ========================================================================= */}
        <section id="why-us" className="mb-20 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-black text-cocoa tracking-tight mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Why choose us
              </h2>
              <p className="text-base text-cocoa/80 leading-relaxed font-medium">
                We aren&apos;t just matching you with a puppy; we are welcoming you
                into the TeddyPups family. Our commitment to ethical care, transparent
                health screening, and personalized concierge support sets us apart.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sand border-2 border-cocoa flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Sparkles className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3
                    className="text-lg font-black text-cocoa mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Uncompromised care
                  </h3>
                  <p className="text-xs sm:text-sm text-cocoa/75 leading-relaxed font-medium">
                    Every puppy receives daily socialization, premium nutrition,
                    and veterinary checks from birth.
                  </p>
                </div>
              </div>

              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sand border-2 border-cocoa flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <Headphones className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3
                    className="text-lg font-black text-cocoa mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Support 24/7
                  </h3>
                  <p className="text-xs sm:text-sm text-cocoa/75 leading-relaxed font-medium">
                    Direct WhatsApp line to our pet care experts for any questions
                    before and after adoption.
                  </p>
                </div>
              </div>

              <div className="border-[2px] border-cocoa rounded-2xl bg-milk p-5 shadow-hard-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sand border-2 border-cocoa flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                  <ShieldCheck className="w-5 h-5 text-terracotta" />
                </div>
                <div>
                  <h3
                    className="text-lg font-black text-cocoa mb-1"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Health guarantee
                  </h3>
                  <p className="text-xs sm:text-sm text-cocoa/75 leading-relaxed font-medium">
                    Complete peace of mind with a comprehensive health warranty
                    and official pedigree documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: Unique and high quality puppies (CTA Card)
           ========================================================================= */}
        <section className="mb-8">
          <div className="border-[2.5px] border-cocoa rounded-3xl bg-milk p-8 sm:p-12 shadow-hard flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2
                className="text-3xl sm:text-4xl font-black text-cocoa tracking-tight mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Unique and high quality puppies
              </h2>
              <p className="text-sm sm:text-base text-cocoa/80 leading-relaxed font-medium mb-6">
                Every puppy at TeddyPups is hand-selected for health, gentle
                temperament, and signature teacup beauty. Come meet them today or
                chat with us on WhatsApp to find your dream puppy.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/puppies"
                  className="px-6 py-3 rounded-full text-sm font-extrabold text-white bg-terracotta border-2 border-cocoa shadow-hard hover:opacity-95 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                >
                  View available puppies
                </Link>
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-extrabold text-cocoa bg-cream border-2 border-cocoa shadow-hard hover:bg-sand/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                >
                  <MessageCircle className="w-4 h-4 text-green" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Mascot Dog Cartoon */}
            <div className="shrink-0 flex items-center justify-center">
              <CartoonPuppy className="w-28 h-28 sm:w-32 sm:h-32" />
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
