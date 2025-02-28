import React, { useState } from 'react';
import { Globe } from 'lucide-react';

interface LanguageSelectorProps {
  darkMode: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (code: string) => {
    setSelectedLanguage(code);
    setIsOpen(false);
    // Here you would normally handle language change in your app
    // This could involve setting a cookie, localStorage item, or calling an API
  };

  const getCurrentLanguageName = () => {
    return languages.find(lang => lang.code === selectedLanguage)?.name || 'English';
  };

  const getCurrentLanguageFlag = () => {
    return languages.find(lang => lang.code === selectedLanguage)?.flag || '🇺🇸';
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={`inline-flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium ${
            darkMode 
              ? 'text-gray-300 hover:text-white' 
              : 'text-gray-700 hover:text-gray-900'
          } focus:outline-none`}
          id="language-menu"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleDropdown}
        >
          <Globe className="mr-1 h-4 w-4" />
          <span className="mr-1">{getCurrentLanguageFlag()}</span>
          <span>{getCurrentLanguageName()}</span>
        </button>
      </div>

      {isOpen && (
        <div
          className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          } ring-1 ring-black ring-opacity-5 z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  selectedLanguage === language.code
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                    : darkMode
                    ? 'text-gray-300 hover:bg-gray-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                role="menuitem"
                onClick={() => selectLanguage(language.code)}
              >
                <span className="mr-2">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
