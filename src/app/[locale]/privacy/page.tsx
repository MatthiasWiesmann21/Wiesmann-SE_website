import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal/LegalPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.privacy");
  return { title: t("title"), description: t("description") };
}

export default function PrivacyPage() {
  return <LegalPage namespace="privacy" />;
}
