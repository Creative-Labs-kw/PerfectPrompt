import type { Metadata } from 'next';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  authors: [{ name: 'KW.HADES', url: siteUrl }],
  creator: 'KW.HADES',
  publisher: 'KW.HADES - Creative Labs',
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
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: 'Perfect Prompt - AI Prompt Generator',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: '⚡ Perfect Prompt | AI Prompt Generator',
    description: 'Generate perfect AI prompts instantly in English & Arabic. Free AI prompt generator for GPT, Claude & Gemini.',
    images: [`${siteUrl}/logo.png`],
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
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
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
    '@type': 'Person',
    name: 'KW.HADES',
    email: 'darkside944@gmail.com',
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
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.openai.com" />
        
        {/* Google AdSense Verification Meta Tag */}
        <meta name="google-adsense-account" content="ca-pub-5743354209147744" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />

        {/* Google AdSense script is now included only on pages with sufficient content */}
        {/* See components/AdSenseScript.tsx - included in page.tsx and privacy/page.tsx */}
      </head>
      <body>
        <GoogleAnalytics />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}

