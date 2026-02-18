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

      <RsvpForm />

      <footer className="py-10 bg-white border-t border-gold/10 text-center flex flex-col items-center gap-4">
        <img
          src="/zineb-basile-transparent.svg"
          alt="Basile & Zineb"
          className="h-20 w-auto opacity-80 hover:opacity-100 transition-opacity"
        />
        <p className="text-navy/40 text-xs font-sans mt-2 tracking-widest uppercase">
          10.10.2026 • Rabat
        </p>
      </footer>
    </main>
  );
}
