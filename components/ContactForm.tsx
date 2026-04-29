"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Ad Soyad: ${form.name}%0ATelefon: ${form.phone}%0AKonu: ${form.subject}%0AMesaj: ${form.message}`;
    window.location.href = `mailto:info@aydinguleryapi.com?subject=Web%20Sitesi%20İletişim%20Formu%20-%20${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-[rgba(22,32,64,0.15)] bg-white">
        <div className="w-12 h-12 bg-[#162040] flex items-center justify-center text-white text-xl mb-6">✓</div>
        <h3 className="font-display text-2xl font-bold text-[#0D1421] mb-3">Mesajınız İletildi</h3>
        <p className="text-[#2E3C5E] text-sm leading-relaxed mb-6">Ekibimiz en kısa sürede sizinle iletişime geçecektir.</p>
        <button onClick={() => setSent(false)} className="text-[#162040] text-xs tracking-widest uppercase hover:text-[#C9A84C] transition-colors font-semibold">
          Yeni Mesaj Gönder
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full bg-white border border-[rgba(22,32,64,0.15)] text-[#0D1421] text-sm px-4 py-3 focus:outline-none focus:border-[#162040] placeholder:text-[#A8B4CC] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[0.65rem] tracking-widest uppercase text-[#6B7A9E] mb-2 font-semibold">Ad Soyad *</label>
          <input required value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Adınız Soyadınız" className={inputClass} />
        </div>
        <div>
          <label className="block text-[0.65rem] tracking-widest uppercase text-[#6B7A9E] mb-2 font-semibold">Telefon</label>
          <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="05xx xxx xx xx" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-[0.65rem] tracking-widest uppercase text-[#6B7A9E] mb-2 font-semibold">Konu</label>
        <select value={form.subject} onChange={(e) => set("subject", e.target.value)} className={inputClass}>
          <option value="">Konu Seçin</option>
          <option value="İnşaat">İnşaat</option>
          <option value="Mimari Tasarım">Mimari Tasarım</option>
          <option value="Danışmanlık">Danışmanlık</option>
          <option value="Alım-Satım">Alım-Satım</option>
          <option value="Diğer">Diğer</option>
        </select>
      </div>

      <div>
        <label className="block text-[0.65rem] tracking-widest uppercase text-[#6B7A9E] mb-2 font-semibold">Mesajınız *</label>
        <textarea required rows={5} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Projeniz veya sorunuz hakkında bilgi verin..." className={`${inputClass} resize-none`} />
      </div>

      <button type="submit" className="btn-gold w-full justify-center">
        Mesaj Gönder
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <p className="text-[#6B7A9E] text-[0.65rem] text-center">
        Formu göndermek e-posta uygulamanızı açar. Doğrudan aramak:{" "}
        <a href="tel:+903423601525" className="text-[#162040] hover:underline font-semibold">0342 360 15 25</a>
      </p>
    </form>
  );
}
