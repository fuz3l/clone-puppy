"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { ChevronDown, MessageCircle } from "lucide-react";

/**
 * FaqSection component answering primary customer adoption questions.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Are all puppies vaccinated, dewormed, and microchipped?",
      a: "Yes, without exception. Every puppy receives their age-appropriate core vaccinations (DHPP/parvo), multiple veterinary dewormings, and an ISO-compliant international microchip before joining your family.",
    },
    {
      q: "Can I have a live video call to meet the puppy before committing?",
      a: "Absolutely! We encourage video calls. Simply message us on WhatsApp to set up a private live session where you can see your chosen puppy play, interact, and show off their unique temperament.",
    },
    {
      q: "What does the 1-year genetic health guarantee cover?",
      a: "Our puppies come backed by a formal 1-year hereditary and congenital health guarantee. If any serious congenital condition is detected by a licensed veterinarian within the first year, we provide complete coverage and support.",
    },
    {
      q: "How does safe delivery or collection work?",
      a: "For local families, we offer private doorstep delivery or collection at our calm consultation lounge. For international families, an experienced flight pet nanny travels alongside the puppy in the climate-controlled cabin.",
    },
    {
      q: "What is included in the welcome puppy hamper?",
      a: "Your starter pack contains a transitional supply of premium kibble, feeding instructions, health passport, a soft blanket with familiar mother scent, and chew toys to ease first-night settling.",
    },
  ];

  return (
    <section id="faq" aria-labelledby="faq-title" className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <span className="font-script text-2xl sm:text-3xl text-rust font-bold">
              Got questions?
            </span>
            <h2
              id="faq-title"
              className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-cocoa tracking-tight mt-1"
            >
              Frequently asked questions
            </h2>
            <p className="font-body text-sm sm:text-base text-cocoa-muted mt-3">
              Everything you need to know about welcoming your new companion.
            </p>
          </div>

          {/* Accordion List */}
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="border-[2.5px] border-cocoa rounded-2xl bg-milk overflow-hidden shadow-hard-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust"
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-cocoa">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-cocoa bg-sand flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-rust text-milk" : "text-cocoa"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-cocoa/85 font-body leading-relaxed border-t border-sand">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* WhatsApp Inquire Banner */}
          <div className="mt-12 text-center p-6 sm:p-8 rounded-3xl bg-sand border-2 border-cocoa shadow-hard">
            <h3 className="font-display font-black text-xl sm:text-2xl text-cocoa mb-2">
              Have another question?
            </h3>
            <p className="font-body text-sm text-cocoa/80 mb-5 max-w-md mx-auto">
              Our puppy coordinators are available on WhatsApp 7 days a week to
              help you choose the right companion.
            </p>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green text-milk font-bold text-sm border-2 border-cocoa shadow-hard-sm hover:bg-green-hover transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
