import { Armchair, Infinity as InfinityIcon, Minus, Ruler, Trees } from "lucide-react";

import { Card } from "@/components/ui/card";
import { philosophy, principles } from "@/lib/content";

const icons = {
  trees: Trees,
  armchair: Armchair,
  ruler: Ruler,
  minus: Minus,
  infinity: InfinityIcon,
};

const cardClass =
  "rounded-3xl border border-white/10 bg-white/[0.03] shadow-lg shadow-black/20 ring-0 transition-all duration-300 hover:scale-[1.02] hover:border-white/20 hover:bg-white/[0.05]";

export function Philosophy() {
  return (
    <section
      id="filozofija"
      aria-labelledby="filozofija-title"
      className="relative isolate overflow-hidden py-20 sm:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 size-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(200,162,122,0.12),transparent_60%)] blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          {/* Statement tile */}
          <Card data-reveal className={`${cardClass} gap-0 p-8 sm:p-10 lg:col-span-7 lg:row-span-2`}>
            <p className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-bronze uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-bronze to-transparent" />
              (02) Filozofija
            </p>
            <h2
              id="filozofija-title"
              className="mt-8 font-serif text-5xl leading-[0.95] font-light tracking-tight text-white sm:text-7xl"
            >
              Manje,
              <br />
              <em className="text-bronze">ali bolje.</em>
            </h2>
            <p className="mt-10 font-serif text-2xl leading-snug font-light text-white/90">{philosophy.lead}</p>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-400">
              {philosophy.paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>{text}</p>
              ))}
            </div>
          </Card>

          {/* Principle tiles */}
          <ol className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:col-span-5 lg:row-span-2">
            {principles.map((principle, index) => {
              const Icon = icons[principle.icon];
              return (
                <li
                  key={principle.title}
                  data-reveal
                  style={{ "--reveal-delay": index } as React.CSSProperties}
                  className={index === principles.length - 1 ? "sm:col-span-2" : undefined}
                >
                  <Card className={`${cardClass} h-full gap-0 p-6`}>
                    <div className="flex items-center justify-between">
                      <span className="flex size-10 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-bronze/25 to-transparent text-bronze">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-xs tracking-[0.2em] text-slate-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="mt-6 font-serif text-2xl font-light text-white">{principle.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{principle.text}</p>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
