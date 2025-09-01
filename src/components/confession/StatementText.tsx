import React from 'react';

interface StatementTextProps {
  title: string;
  items: string[];
}

/**
 * StatementText komponens a hitvallási nyilatkozat szövegének megjelenítésére
 * Letisztult megjelenéssel, pipa ikonokkal, beágyazott kivitelben
 */
export function StatementText({ title, items }: StatementTextProps) {
  return (
    <div className="space-y-4 bg-background/80 p-4 rounded-md border border-muted">
      <p className="text-center text-foreground leading-relaxed font-medium mb-4 text-sm">
        {title}
      </p>

      <ol className="space-y-2 pl-5 text-sm">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground relative">
            {/* Pipa ikon a lista elem előtt */}
            <span className="absolute -left-5 top-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary/60"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StatementText;
