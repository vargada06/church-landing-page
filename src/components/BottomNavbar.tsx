import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger, 
  SheetTitle, 
  SheetDescription 
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  primary?: boolean;
}

const navItems: NavItem[] = [
  { href: "#hitvallas", label: "Hitvallásunk", primary: true }
];

export function BottomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-center">
        {/* Asztali nézet - középre igazított gomb */}
        <div className="hidden md:flex justify-center w-full">
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
        
        {/* Mobilnézet */}
        <div className="md:hidden flex flex-1 items-center justify-between">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2 h-8 w-8">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menü megnyitása</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetTitle className="sr-only">Navigáció</SheetTitle>
              <SheetDescription className="sr-only">
                Navigációs menü a különböző oldalrészek eléréséhez
              </SheetDescription>
              <div className="px-7 pt-4">
                <div className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    item.primary ? (
                      <Button
                        key={item.href}
                        variant="secondary"
                        size="lg"
                        className="w-full"
                        asChild
                      >
                        <a 
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </a>
                      </Button>
                    ) : (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block py-2 text-lg font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
