import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/content";

export function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          data-reveal
          className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-20 text-center shadow-2xl shadow-black/40 sm:px-12 sm:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-48 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,162,122,0.28),transparent_60%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-bronze/60 to-transparent"
          />

          <p className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-bronze uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-bronze" />
            (05) Kontakt
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-l from-transparent to-bronze" />
          </p>
          <h2
            id="kontakt-title"
            className="mt-8 font-serif text-5xl leading-[0.95] font-light tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Imate ideju
            <br />
            <em className="text-bronze">za projekat?</em>
          </h2>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-slate-400">
            Porudžbine, saradnje ili samo pitanje o nekom komadu — rado ćemo vas čuti.
          </p>
          <Button
            asChild
            className="mt-10 h-14 rounded-full bg-white px-8 text-xs tracking-[0.16em] text-zinc-950 uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-bronze hover:shadow-[0_0_50px_-8px_var(--bronze)]"
          >
            <a href={`mailto:${brand.email}`}>
              <Mail data-icon="inline-start" />
              Javite se
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
