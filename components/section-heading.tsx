import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  aside?: string;
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, aside, className }: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "mb-12 grid gap-6 md:mb-16 lg:grid-cols-12 lg:items-end lg:gap-x-10",
        className
      )}
    >
      <p
        data-reveal
        className="flex items-center gap-3 text-xs font-medium tracking-[0.2em] text-bronze uppercase lg:col-span-12"
      >
        <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-bronze to-transparent" />
        {eyebrow}
      </p>
      <h2
        id={id}
        data-reveal
        style={{ "--reveal-delay": 1 } as React.CSSProperties}
        className="font-serif text-4xl leading-[1.05] font-light tracking-tight text-balance text-white sm:text-5xl lg:col-span-7 lg:text-6xl"
      >
        {title}
      </h2>
      {aside && (
        <p
          data-reveal
          style={{ "--reveal-delay": 2 } as React.CSSProperties}
          className="max-w-md text-base leading-relaxed text-slate-400 lg:col-span-5 lg:justify-self-end"
        >
          {aside}
        </p>
      )}
    </header>
  );
}
