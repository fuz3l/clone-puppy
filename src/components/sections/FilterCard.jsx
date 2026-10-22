"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

/**
 * FilterCard component for searching and categorizing available puppies.
 * Features:
 * - Hand-drawn tape strip decoration
 * - Dotted card canvas with thick cocoa borders and hard offset shadow
 * - Three filter rows with handwritten script labels (where, breed, boy or girl)
 * - Accessible pill chips with aria-pressed states and toggle behavior
 * - Seamless URL synchronization via Next.js searchParams
 *
 * @param {{ totalMatches: number }} props
 */
export default function FilterCard({ totalMatches }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentOrigin = searchParams.get("origin") || "";
  const currentBreed = searchParams.get("breed") || "";
  const currentGender = searchParams.get("gender") || "";

  /**
   * Updates or toggles a query parameter in the URL.
   * Clicking an already-selected chip clears the filter.
   *
   * @param {'origin' | 'breed' | 'gender'} key
   * @param {string} value
   */
  const handleFilterClick = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    const currentValue = params.get(key) || "";

    if (key === "origin" && (value === "everywhere" || value === currentValue)) {
      params.delete("origin");
    } else if (currentValue.toLowerCase() === value.toLowerCase()) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const originOptions = [
    { label: "Everywhere", value: "everywhere", isActive: !currentOrigin || currentOrigin === "everywhere" },
    { label: "Imported", value: "imported", isActive: currentOrigin.toLowerCase() === "imported" },
    { label: "Local", value: "local", isActive: currentOrigin.toLowerCase() === "local" },
  ];

  const breedOptions = [
    { label: "Maltipoo", value: "maltipoo" },
    { label: "Pomeranian", value: "pomeranian" },
    { label: "Poodle", value: "poodle" },
    { label: "Cavapoo", value: "cavapoo" },
    { label: "Shih Tzu", value: "shih tzu" },
  ];

  const genderOptions = [
    { label: "Boys", value: "boy", isActive: currentGender.toLowerCase() === "boy" },
    { label: "Girls", value: "girl", isActive: currentGender.toLowerCase() === "girl" },
  ];

  const chipBase =
    "px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border-2 border-cocoa transition-all duration-150 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rust";

  const getChipClass = (isActive) =>
    isActive
      ? `${chipBase} bg-cocoa text-milk shadow-hard-sm`
      : `${chipBase} bg-milk text-cocoa shadow-hard-sm hover:bg-sand/30 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none`;

  return (
    <div className="my-6">
      <div className="relative border-[2.5px] border-cocoa rounded-3xl bg-cream p-5 sm:p-7 md:p-8 shadow-hard bg-storybook-dots">
        {/* Authentic Adhesive Tape Accent top-left */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tape-horizontal.png"
          alt=""
          aria-hidden="true"
          className="absolute -top-3 sm:-top-3.5 left-6 sm:left-10 w-28 sm:w-32 h-auto -rotate-1 pointer-events-none select-none z-10 drop-shadow-xs"
        />

        <div className="flex flex-col gap-4 sm:gap-5">
          {/* Row 1: Where */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-script text-xl sm:text-2xl text-cocoa font-bold sm:w-28 shrink-0">
              where
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {originOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={opt.isActive}
                  onClick={() => handleFilterClick("origin", opt.value)}
                  className={getChipClass(opt.isActive)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Breed */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-script text-xl sm:text-2xl text-cocoa font-bold sm:w-28 shrink-0">
              breed
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {breedOptions.map((opt) => {
                const isActive = currentBreed.toLowerCase() === opt.value.toLowerCase();
                return (
                  <button
                    key={opt.value}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleFilterClick("breed", opt.value)}
                    className={getChipClass(isActive)}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Row 3: Boy or girl */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <span className="font-script text-xl sm:text-2xl text-cocoa font-bold sm:w-28 shrink-0">
              boy or girl
            </span>
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              {genderOptions.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  aria-pressed={opt.isActive}
                  onClick={() => handleFilterClick("gender", opt.value)}
                  className={getChipClass(opt.isActive)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Count Feedback */}
      <p className="font-script text-2xl sm:text-3xl text-cocoa font-bold mt-6 mb-8 tracking-wide">
        {totalMatches} {totalMatches === 1 ? "puppy" : "puppies"} looking for a home
      </p>
    </div>
  );
}
