import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#080D13] border-t border-[rgba(201,168,76,0.12)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="font-display text-2xl font-bold text-[#F0EBE0] tracking-wide block">
                AYDINĞÜLER
              </span>
              <span className="text-[0.6rem] tracking-[0.3em] text-[#C9A84C] uppercase font-medium">
                Yapı & İnşaat
              </span>
            </div>
            <p className="text-[#8B877E] text-sm leading-relaxed max-w-xs">
              Gaziantep'te 20 yılı aşkın deneyimimizle konut ve ticari yapı inşaatı, mimari tasarım ve gayrimenkul danışmanlığı hizmetleri sunuyoruz.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="section-label mb-5">Hizmetler</p>
            <ul className="space-y-2.5">
              {[
                { href: "/insaat", label: "İnşaat" },
                { href: "/mimari", label: "Mimari Tasarım" },
                { href: "/danismanlik", label: "Danışmanlık" },
                { href: "/alim-satim", label: "Alım & Satım" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[#8B877E] text-sm hover:text-[#C9A84C] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">İletişim</p>
            <ul className="space-y-3 text-sm text-[#8B877E]">
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
                </svg>
                <a href="tel:+903423601525" className="hover:text-[#C9A84C] transition-colors">0342 360 15 25</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/>
                </svg>
                <a href="mailto:info@aydinguleryapi.com" className="hover:text-[#C9A84C] transition-colors">info@aydinguleryapi.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="mt-0.5 shrink-0 text-[#C9A84C]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span>Gaziantep, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(201,168,76,0.08)] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#8B877E] text-xs">
            © {new Date().getFullYear()} Aydıngüler Yapı ve İnşaat. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-5 text-xs text-[#8B877E]">
            <Link href="/hakkimizda" className="hover:text-[#C9A84C] transition-colors">Hakkımızda</Link>
            <Link href="/projeler" className="hover:text-[#C9A84C] transition-colors">Projeler</Link>
            <Link href="/iletisim" className="hover:text-[#C9A84C] transition-colors">İletişim</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
