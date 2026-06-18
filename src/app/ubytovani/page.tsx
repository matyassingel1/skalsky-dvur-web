import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { rooms } from "@/data/content";

export const metadata: Metadata = { title: "Ubytování na Vysočině" };

export default function Ubytovani() {
  return (
    <>
      <PageHeader
        eyebrow="Ubytování"
        title="Ubytování na Vysočině"
        intro="Hotel disponuje 68 pokoji — 11 kategorie Superior a 57 kategorie Standard. Celková kapacita je 148 lůžek a 33 přistýlek. Všechny pokoje mají LCD TV, koupelnu a Wi-Fi."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container className="space-y-20">
          {rooms.map((r, i) => (
            <Reveal key={r.id}>
              <div id={r.id} className="grid scroll-mt-32 grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={r.img} alt={`Pokoj ${r.name}`} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div>
                  <Stars count={r.stars} />
                  <h2 className="display mt-4 text-[clamp(28px,3.5vw,46px)] font-bold uppercase text-ink">Pokoje {r.name}</h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{r.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-gold/30 pt-10 text-center">
            <p className="font-body text-[12px] uppercase tracking-wide-luxe text-cream-muted">Check-in od 14 hodin · Check-out do 10 hodin · Po dohodě ubytování se psem</p>
            <div className="mt-8"><Button href="/poptavka-pobyt" variant="gold">Poptat pobyt</Button></div>
          </div>
        </Container>
      </section>
    </>
  );
}
