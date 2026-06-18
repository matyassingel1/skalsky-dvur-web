import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Aktivity ve volném čase" };

const indoor = [
  "Krytý bazén s protiproudem a vířivkou (7:00–22:00, voda 28 °C)",
  "Sauna až pro 8 osob — po rezervaci, odpočinková místnost s lehátky",
  "Klasické i speciální masáže (nutno objednat na recepci)",
  "Kulečník, stolní fotbal, 2× stolní tenis, elektronické šipky",
  "Dětský koutek a skákací hrad pro malé hosty",
];
const outdoor = [
  "2 antukové tenisové kurty, 2 hřiště (volejbal / nohejbal)",
  "Stezka bosou nohou k pláži u Skalského rybníka",
  "Horská kola (pánská, dámská i dětská) + helmy na recepci",
  "Rybaření, koupání a projížďky na lodičkách",
  "Dětské hřiště — prolézačka, houpačka, pískoviště",
];

export default function VolnyCas() {
  return (
    <>
      <PageHeader
        eyebrow="Volný čas"
        title="Aktivity ve volném čase"
        intro="Využijte hotelové služby nebo se vydejte poznávat Vysočinu. Pracovníci recepce pomohou zajistit vstupenky, dopravu i rezervaci sportovišť."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <div className="relative mb-6 aspect-[16/10] overflow-hidden">
                  <Image src="/foto/content/VolnyCas/bazen.jpeg" alt="Krytý bazén" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <h2 className="display text-2xl font-bold uppercase text-ink">Vnitřní aktivity</h2>
                <ul className="mt-5 space-y-3">
                  {indoor.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-sm text-ink-soft"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <div className="relative mb-6 aspect-[16/10] overflow-hidden">
                  <Image src="/foto/content/VolnyCas/tenis.jpeg" alt="Tenisové kurty" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <h2 className="display text-2xl font-bold uppercase text-ink">Venkovní aktivity</h2>
                <ul className="mt-5 space-y-3">
                  {outdoor.map((x) => (
                    <li key={x} className="flex items-start gap-3 text-sm text-ink-soft"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />{x}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 text-center"><Button href="/lesni-a-lucni-bar" variant="outline">Lesní a luční bar</Button></div>
        </Container>
      </section>
    </>
  );
}
