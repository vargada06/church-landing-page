import React from 'react';
import { Badge } from '@/components/ui/badge';

type TextPart = {
  text: string;
  refId: string | null;
};

type ReferenceTextProps = {
  parts: TextPart[];
  onReferenceClick: (refId: string) => void;
};

const ReferenceText: React.FC<ReferenceTextProps> = ({ parts, onReferenceClick }) => {
  return (
    <>
      {parts.map((part, index) =>
        part.refId ? (
          <span key={index}>
            {part.text}
            <sup className="ml-0.5">
              <Badge
                variant="secondary"
                className="cursor-pointer hover:bg-secondary/80 text-xs font-bold px-1.5 py-0.5 rounded-full"
                onClick={() => onReferenceClick(part.refId as string)}
              >
                {part.refId}
              </Badge>
            </sup>
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
};

export default ReferenceText;
