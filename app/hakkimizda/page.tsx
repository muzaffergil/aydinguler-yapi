import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkımızda — Gaziantep İnşaat Firması",
  description: "Aydıngüler Yapı olarak 20 yılı aşkın deneyimimizle Gaziantep'te inşaat, mimari ve gayrimenkul hizmetleri sunuyoruz. Kalite politikamız, vizyonumuz ve misyonumuz.",
  alternates: { canonical: "https://aydinguleryapi.com/hakkimizda" },
};

export default function HakkimizdaPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Biz Kimiz</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">Hakkımızda</h1>
        </div>
      </section>

      {/* İçerik */}
      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-6">
              Gaziantep'in Güvenilir İnşaat Ortağı
            </h2>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Aydıngüler Yapı ve İnşaat, Gaziantep'te 20 yılı aşkın deneyimiyle konut ve ticari yapı inşaatı,
              mimari tasarım, danışmanlık ve gayrimenkul alım-satım hizmetleri sunmaktadır.
            </p>
            <p className="text-[#8B877E] leading-relaxed mb-5">
              Şirketimiz, her projede teknik mükemmeliyeti ve müşteri memnuniyetini ön planda tutarak
              Gaziantep'in kentsel dönüşümüne ve konut ihtiyacına katkı sağlamaktadır.
            </p>
            <p className="text-[#8B877E] leading-relaxed">
              50'yi aşkın tamamlanan proje ve 1000'i aşkın mutlu müşteri ile Gaziantep inşaat sektöründe
              güvenilir bir marka haline geldik.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Vizyonumuz", text: "Gaziantep'te ve çevre illerde inşaat sektörünün öncü firması olarak sürdürülebilir ve kaliteli projeler üretmeye devam etmek." },
              { title: "Misyonumuz", text: "Müşterilerimize en kaliteli malzeme ve işçilikle, zamanında ve bütçe dahilinde teslim edilen yapılar sunmak." },
              { title: "Kalite Politikamız", text: "ISO standartlarına uygun üretim süreçleri, nitelikli personel ve sürekli iyileştirme anlayışıyla kaliteyi tüm süreçlerde yaşatmak." },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-[rgba(201,168,76,0.12)] bg-[#131C26]">
                <div className="w-6 h-0.5 bg-[#C9A84C] mb-3" />
                <h3 className="font-display text-lg font-bold text-[#F0EBE0] mb-2">{item.title}</h3>
                <p className="text-[#8B877E] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#131C26] border-t border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Link href="/iletisim" className="btn-gold">İletişime Geçin</Link>
        </div>
      </section>
    </>
  );
}
