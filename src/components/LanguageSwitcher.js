import React, { useContext } from 'react';
import LanguageContext from '../LanguageContext'; 
import './LanguageSwitcher.css'; 

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button
        onClick={() => setLanguage('es')}
        disabled={language === 'es'}
        className={language === 'es' ? 'active' : ''}
      >
        Español
      </button>
      <button
        onClick={() => setLanguage('en')}
        disabled={language === 'en'}
        className={language === 'en' ? 'active' : ''}
      >
        English
      </button>
    </div>
  );
}

export default LanguageSwitcher;
