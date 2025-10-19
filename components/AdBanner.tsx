'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  slot: 'top-banner' | 'bottom-banner' | 'sidebar-left' | 'sidebar-right' | 'inline';
  adSlot?: string; // Google AdSense ad slot ID
}

export default function AdBanner({ slot, adSlot }: AdBannerProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (window && client && adSlot) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [client, adSlot]);

  // Top/Bottom Banner (970x90 or 728x90)
  if (slot === 'top-banner' || slot === 'bottom-banner') {
    return (
      <div className={`w-full ${slot === 'top-banner' ? 'mb-8' : 'mt-8'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-center min-h-[90px] md:min-h-[100px]">
            {client && adSlot ? (
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client={client}
                data-ad-slot={adSlot}
                data-ad-format="horizontal"
                data-full-width-responsive="true"
              />
            ) : (
              <div className="w-full rounded-lg border border-white/10 bg-gradient-to-br from-primary-light/20 to-primary/20 p-6 text-center">
                <div className="text-3xl mb-2">📢</div>
                <p className="text-white/40 text-sm">
                  Google AdSense - {slot === 'top-banner' ? 'Top' : 'Bottom'} Banner
                </p>
                <p className="text-white/30 text-xs mt-1">
                  Ad will appear here once AdSense is approved
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sidebar Ads (300x250 or 300x600)
  if (slot === 'sidebar-left' || slot === 'sidebar-right') {
    return (
      <div className="w-full max-w-[300px] sticky top-4">
        <div className="flex items-center justify-center min-h-[250px]">
          {client && adSlot ? (
            <ins
              className="adsbygoogle"
              style={{ display: 'block' }}
              data-ad-client={client}
              data-ad-slot={adSlot}
              data-ad-format="rectangle"
              data-full-width-responsive="false"
            />
          ) : (
            <div className="w-full rounded-lg border border-white/10 bg-gradient-to-br from-primary-light/20 to-primary/20 p-6 text-center min-h-[250px] flex flex-col items-center justify-center">
              <div className="text-4xl mb-3">📢</div>
              <p className="text-white/40 text-sm">
                Google AdSense
              </p>
              <p className="text-white/30 text-xs mt-1">
                {slot === 'sidebar-left' ? 'Left' : 'Right'} Sidebar (300x250)
              </p>
              <p className="text-white/20 text-xs mt-2">
                Ad will appear once approved
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Inline Ad (responsive, within content)
  if (slot === 'inline') {
    return (
      <div className="w-full my-8">
        <div className="flex items-center justify-center min-h-[200px]">
          {client && adSlot ? (
            <ins
              className="adsbygoogle"
              style={{ display: 'block', textAlign: 'center' }}
              data-ad-client={client}
              data-ad-slot={adSlot}
              data-ad-format="auto"
              data-full-width-responsive="true"
            />
          ) : (
            <div className="w-full rounded-lg border border-white/10 bg-gradient-to-br from-primary-light/20 to-primary/20 p-8 text-center">
              <div className="text-5xl mb-3">📢</div>
              <p className="text-white/40 text-lg">
                Google AdSense - Inline Ad
              </p>
              <p className="text-white/30 text-sm mt-2">
                Responsive ad unit (Auto format)
              </p>
              <p className="text-white/20 text-xs mt-2">
                Ad will appear once approved
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

