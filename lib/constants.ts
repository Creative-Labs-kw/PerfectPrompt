/**
 * Application constants
 */

export const APP_NAME = 'Perfect Prompt';
export const APP_NAME_AR = 'الموجه المثالي';
export const APP_VERSION = '1.0.0';

export const SITE_URL = process.env.SITE_URL || 'https://perfectprompt.vercel.app';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Social Links
export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/perfectprompt',
  github: 'https://github.com/yourusername/perfect-prompt',
  linkedin: 'https://linkedin.com/company/perfectprompt',
};

// Contact
export const CONTACT_EMAIL = 'contact@perfectprompt.com';
export const SUPPORT_EMAIL = 'support@perfectprompt.com';

// SEO
export const DEFAULT_TITLE = '⚡ Perfect Prompt | AI Prompt Generator for Creators';
export const DEFAULT_DESCRIPTION = 'Generate perfect AI prompts instantly in English & Arabic. Kuwait-built free AI prompt generator for GPT, Claude & Gemini.';

// Google Gemini
export const GEMINI_MODEL = 'gemini-pro';
export const GEMINI_MAX_TOKENS = 500;

// Limits
export const MAX_TOPIC_LENGTH = 500;
export const MIN_TOPIC_LENGTH = 3;

// Languages
export const SUPPORTED_LANGUAGES = ['en', 'ar'] as const;
export const DEFAULT_LANGUAGE = 'en';

// Analytics
export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
export const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// Feature Flags
export const FEATURES = {
  ADS_ENABLED: Boolean(process.env.NEXT_PUBLIC_ADSENSE_CLIENT),
  ANALYTICS_ENABLED: Boolean(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID),
  MAINTENANCE_MODE: false,
};

// Local Storage Keys
export const STORAGE_KEYS = {
  LANGUAGE: 'preferred-language',
  THEME: 'preferred-theme',
  HISTORY: 'prompt-history',
  FAVORITES: 'favorite-prompts',
};

// API Routes
export const API_ROUTES = {
  GENERATE: '/api/generate',
};

// Cache Duration (in seconds)
export const CACHE_DURATION = {
  PAGE: 3600, // 1 hour
  API: 300, // 5 minutes
  STATIC: 86400, // 24 hours
};

