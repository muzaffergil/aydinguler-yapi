"use client";
import { useEffect, useRef, ReactNode } from "react";

export default function RevealSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const initialTransform =
      direction === "up" ? "translateY(40px)"
      : direction === "left" ? "translateX(-40px)"
      : direction === "right" ? "translateX(40px)"
      : "none";
    el.style.opacity = "0";
    el.style.transform = initialTransform;
    el.style.transition = `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
