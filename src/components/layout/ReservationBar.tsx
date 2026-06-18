"use client";

import Link from "next/link";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { Diamond } from "@/components/ui/primitives";

export function ReservationBar() {
  const [arrive, setArrive] = useState("");
  const [depart, setDepart] = useState("");

  const query = new URLSearchParams();
  if (arrive) query.set("prijezd", arrive);
  if (depart) query.set("odjezd", depart);
  const qs = query.toString() ? `?${query.toString()}` : "";

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-3 px-4 py-3 md:gap-5 md:px-10">
        <div className="hidden items-center gap-2.5 text-gold lg:flex">
          <Diamond className="h-2.5 w-2.5" />
          <span className="display text-sm font-bold uppercase tracking-wide-luxe text-cream">
            Rezervace online
          </span>
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 border border-cream/20 bg-ink-2 px-3 py-2 text-xs text-cream/80">
            <CalendarDays className="h-4 w-4 text-gold" />
            <span className="hidden sm:inline">Příjezd</span>
            <input
              type="date"
              value={arrive}
              onChange={(e) => setArrive(e.target.value)}
              className="bg-transparent text-cream outline-none [color-scheme:dark]"
            />
          </label>
          <label className="flex items-center gap-2 border border-cream/20 bg-ink-2 px-3 py-2 text-xs text-cream/80">
            <CalendarDays className="h-4 w-4 text-gold" />
            <span className="hidden sm:inline">Odjezd</span>
            <input
              type="date"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
              className="bg-transparent text-cream outline-none [color-scheme:dark]"
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            href={`/poptavka-pobyt${qs}`}
            className="bg-gold px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-wide-luxe text-white transition-colors hover:bg-gold-dark"
          >
            Ověřit dostupnost
          </Link>
          <Link
            href="/ubytovani"
            className="hidden border border-cream/35 px-4 py-2.5 font-body text-[11px] uppercase tracking-wide-luxe text-cream transition-colors hover:bg-cream hover:text-ink sm:inline-block"
          >
            Zobrazit nabídky
          </Link>
          <Link
            href="/darkovy-poukaz"
            className="hidden border border-cream/35 px-4 py-2.5 font-body text-[11px] uppercase tracking-wide-luxe text-cream transition-colors hover:bg-cream hover:text-ink md:inline-block"
          >
            Koupit poukaz
          </Link>
        </div>
      </div>
    </div>
  );
}
