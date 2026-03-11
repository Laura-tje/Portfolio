import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
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
        className="language-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {language === 'nl' ? 'NL' : 'EN'}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      
      {isOpen && (
        <div className="language-dropdown-menu">
          <button
            className={`language-option ${language === 'nl' ? 'active' : ''}`}
            onClick={() => handleSelectLanguage('nl')}
          >
            Nederlands
          </button>
          <button
            className={`language-option ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleSelectLanguage('en')}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
};
