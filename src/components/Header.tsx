import React from 'react';
import { Cross } from "@/components/icons/Cross";
import { Button } from "@/components/ui/button";
import styles from './Header.module.css';
import ScriptureQuote from './ScriptureQuote';

type NavItem = {
  href: string;
  label: string;
  primary?: boolean;
}

const navItems: NavItem[] = [
  { href: "#hitvallas", label: "Hitvallásunk", primary: true },
  { href: "#alkalmak", label: "Gyülekezeti alkalom", primary: false }
];

export function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col">
      {/* Kereszt és cím rész - ez marad az eredeti helyén */}
      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Kereszt komponens a címmel integrálva */}
            <div className={`${styles.crossContainer}`}>
              {/* Kereszt háttér */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Cross className="w-full h-full text-primary/10" aria-hidden="true" />
              </div>
              
              {/* Cím a vízszintes keresztrészen */}
              <div className={styles.titleContainer}>
                <h1 className={`${styles.title} font-extrabold tracking-tight text-primary`}>
                  <span className={styles.titleText}>Bibliai Örömhír Közösség</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bibliai idézet a kereszt és navbar között félúton */}
      <div className={styles.scriptureContainer}>
        <ScriptureQuote
          text="Amit hallottak, szíven szúrta őket, és azt kérdezték Pétertől és a többi apostoltól: Mit cselekedjünk, atyámfiai, férfiak?"
          reference="Cselekedetek 2,37"
          className="max-w-xl mx-auto bg-background/40 backdrop-blur-sm"
          compact={true}
        />
      </div>

      {/* Egyszerű navigáció a header alján */}
      <div className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <nav className="flex items-center justify-center gap-6">
            {navItems.map((item) => (
              item.primary ? (
                <Button
                  key={item.href}
                  variant="default"
                  size="default"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary/80 text-foreground font-medium px-2 py-1 rounded hover:bg-muted/60"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
