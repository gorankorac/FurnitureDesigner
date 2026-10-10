import Image from "next/image";

import { Card } from "@/components/ui/card";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="o-nama" aria-labelledby="o-nama-title" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:gap-5 sm:px-6 lg:grid-cols-12">
        <figure
          data-reveal
          className="group relative overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/30 lg:col-span-6 lg:row-span-2"
        >
          <Image
            src={about.image}
            alt={about.alt}
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="aspect-[4/3] size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03] lg:aspect-auto"
          />
        </figure>

        <Card
          data-reveal
          style={{ "--reveal-delay": 1 } as React.CSSProperties}
          className="gap-0 rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-lg shadow-black/20 ring-0 sm:p-10 lg:col-span-6"
        >
          <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-bronze uppercase">
            <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-bronze to-transparent" />
            (04) O studiju
          </p>
          <h2
            id="o-nama-title"
            className="mt-6 font-serif text-4xl leading-[1.05] font-light tracking-tight text-balance text-white sm:text-5xl"
          >
            {about.title}
          </h2>
          <p className="mt-6 font-serif text-xl leading-snug font-light text-white/90">{about.lead}</p>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-slate-400">
            {about.paragraphs.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </Card>

        <dl className="grid grid-cols-3 gap-4 sm:gap-5 lg:col-span-6">
          {about.stats.map((stat, index) => (
            <Card
              key={stat.label}
              data-reveal
              style={{ "--reveal-delay": index + 2 } as React.CSSProperties}
              className="flex-col-reverse justify-end gap-2 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-5 ring-0 transition-all duration-300 hover:scale-[1.02] hover:border-bronze/40 sm:p-6"
            >
              <dt className="text-[0.65rem] leading-snug tracking-[0.14em] text-slate-400 uppercase sm:text-xs">
                {stat.label}
              </dt>
              <dd className="font-serif text-4xl font-light text-white sm:text-5xl">{stat.value}</dd>
            </Card>
          ))}
        </dl>
      </div>
    </section>
  );
}
