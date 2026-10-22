import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * @typedef {'primary' | 'secondary' | 'ghost'} ButtonVariant
 * @typedef {'sm' | 'md' | 'lg'} ButtonSize
 */

/**
 * Reusable Button component supporting primary, secondary, and ghost variants.
 * Automatically renders a Next.js Link when an `href` prop is supplied.
 *
 * @type {React.ForwardRefExoticComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & {
 *   variant?: ButtonVariant,
 *   size?: ButtonSize,
 *   href?: string,
 *   className?: string,
 *   children: React.ReactNode
 * }>}
 */
const Button = forwardRef(function Button(
  {
    variant = "primary",
    size = "md",
    href,
    disabled = false,
    className = "",
    children,
    type = "button",
    ...props
  },
  ref
) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-apricot focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-apricot text-milk hover:bg-apricot-hover shadow-sm hover:shadow",
    secondary:
      "bg-sand-light text-cocoa hover:bg-sand border border-sand shadow-xs",
    ghost:
      "bg-transparent text-cocoa hover:bg-sand-light/60 active:bg-sand/50",
  };

  const sizeStyles = {
    sm: "h-9 px-3.5 text-xs sm:text-sm rounded-full gap-1.5",
    md: "h-11 px-5 text-sm sm:text-base rounded-full gap-2",
    lg: "h-13 px-7 text-base sm:text-lg rounded-full gap-2.5",
  };

  const combinedClasses = cn(
    baseStyles,
    variantStyles[variant] || variantStyles.primary,
    sizeStyles[size] || sizeStyles.md,
    className
  );

  if (href && !disabled) {
    return (
      <Link ref={ref} href={href} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      aria-disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
