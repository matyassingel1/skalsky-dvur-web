"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Diamond } from "@/components/ui/primitives";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

export function Hero() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/foto/content/hotel-letecky3.jpg"
          alt="Hotel Skalský dvůr na břehu Skalského rybníka"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/40" />

      <div className="absolute inset-0 flex items-end pb-28 md:items-center md:pb-0">
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10">
          <motion.div {...fade(0.2)} className="flex items-center gap-3 text-gold">
            <Diamond className="h-3 w-3" />
            <span className="font-body text-[11px] uppercase tracking-luxe">Hotel · Vysočina · od 16. století</span>
          </motion.div>

          <motion.h1
            {...fade(0.35)}
            className="display mt-6 max-w-4xl text-[clamp(40px,6.5vw,104px)] font-bold uppercase leading-[0.98] text-cream"
          >
            Historie a klid
            <br />v srdci Vysočiny
          </motion.h1>

          <motion.p {...fade(0.55)} className="mt-7 max-w-xl text-[17px] leading-relaxed text-cream/85">
            V malebném zákoutí Vysočiny, na břehu Skalského rybníka, vás vítá hotel,
            kde se pojí dlouholetá historie s pohodlím moderního hotelu.
          </motion.p>

          <motion.div {...fade(0.75)} className="mt-9 flex flex-wrap items-center gap-6">
            <Button href="/ubytovani" variant="gold">Akční nabídky</Button>
            <Button href="/poptavka-pobyt" variant="link" className="text-cream decoration-gold">
              Poptat pobyt
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 md:flex"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
        <span className="font-body text-[10px] uppercase tracking-luxe">Scroll</span>
      </motion.div>
    </section>
  );
}
