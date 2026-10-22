import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * Storybook Dark Cocoa Footer.
 * Features:
 * - Wavy organic top edge SVG
 * - Night sky stars and moon decor
 * - Yellow display title "Home, at last."
 * - Cute basket-puppy illustration
 * - Explore navigation column (7 links)
 * - Say hello contact info and outlined social pills
 * - Bottom bar with copyright and script tagline
 */
export default function Footer() {
  const exploreLinks = [
    { label: "Available puppies", href: "/puppies" },
    { label: "Gone home", href: "#gone-home" },
    { label: "Happy families", href: "#happy-families" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Delivery & collection", href: "#delivery" },
    { label: "FAQ", href: "#faq" },
    { label: "Visit & contact", href: "#contact" },
  ];

  return (
    <footer
      id="site-footer"
      role="contentinfo"
      aria-label="Site Footer"
      className="relative bg-cocoa text-cream/90 pt-16 pb-12 mt-12 overflow-hidden"
    >
      {/* Wavy Top Edge SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          className="w-full h-10 sm:h-14 text-cocoa fill-current"
        >
          <path d="M0,0 C150,55 350,0 500,45 C650,90 900,10 1200,35 L1200,60 L0,60 Z" />
        </svg>
      </div>

      {/* Decorative Star & Moon Night-sky Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-40">
        {/* Crescent Moon top right */}
        <svg
          className="absolute top-8 right-12 sm:right-24 w-8 h-8 text-sand fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>

        {/* Small scattered stars */}
        <span className="absolute top-10 left-16 text-sand text-xs">✦</span>
        <span className="absolute top-24 left-1/4 text-sand text-sm">★</span>
        <span className="absolute top-12 left-1/2 text-sand text-xs">✦</span>
        <span className="absolute top-28 right-1/3 text-sand text-xs">✦</span>
        <span className="absolute top-16 right-48 text-sand text-xs">★</span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-sand/20">
          {/* Brand Blurb & Puppy in Basket (cols 1-5) */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-sand tracking-tight mb-4">
                Home, at last.
              </h2>
              <p className="font-body text-sm sm:text-base text-cream/80 max-w-md leading-relaxed mb-8">
                TeddyPups is a dedicated ethical companion matching home, offering
                guidance, premium care, and worldwide shipping.
              </p>
            </div>

            {/* Puppy in Woven Basket Illustration */}
            <div className="w-36 h-32 sm:w-44 sm:h-36 relative">
              <svg
                viewBox="0 0 180 140"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Puppy Face */}
                <ellipse cx="90" cy="55" rx="36" ry="32" fill="#FDE3B3" stroke="#2A160C" strokeWidth="3" />
                {/* Ears */}
                <ellipse cx="60" cy="45" rx="14" ry="18" fill="#B5511F" stroke="#2A160C" strokeWidth="3" />
                <ellipse cx="120" cy="45" rx="14" ry="18" fill="#B5511F" stroke="#2A160C" strokeWidth="3" />
                {/* Eyes */}
                <circle cx="78" cy="52" r="4.5" fill="#2A160C" />
                <circle cx="102" cy="52" r="4.5" fill="#2A160C" />
                <circle cx="80" cy="50" r="1.5" fill="#FFFDF8" />
                <circle cx="104" cy="50" r="1.5" fill="#FFFDF8" />
                {/* Nose & Mouth */}
                <ellipse cx="90" cy="62" rx="6" ry="4" fill="#2A160C" />
                <path d="M 87 66 Q 90 70 93 66" stroke="#2A160C" strokeWidth="2.5" strokeLinecap="round" />
                {/* Woven Basket */}
                <path
                  d="M 30 75 L 150 75 L 138 130 C 137 135 130 138 125 138 L 55 138 C 50 138 43 135 42 130 Z"
                  fill="#F3D9A8"
                  stroke="#2A160C"
                  strokeWidth="3.5"
                />
                {/* Basket Weave lines */}
                <line x1="38" y1="95" x2="142" y2="95" stroke="#2A160C" strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="43" y1="116" x2="137" y2="116" stroke="#2A160C" strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="68" y1="75" x2="63" y2="138" stroke="#2A160C" strokeWidth="2.5" strokeDasharray="6 4" />
                <line x1="112" y1="75" x2="117" y2="138" stroke="#2A160C" strokeWidth="2.5" strokeDasharray="6 4" />
              </svg>
            </div>
          </div>

          {/* Explore Links Column (cols 6-8) */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="font-display font-bold text-lg text-sand mb-4">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-cream/75 hover:text-sand hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Say Hello Column (cols 9-12) */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="font-display font-bold text-lg text-sand mb-4">
              Say hello
            </h3>
            <div className="flex flex-col gap-2 text-sm text-cream/75 mb-6">
              <a
                href="https://wa.me/971501234567"
                className="hover:text-sand transition-colors font-semibold"
              >
                WhatsApp: +971 50 123 4567
              </a>
              <a
                href="mailto:teddypupsadmin@gmail.com"
                className="hover:text-sand transition-colors"
              >
                teddypupsadmin@gmail.com
              </a>
              <p>Downtown Dubai, United Arab Emirates</p>
            </div>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-2">
              {["Instagram", "TikTok", "YouTube"].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="px-3.5 py-1.5 rounded-full border border-sand/40 text-xs font-semibold text-sand hover:bg-sand hover:text-cocoa transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <p>© 2026 TeddyPups U.A.E. All rights reserved.</p>
          <p className="font-script text-lg text-sand">
            Every puppy is family.
          </p>
        </div>
      </Container>
    </footer>
  );
}
