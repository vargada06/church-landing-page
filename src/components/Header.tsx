import React from 'react';
import { Cross } from "@/components/icons/Cross";
import { Button } from "@/components/ui/button";
import styles from './Header.module.css';

type NavItem = {
  href: string;
  label: string;
  primary?: boolean;
}

const navItems: NavItem[] = [
  { href: "#hitvallas", label: "Hitvallásunk", primary: true }
];

export function Header() {
  return (
    <header className="relative w-full h-screen flex flex-col">
      {/* Kereszt és cím rész */}
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
              
              {/* Bibliai idézet a kereszt alatt */}
              <div className={styles.quoteContainer}>
                <p className="text-muted-foreground max-w-xl mx-auto">
                  „Amit hallottak, szíven szúrta őket, és azt kérdezték Pétertől és a többi apostoltól: Mit
                  cselekedjünk, atyámfiai, férfiak?" (Cselekedetek 2,37)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Egyszerű navigáció a header alján */}
      <div className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <nav className="flex items-center justify-center">
            {navItems.map((item) => (
              item.primary ? (
                <Button
                  key={item.href}
                  variant="secondary"
                  size="default"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-foreground/80 text-foreground"
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
