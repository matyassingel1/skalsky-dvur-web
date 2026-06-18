import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";

export const metadata: Metadata = { title: "Lesní a luční bar" };

const bars = [
  {
    t: "Lesní bar u víly Helenky",
    d: "Nachází se v lesích nedaleko hotelu. Nejkratší cestou z parkoviště to zabere 20 minut. Připraveno je spousta dobrot pro dospělé i děti; útratu vkládejte do černé pokladničky nebo plaťte bezkontaktně. Na recepci si vyzvednete mapu Cesty za studánkovými vílami s úkoly pro děti.",
    img: "/foto/content/VolnyCas/lesnibar-helenka.jpeg",
  },
  {
    t: "Luční bar u dráčka Poplety",
    d: "První na Moravě, u kopce Pletenice za obcí Lísek. Pěšky cca 51 minut. Připraveny dobroty pro dospělé i děti; útratu vkládejte do modré pokladničky nebo plaťte bezkontaktně.",
    img: "/foto/content/VolnyCas/lucnibar.jpeg",
  },
];

export default function LesniBar() {
  return (
    <>
      <PageHeader
        eyebrow="Volný čas"
        title="Lesní a luční bar"
        intro="Unikátní zážitek v přírodě kolem hotelu — samoobslužné bary v lese a na louce s dobrotami pro dospělé i děti."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container className="space-y-16">
          {bars.map((b, i) => (
            <Reveal key={b.t}>
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">
                <div className={`relative aspect-[4/3] overflow-hidden ${i % 2 ? "lg:order-2" : ""}`}>
                  <Image src={b.img} alt={b.t} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                </div>
                <div>
                  <h2 className="display text-[clamp(26px,3vw,42px)] font-bold uppercase text-ink">{b.t}</h2>
                  <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">{b.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
