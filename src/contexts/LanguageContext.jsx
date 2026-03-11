import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('nl'); // 'nl' of 'en'

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'nl' ? 'en' : 'nl');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
