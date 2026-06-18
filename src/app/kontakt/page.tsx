import type { Metadata } from "next";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Kontakt" };

const mapSrc =
  "https://maps.google.com/maps?q=" + encodeURIComponent(site.mapsQuery) + "&z=14&output=embed";

const routes = [
  "Od Prahy: D1 → sjezd 119. km → Žďár n. S. → Nové Město → silnice č. 19 → 2 km za Rovným vlevo na Lísek → 2,5 km lesem.",
  "Od Brna: Kuřim, Tišnov, Nedvědice → silnice č. 19 → 6 km za Bystřicí vpravo na Lísek → 2,5 km lesem.",
  "Vlak: zastávka Rozsochy. Autobus: zastávka „Lísek Skalský dvůr“ přímo u hotelu.",
];

export default function Kontakt() {
  return (
    <>
      <PageHeader eyebrow="Kontakt" title="Kontakt" intro="Hotel se nachází mimo obec Lísek, k. ú. Lhota, č. p. 52. Při jízdě s navigací pokračujte v Novém Městě po silnici č. 19 směr Bystřice — nikoli směr Zubří a Vojtěchov." />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div className="border border-gold/30 bg-sand p-8 md:p-10">
                <h2 className="display text-2xl font-bold uppercase text-ink">Hotel Skalský dvůr</h2>
                <div className="mt-6 space-y-4 text-sm text-ink">
                  <p className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />{site.address.full}</p>
                  <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-3 hover:text-gold-dark"><Phone className="h-4 w-4 text-gold-dark" />+420 {site.phone}</a>
                  <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold-dark"><Mail className="h-4 w-4 text-gold-dark" />{site.email}</a>
                  <p className="flex items-start gap-3"><Navigation className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />GPS: {site.gps}</p>
                </div>
                <div className="mt-6 border-t border-gold/30 pt-5 font-mono text-xs text-ink-soft">
                  <p>Provozovatel: {site.operator}</p>
                  <p className="mt-1">IČO {site.ico} · DIČ {site.dic}</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full border border-gold/30">
                <iframe title="Mapa — Hotel Skalský dvůr" src={mapSrc} width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block min-h-[360px]" />
              </div>
            </Reveal>
          </div>

          <div className="mt-14">
            <h3 className="font-body text-[11px] uppercase tracking-luxe text-gold-dark">Jak k nám</h3>
            <ul className="mt-5 space-y-3 max-w-3xl">
              {routes.map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />{r}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
