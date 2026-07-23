"use client";

import { useState } from "react";
import { Reveal } from "./Reveal";
import { projects, workTabs, type Project } from "../lib/data";

const statusLabel: Record<Project["status"], string> = {
  live: "live",
  wip: "wip",
  concept: "concept",
};

const statusDot: Record<Project["status"], string> = {
  live: "bg-[#ff5a1f]",
  wip: "bg-amber-500",
  concept: "bg-foreground/30",
};

/**
 * Works section — matches zerith.studio's source:
 *  - Section heading: "featured works."
 *  - Search input + 9 filter tabs row
 *  - 2-col grid of horizontal project cards (image left at 208×208, content right)
 *  - "And 16+ more" button below
 */
export function Projects() {
  const [activeTab, setActiveTab] = useState("featured");
  const [query, setQuery] = useState("");

  return (
    <section
      id="works"
      className="relative w-full min-h-screen flex items-center py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-8 lg:gap-10">
        <Reveal variant="fade-up">
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-medium text-[clamp(2.5rem,5vw,4rem)] text-foreground leading-[1.05] tracking-[-0.02em]">
              featured works.
            </h2>
            <p className="text-sm sm:text-base text-muted tracking-tight leading-relaxed max-w-3xl">
              a few things i&apos;ve built or am building — from smart-contract
              security tooling to agentic AI.
            </p>
          </div>
        </Reveal>

        <Reveal variant="fade-up" delay={120} className="flex flex-col gap-5 items-stretch lg:items-end">
          <div className="self-stretch lg:self-end">
            <label
              className="flex items-center gap-3 w-full sm:w-80 h-12 px-4 rounded-xl bg-card"
              style={{
                boxShadow:
                  "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000020, 0 1px 0 #ffffffaa, 0 4px 10px -4px #00000026",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 text-muted shrink-0"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Search by skills"
                aria-label="Search by skills"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-0 outline-none text-sm text-foreground placeholder:text-muted"
              />
            </label>
          </div>

          <div
            role="tablist"
            aria-label="Project domains"
            className="flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {workTabs.map((tab) => {
              const isActive = tab.value === activeTab;
              return (
                <button
                  key={tab.value}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.value)}
                  className={[
                    "px-3.5 sm:px-4 h-9 rounded-xl text-xs md:text-sm leading-none cursor-pointer transition-colors",
                    isActive
                      ? "bg-background text-foreground"
                      : "bg-card text-foreground/80 hover:bg-card/70",
                  ].join(" ")}
                  style={
                    isActive
                      ? {
                          boxShadow:
                            "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000020, 0 1px 0 #ffffffaa, 0 4px 10px -4px #00000026",
                        }
                      : { boxShadow: "0 0 0 1px #00000012" }
                  }
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {projects.map((project, i) => (
              <Reveal
                key={project.title}
                variant="fade-up"
                delay={i * 80}
              >
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="px-6 py-3 rounded-full bg-card text-sm font-medium hover:bg-card/80 transition-colors"
              style={{ boxShadow: "0 0 0 1px #00000012" }}
            >
              and {projects.length}+ more in the pipeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="w-full bg-card rounded-3xl flex flex-col sm:flex-row gap-5 sm:gap-6 p-4 sm:p-5 h-auto sm:h-60 transition-transform duration-300 hover:-translate-y-0.5"
      style={{
        boxShadow:
          "0 1px 0.5px #ffffff inset, 0 0 0 1px #00000010, 0 1px 0 #ffffffcc, 0 10px 18px -6px #00000022, 0 24px 36px -16px #0000001c",
      }}
    >
      <div
        className="relative shrink-0 w-full aspect-square sm:w-44 md:w-52 sm:h-auto rounded-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ff7a3d 0%, #ff5a1f 60%, #c81e00 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center grain">
          <span className="font-serif text-3xl sm:text-4xl text-white/85 tracking-tight">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </span>
        </div>
        <div className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-white/90 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
          <span
            className={`h-1.5 w-1.5 rounded-full ${statusDot[project.status]}`}
          />
          {statusLabel[project.status]}
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-serif font-medium text-xl md:text-2xl text-foreground leading-tight tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed line-clamp-2 overflow-hidden">
            {project.description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 line-clamp-2 overflow-hidden mt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-black/[0.06] text-foreground/80 font-normal text-[10px] md:text-xs leading-none"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-3 flex items-center gap-3 flex-wrap">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} website`}
              className="size-9 inline-flex items-center justify-center rounded-full text-foreground/70 hover:text-foreground hover:bg-black/[0.05] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9.5" />
                <path d="M3 12h18" />
                <path d="M12 2.5c2.7 3 4.1 6.2 4.1 9.5s-1.4 6.5-4.1 9.5c-2.7-3-4.1-6.2-4.1-9.5s1.4-6.5 4.1-9.5Z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
