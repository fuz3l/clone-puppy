import Link from "next/link";
import Container from "@/components/ui/Container";

/**
 * GoneHomeBand section showcasing puppies who have found their forever homes.
 * Features:
 * - Wavy top edge dividing cream canvas from warm sand background
 * - Left callout: Heavy display title, short text, rust button with hard shadow
 * - Right avatar row: 5 circular puppy portraits with sketch rings and bold names
 * - Responsive wrap on tablet and mobile
 *
 * @param {{ puppies: import('@/data/puppies').Puppy[] }} props
 */
export default function GoneHomeBand({ puppies = [] }) {
  // Take up to 5 gone-home puppies
  const sampleGoneHome = puppies.slice(0, 5);

  return (
    <section
      id="gone-home"
      aria-labelledby="gone-home-heading"
      className="relative bg-sand text-cocoa pt-14 pb-16 sm:pb-20 mt-12 overflow-hidden"
    >
      {/* Wavy Top Edge Transition SVG */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none -translate-y-[98%]">
        <svg
          viewBox="0 0 1200 50"
          preserveAspectRatio="none"
          className="w-full h-8 sm:h-12 text-sand fill-current"
        >
          <path d="M0,0 C200,45 400,0 600,35 C800,70 1000,10 1200,30 L1200,50 L0,50 Z" />
        </svg>
      </div>

      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          {/* Left Callout Block */}
          <div className="max-w-md">
            <h2
              id="gone-home-heading"
              className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight leading-tight"
            >
              Already <br className="hidden sm:inline" />
              gone home
            </h2>
            <p className="font-body text-sm sm:text-base text-cocoa/85 mt-3 mb-6 leading-relaxed">
              These puppies have found their families.
            </p>

            <Link
              href="#gone-home"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-rust text-milk font-bold text-sm sm:text-base border-2 border-cocoa shadow-hard hover:bg-rust-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all duration-150"
            >
              See the puppies who&apos;ve gone home
            </Link>
          </div>

          {/* Right Circular Avatars Row */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-5 sm:gap-6 md:gap-7">
              {sampleGoneHome.map((pup) => (
                <div
                  key={pup.slug}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Circular Avatar with Sketch Border */}
                  <div className="relative w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 p-1">
                    {/* Sketch decorative ring */}
                    <div
                      className="absolute inset-0 rounded-full border-2 border-cocoa/40 scale-105 pointer-events-none -rotate-6 group-hover:rotate-6 transition-transform"
                      aria-hidden="true"
                    />
                    {/* Avatar Image Frame */}
                    <div className="w-full h-full rounded-full overflow-hidden border-[2.5px] border-cocoa bg-milk shadow-hard-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={pup.images?.[0] || "https://placehold.co/400x400/FDE3B3/2A160C?text=Adopted"}
                        alt={`${pup.name} has already gone home`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Puppy Name in Bold */}
                  <span className="font-display font-black text-sm sm:text-base text-cocoa text-center mt-2 group-hover:text-rust transition-colors">
                    {pup.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
