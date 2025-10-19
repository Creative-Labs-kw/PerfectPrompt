'use client';

import { useEffect } from 'react';

interface AdSenseProps {
  slot: string;
  position: 'top' | 'middle' | 'bottom';
}

export default function AdSense({ slot, position }: AdSenseProps) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (window && client) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [client]);

  if (!client || !slot) {
    return (
      <div className="ad-container">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-primary-light/30 to-primary/30 backdrop-blur-sm">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="relative flex flex-col items-center justify-center py-8 px-4">
            <div className="text-4xl mb-3">📢</div>
            <p className="text-white/50 text-sm font-medium mb-1">
              Advertisement Space
            </p>
            <p className="text-white/30 text-xs">
              {position === 'top' && 'Top Banner (728x90)'}
              {position === 'middle' && 'Middle Banner (728x90)'}
              {position === 'bottom' && 'Bottom Banner (728x90)'}
            </p>
            <div className="mt-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <p className="text-white/40 text-xs">
                🚀 Your Ad Here - Contact: darkside944@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ad-container">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}

