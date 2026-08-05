import { Reveal } from "./Reveal";
import { site } from "../lib/data";

/**
 * CTA section — matches zerith's "build for the internet generation" block:
 *  - Centered H2
 *  - Subtitle
 *  - Big "book a call" button
 *  - Vertical dashed line running through the section
 */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      {/* Vertical dashed line down the center */}
      <svg
        className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none"
        width="1"
        aria-hidden="true"
      >
        <line
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="100%"
          stroke="rgba(10, 10, 10, 0.12)"
          strokeWidth="1"
          strokeDasharray="16 24"
        />
      </svg>

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-6 items-center text-center">
        <Reveal variant="fade-up">
          <h2 className="font-serif font-medium text-[clamp(2.5rem,5.5vw,4.5rem)] text-foreground leading-[1.1] tracking-[-0.02em] max-w-2xl">
            build for the{" "}
            <span className="italic text-foreground/70">next generation</span>
          </h2>
        </Reveal>
        <Reveal
          variant="fade-up"
          delay={120}
          className="text-base sm:text-lg text-muted tracking-tight leading-relaxed max-w-xl"
        >
          <p>
            got an idea worth building? let&apos;s turn it into something
            people actually care about.
          </p>
        </Reveal>
        <Reveal variant="fade-up" delay={240} className="w-full sm:w-64">
          <a
            href={`mailto:${site.email}`}
            className="group relative inline-flex items-center justify-center h-12 w-full px-10 rounded-full text-sm font-semibold text-white transition-transform duration-100 active:scale-[0.98]"
            style={{
              background: "linear-gradient(180deg, #ff7a3d 0%, #ff5a1f 100%)",
              boxShadow:
                "0 1px 0.5px #ffffff80 inset, 0 2px 2px #ffffffaa inset, 0 -2px 4px #00000026 inset, 0 1px 0 #0000001a, 0 6px 10px -4px #d62a0066, 0 14px 22px -10px #c81e0045",
            }}
          >
            <span className="relative z-10 text-sm tracking-tight whitespace-nowrap drop-shadow-[0_1px_1px_rgba(120,20,0,0.45)]">
              book a call
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
