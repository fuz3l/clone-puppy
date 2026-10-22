"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { MessageCircle, MapPin, ExternalLink, Check, PawPrint } from "lucide-react";

/**
 * Striped Shop Awning SVG
 */
function ShopAwning() {
  return (
    <div className="w-full overflow-hidden">
      <svg viewBox="0 0 320 28" preserveAspectRatio="none" className="w-full h-7">
        <defs>
          <pattern id="awning-stripes" width="32" height="28" patternUnits="userSpaceOnUse">
            {/* Terracotta stripe */}
            <rect x="0" y="0" width="16" height="24" fill="#B5511F" />
            {/* Cream stripe */}
            <rect x="16" y="0" width="16" height="24" fill="#FFFDF8" />
            {/* Scallop bottom curve */}
            <path d="M 0 24 Q 8 28 16 24 Q 24 28 32 24" stroke="#2A160C" strokeWidth="1.5" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="24" fill="url(#awning-stripes)" />
        <line x1="0" y1="24" x2="320" y2="24" stroke="#2A160C" strokeWidth="2" />
        <rect width="100%" height="4" y="24" fill="none" />
      </svg>
    </div>
  );
}

/**
 * Cute Standing Poodle Mascot SVG
 */
function StandingPoodle({ className = "w-20 h-20" }) {
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    breed: "any puppy (not sure yet)",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="min-h-screen text-cocoa overflow-hidden"
      style={{
        backgroundColor: "#FFF8EC",
        backgroundImage: `radial-gradient(rgba(42, 22, 12, 0.08) 1.5px, transparent 1.5px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <Container className="pt-10 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* =========================================================================
              LEFT COLUMN: Heading, WhatsApp, Direct Contacts, Showroom Shop Card
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Huge Heading */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-cocoa tracking-tight leading-[0.95] mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get in touch
              <br />
              with us
            </h1>

            {/* WhatsApp Pill Button */}
            <a
              href="https://wa.me/971501234567?text=Hi%20TeddyPups!%20I%27d%20like%20to%20enquire%20about%20a%20puppy."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#1F7A4D] hover:bg-[#196640] text-white text-xs sm:text-sm font-bold border-2 border-cocoa shadow-hard hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150 mb-7"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp +971 50 123 4567</span>
            </a>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-3.5 mb-9 text-xs sm:text-sm font-semibold text-cocoa/80">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-cocoa/50 font-bold mb-0.5">
                  call us
                </span>
                <a
                  href="tel:+971501234567"
                  className="text-terracotta hover:underline font-bold text-sm sm:text-base"
                >
                  +971 50 123 4567
                </a>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-cocoa/50 font-bold mb-0.5">
                  email
                </span>
                <a
                  href="mailto:teddypupsadmin@gmail.com"
                  className="text-terracotta hover:underline font-bold text-sm sm:text-base"
                >
                  teddypupsadmin@gmail.com
                </a>
              </div>
            </div>

            {/* Storefront Card ("Visit us in Downtown Dubai") */}
            <div className="w-full border-[2.5px] border-cocoa rounded-2xl bg-milk shadow-hard overflow-hidden">
              {/* Striped Awning at Top */}
              <ShopAwning />

              <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
                <div className="flex-1">
                  <h3
                    className="text-xl sm:text-2xl font-black text-cocoa leading-tight mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Visit us in
                    <br />
                    Downtown Dubai
                  </h3>

                  <p className="text-xs text-cocoa/75 leading-relaxed font-medium mb-4">
                    Step into our Downtown Dubai showroom and experience the joy
                    of choosing your puppy face-to-face.
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-cocoa mb-4">
                    <PawPrint className="w-3.5 h-3.5 text-terracotta shrink-0" />
                    <span>Downtown Dubai, United Arab Emirates</span>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Downtown+Dubai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cream hover:bg-sand/40 border-2 border-cocoa text-xs font-extrabold text-cocoa shadow-hard-sm hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-cocoa/60" />
                  </a>
                </div>

                {/* Arched Window with Puppy Photo */}
                <div className="w-24 sm:w-28 h-36 sm:h-40 shrink-0 relative rounded-t-full border-2 border-cocoa overflow-hidden shadow-hard-sm bg-sand">
                  <Image
                    src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=400&q=80"
                    alt="Puppy in showroom"
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Lede Paragraph + Storybook Postcard Form + Mascot
             ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Lede Paragraph at top right */}
            <p className="text-sm sm:text-base text-cocoa/85 leading-relaxed font-medium mb-6 max-w-xl">
              Have questions about our puppies or adoption process? Fill out the
              form, and our team will get back to you promptly. Whether ready to
              adopt or just seeking info, we&apos;d love to hear from you!
            </p>

            {/* Vintage Storybook Postcard Form */}
            <div className="relative border-[2.5px] border-cocoa rounded-2xl bg-[#FFFDF8] p-6 sm:p-9 shadow-hard">
              {/* Postage Stamp on Top Right */}
              <div className="absolute top-5 right-5 sm:top-7 sm:right-7 w-12 h-14 sm:w-14 sm:h-16 rounded-xs bg-[#FDE3B3] border-2 border-dashed border-cocoa/40 shadow-xs flex flex-col items-center justify-center -rotate-3 pointer-events-none">
                <PawPrint className="w-5 h-5 text-terracotta" />
                <span className="text-[9px] font-black tracking-widest text-cocoa/60 mt-1 uppercase">
                  TeddyPups
                </span>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-[#1F7A4D] border-2 border-cocoa flex items-center justify-center text-white mb-4 shadow-hard-sm">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3
                    className="text-2xl font-black text-cocoa mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Your letter is on its way! 💌
                  </h3>
                  <p className="text-sm text-cocoa/80 max-w-md leading-relaxed font-medium mb-6">
                    Thank you! Our concierge team will review your message and reach
                    out via WhatsApp or email shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-full border-2 border-cocoa bg-sand text-xs font-bold text-cocoa shadow-hard-sm hover:-translate-y-0.5 active:translate-y-0 transition-transform"
                  >
                    Send another note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm sm:text-base text-cocoa leading-loose font-medium">
                  {/* Greeting */}
                  <h3
                    className="text-xl sm:text-2xl font-black text-cocoa tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Dear TeddyPups,
                  </h3>

                  {/* Fill in the blank: Name & Phone */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                    <span>my name is</span>
                    <input
                      type="text"
                      required
                      placeholder="your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="border-b-2 border-dashed border-cocoa/50 bg-transparent px-2 py-0.5 focus:border-terracotta focus:outline-none min-w-[140px] text-terracotta font-bold"
                    />
                    <span>, and you can reach me on</span>
                    <input
                      type="tel"
                      required
                      placeholder="+971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="border-b-2 border-dashed border-cocoa/50 bg-transparent px-2 py-0.5 focus:border-terracotta focus:outline-none min-w-[150px] text-terracotta font-bold"
                    />
                    <span>or by email at</span>
                    <input
                      type="email"
                      placeholder="optional email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="border-b-2 border-dashed border-cocoa/50 bg-transparent px-2 py-0.5 focus:border-terracotta focus:outline-none min-w-[160px] text-terracotta font-bold"
                    />
                    <span>.</span>
                  </div>

                  {/* Location & Breed of interest */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
                    <span>I live in</span>
                    <input
                      type="text"
                      placeholder="e.g. Dubai Marina"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="border-b-2 border-dashed border-cocoa/50 bg-transparent px-2 py-0.5 focus:border-terracotta focus:outline-none min-w-[140px] text-terracotta font-bold"
                    />
                    <span>, and I&apos;m curious about</span>
                    <select
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      className="border-b-2 border-dashed border-cocoa/50 bg-transparent px-2 py-0.5 focus:border-terracotta focus:outline-none text-terracotta font-bold cursor-pointer"
                    >
                      <option value="any puppy (not sure yet)">any puppy (not sure yet) ▾</option>
                      <option value="Teacup Maltipoo">Teacup Maltipoo</option>
                      <option value="Korean Teacup Pomeranian">Korean Teacup Pomeranian</option>
                      <option value="Tiny Toy Poodle">Tiny Toy Poodle</option>
                      <option value="Cavapoo">Cavapoo</option>
                      <option value="Shih Tzu">Shih Tzu</option>
                    </select>
                    <span>.</span>
                  </div>

                  {/* Lined Textarea */}
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      placeholder="Anything else you'd like to tell us..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border border-cocoa/20 rounded-md p-3 text-sm focus:border-terracotta focus:outline-none text-cocoa placeholder:text-cocoa/40 leading-[27px]"
                      style={{
                        backgroundImage: `repeating-linear-gradient(
                          transparent,
                          transparent 26px,
                          rgba(42, 22, 12, 0.08) 26px,
                          rgba(42, 22, 12, 0.08) 27px
                        )`,
                      }}
                    />
                  </div>

                  {/* Bottom Sign-off & Submit Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-cocoa/10">
                    <span
                      className="text-lg sm:text-xl font-bold text-terracotta"
                      style={{ fontFamily: "var(--font-script)" }}
                    >
                      with love, a future puppy parent
                    </span>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-terracotta hover:bg-terracotta/90 text-white text-xs sm:text-sm font-extrabold border-2 border-cocoa shadow-hard hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
                    >
                      Post my letter
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Mascot Puppy Standing Below the Postcard */}
            <div className="flex justify-end pr-8 pt-3">
              <StandingPoodle className="w-20 h-20 sm:w-24 sm:h-24" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
