import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Gallery } from "@/components/Gallery";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "Hotelová restaurace" };

const capacities = [
  { v: "130", l: "míst v restauraci" },
  { v: "72", l: "míst v baru" },
  { v: "150", l: "míst na terase" },
  { v: "30", l: "míst zastřešená terasa" },
];

const menus = ["Jídelní lístek", "Nápojový lístek", "Vinný lístek", "Degustační lístek", "Gastronabídka pro firmy", "Oslavy, svatby a události"];

const photos = [
  { src: "/foto/g16/restaurace.jpeg", title: "Restaurace" },
  { src: "/foto/g16/rest1.jpeg", title: "Gastronomie" },
  { src: "/foto/g16/rest2.jpeg", title: "Speciality" },
];

export default function Restaurace() {
  return (
    <>
      <PageHeader
        eyebrow="Restaurace"
        title="Hotelová restaurace"
        intro="Tradiční česká gastronomie v moderním odlehčeném pojetí, s prvky italské, francouzské a orientální kuchyně. Důraz na čerstvost, sezónnost a lokální výrobce."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-2 gap-px border border-gold/30 bg-gold/30 md:grid-cols-4">
            {capacities.map((c) => (
              <div key={c.l} className="bg-cream p-7 text-center">
                <div className="display text-3xl font-bold text-ink">{c.v}</div>
                <div className="mt-1 font-body text-[11px] uppercase tracking-wide-luxe text-cream-muted">{c.l}</div>
              </div>
            ))}
          </div>

          <Reveal>
            <p className="mx-auto mt-14 max-w-3xl text-center text-[16px] leading-relaxed text-ink-soft">
              Navazuje rozsáhlá terasa s nádherným výhledem na okolní lesy, rybník a sportoviště, se zázemím pro grilování. Terasa, restaurace i bar jsou zcela bezbariérové. Myslíme na vegetariány i děti. Pokud si přejete navštívit pouze restauraci, kontaktujte recepci: info@skalskydvur.cz, +420 606 725 502.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {menus.map((m) => (
              <span key={m} className="border border-gold/40 px-5 py-2.5 font-body text-[11px] uppercase tracking-wide-luxe text-ink">{m}</span>
            ))}
          </div>

          <div className="mt-16"><Gallery items={photos} /></div>

          <div className="mt-12 text-center"><Button href="/poptavka-pobyt" variant="gold">Rezervovat stůl / pobyt</Button></div>
        </Container>
      </section>
    </>
  );
}
