"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Church,
  Martini,
  Utensils,
  Music,
  Sparkles,
  Clock,
} from "lucide-react";

const events = [
  {
    time: "17:00",
    title: "Cérémonie Religieuse",
    location: "Palais Tazi",
    description:
      "Échange des vœux et signature du contrat dans le respect des traditions.",
    icon: <Church className="w-6 h-6" />,
  },
  {
    time: "17:30",
    title: "Cocktail de Bienvenue",
    location: "Les Jardins du Palais",
    description:
      "Rafraîchissements et musique traditionnelle en attendant la mariée.",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    time: "19:00",
    title: "Cocktail",
    location: "Les Jardins du Palais",
    description: "Apéritifs et boissons dans les jardins au coucher du soleil.",
    icon: <Martini className="w-6 h-6" />,
  },
  {
    time: "20:30",
    title: "Dîner",
    location: "Le Grand Hall",
    description:
      "Cena y celebración - Un festin royal pour célébrer notre union.",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    time: "22:30",
    title: "Soirée Dansante",
    location: "La Salle de Bal",
    description: "Festivités jusqu'au bout de la nuit pour fêter notre amour.",
    icon: <Music className="w-6 h-6" />,
  },
];

export default function Program() {
  return (
    <section className="py-24 bg-white text-navy px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-serif italic text-navy/80 tracking-tight">
            Programme du jour
          </h2>
          <p className="text-navy/40 text-sm font-sans uppercase tracking-[0.3em]">
            Ce que nous avons préparé pour vous
          </p>
        </motion.div>

        <div className="relative mt-20">
          {/* Horizontal connecting line */}
          <div className="absolute top-[82px] left-0 right-0 h-[1px] bg-gold/20 z-0 hidden md:block" />

          {/* Horizontal scrollable container for mobile */}
          <div className="flex overflow-x-auto md:overflow-x-visible pb-12 gap-8 md:gap-0 no-scrollbar snap-x cursor-grab active:cursor-grabbing">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-shrink-0 w-[240px] md:w-1/5 flex flex-col items-center text-center snap-center relative"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500 mb-8 mt-12 md:mt-0">
                  {event.icon}
                </div>

                {/* Content */}
                <div className="px-4 space-y-2">
                  <h3 className="text-xl font-serif text-navy italic">
                    {event.title}
                  </h3>
                  {/* Time Below Title */}
                  <div className="flex items-center justify-center gap-1 text-gold/80 font-sans text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Clock className="w-2.5 h-2.5" />
                    {event.time}
                  </div>
                  <p className="text-navy/40 text-[10px] font-sans uppercase tracking-widest leading-relaxed line-clamp-2 italic">
                    {event.description}
                  </p>
                  <div className="flex items-center justify-center gap-1.5 text-navy/30 text-[9px] font-sans tracking-tighter uppercase italic pt-1">
                    <MapPin className="w-2.5 h-2.5" />
                    {event.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
