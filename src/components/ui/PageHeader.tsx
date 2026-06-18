import { Reveal } from "@/components/animations/Reveal";
import { Container, Ornament } from "./primitives";

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
}

export function PageHeader({ eyebrow, title, intro }: Props) {
  return (
    <section className="monogram-s relative overflow-hidden border-b border-gold/30 bg-cream pt-40 pb-16 text-center md:pt-48 md:pb-20">
      <Container className="relative z-10">
        <Reveal>
          <div className="flex justify-center">
            <Ornament>{eyebrow}</Ornament>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mx-auto mt-6 max-w-4xl text-[clamp(34px,5.5vw,72px)] font-bold uppercase text-ink">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-ink-soft">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
