import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { t, pageTranslations } from '../data/translations';

// Hook voor paginavertalingen
export const usePageTranslations = (section) => {
  const { language } = useContext(LanguageContext);
  
  return {
    language,
    t: (key) => t(section, key, language),
    all: pageTranslations[section]?.[language] || {}
  };
};
