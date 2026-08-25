import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de"],
  defaultLocale: "en",
  // Static export requires a locale prefix on every path (incl. default).
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
