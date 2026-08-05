import { ImageResponse } from "next/og";
import { site } from "./lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.shortName} ${site.tagline}`;

// Load the Fraunces serif (same as the site) for an on-brand card.
async function loadFraunces() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Fraunces:wght@500&display=swap",
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((r) => r.text());
  const url = css.match(/url\((https:\/\/[^)]+)\)/)?.[1];
  if (!url) return null;
  return await fetch(url).then((r) => r.arrayBuffer());
}

export default async function OpengraphImage() {
  const fraunces = await loadFraunces();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#ecebe3",
          padding: "64px 72px",
          fontFamily: fraunces ? "Fraunces" : "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#6b6b66" }}>
          {site.tagline}
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 9999,
                background: "#ff5a1f",
              }}
            />
            <div
              style={{
                fontSize: 132,
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "#0a0a0a",
              }}
            >
              {site.shortName}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fraunces
        ? [{ name: "Fraunces", data: fraunces, weight: 500 as const }]
        : [],
    }
  );
}