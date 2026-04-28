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
    short: "Konut ve ticari yapılarda yüksek teknik standartlar ve kalite.",
    detail:
      "Aydıngüler Yapı olarak konut ve ticari yapı inşaatında 20 yılı aşkın deneyimimizle Gaziantep'te güvenilir projeler üretiyoruz. Betonarme, çelik konstrüksiyon ve prefabrik sistemlerde uzman kadromuzla en yüksek teknik standartları uyguluyoruz. Her projede TSE standartlarına tam uyum, denetimli üretim süreciyle teslim garantisi sunuyoruz.",
    bullets: ["Konut & villa projeleri", "Ticari & ofis yapıları", "Endüstriyel tesisler", "Tadilat & restorasyon"],
  },
  {
    id: "mimari",
    icon: "📐",
    title: "Mimari Tasarım",
    short: "Fonksiyonel ve estetik mimari projeler, iç mekan tasarımından imara.",
    detail:
      "Deneyimli mimar ve mühendis ekibimizle yaşam alanlarınızı hayalinizdeki şekle dönüştürüyoruz. Ön proje çalışmasından yapı ruhsatı sürecine, iç mekan tasarımından peyzaja kadar tüm aşamalarda yanınızdayız. Müşterilerimizin yaşam biçimini ve beklentilerini merkeze alan, sürdürülebilir ve özgün tasarımlar üretiyoruz.",
    bullets: ["Mimari proje & rölöve", "İç mekan tasarımı", "Yapı ruhsatı danışmanlığı", "3D görselleştirme"],
  },
  {
    id: "danismanlik",
    icon: "💼",
    title: "Danışmanlık",
    short: "Proje planlama, imar süreçleri ve yatırım danışmanlığında rehberlik.",
    detail:
      "İnşaat sektörünün karmaşık süreçlerinde yanınızdayız. Arazi seçimi, fizibilite analizi, imar durumu araştırması, proje finansmanı ve yasal izin süreçlerinde uzman danışmanlık sunuyoruz. Yatırımcılar ve bireysel müşteriler için risk değerlendirme ve portföy yönetimi alanlarında da destek veriyoruz.",
    bullets: ["Fizibilite & yatırım analizi", "İmar & ruhsat süreçleri", "Proje yönetimi", "Yasal danışmanlık"],
  },
  {
    id: "alim-satim",
    icon: "🏠",
    title: "Alım & Satım",
    short: "Konut, işyeri ve arsa alım-satımında güvenilir ortaklık.",
    detail:
      "Gaziantep gayrimenkul piyasasındaki derin bilgi birikimimizle konut, işyeri ve arsa alım-satım süreçlerinizde güvenilir çözüm ortağınızız. Doğru fiyat politikası, piyasa analizi ve şeffaf süreç yönetimiyle her iki tarafın da menfaatlerini gözeterek işlem yapıyoruz. Portföyümüzdeki seçili mülklere özel erişim imkânı sunuyoruz.",
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
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-[#C9A84C] opacity-[0.04] blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#1A3A5C] opacity-[0.08] blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24">
          <RevealSection direction="up" delay={0}>
            <p className="section-label mb-6">Gaziantep · Türkiye</p>
          </RevealSection>
          <RevealSection direction="up" delay={100}>
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
              <span className="text-[#F0EBE0]">Gaziantep'i </span>
              <br />
              <span className="text-[#C9A84C]">Birlikte </span>
              <span className="text-[#F0EBE0]">İnşa</span>
              <br />
              <span className="text-[#F0EBE0]">Ediyoruz.</span>
            </h1>
          </RevealSection>
          <RevealSection direction="up" delay={200}>
            <p className="text-[#8B877E] text-lg leading-relaxed max-w-xl mb-10">
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
        <div className="relative border-t border-[rgba(201,168,76,0.12)] bg-[rgba(19,28,38,0.9)]">
          <div className="max-w-7xl mx-auto px-6 py-7 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <RevealSection key={s.label} direction="up" delay={i * 80}>
                <div className="text-center md:text-left">
                  <p className="font-display text-3xl font-bold text-[#C9A84C]">{s.value}</p>
                  <p className="text-[#8B877E] text-[0.7rem] tracking-[0.15em] uppercase mt-1">{s.label}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[#8B877E] text-[0.65rem] tracking-[0.25em] uppercase">Kaydırın</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#C9A84C] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─── HAKKIMIZDA ────────────────────────────────────────── */}
      <section id="hakkimizda" className="py-28 bg-[#080D13]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <RevealSection direction="left">
              <div>
                <p className="section-label mb-3">Biz Kimiz</p>
                <span className="gold-line" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0] mb-6">
                  Aydıngüler Yapı Hakkında
                </h2>
                <p className="text-[#8B877E] leading-relaxed mb-5">
                  Aydıngüler Yapı, 2004 yılında Gaziantep'te kurulmuş; konut, ticari ve endüstriyel
                  yapı inşaatı, mimari tasarım ve gayrimenkul danışmanlığı alanlarında hizmet veren
                  köklü bir inşaat şirketidir.
                </p>
                <p className="text-[#8B877E] leading-relaxed mb-5">
                  20 yılı aşkın birikimimizle 50'den fazla projeyi başarıyla tamamladık.
                  Uzman mühendis ve mimar kadromuz, modern yapı teknolojileriyle donatılmış
                  altyapımız ve güçlü tedarikçi ağımızla her projede en yüksek kalite
                  standartlarını sağlıyoruz.
                </p>
                <p className="text-[#8B877E] leading-relaxed mb-8">
                  Gaziantep'in gelişimine katkı sağlama sorumluluğuyla hareket ediyor,
                  her yapıyı yaşanacak bir değer olarak tasarlıyoruz.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { n: "2004", lbl: "Kuruluş Yılı" },
                    { n: "50+", lbl: "Proje" },
                    { n: "20+", lbl: "Uzman Kadro" },
                  ].map((item) => (
                    <div key={item.lbl} className="text-center">
                      <p className="font-display text-3xl font-bold text-[#C9A84C]">{item.n}</p>
                      <p className="text-[#8B877E] text-xs tracking-widest uppercase mt-1">{item.lbl}</p>
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
                    className={`p-6 border border-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.3)] transition-colors ${
                      i % 2 === 1 ? "mt-6" : ""
                    }`}
                  >
                    <div className="w-5 h-0.5 bg-[#C9A84C] mb-4" />
                    <h3 className="font-display text-base font-bold text-[#F0EBE0] mb-2">{card.title}</h3>
                    <p className="text-[#8B877E] text-xs leading-relaxed">{card.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── HİZMETLER ─────────────────────────────────────────── */}
      <section id="hizmetler" className="py-28 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Ne Yapıyoruz</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0]">Hizmetlerimiz</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((s, i) => (
              <RevealSection key={s.id} direction={i % 2 === 0 ? "left" : "right"} delay={i * 100}>
                <div className="hover-card group bg-[#131C26] border border-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.25)] p-8 transition-all duration-300 h-full">
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h3 className="font-display text-2xl font-bold text-[#F0EBE0] mb-3 group-hover:text-[#C9A84C] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#8B877E] text-sm leading-relaxed mb-5">{s.detail}</p>
                  <ul className="space-y-1.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-[#8B877E] text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
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
      <section id="projeler" className="py-28 bg-[#080D13]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Referanslarımız</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0]">Tamamlanan Projeler</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <RevealSection key={p.title} direction="up" delay={i * 120}>
                <div className="hover-card group border border-[rgba(201,168,76,0.12)] bg-[#131C26] hover:border-[rgba(201,168,76,0.3)] transition-all duration-300">
                  <div className="h-48 bg-gradient-to-br from-[#1A2535] to-[#0D1117] flex items-center justify-center relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg, #C9A84C, #C9A84C 1px, transparent 1px, transparent 20px)",
                      }}
                    />
                    <span className="font-display text-8xl font-bold text-[#C9A84C] opacity-[0.08] group-hover:opacity-[0.14] transition-opacity">
                      {p.num}
                    </span>
                    <span className="absolute top-4 right-4 text-xs text-[#8B877E] tracking-widest">{p.year}</span>
                  </div>
                  <div className="p-6">
                    <span className="section-label block mb-2">{p.category}</span>
                    <h3 className="font-display text-xl font-bold text-[#F0EBE0] mb-3 group-hover:text-[#C9A84C] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[#8B877E] text-xs leading-relaxed mb-4">{p.desc}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {p.details.map((d) => (
                        <div key={d} className="flex items-center gap-1.5 text-[0.7rem] text-[#8B877E]">
                          <span className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
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
      <section id="neden-biz" className="py-28 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealSection direction="left">
              <div>
                <p className="section-label mb-3">Farkımız</p>
                <span className="gold-line" />
                <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0] mb-6">
                  Neden Aydıngüler Yapı?
                </h2>
                <p className="text-[#8B877E] leading-relaxed mb-6">
                  Gaziantep'te inşaat sektöründe güvenilirlik ve kaliteyi bir arada sunuyoruz.
                  Her projede müşteri memnuniyetini ön planda tutarak çalışıyoruz.
                </p>
                <p className="text-[#8B877E] leading-relaxed mb-8">
                  Zamanında teslim, şeffaf maliyet yönetimi ve satış sonrası destek ile
                  müşterilerimizin yanındayız. 1000'den fazla mutlu müşteri bizimle çalışmayı tercih etti.
                </p>
                <blockquote className="border-l-2 border-[#C9A84C] pl-5 mb-8">
                  <p className="text-[#F0EBE0] text-sm italic leading-relaxed">
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
                {VALUES.map((v, i) => (
                  <div
                    key={v.title}
                    className="p-5 border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-colors group"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="text-xl mb-3 opacity-70">{v.icon}</div>
                    <h3 className="font-display text-base font-bold text-[#F0EBE0] mb-2 group-hover:text-[#C9A84C] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-[#8B877E] text-xs leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ─── İLETİŞİM ──────────────────────────────────────────── */}
      <section id="iletisim" className="py-28 bg-[#080D13]">
        <div className="max-w-7xl mx-auto px-6">
          <RevealSection direction="up">
            <div className="mb-16">
              <p className="section-label mb-3">Bize Ulaşın</p>
              <span className="gold-line" />
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#F0EBE0]">İletişim</h2>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <RevealSection direction="left">
              <div>
                <p className="text-[#8B877E] leading-relaxed mb-10">
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
                      <div className="w-10 h-10 border border-[rgba(201,168,76,0.2)] flex items-center justify-center text-[#C9A84C] shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-[0.65rem] tracking-widest uppercase text-[#8B877E] mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#F0EBE0] text-sm hover:text-[#C9A84C] transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-[#F0EBE0] text-sm">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-[rgba(201,168,76,0.1)]">
                  <p className="text-[0.65rem] tracking-widest uppercase text-[#8B877E] mb-3">Çalışma Saatleri</p>
                  <p className="text-[#F0EBE0] text-sm">Pazartesi – Cumartesi: 08:00 – 18:00</p>
                  <p className="text-[#8B877E] text-xs mt-1">Pazar günleri randevuyla görüşme yapılmaktadır.</p>
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
