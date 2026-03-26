"use client";

import { useState } from "react";
import WhatsAppButton from '@/components/WhatsAppButton';

const PHONE = "+43 5574 123 456"; // Placeholder – bitte mit echter Nummer ersetzen

const leistungen = [
  {
    icon: "🎁",
    title: "Werbeartikel",
    desc: "Kugelschreiber, Tassen, Taschen, Schlüsselanhänger – klassische Giveaways mit Ihrer Marke.",
  },
  {
    icon: "👕",
    title: "Textilveredelung",
    desc: "Aufdruck, Stickerei und Transferdruck auf Kleidung. T-Shirts, Jacken, Caps – alles aus einer Hand.",
  },
  {
    icon: "🎪",
    title: "Giveaways für Events",
    desc: "Messen, Konferenzen, Produktlaunches: Wir liefern den perfekten Giveaway für Ihren Auftritt.",
  },
  {
    icon: "🎄",
    title: "Mitarbeitergeschenke",
    desc: "Weihnachtsgeschenke, Jubiläen, Willkommenspakete – Ihre Mitarbeiter werden es schätzen.",
  },
  {
    icon: "🤝",
    title: "Kundenpflege",
    desc: "Geschenke für Geschäftspartner und VIP-Kunden. Pflegen Sie Ihre Beziehungen stilvoll.",
  },
  {
    icon: "🏨",
    title: "Hotellerie & Gastronomie",
    desc: "Individuelle Textilien für Hotels, Restaurants und Cafés. Hohe Stückzahlen, erstklassige Qualität.",
  },
];

const produkte = [
  {
    img: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=600&q=80",
    title: "Premium Kugelschreiber-Set",
    price: "ab €2,50 / Stück",
  },
  {
    img: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80",
    title: "Thermo-Tasse mit Logo",
    price: "ab €4,90 / Stück",
  },
  {
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
    title: "Sporttasche mit Stickerei",
    price: "ab €12,00 / Stück",
  },
  {
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80",
    title: "Bluetooth-Lautsprecher",
    price: "ab €18,00 / Stück",
  },
  {
    img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    title: "Gourmet-Geschenkkorb",
    price: "ab €35,00 / Stück",
  },
  {
    img: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=600&q=80",
    title: "Erlebnis-Gutschein",
    price: "ab €25,00 / Stück",
  },
];

const branchen = [
  { name: "Hotels & Beherbergung", desc: "Individuelle Textilien und Geschenke für Hotelgäste und Mitarbeiter." },
  { name: "Restaurants & Cafés", desc: "Von Schürzen bis zu personalisierten Giveaway-Sets für Stammgäste." },
  { name: "Unternehmen & Büros", desc: "Firmengeschenke, Giveaways und Mitarbeiterpräsente für jede Gelegenheit." },
  { name: "Einzelhandel", desc: "Werbeartikel und Taschen mit Ihrem Branding für Promotions und Events." },
  { name: "Gesundheitswesen", desc: "Professionelle Textilien und Geschenke für Kliniken und Praxen." },
  { name: "Tourismus & Freizeit", desc: "Souvenirs und Merchandise-Artikel für Ausflugsregionen und Ausstellungen." },
];

const vorteile = [
  {
    icon: "🏆",
    title: "Erfahrung seit 1950",
    desc: "Über 75 Jahre Kompetenz in Werbeartikeln und Veredelung – Tradition und Innovation vereint.",
  },
  {
    icon: "✨",
    title: "Top-Qualität",
    desc: "Wir arbeiten nur mit geprüften Materialien und modernsten Verfahren. Ihr Branding in besten Händen.",
  },
  {
    icon: "⚡",
    title: "Rasche Lieferung",
    desc: "Kurze Produktionszeiten und zuverlässige Logistik sorgen dafür, dass Ihre Werbeartikel rechtzeitig ankommen.",
  },
];

const prozess = [
  { step: "01", title: "Beratung", desc: "Gemeinsam besprechen wir Ihre Wünsche und finden die perfekte Lösung." },
  { step: "02", title: "Angebot", desc: "Sie erhalten ein transparentes, unverbindliches Angebot innerhalb von 24 Stunden." },
  { step: "03", title: "Produktion", desc: "Ihre Werbeartikel werden präzise veredelt – in höchster Qualität." },
  { step: "04", title: "Lieferung", desc: "Wir liefern pünktlich und zuverlässig – direkt zu Ihnen oder zum Event." },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: "", firma: "", email: "", telefon: "", nachricht: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-navy/75" />
        </div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <div className="inline-block mb-6">
            <span className="font-montserrat text-amber font-bold text-lg tracking-widest uppercase">
              Adler Werbe-Geschenke
            </span>
          </div>
          <h1 className="font-montserrat text-5xl md:text-7xl font-black mb-6 leading-tight">
            Ihre Marke.<br />
            <span className="text-amber">Unser Handwerk.</span>
          </h1>
          <p className="text-xl md:text-2xl font-light mb-10 text-gray-200">
            Werbeartikel · Firmengeschenke · Giveaways
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#kontakt" className="btn-primary text-lg px-8 py-4">
              Katalog anfragen
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="btn-outline text-lg px-8 py-4">
              📞 Anrufen
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="bg-navy text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12 text-sm font-dm-sans">
          <span>📍 Wolfeggstraße 11, 6900 Bregenz</span>
          <span>📞 {PHONE}</span>
          <span>✉️ info@adler-werbegeschenke.at</span>
        </div>
      </div>

      {/* ── LEISTUNGEN ── */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Unsere Leistungen</h2>
            <p className="section-subtitle">
              Alles aus einer Hand – von der Beratung bis zur Lieferung. Wir veredeln Ihre Vision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leistungen.map((l, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{l.icon}</div>
                <h3 className="font-montserrat font-bold text-xl text-navy mb-3">{l.title}</h3>
                <p className="text-gray-600 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUKT-HIGHLIGHTS ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Produkt-Highlights</h2>
            <p className="section-subtitle">
              Unsere beliebtesten Werbeartikel – ab Lager lieferbar und individuell veredelbar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produkte.map((p, i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-navy mb-1">{p.title}</h3>
                <p className="text-amber font-semibold">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRANCHEN-LÖSUNGEN ── */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Wir bedienen
            </h2>
            <p className="text-gray-300 text-lg">
              Branchenspezifische Lösungen für jeden Bedarf
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {branchen.map((b, i) => (
              <div key={i} className="border border-white/20 rounded-xl p-6 hover:border-amber/60 transition-colors duration-300">
                <h3 className="font-montserrat font-bold text-lg text-amber mb-2">{b.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WARUM ADLER ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Warum Adler Werbe-Geschenke?</h2>
            <p className="section-subtitle">
              Über 75 Jahre Erfahrung sprechen für sich.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vorteile.map((v, i) => (
              <div key={i} className="text-center p-8 rounded-xl bg-light-gray">
                <div className="text-5xl mb-4">{v.icon}</div>
                <h3 className="font-montserrat font-bold text-xl text-navy mb-3">{v.title}</h3>
                <p className="text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROZESS ── */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Unser Prozess</h2>
            <p className="section-subtitle">In vier einfachen Schritten zu Ihren Werbeartikeln.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {prozess.map((p, i) => (
              <div key={i} className="relative">
                {i < prozess.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-amber/30 -translate-x-1/2" />
                )}
                <div className="bg-white rounded-xl p-6 text-center shadow-sm relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber text-white font-montserrat font-black text-xl rounded-full mb-4 mx-auto">
                    {p.step}
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-navy mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT & LAGE ── */}
      <section id="kontakt" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Kontakt & Lage</h2>
            <p className="section-subtitle">Schreiben Sie uns oder rufen Sie an – wir freuen uns auf Ihre Anfrage.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="font-montserrat font-bold text-xl text-green-800 mb-2">Anfrage gesendet!</h3>
                  <p className="text-green-700">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition"
                      placeholder="Maria Musterfrau"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Firma</label>
                    <input
                      type="text"
                      value={formData.firma}
                      onChange={(e) => setFormData({ ...formData, firma: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition"
                      placeholder="Muster GmbH"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">E-Mail *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition"
                      placeholder="maria@muster.at"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Telefon</label>
                    <input
                      type="tel"
                      value={formData.telefon}
                      onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition"
                      placeholder="+43 5574 123 456"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Ihre Nachricht *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.nachricht}
                      onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber focus:ring-2 focus:ring-amber/20 outline-none transition resize-none"
                      placeholder="Ich interessiere mich für..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full text-lg py-4">
                    Anfrage absenden
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2684.4e8a8f8f8f!2d9.7471!3d47.5162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzAwLjEiTiA5wrA0NCczMy4wIkU!5e0!3m2!1sde!2sat!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Adler Werbe-Geschenke Standort"
                />
              </div>
              <div className="bg-navy text-white rounded-xl p-6">
                <h3 className="font-montserrat font-bold text-lg mb-4">Adler Werbe-Geschenke</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-amber">📍</span>
                    <span>Wolfeggstraße 11<br />6900 Bregenz, Österreich</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber">📞</span>
                    <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="hover:text-amber transition">{PHONE}</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber">✉️</span>
                    <span>info@adler-werbegeschenke.at</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-amber">🕐</span>
                    <span>Mo–Do 8:00–17:00 · Fr 8:00–15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-navy-800 text-white pt-12 pb-6 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-montserrat font-bold text-xl text-amber mb-3">Adler Werbe-Geschenke</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Ihr Partner für Werbeartikel seit Generationen. Qualität, Zuverlässigkeit und persönliche Beratung – seit 1950.
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 text-gray-400">Leistungen</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Werbeartikel & Giveaways</li>
                <li>Textilveredelung</li>
                <li>Firmengeschenke</li>
                <li>Hotellerie & Gastronomie</li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold text-sm uppercase tracking-wider mb-3 text-gray-400">Kontakt</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Wolfeggstraße 11, 6900 Bregenz</p>
                <p>{PHONE}</p>
                <p>info@adler-werbegeschenke.at</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
            <p>© {new Date().getFullYear()} Adler Werbe-Geschenke | Wolfeggstraße 11, 6900 Bregenz | Ihr Partner für Werbeartikel seit Generationen</p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 5574 123 456" />
    </main>
  );
}
