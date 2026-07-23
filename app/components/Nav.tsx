"use client";

import { useEffect, useState } from "react";
import { site } from "../lib/data";

const sections = ["works", "stack", "about", "contact"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full px-6 md:px-10 lg:px-16 transition-all duration-300 ease-out ${
        scrolled ? "pt-4 pb-4" : "pt-8 md:pt-12 lg:pt-14 pb-4"
      }`}
    >
      <nav
        className={`relative mx-auto flex w-full max-w-[1280px] items-center justify-between transition-all duration-300 ease-out border ${
          scrolled
            ? "bg-card border-border shadow-sm rounded-xl px-4 sm:px-6 h-12"
            : "bg-transparent border-transparent px-0 h-12"
        }`}
      >
        <a href="#" className="font-serif text-xl tracking-tight text-foreground shrink-0">
          {site.name.toLowerCase()}
        </a>

        <div className="hidden lg:flex items-center gap-12 xl:gap-16">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="text-sm text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {id}
            </a>
          ))}
        </div>

        <button type="button" onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden grid size-11 place-items-center -mr-2 text-foreground rounded-full transition-all duration-200 hover:bg-black/5"
          aria-label={mobileOpen ? "Close" : "Menu"}
          aria-expanded={mobileOpen} aria-controls="mobile-menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <line x1="4" y1="6" x2="20" y2="6" className="origin-center transition-transform duration-300 ease-out" style={mobileOpen ? { transform: "translateY(6px) rotate(45deg)" } : undefined} />
            <line x1="4" y1="12" x2="20" y2="12" className="transition-opacity duration-200 ease-out" style={mobileOpen ? { opacity: 0 } : undefined} />
            <line x1="4" y1="18" x2="20" y2="18" className="origin-center transition-transform duration-300 ease-out" style={mobileOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined} />
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}`} aria-hidden={!mobileOpen}>
        <button type="button" tabIndex={-1} aria-hidden="true" onClick={() => setMobileOpen(false)} className="absolute inset-0 w-full h-full cursor-default bg-background/80 backdrop-blur-sm" />
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-10 px-8 transition-all duration-300 ease-out ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}`}>
          <nav className="flex flex-col items-center gap-2">
            {sections.map((id) => (
              <a key={id} href={`#${id}`} onClick={() => setMobileOpen(false)}
                className="font-serif text-4xl text-foreground/90 tracking-tight py-2 text-center transition-colors hover:text-foreground">{id}</a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
