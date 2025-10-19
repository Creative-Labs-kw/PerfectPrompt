'use client';

import { useState } from 'react';
import type { Translations } from '@/lib/translations';

interface PromptResultProps {
  result: string;
  t: Translations;
}

export default function PromptResult({ result, t }: PromptResultProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  if (!result) return null;

  return (
    <div className="w-full space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">{t.result.title}</h3>
        <button
          onClick={handleCopy}
          className={`btn-secondary text-sm transition-all ${copied ? 'bg-green-600 hover:bg-green-700' : ''}`}
          aria-label="Copy to clipboard"
        >
          {copied ? (
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {t.result.copied}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {t.result.copy}
            </span>
          )}
        </button>
      </div>
      <div className="card">
        <pre className="whitespace-pre-wrap text-white/90 font-sans text-sm leading-relaxed">
          {result}
        </pre>
      </div>
    </div>
  );
}

