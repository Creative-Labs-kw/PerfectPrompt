import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini client
const apiKey = process.env.GEMINI_API_KEY || 'dummy-key-for-build';
const genAI = new GoogleGenerativeAI(apiKey);

export async function generatePrompt(topic: string, language: 'en' | 'ar'): Promise<string> {
  // Check for API key at runtime
  if (!process.env.GEMINI_API_KEY) {
    throw new Error('GEMINI_API_KEY environment variable is not configured');
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
    // Use Gemini Pro model
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `${systemPrompt}\n\nUser Topic: ${topic}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text || 'Failed to generate prompt';
  } catch (error) {
    console.error('Gemini API error:', error);
    throw new Error('Failed to generate prompt. Please try again.');
  }
}

