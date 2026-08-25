import { useTranslations } from "next-intl";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { DrawUnderline } from "@/components/svg/DrawUnderline";
import { FadeIn } from "@/components/motion/FadeIn";

export function AboutTeaser() {
  const t = useTranslations("home.about");
  const points = t.raw("points") as string[];

  return (
    <Section className="bg-paper-soft">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative">
            <div className="absolute -top-6 -left-6 size-24 animate-float rounded-3xl bg-accent-200/60" />
            <div className="absolute -right-4 -bottom-4 size-16 animate-float-delayed rounded-2xl bg-brand-200/60" />
            <div className="relative rounded-3xl border border-brand-100 bg-white p-10 shadow-lg shadow-brand-100/50">
              <p className="font-mono text-sm text-brand-500">{"// whoami"}</p>
              <p className="mt-4 text-3xl font-extrabold tracking-tight text-brand-900">
                Matthias Wiesmann
              </p>
              <p className="mt-1 font-semibold text-accent-600">
                Founder & Software Engineer
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Web", "Mobile", "SEO", "Branding", "Consulting"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-800"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Badge>{t("eyebrow")}</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">
            {t("title")}
          </h2>
          <DrawUnderline className="mt-2 h-3 w-40" />
          <p className="mt-6 text-lg leading-relaxed text-slate-600">{t("text")}</p>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-slate-700">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <ButtonLink href="/company" variant="outline" className="mt-8">
            {t("cta")}
            <ArrowRight className="size-4" />
          </ButtonLink>
        </FadeIn>
      </Container>
    </Section>
  );
}
