/**
 * SectionDecor — per-section dashed SVG decorations matching zerith.studio.
 * Renders large 2400×2400 dashed rects and small accent rects behind sections.
 */

function Guide({ className }: { className: string }) {
  return (
    <svg width={2400} height={2400} viewBox="0 0 2400 2400" fill="none" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width="2399" height="2399" rx="120" ry="120"
        stroke="var(--border-deco)" strokeWidth="1" strokeDasharray="16 24" fill="none" />
    </svg>
  );
}

function SmallDecor({ className, size, rx }: { className: string; size: number; rx: number }) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={className} aria-hidden="true">
      <rect x="0.5" y="0.5" width={size - 1} height={size - 1} rx={rx} ry={rx}
        stroke="var(--border-deco)" strokeWidth="1" strokeDasharray="16 24" fill="none" />
    </svg>
  );
}

export function HeroDecor() {
  return (
    <>
      <Guide className="hidden lg:block absolute bottom-1/2 left-2/3 pointer-events-none" />
      <Guide className="hidden lg:block absolute top-2/3 right-1/2 pointer-events-none" />
    </>
  );
}

export function WorksDecor() {
  return (
    <>
      <Guide className="hidden lg:block absolute bottom-1/2 left-1/2 pointer-events-none" />
      <Guide className="hidden lg:block absolute top-3/4 right-1/2 pointer-events-none" />
      <SmallDecor className="hidden xl:block absolute top-10 right-10 pointer-events-none opacity-60" size={140} rx={22} />
    </>
  );
}

export function StatsDecor() {
  return (
    <>
      <Guide className="hidden lg:block absolute bottom-2/3 left-1/2 pointer-events-none" />
      <Guide className="hidden lg:block absolute top-1/2 right-1/2 pointer-events-none" />
      <SmallDecor className="hidden xl:block absolute bottom-10 left-10 pointer-events-none opacity-60" size={160} rx={24} />
    </>
  );
}

export function StackDecor() {
  return (
    <>
      <Guide className="hidden lg:block absolute bottom-3/4 left-1/2 pointer-events-none" />
      <Guide className="hidden lg:block absolute top-1/2 right-1/2 pointer-events-none" />
      <SmallDecor className="hidden xl:block absolute top-10 left-10 pointer-events-none opacity-70" size={180} rx={28} />
    </>
  );
}

export function AboutDecor() {
  return (
    <>
      <Guide className="hidden lg:block absolute bottom-2/3 left-1/2 pointer-events-none" />
      <svg width={2400} height={2400} viewBox="0 0 2400 2400" fill="none"
        className="hidden lg:block absolute top-[92%] right-1/2 pointer-events-none" aria-hidden="true">
        <rect x="0.5" y="0.5" width="2399" height="2399" rx="50" ry="50"
          stroke="var(--border-deco)" strokeWidth="1" strokeDasharray="16 24" fill="none" />
      </svg>
    </>
  );
}

export function ContactDecor() {
  return (
    <svg className="hidden lg:block absolute left-1/2 top-0 h-full -translate-x-1/2 pointer-events-none" width="1" aria-hidden="true">
      <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="var(--border-deco)" strokeWidth="1" strokeDasharray="16 24" />
    </svg>
  );
}
