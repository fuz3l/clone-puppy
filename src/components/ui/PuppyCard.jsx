import Link from "next/link";

/**
 * Blob shapes array for varied organic storybook frames.
 */
const BLOB_STYLES = [
  "rounded-[60%_40%_55%_45%/50%_60%_40%_50%]",
  "rounded-[48%_52%_42%_58%/58%_42%_55%_45%]",
  "rounded-[55%_45%_60%_40%/45%_55%_45%_55%]",
  "rounded-[50%_50%_45%_55%/55%_45%_50%_50%]",
  "rounded-[58%_42%_50%_50%/48%_52%_50%_50%]",
];

/**
 * Whimsical hand-drawn stickers scattered around cards matching the sketchbook theme.
 */
const DOODLES = [
  { type: "paw", pos: "top-2 -left-2 text-rust", content: "🐾" },
  { type: "sparkle", pos: "top-1 -right-3 text-sand-dark", content: "✦" },
  { type: "heart", pos: "-top-2 -left-3 text-cocoa", content: "♡" },
  { type: "paw", pos: "bottom-12 -right-3 text-rust", content: "🐾" },
  { type: "sparkle", pos: "-top-2 -right-2 text-rust", content: "✧" },
  { type: "heart", pos: "top-10 -right-4 text-cocoa", content: "♡" },
];

/**
 * PuppyCard component with organic blob-shaped photo frame.
 * Features:
 * - Real photo inside an organic storybook blob frame
 * - White "Available" pill badge at top right
 * - "▶ video" pill badge at bottom left when hasVideo === true
 * - Whimsical hand-drawn sketchbook doodles (hearts, paws, sparkles)
 * - Centered heavy display name
 * - Clean metadata line: Breed · gender · age
 * - Hover lift + tilt animation
 *
 * @param {Object} props
 * @param {import('@/data/puppies').Puppy} props.puppy
 * @param {number} props.index
 */
export default function PuppyCard({ puppy, index }) {
  const blobClass = BLOB_STYLES[index % BLOB_STYLES.length];
  const doodle = DOODLES[index % DOODLES.length];
  const displayName = puppy.name || puppy.breed;
  const imageSrc = puppy.images?.[0] || "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80";

  return (
    <Link
      href={`/puppies/${puppy.slug}`}
      className="group relative block p-3 rounded-3xl transition-all duration-200 hover:-translate-y-2 hover:rotate-1 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-rust"
    >
      {/* Floating Storybook Doodles */}
      <span
        className={`absolute ${doodle.pos} text-lg sm:text-xl font-bold select-none pointer-events-none opacity-85 group-hover:scale-125 transition-transform duration-200`}
        aria-hidden="true"
      >
        {doodle.content}
      </span>

      <div className="flex flex-col items-center">
        {/* Organic Blob Frame Container with Hand-drawn Sketch Ring */}
        <div className="relative w-full max-w-[270px] sm:max-w-[290px] aspect-square p-2">
          {/* Top Right "Available" Pill Badge */}
          {puppy.status === "available" && (
            <span
              className="absolute top-1 right-1 sm:top-2 sm:right-2 z-20 px-2.5 py-0.5 rounded-full bg-milk text-cocoa text-[11px] sm:text-xs font-bold border-2 border-cocoa shadow-hard-sm pointer-events-none select-none tracking-wide"
            >
              Available
            </span>
          )}

          {/* Outer Hand-drawn Sketch Ring */}
          <div
            className={`absolute inset-1 border-2 border-cocoa/40 ${blobClass} pointer-events-none -rotate-2 scale-[1.03] transition-transform group-hover:scale-106`}
            aria-hidden="true"
          />

          {/* Main Blob Image Container with warm sand base */}
          <div
            className={`relative w-full h-full overflow-hidden border-[2.8px] border-cocoa bg-[#FDE3B3] shadow-hard-sm ${blobClass}`}
          >
            {/* Puppy Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageSrc}
              alt={`Portrait of ${displayName}, a ${puppy.gender} ${puppy.breed}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Video Badge */}
            {puppy.hasVideo && (
              <span className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-full bg-cocoa text-milk text-[11px] font-bold flex items-center gap-1 shadow-sm tracking-wide">
                <span>▶</span> video
              </span>
            )}
          </div>
        </div>

        {/* Name in Heavy Display Font */}
        <h3 className="font-display font-black text-xl sm:text-2xl text-cocoa text-center mt-3 tracking-tight group-hover:text-rust transition-colors">
          {displayName}
        </h3>

        {/* Meta in Small Sans */}
        <p className="font-body text-xs sm:text-sm text-cocoa-muted text-center mt-1">
          {displayName.toLowerCase().includes(puppy.breed.toLowerCase())
            ? `${puppy.gender} · ${puppy.age}`
            : `${puppy.breed} · ${puppy.gender} · ${puppy.age}`}
        </p>
      </div>
    </Link>
  );
}
