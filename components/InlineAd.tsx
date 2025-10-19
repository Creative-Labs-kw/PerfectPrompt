'use client';

import { useEffect, useState } from 'react';

interface InlineAdProps {
  position: 'top' | 'middle' | 'bottom' | 'sidebar';
  language?: 'en' | 'ar';
}

export default function InlineAd({ position, language = 'en' }: InlineAdProps) {
  const [adType, setAdType] = useState<'banner' | 'native'>('banner');

  useEffect(() => {
    // Randomly show different ad types for variety
    setAdType(Math.random() > 0.5 ? 'banner' : 'native');
  }, []);

  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  // If AdSense is configured, show real ads
  if (client) {
    return (
      <div className="my-6">
        <div className="text-center text-xs text-white/30 mb-2">
          {language === 'en' ? 'Advertisement' : 'إعلان'}
        </div>
        <div className="ad-container">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={client}
            data-ad-format="auto"
            data-full-width-responsive="true"
          />
        </div>
      </div>
    );
  }

  // Show professional-looking ad placeholders
  if (adType === 'banner') {
    return (
      <div className="my-6">
        <div className="text-center text-xs text-white/30 mb-2">
          {language === 'en' ? 'Advertisement' : 'إعلان'}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative flex items-center justify-center py-12 px-4">
            <div className="text-center space-y-3">
              <div className="text-5xl">💎</div>
              <h3 className="text-xl font-bold text-white/80">
                {language === 'en' ? 'Premium Ad Space' : 'مساحة إعلانية مميزة'}
              </h3>
              <p className="text-white/50 text-sm max-w-md">
                {language === 'en' 
                  ? 'Advertise your product or service to thousands of AI enthusiasts'
                  : 'أعلن عن منتجك أو خدمتك لآلاف المهتمين بالذكاء الاصطناعي'
                }
              </p>
              <div className="pt-2">
                <a
                  href="mailto:darkside944@gmail.com?subject=Advertising Inquiry"
                  className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white/70 text-sm transition-all"
                >
                  {language === 'en' ? '📧 Advertise Here' : '📧 أعلن هنا'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Native ad style (looks like content)
  return (
    <div className="my-6">
      <div className="text-center text-xs text-white/30 mb-2">
        {language === 'en' ? 'Sponsored' : 'إعلان مدعوم'}
      </div>
      <div className="card hover:border-white/20 transition-all cursor-pointer">
        <div className="flex gap-4">
          {/* Icon/Image placeholder */}
          <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-3xl">
            🚀
          </div>
          
          {/* Content */}
          <div className="flex-1">
            <h4 className="text-white font-semibold mb-1">
              {language === 'en' 
                ? 'Boost Your AI Projects with Premium Tools' 
                : 'عزز مشاريع الذكاء الاصطناعي الخاصة بك بأدوات مميزة'
              }
            </h4>
            <p className="text-white/60 text-sm mb-2">
              {language === 'en'
                ? 'Professional AI solutions for businesses and developers. Get started today!'
                : 'حلول ذكاء اصطناعي احترافية للشركات والمطورين. ابدأ اليوم!'
              }
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-green-400">
                {language === 'en' ? 'Learn More →' : 'اعرف المزيد ←'}
              </span>
              <span className="text-xs text-white/40">
                {language === 'en' ? 'Ad' : 'إعلان'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

