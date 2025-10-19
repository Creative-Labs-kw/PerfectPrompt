// Using OpenAI API - Most Reliable & High Quality!
// Model: gpt-3.5-turbo (Fast & Affordable)
// Get API key from: https://platform.openai.com/api-keys

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

export async function generatePrompt(topic: string, language: 'en' | 'ar'): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY not configured');
  }

  const systemMessage = language === 'en' 
    ? `You are an expert AI prompt engineer. Transform user topics into detailed, effective prompts that get the best results from AI models like GPT, Claude, and Gemini.

Create a well-structured prompt that:
- Clearly defines the task or goal
- Specifies the desired output format
- Includes relevant context and constraints
- Uses clear, actionable language
- Is optimized for AI comprehension

Return ONLY the generated prompt, nothing else. No explanations or preamble.`
    : `أنت خبير في صياغة أوامر الذكاء الاصطناعي. حول مواضيع المستخدم إلى أوامر مفصلة وفعالة للحصول على أفضل النتائج من نماذج الذكاء الاصطناعي مثل GPT و Claude و Gemini.

أنشئ أمراً منظماً ومفصلاً:
- يحدد المهمة أو الهدف بوضوح
- يحدد تنسيق المخرجات المطلوبة
- يتضمن السياق والقيود ذات الصلة
- يستخدم لغة واضحة وقابلة للتنفيذ
- محسّن لفهم الذكاء الاصطناعي

أرجع الأمر المُنشأ فقط، بدون أي شروحات أو مقدمات.`;

  const userMessage = language === 'en'
    ? `Transform this topic into a high-quality AI prompt: "${topic}"`
    : `حول هذا الموضوع إلى أمر ذكاء اصطناعي عالي الجودة: "${topic}"`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemMessage },
        { role: 'user', content: userMessage }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const generatedText = completion.choices[0]?.message?.content?.trim();
    
    if (!generatedText) {
      throw new Error('No text generated from OpenAI');
    }

    return generatedText;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`Failed to generate prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

