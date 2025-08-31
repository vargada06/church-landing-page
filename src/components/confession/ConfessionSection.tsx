import React, { useState } from "react";
import { confessionData } from "./confessionData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Használjuk a meglévő komponenseket
import VerseReference from "./VerseReference";
import ReferenceText from "./ReferenceText";
import styles from "./ConfessionSection.module.css";

const ConfessionSection: React.FC = () => {
  const [activeReferenceId, setActiveReferenceId] = useState<string | null>(null);

  const handleReferenceClick = (refId: string) => {
    setActiveReferenceId(refId === activeReferenceId ? null : refId);
  };

  return (
    <section className="w-full py-16 bg-muted/50" id="hitvallas">
      <div className="container px-4 md:px-6 mx-auto flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hitvallásunk
          </h2>
        
          {confessionData.map((category) => (
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
                          {item.references && item.references.length > 0 && activeReferenceId !== null && (
                            <div className="mt-6 pt-4 border-t border-border/50">
                              {item.references
                                .filter(ref => ref.id === activeReferenceId)
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
            </Card>
          ))}
          
          {/* Vezetőségi nyilatkozat */}
          <Card className={`mb-8 border-primary/20 bg-primary/5 ${styles.leadershipCard}`}>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert mx-auto">
                <div className={`bg-card p-6 rounded-lg shadow-sm border border-primary/10 ${styles.leadershipStatement}`}>
                  <p className="text-muted-foreground leading-relaxed text-center italic relative z-10 font-medium">
                    A Bibliai Örömhír Közösség vezetőségéhez tartozó személy{' '}
                    <span className="sm:hidden"> </span><br className="hidden sm:block" />
                    képviseli az Együttműködési Hitvallásban, a Közösségi Hitvallásban{' '}
                    <span className="sm:hidden"> </span><br className="hidden sm:block" />
                    és a Vezetőségi Hitvallásban megfogalmazottakat.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConfessionSection;
