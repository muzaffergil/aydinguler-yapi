import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projelerimiz — Gaziantep Konut & İnşaat Projeleri",
  description: "Aydıngüler Yapı tamamlanan projeleri. Gaziantep'te Akkent Blokları, Vizyon 2018 ve diğer konut projeleri. 50+ başarılı proje referansı.",
  alternates: { canonical: "https://aydinguleryapi.com/projeler" },
};

const PROJECTS = [
  {
    title: "Akkent Blokları",
    category: "Konut Projesi",
    year: "2023",
    location: "Akkent, Gaziantep",
    desc: "Gaziantep Akkent bölgesinde çok katlı modern konut bloklarından oluşan prestijli proje. Toplam 120 daire, sosyal alanlar ve otopark.",
    num: "01",
  },
  {
    title: "Vizyon 2018",
    category: "Karma Proje",
    year: "2018",
    location: "Gaziantep",
    desc: "Konut ve ticari alanların bir arada sunulduğu, Gaziantep'in vizyon projelerinden biri. Modern mimari anlayışıyla tasarlanan bu proje, şehrin siluetine değer katmıştır.",
    num: "02",
  },
];

export default function ProjelerPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Referanslarımız</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">Projelerimiz</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((p) => (
              <div key={p.title} className="border border-[rgba(201,168,76,0.12)] bg-[#131C26]">
                <div className="h-64 bg-gradient-to-br from-[#1A2535] to-[#0D1117] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 24px)" }} />
                  <span className="font-display text-8xl font-bold text-[#C9A84C] opacity-10">{p.num}</span>
                </div>
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="section-label">{p.category}</span>
                    <span className="text-[#8B877E] text-xs">· {p.year} · {p.location}</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-4">{p.title}</h2>
                  <p className="text-[#8B877E] text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#131C26] border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#8B877E] mb-6">Projeniz için bizimle iletişime geçin</p>
          <Link href="/iletisim" className="btn-gold">İletişim</Link>
        </div>
      </section>
    </>
  );
}
