'use client';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-dark">
      <div className="text-center space-y-4">
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-white/70 text-lg">Loading Perfect Prompt...</p>
      </div>
    </div>
  );
}

