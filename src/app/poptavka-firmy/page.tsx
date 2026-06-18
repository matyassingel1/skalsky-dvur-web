import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { InquiryForm, type Field } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Poptávka firemní akce" };

const fields: Field[] = [
  { name: "jmeno", label: "Jméno a příjmení", required: true },
  { name: "firma", label: "Firma", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "termin", label: "Předpokládaný termín" },
  { name: "osoby", label: "Počet účastníků" },
  { name: "zprava", label: "Doplňující informace", as: "textarea" },
];

export default function PoptavkaFirmy() {
  return (
    <>
      <PageHeader eyebrow="Firemní akce" title="Poptávka firemní akce" intro="Konkrétní nabídku a kalkulaci připravíme individuálně dle vaší poptávky — konference, školení i teambuilding." />
      <section className="bg-cream py-20 md:py-28">
        <Container className="max-w-2xl">
          <InquiryForm fields={fields} subject="Poptávka firemní akce — web Skalský dvůr" />
        </Container>
      </section>
    </>
  );
}
