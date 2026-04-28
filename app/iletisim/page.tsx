import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim — Gaziantep İnşaat Firması Aydıngüler Yapı",
  description: "Aydıngüler Yapı ile iletişime geçin. Gaziantep'te inşaat, mimari tasarım ve gayrimenkul hizmetleri için bizi arayın: 0342 360 15 25.",
  alternates: { canonical: "https://aydinguleryapi.com/iletisim" },
};

export default function IletisimPage() {
  return (
    <>
      <section className="pt-40 pb-20 bg-[#080D13] border-b border-[rgba(201,168,76,0.1)]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Bize Ulaşın</p>
          <span className="gold-line" />
          <h1 className="font-display text-5xl md:text-6xl font-bold text-[#F0EBE0]">İletişim</h1>
        </div>
      </section>

      <section className="py-24 bg-[#0D1117]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* İletişim bilgileri */}
          <div>
            <h2 className="font-display text-3xl font-bold text-[#F0EBE0] mb-10">
              Gaziantep'ten Bize Ulaşın
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
                  </svg>
                </div>
                <div>
                  <p className="section-label mb-1">Telefon</p>
                  <a href="tel:+903423601525" className="font-display text-2xl font-bold text-[#F0EBE0] hover:text-[#C9A84C] transition-colors">
                    0342 360 15 25
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 8l10 6 10-6"/>
                  </svg>
                </div>
                <div>
                  <p className="section-label mb-1">E-posta</p>
                  <a href="mailto:info@aydinguleryapi.com" className="font-display text-xl font-bold text-[#F0EBE0] hover:text-[#C9A84C] transition-colors">
                    info@aydinguleryapi.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-10 h-10 border border-[rgba(201,168,76,0.3)] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div>
                  <p className="section-label mb-1">Adres</p>
                  <p className="font-display text-xl font-bold text-[#F0EBE0]">Gaziantep, Türkiye</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-[rgba(201,168,76,0.12)] bg-[#131C26]">
              <p className="text-[#8B877E] text-sm leading-relaxed">
                <span className="text-[#C9A84C] font-semibold">Çalışma Saatleri:</span><br />
                Pazartesi – Cumartesi: 08:00 – 18:00<br />
                Pazar: Kapalı
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold text-[#F0EBE0] mb-6">Mesaj Gönderin</h2>
            <form className="space-y-4" action="mailto:info@aydinguleryapi.com" method="post" encType="text/plain">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="section-label block mb-2">Ad Soyad</label>
                  <input type="text" name="ad" className="w-full bg-[#131C26] border border-[rgba(201,168,76,0.2)] px-4 py-3 text-sm text-[#F0EBE0] placeholder-[#8B877E] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Adınız" />
                </div>
                <div>
                  <label className="section-label block mb-2">Telefon</label>
                  <input type="tel" name="telefon" className="w-full bg-[#131C26] border border-[rgba(201,168,76,0.2)] px-4 py-3 text-sm text-[#F0EBE0] placeholder-[#8B877E] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="0500 000 00 00" />
                </div>
              </div>
              <div>
                <label className="section-label block mb-2">Konu</label>
                <select name="konu" className="w-full bg-[#131C26] border border-[rgba(201,168,76,0.2)] px-4 py-3 text-sm text-[#8B877E] focus:outline-none focus:border-[#C9A84C] transition-colors">
                  <option value="">Seçin</option>
                  <option value="insaat">İnşaat</option>
                  <option value="mimari">Mimari Tasarım</option>
                  <option value="danismanlik">Danışmanlık</option>
                  <option value="alim-satim">Alım & Satım</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
              <div>
                <label className="section-label block mb-2">Mesajınız</label>
                <textarea name="mesaj" rows={5} className="w-full bg-[#131C26] border border-[rgba(201,168,76,0.2)] px-4 py-3 text-sm text-[#F0EBE0] placeholder-[#8B877E] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder="Projeniz hakkında bilgi verin..." />
              </div>
              <button type="submit" className="btn-gold w-full justify-center">
                Mesaj Gönder
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              <p className="text-[#8B877E] text-xs text-center">Ya da doğrudan arayın: <a href="tel:+903423601525" className="text-[#C9A84C]">0342 360 15 25</a></p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
