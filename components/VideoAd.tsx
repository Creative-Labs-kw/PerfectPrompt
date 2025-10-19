'use client';

import { useState, useEffect, useRef } from 'react';

interface VideoAdProps {
  videoUrl: string;
  clickUrl?: string;
  position: 'header' | 'sidebar' | 'inline' | 'popup' | 'sticky-bottom';
  autoplay?: boolean;
  muted?: boolean;
  title?: string;
  description?: string;
}

export default function VideoAd({
  videoUrl,
  clickUrl,
  position,
  autoplay = true,
  muted = true,
  title,
  description,
}: VideoAdProps) {
  const [isVisible, setIsVisible] = useState(position !== 'popup');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showCloseButton, setShowCloseButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // For popup ads: show after delay
  useEffect(() => {
    if (position === 'popup') {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000); // Show after 15 seconds

      return () => clearTimeout(timer);
    }
  }, [position]);

  // Show close button after 5 seconds of playing
  useEffect(() => {
    if (isPlaying && (position === 'popup' || position === 'sticky-bottom')) {
      const timer = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isPlaying, position]);

  const handleClose = () => {
    setIsVisible(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoClick = () => {
    if (clickUrl) {
      window.open(clickUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  if (!isVisible) return null;

  // Popup Ad (Full-screen overlay)
  if (position === 'popup') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
        <div className="relative max-w-2xl w-full mx-4">
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
              aria-label="Close ad"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              <span className="text-sm">Close (5s)</span>
            </button>
          )}
          
          <div className="card p-0 overflow-hidden">
            {title && (
              <div className="p-4 bg-gradient-to-r from-secondary to-secondary-hover">
                <h3 className="text-xl font-bold text-white">{title}</h3>
                {description && <p className="text-white/90 text-sm mt-1">{description}</p>}
              </div>
            )}
            
            <div className="relative group cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay={autoplay}
                muted={muted}
                loop
                playsInline
                className="w-full"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />
              
              {/* Play/Pause overlay */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={handlePlayPause}
                  className="bg-white/90 hover:bg-white rounded-full p-4 transition-all"
                >
                  {isPlaying ? (
                    <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
              
              {clickUrl && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm">Click to learn more →</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sticky Bottom Ad
  if (position === 'sticky-bottom') {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary-dark border-t border-white/10 shadow-2xl animate-slide-up">
        <div className="container-custom py-2">
          <div className="flex items-center gap-4">
            <div className="flex-1 cursor-pointer" onClick={handleVideoClick}>
              <video
                ref={videoRef}
                src={videoUrl}
                autoPlay={autoplay}
                muted={muted}
                loop
                playsInline
                className="w-full max-h-24 rounded-lg"
                onPlay={() => setIsPlaying(true)}
              />
            </div>
            
            <div className="flex-1 hidden md:block">
              {title && <h4 className="text-white font-semibold">{title}</h4>}
              {description && <p className="text-white/70 text-sm">{description}</p>}
            </div>
            
            {showCloseButton && (
              <button
                onClick={handleClose}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close ad"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Header Banner Ad
  if (position === 'header') {
    return (
      <div className="w-full bg-gradient-to-r from-secondary/20 to-primary-light/20 border-b border-white/10">
        <div className="container-custom py-3">
          <div className="flex items-center gap-4 cursor-pointer" onClick={handleVideoClick}>
            <video
              ref={videoRef}
              src={videoUrl}
              autoPlay={autoplay}
              muted={muted}
              loop
              playsInline
              className="w-32 h-20 rounded-lg object-cover"
              onPlay={() => setIsPlaying(true)}
            />
            
            <div className="flex-1">
              {title && <h4 className="text-white font-semibold">{title}</h4>}
              {description && <p className="text-white/70 text-sm">{description}</p>}
            </div>
            
            {clickUrl && (
              <button className="btn-secondary hidden md:block">
                Learn More →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Sidebar Ad
  if (position === 'sidebar') {
    return (
      <div className="card p-4 sticky top-4">
        {title && <h4 className="text-white font-semibold mb-2">{title}</h4>}
        
        <div className="cursor-pointer" onClick={handleVideoClick}>
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay={autoplay}
            muted={muted}
            loop
            playsInline
            className="w-full rounded-lg"
            onPlay={() => setIsPlaying(true)}
          />
        </div>
        
        {description && <p className="text-white/70 text-sm mt-2">{description}</p>}
        
        {clickUrl && (
          <button className="btn-primary w-full mt-3" onClick={handleVideoClick}>
            Learn More
          </button>
        )}
      </div>
    );
  }

  // Inline Ad (within content)
  return (
    <div className="w-full my-8">
      <div className="card overflow-hidden">
        {title && (
          <div className="p-4 border-b border-white/10">
            <h4 className="text-white font-semibold">{title}</h4>
            {description && <p className="text-white/70 text-sm mt-1">{description}</p>}
          </div>
        )}
        
        <div className="cursor-pointer" onClick={handleVideoClick}>
          <video
            ref={videoRef}
            src={videoUrl}
            autoPlay={autoplay}
            muted={muted}
            loop
            playsInline
            className="w-full"
            onPlay={() => setIsPlaying(true)}
          />
        </div>
        
        {clickUrl && (
          <div className="p-4 bg-gradient-to-r from-secondary/20 to-primary-light/20">
            <button className="btn-primary w-full" onClick={handleVideoClick}>
              Learn More →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

