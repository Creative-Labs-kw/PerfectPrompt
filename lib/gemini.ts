// Using Hugging Face Inference API - 100% FREE, no API key needed!
// Model: mistralai/Mistral-7B-Instruct-v0.2 (fast & reliable)

const HF_API_URL = 'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2';

export async function generatePrompt(topic: string, language: 'en' | 'ar'): Promise<string> {
  const systemPrompt = language === 'en' 
    ? `You are an expert AI prompt engineer. Transform this topic into a detailed, effective prompt for AI models.

Create a well-structured prompt that:
- Clearly defines the task or goal
- Specifies the desired output format
- Includes relevant context and constraints
- Uses clear, actionable language

Return ONLY the generated prompt, nothing else.

Topic: ${topic}

Generated Prompt:`
    : `أنت خبير في صياغة أوامر الذكاء الاصطناعي. حول هذا الموضوع إلى أمر مفصل وفعال.

أنشئ أمراً منظماً:
- يحدد المهمة أو الهدف بوضوح
- يحدد تنسيق المخرجات المطلوبة
- يتضمن السياق والقيود ذات الصلة
- يستخدم لغة واضحة وقابلة للتنفيذ

أرجع الأمر المُنشأ فقط، لا شيء آخر.

الموضوع: ${topic}

الأمر المُنشأ:`;

  try {
    const response = await fetch(HF_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: systemPrompt,
        parameters: {
          max_new_tokens: 500,
          temperature: 0.7,
          top_p: 0.95,
          return_full_text: false,
        },
      }),
    });

    if (!response.ok) {
      // If model is loading, wait and retry
      if (response.status === 503) {
        const data = await response.json();
        if (data.error && data.error.includes('loading')) {
          // Model is loading, wait 20 seconds and retry
          await new Promise(resolve => setTimeout(resolve, 20000));
          return generatePrompt(topic, language); // Retry
        }
      }
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Handle different response formats
    let generatedText = '';
    if (Array.isArray(data) && data.length > 0) {
      generatedText = data[0].generated_text || '';
    } else if (typeof data === 'string') {
      generatedText = data;
    } else if (data.generated_text) {
      generatedText = data.generated_text;
    }

    // Clean up the response
    generatedText = generatedText.trim();
    
    if (!generatedText) {
      throw new Error('No text generated');
    }

    return generatedText;
  } catch (error) {
    console.error('Hugging Face API error:', error);
    throw new Error('Failed to generate prompt. Please try again.');
  }
}

