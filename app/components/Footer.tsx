import Link from "next/link";
import { site } from "../lib/data";

/**
 * Footer — matches zerith's "Platform + Get In Touch" 2-col layout:
 *  - Left col: brand mark + tagline
 *  - Right col: Platform links column + Get In Touch column (email + X/IG icons)
 *  - Copyright at bottom (border-top)
 */
export function Footer() {
  return (
    <footer id="contact" className="w-full">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-10 lg:gap-16">
          {/* Left col: brand + tagline */}
          <div className="flex flex-col gap-4 md:max-w-sm lg:max-w-md">
            <Link href="/" className="flex items-center gap-2">
              <span className="grid place-items-center size-9 rounded-full bg-foreground text-background text-sm font-semibold">
                <span className="font-serif italic">e</span>
              </span>
              <span className="font-serif text-xl text-foreground leading-normal whitespace-nowrap">
                {site.name.toLowerCase()}
              </span>
            </Link>
            <p className="text-sm md:text-base text-muted tracking-tight leading-relaxed">
              an engineer building intelligent systems, decentralized apps,
              and developer tools.
            </p>
          </div>

          {/* Right col: two sub-cols */}
          <div className="grid grid-cols-2 gap-10 sm:gap-16 md:gap-20 lg:gap-28">
            {/* Platform links */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-base md:text-lg text-foreground">
                Platform
              </h3>
              <ul className="flex flex-col gap-3 md:gap-4">
                {[
                  ["about", "#about"],
                  ["works", "#works"],
                  ["stack", "#stack"],
                  ["contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-sm md:text-base text-muted tracking-tight hover:text-foreground transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="flex flex-col gap-5">
              <h3 className="font-serif text-base md:text-lg text-foreground">
                Get in Touch
              </h3>
              <div className="flex flex-col gap-3 md:gap-4">
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm md:text-base text-muted tracking-tight hover:text-foreground transition-colors break-all"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex items-center gap-5 mt-1">
                <a
                  href={site.social.x}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X"
                  className="text-foreground hover:text-muted transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.868 6.75h-3.31l7.732-8.835L2.88 2.25h6.6l4.67 6.168L17.142 2.25h.102zm-1.06 17.14h1.83L7.84 3.881H5.944l11.24 15.51z" />
                  </svg>
                </a>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-foreground hover:text-muted transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
                  </svg>
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-foreground hover:text-muted transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.555v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.005 7.428a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126zM6.84 20.45H3.166V9h3.674v11.45zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.98 0 1.774-.773 1.774-1.729V1.729C24 .774 23.205 0 22.225 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 lg:mt-20 pt-6 md:pt-8 border-t border-foreground/10">
          <p className="text-xs md:text-sm text-muted tracking-tight text-center">
            Copyright © {new Date().getFullYear()} {site.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
