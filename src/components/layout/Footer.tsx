import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Container, Diamond } from "@/components/ui/primitives";

function Facebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path d="M14 8.5h2.5V5.5H14c-2 0-3.2 1.3-3.2 3.2v1.6H8.3v3h2.5V21h3v-7.7h2.5l.4-3h-2.9V9.1c0-.4.3-.6.7-.6z" strokeLinejoin="round" />
    </svg>
  );
}
function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-ink text-cream">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold to-transparent" />
      <Container className="py-16 md:py-20">
        {/* Top: wordmark */}
        <div className="flex flex-col items-center text-center">
          <span className="font-body text-[9px] uppercase tracking-luxe text-gold">
            {site.region}
          </span>
          <span className="display mt-2 text-3xl font-bold uppercase tracking-[0.14em] text-cream">
            {site.wordmark}
          </span>
          <div className="mt-5 flex items-center gap-3 text-gold">
            <span className="h-px w-12 bg-gold/50" />
            <Diamond className="h-2.5 w-2.5" />
            <span className="h-px w-12 bg-gold/50" />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="font-body text-[11px] uppercase tracking-luxe text-gold">Kontakt</h3>
            <div className="mt-4 space-y-3 text-sm text-cream/80">
              <a href={`tel:${site.phoneIntl}`} className="flex items-center gap-3 hover:text-gold">
                <Phone className="h-4 w-4 text-gold" /> +420 {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-gold">
                <Mail className="h-4 w-4 text-gold" /> {site.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.address.full}
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-luxe text-gold">Vzdálenost od</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {site.distances.map((d) => (
                <li key={d.place} className="flex justify-between gap-3">
                  <span>{d.place}</span>
                  <span className="text-gold-soft">{d.km}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-luxe text-gold">Oblíbené</h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              <li><Link href="/ubytovani" className="hover:text-gold">Rekreační pobyty</Link></li>
              <li><Link href="/darkovy-poukaz" className="hover:text-gold">Dárkové poukazy</Link></li>
              <li><Link href="/volny-cas" className="hover:text-gold">Dovolená pro rodiny s dětmi</Link></li>
              <li><Link href="/lesni-a-lucni-bar" className="hover:text-gold">Lesní a luční bar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-[11px] uppercase tracking-luxe text-gold">Sledujte nás</h3>
            <div className="mt-4 flex gap-3">
              <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-ink" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-5 flex flex-col gap-2">
              <Link href="/poptavka-pobyt" className="font-body text-[12px] uppercase tracking-wide-luxe text-cream/80 hover:text-gold">Poptávka pobyt</Link>
              <Link href="/poptavka-firmy" className="font-body text-[12px] uppercase tracking-wide-luxe text-cream/80 hover:text-gold">Poptávka firmy</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-7 text-center font-body text-[11px] uppercase tracking-wide-luxe text-cream/45">
          © 2026 Skalský dvůr · Provozovatel {site.operator}
        </div>
      </Container>
    </footer>
  );
}
