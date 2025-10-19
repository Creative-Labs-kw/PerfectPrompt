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
  howItWorks: {
    title: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
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
    howItWorks: {
      title: 'How It Works - Generate Perfect AI Prompts in 3 Steps',
      steps: [
        {
          number: '1',
          title: 'Enter Your Topic',
          description: 'Type any idea, task, or question you want to create a prompt for. Our AI prompt generator works with any topic.',
        },
        {
          number: '2',
          title: 'AI Processes Your Request',
          description: 'Our advanced prompt engineering algorithm analyzes your input and crafts an optimized prompt for ChatGPT, Claude, or any AI model.',
        },
        {
          number: '3',
          title: 'Copy & Use Instantly',
          description: 'Get your perfect prompt in seconds. Copy it and paste into ChatGPT, Claude, Gemini, or any AI tool for better results.',
        },
      ],
    },
    faq: {
      title: 'Frequently Asked Questions About AI Prompt Generation',
      items: [
        {
          question: 'What is an AI prompt generator?',
          answer: 'An AI prompt generator is a tool that helps you create effective, detailed prompts for AI models like ChatGPT, Claude, and Gemini. Perfect Prompt transforms your simple ideas into optimized prompts that get better AI responses.',
        },
        {
          question: 'Is Perfect Prompt really free?',
          answer: 'Yes! Perfect Prompt is 100% free to use. No signup required, no hidden fees, no limits. We believe everyone should have access to high-quality AI prompt generation tools.',
        },
        {
          question: 'What AI models does it work with?',
          answer: 'Perfect Prompt generates prompts that work with all major AI models including ChatGPT (GPT-3.5, GPT-4), Claude (Anthropic), Google Gemini, Llama, Mistral, and any other text-based AI model.',
        },
        {
          question: 'Can I use it in Arabic?',
          answer: 'Absolutely! Perfect Prompt is fully bilingual. You can generate prompts in both English and Arabic, making it perfect for Middle East users and anyone who needs Arabic AI prompts.',
        },
        {
          question: 'How is this different from just using ChatGPT directly?',
          answer: 'Perfect Prompt uses prompt engineering best practices to structure your requests optimally. It adds context, specifies output format, and includes constraints that help AI models understand exactly what you want, resulting in much better responses.',
        },
        {
          question: 'Do you store my prompts?',
          answer: 'No, we do not permanently store your prompts. Your data is only used temporarily to generate your optimized prompt, then it is discarded. Check our Privacy Policy for more details.',
        },
        {
          question: 'What makes a "perfect" prompt?',
          answer: 'A perfect prompt is clear, specific, includes context, defines the desired output format, and uses language optimized for AI comprehension. Our tool automatically applies these prompt engineering principles to your input.',
        },
        {
          question: 'Can I use this for commercial projects?',
          answer: 'Yes! You can use the generated prompts for any purpose - personal, educational, or commercial. There are no restrictions on how you use Perfect Prompt.',
        },
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
    howItWorks: {
      title: 'كيف يعمل - أنشئ أوامر ذكاء اصطناعي مثالية في 3 خطوات',
      steps: [
        {
          number: '1',
          title: 'أدخل موضوعك',
          description: 'اكتب أي فكرة أو مهمة أو سؤال تريد إنشاء أمر له. يعمل مولد الأوامر الخاص بنا مع أي موضوع.',
        },
        {
          number: '2',
          title: 'الذكاء الاصطناعي يعالج طلبك',
          description: 'خوارزمية هندسة الأوامر المتقدمة لدينا تحلل مدخلاتك وتصيغ أمراً محسّناً لـ ChatGPT أو Claude أو أي نموذج ذكاء اصطناعي.',
        },
        {
          number: '3',
          title: 'انسخ واستخدم فوراً',
          description: 'احصل على أمرك المثالي في ثوانٍ. انسخه والصقه في ChatGPT أو Claude أو Gemini أو أي أداة ذكاء اصطناعي للحصول على نتائج أفضل.',
        },
      ],
    },
    faq: {
      title: 'الأسئلة الشائعة حول توليد أوامر الذكاء الاصطناعي',
      items: [
        {
          question: 'ما هو مولد أوامر الذكاء الاصطناعي؟',
          answer: 'مولد أوامر الذكاء الاصطناعي هو أداة تساعدك على إنشاء أوامر فعالة ومفصلة لنماذج الذكاء الاصطناعي مثل ChatGPT و Claude و Gemini. يحوّل الموجه المثالي أفكارك البسيطة إلى أوامر محسّنة تحصل على استجابات أفضل من الذكاء الاصطناعي.',
        },
        {
          question: 'هل الموجه المثالي مجاني حقاً؟',
          answer: 'نعم! الموجه المثالي مجاني 100% للاستخدام. لا يتطلب تسجيلاً، ولا رسوم خفية، ولا حدود. نؤمن بأن الجميع يجب أن يتمكنوا من الوصول إلى أدوات توليد أوامر الذكاء الاصطناعي عالية الجودة.',
        },
        {
          question: 'ما هي نماذج الذكاء الاصطناعي التي يعمل معها؟',
          answer: 'ينشئ الموجه المثالي أوامر تعمل مع جميع نماذج الذكاء الاصطناعي الرئيسية بما في ذلك ChatGPT (GPT-3.5، GPT-4)، Claude (Anthropic)، Google Gemini، Llama، Mistral، وأي نموذج ذكاء اصطناعي نصي آخر.',
        },
        {
          question: 'هل يمكنني استخدامه بالعربية؟',
          answer: 'بالتأكيد! الموجه المثالي ثنائي اللغة بالكامل. يمكنك إنشاء أوامر بالعربية والإنجليزية، مما يجعله مثالياً لمستخدمي الشرق الأوسط وأي شخص يحتاج إلى أوامر ذكاء اصطناعي بالعربية.',
        },
        {
          question: 'كيف يختلف هذا عن استخدام ChatGPT مباشرة؟',
          answer: 'يستخدم الموجه المثالي أفضل ممارسات هندسة الأوامر لهيكلة طلباتك بشكل مثالي. يضيف السياق، ويحدد تنسيق المخرجات، ويتضمن قيوداً تساعد نماذج الذكاء الاصطناعي على فهم ما تريده بالضبط، مما يؤدي إلى استجابات أفضل بكثير.',
        },
        {
          question: 'هل تخزنون أوامري؟',
          answer: 'لا، نحن لا نخزن أوامرك بشكل دائم. تُستخدم بياناتك مؤقتاً فقط لإنشاء أمرك المحسّن، ثم يتم التخلص منها. راجع سياسة الخصوصية لمزيد من التفاصيل.',
        },
        {
          question: 'ما الذي يجعل الأمر "مثالياً"؟',
          answer: 'الأمر المثالي واضح ومحدد ويتضمن السياق ويحدد تنسيق المخرجات المطلوب ويستخدم لغة محسّنة لفهم الذكاء الاصطناعي. تطبق أداتنا تلقائياً مبادئ هندسة الأوامر هذه على مدخلاتك.',
        },
        {
          question: 'هل يمكنني استخدام هذا للمشاريع التجارية؟',
          answer: 'نعم! يمكنك استخدام الأوامر المُنشأة لأي غرض - شخصي أو تعليمي أو تجاري. لا توجد قيود على كيفية استخدامك للموجه المثالي.',
        },
      ],
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}

