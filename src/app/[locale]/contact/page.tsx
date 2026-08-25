import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Mail, MapPin, AtSign } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { FloatingShapes } from "@/components/svg/FloatingShapes";
import { FadeIn } from "@/components/motion/FadeIn";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.contact");
  return { title: t("title"), description: t("description") };
}

export default function ContactPage() {
  const t = useTranslations("contact");
  const { contact, socials } = siteConfig;

  return (
    <div className="relative overflow-hidden bg-dots">
      <FloatingShapes />
      <Container className="relative py-20 sm:py-24">
        <FadeIn className="max-w-2xl">
          <Badge>{t("hero.eyebrow")}</Badge>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-brand-900 sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            {t("hero.subtitle")}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-12 lg:grid-cols-5">
          <FadeIn className="lg:col-span-3">
            <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-lg shadow-brand-100/50">
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div className="rounded-3xl bg-brand-800 p-8 text-white">
              <h2 className="text-xl font-bold">{t("info.title")}</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-5 shrink-0 text-accent-300" />
                  <div>
                    <p className="text-xs font-bold tracking-wide text-brand-200 uppercase">
                      {t("info.emailLabel")}
                    </p>
                    <a href={`mailto:${contact.email}`} className="mt-0.5 block font-semibold hover:text-accent-300">
                      {contact.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-accent-300" />
                  <div>
                    <p className="text-xs font-bold tracking-wide text-brand-200 uppercase">
                      {t("info.addressLabel")}
                    </p>
                    <address className="mt-0.5 font-semibold not-italic">
                      {contact.addressLines.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AtSign className="mt-0.5 size-5 shrink-0 text-accent-300" />
                  <div>
                    <p className="text-xs font-bold tracking-wide text-brand-200 uppercase">
                      {t("info.socialsLabel")}
                    </p>
                    <div className="mt-0.5 flex gap-4">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-accent-300"
                        >
                          {s.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  );
}
