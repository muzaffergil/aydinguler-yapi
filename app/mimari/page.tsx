import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mimari Tasarım — Gaziantep Mimarlık Hizmetleri",
  description: "Gaziantep'te mimari proje ve tasarım hizmetleri. Aydıngüler Yapı mimarları ile fonksiyonel, estetik ve imar mevzuatına uygun projeler üretiyoruz.",
  alternates: { canonical: "https://aydinguleryapi.com/mimari" },
};

export default function MimariPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Hizmetlerimiz</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">Mimari Tasarım</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-6">
              Gaziantep'e Özgü Mimari Çözümler
            </h2>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Aydıngüler Yapı bünyesindeki deneyimli mimar kadromuz, Gaziantep'in kentsel dokusuna uygun,
              estetik ve işlevsel projeler tasarlıyor. Her yapıyı hem bir yaşam alanı hem de kalıcı bir değer
              olarak ele alıyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Ön proje çalışmalarından uygulama projelerine, iç mekan tasarımından peyzaja kadar tüm
              mimari süreçleri tek çatı altında yönetiyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Mimari Proje", "Statik Proje", "Mekanik Tesisat", "Elektrik Projesi", "İç Mekan Tasarımı", "Peyzaj Tasarımı"].map((item) => (
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
          <Link href="/iletisim" className="btn-gold">Proje Danışmanlığı Alın</Link>
          <Link href="/projeler" className="btn-outline">Projelerimiz</Link>
        </div>
      </section>
    </>
  );
}
