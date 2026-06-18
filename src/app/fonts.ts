import { Playfair_Display, Montserrat } from "next/font/google";

// Display — Playfair Display (didone, high contrast) — nadpisy verzálkami
export const display = Playfair_Display({
  subsets: ["latin", "latin-ext"], // latin-ext = české znaky
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});

// Body / navigace / tlačítka — Montserrat
export const body = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--ff-body",
  display: "swap",
});
