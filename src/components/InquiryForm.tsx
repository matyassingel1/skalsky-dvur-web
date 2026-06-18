"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export interface Field {
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea" | "select";
  required?: boolean;
  options?: string[];
}

export function InquiryForm({
  fields,
  subject,
  email = "info@skalskydvur.cz",
  submitLabel = "Odeslat poptávku",
}: {
  fields: Field[];
  subject: string;
  email?: string;
  submitLabel?: string;
}) {
  const [data, setData] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onChange = (name: string, value: string) => setData((d) => ({ ...d, [name]: value }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = fields.map((f) => `${f.label}: ${data[f.name] ?? ""}`).join("\n");
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="border border-gold/40 bg-sand p-9 text-center">
        <Check className="mx-auto h-10 w-10 text-gold-dark" />
        <h3 className="display mt-4 text-2xl font-bold uppercase text-ink">Děkujeme</h3>
        <p className="mt-2 text-sm text-ink-soft">Otevřeli jsme váš e-mailový klient s předvyplněnou poptávkou. Pokud se neotevřel, napište nám na <a className="text-gold-dark underline" href={`mailto:${email}`}>{email}</a>.</p>
      </div>
    );
  }

  const cls = "w-full border border-gold/30 bg-cream px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-gold";

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-gold/30 bg-sand p-7 md:p-9">
      {fields.map((f) => (
        <label key={f.name} className="block">
          <span className="mb-2 block font-body text-[11px] uppercase tracking-wide-luxe text-ink-soft">
            {f.label} {f.required && <span className="text-gold-dark">*</span>}
          </span>
          {f.as === "textarea" ? (
            <textarea rows={4} required={f.required} className={cls} value={data[f.name] ?? ""} onChange={(e) => onChange(f.name, e.target.value)} />
          ) : f.as === "select" ? (
            <select required={f.required} className={cls} value={data[f.name] ?? ""} onChange={(e) => onChange(f.name, e.target.value)}>
              <option value="">— Vyberte —</option>
              {f.options?.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : (
            <input type={f.type ?? "text"} required={f.required} className={cls} value={data[f.name] ?? ""} onChange={(e) => onChange(f.name, e.target.value)} />
          )}
        </label>
      ))}
      <label className="flex items-start gap-3 text-xs text-ink-soft">
        <input type="checkbox" required className="mt-0.5" />
        <span>Souhlasím se zpracováním osobních údajů (GDPR).</span>
      </label>
      <button type="submit" className="inline-flex w-full items-center justify-center gap-2.5 bg-gold px-6 py-4 font-body text-[12px] font-medium uppercase tracking-wide-luxe text-white transition-colors hover:bg-gold-dark">
        <Send className="h-4 w-4" /> {submitLabel}
      </button>
    </form>
  );
}
