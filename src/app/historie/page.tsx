import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container, Diamond } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { historyMilestones } from "@/data/content";

export const metadata: Metadata = { title: "Historie Skalského dvora" };

export default function HistoriePage() {
  return (
    <>
      <PageHeader
        eyebrow="O hotelu"
        title="Historie Skalského dvora"
        intro="Od šlechtického dvora přelomu 16. a 17. století přes barokní zámeček rodu Mitrovských až po moderní kongresový hotel."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {["/foto/content/Historie/h1.jpg", "/foto/content/Historie/h2.jpg", "/foto/content/Historie/h3.jpg", "/foto/content/Historie/h4.jpg"].map((src, i) => (
              <Reveal key={src} delay={(i % 4) * 0.06}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={src} alt="Historie Skalského dvora" fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>

          <ol className="mx-auto mt-16 max-w-3xl">
            {historyMilestones.map((m, i) => (
              <Reveal key={m.year + i} delay={(i % 3) * 0.06}>
                <li className="grid grid-cols-[96px_1fr] gap-6 pb-10 last:pb-0 md:grid-cols-[150px_1fr]">
                  <div className="display text-right text-lg font-bold uppercase text-gold-dark">{m.year}</div>
                  <div className="relative border-l border-gold/40 pb-2 pl-7">
                    <span className="absolute -left-[6px] top-1.5 text-gold"><Diamond className="h-3 w-3" /></span>
                    <p className="leading-relaxed text-ink-soft">{m.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
