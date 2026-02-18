import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Program from "@/components/Program";
import Details from "@/components/Details";
import Venue from "@/components/Venue";
import RsvpForm from "@/components/RsvpForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <Program />
      <Details />
      <Venue />

      {/* RSVP Section */}
      <section className="py-20 bg-ivory text-navy text-center px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-serif  text-gold">
              Confirmes ta présence
            </h2>
            <p className="font-sans text-lg text-navy/60 max-w-xl mx-auto">
              Merci de confirmer votre présence d’ici le 31 mai
            </p>
          </div>

          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white  border-t border-gold/10 text-center">
        <p className="text-gold font-serif text-xl">Zineb & Basile</p>
        <p className="text-navy/40 text-xs font-sans mt-2 tracking-widest uppercase">
          10.10.2026 • Rabat
        </p>
      </footer>
    </main>
  );
}
