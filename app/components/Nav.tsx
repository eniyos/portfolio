"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "../lib/data";

const sections = ["works", "stack", "about", "contact"];

/** Find which section is currently "in view" (closest one above ~40% mark). */
function useActive(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    const calc = () => {
      const probe = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top + window.scrollY <= probe) {
          current = id;
        }
      }
      setActive(current);
    };
    calc();
    window.addEventListener("scroll", calc, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", calc);
      window.removeEventListener("resize", calc);
    };
  }, [ids]);
  return active;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActive(sections);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full px-4 sm:px-6 md:px-10 lg:px-16 transition-all duration-300 ease-out ${
        scrolled ? "pt-4" : "pt-9 md:pt-12 lg:pt-14"
      }`}
    >
      <nav
        className={`relative mx-auto flex w-full max-w-[1280px] items-center justify-between transition-all duration-300 ease-out border ${
          scrolled
            ? "bg-card/85 backdrop-blur-xl border-border shadow-[0_1px_0.5px_#fff_inset,0_12px_28px_-14px_rgba(0,0,0,0.3)] rounded-full pl-5 pr-3 h-14"
            : "bg-transparent border-transparent rounded-full px-0 h-14"
        }`}
      >
        <div className="shrink-0">
          <a href="#" className="font-serif text-xl tracking-tight text-foreground whitespace-nowrap">
            {site.name.toLowerCase()}
          </a>
        </div>

        <div className="hidden lg:flex items-center gap-8 xl:gap-11">
          {sections.map((id) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative text-sm pb-0.5 transition-colors duration-200 whitespace-nowrap ${
                  isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {id}
                <span
                  className={`absolute left-0 right-0 -bottom-[3px] h-px origin-left bg-foreground transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${site.email}`}
            className="hidden lg:inline-flex items-center justify-center h-9 px-5 rounded-full text-sm font-semibold text-white transition-transform duration-100 active:scale-[0.98]"
            style={{
              background: "linear-gradient(180deg, #ff7a3d 0%, #ff5a1f 100%)",
              boxShadow:
                "0 1px 0.5px #ffffff80 inset, 0 2px 2px #ffffffaa inset, 0 -2px 4px #00000026 inset, 0 1px 0 #0000001a, 0 6px 10px -4px #d62a0066",
            }}
          >
            get in touch
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden grid size-11 place-items-center text-foreground rounded-full transition-all duration-200 hover:bg-black/5"
            aria-label={mobileOpen ? "Close" : "Menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="6" x2="20" y2="6" className="origin-center transition-transform duration-300 ease-out" style={mobileOpen ? { transform: "translateY(6px) rotate(45deg)" } : undefined} />
              <line x1="4" y1="12" x2="20" y2="12" className="transition-opacity duration-200 ease-out" style={mobileOpen ? { opacity: 0 } : undefined} />
              <line x1="4" y1="18" x2="20" y2="18" className="origin-center transition-transform duration-300 ease-out" style={mobileOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile / tablet overlay */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className="absolute inset-0 w-full h-full cursor-default bg-background/80 backdrop-blur-sm"
        />
        <div className="relative inset-0 w-full h-full flex flex-col items-center justify-center gap-10 px-8">
          <nav className="flex flex-col items-center gap-2">
            {sections.map((id, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMobileOpen(false)}
              style={{ animationDelay: `${80 + i * 70}ms` }}
              className={`font-serif text-4xl tracking-tight py-2 text-center transition-colors hover:text-foreground ${
                mobileOpen ? "animate-fade-up" : "opacity-0"
              }`}
            >
              {id}
            </a>
          ))}
          </nav>
          <a
            href={`mailto:${site.email}`}
            onClick={() => setMobileOpen(false)}
            className={`text-sm text-muted hover:text-foreground transition-colors ${mobileOpen ? "animate-fade-in" : "opacity-0"}`}
          >
            {site.email}
          </a>
        </div>
      </div>
    </header>
  );
}