import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/svg/Logo";

export function Footer() {
  const t = useTranslations("common");
  const tServices = useTranslations("home.services.items");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-100 bg-paper-soft">
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {t("footer.tagline")}
            </p>
            <div className="mt-5 flex gap-4">
              {siteConfig.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand-700 transition-colors hover:text-accent-600"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label={t("footer.navigation")}>
            <h3 className="text-sm font-bold tracking-wide text-brand-900 uppercase">
              {t("footer.navigation")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="text-slate-600 transition-colors hover:text-brand-700">{t("nav.home")}</Link></li>
              <li><Link href="/company" className="text-slate-600 transition-colors hover:text-brand-700">{t("nav.company")}</Link></li>
              <li><Link href="/contact" className="text-slate-600 transition-colors hover:text-brand-700">{t("nav.contact")}</Link></li>
            </ul>
          </nav>

          <nav aria-label={t("footer.solutions")}>
            <h3 className="text-sm font-bold tracking-wide text-brand-900 uppercase">
              {t("footer.solutions")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {siteConfig.solutions.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/solutions/${slug}`}
                    className="text-slate-600 transition-colors hover:text-brand-700"
                  >
                    {tServices(`${slug}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t("footer.legal")}>
            <h3 className="text-sm font-bold tracking-wide text-brand-900 uppercase">
              {t("footer.legal")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/privacy" className="text-slate-600 transition-colors hover:text-brand-700">{t("footer.privacy")}</Link></li>
              <li><Link href="/terms" className="text-slate-600 transition-colors hover:text-brand-700">{t("footer.terms")}</Link></li>
            </ul>
            <h3 className="mt-8 text-sm font-bold tracking-wide text-brand-900 uppercase">
              {t("footer.contact")}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="transition-colors hover:text-brand-700">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-brand-100 pt-6 text-sm text-slate-500">
          © {year} {siteConfig.name}. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}
