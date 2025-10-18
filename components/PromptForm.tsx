'use client';

import { useState } from 'react';
import type { Translations } from '@/lib/translations';

interface PromptFormProps {
  t: Translations;
  onResult: (result: string) => void;
  onError: (error: string) => void;
  language: 'en' | 'ar';
}

export default function PromptForm({ t, onResult, onError, language }: PromptFormProps) {
  const [topic, setTopic] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!topic.trim()) return;
    
    setIsLoading(true);
    onError('');
    onResult('');

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic.trim(), language }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate prompt');
      }

      onResult(data.prompt);
    } catch (error) {
      console.error('Error:', error);
      onError(t.result.error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <textarea
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder={t.form.placeholder}
          className="input-field min-h-[120px] resize-none"
          disabled={isLoading}
          rows={4}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !topic.trim()}
        className="btn-primary w-full"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {t.form.loading}
          </span>
        ) : (
          t.form.button
        )}
      </button>
    </form>
  );
}

