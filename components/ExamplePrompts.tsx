'use client';

interface ExamplePromptsProps {
  examples: string[];
  title: string;
}

export default function ExamplePrompts({ examples, title }: ExamplePromptsProps) {
  const handleExampleClick = (example: string) => {
    const textarea = document.querySelector('textarea');
    if (textarea) {
      textarea.value = example;
      textarea.dispatchEvent(new Event('input', { bubbles: true }));
    }
  };

  return (
    <section className="max-w-3xl mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-white text-center">
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => handleExampleClick(example)}
            className="card hover:bg-white/10 transition-all duration-200 text-left group"
          >
            <p className="text-white/80 group-hover:text-white text-sm">
              💡 {example}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

