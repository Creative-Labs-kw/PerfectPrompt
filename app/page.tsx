'use client';

import { useEffect, useState } from 'react';
import LangSwitch from '@/components/LangSwitch';
import PromptForm from '@/components/PromptForm';
import PromptResult from '@/components/PromptResult';
import PremiumBanner from '@/components/PremiumBanner';
import ExamplePrompts from '@/components/ExamplePrompts';
import { getTranslations, type Language } from '@/lib/translations';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export default function HomePage() {
  const [language, setLanguage] = useState<Language>('en');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('preferred-language') as Language | null;
    const htmlLang = document.documentElement.lang as Language;
    const detectedLang = storedLang || htmlLang || 'en';
    
    setLanguage(detectedLang);
    document.documentElement.lang = detectedLang;
    document.documentElement.dir = detectedLang === 'ar' ? 'rtl' : 'ltr';
  }, []);

  if (!mounted) {
    return null;
  }

  const t = getTranslations(language);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">{t.header.title}</h1>
              <p className="text-sm text-white/70">{t.header.subtitle}</p>
            </div>
            <img 
              src="/logo.png" 
              alt="Perfect Prompt Logo" 
              className="h-12 w-12 object-contain flex-shrink-0"
            />
            <LangSwitch />
          </div>
        </div>
      </header>

      {/* Main Content - Google Auto Ads will place ads automatically */}
      <main className="container-custom py-12 space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          {/* Logo in the middle */}
          <div className="flex justify-center mb-6">
            <img 
              src="/logo.png" 
              alt="Perfect Prompt Logo" 
              className="h-24 w-24 md:h-32 md:w-32 object-contain animate-fade-in"
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
            {t.hero.h1}
          </h1>
        </section>

        {/* Prompt Form */}
        <section className="max-w-3xl mx-auto space-y-6">
          <PromptForm
            t={t}
            onResult={setResult}
            onError={setError}
            language={language}
          />
          
          {error && (
            <div className="card bg-red-500/10 border-red-500/30">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          )}
        </section>

        {/* Result */}
        {result && (
          <section className="max-w-3xl mx-auto">
            <PromptResult result={result} t={t} />
          </section>
        )}

        {/* Premium Banner - After result */}
        {result && (
          <section className="max-w-3xl mx-auto">
            <PremiumBanner language={language} />
          </section>
        )}

        {/* Examples Section */}
        <ExamplePrompts examples={t.examples.items} title={t.examples.title} />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 mt-20">
        <div className="container-custom py-6">
          <div className="text-center space-y-3">
            <p className="text-white/70 text-sm">
              {t.footer.madeIn}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                {t.footer.links.privacy}
              </a>
              <span className="text-white/40">•</span>
              <a 
                href="mailto:darkside944@gmail.com" 
                className="text-secondary hover:text-secondary-hover transition-colors font-medium"
              >
                darkside944@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

