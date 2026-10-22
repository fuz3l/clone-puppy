import { Suspense } from "react";
import Container from "@/components/ui/Container";
import Hero from "@/components/sections/Hero";
import PuppiesDirectory from "@/components/sections/PuppiesDirectory";
import GoneHomeBand from "@/components/sections/GoneHomeBand";
import HowItWorks from "@/components/sections/HowItWorks";
import HappyFamilies from "@/components/sections/HappyFamilies";
import DeliverySection from "@/components/sections/DeliverySection";
import FaqSection from "@/components/sections/FaqSection";
import { puppies } from "@/data/puppies";

export const metadata = {
  title: "Available Puppies | TeddyPups — Ethical Puppy Adoption",
  description:
    "Every listing shows real photos of the actual puppy. Open a profile to see them all, then chat about them on WhatsApp.",
};

/**
 * /puppies main directory page.
 * Assembles:
 * - Hero (with animated interactive Mascot)
 * - PuppiesDirectory (FilterCard + PuppyGrid with real imagery, badges, doodles)
 * - GoneHomeBand (puppies who found their forever homes)
 * - HowItWorks (4-step transparent adoption process)
 * - HappyFamilies (customer stories and testimonials)
 * - DeliverySection (flight nanny, temperature transport, welcome pack)
 * - FaqSection (frequently asked questions & WhatsApp inquiry)
 */
export default function PuppiesPage() {
  const goneHomePuppies = puppies.filter((p) => p.status === "gone-home");

  return (
    <div className="flex flex-col min-h-screen">
      <Container>
        {/* Page Hero with Interactive Mascot */}
        <Hero />

        {/* Directory with Filters & Grid wrapped in Suspense for searchParams */}
        <Suspense
          fallback={
            <div className="py-12 text-center">
              <p className="font-script text-2xl text-cocoa animate-pulse">
                Fetching adorable puppies... 🐾
              </p>
            </div>
          }
        >
          <PuppiesDirectory />
        </Suspense>
      </Container>

      {/* Already Gone Home Band */}
      <GoneHomeBand puppies={goneHomePuppies} />

      {/* Additional Storytelling & Assurance Sections */}
      <HowItWorks />
      <HappyFamilies />
      <DeliverySection />
      <FaqSection />
    </div>
  );
}
