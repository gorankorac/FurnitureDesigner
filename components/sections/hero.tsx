import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { heroImage } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="vrh"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 lg:pb-24"
    >
      {/* Ambient glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[36rem] rounded-full bg-[radial-gradient(circle,rgba(200,162,122,0.22),transparent_65%)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -right-40 -z-10 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.12),transparent_65%)] blur-2xl"
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <Badge
            data-reveal
            variant="outline"
            className="mb-8 h-7 rounded-full border-white/10 bg-white/5 px-3 text-[0.7rem] tracking-[0.2em] text-slate-300 uppercase"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-bronze shadow-[0_0_10px_var(--bronze)]" />
            Studio Mladen Milošević
          </Badge>

          <h1
            id="hero-title"
            data-reveal
            style={{ "--reveal-delay": 1 } as React.CSSProperties}
            className="font-serif text-6xl leading-[0.95] font-light tracking-tight text-white sm:text-7xl lg:text-8xl"
          >
            Nameštaj
            <br />
            sa{" "}
            <em className="bg-gradient-to-r from-bronze via-amber-200 to-bronze bg-clip-text text-transparent">
              karakterom.
            </em>
          </h1>

          <p
            data-reveal
            style={{ "--reveal-delay": 2 } as React.CSSProperties}
            className="mt-8 max-w-md text-lg leading-relaxed text-slate-400"
          >
            Predmeti oblikovani oko materijala, funkcije i bezvremenske&nbsp;forme.
          </p>

          <div
            data-reveal
            style={{ "--reveal-delay": 3 } as React.CSSProperties}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button
              asChild
              className="h-12 rounded-full bg-white px-7 text-xs tracking-[0.16em] text-zinc-950 uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-bronze hover:shadow-[0_0_40px_-8px_var(--bronze)]"
            >
              <a href="#projekti">
                Pogledaj projekte
                <ArrowRight data-icon="inline-end" className="transition-transform duration-300 group-hover/button:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full border-white/15 bg-white/5 px-7 text-xs tracking-[0.16em] text-white uppercase transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-white/10"
            >
              <a href="#kontakt">Javite se</a>
            </Button>
          </div>
        </div>

        <figure
          data-reveal
          style={{ "--reveal-delay": 2 } as React.CSSProperties}
          className="group relative lg:col-span-6"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-px -z-10 rounded-[2rem] bg-gradient-to-br from-bronze/40 via-transparent to-white/10 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              priority
              placeholder="blur"
              sizes="(min-width: 1024px) 560px, 100vw"
              className="aspect-[4/5] w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />
            <figcaption className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-zinc-950/50 px-5 py-4 text-xs tracking-[0.16em] uppercase backdrop-blur-md">
              <span className="text-white">{heroImage.title}</span>
              <span className="text-slate-400">{heroImage.meta}</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
