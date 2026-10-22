import PuppyCard from "@/components/ui/PuppyCard";
import Link from "next/link";

/**
 * Responsive PuppyGrid section.
 * - Mobile: 1 column (375px+)
 * - Tablet: 2 columns (768px+)
 * - Desktop: 3 columns (1024px+)
 * - Middle column offset ~40px lower on desktop (lg:translate-y-10) for storybook staggered feel
 * - Empty state with friendly reset action
 *
 * @param {{ puppies: import('@/data/puppies').Puppy[] }} props
 */
export default function PuppyGrid({ puppies = [] }) {
  if (puppies.length === 0) {
    return (
      <div className="py-16 text-center border-2 border-dashed border-cocoa/30 rounded-3xl bg-sand-light/50 p-8 my-8 max-w-lg mx-auto">
        <p className="font-script text-4xl text-cocoa mb-3">No puppies found</p>
        <p className="font-body text-sm sm:text-base text-cocoa-muted mb-6">
          We couldn&apos;t find any puppies matching those exact filters. Try
          clearing some filters to meet more little paws!
        </p>
        <Link
          href="/puppies"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-rust text-milk font-bold text-sm border-2 border-cocoa shadow-hard-sm hover:bg-rust-hover transition-all"
        >
          Reset all filters
        </Link>
      </div>
    );
  }

  return (
    <section aria-label="Available puppies listing" className="pb-16 sm:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-12 md:gap-x-8 lg:gap-x-10 items-start">
        {puppies.map((puppy, idx) => {
          // Middle column offset (~40px) on desktop (index % 3 === 1)
          const isMiddleCol = idx % 3 === 1;

          return (
            <div
              key={puppy.slug}
              className={isMiddleCol ? "lg:translate-y-10" : ""}
            >
              <PuppyCard puppy={puppy} index={idx} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
