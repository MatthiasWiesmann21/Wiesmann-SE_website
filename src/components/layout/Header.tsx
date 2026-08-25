"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/svg/Logo";
import { SolutionsDropdown } from "./SolutionsDropdown";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const t = useTranslations("common.nav");

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-800"
          >
            {t("home")}
          </Link>
          <Link
            href="/company"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-800"
          >
            {t("company")}
          </Link>
          <SolutionsDropdown label={t("solutions")} />
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-800"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
