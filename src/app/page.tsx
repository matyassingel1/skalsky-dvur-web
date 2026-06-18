import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { MirrorScroll } from "@/components/sections/MirrorScroll";
import { PhotoCard } from "@/components/cards/PhotoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Container, Ornament, Stars } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import {
  services,
  rooms,
  conferenceStats,
  congressPricing,
  packages,
  products,
  gallery,
} from "@/data/content";

export default function Home() {
  return (
    <>
      <Hero />
      <MirrorScroll />

      {/* NAŠE SLUŽBY */}
      <section className="monogram-s relative overflow-hidden bg-cream py-24 md:py-32">
        <Container className="relative z-10">
          <SectionHeader
            eyebrow="Naše služby"
            title="Pobyt v historickém prostředí na Vysočině"
            intro="Spojujeme klidnou atmosféru historického dvora s pohodlím moderního hotelu — odpočinek v útulných pokojích, gurmánský zážitek v restauraci, relaxaci ve wellness i aktivní vyžití v okolní přírodě."
          />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <PhotoCard {...s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ZAČNĚTE SVŮJ PŘÍBĚH */}
      <section className="bg-sand py-24 md:py-28">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="display text-[clamp(30px,4.5vw,60px)] font-bold uppercase leading-[1.02] text-ink">
                Začněte svůj příběh v hotelu Skalský dvůr
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <p className="text-[17px] leading-relaxed text-ink-soft">
                  Hotel leží v malebném zákoutí kraje Vysočina uprostřed luk a lesů na
                  břehu Skalského rybníka, na pomezí CHKO Žďárské vrchy a přírodního
                  parku Svratecká pahorkatina. I přes svou polohu v přírodě je dobře
                  dostupný z dálnice D1 — je téměř na půl cesty mezi Prahou a Brnem.
                  Jeho historie sahá až do 16. století.
                </p>
                <div className="mt-7">
                  <Button href="/historie" variant="link">Dozvědět se více</Button>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.05}>
            <div className="inner-frame relative mt-14 aspect-[21/9] overflow-hidden">
              <Image src="/foto/g10/panorama.jpg" alt="Panorama hotelu a terasy" fill sizes="100vw" className="object-cover" />
            </div>
          </Reveal>
          <div className="mt-12 text-center">
            <Button href="/ubytovani" variant="gold">Vyberte si svůj pobyt</Button>
          </div>
        </Container>
      </section>

      {/* POKOJE */}
      <section className="monogram-s relative overflow-hidden bg-cream py-24 md:py-32">
        <Container className="relative z-10">
          <SectionHeader eyebrow="Pokoje" title="Vyberte si svůj ideální pokoj" />
          <div className="mt-10 text-center">
            <Button href="/ubytovani" variant="outline">Více o ubytování</Button>
          </div>
          <div className="mt-16 space-y-16">
            {rooms.map((r, i) => (
              <Reveal key={r.id}>
                <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 ${i % 2 ? "" : ""}`}>
                  <div className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image src={r.img} alt={`Pokoj ${r.name}`} fill sizes="(max-width:1024px) 100vw, 58vw" className="object-cover" />
                    </div>
                  </div>
                  <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1 lg:-mr-16" : "lg:-ml-16"} relative z-10`}>
                    <div className="border border-gold/40 bg-cream p-9 shadow-[0_24px_60px_-30px_rgba(26,26,26,0.4)]">
                      <Stars count={r.stars} />
                      <h3 className="display mt-4 text-3xl font-bold uppercase text-ink">Pokoje {r.name}</h3>
                      <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">{r.text}</p>
                      <div className="mt-6">
                        <Button href={r.href} variant="link">Dozvědět se více</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-12 text-center font-body text-[12px] uppercase tracking-wide-luxe text-cream-muted">
            Check-in od 14 hodin · Check-out do 10 hodin
          </p>
        </Container>
      </section>

      {/* WELLNESS */}
      <section className="bg-sand">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image src="/foto/content/VolnyCas/masaz.jpeg" alt="Masáže ve wellness" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="monogram-s relative overflow-hidden px-8 py-20 md:px-16">
            <div className="relative z-10">
              <Ornament>Wellness & relax</Ornament>
              <h2 className="display mt-6 text-[clamp(28px,3.5vw,48px)] font-bold uppercase leading-[1.04] text-ink">
                Dopřejte svému tělu zasloužený odpočinek
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-soft">
                Krytý bazén s protiproudem a dnovou vířivkou (7:00–22:00, teplota vody
                28 °C), sauna až pro 8 osob a klasické i speciální masáže. U bazénu
                příjemné posezení s výhledem do okolní přírody.
              </p>
              <div className="mt-7">
                <Button href="/volny-cas" variant="outline">Dozvědět se více</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LESNÍ A LUČNÍ BAR */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-32">
        <div className="absolute inset-0 opacity-25">
          <Image src="/foto/content/VolnyCas/lesnibar.jpeg" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-ink/70" />
        <Container className="relative z-10">
          <SectionHeader tone="light" eyebrow="Volný čas" title="Lesní a luční bar" intro="Unikátní zážitek v lesích a lukách kolem hotelu — dobroty pro dospělé i děti a Cesta za studánkovými vílami s úkoly." />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              { t: "Lesní bar u víly Helenky", d: "V lesích nedaleko hotelu, nejkratší cestou z parkoviště 20 minut. Útratu vkládejte do černé pokladničky nebo plaťte bezkontaktně. Na recepci si vyzvednete mapu Cesty za studánkovými vílami.", img: "/foto/content/VolnyCas/lesnibar-helenka.jpeg" },
              { t: "Luční bar u dráčka Poplety", d: "První na Moravě, u kopce Pletenice za obcí Lísek, pěšky cca 51 minut. Dobroty pro dospělé i děti; útratu vkládejte do modré pokladničky nebo plaťte bezkontaktně.", img: "/foto/content/VolnyCas/lucnibar.jpeg" },
            ].map((b, i) => (
              <Reveal key={b.t} delay={i * 0.1}>
                <div className="inner-frame relative aspect-[16/11] overflow-hidden">
                  <Image src={b.img} alt={b.t} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 photo-overlay-dark" />
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                    <h3 className="display text-2xl font-bold uppercase text-cream">{b.t}</h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">{b.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/lesni-a-lucni-bar" variant="outlineLight">Více o volném čase</Button>
          </div>
        </Container>
      </section>

      {/* KONGRES */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src="/foto/content/Konference/konf.jpeg" alt="Konferenční sál" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </Reveal>
            <div>
              <Ornament tone="gold"><span className="inline-block">Firemní akce &amp; konference</span></Ornament>
              <h2 className="display mt-6 text-[clamp(28px,3.6vw,50px)] font-bold uppercase leading-[1.04] text-ink">
                Kongresový hotel na Vysočině
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-soft">
                Pořádáme konference a firemní akce více než 20 let. Při využití alespoň
                50 pokojů garantujeme, že bude na hotelu ubytována pouze vaše skupina.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {conferenceStats.map((s) => (
                  <div key={s.label} className="border-l-2 border-gold pl-4">
                    <div className="display text-3xl font-bold text-ink">{s.value}</div>
                    <div className="mt-1 font-body text-[11px] uppercase tracking-wide-luxe text-cream-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-px border border-gold/30 bg-gold/30 sm:grid-cols-2 lg:grid-cols-4">
            {congressPricing.map((p) => (
              <div key={p.name} className="bg-cream p-7 text-center">
                <p className="font-body text-[12px] uppercase tracking-wide-luxe text-ink-soft">{p.name}</p>
                <p className="display mt-3 text-2xl font-bold text-gold-dark">{p.price}</p>
                <p className="mt-1 text-xs text-cream-muted">{p.unit}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/poptavka-firmy" variant="gold">Poptat firemní akci</Button>
          </div>
        </Container>
      </section>

      {/* POBYTY */}
      <section className="bg-sand py-24 md:py-32">
        <Container>
          <SectionHeader eyebrow="Pobytové balíčky" title="Pobyty plné zážitků" />
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="group bg-cream">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.img} alt={p.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="p-7">
                    <div className="flex items-center gap-2 font-body text-[11px] uppercase tracking-wide-luxe text-gold-dark">
                      <Clock className="h-3.5 w-3.5" /> {p.term}
                    </div>
                    <h3 className="display mt-3 text-xl font-bold uppercase text-ink">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                    <div className="mt-5">
                      <Link href="/ubytovani" className="inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-wide-luxe text-gold-dark hover:gap-3">
                        Dozvědět se více <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* PRO RADOST */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="flex h-full flex-col justify-center">
                <Ornament tone="gold">Pro radost</Ornament>
                <h2 className="display mt-6 text-[clamp(26px,3.2vw,44px)] font-bold uppercase leading-[1.05] text-ink">
                  Malá drobnost pro radost
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink-soft">
                  Darujte zážitek z dovolené na Vysočině — dárkový poukaz v libovolné
                  hodnotě doručíme e-mailem nebo poštou. A nezapomeňte na naše bylinné
                  likéry a speciality typické pro Vysočinu.
                </p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <Button href="/darkovy-poukaz" variant="gold">Koupit poukaz</Button>
                  <Button href="/nase-produkty" variant="outline">Naše produkty</Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-3 gap-4">
                {products.map((p) => (
                  <div key={p.name} className="text-center">
                    <div className="relative aspect-[3/4] overflow-hidden bg-sand">
                      <Image src={p.img} alt={p.name} fill sizes="20vw" className="object-cover" />
                    </div>
                    <p className="display mt-3 text-sm font-bold uppercase text-ink">{p.name}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FOTOGALERIE */}
      <section className="bg-ink py-24 md:py-28">
        <Container>
          <SectionHeader tone="light" eyebrow="Fotogalerie" title="Nahlédněte k nám" />
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
            {gallery.slice(0, 8).map((g, i) => (
              <Reveal key={g.src} delay={(i % 4) * 0.06}>
                <div className="relative aspect-square overflow-hidden">
                  <Image src={g.src} alt={g.title} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/fotogalerie" variant="outlineLight">Celá fotogalerie</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
