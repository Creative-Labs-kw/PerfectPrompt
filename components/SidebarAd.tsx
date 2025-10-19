'use client';

interface SidebarAdProps {
  language?: 'en' | 'ar';
}

export default function SidebarAd({ language = 'en' }: SidebarAdProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  // If AdSense configured, show real ads
  if (client) {
    return (
      <div className="sticky top-4 space-y-6">
        <div className="text-center text-xs text-white/30 mb-2">
          {language === 'en' ? 'Advertisement' : 'إعلان'}
        </div>
        {/* Vertical Ad Unit 1 */}
        <div className="ad-container min-h-[600px]">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={client}
            data-ad-slot="sidebar-1"
            data-ad-format="vertical"
            data-full-width-responsive="false"
          />
        </div>
        
        {/* Vertical Ad Unit 2 */}
        <div className="ad-container min-h-[300px]">
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client={client}
            data-ad-slot="sidebar-2"
            data-ad-format="rectangle"
          />
        </div>
      </div>
    );
  }

  // Professional placeholder ads
  return (
    <div className="sticky top-4 space-y-6">
      <div className="text-center text-xs text-white/30 mb-2">
        {language === 'en' ? 'Advertisement' : 'إعلان'}
      </div>
      
      {/* Sidebar Ad 1 - Large Vertical */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-green-600/20 via-blue-600/20 to-purple-600/20 border border-white/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative flex flex-col items-center justify-center py-16 px-4 min-h-[600px]">
          <div className="text-center space-y-4">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-white/80">
              {language === 'en' ? 'Sidebar Ad Space' : 'مساحة إعلانية جانبية'}
            </h3>
            <p className="text-white/50 text-sm max-w-xs">
              {language === 'en' 
                ? '300x600 Premium Placement - High Visibility'
                : 'موضع مميز 300×600 - رؤية عالية'
              }
            </p>
            <div className="pt-4">
              <a
                href="mailto:darkside944@gmail.com?subject=Sidebar Ad Inquiry"
                className="inline-block px-6 py-3 bg-green-600/20 hover:bg-green-600/30 rounded-lg text-white text-sm border border-green-500/30 transition-all"
              >
                {language === 'en' ? '💰 Advertise Here' : '💰 أعلن هنا'}
              </a>
            </div>
            <p className="text-xs text-white/30 pt-2">
              darkside944@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Ad 2 - Medium Rectangle */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 border border-white/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative flex flex-col items-center justify-center py-12 px-4 min-h-[300px]">
          <div className="text-center space-y-3">
            <div className="text-5xl">🚀</div>
            <h4 className="text-xl font-bold text-white/80">
              {language === 'en' ? 'Medium Rectangle' : 'مستطيل متوسط'}
            </h4>
            <p className="text-white/50 text-xs max-w-xs">
              {language === 'en' ? '300x250 Ad Unit' : 'وحدة إعلانية 300×250'}
            </p>
            <p className="text-xs text-white/40">
              {language === 'en' ? 'High CTR Position' : 'موقع نسبة نقر مرتفعة'}
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Ad 3 - Small Square */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-yellow-600/20 via-orange-600/20 to-red-600/20 border border-white/10 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative flex flex-col items-center justify-center py-8 px-4 min-h-[250px]">
          <div className="text-center space-y-2">
            <div className="text-4xl">📱</div>
            <h4 className="text-lg font-bold text-white/80">
              {language === 'en' ? 'Square Ad' : 'إعلان مربع'}
            </h4>
            <p className="text-white/50 text-xs">
              {language === 'en' ? '250x250' : '250×250'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

