import { cn } from "@/lib/cn";

/**
 * Decorative floating code brackets and symbols that drift slowly
 * in the background of hero sections.
 */
const symbols = [
  { text: "{ }", className: "left-[4%] top-[18%] text-4xl text-brand-200", anim: "animate-float" },
  { text: "</>", className: "right-[6%] top-[14%] text-3xl text-accent-300", anim: "animate-float-delayed" },
  { text: "( )", className: "left-[12%] bottom-[16%] text-2xl text-accent-200", anim: "animate-float-delayed" },
  { text: "=>", className: "right-[14%] bottom-[24%] text-3xl text-brand-100", anim: "animate-float" },
  { text: ";", className: "left-[46%] top-[6%] text-3xl text-brand-200", anim: "animate-float-delayed" },
  { text: "*", className: "right-[38%] bottom-[8%] text-4xl text-accent-200", anim: "animate-float" },
];

export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {symbols.map((s, i) => (
        <span
          key={i}
          className={cn("absolute font-mono font-bold select-none", s.anim, s.className)}
        >
          {s.text}
        </span>
      ))}
    </div>
  );
}
