import { Reveal } from "./Reveal";
import { stats } from "../lib/data";

/**
 * Stats section matches zerith's "data driven approach" block.
 * Section id is "data-driven" to match their source. 4-col grid, dark
 * card on the left (`stat.dark === true`), sub-grid of 2 secondary stats
 * under the big number.
 */
export function Stats() {
  return (
    <section
      id="data-driven"
      className="relative w-full min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-8 lg:gap-10">
        <Reveal variant="fade-up">
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-medium text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.05] tracking-[-0.02em]">
              data driven approach
            </h2>
            <p className="text-sm sm:text-base text-muted tracking-tight leading-relaxed max-w-3xl">
              numbers from the work i&apos;ve shipped — projects, evals, and
              infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Reveal
              key={stat.id}
              variant="fade-up"
              delay={i * 80}
            >
              <article
                id={stat.id}
                className={[
                  "relative w-full h-full rounded-3xl flex flex-col p-6 md:p-7 md:min-h-[26rem] transition-transform duration-300 hover:-translate-y-0.5",
                  stat.dark
                    ? "bg-foreground text-background"
                    : "bg-card text-foreground",
                ].join(" ")}
                style={{
                  boxShadow:
                    "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c",
                }}
              >
                <header className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "text-sm md:text-base leading-none",
                      stat.dark ? "text-white/85" : "text-foreground/80",
                    ].join(" ")}
                  >
                    {stat.id === "agentic-ai"
                      ? "agentic ai"
                      : stat.id === "data-driven"
                      ? "data"
                      : stat.id}
                  </span>
                  <span
                    className={[
                      "text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full",
                      stat.dark
                        ? "bg-white/10 text-white/85"
                        : "bg-black/[0.06] text-foreground/60",
                    ].join(" ")}
                  >
                    live
                  </span>
                </header>

                <div className="mt-auto pt-7">
                  <p
                    className={[
                      "stat-rise font-serif text-6xl md:text-7xl leading-none tracking-[-0.03em]",
                      stat.dark ? "text-white" : "text-foreground",
                    ].join(" ")}
                  >
                    {stat.value}
                  </p>
                  <p
                    className={[
                      "mt-3 text-sm leading-snug max-w-[16rem]",
                      stat.dark ? "text-white/55" : "text-muted",
                    ].join(" ")}
                  >
                    {stat.label}
                  </p>
                </div>

                <dl
                  className={[
                    "mt-6 grid grid-cols-2 gap-5 border-t pt-5",
                    stat.dark ? "border-white/[0.14]" : "border-black/[0.07]",
                  ].join(" ")}
                >
                  {stat.sub.map((s) => (
                    <div key={s.label} className="flex flex-col gap-1.5">
                      <dd
                        className={[
                          "font-serif text-2xl md:text-3xl leading-none",
                          stat.dark ? "text-white" : "text-foreground",
                        ].join(" ")}
                      >
                        {s.value}
                      </dd>
                      <dt
                        className={[
                          "text-xs leading-snug",
                          stat.dark ? "text-white/55" : "text-muted",
                        ].join(" ")}
                      >
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
