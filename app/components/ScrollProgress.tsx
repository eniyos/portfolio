"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;

    const update = () => {
      raf = 0;
      const vh = window.innerHeight;

      const measure = (id: string) => {
        const el = document.getElementById(id);
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        const total = r.height + vh;
        const passed = vh - r.top;
        return Math.max(0, Math.min(1, passed / total));
      };

      root.style.setProperty("--scroll-section-services", measure("stack").toFixed(4));
      root.style.setProperty("--scroll-section-about", measure("about").toFixed(4));
      root.style.setProperty("--scroll-section-works", measure("works").toFixed(4));
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}
