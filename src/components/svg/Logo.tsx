/* eslint-disable @next/next/no-img-element */
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label={siteConfig.name}
    >
      <img
        src="/logo-horizontal.png"
        alt={siteConfig.name}
        className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
      />
    </Link>
  );
}
