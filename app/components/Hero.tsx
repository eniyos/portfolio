import { Reveal } from "./Reveal";
import { site } from "../lib/data";

/**
 * Hero matches zerith.studio's source structure:
 *   <section class="flex-1 flex items-center w-full px-6 md:px-10 lg:px-16 py-12 lg:pb-28">
 *     <div class="w-full max-w-xl flex flex-col gap-8 items-start">
 *       title + tagline stacked, then the 2 buttons in a column on mobile / row on sm.
 */
export function Hero() {
  return (
    <section
      id="hero-anchor"
      className="flex-1 flex items-center w-full px-6 md:px-10 lg:px-16 py-12 lg:pb-28"
    >
      <div className="w-full max-w-xl flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-4 text-left">
          <Reveal
            as="h1"
            variant="blur-in"
            delay={120}
            className="font-serif font-medium text-[clamp(3.5rem,12vw,7.5rem)] leading-[1.05] tracking-[-0.03em] text-foreground"
          >
            {site.shortName}
          </Reveal>
          <Reveal
            as="p"
            variant="fade-up"
            delay={260}
            className="text-base sm:text-lg text-muted tracking-tight leading-relaxed"
          >
            {site.hero}
          </Reveal>
        </div>

        <Reveal
          variant="fade-up"
          delay={400}
          className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full"
        >
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center h-12 px-10 rounded-full text-sm font-medium text-white transition-transform duration-100 active:scale-[0.98] w-full sm:flex-1"
            style={{
              background: "linear-gradient(180deg, #ff7a3d 0%, #ff5a1f 100%)",
              boxShadow:
                "0 1px 0.5px #ffffff80 inset, 0 2px 2px #ffffffaa inset, 0 -2px 4px #00000026 inset, 0 1px 0 #0000001a, 0 6px 10px -4px #d62a0066, 0 14px 22px -10px #c81e0045",
            }}
          >
            <span className="relative z-10 font-semibold text-white text-sm tracking-tight whitespace-nowrap drop-shadow-[0_1px_1px_rgba(120,20,0,0.45)]">
              View GitHub
            </span>
          </a>
          <a
            href="#works"
            className="group relative inline-flex items-center justify-center h-12 px-10 rounded-full text-sm font-medium text-white transition-transform duration-100 active:scale-[0.98] w-full sm:flex-1"
            style={{
              background: "linear-gradient(180deg, #3a3a3a 0%, #181818 100%)",
              boxShadow:
                "0 1px 0.5px #ffffff35 inset, 0 2px 2px #ffffff20 inset, 0 -2px 4px #00000055 inset, 0 0 0 1px #00000080, 0 6px 10px -4px #00000066, 0 14px 22px -12px #00000055",
            }}
          >
            <span className="relative z-10 font-semibold text-white text-sm tracking-tight whitespace-nowrap">
              see my works
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
