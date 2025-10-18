import OpenAI from 'openai';

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy-key-for-build',
});

export async function generatePrompt(topic: string, language: 'en' | 'ar'): Promise<string> {
  // Check for API key at runtime
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not configured');
  }

  const systemPrompt = language === 'en' 
    ? `You are an expert AI prompt engineer. Your job is to transform simple user topics into detailed, effective prompts that will get the best results from AI models like GPT, Claude, and Gemini. 
    
Create a well-structured, detailed prompt that:
- Clearly defines the task or goal
- Specifies the desired output format
- Includes relevant context and constraints
- Uses clear, actionable language
- Is optimized for AI comprehension

Return ONLY the generated prompt, nothing else.`
    : `أنت خبير في صياغة أوامر الذكاء الاصطناعي. مهمتك هي تحويل المواضيع البسيطة التي يدخلها المستخدم إلى أوامر مفصلة وفعالة تحقق أفضل النتائج من نماذج الذكاء الاصطناعي مثل GPT و Claude و Gemini.
    
أنشئ أمراً منظماً ومفصلاً:
- يحدد المهمة أو الهدف بوضوح
- يحدد تنسيق المخرجات المطلوبة
- يتضمن السياق والقيود ذات الصلة
- يستخدم لغة واضحة وقابلة للتنفيذ
- محسّن لفهم الذكاء الاصطناعي

أرجع الأمر المُنشأ فقط، لا شيء آخر.`;

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: topic,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return completion.choices[0]?.message?.content || 'Failed to generate prompt';
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error('Failed to generate prompt. Please try again.');
  }
}

