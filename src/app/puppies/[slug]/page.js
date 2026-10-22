import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle, PawPrint, Video } from "lucide-react";
import Container from "@/components/ui/Container";
import { puppies } from "@/data/puppies";

/**
 * Generate static paths for all puppies during build time.
 */
export async function generateStaticParams() {
  return puppies.map((p) => ({
    slug: p.slug,
  }));
}

/**
 * Generate metadata dynamically for puppy profile.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);

  if (!puppy) {
    return { title: "Puppy Not Found | TeddyPups" };
  }

  const name = puppy.name || puppy.breed;
  return {
    title: `${name} (${puppy.breed}) | TeddyPups Adoption`,
    description: `Meet ${name}, a healthy ${puppy.gender} ${puppy.breed} looking for a loving home. Chat on WhatsApp for videos and photos.`,
  };
}

/**
 * Dynamic puppy profile page.
 */
export default async function PuppyDetailPage({ params }) {
  const { slug } = await params;
  const puppy = puppies.find((p) => p.slug === slug);

  if (!puppy) {
    notFound();
  }

  const displayName = puppy.name || puppy.breed;

  return (
    <div className="py-10 sm:py-16">
      <Container>
        {/* Back Link */}
        <Link
          href="/puppies"
          className="inline-flex items-center gap-2 font-bold text-sm text-cocoa hover:text-rust transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to all available puppies</span>
        </Link>

        {/* Profile Card */}
        <div className="relative border-[3px] border-cocoa rounded-3xl bg-cream p-6 sm:p-10 shadow-hard bg-storybook-dots max-w-4xl mx-auto">
          {/* Authentic Adhesive Tape Accent */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/tape-horizontal.png"
            alt=""
            aria-hidden="true"
            className="absolute -top-3.5 left-8 sm:left-12 w-28 sm:w-32 h-auto -rotate-1 pointer-events-none select-none z-10 drop-shadow-xs"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Image Frame */}
            <div className="relative w-full aspect-square rounded-[50%_50%_45%_55%/55%_45%_50%_50%] overflow-hidden border-[3px] border-cocoa bg-sand-light shadow-hard-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={puppy.images[0]}
                alt={`Photo of ${displayName}`}
                className="w-full h-full object-cover"
              />

              {puppy.hasVideo && (
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-cocoa text-milk text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <Video className="w-3.5 h-3.5" /> video available
                </span>
              )}
            </div>

            {/* Profile Info */}
            <div className="flex flex-col">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sand text-cocoa font-bold text-xs border border-cocoa/30 w-fit mb-3">
                <PawPrint className="w-3 h-3 text-cocoa" />
                {puppy.status === "available" ? "Looking for a home" : "Gone home"}
              </span>

              <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-cocoa tracking-tight">
                {displayName}
              </h1>

              <p className="font-body text-base text-cocoa-muted mt-2">
                {puppy.breed} · {puppy.gender} · {puppy.age}
              </p>

              <div className="mt-6 pt-6 border-t border-sand flex flex-col gap-3 text-sm text-cocoa/85">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cocoa-muted">Origin</span>
                  <span className="font-bold capitalize">{puppy.origin} upbringing</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cocoa-muted">Health Status</span>
                  <span className="font-bold text-green">Vaccinated & Microchipped</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-cocoa-muted">Availability</span>
                  <span className="font-bold capitalize">{puppy.status}</span>
                </div>
              </div>

              {/* Inquire CTA */}
              <div className="mt-8">
                <a
                  href={`https://wa.me/971501234567?text=Hi%20TeddyPups,%20I'm%20interested%20in%20${encodeURIComponent(
                    displayName
                  )}!`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full bg-green text-milk text-center font-bold text-base border-2 border-cocoa shadow-hard hover:bg-green-hover flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Ask about {displayName} on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
