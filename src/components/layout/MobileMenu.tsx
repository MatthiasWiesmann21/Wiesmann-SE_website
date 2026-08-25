"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

export function MobileMenu() {
  const t = useTranslations("common");
  const tServices = useTranslations("home.services.items");
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t("mobileMenu.close") : t("mobileMenu.open")}
        className="flex size-10 items-center justify-center rounded-full text-brand-900 transition-colors hover:bg-brand-50"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 z-40 bg-brand-950/20 backdrop-blur-sm"
              onClick={close}
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              aria-label="Mobile"
              className="absolute inset-x-0 top-20 z-40 border-b border-brand-100 bg-white p-4 shadow-xl"
            >
              <div className="flex flex-col gap-1">
                <Link href="/" onClick={close} className="rounded-xl px-4 py-3 text-base font-semibold text-brand-900 hover:bg-brand-50">
                  {t("nav.home")}
                </Link>
                <Link href="/company" onClick={close} className="rounded-xl px-4 py-3 text-base font-semibold text-brand-900 hover:bg-brand-50">
                  {t("nav.company")}
                </Link>
                <p className="mt-2 px-4 text-xs font-bold tracking-wide text-slate-400 uppercase">
                  {t("nav.solutions")}
                </p>
                {siteConfig.solutions.map((slug) => (
                  <Link
                    key={slug}
                    href={`/solutions/${slug}`}
                    onClick={close}
                    className="rounded-xl px-4 py-2.5 pl-8 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-800"
                  >
                    {tServices(`${slug}.title`)}
                  </Link>
                ))}
                <Link href="/contact" onClick={close} className="mt-1 rounded-xl px-4 py-3 text-base font-semibold text-brand-900 hover:bg-brand-50">
                  {t("nav.contact")}
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
