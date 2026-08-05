import { site } from "../lib/data";

const socials = [
  {
    name: "X",
    href: site.social.x,
    path: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.31l7.732-8.835L2.88 2.25h6.6l4.67 6.168L17.142 2.25h.102zm-1.06 17.14h1.83L7.84 3.881H5.944l11.24 15.51z" />
    ),
  },
  {
    name: "GitHub",
    href: site.social.github,
    path: (
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    ),
  },
  {
    name: "LinkedIn",
    href: site.social.linkedin,
    path: (
      <path d="M20.45 20.45h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.005 7.428a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.84 20.45H3.166V9h3.674v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.774-.773 1.774-1.729V1.729C24 .774 23.205 0 22.225 0z" />
    ),
  },
];

/**
 * Footer — minimal, flush with the site background. Left: mark + name.
 * Right: social icons (X, GitHub, LinkedIn). No links, no copyright, no
 * contact CTA — the Contact section handles that.
 */
export function Footer() {
  return (
    <footer className="w-full border-t border-[#0a0a0a]/10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-5 px-6 py-6 sm:px-8 md:flex-row md:px-10 md:py-8 lg:px-16">
        {/* Left — mark + name */}
        <div className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-full bg-foreground font-serif text-xl italic text-background">
            e
          </span>
          <span className="font-serif text-xl tracking-tight text-foreground">
            {site.name.toLowerCase()}
          </span>
        </div>

        {/* Right — socials */}
        <div className="flex items-center gap-2">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="grid size-9 place-items-center rounded-full text-foreground/70 transition-all duration-200 hover:-translate-y-0.5 hover:text-foreground"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                {s.path}
              </svg>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}