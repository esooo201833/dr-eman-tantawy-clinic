'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-4 py-2 rounded-full bg-[#1e3a5f] text-white hover:bg-[#2d4a6f] transition-colors font-semibold text-sm"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span>{language === 'en' ? t.language.arabic : t.language.english}</span>
    </button>
  );
}
