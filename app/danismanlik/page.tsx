import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İnşaat Danışmanlığı — Gaziantep Proje & Yatırım Danışmanlığı",
  description: "Gaziantep'te inşaat ve gayrimenkul yatırım danışmanlığı. Proje planlama, imar süreçleri, ruhsat işlemleri ve fizibilite çalışmalarında uzman destek.",
  alternates: { canonical: "https://aydinguleryapi.com/danismanlik" },
};

export default function DanismanlikPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Hizmetlerimiz</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">Danışmanlık</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-6">
              Uzman İnşaat & Yatırım Danışmanlığı
            </h2>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              20 yıllık sektör deneyimimizle, Gaziantep'te inşaat ve gayrimenkul yatırımı yapmak isteyenlere
              kapsamlı danışmanlık hizmetleri sunuyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Arsa seçiminden imar durumu araştırmasına, fizibilite çalışmasından ruhsat süreçlerine kadar
              her adımda yanınızdayız.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Yatırım Danışmanlığı", "Fizibilite Çalışması", "İmar Durumu Araştırma", "Ruhsat & İzin Süreçleri", "Proje Yönetimi", "Teknik Denetim"].map((item) => (
              <div key={item} className="p-5 border border-[rgba(201,168,76,0.1)] bg-[#131C26]">
                <div className="w-4 h-0.5 bg-[#C9A84C] mb-3" />
                <p className="text-[#F0EBE0] text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#131C26] border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          <Link href="/iletisim" className="btn-gold">Danışmanlık Alın</Link>
        </div>
      </section>
    </>
  );
}
