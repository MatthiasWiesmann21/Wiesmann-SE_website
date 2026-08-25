import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { CheckCircle2, PiggyBank, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { LogoMark } from "@/components/svg/LogoMark";
import { DrawUnderline } from "@/components/svg/DrawUnderline";
import { FadeIn } from "@/components/motion/FadeIn";
import { CtaBand } from "@/components/sections/CtaBand";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.company");
  return { title: t("title"), description: t("description") };
}

export default function CompanyPage() {
  const t = useTranslations("company");
  const storyParagraphs = t.raw("story.paragraphs") as string[];
  const skills = t.raw("founder.skills") as string[];
  const values = t.raw("values.items") as Array<{ title: string; description: string }>;

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-dots">
        <Container className="py-20 text-center sm:py-24">
          <FadeIn>
            <Badge>{t("hero.eyebrow")}</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
              {t("hero.title")}
            </h1>
            <DrawUnderline className="mx-auto mt-3 h-3 w-48" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("hero.subtitle")}
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* Story + Founder */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-2">
          <FadeIn>
            <h2 className="text-2xl font-bold text-brand-900">{t("story.title")}</h2>
            {storyParagraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border border-brand-100 bg-paper-soft p-8">
              <div className="flex items-center gap-4">
                <div className="group">
                  <LogoMark className="size-16" />
                </div>
                <div>
                  <p className="text-xl font-bold text-brand-900">{t("founder.name")}</p>
                  <p className="text-sm font-semibold text-accent-600">{t("founder.role")}</p>
                </div>
              </div>
              <p className="mt-5 leading-relaxed text-slate-600">{t("founder.bio")}</p>
              <h3 className="mt-6 text-sm font-bold tracking-wide text-brand-900 uppercase">
                {t("founder.skillsTitle")}
              </h3>
              <ul className="mt-3 space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-paper-soft">
        <Container>
          <SectionHeading title={t("values.title")} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <Card className="h-full">
                  <p className="text-2xl font-extrabold text-accent-500">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-bold text-brand-900">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* One-person trade-offs */}
      <Section>
        <Container>
          <SectionHeading title={t("tradeoff.title")} />
          <div className="grid gap-6 md:grid-cols-2">
            <FadeIn>
              <Card className="h-full border-accent-200 bg-accent-50/50">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent-500 text-brand-950">
                  <PiggyBank className="size-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-900">
                  {t("tradeoff.plus.title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("tradeoff.plus.description")}
                </p>
              </Card>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Card className="h-full">
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-700 text-white">
                  <CalendarClock className="size-6" strokeWidth={2.2} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-900">
                  {t("tradeoff.minus.title")}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t("tradeoff.minus.description")}
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
