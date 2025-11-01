'use client';

import Link from 'next/link';

export default function NotFound() {
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
          <div className="text-center space-y-6 mb-12">
            <div className="text-9xl font-bold gradient-text">404</div>
            <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
            <p className="text-xl text-white/70 max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Go Home
              </Link>
              <button onClick={() => window.history.back()} className="btn-secondary">
                Go Back
              </button>
            </div>
          </div>

          {/* Additional Helpful Content */}
          <div className="space-y-8">
            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">What happened?</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                The page you tried to access doesn&apos;t exist on our website. This could happen if:
              </p>
              <ul className="text-white/80 space-y-2 text-left list-disc list-inside">
                <li>The URL was typed incorrectly</li>
                <li>The page has been moved or deleted</li>
                <li>You followed an outdated link</li>
                <li>The page doesn&apos;t exist yet</li>
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">Popular Pages</h2>
              <div className="space-y-3">
                <Link href="/" className="block text-secondary hover:text-secondary-hover transition-colors">
                  → Home - AI Prompt Generator
                </Link>
                <Link href="/privacy" className="block text-secondary hover:text-secondary-hover transition-colors">
                  → Privacy Policy
                </Link>
              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold text-white mb-4">About Perfect Prompt</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Perfect Prompt is a free AI prompt generator that helps you create perfect prompts for GPT, Claude, and Gemini AI models. 
                Generate high-quality prompts instantly in English and Arabic. Built with love in Kuwait 🇰🇼 by KW.HADES - Creative Labs.
              </p>
              <div className="mt-4">
                <Link href="/" className="btn-primary inline-block">
                  Start Creating Prompts
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

