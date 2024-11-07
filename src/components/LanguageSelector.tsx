import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'zh', name: '中文' },
  { code: 'ja', name: '日本語' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800/30 border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300">
        <Globe className="h-5 w-5 text-cyan-400" />
        <span className="text-teal-100">{languages.find(lang => lang.code === i18n.language)?.name || 'Language'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 py-2 w-48 bg-emerald-800/95 backdrop-blur-sm rounded-xl border border-cyan-400/20 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className="w-full px-4 py-2 text-left text-teal-100 hover:bg-cyan-400/20 transition-colors duration-200"
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
}