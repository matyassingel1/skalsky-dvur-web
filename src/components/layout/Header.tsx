"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-gold/25 bg-cream/95 py-3 shadow-[0_6px_30px_-18px_rgba(26,26,26,0.5)] backdrop-blur-md"
          : "border-b border-transparent py-5",
      )}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 md:px-10">
        {/* Left: desktop nav */}
        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 px-2 py-2 font-body text-[10.5px] font-medium uppercase tracking-wide-luxe transition-colors",
                  solid ? "text-ink hover:text-gold-dark" : "text-cream hover:text-white",
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3 w-3 opacity-60" />}
              </Link>
              {item.children && hovered === item.href && (
                <div className="absolute left-0 top-full min-w-[260px] border border-gold/25 bg-cream py-2 shadow-xl">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block px-5 py-2.5 font-body text-[12px] uppercase tracking-wide-luxe text-ink transition-colors hover:bg-sand hover:text-gold-dark"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile hamburger (left) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "relative z-10 flex h-10 w-10 items-center justify-center xl:hidden",
            solid || open ? "text-ink" : "text-cream",
          )}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Center: wordmark */}
        <Link href="/" className="flex flex-col items-center text-center leading-none">
          <span
            className={cn(
              "font-body text-[8px] uppercase tracking-luxe transition-colors",
              solid ? "text-gold-dark" : "text-gold-soft",
            )}
          >
            {site.region}
          </span>
          <span
            className={cn(
              "display mt-1 text-xl font-bold uppercase tracking-[0.14em] transition-colors md:text-2xl",
              solid ? "text-ink" : "text-cream",
            )}
          >
            {site.wordmark}
          </span>
        </Link>

        {/* Right: lang + reservation */}
        <div className="flex items-center justify-end gap-4">
          <button
            className={cn(
              "hidden items-center gap-1.5 font-body text-[11px] uppercase tracking-wide-luxe transition-colors lg:flex",
              solid ? "text-ink hover:text-gold-dark" : "text-cream hover:text-white",
            )}
            aria-label="Jazyk"
          >
            <Globe className="h-4 w-4" />
            CZ
          </button>
          <Link
            href="/poptavka-pobyt"
            className="bg-gold px-5 py-2.5 font-body text-[11px] font-medium uppercase tracking-wide-luxe text-white transition-colors hover:bg-gold-dark"
          >
            Rezervace
          </Link>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 top-0 -z-10 flex flex-col overflow-y-auto bg-cream pt-24 pb-10 transition-all duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="flex flex-col px-8">
          {nav.map((item) => (
            <div key={item.href} className="border-b border-gold/20 py-3">
              <Link href={item.href} className="display block text-2xl font-bold uppercase text-ink">
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-2 flex flex-col gap-1.5">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="font-body text-[12px] uppercase tracking-wide-luxe text-ink-soft"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
