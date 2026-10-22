"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { Search, ChevronDown, MessageCircle } from "lucide-react";

/**
 * The 9 Frequently Asked Questions matching the reference noticeboard
 */
const FAQ_LIST = [
  {
    id: 1,
    q: "Are your puppies vaccinated and health-checked?",
    a: "Yes, unconditionally. Every puppy arrives fully vaccinated up to their current age (DHPP/parvovirus), comprehensively dewormed, and microchipped with international ISO standard registration. Full veterinary health records and bloodwork clearances are provided.",
    rotate: "-rotate-1",
    pinColor: "#E05A47", // Coral red
  },
  {
    id: 2,
    q: "Can I meet a puppy before I decide?",
    a: "Absolutely! You can visit our comfortable private showroom in Dubai to spend quality time playing and bonding with available puppies. For puppies currently in Korea, we coordinate private live video calls on WhatsApp so you can see their personality.",
    rotate: "rotate-1",
    pinColor: "#3B82F6", // Royal blue
  },
  {
    id: 3,
    q: "Can I take my puppy home the same day?",
    a: "Yes! For puppies already at our Dubai showroom, you can complete the adoption agreement and take them home the very same day. We also provide a complimentary luxury starter hamper with food, blanket, and essentials.",
    rotate: "-rotate-0.5",
    pinColor: "#D97706", // Amber
  },
  {
    id: 4,
    q: "Do you import puppies from abroad?",
    a: "Yes. We specialize in rare, ethical Korean teacup and miniature breeds (Maltipoos, Pomeranians, Poodles, and Cavapoos). We partner only with licensed top-tier breeders in South Korea with verified pedigree and strict ethical standards.",
    rotate: "rotate-1",
    pinColor: "#10B981", // Emerald
  },
  {
    id: 5,
    q: "How does an imported puppy travel to Dubai?",
    a: "Every imported puppy travels in a climate-controlled, pressurized cabin on premier airlines accompanied by dedicated pet travel handlers. They never travel as cargo. All customs permits, vet inspections, and import documents are handled end-to-end.",
    rotate: "-rotate-1",
    pinColor: "#8B5CF6", // Purple
  },
  {
    id: 6,
    q: "Will I see photos and health details first?",
    a: "Yes, 100%. Before you confirm any adoption, you will receive high-resolution photos, 4K playful videos, complete health records, weight history, and parents' details. We believe in complete, joyful transparency.",
    rotate: "rotate-0.5",
    pinColor: "#3B82F6", // Blue
  },
  {
    id: 7,
    q: "Do you deliver?",
    a: "Yes, we offer VIP chauffeured delivery in comfortable, air-conditioned transport across Dubai, Abu Dhabi, and the entire UAE right to your doorstep.",
    rotate: "-rotate-1",
    pinColor: "#F59E0B", // Yellow-orange
  },
  {
    id: 8,
    q: "Which breeds do you usually have?",
    a: "We specialize in hypoallergenic teacup and miniature breeds: Teacup Maltipoos, Korean Teacup Pomeranians, Tiny Toy Poodles, Cavapoos, and Miniature Shih Tzus.",
    rotate: "rotate-1",
    pinColor: "#E05A47", // Red
  },
  {
    id: 9,
    q: "Is there help after my puppy comes home?",
    a: "Always! You get lifetime 24/7 WhatsApp concierge support for nutrition questions, potty training, routine setup, vet recommendations, and teething advice.",
    rotate: "-rotate-0.5",
    pinColor: "#D97706", // Amber
  },
];

/**
 * Poodle Mascot SVG with Thought Bubble
 */
function MascotThoughtBubble() {
  return (
    <div className="relative flex flex-col items-center select-none">
      {/* Thought Bubble with Question Mark */}
      <div className="relative mb-2 animate-bounce">
        <div className="w-9 h-9 rounded-full bg-cream border-2 border-cocoa flex items-center justify-center shadow-hard-sm">
          <span className="font-display font-black text-lg text-cocoa">?</span>
        </div>
        {/* Little thought bubble trailing dots */}
        <div className="absolute -bottom-2 left-3 w-2.5 h-2.5 rounded-full bg-cream border-2 border-cocoa" />
        <div className="absolute -bottom-4 left-2 w-1.5 h-1.5 rounded-full bg-cream border border-cocoa" />
      </div>

      {/* Cute Golden Poodle SVG */}
      <div className="w-24 h-24">
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
  );
}

export default function FaqPage() {
  const [openId, setOpenId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = FAQ_LIST.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      className="min-h-screen text-cream overflow-hidden"
      style={{ backgroundColor: "#542A16" }}
    >
      <Container className="pt-12 md:pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* =========================================================================
              LEFT COLUMN: Heading, Search & Mascot
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Display Title */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black text-cream tracking-tight leading-[0.95] mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Questions
              <br />
              &amp; answers
            </h1>

            {/* Subtitle / WhatsApp hint */}
            <p className="text-sm sm:text-base text-cream/80 leading-relaxed font-medium mb-8 max-w-sm">
              Can&apos;t find what you&apos;re looking for? Message us on WhatsApp — our team
              is available 24/7.
            </p>

            {/* Search Input Box */}
            <div className="w-full max-w-sm mb-10">
              <label
                htmlFor="faq-search"
                className="block text-xs sm:text-sm font-bold text-sand mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Sniff out a question:
              </label>

              <div className="relative flex items-center">
                <Search className="absolute left-3.5 w-4 h-4 text-cocoa/50 pointer-events-none" />
                <input
                  id="faq-search"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="delivery, Korea, reservation..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream text-cocoa text-xs sm:text-sm font-semibold border-2 border-cocoa shadow-hard-sm focus:outline-none focus:ring-2 focus:ring-terracotta placeholder:text-cocoa/40"
                />
              </div>
            </div>

            {/* Mascot section */}
            <div className="flex flex-col items-start gap-4">
              <span
                className="text-xs font-bold text-sand/80"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Spots on the board:
              </span>

              <div className="pl-4 pb-2">
                <MascotThoughtBubble />
              </div>

              {/* Green Action Button */}
              <a
                href="https://wa.me/971501234567?text=Hi%20TeddyPups!%20I%20have%20a%20question%20about%20your%20puppies."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F7A4D] hover:bg-[#196640] text-white text-xs sm:text-sm font-bold border-2 border-cocoa shadow-hard-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-150"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Ask your own question</span>
              </a>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: Corkboard with Pinned Paper Strips
             ========================================================================= */}
          <div className="lg:col-span-7">
            {/* The Noticeboard / Corkboard Frame */}
            <div
              className="relative rounded-2xl border-[3px] border-[#2A160C] p-4 sm:p-7 shadow-[6px_8px_0_#1D0F09]"
              style={{
                backgroundColor: "#C18556",
                backgroundImage: `
                  radial-gradient(rgba(42, 22, 12, 0.12) 1.5px, transparent 1.5px),
                  radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)
                `,
                backgroundSize: "20px 20px, 20px 20px",
                backgroundPosition: "0 0, 10px 10px",
              }}
            >
              {/* Inner subtle frame border */}
              <div className="relative rounded-xl border border-cocoa/20 p-2 sm:p-4 flex flex-col gap-3">
                {filteredFaqs.length === 0 ? (
                  <div className="text-center py-12 text-cocoa font-bold text-sm bg-cream/90 rounded-xl p-6 border-2 border-cocoa">
                    No matching questions found on the board.
                    <br />
                    <span className="text-xs font-normal text-cocoa/75 mt-1 inline-block">
                      Message us on WhatsApp and we will answer you in seconds!
                    </span>
                  </div>
                ) : (
                  filteredFaqs.map((faq) => {
                    const isOpen = openId === faq.id;

                    return (
                      <div
                        key={faq.id}
                        className={`relative transition-transform duration-200 ${faq.rotate} hover:rotate-0 hover:z-10`}
                      >
                        {/* Push Pin at top center */}
                        <div
                          className="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border border-cocoa z-20 shadow-xs"
                          style={{ backgroundColor: faq.pinColor }}
                        />

                        {/* Paper Strip Accordion Card */}
                        <div
                          className="relative bg-[#FFFDF9] border border-cocoa/30 rounded-xs shadow-[2px_3px_0_rgba(42,22,12,0.22)] overflow-hidden cursor-pointer transition-all"
                          onClick={() => toggleAccordion(faq.id)}
                        >
                          {/* Question Bar */}
                          <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                            <h3
                              className="text-xs sm:text-sm md:text-base font-black text-cocoa tracking-tight pr-2"
                              style={{ fontFamily: "var(--font-display)" }}
                            >
                              {faq.q}
                            </h3>

                            <div className="shrink-0 flex items-center gap-1.5">
                              <ChevronDown
                                className={`w-4 h-4 text-cocoa/70 transition-transform duration-200 ${
                                  isOpen ? "rotate-180 text-terracotta" : ""
                                }`}
                              />
                            </div>
                          </div>

                          {/* Accordion Answer Content */}
                          {isOpen && (
                            <div className="px-3.5 sm:px-4 pb-4 pt-1 border-t border-dashed border-cocoa/20">
                              <p className="text-xs sm:text-sm text-cocoa/85 leading-relaxed font-medium">
                                {faq.a}
                              </p>
                            </div>
                          )}

                          {/* Dog-eared bottom-right corner */}
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-br from-transparent via-transparent to-cocoa/20 pointer-events-none" />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
