import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BookOpen, MessagesSquare, GlassWater } from 'lucide-react';
import ScriptureQuote from './ScriptureQuote';

const MeetingItem = ({
  title,
  duration,
  description,
  verseRef,
  verseText,
  icon,
}: {
  title: string;
  duration: string;
  description: string;
  verseRef: string;
  verseText: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="h-full overflow-hidden group hover:shadow-md transition-all duration-300">
      <CardHeader className="p-4 bg-muted/30 flex flex-row items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-full text-primary">{icon}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <span className="text-muted-foreground text-sm flex items-center">
              <Clock className="h-3 w-3 mr-1" /> {duration}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-3">
        <p className="text-muted-foreground mb-3 text-sm">{description}</p>
        <blockquote className="border-l-2 border-primary/50 pl-3 italic text-sm mt-2">
          {verseText}
          <footer className="text-xs text-muted-foreground mt-1 not-italic">— {verseRef}</footer>
        </blockquote>
      </CardContent>
    </Card>
  );
};

export function MeetingSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20" id="alkalmak">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            GYÜLEKEZETI ÖSSZEJÖVETEL
          </h2>
          <div className="w-20 h-1 bg-primary/30 rounded-full"></div>

          <div className="max-w-2xl mx-auto mt-6">
            <ScriptureQuote
              text="És állhatatosan kitartottak az apostolok tanításában és a közösségben, a kenyér megtörésében és az imádkozásokban."
              reference="Cselekedetek 2,42"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mt-12">
          <MeetingItem
            title="1. Apostolok tanítása"
            duration="kb. 60 perc"
            description="Az Ige hirdetése és tanulmányozása közösségünkben központi jelentőségű. Az apostoli tanítás továbbadása a gyülekezet egyik fő küldetése."
            verseRef="2Tim 4,1-2"
            verseText="Kérlek azért az Isten és Krisztus Jézus színe előtt, aki ítélni fog élőket és holtakat, az ő eljövetelére és királyságára nézve: hirdesd az igét, állj elő vele alkalmas és alkalmatlan időben, ints, feddj, bátoríts teljes türelemmel és tanítással."
            icon={<BookOpen className="h-5 w-5" />}
          />

          <MeetingItem
            title="2. Imádkozások"
            duration="kb. 30 perc"
            description="Az imádság által kapcsolódunk Istenhez, fejezzük ki hálánkat, tárjuk fel kéréseinket és közbenjárunk másokért."
            verseRef="Fil 4,6"
            verseText="Semmi miatt ne aggódjatok, hanem imádságban és könyörgésben mindenkor hálaadással tárjátok fel kéréseiteket Isten előtt."
            icon={<MessagesSquare className="h-5 w-5" />}
          />

          <MeetingItem
            title="3. Kenyér megtörése"
            duration="kb. 30 perc"
            description="Az Úr-vacsora során Krisztus áldozatára emlékezünk, halálát hirdetjük és várjuk dicsőséges visszatértét."
            verseRef="1Kor 11,26"
            verseText="Mert valamennyiszer eszitek e kenyeret, és isztok e pohárból, az Úr halálát hirdetitek, amíg eljön."
            icon={<GlassWater className="h-5 w-5" />}
          />

          <MeetingItem
            title="4. Közösség"
            duration="kb. 30 perc"
            description="A testvéri közösség gyakorlása által épülünk, bátorítjuk egymást és megosztjuk életünket."
            verseRef="Zsid 13,16"
            verseText="A jótékonyságról pedig és a közösségről el ne feledkezzetek, mert Isten ilyen áldozatokban gyönyörködik."
            icon={<Users className="h-5 w-5" />}
          />
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <ScriptureQuote
            text="Legyen gondunk arra, hogy egymást buzdítsuk a szeretetre és a jó cselekedetekre, nem hagyva el összejöveteleinket, ahogyan szokásuk némelyeknek, hanem bátorítva egymást annyival inkább, mivel látjátok, hogy közeledik az a nap."
            reference="Zsid 10,24-25"
            className="bg-primary/5 border-primary/10 shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

export default MeetingSection;
