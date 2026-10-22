import { cn } from "@/lib/utils";

/**
 * @typedef {'left' | 'center' | 'right'} HeadingAlign
 */

/**
 * SectionHeading component for standardized section headers across the site.
 * Displays an optional eyebrow, a display-styled headline, and a descriptive subtitle.
 *
 * @param {Object} props
 * @param {React.ReactNode} [props.eyebrow] - Accent note or category badge above the title.
 * @param {React.ReactNode} props.title - Primary section title.
 * @param {React.ReactNode} [props.subtitle] - Supporting descriptive copy.
 * @param {HeadingAlign} [props.align='center'] - Text alignment.
 * @param {React.ElementType} [props.as='h2'] - Semantic HTML heading tag for the title.
 * @param {string} [props.className] - Optional extra container classes.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  as: HeadingTag = "h2",
  className = "",
}) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-2xl gap-2 sm:gap-3",
        alignmentClasses[align] || alignmentClasses.center,
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-semibold tracking-wider uppercase text-apricot bg-apricot-light rounded-full w-fit">
          {eyebrow}
        </span>
      )}

      <HeadingTag className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-cocoa tracking-tight leading-tight">
        {title}
      </HeadingTag>

      {subtitle && (
        <p className="font-body text-sm sm:text-base md:text-lg text-cocoa-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
