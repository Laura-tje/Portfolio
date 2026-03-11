import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switch-wrapper">
      <span className={`language-label nl-label ${language === 'nl' ? 'active' : ''}`}>
        NL
      </span>
      <div className="language-switch-container" onClick={toggleLanguage}>
        <div className={`language-switch ${language === 'nl' ? 'nl-active' : 'en-active'}`}>
          <div className="switch-slider" />
        </div>
      </div>
      <span className={`language-label en-label ${language === 'en' ? 'active' : ''}`}>
        EN
      </span>
    </div>
  );
};
