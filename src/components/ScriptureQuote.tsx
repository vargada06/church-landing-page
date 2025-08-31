import React from 'react';
import { cn } from "@/lib/utils";

interface ScriptureQuoteProps {
  text: string;
  reference: string;
  className?: string;
  withCornerAccents?: boolean;
  compact?: boolean;
}

export function ScriptureQuote({ 
  text, 
  reference, 
  className, 
  withCornerAccents = false,
  compact = false 
}: ScriptureQuoteProps) {
  return (
    <blockquote className={cn(
      "relative border p-6 bg-muted/20 rounded-lg",
      compact && "p-4",
      className
    )}>
      <p className={cn(
        "italic",
        compact ? "text-sm" : "text-base md:text-lg"
      )}>
        {!text.startsWith('"') && !text.startsWith('„') ? '"' : ''}{text}{!text.endsWith('"') && !text.endsWith('"') ? '"' : ''}
      </p>
      <footer className="text-sm text-muted-foreground mt-2 font-medium">
        — {reference}
      </footer>
      
      {withCornerAccents && (
        <>
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/30 rounded-full"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary/30 rounded-full"></div>
        </>
      )}
    </blockquote>
  );
}

export default ScriptureQuote;
