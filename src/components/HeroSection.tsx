import { Button } from "@/components/ui/button";
import { Cross } from "@/components/icons/Cross";
import { Navbar } from "@/components/Navbar";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col">
      {/* Hero tartalom */}
      <div className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="container mx-auto">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* 6x-os méretű kereszt a háttérben */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[600%] h-[600%] md:w-[600%] md:h-[600%]">
                <Cross className="w-full h-full text-primary/5" aria-hidden="true" />
              </div>
            </div>
            <div className="relative z-10 text-center max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
                Bibliai Örömhír Közösség
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
                „Amit hallottak, szíven szúrta őket, és azt kérdezték Pétertől és a többi apostoltól: Mit
                cselekedjünk, atyámfiai, férfiak?" (Cselekedetek 2,37)
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigáció */}
      <Navbar />
    </section>
  );
};

export default HeroSection;
