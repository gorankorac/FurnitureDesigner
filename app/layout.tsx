import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";

import { RevealObserver } from "@/components/reveal-observer";
import "./globals.css";

// latin-ext covers the Serbian Latin letters č ć š ž đ.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Studio Mladen Milošević — Nameštaj sa karakterom",
  description:
    "Studio Mladen Milošević — dizajn nameštaja. Predmeti oblikovani oko materijala, funkcije i bezvremenske forme.",
  other: { google: "notranslate" },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
};

// Marks the document as JS-enabled before first paint so reveal states never flash.
const jsFlag = `document.documentElement.classList.add("js")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr-Latn"
      translate="no"
      className={`${inter.variable} ${newsreader.variable} notranslate antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body className="min-h-dvh overflow-x-hidden">
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
