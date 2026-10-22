import Mascot from "@/components/Mascot";

/**
 * Hero section for the /puppies page.
 * Features:
 * - Script eyebrow ("From TeddyPups's sketchbook")
 * - 2-line heavy display H1 "Available puppies" with hand-drawn wavy rust SVG underline
 * - Informative, honest lede text
 * - Interactive, animated puppy mascot with mood reactions, speech bubbles, and hearts
 */
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-6 sm:pt-10 pb-8 sm:pb-12">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
        {/* Left Headline & Lede */}
        <div className="max-w-xl">
          <p className="font-script text-xl sm:text-2xl md:text-3xl text-rust mb-1 tracking-wide">
            From TeddyPups&apos;s sketchbook
          </p>

          <div className="relative inline-block">
            <h1
              id="hero-title"
              className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cocoa tracking-tight leading-[0.95]"
            >
              Available <br />
              <span className="relative inline-block">
                puppies
                {/* Hand-drawn Wavy Rust Underline SVG */}
                <svg
                  className="absolute -bottom-2 sm:-bottom-3 left-0 w-[110%] h-4 sm:h-5 text-rust overflow-visible pointer-events-none"
                  viewBox="0 0 280 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 2 8 C 45 3, 90 14, 140 7 C 190 2, 235 13, 278 8"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 6 10 C 48 5, 92 16, 142 9 C 192 4, 237 15, 276 10"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.6"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <p className="font-body text-sm sm:text-base md:text-lg text-cocoa/85 mt-6 sm:mt-7 max-w-lg leading-relaxed">
            Every listing shows real photos of the actual puppy. Open a profile
            to see them all, then chat about them on WhatsApp.
          </p>
        </div>

        {/* Right Interactive Animated Mascot */}
        <div className="flex flex-col items-center self-center lg:self-end mt-4 lg:mt-0">
          <Mascot caption="(self-portrait)" idleEvery={6500} />
        </div>
      </div>
    </section>
  );
}
