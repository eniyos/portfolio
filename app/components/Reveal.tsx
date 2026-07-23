"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  /** "fade-up" | "fade-in" | "blur-in" */
  variant?: "fade-up" | "fade-in" | "blur-in";
  /** Reveal every time the element enters the viewport, not just once. */
  repeat?: boolean;
};

const variantClass: Record<NonNullable<RevealProps["variant"]>, string> = {
  "fade-up": "animate-fade-up",
  "fade-in": "animate-fade-in",
  "blur-in": "animate-blur-in",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "fade-up",
  repeat = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!repeat) observer.unobserve(entry.target);
          } else if (repeat) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat]);

  const Component = Tag as unknown as React.ElementType;
  const animation = visible ? variantClass[variant] : "opacity-0";

  return (
    <Component
      ref={ref as React.Ref<HTMLElement>}
      className={`${animation} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
}
