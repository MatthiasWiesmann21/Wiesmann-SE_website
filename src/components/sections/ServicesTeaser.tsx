import { useTranslations } from "next-intl";
import { Code2, Smartphone, Search, Palette, Compass, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Link } from "@/i18n/navigation";
import { siteConfig, type SolutionSlug } from "@/config/site";
import { FadeIn } from "@/components/motion/FadeIn";
import { cn } from "@/lib/cn";

const icons: Record<SolutionSlug, typeof Code2> = {
  "web-development": Code2,
  "mobile-app-development": Smartphone,
  seo: Search,
  branding: Palette,
  consulting: Compass,
};

const iconStyles: Record<SolutionSlug, string> = {
  "web-development": "bg-brand-700 text-white",
  "mobile-app-development": "bg-accent-500 text-brand-950",
  seo: "bg-brand-800 text-white",
  branding: "bg-accent-300 text-brand-950",
  consulting: "bg-brand-500 text-white",
};

export function ServicesTeaser() {
  const t = useTranslations("home.services");

  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {siteConfig.solutions.map((slug, i) => {
            const Icon = icons[slug];
            return (
              <FadeIn
                key={slug}
                delay={i * 0.08}
                className={cn(
                  "lg:col-span-2",
                  // On lg (6-col grid): 3 cards on row one, the last two
                  // centered on row two. On sm the last card goes full-width.
                  i === 3 && "lg:col-start-2",
                  i === 4 && "sm:col-span-2 lg:col-span-2"
                )}
              >
                <Link href={`/solutions/${slug}`} className="group block h-full">
                  <Card className="flex h-full flex-col">
                    <div
                      className={`flex size-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconStyles[slug]}`}
                    >
                      <Icon className="size-6" strokeWidth={2.2} />
                    </div>
                    <h3 className="mt-5 flex items-center gap-1.5 text-lg font-bold text-brand-900">
                      {t(`items.${slug}.title`)}
                      <ArrowUpRight className="size-4 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 text-accent-500" />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {t(`items.${slug}.description`)}
                    </p>
                  </Card>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
