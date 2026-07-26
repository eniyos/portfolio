"use client";

import React from "react";
import { FlutedGlass } from "@paper-design/shaders-react";
import Link from "next/link";
import { site } from "@/app/lib/data";

/* ── Tiny SVG icons ── */

const IconUser = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <circle cx="12" cy="8" r="5" />
    <path d="M3 21a9 9 0 0 1 18 0" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
  </svg>
);

const IconLayers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <polygon points="12 2 22 8.5 12 15 2 8.5" />
    <polyline points="2 15.5 12 22 22 15.5" />
    <polyline points="2 11.5 12 18 22 11.5" />
  </svg>
);

const IconMailSm = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4 12 13 2 4" />
  </svg>
);

const IconArrowUp = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

const IconExternal = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="block">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Data ── */

const navLinks = [
  { name: "About", href: "#about", icon: <IconUser /> },
  { name: "Works", href: "#works", icon: <IconBriefcase /> },
  { name: "Stack", href: "#stack", icon: <IconLayers /> },
  { name: "Contact", href: "#contact", icon: <IconMailSm /> },
] as const;

const connectLinks = [
  { name: "GitHub", href: site.social.github },
  { name: "X", href: site.social.x },
  { name: "LinkedIn", href: site.social.linkedin },
] as const;

const scrollToTop = () => {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

/* ── Shared link hover class ── */

const linkHover =
  "hover:underline decoration-1 underline-offset-4 decoration-foreground/30 transition-all duration-200";

/* ── Component ── */

export default function FooterSection5() {
  return (
    <footer className="w-full relative overflow-hidden antialiased [font-synthesis:none]">
      <div
        className="relative w-full z-10"
        style={{ backgroundColor: "var(--accent)" }}
      >
        {/* Background shader */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FlutedGlass
            size={0.89}
            shape="lines"
            angle={0}
            distortionShape="prism"
            distortion={0.5}
            shift={0}
            blur={0}
            edges={0.25}
            stretch={0}
            scale={1.11}
            fit="cover"
            highlights={0.1}
            shadows={0.2}
            grainMixer={0.1}
            grainOverlay={0.1}
            colorBack="#00000000"
            colorHighlight="#FFFFFF"
            colorShadow="#000000"
            className="w-full h-full bg-transparent"
          />
        </div>

        {/* ── Main content grid ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-10">
            {/* Column 1 — Brand */}
            <div className="lg:col-span-1">
              <p className="font-serif text-foreground font-semibold text-[32px] md:text-[36px] leading-[1.1] tracking-tight">
                {site.name}
              </p>
            </div>

            {/* Column 2 — Navigate */}
            <div className="flex flex-col gap-5 lg:col-span-1">
              <h3 className="font-serif text-foreground font-medium text-base md:text-lg leading-snug">
                Navigate
              </h3>
              <ul className="flex flex-col gap-3">
                {navLinks.map(({ name, href, icon }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`inline-flex items-center gap-2.5 text-foreground/65 hover:text-foreground transition-colors text-sm md:text-[15px] font-medium group ${linkHover}`}
                    >
                      <span className="shrink-0 text-foreground/40 group-hover:text-foreground/65 transition-colors flex items-center justify-center">
                        {icon}
                      </span>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Connect */}
            <div className="flex flex-col gap-5 lg:col-span-1">
              <h3 className="font-serif text-foreground font-medium text-base md:text-lg leading-snug">
                Connect
              </h3>
              <ul className="flex flex-col gap-3">
                {connectLinks.map(({ name, href }) => {
                  const socialIcon =
                    name === "GitHub" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
                        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                      </svg>
                    ) : name === "X" ? (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.31l7.732-8.835L2.88 2.25h6.6l4.67 6.168L17.142 2.25h.102zm-1.06 17.14h1.83L7.84 3.881H5.944l11.24 15.51z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="block">
                        <path d="M20.45 20.45h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.005 7.428a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.84 20.45H3.166V9h3.674v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.774-.773 1.774-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                      </svg>
                    );

                  return (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2.5 text-foreground/65 hover:text-foreground transition-colors text-sm md:text-[15px] font-medium group ${linkHover}`}
                      >
                        <span className="shrink-0 text-foreground/40 group-hover:text-foreground/65 transition-colors flex items-center justify-center">
                          {socialIcon}
                          {name === "GitHub" || name === "LinkedIn" ? (
                            <span className="ml-[-2px]" />
                          ) : null}
                        </span>
                        <span className="flex items-center gap-1">
                          {name}
                          <IconExternal />
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Column 4 — Get in Touch CTA */}
            <div className="flex flex-col gap-5 lg:col-span-1">
              <h3 className="font-serif text-foreground font-medium text-base md:text-lg leading-snug">
                Let&rsquo;s Talk
              </h3>
              <div className="flex flex-col gap-4">
                <p className="text-foreground/60 text-xs leading-relaxed">
                  Got an idea worth building? I&rsquo;m always open to interesting
                  projects and conversations.
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] self-start"
                  style={{
                    background: "linear-gradient(180deg, #e04e10 0%, #c44106 100%)",
                    boxShadow:
                      "0 1px 0.5px #ffffff40 inset, 0 1px 2px #00000020, 0 4px 8px -3px #a0320040",
                  }}
                >
                  <span className="flex items-center gap-2">
                    <IconMailSm />
                    Get in touch
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-full border-t border-foreground/10">
        <div
          className="w-full"
          style={{ backgroundColor: "var(--accent)" }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Left: copyright */}
            <p className="text-xs text-foreground/60 order-2 sm:order-1 text-center sm:text-left">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="order-1 sm:order-2 inline-flex items-center gap-1.5 text-xs text-foreground/50 hover:text-foreground transition-colors"
            >
              Back to top
              <IconArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
