import { Code2, Smartphone, Search, Palette, Compass } from "lucide-react";
import { LogoMark } from "./LogoMark";

/**
 * Playful orbit: the brand mark sits in the center while the five
 * service icons circle around it. Pure CSS animation (uses the
 * `animate-orbit` keyframes defined in globals.css), so it works
 * without any client-side JavaScript.
 */
const orbitIcons = [
  { Icon: Code2, angle: 0, color: "bg-brand-700 text-white" },
  { Icon: Smartphone, angle: 72, color: "bg-accent-500 text-brand-950" },
  { Icon: Search, angle: 144, color: "bg-brand-800 text-white" },
  { Icon: Palette, angle: 216, color: "bg-accent-300 text-brand-950" },
  { Icon: Compass, angle: 288, color: "bg-brand-500 text-white" },
];

export function OrbitIcons({ centerLabel }: { centerLabel: string }) {
  return (
    <div className="relative mx-auto flex size-72 items-center justify-center sm:size-96">
      {/* dotted orbit ring */}
      <div className="absolute inset-6 rounded-full border-2 border-dashed border-brand-200" />
      <div className="absolute inset-0 rounded-full border border-brand-100" />

      {/* center tile */}
      <div className="group relative z-10 flex size-28 flex-col items-center justify-center gap-1.5 rounded-3xl bg-white shadow-xl shadow-brand-100 ring-1 ring-brand-100 sm:size-32">
        <LogoMark className="size-12" />
        <span className="text-xs font-semibold text-brand-800">{centerLabel}</span>
      </div>

      {/* orbiting icons */}
      {orbitIcons.map(({ Icon, angle, color }, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 animate-orbit"
          style={
            {
              "--orbit-radius": "clamp(96px, 18vw, 150px)",
              transform: `rotate(${angle}deg)`,
              animationDelay: `${-(24 / 360) * angle}s`,
            } as React.CSSProperties
          }
        >
          <div
            className={`flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl shadow-lg ${color}`}
          >
            <Icon className="size-6" strokeWidth={2.2} />
          </div>
        </div>
      ))}
    </div>
  );
}
