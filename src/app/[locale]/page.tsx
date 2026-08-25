import { Hero } from "@/components/sections/Hero";
import { ServicesTeaser } from "@/components/sections/ServicesTeaser";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { Process } from "@/components/sections/Process";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesTeaser />
      <AboutTeaser />
      <Process />
      <CtaBand />
    </>
  );
}
