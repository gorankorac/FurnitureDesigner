import Image from "next/image";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { materials } from "@/lib/content";

export function Materials() {
  return (
    <section id="materijali" aria-labelledby="materijali-title" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="materijali-title"
          eyebrow="(03) Materijali"
          title="Kratka lista iskrenih materijala"
          aside="Namerno radimo sa malom paletom, birajući materijale po čvrstoći, teksturi i načinu na koji stare."
        />

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {materials.map((material, index) => (
            <li
              key={material.name}
              data-reveal
              style={{ "--reveal-delay": index } as React.CSSProperties}
            >
              <Card className="group h-full gap-0 rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-lg shadow-black/20 ring-0 transition-all duration-300 hover:scale-[1.02] hover:border-bronze/40 hover:shadow-[0_0_50px_-20px_var(--bronze)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  {material.image ? (
                    <Image
                      src={material.image}
                      alt={material.alt ?? ""}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 270px, (min-width: 640px) 50vw, 100vw"
                      className="absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  ) : (
                    // Brushed-steel swatch drawn with gradients.
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0_1px,transparent_1px_3px),linear-gradient(135deg,#52525b,#a1a1aa_45%,#3f3f46)] transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="px-3 pt-5 pb-3">
                  <h3 className="font-serif text-2xl font-light text-white">{material.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{material.text}</p>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
