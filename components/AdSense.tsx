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
        <p className="text-white/30 text-sm">Ad Space - {position}</p>
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

