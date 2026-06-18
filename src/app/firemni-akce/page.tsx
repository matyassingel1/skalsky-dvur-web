import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { conferenceStats, congressPricing } from "@/data/content";

export const metadata: Metadata = { title: "Firemní akce a konference na Vysočině" };

export default function FiremniAkce() {
  return (
    <>
      <PageHeader
        eyebrow="Firemní akce"
        title="Firemní akce a konference na Vysočině"
        intro="Konference a firemní akce pořádáme více než 20 let. Při využití alespoň 50 pokojů garantujeme, že bude na hotelu ubytována pouze vaše skupina."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-px border border-gold/30 bg-gold/30 md:grid-cols-4">
            {conferenceStats.map((s) => (
              <div key={s.label} className="bg-cream p-7 text-center">
                <div className="display text-3xl font-bold text-ink">{s.value}</div>
                <div className="mt-1 font-body text-[11px] uppercase tracking-wide-luxe text-cream-muted">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/foto/content/Konference/konf.jpeg" alt="Firemní akce" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-4 text-[16px] leading-relaxed text-ink-soft">
                <p>Hotel nabízí rozsáhlé konferenční prostory pro semináře, školení, kongresy, firemní prezentace i teambuilding. Dva sály lze zvukově i datově propojit.</p>
                <p>Díky kapacitě 148 lůžek a 33 přistýlek je ideální do 200 účastníků; máme zkušenosti i s kongresy pro 400+ (zajistíme dopravu a ubytování v okolí). Gastro: coffee breaky, rauty, slavnostní hostiny, bankety i grilovací párty na terasách.</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
            {congressPricing.map((p) => (
              <div key={p.name} className="bg-cream p-7 text-center">
                <p className="font-body text-[12px] uppercase tracking-wide-luxe text-ink-soft">{p.name}</p>
                <p className="display mt-3 text-2xl font-bold text-gold-dark">{p.price}</p>
                <p className="mt-1 text-xs text-cream-muted">{p.unit}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Button href="/konferencni-prostory" variant="outline">Konferenční prostory a technika</Button>
            <Button href="/poptavka-firmy" variant="gold">Poptat firemní akci</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
