import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Reveal } from "@/components/animations/Reveal";
import { Button } from "@/components/ui/Button";
import { conferenceRooms } from "@/data/content";

export const metadata: Metadata = { title: "Konferenční prostory a technika" };

const equipment = [
  "Projekční plátna (sál I 6 × 3,4 m), dataprojektory, TV, notebook",
  "Wi-Fi až 70/70 Mbit/s (možnost zvýšení pro videokonference)",
  "Ozvučení — bezdrátové, hlavové i klopové mikrofony, mobilní ozvučení",
  "Řečnický pult s osvětlením, flipchart, prezentér s laserem",
  "Přenosné panely, závěsné a magnetické tabule",
  "Realizace akcí „na klíč“, doprava, květinová a slavnostní výzdoba",
];

export default function KonferencniProstory() {
  return (
    <>
      <PageHeader
        eyebrow="Firemní akce"
        title="Konferenční prostory a technika"
        intro="Celkem 750 konferenčních míst: 2 sály, 5 učeben, 6 salonků, 2 prostorné haly a 3 letní terasy. Sály I a II jsou datově i zvukově propojeny — až 550 míst."
      />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Reveal>
            <div className="overflow-x-auto border border-gold/30">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="bg-ink text-cream">
                    {["Prostor", "m²", "Divadlo", "Škola", "Ženeva", "Tvar U"].map((h) => (
                      <th key={h} className="px-5 py-4 font-body text-[11px] uppercase tracking-wide-luxe">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {conferenceRooms.map((r, i) => (
                    <tr key={r.name} className={i % 2 ? "bg-sand" : "bg-cream"}>
                      <td className="px-5 py-4 text-sm font-medium text-ink">{r.name}</td>
                      <td className="px-5 py-4 font-body text-sm text-ink-soft">{r.area}</td>
                      <td className="px-5 py-4 font-body text-sm text-ink-soft">{r.divadlo}</td>
                      <td className="px-5 py-4 font-body text-sm text-ink-soft">{r.skola}</td>
                      <td className="px-5 py-4 font-body text-sm text-ink-soft">{r.zeneva}</td>
                      <td className="px-5 py-4 font-body text-sm text-ink-soft">{r.tvarU}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-2">
            {equipment.map((e) => (
              <Reveal key={e}>
                <div className="flex items-start gap-3 border border-gold/25 bg-sand p-5 text-sm text-ink-soft">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" />
                  {e}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center"><Button href="/poptavka-firmy" variant="gold">Poptat firemní akci</Button></div>
        </Container>
      </section>
    </>
  );
}
