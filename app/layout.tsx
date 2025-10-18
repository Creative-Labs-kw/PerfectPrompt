import type { Metadata } from 'next';
import Script from 'next/script';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import '@/styles/globals.css';

const siteUrl = process.env.SITE_URL || 'https://perfectprompt.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '⚡ Perfect Prompt | AI Prompt Generator for Creators',
    template: '%s | Perfect Prompt',
  },
  description: 'Generate perfect AI prompts instantly in English & Arabic. Kuwait-built free AI prompt generator for GPT, Claude & Gemini.',
  keywords: [
    'AI Prompt Generator',
    'Best Prompts',
    'Kuwait AI Tools',
    'Free Prompt Builder',
    'GPT Prompts',
    'Claude Prompts',
    'Gemini AI',
    'Perfect Prompt',
    'AI Tools Kuwait',
    'Prompt Engineering',
  ],
  authors: [{ name: 'Perfect Prompt Team', url: siteUrl }],
  creator: 'Perfect Prompt',
  publisher: 'Perfect Prompt',
  verification: {
    google: 'dMRwN9KlpS1CPIuvUz9COZL7w78PMTN7Zyo1jZz6QGQ',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_KW'],
    url: siteUrl,
    siteName: 'Perfect Prompt',
    title: '⚡ Perfect Prompt | AI Prompt Generator for Creators',
    description: 'Generate perfect AI prompts instantly in English & Arabic. Kuwait-built free AI prompt generator for GPT, Claude & Gemini.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Perfect Prompt - AI Prompt Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '⚡ Perfect Prompt | AI Prompt Generator',
    description: 'Generate perfect AI prompts instantly in English & Arabic. Free AI prompt generator for GPT, Claude & Gemini.',
    images: [`${siteUrl}/og-image.png`],
    creator: '@perfectprompt',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: siteUrl,
    languages: {
      'en-US': siteUrl,
      'ar-KW': `${siteUrl}/ar`,
    },
  },
};

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Perfect Prompt',
  alternateName: 'الموجه المثالي',
  description: 'AI Prompt Generator for creating perfect prompts for GPT, Claude, and Gemini',
  url: siteUrl,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  author: {
    '@type': 'Organization',
    name: 'Perfect Prompt',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Kuwait',
    },
  },
  countryOfOrigin: {
    '@type': 'Country',
    name: 'Kuwait',
  },
  inLanguage: ['en', 'ar'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '1250',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.openai.com" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Google AdSense */}
        {adsenseClient && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

