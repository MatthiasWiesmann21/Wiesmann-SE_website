import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import { CheckCircle2, ChevronDown, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ButtonLink } from "@/components/ui/Button";
import { FloatingShapes } from "@/components/svg/FloatingShapes";
import { DrawUnderline } from "@/components/svg/DrawUnderline";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/config/site";

type Item = { title: string; description: string };
type Faq = { question: string; answer: string };

export function generateStaticParams() {
  return siteConfig.solutions.map((slug) => ({ slug }));
}

function assertSlug(slug: string) {
  if (!(siteConfig.solutions as readonly string[]).includes(slug)) notFound();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  assertSlug(slug);
  const t = await getTranslations(`solutions.${slug}`);
  return {
    title: t("title"),
    description: t("metaDescription"),
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  assertSlug(slug);
  return <SolutionContent slug={slug} />;
}

function SolutionContent({ slug }: { slug: string }) {
  const t = useTranslations(`solutions.${slug}`);
  const tShared = useTranslations("solutions");
  const features = t.raw("features") as Item[];
  const process = t.raw("process") as Item[];
  const faq = t.raw("faq") as Faq[];

  return (
    <>
      {/* Hero */}
      <div className="relative overflow-hidden bg-dots">
        <FloatingShapes />
        <Container className="relative py-20 text-center sm:py-24">
          <FadeIn>
            <Badge>{t("title")}</Badge>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
              {t("tagline")}
            </h1>
            <DrawUnderline className="mx-auto mt-3 h-3 w-48" />
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              {t("description")}
            </p>
            <ButtonLink href="/contact" variant="primary" className="mt-8">
              {tShared("cta.button")}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </FadeIn>
        </Container>
      </div>

      {/* Features */}
      <Section>
        <Container>
          <SectionHeading title={tShared("featuresTitle")} />
          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((feature, i) => (
              <FadeIn key={feature.title} delay={i * 0.08}>
                <Card className="flex h-full items-start gap-4">
                  <CheckCircle2 className="mt-1 size-6 shrink-0 text-accent-500" />
                  <div>
                    <h3 className="font-bold text-brand-900">{feature.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="bg-paper-soft">
        <Container>
          <SectionHeading title={tShared("processTitle")} />
          <ol className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
            {process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.12}>
                <li className="relative rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-accent-500 text-base font-extrabold text-brand-950">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 font-bold text-brand-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </li>
              </FadeIn>
            ))}
          </ol>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeading title={tShared("faqTitle")} />
          <div className="mx-auto max-w-3xl space-y-4">
            {faq.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.06}>
                <details className="group rounded-2xl border border-brand-100 bg-white shadow-sm open:border-brand-300">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 font-semibold text-brand-900 [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <ChevronDown className="size-5 shrink-0 text-accent-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-linear-to-br from-brand-800 via-brand-700 to-brand-600 py-20">
        <FloatingShapes className="opacity-40" />
        <Container className="relative text-center">
          <FadeIn>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold tracking-tight text-white">
              {tShared("cta.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">
              {tShared("cta.subtitle")}
            </p>
            <ButtonLink href="/contact" variant="accent" className="mt-8">
              {tShared("cta.button")}
              <ArrowRight className="size-4" />
            </ButtonLink>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
