"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Church, Martini, Utensils, Music, Sparkles } from "lucide-react";

const events = [
    {
        time: "17:00",
        title: "Cérémonie Religieuse",
        location: "Palais Tazi",
        description: "Échange des vœux et signature du contrat dans le respect des traditions.",
        icon: <Church className="w-5 h-5" />,
    },
    {
        time: "19:00",
        title: "Cocktail au Coucher du Soleil",
        location: "Les Jardins du Palais",
        description: "Rafraîchissements et musique traditionnelle andalouse sous les étoiles.",
        icon: <Martini className="w-5 h-5" />,
    },
    {
        time: "20:30",
        title: "Grand Dîner de Mariage",
        location: "Le Grand Hall",
        description: "Un festin royal pour célébrer notre union avec nos proches.",
        icon: <Utensils className="w-5 h-5" />,
    },
    {
        time: "22:30",
        title: "Soirée Dansante",
        location: "La Salle de Bal",
        description: "Danse et festivités jusqu'au bout de la nuit pour clore cette journée magique.",
        icon: <Music className="w-5 h-5" />,
    },
];

export default function Program() {
    return (
        <section className="py-24 bg-white text-navy px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic text-gold">Programme du jour</h2>
                    <p className="text-navy/60 uppercase tracking-[0.2em] text-sm font-sans">
                        Ce que nous avons préparé pour vous
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gold/20" />

                    <div className="space-y-16">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                            >
                                {/* Time Pill - Center on Desktop, Left on Mobile */}
                                <div className="absolute left-[0px] md:left-1/2 md:-translate-x-1/2 -top-10 md:top-auto z-20">
                                    <div className="bg-navy text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10 uppercase tracking-widest">
                                        {event.time}
                                    </div>
                                </div>

                                {/* Icon Circle */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-10 h-10 rounded-full bg-ivory border-2 border-gold flex items-center justify-center text-gold z-10 shadow-sm mt-8 md:mt-0">
                                    {event.icon}
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[42%] ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                    }`}>
                                    <div className="bg-ivory/30 p-8 rounded-3xl border border-gold/5 hover:border-gold/20 transition-all group">
                                        <h3 className="text-2xl font-serif text-navy mb-3 italic">
                                            {event.title}
                                        </h3>
                                        <div className={`flex items-center gap-2 text-gold/80 text-sm mb-4 ${index % 2 === 0 ? "md:justify-end" : "justify-start"
                                            }`}>
                                            <MapPin className="w-3.5 h-3.5" />
                                            <span className="font-sans uppercase tracking-[0.1em]">{event.location}</span>
                                        </div>
                                        <p className="text-navy/60 leading-relaxed font-sans text-sm">
                                            {event.description}
                                        </p>
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
