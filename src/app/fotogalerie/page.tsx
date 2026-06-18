import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { Gallery } from "@/components/Gallery";
import { gallery } from "@/data/content";

export const metadata: Metadata = { title: "Fotogalerie" };

export default function Fotogalerie() {
  return (
    <>
      <PageHeader eyebrow="Fotogalerie" title="Nahlédněte k nám" intro="Hotel, pokoje, restaurace, konference, wellness i lesní a luční bar na Vysočině." />
      <section className="bg-cream py-20 md:py-28">
        <Container>
          <Gallery items={gallery} />
        </Container>
      </section>
    </>
  );
}
