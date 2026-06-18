// Reálný obsah převzatý z skalskydvur.cz

export const services = [
  {
    title: "Ubytování",
    text: "68 pokojů se 148 lůžky — od útulných pokojů Standard po čtyřhvězdičkové apartmány Superior, s výhledem do přírody Vysočiny.",
    img: "/foto/g5/ubytovani.jpeg",
    href: "/ubytovani",
  },
  {
    title: "Restaurace",
    text: "Tradiční česká gastronomie v moderním odlehčeném pojetí, s důrazem na čerstvost a lokální suroviny.",
    img: "/foto/g16/restaurace.jpeg",
    href: "/restaurace",
  },
  {
    title: "Wellness & volný čas",
    text: "Krytý bazén s protiproudem, sauna, masáže i sportoviště uprostřed přírody Vysočiny.",
    img: "/foto/content/VolnyCas/bazen.jpeg",
    href: "/volny-cas",
  },
];

export const rooms = [
  {
    id: "standard",
    name: "Standard",
    stars: 3,
    img: "/foto/g5/standard.jpg",
    text: "Útulné dvoulůžkové, dvoulůžkové s přistýlkou i čtyřlůžkové pokoje v 1.–3. nadzemním podlaží s výhledem do přírody, až 33 m². Vybavené LCD televizorem a koupelnou se sprchovým koutem; čtyřlůžkové i lednicí. Pokoje jsou vyzdobeny fotografiemi přírodních i historických krás regionů Žďárska, Bystřicka a Novoměstska od pana Jiřího Hudce z nedaleké obce Lísek. Možnost oddělených lůžek.",
    href: "/ubytovani#standard",
  },
  {
    id: "superior",
    name: "Superior",
    stars: 4,
    img: "/foto/g5/superior.jpeg",
    text: "9 apartmá a 1 dvoulůžkový pokoj v nejvyšším 4. nadzemním podlaží s krásným výhledem do přírody, až 40 m². Vybavené LCD televizorem v ložnici i pokoji, trezorem, fénem, lednicí a prostornou koupelnou se sprchovým koutem nebo vanou. Ložnice s možností oddělených lůžek.",
    href: "/ubytovani#superior",
  },
];

export const conferenceStats = [
  { value: "750", label: "konferenčních míst" },
  { value: "770 m²", label: "konferenční sál" },
  { value: "5 + 6", label: "učeben a salonků" },
  { value: "70/70", label: "Mbit/s připojení" },
];

export const conferenceRooms = [
  { name: "Konferenční sál I", area: "194", divadlo: "250", skola: "140", zeneva: "52", tvarU: "68" },
  { name: "Konferenční sál II", area: "336", divadlo: "300", skola: "182", zeneva: "64", tvarU: "91" },
  { name: "Učebna I", area: "76", divadlo: "90", skola: "56", zeneva: "36", tvarU: "62" },
  { name: "Učebna II", area: "40", divadlo: "35", skola: "24", zeneva: "24", tvarU: "20" },
  { name: "Učebna III (krbový salonek)", area: "78", divadlo: "80", skola: "28", zeneva: "24", tvarU: "40" },
  { name: "Šafářův dům", area: "24", divadlo: "20", skola: "12", zeneva: "16", tvarU: "10" },
];

export const congressPricing = [
  { name: "Školení pro 20 až 50 osob", price: "od 1 790 Kč", unit: "/ osoba" },
  { name: "Konference pro 50 až 100 osob", price: "od 1 760 Kč", unit: "/ osoba" },
  { name: "Konference pro 100 až 200 osob", price: "od 1 720 Kč", unit: "/ osoba" },
  { name: "Firemní teambuilding", price: "od 2 020 Kč", unit: "/ osoba" },
];

export const packages = [
  {
    title: "Svatováclavský pobyt 2026",
    term: "25. – 28. 9. 2026",
    img: "/foto/g10/g2.jpg",
    text: "Prodloužený svatováclavský víkend uprostřed barevné podzimní Vysočiny.",
  },
  {
    title: "Firemní teambuilding",
    term: "od 2 020 Kč / osoba · 1 noc",
    img: "/foto/content/Konference/konf.jpeg",
    text: "Studánková cesta za poznáním, plná penze formou bufetu, vstup do bazénu a výběr výletové trasy z Výletokoutku.",
  },
  {
    title: "Rekreační pobyty na Vysočině",
    term: "celoroční nabídka",
    img: "/foto/g10/g3.jpg",
    text: "Dovolená pro aktivní rodiny, cyklisty i seniory v srdci Žďárských vrchů.",
  },
];

export const products = [
  {
    name: "Skalský vánek",
    detail: "Bylinný likér z 15 druhů léčivých bylin Vysočiny · 37 % · 0,5 l",
    img: "/foto/content/NaseProdukty/vanek.jpeg",
  },
  {
    name: "Bystřická aronie",
    detail: "Originální lihovina města Bystřice nad Pernštejnem · 37 % · 0,2 / 0,5 l",
    img: "/foto/content/NaseProdukty/aronie.jpeg",
  },
  {
    name: "Pernštejnský elixír",
    detail: "Bylinný likér s keramickou pečetí rodu Pernštejnů · 35 % · 0,2 / 0,5 l",
    img: "/foto/content/NaseProdukty/elixir.jpeg",
  },
];

export const historyMilestones = [
  { year: "16.–17. stol.", text: "Počátky šlechtického dvora za Václava Plesa Heřmanského ze Sloupna. Poprvé připomínán jako Lhotecký dvůr roku 1609." },
  { year: "1731", text: "Dvůr s bystřickým panstvím připadl Arnoštu Matyáši Mitrovskému z Nemyšle." },
  { year: "18. stol.", text: "Barokní přestavba — vznik „zámečku“ se souměrnou dispozicí, oválným sálem a kartuší se znakem Mitrovských." },
  { year: "1945–1976", text: "Po státní správě a devastaci za semenářského statku předáno bohuňovskému JZD s myšlenkou rekreačního zařízení." },
  { year: "1981–1985", text: "Výstavba nového hotelu (zahájena 1. 8. 1981). Zkušební provoz 20. 5. 1985, dokončeno 31. 8. 1985." },
  { year: "2000–2009", text: "Dostavba a rekonstrukce celého areálu — krytý bazén, velký konferenční sál s terasou, nové ubytovací patro." },
  { year: "2020–2021", text: "Vybudován lesní a luční bar a Výletokoutek; zahájena výstavba okružních tras s Klubem českých turistů." },
];

export const wellnessFacts = [
  "Krytý bazén s protiproudem a dnovou vířivkou, 7:00–22:00",
  "Teplota vody 28 °C, hloubka 1,3 m, délka 9,5 m",
  "Sauna až pro 8 osob (po rezervaci)",
  "Klasické i speciální masáže",
  "Kulečník, stolní tenis, elektronické šipky",
  "2 antukové tenisové kurty, volejbal a nohejbal",
];

export const gallery = [
  { src: "/foto/content/hotel-letecky3.jpg", title: "Hotel z ptačí perspektivy" },
  { src: "/foto/g10/panorama.jpg", title: "Panorama areálu" },
  { src: "/foto/g16/restaurace.jpeg", title: "Restaurace" },
  { src: "/foto/g16/rest1.jpeg", title: "Gastronomie" },
  { src: "/foto/g5/ubytovani.jpeg", title: "Ubytování" },
  { src: "/foto/g5/superior.jpeg", title: "Apartmá Superior" },
  { src: "/foto/g5/pokoj1.jpg", title: "Pokoj" },
  { src: "/foto/content/VolnyCas/bazen.jpeg", title: "Krytý bazén" },
  { src: "/foto/content/VolnyCas/masaz.jpeg", title: "Masáže" },
  { src: "/foto/content/VolnyCas/tenis.jpeg", title: "Tenisové kurty" },
  { src: "/foto/content/VolnyCas/lesnibar.jpeg", title: "Lesní bar u víly Helenky" },
  { src: "/foto/content/VolnyCas/lucnibar.jpeg", title: "Luční bar u dráčka Poplety" },
  { src: "/foto/content/Konference/sal1.jpeg", title: "Konferenční sál I" },
  { src: "/foto/content/Konference/sal2.jpeg", title: "Konferenční sál II" },
  { src: "/foto/g10/g1.jpg", title: "Areál hotelu" },
  { src: "/foto/g10/g4.jpg", title: "Skalský rybník" },
];
