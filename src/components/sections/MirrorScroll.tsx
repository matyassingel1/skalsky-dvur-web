"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { Diamond } from "@/components/ui/primitives";

const stages = [
  {
    eyebrow: "Zrcadlo Vysočiny",
    title: "Klid hladiny\na vůně lesů",
    text: "Na samém břehu Skalského rybníka, kde se hotel zrcadlí v tiché vodě, začíná váš pobyt uprostřed nedotčené přírody Žďárských vrchů.",
    img: "/foto/content/hotel-letecky3.jpg",
    cta: { label: "O hotelu", href: "/hotel" },
  },
  {
    eyebrow: "Ubytování",
    title: "Pokoje\ns výhledem",
    text: "68 pokojů se 148 lůžky — od útulných pokojů Standard po čtyřhvězdičkové apartmány Superior s výhledem do krajiny Vysočiny.",
    img: "/foto/g5/superior.jpeg",
    cta: { label: "Vybrat pokoj", href: "/ubytovani" },
  },
  {
    eyebrow: "Gastronomie",
    title: "Chuť\nkraje",
    text: "Tradiční česká kuchyně v moderním odlehčeném pojetí, s důrazem na čerstvost a lokální suroviny — a terasa s výhledem na rybník.",
    img: "/foto/g16/restaurace.jpeg",
    cta: { label: "Restaurace", href: "/restaurace" },
  },
  {
    eyebrow: "Wellness & klid",
    title: "Zasloužený\nodpočinek",
    text: "Krytý bazén s protiproudem, sauna a masáže — relaxace uprostřed přírody, s výhledem do zeleně Vysočiny.",
    img: "/foto/content/VolnyCas/bazen.jpeg",
    cta: { label: "Volný čas", href: "/volny-cas" },
  },
];

export function MirrorScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const total = stages.length;
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.max(0, Math.min(total - 1, Math.floor(v * total))));
  });

  return (
    <section ref={ref} className="relative bg-ink" style={{ height: `${total * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Scény — horní obraz + zrcadlení v hladině */}
        {stages.map((s, i) => (
          <motion.div
            key={s.eyebrow}
            className="absolute inset-0"
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* horní obraz */}
            <div className="absolute inset-x-0 top-0 h-[62%] overflow-hidden">
              <Image src={s.img} alt={s.title.replace("\n", " ")} fill priority={i === 0} sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 photo-overlay-dark" />
            </div>
            {/* hladina — zrcadlení */}
            <div className="absolute inset-x-0 bottom-0 h-[38%] overflow-hidden">
              <div
                className="absolute inset-0 -scale-y-100"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)",
                }}
              >
                <Image src={s.img} alt="" fill sizes="100vw" className="object-cover object-top blur-[2px] brightness-[0.6]" />
                <div className="absolute inset-0 bg-ink/40" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* zlatá linie hladiny */}
        <div className="pointer-events-none absolute inset-x-0 top-[62%] z-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
        </div>

        {/* jemné mihotání hladiny */}
        {!reduce && (
          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-0 top-[62%] z-10 opacity-30"
            style={{
              background:
                "repeating-linear-gradient(180deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 9px)",
            }}
            animate={{ backgroundPositionY: ["0px", "9px"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* Obsah */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
            <div className="max-w-xl">
              {stages.map((s, i) => (
                <motion.div
                  key={s.eyebrow}
                  className="absolute"
                  animate={{
                    opacity: active === i ? 1 : 0,
                    y: reduce ? 0 : active === i ? 0 : 20,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{ pointerEvents: active === i ? "auto" : "none" }}
                >
                  <div className="flex items-center gap-3 text-gold">
                    <Diamond className="h-2.5 w-2.5" />
                    <span className="font-body text-[11px] uppercase tracking-luxe">{s.eyebrow}</span>
                  </div>
                  <h2 className="display mt-5 whitespace-pre-line text-[clamp(40px,7vw,96px)] font-bold uppercase leading-[0.98] text-cream">
                    {s.title}
                  </h2>
                  <p className="mt-6 max-w-md text-[16px] leading-relaxed text-cream/80">{s.text}</p>
                  <Link
                    href={s.cta.href}
                    className="mt-8 inline-flex items-center gap-3 border border-gold/60 px-7 py-3.5 font-body text-[11px] uppercase tracking-wide-luxe text-cream transition-colors hover:bg-gold hover:text-ink"
                  >
                    {s.cta.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* indikátor */}
        <div className="absolute right-6 top-1/2 z-20 hidden -translate-y-1/2 flex-col gap-3 md:flex">
          {stages.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rotate-45 border border-gold transition-all duration-300 ${
                i === active ? "bg-gold" : "bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
