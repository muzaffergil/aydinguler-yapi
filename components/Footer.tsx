"use client";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-[#0D1421] border-t border-[rgba(255,255,255,0.06)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <button onClick={() => scrollTo("hero")} className="mb-5 text-left block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/logo.png`}
                alt="Aydıngüler Yapı İnşaat"
                className="h-20 w-auto brightness-0 invert"
              />
            </button>
            <p className="text-[#6B7A9E] text-sm leading-relaxed max-w-xs">
              Gaziantep'te 20 yılı aşkın deneyimimizle konut ve ticari yapı inşaatı, mimari tasarım ve gayrimenkul danışmanlığı hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[0.7rem] tracking-widest uppercase text-[#C9A84C] font-semibold mb-5">Hizmetler</p>
            <ul className="space-y-2.5">
              {[
                { id: "hizmetler", label: "İnşaat" },
                { id: "hizmetler", label: "Mimari Tasarım" },
                { id: "hizmetler", label: "Danışmanlık" },
                { id: "hizmetler", label: "Alım & Satım" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="text-[#6B7A9E] text-sm hover:text-white transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[0.7rem] tracking-widest uppercase text-[#C9A84C] font-semibold mb-5">İletişim</p>
            <ul className="space-y-3 text-sm text-[#6B7A9E]">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z" />
                </svg>
                <a href="tel:+903423601525" className="hover:text-white transition-colors">0342 360 15 25</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 8l10 6 10-6" />
                </svg>
                <a href="mailto:info@aydinguleryapi.com" className="hover:text-white transition-colors">info@aydinguleryapi.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>Gaziantep, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.06)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#3D4F70] text-xs">
            © {new Date().getFullYear()} Aydıngüler Yapı ve İnşaat. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5 text-xs text-[#6B7A9E]">
            <button onClick={() => scrollTo("hakkimizda")} className="hover:text-white transition-colors">Hakkımızda</button>
            <button onClick={() => scrollTo("projeler")} className="hover:text-white transition-colors">Projeler</button>
            <button onClick={() => scrollTo("iletisim")} className="hover:text-white transition-colors">İletişim</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
