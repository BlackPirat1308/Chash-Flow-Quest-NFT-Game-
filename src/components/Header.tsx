import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from './LanguageSelector';
import { CryptoPayment } from './CryptoPayment';

export function Header() {
  const { t } = useTranslation();

  return (
    <header className="container mx-auto px-4 py-16 lg:py-24">
      <nav className="flex justify-between items-center mb-16">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="CashFlow Quest" className="h-16 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <CryptoPayment />
        </div>
      </nav>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-gold text-transparent bg-clip-text">
          {t('header.title')}
        </h1>
        <p className="text-xl lg:text-2xl text-teal-100 mb-12">
          {t('header.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group relative gradient-money text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30 overflow-hidden">
            <span className="relative z-10">{t('header.startJourney')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </button>
          <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg border border-gold-400/30 hover:border-gold-400/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20">
            <span className="relative z-10 gradient-gold text-transparent bg-clip-text">{t('header.learnMore')}</span>
          </button>
        </div>
      </div>
    </header>
  );
}