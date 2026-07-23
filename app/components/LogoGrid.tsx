"use client";

import { useEffect, useState } from "react";

/**
 * LogoGrid — the "All Domains" card animation.
 *
 * Mirrors zerith.studio's source: 9 fixed tile positions, each tile stacks
 * all 9 logos absolutely; the active one is `opacity-100 scale-100` and
 * the rest are `opacity-0 scale-75 pointer-events-none`. Every ~1.5s
 * a global index advances, and each tile displays the logo at that index
 * in its own array. This creates a wave/shift effect where logos appear
 * to move from one tile to another.
 *
 * The transition is `duration-500 ease-out` (matches zerith's source:
 * `transition-all duration-500 ease-out` on each logo tile).
 */

const ALL_LOGOS = [
  "React",
  "TypeScript",
  "Expo",
  "Figma",
  "GitHub",
  "AWS",
  "Docker",
  "OpenAI",
  "Claude",
  "Solana",
  "BNB",
  "Ethereum",
  "Apple",
  "Python",
  "Android",
  "Next",
  "Vercel",
] as const;

type LogoName = (typeof ALL_LOGOS)[number];

const TILE_COUNT = 9;
/** Which logo is active in each tile. Index 0 = ALL_LOGOS[0], etc. */
type TileState = number[];

/** Per-tile logo rotation. Each tile cycles through ALL_LOGOS in order,
 *  but offset so the 9 tiles don't all show the same logo at the same time. */
function initialTileState(): TileState {
  return Array.from({ length: TILE_COUNT }, (_, i) => i % ALL_LOGOS.length);
}

export function LogoGrid() {
  const [active, setActive] = useState<TileState>(initialTileState);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => prev.map((i) => (i + 1) % ALL_LOGOS.length));
    }, 1500);
    return () => clearInterval(id);
  }, []);

  // Fixed positions for the 9 tiles — match zerith's coordinates
  const positions: { x: number; y: number }[] = [
    { x: 16, y: 28 },
    { x: 38, y: 14 },
    { x: 60, y: 30 },
    { x: 84, y: 18 },
    { x: 9, y: 68 },
    { x: 30, y: 56 },
    { x: 50, y: 76 },
    { x: 71, y: 58 },
    { x: 92, y: 70 },
  ];

  return (
    <>
      {positions.map((pos, tileIdx) => (
        <div
          key={tileIdx}
          className="absolute size-12"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {ALL_LOGOS.map((logo, logoIdx) => {
            const isActive = active[tileIdx] === logoIdx;
            return (
              <div
                key={logo}
                className={[
                  "absolute inset-0 flex items-center justify-center p-2 rounded-xl bg-white border border-foreground/10 shadow-sm transition-all duration-500 ease-out",
                  isActive
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-75 pointer-events-none",
                ].join(" ")}
                aria-hidden={!isActive}
              >
                <LogoMark name={logo} />
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
}

/**
 * Inline SVG mark for each tech logo. Each is a small recognizable
 * representation — for our purposes a simple shape + label is fine since
 * we're not using the official brand SVGs (which would need licensing).
 * The viewer will see the logo "shape" change rather than text.
 */
function LogoMark({ name }: { name: LogoName }) {
  const base =
    "w-full h-full object-contain flex items-center justify-center";
  switch (name) {
    case "React":
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={base} aria-hidden>
          <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 22 22" className={base} aria-hidden>
          <rect width="22" height="22" rx="3" fill="#3178c6" />
          <text
            x="11"
            y="15.5"
            textAnchor="middle"
            fontFamily="monospace"
            fontWeight="700"
            fontSize="9"
            fill="#fff"
          >
            TS
          </text>
        </svg>
      );
    case "Expo":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <rect width="24" height="24" rx="5" fill="#000020" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontFamily="system-ui"
            fontWeight="800"
            fontSize="11"
            fill="#fff"
          >
            E
          </text>
        </svg>
      );
    case "Figma":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g>
            <circle cx="8" cy="5" r="3" fill="#f24e1e" />
            <circle cx="8" cy="12" r="3" fill="#a259ff" />
            <circle cx="8" cy="19" r="3" fill="#1abcfe" />
            <rect x="11" y="2" width="6" height="6" rx="3" fill="#0acf83" />
            <rect x="11" y="16" width="6" height="6" rx="3" fill="#ff7262" />
          </g>
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="#181717" aria-hidden>
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.27-.01-1.16-.02-2.1-3.2.7-3.87-1.36-3.87-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.69 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.26 5.69.41.35.78 1.04.78 2.1 0 1.52-.01 2.74-.01 3.11 0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
        </svg>
      );
    case "AWS":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <text
            x="12"
            y="11"
            textAnchor="middle"
            fontFamily="system-ui"
            fontWeight="700"
            fontSize="6.5"
            fill="#232f3e"
          >
            aws
          </text>
          <path
            d="M3 16 Q 12 21 21 16"
            stroke="#ff9900"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g fill="#2496ed">
            <rect x="3" y="11" width="2.5" height="2.5" />
            <rect x="6" y="11" width="2.5" height="2.5" />
            <rect x="9" y="11" width="2.5" height="2.5" />
            <rect x="12" y="11" width="2.5" height="2.5" />
            <rect x="6" y="8" width="2.5" height="2.5" />
            <rect x="9" y="8" width="2.5" height="2.5" />
            <rect x="12" y="8" width="2.5" height="2.5" />
            <rect x="9" y="5" width="2.5" height="2.5" />
            <rect x="12" y="5" width="2.5" height="2.5" />
          </g>
          <path
            d="M2 14 L 2 17 L 22 17 L 21 14 Z"
            fill="#2496ed"
          />
        </svg>
      );
    case "OpenAI":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2 L 12 22" />
            <path d="M2 12 L 22 12" />
            <path d="M4 4 L 20 20" />
            <path d="M20 4 L 4 20" />
            <circle cx="12" cy="12" r="9" />
          </g>
        </svg>
      );
    case "Claude":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <path
            d="M12 2 L 19 7 L 19 17 L 12 22 L 5 17 L 5 7 Z"
            fill="#cc785c"
          />
          <circle cx="12" cy="12" r="2.5" fill="#fff" />
        </svg>
      );
    case "Solana":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g fill="#9945ff">
            <path d="M5 7 L 17 7 L 19 9 L 7 9 Z" />
            <path d="M5 11 L 17 11 L 19 13 L 7 13 Z" />
            <path d="M5 15 L 17 15 L 19 17 L 7 17 Z" />
          </g>
        </svg>
      );
    case "BNB":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g fill="#f3ba2f">
            <path d="M12 3 L 6.5 8.5 L 8 10 L 12 6 L 16 10 L 17.5 8.5 Z" />
            <path d="M4 12 L 5.5 13.5 L 7 12 L 5.5 10.5 Z" />
            <path d="M20 12 L 18.5 10.5 L 17 12 L 18.5 13.5 Z" />
            <path d="M12 21 L 17.5 15.5 L 16 14 L 12 18 L 8 14 L 6.5 15.5 Z" />
            <rect x="10" y="9" width="4" height="6" transform="rotate(45 12 12)" />
          </g>
        </svg>
      );
    case "Ethereum":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g fill="#000">
            <path d="M12 2 L 5 13 L 12 17 L 19 13 Z" />
            <path d="M12 2 L 5 13 L 12 16 Z" fill="#fff" />
            <path d="M5 14 L 12 22 L 19 14 L 12 18 Z" />
          </g>
        </svg>
      );
    case "Apple":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="#000" aria-hidden>
          <path d="M17.05 12.5c0-2.66 2.18-3.94 2.27-4-1.24-1.81-3.16-2.06-3.84-2.09-1.63-.16-3.19.96-4.02.96-.84 0-2.12-.94-3.49-.91-1.79.03-3.45 1.04-4.37 2.65-1.87 3.23-.48 8 1.34 10.62.89 1.28 1.95 2.72 3.34 2.67 1.34-.05 1.85-.87 3.47-.87 1.62 0 2.08.87 3.51.84 1.45-.02 2.37-1.3 3.25-2.59 1.02-1.49 1.44-2.93 1.46-3-.03-.01-2.81-1.08-2.84-4.28M14.65 4.5c.7-.85 1.18-2.04 1.05-3.22-1.01.04-2.24.67-2.97 1.52-.65.75-1.22 1.95-1.07 3.11 1.13.09 2.28-.57 2.99-1.41" />
        </svg>
      );
    case "Python":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g>
            <path
              d="M12 2 C 7 2 7 5 7 7 L 7 9 L 12 9 L 12 7 L 16 7 L 16 12 L 12 12 L 12 14 L 16 14 C 18 14 18 16 18 17 C 18 20 15 22 12 22 C 9 22 6 20 6 18 L 8 18 C 8 19 9 19 10 19 L 14 19 C 15 19 15 18 15 17 L 15 14 C 15 13 14 12 12 12 L 9 12 C 7 12 7 10 7 9 C 7 6 9 4 12 4 C 15 4 17 6 17 8 L 15 8 C 15 7 14 6 12 6 L 10 6 C 9 6 9 7 9 8 L 9 9 C 9 10 10 10 12 10 L 15 10 C 17 10 17 8 17 7 C 17 4 15 2 12 2 Z"
              fill="#3776ab"
            />
            <path d="M11 7 L 13 7 L 13 5 L 11 5 Z" fill="#ffd43b" />
            <path d="M11 14 L 13 14 L 13 16 L 11 16 Z" fill="#ffd43b" />
          </g>
        </svg>
      );
    case "Android":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <g fill="#3ddc84">
            <path d="M5 9 L 19 9 C 19 9 18 18 18 18 L 6 18 C 6 18 5 9 5 9 Z" />
            <circle cx="9" cy="6" r="1" />
            <circle cx="15" cy="6" r="1" />
            <line x1="9" y1="6" x2="8" y2="9" stroke="#3ddc84" strokeWidth="1" />
            <line x1="15" y1="6" x2="16" y2="9" stroke="#3ddc84" strokeWidth="1" />
            <line x1="3" y1="11" x2="5" y2="11" stroke="#3ddc84" strokeWidth="1.4" />
            <line x1="19" y1="11" x2="21" y2="11" stroke="#3ddc84" strokeWidth="1.4" />
            <line x1="4.5" y1="14" x2="5" y2="20" stroke="#3ddc84" strokeWidth="1.2" />
            <line x1="19.5" y1="14" x2="19" y2="20" stroke="#3ddc84" strokeWidth="1.2" />
            <line x1="9.5" y1="14" x2="9.5" y2="20" stroke="#3ddc84" strokeWidth="1.2" />
            <line x1="14.5" y1="14" x2="14.5" y2="20" stroke="#3ddc84" strokeWidth="1.2" />
          </g>
        </svg>
      );
    case "Next":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <circle cx="12" cy="12" r="10" fill="#000" />
          <text
            x="12"
            y="15.5"
            textAnchor="middle"
            fontFamily="system-ui"
            fontWeight="700"
            fontSize="6.5"
            fill="#fff"
          >
            N
          </text>
        </svg>
      );
    case "Vercel":
      return (
        <svg viewBox="0 0 24 24" className={base} aria-hidden>
          <path d="M12 4 L 22 20 L 2 20 Z" fill="#000" />
        </svg>
      );
    default:
      return null;
  }
}
