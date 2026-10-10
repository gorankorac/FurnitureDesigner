import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/content";
import { cn } from "@/lib/utils";

// Bento placement per project: tall feature, two stacked, one wide panorama.
const layout = [
  { cell: "lg:col-span-5 lg:row-span-2", media: "aspect-[4/5] lg:aspect-auto lg:h-full", sizes: "(min-width: 1024px) 460px, 100vw" },
  { cell: "lg:col-span-7", media: "aspect-[4/5] sm:aspect-[16/10]", sizes: "(min-width: 1024px) 640px, 100vw" },
  { cell: "lg:col-span-7", media: "aspect-[4/5] sm:aspect-[16/10]", sizes: "(min-width: 1024px) 640px, 100vw" },
  { cell: "lg:col-span-12", media: "aspect-[4/5] sm:aspect-[21/9]", sizes: "(min-width: 1024px) 1150px, 100vw" },
];

export function Projects() {
  return (
    <section id="projekti" aria-labelledby="projekti-title" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="projekti-title"
          eyebrow="(01) Izabrani radovi"
          title="Izabrani projekti"
          aside="Četiri komada iz studija — svaki nastajao polako, kroz skice, prototipove i mnogo vremena provedenog u radionici."
        />

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-reveal
              style={{ "--reveal-delay": index % 2 } as React.CSSProperties}
              className={cn(
                "group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/30 transition-all duration-500 hover:scale-[1.02] hover:border-bronze/40 hover:shadow-[0_0_60px_-20px_var(--bronze)]",
                layout[index].cell
              )}
            >
              <div className={cn("relative overflow-hidden", layout[index].media)}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  placeholder="blur"
                  sizes={layout[index].sizes}
                  className="absolute inset-0 size-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs tracking-[0.2em] text-bronze">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Badge
                    variant="outline"
                    className="h-6 rounded-full border-white/15 bg-zinc-950/40 px-3 text-[0.65rem] tracking-[0.16em] text-slate-300 uppercase backdrop-blur-md"
                  >
                    {project.tag}
                  </Badge>
                </div>
                <h3 className="font-serif text-3xl font-light text-white sm:text-4xl">{project.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-slate-400">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
