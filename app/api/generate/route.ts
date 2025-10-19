import { NextRequest, NextResponse } from 'next/server';
import { generatePrompt } from '@/lib/gemini';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { topic, language } = body;

    if (!topic || typeof topic !== 'string') {
      return NextResponse.json(
        { error: 'Topic is required and must be a string' },
        { status: 400 }
      );
    }

    if (!language || !['en', 'ar'].includes(language)) {
      return NextResponse.json(
        { error: 'Language must be either "en" or "ar"' },
        { status: 400 }
      );
    }

    const prompt = await generatePrompt(topic.trim(), language);

    return NextResponse.json({ prompt });
  } catch (error: any) {
    console.error('API Error:', error);
    const errorMessage = error?.message || 'Failed to generate prompt. Please try again.';
    return NextResponse.json(
      { error: errorMessage, details: error?.toString() },
      { status: 500 }
    );
  }
}

