"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const t = useTranslations("common.languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center rounded-full border border-brand-100 bg-white p-1"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => router.replace(pathname, { locale: l })}
          aria-pressed={locale === l}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold transition-all duration-200",
            locale === l
              ? "bg-brand-700 text-white shadow-sm"
              : "text-slate-500 hover:text-brand-800"
          )}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
