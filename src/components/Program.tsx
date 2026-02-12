"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Sparkles } from "lucide-react";

const events = [
    {
        time: "17:00",
        title: "Cérémonie Religieuse",
        location: "Palais Tazi",
        description: "Échange des vœux et signature du contrat.",
    },
    {
        time: "19:00",
        title: "Cocktail au Coucher du Soleil",
        location: "Les Jardins du Palais",
        description: "Rafraîchissements et musique traditionnelle.",
    },
    {
        time: "20:30",
        title: "Grand Dîner de Mariage",
        location: "Le Grand Hall",
        description: "Un festin royal pour célébrer notre union.",
    },
    {
        time: "22:30",
        title: "Soirée Dansante",
        location: "La Salle de Bal",
        description: "Danse et festivités jusqu'au bout de la nuit.",
    },
];

export default function Program() {
    return (
        <section className="py-24 bg-white text-navy px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="text-4xl md:text-5xl font-serif italic text-gold">Le Programme</h2>
                    <p className="text-navy/60 uppercase tracking-[0.2em] text-sm font-sans">
                        Samedi 10 Octobre 2026
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-gold/30 ml-4 md:ml-0 md:left-1/2">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right md:left-[-50%]" : "md:pl-12 md:left-0"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute top-0 -left-[9px] md:left-auto md:right-[-9px] w-4 h-4 rounded-full bg-gold border-4 border-white z-10"
                                style={index % 2 !== 0 ? { left: '-9px', right: 'auto' } : {}} />

                            <div className="bg-ivory/50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                    <Clock className="w-4 h-4 text-gold" />
                                    <span className="text-gold font-sans font-semibold tracking-tighter">{event.time}</span>
                                </div>
                                <h3 className="text-xl font-serif text-navy mb-2">{event.title}</h3>
                                <div className={`flex items-center gap-2 text-navy/60 text-sm mb-2 ${index % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                                    <MapPin className="w-3 h-3" />
                                    <span>{event.location}</span>
                                </div>
                                <p className="text-navy/70 leading-relaxed font-sans text-sm">
                                    {event.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
