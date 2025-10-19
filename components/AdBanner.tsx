'use client';

import { useEffect, useState } from 'react';

interface AdBannerProps {
  slot: 'top-banner' | 'bottom-banner' | 'sidebar-left' | 'sidebar-right' | 'inline';
  videoUrl?: string;
  imageUrl?: string;
  clickUrl?: string;
  title?: string;
}

export default function AdBanner({ slot, videoUrl, imageUrl, clickUrl, title }: AdBannerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (clickUrl) {
      window.open(clickUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Top/Bottom Banner (970x90 or 728x90)
  if (slot === 'top-banner' || slot === 'bottom-banner') {
    return (
      <div className={`w-full ${slot === 'top-banner' ? 'mb-8' : 'mt-8'}`}>
        <div className="container-custom">
          <div
            className={`
              relative rounded-lg overflow-hidden
              bg-gradient-to-br from-primary-light/20 to-primary/20 
              border border-white/10 shadow-lg
              transition-all duration-500
              ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              ${clickUrl ? 'cursor-pointer hover:border-secondary/40 hover:shadow-secondary/10' : ''}
            `}
            onClick={handleClick}
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />
            
            <div className="relative flex items-center justify-center h-[90px] md:h-[100px] p-4">
              {videoUrl ? (
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-auto max-w-full object-contain rounded"
                />
              ) : imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title || 'Advertisement'}
                  className="h-full w-auto max-w-full object-contain rounded"
                />
              ) : (
                <div className="text-center">
                  <div className="text-3xl mb-2">🎬</div>
                  <p className="text-white/40 text-sm">
                    {title || `${slot === 'top-banner' ? 'Top' : 'Bottom'} Banner Ad (728x90)`}
                  </p>
                </div>
              )}
            </div>

            <div className="absolute top-1 left-1 px-2 py-0.5 bg-black/30 rounded text-white/50 text-[9px] uppercase tracking-wide">
              Ad
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sidebar Ads (300x250 or 300x600)
  if (slot === 'sidebar-left' || slot === 'sidebar-right') {
    return (
      <div className="w-full max-w-[300px] sticky top-4">
        <div
          className={`
            relative rounded-lg overflow-hidden
            bg-gradient-to-br from-primary-light/20 to-primary/20
            border border-white/10 shadow-lg
            min-h-[250px] h-[250px]
            transition-all duration-500
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            ${clickUrl ? 'cursor-pointer hover:border-secondary/40 hover:shadow-secondary/10 hover:scale-[1.02]' : ''}
          `}
          onClick={handleClick}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative flex flex-col items-center justify-center h-full p-4">
            {videoUrl ? (
              <video
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded"
              />
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt={title || 'Advertisement'}
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-3">🎬</div>
                <p className="text-white/40 text-sm">
                  {title || 'Sidebar Ad (300x250)'}
                </p>
              </div>
            )}
          </div>

          <div className="absolute top-1 left-1 px-2 py-0.5 bg-black/30 rounded text-white/50 text-[9px] uppercase tracking-wide">
            Ad
          </div>
        </div>
      </div>
    );
  }

  // Inline Ad (responsive, within content)
  if (slot === 'inline') {
    return (
      <div className="w-full my-8">
        <div
          className={`
            relative rounded-lg overflow-hidden
            bg-gradient-to-br from-primary-light/20 to-primary/20
            border border-white/10 shadow-lg
            min-h-[200px]
            transition-all duration-500
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
            ${clickUrl ? 'cursor-pointer hover:border-secondary/40 hover:shadow-secondary/10' : ''}
          `}
          onClick={handleClick}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          
          <div className="relative flex items-center justify-center p-6">
            {videoUrl ? (
              <div className="w-full max-w-2xl">
                <video
                  src={videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            ) : imageUrl ? (
              <img
                src={imageUrl}
                alt={title || 'Advertisement'}
                className="max-w-full max-h-[400px] object-contain rounded-lg shadow-xl"
              />
            ) : (
              <div className="text-center py-8">
                <div className="text-5xl mb-3">🎬</div>
                <p className="text-white/40 text-lg">
                  {title || 'Inline Content Ad (Responsive)'}
                </p>
              </div>
            )}
          </div>

          <div className="absolute top-2 left-2 px-2 py-1 bg-black/30 rounded text-white/50 text-[10px] uppercase tracking-wide">
            Advertisement
          </div>
        </div>
      </div>
    );
  }

  return null;
}

