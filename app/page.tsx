import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Materials } from "@/components/sections/materials";
import { Philosophy } from "@/components/sections/philosophy";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <>
      <a
        href="#sadrzaj"
        className="fixed top-4 left-4 z-50 -translate-y-[200%] rounded-full bg-white px-5 py-3 text-sm text-zinc-950 transition-transform duration-300 focus:translate-y-0"
      >
        Preskoči na sadržaj
      </a>
      <SiteHeader />
      <main id="sadrzaj">
        <Hero />
        <Projects />
        <Philosophy />
        <Materials />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
