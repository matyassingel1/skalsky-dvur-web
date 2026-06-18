import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { InquiryForm, type Field } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Poptávka pobytu" };

const fields: Field[] = [
  { name: "jmeno", label: "Jméno a příjmení", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telefon", label: "Telefon", type: "tel", required: true },
  { name: "prijezd", label: "Datum příjezdu", type: "date" },
  { name: "odjezd", label: "Datum odjezdu", type: "date" },
  { name: "osoby", label: "Počet osob" },
  { name: "zprava", label: "Doplňující informace", as: "textarea" },
];

export default function PoptavkaPobyt() {
  return (
    <>
      <PageHeader eyebrow="Rezervace" title="Poptávka pobytu" intro="Nemáme živý rezervační systém — termín potvrdíme osobně. Vyplňte poptávku a my se vám obratem ozveme." />
      <section className="bg-cream py-20 md:py-28">
        <Container className="max-w-2xl">
          <InquiryForm fields={fields} subject="Poptávka pobytu — web Skalský dvůr" />
        </Container>
      </section>
    </>
  );
}
