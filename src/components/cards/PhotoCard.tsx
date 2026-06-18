import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {
  title: string;
  text: string;
  img: string;
  href: string;
}

export function PhotoCard({ title, text, img, href }: Props) {
  return (
    <Link
      href={href}
      className="inner-frame group relative block aspect-[3/4] overflow-hidden"
    >
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 photo-overlay-dark transition-opacity duration-500 group-hover:opacity-90" />
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-9 text-center">
        <h3 className="display text-[26px] font-bold uppercase text-cream">{title}</h3>
        <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-cream/80">{text}</p>
        <span className="mx-auto mt-5 inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-wide-luxe text-gold-soft transition-all duration-300 group-hover:gap-3 group-hover:text-gold">
          Dozvědět se více
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
