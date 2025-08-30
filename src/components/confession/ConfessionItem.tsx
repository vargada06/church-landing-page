import { useState } from 'react';
import ReferenceText from './ReferenceText';

type TextPart = {
  text: string;
  refId: string | null;
};

type ConfessionItemProps = {
  id: string;
  question: string;
  answerParts: TextPart[];
  references: { id: string; verses: string[] }[];
};

const ConfessionItem: React.FC<ConfessionItemProps> = ({
  id,
  question,
  answerParts,
  references,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeReference, setActiveReference] = useState<string | null>(null);

  const handleReferenceClick = (refId: string) => {
    setActiveReference(activeReference === refId ? null : refId);
  };

  const currentReference = references.find((ref) => ref.id === activeReference);

  return (
    <div className="border-b border-reformalt-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full px-6 py-4 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium text-reformalt-primary flex">
          <span className="text-reformalt-accent mr-3 font-semibold">{id}.</span> {question}
        </h3>
        <svg
          className={`w-6 h-6 text-reformalt-primary transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-reformalt-secondary/10">
          <p className="text-lg text-reformalt-primary">
            <ReferenceText parts={answerParts} onReferenceClick={handleReferenceClick} />
          </p>

          {activeReference && currentReference && (
            <div className="mt-4 pt-3 border-t border-reformalt-border/30 text-sm">
              <div className="p-3 bg-white/70 rounded-lg">
                <p>
                  <sup className="text-reformalt-accent font-bold">{activeReference}</sup>{' '}
                  {currentReference.verses.join(', ')}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConfessionItem;
