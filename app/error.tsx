'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-dark">
      <div className="card max-w-md mx-4 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          ⚠️ Something went wrong
        </h2>
        <p className="text-white/70 mb-6">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
        <button onClick={reset} className="btn-primary">
          Try Again
        </button>
      </div>
    </div>
  );
}

