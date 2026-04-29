import type { Metadata } from "next";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import ScrollButton from "@/components/ScrollButton";

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
  {
    id: "insaat",
    icon: "🏗",
    title: "İnşaat",
    detail:
      "Aydıngüler Yapı olarak konut ve ticari yapı inşaatında 20 yılı aşkın deneyimimizle Gaziantep'te güvenilir projeler üretiyoruz. Betonarme, çelik konstrüksiyon ve prefabrik sistemlerde uzman kadromuzla en yüksek teknik standartları uyguluyoruz.",
    bullets: ["Konut & villa projeleri", "Ticari & ofis yapıları", "Endüstriyel tesisler", "Tadilat & restorasyon"],
  },
  {
    id: "mimari",
    icon: "📐",
    title: "Mimari Tasarım",
    detail:
      "Deneyimli mimar ve mühendis ekibimizle yaşam alanlarınızı hayalinizdeki şekle dönüştürüyoruz. Ön proje çalışmasından yapı ruhsatı sürecine, iç mekan tasarımından peyzaja kadar tüm aşamalarda yanınızdayız.",
    bullets: ["Mimari proje & rölöve", "İç mekan tasarımı", "Yapı ruhsatı danışmanlığı", "3D görselleştirme"],
  },
  {
    id: "danismanlik",
    icon: "💼",
    title: "Danışmanlık",
    detail:
      "İnşaat sektörünün karmaşık süreçlerinde yanınızdayız. Arazi seçimi, fizibilite analizi, imar durumu araştırması ve proje finansmanında uzman danışmanlık sunuyoruz.",
    bullets: ["Fizibilite & yatırım analizi", "İmar & ruhsat süreçleri", "Proje yönetimi", "Yasal danışmanlık"],
  },
  {
    id: "alim-satim",
    icon: "🏠",
    title: "Alım & Satım",
    detail:
      "Gaziantep gayrimenkul piyasasındaki derin bilgi birikimimizle konut, işyeri ve arsa alım-satım süreçlerinizde güvenilir çözüm ortağınızız. Doğru fiyat politikası ve şeffaf süreç yönetimiyle çalışıyoruz.",
    bullets: ["Konut & daire satışı", "İşyeri & arsa alım-satımı", "Piyasa değer analizi", "Tapu & hukuki süreç desteği"],
  },
];

const VALUES = [
  { title: "Zaman Hassasiyeti", desc: "Teslim tarihlerine kesin uyum, sözümüzü tutarız.", icon: "⏱" },
  { title: "Yüksek Teknoloji", desc: "Modern yapı teknolojileri ve malzemeler kullanıyoruz.", icon: "⚙️" },
  { title: "Takım Çalışması", desc: "Uzman kadromuzla koordineli ve etkin iş yürütme.", icon: "🤝" },
  { title: "Kalite Güvencesi", desc: "Her projede en yüksek kalite standartlarını uygularız.", icon: "✓" },
  { title: "Uzman Personel", desc: "Alanında deneyimli mühendis ve mimar ekibi.", icon: "👷" },
  { title: "Çevreye Saygı", desc: "Sürdürülebilir inşaat anlayışı ve çevre bilinci.", icon: "🌿" },
];

const PROJECTS = [
  {
    title: "Akkent Blokları",
    category: "Konut Projesi",
    desc: "Gaziantep Akkent bölgesinde çok katlı modern konut bloklarından oluşan prestijli proje. 120 bağımsız birim, kapalı otopark, sosyal donatılar.",
    year: "2023",
    num: "01",
    details: ["120 konut birimi", "12 kat", "Kapalı otopark", "Sosyal alan"],
  },
  {
    title: "Vizyon 2018",
    category: "Karma Proje",
    desc: "Konut ve ticari alanların bir arada sunulduğu, Gaziantep'in vizyon projelerinden biri. Alt katlarda işyerleri, üst katlarda konforlu daireler.",
    year: "2018",
    num: "02",
    details: ["80 konut birimi", "24 ticari ünite", "8 kat", "Merkezi konum"],
  },
  {
    title: "Şehitkamil Residence",
    category: "Lüks Konut",
    desc: "Şehitkamil ilçesinde butik tasarım anlayışıyla inşa edilen, yüksek kalite malzeme ve işçilikle öne çıkan konut projesi.",
    year: "2020",
    num: "03",
    details: ["48 konut birimi", "6 kat", "Yerden ısıtma", "Akıllı ev sistemi"],
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#F2EAD8]">
        {/* Warm depth background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2EAD8] via-[#EDE5CF] to-[#E8DCBF]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(107,76,48,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(107,76,48,0.4) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Warm amber radial glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#C9A84C] opacity-[0.07] blur-[160px]" />
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] rounded-full bg-[#9B6F1A] opacity-[0.05] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <RevealSection direction="up" delay={0}>
            <p className="section-label mb-6">Gaziantep · Türkiye</p>
          </RevealSection>
          <RevealSection direction="up" delay={100}>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6 text-[#1C0F00]">
              Gaziantep'i{" "}
              <br />
              <span className="text-[#9B6F1A]">Birlikte </span>
              İnşa
              <br />
              Ediyoruz.
            </h1>
          </RevealSection>
          <RevealSection direction="up" delay={200}>
            <p className="text-[#6B4C30] text-lg leading-relaxed max-w-xl mb-10">
              20 yılı aşkın deneyimimizle Gaziantep'te konut projeleri, mimari tasarım,
              danışmanlık ve gayrimenkul hizmetleri sunuyoruz.
            </p>
          </RevealSection>
          <RevealSection direction="up" delay={300}>
            <div className="flex flex-wrap gap-4">
              <ScrollButton anchor="projeler" className="btn-gold">
                Projelerimizi İnceleyin
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </ScrollButton>
              <ScrollButton anchor="iletisim" className="btn-outline">
                İletişime Geçin
              </ScrollButton>
            </div>
          </RevealSection>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-[rgba(107,76,48,0.14)] bg-[rgba(242,234,216,0.85)] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <RevealSection key={s.label} direction="up" delay={i * 80}>
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl font-bold text-[#9B6F1A]">{s.value}</p>
                  <p className="text-[#9E7D60] text-[0.7rem] tracking-[0.15em] uppercase mt-1">{s.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[#9E7D60] text-[0.65rem] tracking-[0.25em] uppercase">Kaydırın</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#9B6F1A] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── HAKKIMIZDA ────────────────────────────────────────── */}
      <section id="hakkimizda" className="py-28 bg-[#EAE0CA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealSection direction="left">
              <div>
                <p className="section-label mb-3">Biz Kimiz</p>
                <span className="gold-line" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C0F00] mb-6">
                  Aydıngüler Yapı Hakkında
                </h2>
                <p className="text-[#6B4C30] leading-relaxed mb-5">
                  Aydıngüler Yapı, 2004 yılında Gaziantep'te kurulmuş; konut, ticari ve endüstriyel
                  yapı inşaatı, mimari tasarım ve gayrimenkul danışmanlığı alanlarında hizmet veren
                  köklü bir inşaat şirketidir.
                </p>
                <p className="text-[#6B4C30] leading-relaxed mb-5">
                  20 yılı aşkın birikimimizle 50'den fazla projeyi başarıyla tamamladık.
                  Uzman mühendis ve mimar kadromuz, modern yapı teknolojileriyle donatılmış
                  altyapımız ve güçlü tedarikçi ağımızla her projede en yüksek kalite
                  standartlarını sağlıyoruz.
                </p>
                <p className="text-[#6B4C30] leading-relaxed mb-8">
                  Gaziantep'in gelişimine katkı sağlama sorumluluğuyla hareket ediyor,
                  her yapıyı yaşanacak bir değer olarak tasarlıyoruz.
                </p>
                <div className="flex flex-wrap gap-8">
                  {[
                    { n: "2004", lbl: "Kuruluş Yılı" },
                    { n: "50+", lbl: "Proje" },
                    { n: "20+", lbl: "Uzman Kadro" },
                  ].map((item) => (
                    <div key={item.lbl} className="text-center">
                      <p className="font-display text-3xl font-bold text-[#9B6F1A]">{item.n}</p>
                      <p className="text-[#9E7D60] text-xs tracking-widest uppercase mt-1">{item.lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: "Vizyonumuz", desc: "Gaziantep'te ve bölgede güvenilirlik, kalite ve yenilik ile öncü inşaat firması olmak." },
                  { title: "Misyonumuz", desc: "Müşteri memnuniyetini esas alarak zamanında, kaliteli ve sürdürülebilir yapılar üretmek." },
                  { title: "Değerlerimiz", desc: "Dürüstlük, şeffaflık ve iş ahlakından taviz vermeden çalışmak temel ilkemizdir." },
                  { title: "Kalite Politikası", desc: "TSE standartları ve uluslararası normları karşılayan malzeme ve yöntemlerle üretim." },
                ].map((card, i) => (
                  <div
                    key={card.title}
                    className={`p-6 bg-[#FAF6EE] border border-[rgba(107,76,48,0.12)] hover:border-[rgba(155,111,26,0.35)] transition-colors shadow-sm ${
                      i % 2 === 1 ? "mt-6" : ""
                    }`}
                  >
                    <div className="w-5 h-0.5 bg-[#9B6F1A] mb-4" />
                    <h3 className="font-display text-base font-bold text-[#1C0F00] mb-2">{card.title}</h3>
                    <p className="text-[#6B4C30] text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── HİZMETLER ─────────────────────────────────────────── */}
      <section id="hizmetler" className="py-28 bg-[#F2EAD8]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Ne Yapıyoruz</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C0F00]">Hizmetlerimiz</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.id} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <div className="hover-card group bg-[#FAF6EE] border border-[rgba(107,76,48,0.12)] hover:border-[rgba(155,111,26,0.35)] p-8 transition-all duration-300 h-full shadow-sm">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="font-display text-2xl font-bold text-[#1C0F00] mb-3 group-hover:text-[#9B6F1A] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#6B4C30] text-sm leading-relaxed mb-5">{s.detail}</p>
                  <ul className="space-y-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[#6B4C30] text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#9B6F1A] shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJELER ──────────────────────────────────────────── */}
      <section id="projeler" className="py-28 bg-[#EAE0CA]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Referanslarımız</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C0F00]">Tamamlanan Projeler</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <RevealSection key={p.title} direction="up" delay={i * 120}>
                <div className="hover-card group border border-[rgba(107,76,48,0.12)] bg-[#FAF6EE] hover:border-[rgba(155,111,26,0.35)] transition-all duration-300 shadow-sm">
                  {/* Card image area */}
                  <div className="h-48 bg-gradient-to-br from-[#E2D6BA] to-[#D4C6A0] flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #9B6F1A, #9B6F1A 1px, transparent 1px, transparent 20px)",
                      }}
                    />
                    <span className="font-display text-8xl font-bold text-[#9B6F1A] opacity-[0.12] group-hover:opacity-[0.2] transition-opacity">
                      {p.num}
                    </span>
                    <span className="absolute top-4 right-4 text-xs text-[#9E7D60] tracking-widest font-medium">{p.year}</span>
                  </div>
                  <div className="p-6">
                    <span className="section-label block mb-2">{p.category}</span>
                    <h3 className="font-display text-xl font-bold text-[#1C0F00] mb-3 group-hover:text-[#9B6F1A] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#6B4C30] text-xs leading-relaxed mb-4">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[rgba(107,76,48,0.1)]">
                      {p.details.map((d) => (
                        <div key={d} className="flex items-center gap-1.5 text-[0.7rem] text-[#9E7D60]">
                          <span className="w-1 h-1 rounded-full bg-[#9B6F1A] shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEDEN BİZ ─────────────────────────────────────────── */}
      <section id="neden-biz" className="py-28 bg-[#F2EAD8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealSection direction="left">
              <div>
                <p className="section-label mb-3">Farkımız</p>
                <span className="gold-line" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C0F00] mb-6">
                  Neden Aydıngüler Yapı?
                </h2>
                <p className="text-[#6B4C30] leading-relaxed mb-6">
                  Gaziantep'te inşaat sektöründe güvenilirlik ve kaliteyi bir arada sunuyoruz.
                  Her projede müşteri memnuniyetini ön planda tutarak çalışıyoruz.
                </p>
                <p className="text-[#6B4C30] leading-relaxed mb-8">
                  Zamanında teslim, şeffaf maliyet yönetimi ve satış sonrası destek ile
                  müşterilerimizin yanındayız. 1000'den fazla mutlu müşteri bizimle çalışmayı tercih etti.
                </p>
                <blockquote className="border-l-2 border-[#9B6F1A] pl-5 mb-8 bg-[#FAF6EE] py-4 pr-4">
                  <p className="text-[#1C0F00] text-sm italic leading-relaxed font-display">
                    "Kaliteyi sadece teslim günü değil, her aşamada güvence altına alıyoruz."
                  </p>
                </blockquote>
                <ScrollButton anchor="iletisim" className="btn-gold">
                  Teklif Alın
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </ScrollButton>
              </div>
            </RevealSection>

            <RevealSection direction="right" delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {VALUES.map((v) => (
                  <div
                    key={v.title}
                    className="p-5 bg-[#FAF6EE] border border-[rgba(107,76,48,0.12)] hover:border-[rgba(155,111,26,0.35)] transition-colors group shadow-sm"
                  >
                    <div className="text-xl mb-3 opacity-80">{v.icon}</div>
                    <h3 className="font-display text-base font-bold text-[#1C0F00] mb-2 group-hover:text-[#9B6F1A] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-[#6B4C30] text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── İLETİŞİM ──────────────────────────────────────────── */}
      <section id="iletisim" className="py-28 bg-[#EAE0CA]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Bize Ulaşın</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1C0F00]">İletişim</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <RevealSection direction="left">
              <div>
                <p className="text-[#6B4C30] leading-relaxed mb-10">
                  Projeleriniz için uzman ekibimizle tanışın. Gaziantep'teki ofisimizde sizi
                  ağırlamaktan memnuniyet duyarız.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14z" />
                        </svg>
                      ),
                      label: "Telefon",
                      value: "0342 360 15 25",
                      href: "tel:+903423601525",
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                      ),
                      label: "E-posta",
                      value: "info@aydinguleryapi.com",
                      href: "mailto:info@aydinguleryapi.com",
                    },
                    {
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      label: "Adres",
                      value: "Gaziantep, Türkiye",
                      href: undefined,
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[rgba(155,111,26,0.3)] bg-[#FAF6EE] flex items-center justify-center text-[#9B6F1A] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[0.65rem] tracking-widest uppercase text-[#9E7D60] mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#1C0F00] text-sm hover:text-[#9B6F1A] transition-colors font-medium">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#1C0F00] text-sm font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[rgba(107,76,48,0.12)]">
                  <p className="text-[0.65rem] tracking-widest uppercase text-[#9E7D60] mb-3">Çalışma Saatleri</p>
                  <p className="text-[#1C0F00] text-sm font-medium">Pazartesi – Cumartesi: 08:00 – 18:00</p>
                  <p className="text-[#9E7D60] text-xs mt-1">Pazar günleri randevuyla görüşme yapılmaktadır.</p>
                </div>
              </div>
            </RevealSection>

            {/* Contact form */}
            <RevealSection direction="right" delay={150}>
              <ContactForm />
            </RevealSection>
          </div>
        </div>
      </section>
    </>
  );
}
