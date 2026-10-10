"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { brand, navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Floating bar turns more opaque after scrolling, hides on scroll down, returns on scroll up.
  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = Math.max(window.scrollY, 0);
      setScrolled(y > 12);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 240);
        lastY = y;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      onFocusCapture={() => setHidden(false)}
      className={cn(
        "fixed inset-x-0 top-0 z-40 px-4 pt-4 transition-transform duration-500 ease-out sm:px-6",
        hidden && !menuOpen && "-translate-y-[130%]"
      )}
    >
      <nav
        aria-label="Glavna navigacija"
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 pr-2 pl-5 backdrop-blur-md transition-all duration-500 sm:pl-6",
          scrolled
            ? "bg-zinc-950/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
            : "bg-white/10"
        )}
      >
        <a
          href="#vrh"
          aria-label={`${brand.name} — nazad na vrh`}
          className="group flex flex-col leading-tight uppercase"
        >
          <span className="text-[0.7rem] font-medium tracking-[0.18em] text-white transition-colors duration-300 group-hover:text-bronze sm:text-xs sm:tracking-[0.24em]">
            {brand.name}
          </span>
          <span className="text-[0.6rem] tracking-[0.22em] text-slate-400">{brand.subtitle}</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-xs tracking-[0.16em] text-slate-300 uppercase transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden h-11 rounded-full bg-white px-5 text-xs tracking-[0.14em] text-zinc-950 uppercase transition-all duration-300 hover:scale-[1.02] hover:bg-bronze hover:shadow-[0_0_30px_-6px_var(--bronze)] sm:inline-flex"
          >
            <a href="#kontakt">
              Javite se
              <ArrowUpRight data-icon="inline-end" />
            </a>
          </Button>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="size-11 rounded-full text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10 lg:hidden"
              >
                <Menu className="size-5" />
                <span className="sr-only">Otvori meni</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              closeLabel="Zatvori meni"
              className="w-full border-white/10 bg-zinc-950/95 data-[side=right]:w-full px-6 pt-24 pb-10 backdrop-blur-xl sm:max-w-md"
            >
              <SheetTitle className="sr-only">Meni</SheetTitle>
              <SheetDescription className="sr-only">Navigacija kroz sekcije sajta</SheetDescription>
              <ul className="flex flex-col">
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <a
                        href={item.href}
                        className="group flex items-baseline gap-5 border-b border-white/10 py-4 font-serif text-4xl font-light text-white transition-all duration-300 hover:pl-2 hover:text-bronze"
                      >
                        <span className="font-sans text-xs tracking-[0.2em] text-bronze">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </a>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-xs tracking-[0.2em] text-slate-400 uppercase">
                {brand.name} — {brand.subtitle}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
