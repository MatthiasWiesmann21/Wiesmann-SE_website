import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/company", "/contact", "/privacy", "/terms"];
  const solutionPaths = siteConfig.solutions.map((slug) => `/solutions/${slug}`);
  const allPaths = [...staticPaths, ...solutionPaths];

  return routing.locales.flatMap((locale) =>
    allPaths.map((path) => ({
      url: `${siteConfig.domain}/${locale}${path}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path.startsWith("/solutions") ? 0.8 : 0.6,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${siteConfig.domain}/${l}${path}/`])
        ),
      },
    }))
  );
}
