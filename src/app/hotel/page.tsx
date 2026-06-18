import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Hotel Skalský dvůr" };

const facts = [
  { v: "68", l: "pokojů" },
  { v: "148", l: "lůžek + 33 přistýlek" },
  { v: "16. stol.", l: "historie dvora" },
  { v: "D1", l: "půl cesty Praha–Brno" },
];

export default function HotelPage() {
  return (
    <>
      <PageHeader
        eyebrow="O hotelu"
        title="Hotel Skalský dvůr"
        intro="Uprostřed luk a lesů na břehu Skalského rybníka, na pomezí CHKO Žďárské vrchy a přírodního parku Svratecká pahorkatina."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/foto/content/hotel-letecky3.jpg" alt="Hotel Skalský dvůr" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-[16px] leading-relaxed text-ink-soft">
                <p>I přes polohu v přírodě je hotel dobře dostupný z dálnice D1 a je téměř na půl cesty mezi Prahou a Brnem. Využíván je zejména jako kongresový a seminární hotel pro velké i malé akce a pro teambuilding.</p>
                <p>V období letních prázdnin, Silvestra a Velikonoc je oblíbeným místem dovolených a rekreací — navštěvují ho aktivní rodiny s dětmi, cyklisté i senioři. Ubytování je zajištěno v 68 pokojích se 148 lůžky a 33 přistýlkami, k dispozici jsou i pokoje pro imobilní.</p>
                <p>V okolí lze navštívit řadu památek (hrad Pernštejn, Polička, zřícenina Zubštejn, kostel na Zelené hoře — UNESCO), zajímavých míst (lesní a luční bar, zábavní centrum EDEN) i přírodních krás (Vírská přehrada, skalní útvary CHKO Žďárské vrchy).</p>
                <div className="pt-2"><Button href="/historie" variant="link">Historie Skalského dvora</Button></div>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px border border-gold/30 bg-gold/30 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.l} className="bg-cream p-7 text-center">
                <div className="display text-3xl font-bold text-ink">{f.v}</div>
                <div className="mt-1 font-body text-[11px] uppercase tracking-wide-luxe text-cream-muted">{f.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
