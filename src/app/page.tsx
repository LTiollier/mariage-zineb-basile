import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Program from "@/components/Program";
import Details from "@/components/Details";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <Program />
      <Details />

      {/* RSVP Section Shortcut */}
      <section className="py-20 bg-navy text-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif italic text-gold-light">Nous avons hâte de vous voir</h2>
          <p className="font-sans text-lg text-white/80">
            Merci de nous confirmer votre présence avant le 1er Septembre 2026.
          </p>
          <button className="bg-gold hover:bg-gold-light text-navy px-10 py-4 rounded-full font-sans uppercase tracking-[0.2em] transition-all transform hover:scale-105">
            Répondre à l'invitation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-ivory border-t border-gold/10 text-center">
        <p className="text-gold font-serif italic text-xl">Zineb & Basile</p>
        <p className="text-navy/40 text-xs font-sans mt-2 tracking-widest uppercase">
          10.10.2026 • Tanger, Maroc
        </p>
      </footer>
    </main>
  );
}
