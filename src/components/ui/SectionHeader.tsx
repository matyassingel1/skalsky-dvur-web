import { Reveal } from "@/components/animations/Reveal";
import { Ornament } from "./primitives";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  tone?: "ink" | "light";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "ink",
  className,
}: Props) {
  const titleColor = tone === "light" ? "text-cream" : "text-ink";
  const introColor = tone === "light" ? "text-cream/75" : "text-ink-soft";
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
        className,
      )}
    >
      <Reveal>
        <div className={align === "center" ? "" : "flex"}>
          <Ornament tone={tone === "light" ? "cream" : "gold"}>{eyebrow}</Ornament>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "display mt-6 text-[clamp(28px,4vw,52px)] font-bold uppercase",
            titleColor,
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <p className={cn("mt-6 text-[17px] leading-relaxed", introColor)}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
