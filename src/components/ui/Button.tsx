import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 active:scale-[0.98]";

const variants = {
  primary:
    "bg-brand-700 text-white shadow-lg shadow-brand-700/25 hover:bg-brand-800 hover:shadow-brand-800/30",
  accent:
    "bg-accent-500 text-brand-950 shadow-lg shadow-accent-500/30 hover:bg-accent-400",
  outline:
    "border-2 border-brand-200 bg-white text-brand-800 hover:border-brand-400 hover:bg-brand-50",
  ghost: "text-brand-800 hover:bg-brand-50",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
    </Link>
  );
}

export function buttonStyles(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}
