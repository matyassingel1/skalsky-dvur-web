import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { products } from "@/data/content";

export const metadata: Metadata = { title: "Naše produkty" };

export default function NaseProdukty() {
  return (
    <>
      <PageHeader
        eyebrow="Pro radost"
        title="Naše produkty"
        intro="Likéry, elixíry a další lihoviny z bylin a ovoce typické pro Vysočinu. Zavítejte na recepci — pro firemní klientelu připravíme dárkové balíčky."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08}>
                <div className="border border-gold/25 bg-sand">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image src={p.img} alt={p.name} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <div className="p-7 text-center">
                    <h3 className="display text-xl font-bold uppercase text-ink">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
