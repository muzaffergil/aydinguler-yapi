"use client";
import { useState, useEffect } from "react";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const LINKS = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#hakkimizda", label: "Hakkımızda" },
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#projeler", label: "Projeler" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (y / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (href: string) => {
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EAD8]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(107,76,48,0.14)]"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-[#9B6F1A] transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <button onClick={() => scrollTo("#hero")} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/logo.png`}
            alt="Aydıngüler Yapı İnşaat"
            className="h-[160px] w-auto"
            style={{ mixBlendMode: "multiply" }}
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[0.78rem] tracking-widest uppercase font-semibold transition-colors ${
                active === link.href.slice(1)
                  ? "text-[#9B6F1A]"
                  : "text-[#6B4C30] hover:text-[#9B6F1A]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+903423601525"
          className="hidden md:flex items-center gap-2 text-[#9B6F1A] text-sm font-bold tracking-wide hover:text-[#7A520F] transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
          </svg>
          0342 360 15 25
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#1C0F00] p-1"
          aria-label="Menü"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#F2EAD8] border-t border-[rgba(107,76,48,0.14)] px-6 py-4 space-y-1">
          {LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`block w-full text-left py-2.5 text-[0.82rem] tracking-wider uppercase font-semibold transition-colors ${
                active === link.href.slice(1)
                  ? "text-[#9B6F1A]"
                  : "text-[#6B4C30] hover:text-[#1C0F00]"
              }`}
            >
              {link.label}
            </button>
          ))}
          <a href="tel:+903423601525" className="block pt-3 text-[#9B6F1A] font-bold text-sm">
            0342 360 15 25
          </a>
        </div>
      )}
    </header>
  );
}
