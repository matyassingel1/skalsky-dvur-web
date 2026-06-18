import type { Metadata } from "next";
import { display, body } from "./fonts";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ReservationBar } from "@/components/layout/ReservationBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://matyassingel1.github.io/skalsky-dvur-web"),
  title: {
    default: "Hotel Skalský dvůr — Historie a klid v srdci Vysočiny",
    template: "%s — Hotel Skalský dvůr",
  },
  description:
    "Hotel Skalský dvůr na břehu Skalského rybníka uprostřed Vysočiny. 68 pokojů, restaurace, wellness, kongresové prostory a lesní bar. Historie sahající do 16. století.",
  keywords: ["hotel", "Vysočina", "Skalský dvůr", "konference", "wellness", "Bystřice nad Pernštejnem"],
  openGraph: {
    title: "Hotel Skalský dvůr — Historie a klid v srdci Vysočiny",
    description: "Luxusní pobyt, gastronomie a kongresové zázemí na břehu Skalského rybníka.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="bg-cream font-body text-ink">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
        <div aria-hidden className="h-16" />
        <ReservationBar />
      </body>
    </html>
  );
}
