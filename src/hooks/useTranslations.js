import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { t } from "../data/translations";

export function usePageTranslations(section) {
  const { language } = useContext(LanguageContext);

  return {
    language,
    t: (key) => t(section, key, language),
  };
}
