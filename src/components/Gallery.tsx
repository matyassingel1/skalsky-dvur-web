"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

interface Item {
  src: string;
  title: string;
}

export function Gallery({ items }: { items: Item[] }) {
  const [idx, setIdx] = useState<number | null>(null);
  const close = useCallback(() => setIdx(null), []);
  const prev = useCallback(() => setIdx((i) => (i === null ? i : (i + items.length - 1) % items.length)), [items.length]);
  const next = useCallback(() => setIdx((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);

  useEffect(() => {
    if (idx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [idx, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {items.map((it, i) => (
          <Reveal key={it.src + i} delay={(i % 4) * 0.05}>
            <button onClick={() => setIdx(i)} className="group relative block aspect-square w-full overflow-hidden">
              <Image src={it.src} alt={it.title} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20" />
            </button>
          </Reveal>
        ))}
      </div>

      {idx !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4" onClick={close}>
          <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-gold/40 text-cream hover:bg-gold hover:text-ink" onClick={close} aria-label="Zavřít"><X className="h-5 w-5" /></button>
          <button className="absolute left-3 flex h-11 w-11 items-center justify-center border border-gold/40 text-cream hover:bg-gold hover:text-ink md:left-8" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Předchozí"><ChevronLeft className="h-5 w-5" /></button>
          <button className="absolute right-3 flex h-11 w-11 items-center justify-center border border-gold/40 text-cream hover:bg-gold hover:text-ink md:right-8" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Další"><ChevronRight className="h-5 w-5" /></button>
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image src={items[idx].src} alt={items[idx].title} fill sizes="100vw" className="object-contain" />
            </div>
            <p className="mt-4 text-center font-body text-[12px] uppercase tracking-wide-luxe text-cream/80">{items[idx].title}</p>
          </div>
        </div>
      )}
    </>
  );
}
