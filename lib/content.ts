import type { StaticImageData } from "next/image";

import hero from "@/assets/images/hero.jpg";
import arcoChair from "@/assets/images/arco-chair.jpg";
import formaTable from "@/assets/images/forma-table.jpg";
import monoCabinet from "@/assets/images/mono-cabinet.jpg";
import lineLounge from "@/assets/images/line-lounge.jpg";
import oak from "@/assets/images/oak.jpg";
import walnut from "@/assets/images/walnut.jpg";
import stone from "@/assets/images/stone.jpg";
import aboutWorkshop from "@/assets/images/about-workshop.jpg";

export const brand = {
  name: "Studio Mladen Milošević",
  subtitle: "Dizajn nameštaja",
  email: "hello@forma-studio.com",
};

export const navItems = [
  { href: "#projekti", label: "Projekti" },
  { href: "#filozofija", label: "Filozofija" },
  { href: "#materijali", label: "Materijali" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export const heroImage = {
  src: hero,
  alt: "Stolica od oraha sa visokim lučnim naslonom pored okruglog stola od oraha, uz svetao zid",
  title: "Stolica Nord",
  meta: "Masivni orah, 2025",
};

export type Project = {
  title: string;
  description: string;
  tag: string;
  image: StaticImageData;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Stolica Arco",
    description:
      "Jedan luk od lameliranog hrasta obuhvata telo. Dovoljno lagana da se podigne jednom rukom, dovoljno čvrsta za ceo život.",
    tag: "Hrast · 2025",
    image: arcoChair,
    alt: "Stolica Arco: zakrivljeni ram od savijenog hrasta sa mekim belim sedištem",
  },
  {
    title: "Sto Forma",
    description:
      "Trpezarijski sto od oraha, napravljen za duge večeri. Raširene noge i omekšana ivica pozivaju ljude da sednu bliže.",
    tag: "Orah · 2024",
    image: formaTable,
    alt: "Sto Forma: dugačak trpezarijski sto od oraha sa stolicama u svetloj, otvorenoj prostoriji",
  },
  {
    title: "Komoda Mono",
    description:
      "Jedan neprekinut pregib masivnog hrasta — površina gore, polica dole i ništa suvišno između.",
    tag: "Hrast · 2024",
    image: monoCabinet,
    alt: "Komoda Mono: kompaktan pomoćni element od hrasta na suženim nogama, sa knjigama",
  },
  {
    title: "Sofa Line",
    description:
      "Niska, prostrana sofa nacrtana kao jedna horizontalna linija. Duboko sedište, miran profil, stvorena za spora popodneva.",
    tag: "Vuna i čelik · 2023",
    image: lineLounge,
    alt: "Sofa Line: niska, duboka sofa sa toplo sivom presvlakom u prigušenom betonskom enterijeru",
  },
];

export const philosophy = {
  lead: "Počinjemo od materijala i slušamo šta želi da postane.",
  paragraphs: [
    "Svaki komad počinje pitanjem upotrebe — kako se drži, kako se na njemu sedi, kako se otvara, kako se sa njim živi. Zatim uklanjamo sve što toj svrsi ne služi, a ono što ostane dorađujemo dok proporcije ne postanu same po sebi razumljive.",
    "Rezultat je nameštaj koji ne traži mnogo pažnje, a ipak je nagrađuje. Iskreni spojevi, prirodne završne obrade koje lepo stare i forme dovoljno smirene da nadžive trendove — napravljene da se popravljaju, nasleđuju i koriste generacijama.",
  ],
};

export const principles = [
  { icon: "trees", title: "Materijal", text: "Masivan, prirodan, iskreno obrađen." },
  { icon: "armchair", title: "Funkcija", text: "Upotreba određuje formu, nikada obrnuto." },
  { icon: "ruler", title: "Proporcija", text: "Ravnoteža pronađena rukom, u prirodnoj veličini." },
  { icon: "minus", title: "Jednostavnost", text: "Samo ono što je potrebno — ništa više." },
  { icon: "infinity", title: "Dugotrajnost", text: "Napravljeno da se popravlja i nasleđuje." },
] as const;

export type Material = {
  name: string;
  text: string;
  image?: StaticImageData;
  alt?: string;
};

export const materials: Material[] = [
  {
    name: "Hrast",
    text: "Svetao, otvorenih pora i otporan. Vremenom poprima boju meda.",
    image: oak,
    alt: "Svetla hrastova površina sa izraženom šarom otvorenih pora",
  },
  {
    name: "Orah",
    text: "Duboki čokoladni tonovi i gusta šara koja se oseća pod prstima.",
    image: walnut,
    alt: "Tamna orahova površina sa gustom, talasastom šarom",
  },
  {
    name: "Kamen",
    text: "Brušeni krečnjak i travertin — hladni, tihi, sa prirodnim varijacijama.",
    image: stone,
    alt: "Brušena kamena površina u toplim, prirodnim tonovima",
  },
  {
    name: "Čelik",
    text: "Brušen i patiniran, korišćen štedljivo — za čvrstinu i precizne linije.",
  },
];

export const about = {
  image: aboutWorkshop,
  alt: "Dizajner oblikuje komad struganog drveta u radionici studija",
  title: "Dizajnirano polako, napravljeno da traje.",
  lead: "Mali, nezavisni studio u kome dizajn i izrada nastaju pod istim krovom.",
  paragraphs: [
    "Studio je osnovao dizajner Mladen Milošević, školovan i za arhitekturu i za stolarski zanat. Rad se odvija između table za crtanje i radnog stola: svaki dizajn se testira kao prototip u prirodnoj veličini pre nego što bude predstavljen, a zatim ga u malim serijama izrađuju provereni lokalni majstori.",
    "Svake godine prihvatamo ograničen broj privatnih i poslovnih porudžbina — od jedne stolice do kompletnog opremanja doma.",
  ],
  stats: [
    { label: "Godina iskustva", value: "12" },
    { label: "Komada u kolekciji", value: "40+" },
    { label: "Osnovna materijala", value: "4" },
  ],
};
