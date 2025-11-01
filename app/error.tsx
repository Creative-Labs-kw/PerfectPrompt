'use client';

import { useEffect } from 'react';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md bg-white/5">
        <div className="container-custom py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-secondary transition-colors">
            ⚡ Perfect Prompt
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-custom py-12">
        <div className="max-w-2xl mx-auto">
          <div className="card space-y-6 text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Something went wrong
            </h1>
            <div className="space-y-4 text-white/80">
              <p className="text-lg">
                {error.message || 'An unexpected error occurred while processing your request.'}
              </p>
              <p className="text-sm text-white/60">
                We apologize for the inconvenience. This error has been logged and we'll investigate the issue.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button onClick={reset} className="btn-primary">
                Try Again
              </button>
              <Link href="/" className="btn-secondary">
                Return to Home
              </Link>
            </div>
          </div>

          {/* Additional Helpful Content */}
          <div className="mt-12 space-y-8">
            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">What you can do:</h2>
              <ul className="text-white/80 space-y-2 text-left list-disc list-inside">
                <li>Refresh the page and try again</li>
                <li>Check your internet connection</li>
                <li>Clear your browser cache and cookies</li>
                <li>Try using a different browser</li>
                <li>Contact us if the problem persists</li>
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">About Perfect Prompt</h2>
              <p className="text-white/80 leading-relaxed">
                Perfect Prompt is a free AI prompt generator that helps you create perfect prompts for GPT, Claude, and Gemini AI models. 
                Generate high-quality prompts instantly in English and Arabic. Built with love in Kuwait 🇰🇼 by KW.HADES - Creative Labs.
              </p>
              <div className="mt-4">
                <Link href="/" className="btn-primary inline-block">
                  Go to Home Page
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-md bg-white/5 mt-20">
        <div className="container-custom py-6">
          <div className="text-center space-y-3">
            <p className="text-white/70 text-sm">
              Made with ❤️ in Kuwait by KW.HADES - Creative Labs
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/40">•</span>
              <a 
                href="mailto:darkside944@gmail.com" 
                className="text-secondary hover:text-secondary-hover transition-colors font-medium"
              >
                darkside944@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

