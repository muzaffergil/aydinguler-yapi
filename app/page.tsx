import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aydıngüler Yapı | Gaziantep İnşaat & Konut Projeleri",
  description:
    "Gaziantep'in köklü inşaat firması Aydıngüler Yapı. Konut projeleri, mimari tasarım, danışmanlık ve gayrimenkul alım-satım. 20 yıllık deneyim, 50+ proje.",
  alternates: { canonical: "https://aydinguleryapi.com" },
};

const STATS = [
  { value: "20+", label: "Yıl Deneyim" },
  { value: "50+", label: "Tamamlanan Proje" },
  { value: "1000+", label: "Mutlu Müşteri" },
  { value: "100%", label: "Kalite Güvencesi" },
];

const SERVICES = [
  { href: "/insaat", icon: "🏗", title: "İnşaat", desc: "Konut ve ticari yapılarda yüksek teknik standartlar ve kalite ilkeleriyle üretim." },
  { href: "/mimari", icon: "📐", title: "Mimari", desc: "Fonksiyonel ve estetik mimari projeler. İç mekan tasarımından imar çalışmalarına." },
  { href: "/danismanlik", icon: "💼", title: "Danışmanlık", desc: "Proje planlama, imar süreçleri ve yatırım danışmanlığında uzman rehberlik." },
  { href: "/alim-satim", icon: "🏠", title: "Alım & Satım", desc: "Konut, işyeri ve arsa alım-satımında doğru fiyat politikasıyla güvenilir ortaklık." },
];

const VALUES = [
  { title: "Zaman Hassasiyeti", desc: "Teslim tarihlerine kesin uyum, sözümüzü tutarız." },
  { title: "Yüksek Teknoloji", desc: "Modern yapı teknolojileri ve malzemeler kullanıyoruz." },
  { title: "Takım Çalışması", desc: "Uzman kadromuzla koordineli ve etkin iş yürütme." },
  { title: "Kalite Güvencesi", desc: "Her projede en yüksek kalite standartlarını uygularız." },
  { title: "Uzman Personel", desc: "Alanında deneyimli mühendis ve mimar ekibi." },
  { title: "Çevreye Saygı", desc: "Sürdürülebilir inşaat anlayışı ve çevre bilinci." },
];

const PROJECTS = [
  { href: "/projeler", title: "Akkent Blokları", category: "Konut Projesi", desc: "Gaziantep Akkent bölgesinde çok katlı modern konut bloklarından oluşan prestijli proje.", year: "2023", num: "01" },
  { href: "/projeler", title: "Vizyon 2018", category: "Karma Proje", desc: "Konut ve ticari alanların bir arada sunulduğu, Gaziantep'in vizyon projelerinden biri.", year: "2018", num: "02" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#C9A84C] opacity-[0.04] blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <p className="section-label mb-6">Gaziantep · Türkiye</p>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-[#F0EBE0]">Gaziantep'i </span>
              <br />
              <span className="text-[#C9A84C]">Birlikte </span>
              <span className="text-[#F0EBE0]">İnşa</span>
              <br />
              <span className="text-[#F0EBE0]">Ediyoruz.</span>
            </h1>
            <p className="text-[#8B877E] text-lg leading-relaxed max-w-xl mb-10">
              20 yılı aşkın deneyimimizle Gaziantep'te konut projeleri, mimari tasarım,
              danışmanlık ve gayrimenkul hizmetleri sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/projeler" className="btn-gold">
                Projelerimizi İnceleyin
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
              <Link href="/iletisim" className="btn-outline">İletişime Geçin</Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-[rgba(201,168,76,0.12)] bg-[rgba(19,28,38,0.9)]">
          <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-3xl font-bold text-[#C9A84C]">{s.value}</p>
                <p className="text-[#8B877E] text-[0.7rem] tracking-[0.15em] uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="py-24 bg-[#0D1117]" id="hizmetler">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-3">Ne Yapıyoruz</p>
            <span className="gold-line" />
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0]">Hizmetlerimiz</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.08)]">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="hover-card group bg-[#0D1117] p-8 hover:bg-[#131C26] transition-colors">
                <div className="text-4xl mb-6">{s.icon}</div>
                <h3 className="font-display text-xl font-bold text-[#F0EBE0] mb-3 group-hover:text-[#C9A84C] transition-colors">{s.title}</h3>
                <p className="text-[#8B877E] text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-[#C9A84C] text-[0.7rem] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                  Detaylar <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROJELER */}
      <section className="py-24 bg-[#080D13]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <p className="section-label mb-3">Referanslarımız</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0]">Tamamlanan Projeler</h2>
            </div>
            <Link href="/projeler" className="btn-outline shrink-0">Tüm Projeler</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <Link key={p.title} href={p.href} className="hover-card group border border-[rgba(201,168,76,0.12)] bg-[#131C26]">
                <div className="h-52 bg-gradient-to-br from-[#1A2535] to-[#0D1117] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 20px)" }} />
                  <span className="font-display text-7xl font-bold text-[#C9A84C] opacity-10">{p.num}</span>
                </div>
                <div className="p-7">
                  <div className="flex items-center justify-between mb-2">
                    <span className="section-label">{p.category}</span>
                    <span className="text-[#8B877E] text-xs">{p.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-[#F0EBE0] mb-3 group-hover:text-[#C9A84C] transition-colors">{p.title}</h3>
                  <p className="text-[#8B877E] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label mb-3">Farkımız</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0] mb-6">Neden Aydıngüler Yapı?</h2>
              <p className="text-[#8B877E] leading-relaxed mb-8">
                Gaziantep'te inşaat sektöründe güvenilirlik ve kaliteyi bir arada sunuyoruz.
                Her projede müşteri memnuniyetini ön planda tutarak çalışıyoruz.
              </p>
              <Link href="/hakkimizda" className="btn-gold">Hakkımızda Daha Fazla</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="p-5 border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-colors group">
                  <div className="w-6 h-0.5 bg-[#C9A84C] mb-4" />
                  <h3 className="font-display text-base font-bold text-[#F0EBE0] mb-2 group-hover:text-[#C9A84C] transition-colors">{v.title}</h3>
                  <p className="text-[#8B877E] text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#131C26] border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Projeniz İçin</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0] mb-5">Birlikte Çalışalım</h2>
          <p className="text-[#8B877E] max-w-xl mx-auto mb-10 leading-relaxed">
            Gaziantep'teki inşaat veya gayrimenkul projeniz için uzman ekibimizle iletişime geçin.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/iletisim" className="btn-gold">Bize Ulaşın</Link>
            <a href="tel:+903423601525" className="btn-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/></svg>
              0342 360 15 25
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
