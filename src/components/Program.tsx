"use client";

import { motion } from "framer-motion";
import { Castle, Utensils, Music, Sparkles, Clock } from "lucide-react";

const events = [
  {
    time: "16:00",
    title: "Accueil des invités",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    time: "18:00",
    title: "Entrée des mariés & Cérémonie",
    icon: <Castle className="w-6 h-6" />,
  },
  {
    time: "22:00",
    title: "Dîner",
    icon: <Utensils className="w-6 h-6" />,
  },
  {
    time: "00:00",
    title: "Prolongation de la soirée",
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
          <h2 className="text-5xl md:text-6xl font-serif  text-navy/80 tracking-tight">
            Programme du jour
          </h2>
          <div className="flex items-center justify-center gap-3 text-gold font-serif  text-xl">
            <span className="w-12 h-[1px] bg-gold/20" />
            10 Octobre 2026
            <span className="w-12 h-[1px] bg-gold/20" />
          </div>
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
                className="flex-shrink-0 w-[240px] md:w-1/4 flex flex-col items-center text-center snap-center relative"
              >
                {/* Icon Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-white border border-gold/30 flex items-center justify-center text-gold shadow-sm group-hover:bg-gold group-hover:text-white transition-all duration-500 mb-8 mt-12 md:mt-0">
                  {event.icon}
                </div>

                {/* Content */}
                <div className="px-4 space-y-2">
                  <div className="flex items-center justify-center gap-1 text-gold/80 font-sans text-[10px] font-bold uppercase tracking-widest mb-3">
                    <Clock className="w-2.5 h-2.5" />
                    {event.time}
                  </div>
                  <h3 className="text-xl font-serif text-navy ">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
