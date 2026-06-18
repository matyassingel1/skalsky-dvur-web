import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-10", className)}>
      {children}
    </div>
  );
}

/* Ozdobný kosočtverec (routa) — line-art SVG */
export function Diamond({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden fill="none">
      <rect
        x="6"
        y="0.7"
        width="7.5"
        height="7.5"
        transform="rotate(45 6 0.7)"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

/* Ozdobný předěl/eyebrow: linka — ◇ — TEXT — ◇ — linka */
export function Ornament({
  children,
  className,
  tone = "gold",
}: {
  children: ReactNode;
  className?: string;
  tone?: "gold" | "cream";
}) {
  const color = tone === "gold" ? "text-gold" : "text-gold-soft";
  return (
    <div className={cn("flex items-center justify-center gap-4", color, className)}>
      <span className="h-px w-10 bg-current opacity-60" />
      <Diamond className="h-2.5 w-2.5" />
      <span className="font-body text-[11px] font-medium uppercase tracking-luxe">
        {children}
      </span>
      <Diamond className="h-2.5 w-2.5" />
      <span className="h-px w-10 bg-current opacity-60" />
    </div>
  );
}

/* Hotelové hvězdy — line-art SVG (ne emoji) */
function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M12 2.5l2.9 6.1 6.6.8-4.9 4.5 1.3 6.6L12 17.9 6.1 20.5l1.3-6.6L2.5 9.4l6.6-.8L12 2.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 text-gold", className)} aria-label={`${count} hvězdičky`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5" />
      ))}
    </span>
  );
}
