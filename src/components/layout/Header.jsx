"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, X, Menu, PawPrint } from "lucide-react";
import Container from "@/components/ui/Container";

/**
 * Shared Header with hand-drawn storybook styling.
 * Matches design reference:
 * - Scalloped bottom edge
 * - Brand logo badge + TeddyPups title
 * - Centered navigation links on desktop with active paw indicator underneath
 * - Green WhatsApp pill CTA
 * - Responsive mobile drawer
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // Scroll listener: Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/home" },
    { label: "Puppies", href: "/puppies" },
    { label: "Happy families", href: "/happy-families" },
    { label: "How it works", href: "/how-it-works" },
    { label: "FAQ", href: "/faq" },
    { label: "Visit & contact", href: "/contact" },
  ];

  const isHomeActive = pathname === "/" || pathname === "/home";

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-40 bg-cream transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container className="h-16 md:h-20 flex items-center justify-between">
          {/* Logo + Brand */}
          <Link
            href="/home"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
            aria-label="TeddyPups Home"
          >
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#fce0b0] border-[2.5px] border-cocoa flex items-center justify-center shadow-hard-sm group-hover:rotate-6 transition-transform overflow-hidden relative">
              {/* Cute puppy avatar inside logo */}
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
                <circle cx="20" cy="22" r="13" fill="#F6B86A" stroke="#2A160C" strokeWidth="2" />
                <ellipse cx="10" cy="16" rx="4" ry="7" fill="#E2943A" stroke="#2A160C" strokeWidth="2" transform="rotate(-15 10 16)" />
                <ellipse cx="30" cy="16" rx="4" ry="7" fill="#E2943A" stroke="#2A160C" strokeWidth="2" transform="rotate(15 30 16)" />
                <circle cx="16" cy="21" r="2" fill="#2A160C" />
                <circle cx="24" cy="21" r="2" fill="#2A160C" />
                <ellipse cx="20" cy="25" rx="2.5" ry="1.8" fill="#5A2E17" />
                <path d="M18 28 Q20 30 22 28" stroke="#2A160C" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <span
              className="text-2xl md:text-3xl font-black text-cocoa tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TeddyPups
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => {
              const active =
                (link.href === "/home" && isHomeActive) ||
                (link.href === "/puppies" && pathname === "/puppies") ||
                (link.href === "/happy-families" && pathname === "/happy-families") ||
                (link.href === "/how-it-works" && pathname === "/how-it-works") ||
                (link.href === "/faq" && pathname === "/faq") ||
                (link.href === "/contact" && pathname === "/contact");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-bold transition-colors duration-150 py-1 flex flex-col items-center ${
                    active
                      ? "text-[#B5511F]"
                      : "text-cocoa/85 hover:text-cocoa"
                  }`}
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <span>{link.label}</span>
                  {/* Active paw indicator under Home */}
                  {active && (
                    <span className="absolute -bottom-2 flex items-center justify-center text-[#B5511F] animate-fade-in">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 10c-1.5 0-2.8 1.2-2.8 2.7 0 1.2.8 2.2 1.8 2.5v.3c0 .8.6 1.5 1.5 1.5s1.5-.7 1.5-1.5v-.3c1.1-.3 1.8-1.3 1.8-2.5 0-1.5-1.3-2.7-2.8-2.7z" />
                        <ellipse cx="7.5" cy="8.5" rx="1.8" ry="2.5" transform="rotate(-18 7.5 8.5)" />
                        <ellipse cx="16.5" cy="8.5" rx="1.8" ry="2.5" transform="rotate(18 16.5 8.5)" />
                        <ellipse cx="10" cy="5" rx="1.8" ry="2.5" transform="rotate(-6 10 5)" />
                        <ellipse cx="14" cy="5" rx="1.8" ry="2.5" transform="rotate(6 14 5)" />
                      </svg>
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Pill CTA */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-[#1F7A4D] text-white text-xs md:text-sm font-bold border-[2.5px] border-cocoa shadow-hard hover:bg-[#196640] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp us</span>
            </a>

            {/* Highly Animated Hamburger Button (Mobile & Tablet) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="slide-in-nav"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden relative inline-flex items-center justify-center w-11 h-11 rounded-full bg-milk border-[2px] border-cocoa shadow-hard-sm hover:shadow-hard hover:bg-sand/30 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer overflow-hidden group"
            >
              <div className="w-5 h-4 flex flex-col justify-between items-center relative">
                {/* Top Bar */}
                <span
                  className={`hamburger-bar h-[2.5px] rounded-full bg-cocoa ${
                    isMenuOpen
                      ? "w-5.5 translate-y-[7px] rotate-45 !bg-terracotta"
                      : "w-5 group-hover:w-5.5"
                  }`}
                />
                {/* Middle Bar */}
                <span
                  className={`hamburger-bar h-[2.5px] rounded-full bg-cocoa ${
                    isMenuOpen ? "w-0 opacity-0 scale-x-0" : "w-3.5 group-hover:w-4.5"
                  }`}
                />
                {/* Bottom Bar */}
                <span
                  className={`hamburger-bar h-[2.5px] rounded-full bg-cocoa ${
                    isMenuOpen
                      ? "w-5.5 -translate-y-[6.5px] -rotate-45 !bg-terracotta"
                      : "w-5 group-hover:w-5.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>

        {/* Scalloped Bottom Edge */}
        <div className="absolute -bottom-3 left-0 right-0 w-full h-3 overflow-hidden pointer-events-none">
          <svg className="w-full h-3 text-cream fill-current" preserveAspectRatio="none">
            <defs>
              <pattern
                id="header-scallop"
                x="0"
                y="0"
                width="24"
                height="12"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 0 0 C 6 12, 18 12, 24 0 Z" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="12" fill="url(#header-scallop)" />
          </svg>
        </div>
      </header>

      {/* Slide-In Navigation Drawer with Spring Physics */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto bg-cocoa/45 backdrop-blur-xs"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop click dismiss */}
        <div
          className="flex-1"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer content panel */}
        <div
          id="slide-in-nav"
          className={`w-full max-w-sm h-full bg-cream border-l-[3px] border-cocoa p-6 sm:p-8 flex flex-col justify-between shadow-hard-lg overflow-y-auto transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundImage: `radial-gradient(rgba(42, 22, 12, 0.08) 1.5px, transparent 1.5px)`,
            backgroundSize: "20px 20px",
          }}
        >
          <div>
            {/* Drawer Top Header */}
            <div className="flex items-center justify-between pb-5 border-b-2 border-sand">
              <div className="flex items-center gap-2.5 group">
                <div className="w-9 h-9 rounded-full bg-[#fce0b0] border-2 border-cocoa flex items-center justify-center shadow-hard-sm group-hover:rotate-12 transition-transform">
                  <PawPrint className="w-4.5 h-4.5 text-cocoa fill-current" />
                </div>
                <span
                  className="font-black text-2xl text-cocoa tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  TeddyPups
                </span>
              </div>

              {/* Animated Close Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 rounded-full bg-milk border-2 border-cocoa flex items-center justify-center shadow-hard-sm hover:bg-sand/40 hover:rotate-90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <X className="w-5 h-5 text-cocoa" />
              </button>
            </div>

            {/* Navigation Links with Staggered Cascading Entrance */}
            <nav aria-label="Mobile Navigation" className="mt-8">
              <ul className="flex flex-col gap-3">
                {navLinks.map((link, index) => {
                  const active =
                    (link.href === "/home" && isHomeActive) ||
                    (link.href === "/puppies" && pathname === "/puppies") ||
                    (link.href === "/happy-families" && pathname === "/happy-families") ||
                    (link.href === "/how-it-works" && pathname === "/how-it-works") ||
                    (link.href === "/faq" && pathname === "/faq") ||
                    (link.href === "/contact" && pathname === "/contact");

                  return (
                    <li
                      key={link.label}
                      className={isMenuOpen ? "menu-item-enter" : ""}
                      style={{ animationDelay: `${(index + 1) * 55}ms` }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-center justify-between px-3.5 py-2.5 rounded-2xl border-2 transition-all duration-200 ${
                          active
                            ? "bg-[#FFF4DC] border-cocoa shadow-hard-sm text-terracotta translate-x-1"
                            : "border-transparent text-cocoa hover:border-cocoa/40 hover:bg-sand/30 hover:translate-x-1.5"
                        }`}
                      >
                        <span
                          className="font-bold text-xl sm:text-2xl tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {link.label}
                        </span>

                        {/* Paw print badge on active or hover */}
                        <span
                          className={`transition-all duration-200 ${
                            active
                              ? "opacity-100 scale-100 text-terracotta animate-paw-pulse"
                              : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-cocoa/60"
                          }`}
                        >
                          <PawPrint className="w-4 h-4 fill-current" />
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Drawer Bottom: Mascot Greeting & WhatsApp CTA */}
          <div className="pt-6 border-t-2 border-sand flex flex-col gap-4">
            {/* Mascot Greeting */}
            <div className="flex items-center gap-3 bg-[#FFFBF2] p-3 rounded-2xl border-2 border-cocoa shadow-hard-sm">
              <div className="w-12 h-12 shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <path d="M78 68 Q92 60 90 48" stroke="#2A160C" strokeWidth="3.5" strokeLinecap="round" />
                  <circle cx="89" cy="46" r="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <ellipse cx="56" cy="72" rx="28" ry="18" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <ellipse cx="40" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <ellipse cx="58" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <ellipse cx="74" cy="88" rx="8" ry="6" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <circle cx="34" cy="46" r="22" fill="#F6B86A" stroke="#2A160C" strokeWidth="3" />
                  <ellipse cx="18" cy="38" rx="7" ry="14" fill="#E2943A" stroke="#2A160C" strokeWidth="3" transform="rotate(-15 18 38)" />
                  <ellipse cx="50" cy="38" rx="7" ry="14" fill="#E2943A" stroke="#2A160C" strokeWidth="3" transform="rotate(15 50 38)" />
                  <circle cx="28" cy="44" r="3.5" fill="#2A160C" />
                  <circle cx="40" cy="44" r="3.5" fill="#2A160C" />
                  <circle cx="29" cy="43" r="1" fill="#FFFDF8" />
                  <circle cx="41" cy="43" r="1" fill="#FFFDF8" />
                  <ellipse cx="34" cy="52" rx="3.5" ry="2.5" fill="#5A2E17" />
                  <path d="M32 55 Q34 57 36 55" stroke="#2A160C" strokeWidth="2" strokeLinecap="round" />
                  <path d="M22 64 Q34 70 46 64" stroke="#B5511F" strokeWidth="4.5" strokeLinecap="round" />
                  <circle cx="34" cy="68" r="2.5" fill="#E8B04A" stroke="#2A160C" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="flex-1">
                <p
                  className="text-xs font-bold text-terracotta leading-tight"
                  style={{ fontFamily: "var(--font-script)", fontSize: "16px" }}
                >
                  Woof! Where to next? 🐾
                </p>
                <p className="text-[11px] text-cocoa/70 font-semibold">
                  We are here to help you 24/7.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-full bg-[#1F7A4D] hover:bg-[#196640] text-white text-center font-extrabold text-sm border-2 border-cocoa shadow-hard hover:-translate-y-0.5 active:translate-y-0 active:shadow-none flex items-center justify-center gap-2 transition-all duration-150"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

