/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/cn";

/**
 * The gear-and-brackets brand mark (Wiesmann SE logo without text).
 * Wobbles playfully when its parent is hovered (group-hover).
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-mark.png"
      alt=""
      aria-hidden="true"
      className={cn(
        "transition-transform duration-300 group-hover:animate-wobble",
        className
      )}
    />
  );
}
