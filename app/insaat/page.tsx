import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İnşaat Hizmetleri — Gaziantep Konut & Ticari Yapı",
  description: "Gaziantep'te konut ve ticari yapı inşaatı. Aydıngüler Yapı olarak teknik standartlara uygun, kaliteli ve zamanında teslim edilen inşaat hizmetleri sunuyoruz.",
  alternates: { canonical: "https://aydinguleryapi.com/insaat" },
};

export default function InsaatPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Hizmetlerimiz</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">İnşaat</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-6">
              Gaziantep'te Kaliteli Konut İnşaatı
            </h2>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Aydıngüler Yapı olarak Gaziantep'te konut, site, ticari bina ve endüstriyel yapı inşaatı
              hizmetleri sunuyoruz. Her projemizde en güncel yapı teknolojilerini ve kaliteli malzemeleri kullanıyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Deneyimli mühendis ve teknik ekibimizle proje sürecinin her aşamasında yanınızdayız:
              zemin etüdünden iskelet sistemine, çatıdan iç dekorasyona kadar tüm süreçleri yönetiyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed">
              Gaziantep'in iklim koşullarına ve deprem yönetmeliklerine tam uyumlu yapılar inşa ediyoruz.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Konut Projeleri", "Ticari Yapılar", "Endüstriyel Tesisler", "Anahtar Teslim", "Tadilat & Yenileme", "Zemin Etüdü"].map((item) => (
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
          <Link href="/projeler" className="btn-gold">Projelerimizi Görün</Link>
          <Link href="/iletisim" className="btn-outline">Teklif Alın</Link>
        </div>
      </section>
    </>
  );
}
