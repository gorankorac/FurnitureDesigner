import { ArrowUp } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { brand, navItems } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <a href="#vrh" aria-label={`${brand.name} — nazad na vrh`} className="group flex shrink-0 flex-col gap-3">
            <span className="text-xs tracking-[0.2em] text-slate-400 uppercase">Studio</span>
            <span className="font-serif text-5xl leading-none font-light text-white transition-colors duration-300 group-hover:text-bronze sm:text-6xl sm:whitespace-nowrap">
              Mladen Milošević
            </span>
          </a>

          <nav aria-label="Navigacija u podnožju">
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-full px-3 py-2 text-xs tracking-[0.16em] text-slate-400 uppercase transition-all duration-300 hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. Sva prava zadržana.
          </p>
          <a
            href="#vrh"
            className="group inline-flex items-center gap-2 tracking-[0.16em] text-slate-400 uppercase transition-all duration-300 hover:text-white"
          >
            Nazad na vrh
            <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
