// Reálná data z skalskydvur.cz — nic se nevymýšlí.
export const site = {
  name: "Hotel Skalský dvůr",
  wordmark: "SKALSKÝ DVŮR",
  region: "HOTEL · VYSOČINA",
  phone: "606 725 502",
  phoneIntl: "+420606725502",
  email: "info@skalskydvur.cz",
  address: {
    street: "Lísek 52",
    city: "593 01 Bystřice nad Pernštejnem",
    full: "Lísek 52, 593 01 Bystřice nad Pernštejnem",
  },
  operator: "Alteris s.r.o., Na Stezce 1330/3, Praha 10 – Vršovice",
  ico: "27862313",
  dic: "CZ27862313",
  gps: "49°33'53.233\"N, 16°10'43.612\"E",
  facebook: "https://www.facebook.com/skalskydvur",
  instagram: "https://www.instagram.com/hotel.skalsky.dvur/",
  distances: [
    { place: "Nové Město na Moravě", km: "8,5 km" },
    { place: "Bystřice nad Pernštejnem", km: "8,5 km" },
  ],
  origin: "https://www.skalskydvur.cz",
  mapsQuery: "Hotel Skalský dvůr, Lísek 52",
} as const;

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  {
    label: "O hotelu",
    href: "/hotel",
    children: [
      { label: "Hotel Skalský dvůr", href: "/hotel" },
      { label: "Historie Skalského dvora", href: "/historie" },
    ],
  },
  {
    label: "Ubytování",
    href: "/ubytovani",
    children: [
      { label: "Pokoje Standard", href: "/ubytovani#standard" },
      { label: "Pokoje Superior", href: "/ubytovani#superior" },
      { label: "Dárkové poukazy", href: "/darkovy-poukaz" },
    ],
  },
  {
    label: "Restaurace",
    href: "/restaurace",
    children: [
      { label: "Restaurace & terasy", href: "/restaurace" },
      { label: "Oslavy, svatby a události", href: "/restaurace" },
    ],
  },
  {
    label: "Firemní akce",
    href: "/firemni-akce",
    children: [
      { label: "Konferenční prostory a technika", href: "/konferencni-prostory" },
      { label: "Firemní teambuilding", href: "/firemni-akce" },
    ],
  },
  {
    label: "Volný čas",
    href: "/volny-cas",
    children: [
      { label: "Aktivity ve volném čase", href: "/volny-cas" },
      { label: "Lesní a luční bar", href: "/lesni-a-lucni-bar" },
    ],
  },
  { label: "Fotogalerie", href: "/fotogalerie" },
  { label: "Kontakt", href: "/kontakt" },
];
