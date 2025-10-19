'use client';

import { useEffect, useState } from 'react';

interface InterstitialAdProps {
  language?: 'en' | 'ar';
}

export default function InterstitialAd({ language = 'en' }: InterstitialAdProps) {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    // Show interstitial after 10 seconds (first visit)
    const hasSeenAd = sessionStorage.getItem('interstitial_shown');
    
    if (!hasSeenAd && !closed) {
      const timer = setTimeout(() => {
        setShow(true);
        sessionStorage.setItem('interstitial_shown', 'true');
      }, 10000); // Show after 10 seconds

      return () => clearTimeout(timer);
    }
  }, [closed]);

  const handleClose = () => {
    setShow(false);
    setClosed(true);
  };

  if (!show || closed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
        aria-label="Close ad"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Ad Content */}
      <div className="relative max-w-2xl w-full mx-4 bg-gradient-to-br from-primary-light via-primary to-primary-dark rounded-2xl shadow-2xl overflow-hidden">
        {/* Ad Label */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/70">
          {language === 'en' ? 'Advertisement' : 'إعلان'}
        </div>

        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="relative p-12 text-center space-y-6">
          {/* Icon */}
          <div className="text-8xl">🎁</div>
          
          {/* Headline */}
          <h2 className="text-4xl font-bold text-white">
            {language === 'en' 
              ? 'Special Offer!' 
              : 'عرض خاص!'}
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-white/80 max-w-lg mx-auto">
            {language === 'en'
              ? 'Get Premium Access - Unlimited AI Prompts, No Ads, Advanced Models'
              : 'احصل على الوصول المميز - أوامر ذكاء اصطناعي غير محدودة، بدون إعلانات، نماذج متقدمة'}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto text-left">
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>{language === 'en' ? 'Unlimited prompts' : 'أوامر غير محدودة'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>{language === 'en' ? 'GPT-4 access' : 'وصول إلى GPT-4'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>{language === 'en' ? 'Ad-free' : 'بدون إعلانات'}</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <span className="text-green-400">✓</span>
              <span>{language === 'en' ? 'Priority support' : 'دعم أولوية'}</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="py-4">
            <p className="text-white/50 line-through text-lg">$19.99/month</p>
            <p className="text-5xl font-bold text-white">$9.99/month</p>
            <p className="text-green-400 font-semibold mt-2">
              {language === 'en' ? '50% OFF - Limited Time!' : 'خصم 50% - لفترة محدودة!'}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => alert('Premium upgrade coming soon! Contact: darkside944@gmail.com')}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl shadow-xl transform hover:scale-105 transition-all"
            >
              {language === 'en' ? '🚀 Upgrade Now' : '🚀 الترقية الآن'}
            </button>
            <button
              onClick={handleClose}
              className="bg-white/10 hover:bg-white/20 text-white font-medium py-4 px-8 rounded-xl transition-all"
            >
              {language === 'en' ? 'Maybe Later' : 'ربما لاحقاً'}
            </button>
          </div>

          {/* Trust Badge */}
          <p className="text-xs text-white/40">
            {language === 'en' 
              ? '🔒 Secure Payment • 7-Day Money Back Guarantee' 
              : '🔒 دفع آمن • ضمان استرداد المال لمدة 7 أيام'}
          </p>
        </div>
      </div>
    </div>
  );
}

