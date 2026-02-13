"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Bed, Star, MapPin, Coffee, Waves } from "lucide-react";

interface Hotel {
    name: string;
    description: string;
    price: string;
    highlight: string;
    reason: string;
}

const hotels: Hotel[] = [
    {
        name: "Villazancot",
        description: "Le coup de cœur authentique",
        reason: "Située à environ 15-20 minutes à pied du Palais Tazi, c’est une maison d’hôtes exceptionnelle nichée dans le quartier de Marshan. Calme absolu, décoration soignée et accueil personnalisé.",
        price: "75 € - 85 €",
        highlight: "Un petit-déjeuner souvent décrit comme 'royal' par les voyageurs."
    },
    {
        name: "Dar Tanja Boutique Hotel",
        description: "Piscine et verdure",
        reason: "A environ 5-10 minutes en taxi, cet hôtel offre un cadre relaxant avec un jardin et une belle piscine. Idéal pour s'éloigner du bruit de la médina.",
        price: "80 € - 95 €",
        highlight: "La sensation d'être dans une villa privée avec piscine."
    },
    {
        name: "Fredj Hotel & Spa",
        description: "Confort moderne et vue",
        reason: "Plus proche du centre-ville (environ 1,5 km), cet hôtel 4 étoiles est une valeur sûre avec spa, piscine et vue imprenable sur la baie de Tanger.",
        price: "65 € - 80 €",
        highlight: "Emplacement stratégique entre Marshan et la place du Grand Socco."
    },
    {
        name: "Hotel Rembrandt",
        description: "L'option économique historique",
        reason: "Une institution tangéroise à 10 minutes en taxi. Charme un peu rétro, jardin tropical et piscine centrale très agréable en été.",
        price: "55 € - 65 €",
        highlight: "Très proche de la zone piétonne et des cafés historiques."
    }
];

export default function HotelModal({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-ivory rounded-3xl z-[101] overflow-hidden shadow-2xl flex flex-col border border-gold/20"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-gold/10 flex justify-between items-center bg-white/50 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif italic text-gold">Notre sélection d'hôtels</h2>
                                <p className="text-navy/60 font-sans text-sm md:text-base mt-1">À proximité du Palais Tazi, Tanger</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gold/10 rounded-full transition-colors text-navy/60 hover:text-gold"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {hotels.map((hotel, index) => (
                                    <motion.div
                                        key={hotel.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="bg-white p-6 rounded-2xl border border-gold/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col space-y-4"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-serif italic text-navy group-hover:text-gold transition-colors">{hotel.name}</h3>
                                                <p className="text-gold font-sans text-sm uppercase tracking-widest mt-1">{hotel.description}</p>
                                            </div>
                                            <div className="bg-ivory px-3 py-1 rounded-full text-navy/60 text-xs font-sans whitespace-nowrap border border-gold/10">
                                                {hotel.price} / nuit
                                            </div>
                                        </div>

                                        <p className="text-navy/80 text-sm leading-relaxed font-sans">
                                            {hotel.reason}
                                        </p>

                                        <div className="pt-4 mt-auto border-t border-gold/5">
                                            <div className="flex items-start space-x-3">
                                                <div className="p-1.5 bg-gold/10 rounded-lg text-gold mt-0.5">
                                                    <Star className="w-4 h-4 fill-gold/20" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-sans uppercase tracking-[0.1em] text-gold font-semibold">Le petit plus</p>
                                                    <p className="text-sm text-navy/70 italic font-serif mt-0.5">{hotel.highlight}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Note about taxi */}
                            <div className="mt-12 text-center text-navy/40 text-xs font-sans max-w-lg mx-auto italic">
                                La plupart de ces établissements sont accessibles en moins de 10 minutes en taxi ou à pied depuis le Palais Tazi.
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
