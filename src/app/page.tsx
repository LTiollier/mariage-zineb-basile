import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Program from "@/components/Program";
import Details from "@/components/Details";
import RsvpForm from "@/components/RsvpForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <Program />
      <Details />

      {/* RSVP Section */}
      <section className="py-20 bg-navy text-white text-center px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif italic text-gold-light">
              Répondez s&apos;il vous plaît
            </h2>
            <p className="font-sans text-lg text-white/80 max-w-xl mx-auto">
              Merci de nous confirmer votre présence avant le 1er Septembre 2026.
            </p>
          </div>

          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-ivory border-t border-gold/10 text-center">
        <p className="text-gold font-serif text-xl">Zineb & Basile</p>
        <p className="text-navy/40 text-xs font-sans mt-2 tracking-widest uppercase">
          10.10.2026 • Rabat, Maroc
        </p>
      </footer>
    </main>
  );
}
