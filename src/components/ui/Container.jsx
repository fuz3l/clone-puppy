import { cn } from "@/lib/utils";

/**
 * Reusable Container primitive for consistent horizontal centering and responsive gutters.
 * Constrains maximum content width to 1200px.
 *
 * @param {Object} props
 * @param {React.ElementType} [props.as='div'] - Semantic HTML element tag to render.
 * @param {string} [props.className] - Additional utility classes.
 * @param {React.ReactNode} props.children - Child elements.
 */
export default function Container({
  as: Component = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
