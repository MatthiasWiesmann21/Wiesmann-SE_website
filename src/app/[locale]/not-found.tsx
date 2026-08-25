import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { LogoMark } from "@/components/svg/LogoMark";

export default function NotFound() {
  const t = useTranslations("common.notFound");

  return (
    <Container className="flex flex-col items-center py-24 text-center sm:py-32">
      <div className="group">
        <LogoMark className="size-20" />
      </div>
      <p className="mt-8 font-mono text-6xl font-extrabold text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-bold text-brand-900">{t("title")}</h1>
      <p className="mt-3 max-w-md text-slate-600">{t("description")}</p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        {t("backHome")}
      </ButtonLink>
    </Container>
  );
}
