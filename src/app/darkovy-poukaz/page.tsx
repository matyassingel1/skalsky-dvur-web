import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/primitives";
import { InquiryForm, type Field } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Dárkový poukaz" };

const fields: Field[] = [
  { name: "hodnota", label: "Hodnota poukazu", required: true },
  { name: "obdarovany", label: "Jméno obdarovaného", required: true },
  { name: "osoby", label: "Počet osob" },
  { name: "venovani", label: "Text věnování", as: "textarea" },
  { name: "jmeno", label: "Vaše jméno", required: true },
  { name: "email", label: "Váš e-mail", type: "email", required: true },
  { name: "telefon", label: "Kontaktní telefon", type: "tel", required: true },
  { name: "doruceni", label: "Typ doručení", as: "select", required: true, options: ["E-mailem (PDF)", "Poštou"] },
  { name: "poznamka", label: "Poznámka", as: "textarea" },
];

export default function DarkovyPoukaz() {
  return (
    <>
      <PageHeader eyebrow="Pro radost" title="Dárkový poukaz" intro="Darujte zážitek z dovolené na Vysočině. Poukaz v libovolné hodnotě doručíme e-mailem (PDF) nebo poštou." />
      <section className="bg-cream py-20 md:py-28">
        <Container className="max-w-2xl">
          <InquiryForm fields={fields} subject="Objednávka dárkového poukazu — web Skalský dvůr" submitLabel="Objednat poukaz" />
        </Container>
      </section>
    </>
  );
}
