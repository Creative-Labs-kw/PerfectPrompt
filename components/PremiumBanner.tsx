'use client';

interface PremiumBannerProps {
  language: 'en' | 'ar';
}

export default function PremiumBanner({ language }: PremiumBannerProps) {
  const content = language === 'en' ? {
    title: '⚡ Upgrade to Premium',
    features: [
      '✅ Unlimited prompts',
      '✅ Priority AI processing',
      '✅ No ads',
      '✅ Advanced AI models (GPT-4)',
      '✅ Save & manage prompts',
      '✅ API access'
    ],
    button: 'Upgrade Now - $9.99/month',
    trial: '7-day free trial'
  } : {
    title: '⚡ الترقية إلى النسخة المميزة',
    features: [
      '✅ أوامر غير محدودة',
      '✅ معالجة ذكاء اصطناعي أسرع',
      '✅ بدون إعلانات',
      '✅ نماذج متقدمة (GPT-4)',
      '✅ حفظ وإدارة الأوامر',
      '✅ الوصول إلى API'
    ],
    button: 'الترقية الآن - $9.99/شهر',
    trial: 'تجربة مجانية لمدة 7 أيام'
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-pink-600/20 border-2 border-purple-500/30 backdrop-blur-sm">
      {/* Animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="relative p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-xl">
              👑
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {content.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
              {content.features.map((feature, index) => (
                <div key={index} className="text-white/90 text-sm">
                  {feature}
                </div>
              ))}
            </div>
            <p className="text-sm text-green-400 font-medium mb-4">
              🎁 {content.trial}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => alert('Premium feature coming soon! Contact: darkside944@gmail.com')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
            >
              {content.button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

