import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion/FadeIn";

export function Process() {
  const t = useTranslations("home.process");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
        />
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute top-6 right-[12%] left-[12%] hidden border-t-2 border-dashed border-brand-200 lg:block"
          />
          {steps.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.12}>
              <li className="relative text-center">
                <div className="relative z-10 mx-auto flex size-12 items-center justify-center rounded-full bg-brand-700 text-lg font-extrabold text-white shadow-lg shadow-brand-700/25">
                  {i + 1}
                </div>
                <h3 className="mt-5 text-lg font-bold text-brand-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
