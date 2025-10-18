import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-dark">
      <div className="text-center space-y-6 px-4">
        <div className="text-9xl font-bold gradient-text">404</div>
        <h1 className="text-4xl font-bold text-white">Page Not Found</h1>
        <p className="text-xl text-white/70 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-secondary">
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

