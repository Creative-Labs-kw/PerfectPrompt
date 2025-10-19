// Using GROQ API - 100% FREE & SUPER FAST!
// Model: llama-3.1-70b-versatile (Best free model available)
// Get free API key: https://console.groq.com/keys

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function generatePrompt(topic: string, language: 'en' | 'ar'): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  
  if (!apiKey) {
    throw new Error('GROQ_API_KEY not configured. Get free key at: https://console.groq.com/keys');
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
    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_tokens: 500,
        top_p: 0.95,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Groq API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      throw new Error('Invalid response format from Groq API');
    }

    const generatedText = data.choices[0].message.content.trim();
    
    if (!generatedText) {
      throw new Error('No text generated');
    }

    return generatedText;
  } catch (error) {
    console.error('Groq API error:', error);
    throw new Error(`Failed to generate prompt: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

