import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";

type LegalSection = { heading: string; body: string };

export function LegalPage({ namespace }: { namespace: "privacy" | "terms" }) {
  const t = useTranslations(`legal.${namespace}`);
  const tLegal = useTranslations("legal");
  const sections = t.raw("sections") as LegalSection[];

  return (
    <Container className="max-w-3xl py-20 sm:py-24">
      <FadeIn>
        <h1 className="text-4xl font-extrabold tracking-tight text-brand-900">
          {t("title")}
        </h1>
        <p className="mt-3 text-sm font-medium text-slate-400">{tLegal("lastUpdated")}</p>
        <p className="mt-6 leading-relaxed text-slate-600">{t("intro")}</p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-brand-900">{section.heading}</h2>
              <p className="mt-3 leading-relaxed text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
