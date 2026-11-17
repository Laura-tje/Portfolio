import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectLanguage = (lang) => {
    if (lang !== language) {
      toggleLanguage();
    }
    setIsOpen(false);
  };

  return (
    <div className="language-dropdown">
      <button
        type="button"
        className="language-dropdown-button"
        onClick={() => setIsOpen((open) => !open)}
      >
        {language === 'nl' ? 'NL' : 'EN'}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown-menu">
          <button
            type="button"
            className={`language-option ${language === 'nl' ? 'active' : ''}`}
            onClick={() => handleSelectLanguage('nl')}
          >
            Nederlands
          </button>
          <button
            type="button"
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleSelectLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
