import React, { useState, useRef, useContext, useEffect } from 'react';
import LanguageContext from '../LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false); // Cerrar el dropdown después de seleccionar
  };

  // Cerrar el dropdown al hacer clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);


  return (
    <div className="language-switcher-custom" ref={dropdownRef}>
      <button
        className="language-dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {languages.find(lang => lang.code === language)?.name || 'Idioma'} {/* Muestra el idioma actual o 'Idioma' por defecto */}
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="dropdown-icon">
          <path fill="currentColor" d="M7 10l5 5 5-5z"></path>
        </svg>
      </button>

      <ul className={`language-dropdown-list ${isOpen ? 'open' : ''}`}>
        {languages.map(lang => (
          <li key={lang.code} className="language-dropdown-item">
            <button
              onClick={() => selectLanguage(lang.code)}
              className={`language-option ${language === lang.code ? 'selected' : ''}`}
            >
              {lang.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageSwitcher;