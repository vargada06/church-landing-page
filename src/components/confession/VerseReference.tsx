import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

type VerseReferenceProps = {
  id: string;
  verses: string[];
  isActive?: boolean;
};

const VerseReference: React.FC<VerseReferenceProps> = ({ id, verses, isActive = false }) => {
  const [showVerses, setShowVerses] = useState(isActive);

  useEffect(() => {
    setShowVerses(isActive);
  }, [isActive]);

  return (
    <div className="text-sm">
      <Button
        onClick={() => setShowVerses(!showVerses)}
        variant="ghost"
        size="sm"
        className="h-auto p-0 font-medium text-primary flex items-center hover:bg-transparent hover:underline"
      >
        <sup className="text-primary font-medium">{id}</sup>
        <ChevronDown
          className={`w-4 h-4 ml-1 transition-transform ${showVerses ? 'rotate-180' : ''}`}
        />
      </Button>

      {showVerses && (
        <div className="pl-4 py-2 text-muted-foreground">
          {verses.map((verse, index) => (
            <p key={index} className="mb-1">
              {verse}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default VerseReference;
