import { usePageTranslations } from "../hooks/useTranslations";

export default function Footer() {
  const { t } = usePageTranslations("footer");
  
  return (
    <footer className="bg-(--surface) border-t border-(--bordercolor) py-6">
      <div className="w-full px-4 text-center">
        <p className="text-(--muted) text-sm">
          {t("copyright").replace("{year}", new Date().getFullYear())}
        </p>
      </div>
    </footer>
  );
}