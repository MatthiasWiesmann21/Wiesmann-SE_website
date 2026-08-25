import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { OrbitIcons } from "@/components/svg/OrbitIcons";
import { FloatingShapes } from "@/components/svg/FloatingShapes";
import { FadeIn } from "@/components/motion/FadeIn";

export function Hero() {
  const t = useTranslations("home.hero");

  return (
    <div className="relative overflow-hidden bg-dots">
      <FloatingShapes />
      <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-2">
        <FadeIn>
          <Badge>
            <span className="size-1.5 animate-pulse-soft rounded-full bg-accent-500" />
            {t("badge")}
          </Badge>
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-brand-900 sm:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/contact" variant="primary">
              {t("primaryCta")}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href="/solutions/web-development" variant="outline">
              {t("secondaryCta")}
            </ButtonLink>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          <OrbitIcons centerLabel={t("orbitCenter")} />
        </FadeIn>
      </Container>
    </div>
  );
}
