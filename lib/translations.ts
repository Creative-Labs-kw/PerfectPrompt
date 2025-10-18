export type Language = 'en' | 'ar';

export interface Translations {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  header: {
    title: string;
    subtitle: string;
  };
  hero: {
    h1: string;
    h2: string;
    description: string;
  };
  form: {
    placeholder: string;
    button: string;
    loading: string;
  };
  result: {
    title: string;
    copy: string;
    copied: string;
    error: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    madeIn: string;
    links: {
      privacy: string;
      terms: string;
      contact: string;
    };
  };
  examples: {
    title: string;
    items: string[];
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    meta: {
      title: '⚡ Perfect Prompt | AI Prompt Generator for Creators',
      description: 'Generate perfect AI prompts instantly in English & Arabic. Kuwait-built free AI prompt generator for GPT, Claude & Gemini.',
      keywords: 'AI Prompt Generator, Best Prompts, Kuwait AI Tools, Free Prompt Builder, GPT Prompts, Claude Prompts, Gemini AI',
    },
    header: {
      title: '⚡ Perfect Prompt',
      subtitle: 'AI Prompt Generator',
    },
    hero: {
      h1: 'Generate AI-Ready Prompts Instantly',
      h2: 'Perfect Prompt — Made in Kuwait 🇰🇼',
      description: 'Transform your simple ideas into powerful, detailed AI prompts. Get better results from GPT, Claude, Gemini, and any AI model.',
    },
    form: {
      placeholder: 'Enter your topic or idea... (e.g., "Write a blog post about AI")',
      button: 'Generate Perfect Prompt',
      loading: 'Generating...',
    },
    result: {
      title: 'Your Perfect Prompt',
      copy: 'Copy to Clipboard',
      copied: 'Copied!',
      error: 'Failed to generate prompt. Please try again.',
    },
    features: {
      title: 'Why Perfect Prompt?',
      items: [
        {
          title: '🚀 Instant Results',
          description: 'Get professional AI prompts in seconds',
        },
        {
          title: '🌍 Bilingual Support',
          description: 'Works perfectly in English and Arabic',
        },
        {
          title: '🎯 Optimized Output',
          description: 'Prompts engineered for maximum AI performance',
        },
        {
          title: '💡 Free Forever',
          description: 'No signup, no limits, completely free',
        },
      ],
    },
    footer: {
      madeIn: '© 2025 Perfect Prompt | Built in Kuwait 🇰🇼',
      links: {
        privacy: 'Privacy',
        terms: 'Terms',
        contact: 'Contact',
      },
    },
    examples: {
      title: 'Try These Examples',
      items: [
        'Write a marketing email for a new product',
        'Create a study plan for learning Python',
        'Generate social media content ideas',
        'Explain quantum computing to a 10-year-old',
      ],
    },
  },
  ar: {
    meta: {
      title: '⚡ الموجه المثالي | مولد أوامر الذكاء الاصطناعي',
      description: 'أنشئ أوامر ذكاء اصطناعي مثالية فوراً بالعربية والإنجليزية. مولد أوامر مجاني من الكويت لـ GPT و Claude و Gemini.',
      keywords: 'مولد أوامر الذكاء الاصطناعي, أفضل الأوامر, أدوات الذكاء الاصطناعي الكويت, منشئ الأوامر المجاني, أوامر GPT, أوامر كلود',
    },
    header: {
      title: '⚡ الموجه المثالي',
      subtitle: 'مولد أوامر الذكاء الاصطناعي',
    },
    hero: {
      h1: 'أنشئ أوامر ذكاء اصطناعي جاهزة فوراً',
      h2: 'الموجه المثالي — صنع في الكويت 🇰🇼',
      description: 'حوّل أفكارك البسيطة إلى أوامر ذكاء اصطناعي قوية ومفصلة. احصل على نتائج أفضل من GPT و Claude و Gemini وأي نموذج ذكاء اصطناعي.',
    },
    form: {
      placeholder: 'أدخل موضوعك أو فكرتك... (مثال: "اكتب مقالة عن الذكاء الاصطناعي")',
      button: 'إنشاء الأمر المثالي',
      loading: 'جاري الإنشاء...',
    },
    result: {
      title: 'أمرك المثالي',
      copy: 'نسخ إلى الحافظة',
      copied: 'تم النسخ!',
      error: 'فشل إنشاء الأمر. يرجى المحاولة مرة أخرى.',
    },
    features: {
      title: 'لماذا الموجه المثالي؟',
      items: [
        {
          title: '🚀 نتائج فورية',
          description: 'احصل على أوامر احترافية في ثوانٍ',
        },
        {
          title: '🌍 دعم ثنائي اللغة',
          description: 'يعمل بشكل مثالي بالعربية والإنجليزية',
        },
        {
          title: '🎯 مخرجات محسّنة',
          description: 'أوامر مهندسة لأقصى أداء للذكاء الاصطناعي',
        },
        {
          title: '💡 مجاني للأبد',
          description: 'بدون تسجيل، بدون حدود، مجاني تماماً',
        },
      ],
    },
    footer: {
      madeIn: '© 2025 الموجه المثالي | صنع في الكويت 🇰🇼',
      links: {
        privacy: 'الخصوصية',
        terms: 'الشروط',
        contact: 'اتصل بنا',
      },
    },
    examples: {
      title: 'جرب هذه الأمثلة',
      items: [
        'اكتب بريد إلكتروني تسويقي لمنتج جديد',
        'أنشئ خطة دراسية لتعلم بايثون',
        'اقترح أفكار محتوى لوسائل التواصل الاجتماعي',
        'اشرح الحوسبة الكمومية لطفل عمره 10 سنوات',
      ],
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

