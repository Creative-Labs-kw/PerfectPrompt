'use client';

import { useEffect, useState } from 'react';

export default function LangSwitch() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const htmlLang = document.documentElement.lang as 'en' | 'ar';
    setCurrentLang(htmlLang || 'en');
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    const newDir = newLang === 'ar' ? 'rtl' : 'ltr';
    
    document.documentElement.lang = newLang;
    document.documentElement.dir = newDir;
    
    setCurrentLang(newLang);
    
    // Store preference
    localStorage.setItem('preferred-language', newLang);
    
    // Reload to apply translations
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="btn-secondary flex items-center gap-2"
      aria-label="Toggle Language"
    >
      <span className="text-lg">{currentLang === 'en' ? '🇸🇦' : '🇺🇸'}</span>
      <span>{currentLang === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
}

