import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: "gold" | "outline" | "outlineLight" | "link";
  className?: string;
}

const variants = {
  gold: "bg-gold text-white hover:bg-gold-dark px-8 py-3.5",
  outline: "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-cream px-8 py-3.5",
  outlineLight:
    "border border-white/45 text-white hover:bg-white hover:text-ink px-8 py-3.5",
  link: "text-ink underline decoration-gold decoration-1 underline-offset-[6px] hover:text-gold-dark",
};

export function Button({ children, href, variant = "gold", className }: ButtonProps) {
  const external = /^(https?:|tel:|mailto:)/.test(href);
  const cls = cn(
    "inline-flex items-center justify-center font-body text-[12px] font-medium uppercase tracking-wide-luxe transition-colors duration-300",
    variants[variant],
    className,
  );
  if (external) {
    return (
      <a
        href={href}
        className={cls}
        {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
