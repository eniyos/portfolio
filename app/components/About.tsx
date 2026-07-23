import { Reveal } from "./Reveal";
import { site, coreAreas } from "../lib/data";

/**
 * About section — matches zerith's "about us." block:
 *  - Single H2 heading
 *  - 2-col grid (text on left, photo columns on right)
 *  - Text: 3 paragraphs of prose with bolded emphasis spans
 *  - Photos: CSS columns/columns-2 md:columns-3 masonry with placeholder cards
 */
export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-8 lg:gap-12">
        <Reveal variant="fade-up">
          <h2 className="font-serif font-medium text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.05] tracking-[-0.02em]">
            about me.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal
            variant="fade-up"
            delay={100}
            className="flex flex-col gap-6 text-muted tracking-tight leading-relaxed max-w-xl"
          >
            <p>
              <span className="font-semibold text-foreground">
                {site.name.toLowerCase()}
              </span>{" "}
              — a computer science engineering student at VIT-AP University,
              focused on ai, machine learning, blockchain, and software
              engineering.
            </p>
            <p>
              my work spans intelligent systems, developer tools, cloud
              infrastructure, smart contracts, and high-performance
              applications — built with a bias toward{" "}
              <span className="font-semibold text-foreground">shipping</span>.
            </p>
            <p>
              i like problems where the stack has to think for itself: agents
              that scaffold code, protocols that need to be hardened, and
              infrastructure that has to be fast and reliable. core areas:{" "}
              <span className="font-semibold text-foreground">
                {coreAreas.slice(0, 4).join(", ").toLowerCase()}
              </span>
              .
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={180} className="columns-2 gap-4 md:columns-3 md:gap-5">
            {placeholderPhotos.map((photo, i) => (
              <div
                key={i}
                className="mb-4 break-inside-avoid overflow-hidden bg-card rounded-3xl md:mb-5"
                style={{
                  boxShadow:
                    "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 8px 18px -8px #00000022, 0 18px 30px -18px #0000001c",
                }}
              >
                <div
                  className="block w-full h-auto grain"
                  style={{
                    aspectRatio: photo.tall ? "2/3" : "4/3",
                    background: photo.bg,
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-serif text-white/30 text-2xl select-none">
                      {photo.label}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const placeholderPhotos: { tall: boolean; bg: string; label: string }[] = [
  {
    tall: true,
    bg: "linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)",
    label: "01",
  },
  {
    tall: true,
    bg: "linear-gradient(135deg, #1a3a2a 0%, #3a5a4a 100%)",
    label: "02",
  },
  {
    tall: true,
    bg: "linear-gradient(135deg, #2a1a3a 0%, #4a3a5a 100%)",
    label: "03",
  },
  {
    tall: false,
    bg: "linear-gradient(135deg, #3a2a1a 0%, #5a4a3a 100%)",
    label: "04",
  },
  {
    tall: true,
    bg: "linear-gradient(135deg, #1a2a3a 0%, #3a4a5a 100%)",
    label: "05",
  },
  {
    tall: false,
    bg: "linear-gradient(135deg, #2a2a3a 0%, #4a4a5a 100%)",
    label: "06",
  },
  {
    tall: false,
    bg: "linear-gradient(135deg, #3a1a1a 0%, #5a3a3a 100%)",
    label: "07",
  },
  {
    tall: true,
    bg: "linear-gradient(135deg, #2a2a1a 0%, #4a4a3a 100%)",
    label: "08",
  },
];
