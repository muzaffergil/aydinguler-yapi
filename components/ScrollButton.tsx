"use client";
import { ReactNode } from "react";

export default function ScrollButton({
  anchor,
  className,
  children,
}: {
  anchor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      onClick={() => document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" })}
      className={className}
    >
      {children}
    </button>
  );
}
