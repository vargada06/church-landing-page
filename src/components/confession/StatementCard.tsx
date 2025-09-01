import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatementCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'cooperation' | 'community' | 'leadership';
}

/**
 * StatementCard komponens a hitvallási nyilatkozatok megjelenítésére
 * Letisztult, egyszerű megjelenéssel
 */
export function StatementCard({ children, className, variant = 'cooperation' }: StatementCardProps) {
  // Variant-függő színek és stílusok
  const variantStyles = {
    cooperation: "border-primary/20 bg-primary/5",
    community: "border-secondary/20 bg-secondary/5",
    leadership: "border-accent/20 bg-accent/5",
  };
  
  return (
    <Card 
      className={cn(
        "mb-8 transition-all duration-300",
        "border-l-4",
        variantStyles[variant],
        className
      )}
    >
      <CardContent className="pt-6 pb-4">
        <div className="prose dark:prose-invert mx-auto max-w-none">
          <div className="p-6 relative">
            {/* Egyszerű vékony vonal a tetején */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-primary/10"></div>
            
            {children}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
