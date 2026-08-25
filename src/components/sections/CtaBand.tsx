import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { FloatingShapes } from "@/components/svg/FloatingShapes";
import { FadeIn } from "@/components/motion/FadeIn";

export function CtaBand() {
  const t = useTranslations("home.cta");

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-brand-800 via-brand-700 to-brand-600 py-20 sm:py-24">
      <FloatingShapes className="opacity-40" />
      <Container className="relative text-center">
        <FadeIn>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
            {t("subtitle")}
          </p>
          <ButtonLink href="/contact" variant="accent" className="mt-8">
            {t("button")}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </FadeIn>
      </Container>
    </section>
  );
}
