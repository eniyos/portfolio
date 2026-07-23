import { Reveal } from "./Reveal";
import { LogoGrid } from "./LogoGrid";
import { achievements, type Achievement } from "../lib/data";

export function Stack() {
  return (
    <section id="stack" className="relative w-full min-h-screen flex items-center py-10 md:py-14 lg:py-16 overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1, col 1: Workflow card */}
          <Reveal variant="fade-up" className="md:col-span-1">
            <article className="w-full h-full rounded-3xl bg-card flex flex-col p-5 gap-4"
              style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c" }}>
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden border border-foreground/5"
                style={{ backgroundColor: "#eeebe6", backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.14) 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
                <FlowDiagram />
                <div className="absolute size-9 flex items-center justify-center p-2 rounded-lg shadow-sm" style={{ left: "15%", top: "29%", transform: "translate(-50%, -50%)" }}>
                  <div className="size-full rounded-md bg-[#ff5a1f] flex items-center justify-center"><span className="text-xs text-white">●</span></div>
                </div>
                <div className="absolute size-9 flex items-center justify-center p-2 rounded-lg shadow-sm" style={{ left: "15%", top: "71%", transform: "translate(-50%, -50%)" }}>
                  <div className="size-full rounded-md bg-white border border-foreground/20 flex items-center justify-center"><span className="text-xs text-foreground">●</span></div>
                </div>
                <div className="absolute size-9 flex items-center justify-center rounded-md bg-white border border-foreground/30 shadow-sm" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                  <span className="font-serif italic text-base text-foreground">e.</span>
                </div>
                <div className="absolute size-9 flex items-center justify-center rounded-md bg-white border-2 shadow-sm" style={{ left: "85%", top: "33%", transform: "translate(-50%, -50%)", borderColor: "#ff5a1f" }}>
                  <span className="text-[#ff5a1f] text-lg">→</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-1 pb-1">
                <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight tracking-tight">Automated Workflows</h3>
                <p className="text-sm text-muted leading-relaxed">Connect your tools and automate the repetitive. We wire up pipelines that trigger, transform, and deliver — no manual steps in between.</p>
              </div>
            </article>
          </Reveal>

          {/* Row 1, col 2-3: Education card */}
          <Reveal variant="fade-up" delay={80} className="md:col-span-2">
            <article id="education" className="relative w-full h-full rounded-3xl overflow-hidden flex flex-col justify-between min-h-[11rem] md:min-h-0 scroll-mt-24 transition-transform duration-300 hover:-translate-y-0.5"
              style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative w-full h-1/2 bg-gradient-to-b from-transparent via-black/20 to-transparent flex items-center justify-center">
                <span className="font-serif text-5xl text-white/10 select-none">e</span>
              </div>
              <div className="relative flex flex-col gap-2 p-5 md:p-6 max-w-md">
                <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40 leading-none">Education</p>
                <h3 className="font-serif font-semibold text-xl md:text-2xl text-white leading-snug mt-1">B.Tech Computer Science &amp; Engineering</h3>
                <p className="text-xs md:text-sm text-white/55 leading-relaxed mt-1">VIT-AP University — Studying AI, Blockchain, Cloud Computing, Algorithms, and Systems Engineering.</p>
                <p className="text-[11px] text-white/35 font-medium mt-1">Expected Graduation: 2027</p>
              </div>
            </article>
          </Reveal>

          {/* Row 2, col 1: Engineering Across Layers */}
          <Reveal variant="fade-up" delay={120} className="md:col-span-1">
            <article className="w-full h-full rounded-3xl bg-card flex flex-col p-5 gap-4"
              style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c" }}>
              <div className="flex-1 min-h-[clamp(4.5rem,9vh,7.5rem)] flex items-center justify-center">
                <div className="relative aspect-square h-full max-h-full">
                  <div className="absolute inset-[10%] rounded-full border border-foreground/15" style={{ animation: "spin-counter 22s linear infinite" }}>
                    {[0, 1, 2].map((i) => {
                      const angle = (i * 120) * (Math.PI / 180);
                      return (
                        <div key={i} className="absolute size-12 md:size-14 rounded-full overflow-hidden bg-gradient-to-br from-[#ff5a1f] to-[#ff8a3d] flex items-center justify-center"
                          style={{ left: `${50 + Math.sin(angle) * 43.3}%`, top: `${50 - Math.cos(angle) * 43.3}%`, transform: "translate(-50%, -50%)", animation: "spin-counter 22s linear infinite reverse" }}>
                          <span className="font-serif text-white text-sm">{String.fromCharCode(65 + i)}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-12 md:size-14 rounded-full overflow-hidden bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center">
                    <span className="font-serif text-background text-base">e</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-1 pb-1 text-center">
                <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight tracking-tight">Engineering Across Layers</h3>
                <p className="text-sm text-muted leading-relaxed">Working from protocol logic to user experience. Designing, developing, and deploying systems that deliver real-world impact.</p>
              </div>
            </article>
          </Reveal>

          {/* Row 2, col 2: Certifications */}
          <Reveal variant="fade-up" delay={160} className="md:col-span-1">
            <article className="w-full h-full rounded-3xl bg-card flex flex-col p-5 gap-4"
              style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c" }}>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-foreground/10" />
                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted/60 whitespace-nowrap">{achievements.length} certifications</span>
                <div className="h-px flex-1 bg-foreground/10" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {achievements.map((cert, i) => (
                  <CertCard key={cert.title + cert.credentialId} cert={cert} delay={i * 40} />
                ))}
              </div>
            </article>
          </Reveal>

          {/* Row 2, col 3: All-Domains logo grid */}
          <Reveal variant="fade-up" delay={200} className="md:col-span-1">
            <article className="w-full h-full rounded-3xl bg-card flex flex-col p-5 gap-4"
              style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c" }}>
              <div className="flex-1 min-h-[11rem] w-full max-w-[26rem] mx-auto relative"><LogoGrid /></div>
              <div className="flex flex-col gap-2 px-1 pb-1 text-center">
                <h3 className="font-serif text-lg md:text-xl text-foreground leading-tight tracking-tight">The Stack Behind My Work</h3>
                <p className="text-sm text-muted leading-relaxed">Tools, frameworks, and platforms I rely on to design, build, and ship modern software.</p>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
      <style>{`@keyframes spin-counter { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

function CertBadge({ label }: { label: string }) {
  return <span className="shrink-0 text-[8px] font-medium tracking-[0.06em] uppercase leading-none text-muted/40">{label}</span>;
}

function CertCard({ cert, delay }: { cert: Achievement; delay: number }) {
  return (
    <Reveal variant="fade-up" delay={delay}>
      <div className="group relative block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5" style={{ boxShadow: "0 1px 0.5px #ffffff inset, 0 0 0 1px rgba(10,10,10,0.05), 0 1px 0 rgba(255,255,255,0.8)" }}>
        <div className="flex flex-col gap-2 p-3 h-full">
          <div className="flex items-center gap-2 min-w-0">
            <div className="size-7 rounded-md flex items-center justify-center shrink-0 bg-foreground/[0.06]">
              <span className="text-foreground/50 font-serif font-bold text-[9px]">{cert.issuer[0]}</span>
            </div>
            <p className="font-serif font-medium text-[11px] md:text-xs text-foreground leading-snug truncate">{cert.title}</p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-muted/35 uppercase tracking-[0.06em]">{cert.issuer.split(" ")[0]}</span>
            <CertBadge label={cert.badge} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FlowDiagram() {
  return (
    <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none" aria-hidden="true">
      <path d="M 84 58 C 130 58, 140 100, 172 100" stroke="#000" strokeWidth="1.4" strokeDasharray="4 4" style={{ animation: "dash-flow 1.2s linear infinite" }} />
      <path d="M 84 142 C 130 142, 140 100, 172 100" stroke="#000" strokeWidth="1.4" strokeDasharray="4 4" style={{ animation: "dash-flow 1.2s linear infinite" }} />
      <path d="M 228 100 C 280 100, 280 67, 310 67" stroke="#ff5a1f" strokeWidth="1.4" strokeDasharray="4 4" style={{ animation: "dash-flow 1.2s linear infinite" }} />
      <circle cx="84" cy="58" r="2.5" fill="#000" />
      <circle cx="84" cy="142" r="2.5" fill="#000" />
      <circle cx="172" cy="100" r="2.5" fill="#000" />
      <circle cx="228" cy="100" r="2.5" fill="#000" />
      <circle cx="310" cy="67" r="2.5" fill="#ff5a1f" />
      <style>{`@keyframes dash-flow { to { stroke-dashoffset: -16; } }`}</style>
    </svg>
  );
}
