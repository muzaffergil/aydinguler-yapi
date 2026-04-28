import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gayrimenkul Alım Satım — Gaziantep Konut & Arsa",
  description: "Gaziantep'te konut, işyeri ve arsa alım satımında güvenilir ortak. Aydıngüler Yapı portföyünü inceleyin, doğru fiyatla gayrimenkul yatırımı yapın.",
  alternates: { canonical: "https://aydinguleryapi.com/alim-satim" },
};

export default function AlimSatimPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Hizmetlerimiz</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">Gayrimenkul Alım & Satım</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-6">
              Gaziantep'te Güvenilir Gayrimenkul Yatırımı
            </h2>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Şirket bünyemizdeki konut, işyeri, arsa ve arazi yatırımlarımızı değerli müşterilerimizin
              talebine göre en doğru fiyat politikasıyla sunuyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Sahip olduğunuz gayrimenkulleri portföyümüzdeki mülklerle takas etme veya satın alma
              konularında da kapsamlı hizmet veriyoruz.
            </p>
            <p className="text-[#8B877E] leading-relaxed">
              Gaziantep'in en değerli lokasyonlarında konut ve ticari gayrimenkul seçeneklerimiz için bizimle iletişime geçin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Satılık Konut", "Kiralık Konut", "Ticari Gayrimenkul", "Arsa & Arazi", "Proje Daireleri", "Takas İmkânı"].map((item) => (
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
          <Link href="/iletisim" className="btn-gold">Portföyü Görüntüleyin</Link>
          <a href="tel:+903423601525" className="btn-outline">0342 360 15 25</a>
        </div>
      </section>
    </>
  );
}
