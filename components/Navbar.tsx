"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  {
    label: "Hizmetler",
    children: [
      { href: "/insaat", label: "İnşaat" },
      { href: "/mimari", label: "Mimari" },
      { href: "/danismanlik", label: "Danışmanlık" },
      { href: "/alim-satim", label: "Alım & Satım" },
    ],
  },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0D1117]/95 backdrop-blur-sm shadow-[0_1px_0_rgba(201,168,76,0.12)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight">
          <span className="font-display text-xl font-bold text-[#F0EBE0] tracking-wide">
            AYDINĞÜLER
          </span>
          <span className="text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase font-medium">
            Yapı & İnşaat
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="text-[0.8rem] tracking-widest uppercase text-[#8B877E] hover:text-[#C9A84C] transition-colors font-medium flex items-center gap-1">
                  {link.label}
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]">
                  <div className="bg-[#131C26] border border-[rgba(201,168,76,0.18)] py-2">
                    {link.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block px-5 py-2.5 text-[0.78rem] tracking-widest uppercase text-[#8B877E] hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.05)] transition-colors"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className="text-[0.8rem] tracking-widest uppercase text-[#8B877E] hover:text-[#C9A84C] transition-colors font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Phone CTA */}
        <a
          href="tel:+903423601525"
          className="hidden md:flex items-center gap-2 text-[#C9A84C] text-sm font-semibold tracking-wide hover:text-[#E5C870] transition-colors"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z"/>
          </svg>
          0342 360 15 25
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-[#F0EBE0] p-1"
          aria-label="Menü"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round"/>
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#131C26] border-t border-[rgba(201,168,76,0.12)] px-6 py-4 space-y-1">
          {LINKS.map((link) =>
            link.children ? (
              <div key={link.label}>
                <p className="text-[0.7rem] tracking-widest uppercase text-[#C9A84C] font-medium py-2">
                  {link.label}
                </p>
                {link.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className="block pl-3 py-2 text-[0.82rem] text-[#8B877E] hover:text-[#F0EBE0] transition-colors"
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-[0.82rem] tracking-wider uppercase text-[#8B877E] hover:text-[#F0EBE0] transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <a href="tel:+903423601525" className="block pt-3 text-[#C9A84C] font-semibold text-sm">
            0342 360 15 25
          </a>
        </div>
      )}
    </header>
  );
}
