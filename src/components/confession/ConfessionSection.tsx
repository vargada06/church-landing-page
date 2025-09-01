import React, { useState } from 'react';
import { confessionData } from './confessionData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Használjuk a meglévő komponenseket
import VerseReference from './VerseReference';
import ReferenceText from './ReferenceText';
import StatementText from './StatementText';

const ConfessionSection: React.FC = () => {
  const [activeReferenceId, setActiveReferenceId] = useState<string | null>(null);
  const [expandedStatements, setExpandedStatements] = useState<{ [key: string]: boolean }>({});

  const handleReferenceClick = (refId: string) => {
    setActiveReferenceId(refId === activeReferenceId ? null : refId);
  };

  const toggleStatement = (categoryTitle: string) => {
    setExpandedStatements((prev) => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle],
    }));
  };

  return (
    <section className="w-full py-16 bg-muted/50" id="hitvallas">
      <div className="container px-4 md:px-6 mx-auto flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hitvallásunk</h2>

          {confessionData.map((category, index) => (
            <Card key={category.title} className="mb-8">
              <CardHeader className="text-center">
                <CardTitle className="text-xl md:text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div>
                            <ReferenceText
                              parts={item.answerParts}
                              onReferenceClick={handleReferenceClick}
                            />
                          </div>
                          {item.references &&
                            item.references.length > 0 &&
                            activeReferenceId !== null && (
                              <div className="mt-6 pt-4 border-t border-border/50">
                                {item.references
                                  .filter((ref) => ref.id === activeReferenceId)
                                  .map((ref) => (
                                    <div key={ref.id} className="mb-3">
                                      <VerseReference
                                        id={ref.id}
                                        verses={ref.verses}
                                        isActive={true}
                                      />
                                    </div>
                                  ))}
                              </div>
                            )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>

              {/* Nyilatkozat gomb és kibontható tartalom */}
              <CardFooter className="flex flex-col px-6 py-3 border-t border-border/30 bg-muted/20">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground flex items-center gap-2 text-sm hover:text-primary transition-colors w-full justify-between"
                  onClick={() => toggleStatement(category.title)}
                >
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary/60"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 16H7" />
                      <path d="m13 16-2-2v-3" />
                    </svg>
                    <span>Elköteleződési nyilatkozat</span>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform ${expandedStatements[category.title] ? 'rotate-180' : ''}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </Button>

                <div
                  className={`w-full overflow-hidden transition-all duration-300 ${
                    expandedStatements[category.title]
                      ? 'max-h-96 opacity-100 mt-4'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {index === 0 && (
                    <StatementText
                      title="A Bibliai Örömhír Közösséggel együttműködő személy"
                      items={[
                        'képviseli az Együttműködési Hitvallásban megfogalmazottakat;',
                        'tiszteletben tartja a Közösségi Hitvallásban megfogalmazottakat;',
                        'tudomásul veszi a Vezetőségi Hitvallásban megfogalmazottakat.',
                      ]}
                    />
                  )}

                  {index === 1 && (
                    <StatementText
                      title="A Bibliai Örömhír Közösséghez tartozó személy"
                      items={[
                        'képviseli az Együttműködési Hitvallásban és a Közösségi Hitvallásban megfogalmazottakat;',
                        'tiszteletben tartja a Vezetőségi Hitvallásban megfogalmazottakat.',
                      ]}
                    />
                  )}

                  {index === 2 && (
                    <StatementText
                      title="A Bibliai Örömhír Közösség vezetőségéhez tartozó személy"
                      items={[
                        'képviseli az Együttműködési Hitvallásban, a Közösségi Hitvallásban és a Vezetőségi Hitvallásban megfogalmazottakat.',
                      ]}
                    />
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConfessionSection;
