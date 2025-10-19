'use client';

import { useEffect, useState } from 'react';
import LangSwitch from '@/components/LangSwitch';
import PromptForm from '@/components/PromptForm';
import PromptResult from '@/components/PromptResult';
import PremiumBanner from '@/components/PremiumBanner';
import ExamplePrompts from '@/components/ExamplePrompts';
import AdBanner from '@/components/AdBanner';
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
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">{t.header.title}</h1>
              <p className="text-sm text-white/70">{t.header.subtitle}</p>
            </div>
            <LangSwitch />
          </div>
        </div>
      </header>

      {/* Top Banner Ad */}
      <AdBanner
        slot="top-banner"
        videoUrl="/your-video-ad.mp4"
        clickUrl="https://your-landing-page.com"
        title="Special Offer"
      />

      {/* Main Content with Sidebar Layout */}
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            
            {/* Left Sidebar - Sticky Ad (Desktop only) */}
            <aside className="hidden lg:block lg:w-[300px] flex-shrink-0">
              <AdBanner
                slot="sidebar-left"
                videoUrl="/your-video-ad-sidebar.mp4"
                clickUrl="https://your-landing-page.com"
                title="Premium Features"
              />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 max-w-4xl mx-auto w-full space-y-8">
              {/* Hero Section */}
              <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
                  {t.hero.h1}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-white/90">
                  {t.hero.h2}
                </h2>
                <p className="text-lg text-white/70 max-w-2xl mx-auto">
                  {t.hero.description}
                </p>
              </section>

              {/* Prompt Form */}
              <section className="space-y-6">
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
                <section>
                  <PromptResult result={result} t={t} />
                </section>
              )}

              {/* Inline Video Ad - After Result */}
              {result && (
                <AdBanner
                  slot="inline"
                  videoUrl="/your-video-ad-inline.mp4"
                  clickUrl="https://your-landing-page.com"
                  title="🎉 Special Promotion - Limited Time!"
                />
              )}

              {/* Premium Banner - After result */}
              {result && (
                <section>
                  <PremiumBanner language={language} />
                </section>
              )}

              {/* Examples Section */}
              <ExamplePrompts examples={t.examples.items} title={t.examples.title} />

              {/* Features Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  {t.features.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {t.features.items.map((feature, index) => (
                    <div key={index} className="card hover:scale-105 transition-transform duration-200">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white/70">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* How It Works Section */}
              <section className="space-y-8">
                <h2 className="text-3xl font-bold text-white text-center">
                  {t.howItWorks.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {t.howItWorks.steps.map((step, index) => (
                    <div key={index} className="card text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary to-secondary-hover rounded-full flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ Section */}
              <section className="space-y-6">
                <h2 className="text-3xl font-bold text-white text-center">
                  {t.faq.title}
                </h2>
                <div className="space-y-4">
                  {t.faq.items.map((item, index) => (
                    <details key={index} className="card group">
                      <summary className="text-lg font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                        <span>{item.question}</span>
                        <svg 
                          className="w-5 h-5 text-white/70 group-open:rotate-180 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <p className="mt-4 text-white/80 leading-relaxed">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              {/* SEO Content */}
              <section className="space-y-4 text-white/60 text-sm">
                <h2 className="text-2xl font-bold text-white text-center">
                  {language === 'en' 
                    ? 'About Perfect Prompt - Kuwait AI Tools' 
                    : 'عن الموجه المثالي - أدوات الذكاء الاصطناعي الكويت'}
                </h2>
                <p>
                  {language === 'en'
                    ? 'Perfect Prompt is a free AI prompt generator built in Kuwait to help creators, developers, and professionals generate high-quality prompts for AI models like GPT-4, Claude, and Gemini. Our tool uses advanced prompt engineering techniques to transform your simple ideas into detailed, effective prompts that get better results from AI.'
                    : 'الموجه المثالي هو مولد أوامر ذكاء اصطناعي مجاني تم تطويره في الكويت لمساعدة المبدعين والمطورين والمحترفين على إنشاء أوامر عالية الجودة لنماذج الذكاء الاصطناعي مثل GPT-4 و Claude و Gemini. تستخدم أداتنا تقنيات هندسة الأوامر المتقدمة لتحويل أفكارك البسيطة إلى أوامر مفصلة وفعالة تحقق نتائج أفضل من الذكاء الاصطناعي.'}
                </p>
                <p>
                  {language === 'en'
                    ? 'Whether you need prompts for content creation, coding, research, or creative writing, Perfect Prompt helps you craft the perfect instruction. Our bilingual support means you can generate prompts in both English and Arabic, making it ideal for the Middle East market.'
                    : 'سواء كنت بحاجة إلى أوامر لإنشاء المحتوى أو البرمجة أو البحث أو الكتابة الإبداعية، يساعدك الموجه المثالي في صياغة التعليمات المثالية. دعمنا الثنائي اللغة يعني أنه يمكنك إنشاء أوامر باللغتين الإنجليزية والعربية، مما يجعله مثالياً لسوق الشرق الأوسط.'}
                </p>
              </section>
            </div>

            {/* Right Sidebar - Sticky Ad (Desktop only) */}
            <aside className="hidden lg:block lg:w-[300px] flex-shrink-0">
              <AdBanner
                slot="sidebar-right"
                videoUrl="/your-video-ad-sidebar-2.mp4"
                clickUrl="https://your-landing-page.com"
                title="Exclusive Offer"
              />
            </aside>

          </div>
        </div>
      </main>

      {/* Bottom Banner Ad */}
      <AdBanner
        slot="bottom-banner"
        videoUrl="/your-video-ad-bottom.mp4"
        clickUrl="https://your-landing-page.com"
        title="Don't Miss Out"
      />

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 mt-20">
        <div className="container-custom py-8">
          <div className="text-center space-y-4">
            <p className="text-white/90 font-medium">{t.footer.madeIn}</p>
            <div className="flex flex-col items-center gap-2">
              <p className="text-white/70 text-sm">
                {language === 'en' 
                  ? 'Built by KW.HADES - Creative Labs' 
                  : 'بناه KW.HADES - Creative Labs'}
              </p>
              <a 
                href="mailto:darkside944@gmail.com" 
                className="text-secondary hover:text-secondary-hover transition-colors text-sm"
              >
                darkside944@gmail.com
              </a>
            </div>
                <div className="flex items-center justify-center gap-6 text-sm text-white/60">
                  <a href="/privacy" className="hover:text-white transition-colors">
                    {t.footer.links.privacy}
                  </a>
                  <a href="mailto:darkside944@gmail.com" className="hover:text-white transition-colors">
                    {t.footer.links.contact}
                  </a>
                </div>
            <p className="text-xs text-white/40">
              {language === 'en'
                ? 'AI Prompt Generator | Best Prompts for GPT, Claude & Gemini | Kuwait AI Tools'
                : 'مولد أوامر الذكاء الاصطناعي | أفضل الأوامر لـ GPT و Claude و Gemini | أدوات الذكاء الاصطناعي الكويت'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

