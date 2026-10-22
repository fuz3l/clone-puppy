import { clsx } from "clsx";

/**
 * Combines CSS class names conditionally using clsx.
 * 
 * @param {...any} inputs - Class names, expressions, or conditionals.
 * @returns {string} Clean concatenated class names.
 */
export function cn(...inputs) {
  return clsx(inputs);
}
