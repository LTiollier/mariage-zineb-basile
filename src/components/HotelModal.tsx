"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface Hotel {
    name: string;
    description: string;
    price: string;
    time: string;
    style: string;
    highlight: string;
    officialSite?: string;
    bookingLink: string;
    image: string;
}

const hotels: Hotel[] = [
    {
        name: "Rent-Inn Suites Hotel",
        description: "Moderne & Fonctionnel",
        time: "5-7 min",
        style: "Propre, épuré et très bien situé",
        price: "85 € - 95 €",
        highlight: "C'est l'option la plus moderne et fonctionnelle à la lisière du quartier Agdal. Idéal pour ceux qui cherchent de l'espace et un cadre contemporain.",
        bookingLink: "https://www.booking.com/hotel/ma/rent-inn-suite.fr.html",
        image: "/hotels/rent-inn-suites-hotel.webp"
    },
    {
        name: "Atlantic Agdal",
        description: "4 étoiles classique",
        time: "8-10 min",
        style: "Grand hôtel de standing, très prisé pour les séjours d'affaires.",
        price: "90 € - 105 €",
        highlight: "Un hôtel 4 étoiles classique situé sur l'une des artères principales de l'Agdal. C'est une valeur sûre pour le confort.",
        officialSite: "https://atlanticagdal.com/",
        bookingLink: "https://www.booking.com/hotel/ma/atlantic-agdal.fr.html",
        image: "/hotels/atlanticagdal-hotel.webp"
    },
    {
        name: "Rihab Hotel",
        description: "Économique & Stratégique",
        time: "8-10 min",
        style: "Simple, correct et fonctionnel.",
        price: "55 € - 70 €",
        highlight: "L'option la plus économique du secteur. Il est stratégiquement placé entre le quartier de l'Aviation et le bas du Souissi.",
        officialSite: "https://hotelrihab.com/",
        bookingLink: "https://www.booking.com/hotel/ma/rihab.fr.html",
        image: "/hotels/rihab-hotel.webp"
    },
    {
        name: "Le Pietri Urban Hotel",
        description: "Urbain & Artistique",
        time: "12-15 min",
        style: "Urbain, artistique et chaleureux (Célèbre Jazz Bar).",
        price: "75 € - 85 €",
        highlight: "Situé près de la place Pietri (Quartier Hassan). C'est l'adresse idéale si vous cherchez un hôtel avec une âme.",
        officialSite: "https://lepietri.com/",
        bookingLink: "https://www.booking.com/hotel/ma/le-pietri.fr.html",
        image: "/hotels/le-pietri-hotel.webp"
    }
];

export default function HotelModal({
    isOpen,
    onClose
}: {
    isOpen: boolean;
    onClose: () => void;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[9999]"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-4 md:inset-10 lg:inset-20 bg-ivory rounded-3xl z-[10000] overflow-hidden shadow-2xl flex flex-col border border-gold/20"
                    >
                        {/* Header */}
                        <div className="p-6 md:p-8 border-b border-gold/10 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif italic text-gold">Hébergements</h2>
                                <p className="text-navy/60 font-sans text-sm md:text-base mt-1">Notre sélection à proximité du Palais Tazi, Rabat</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gold/10 rounded-full transition-colors text-navy/60 hover:text-gold"
                                aria-label="Fermer"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-8 custom-scrollbar">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {hotels.map((hotel, index) => (
                                    <motion.div
                                        key={hotel.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="bg-white rounded-2xl border border-gold/5 shadow-sm hover:shadow-md transition-shadow group overflow-hidden flex flex-col sm:flex-row h-full"
                                    >
                                        {/* Image Section */}
                                        <div className="relative w-full sm:w-1/3 min-h-[160px] sm:min-h-full shrink-0">
                                            <Image
                                                src={hotel.image}
                                                alt={hotel.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-sans font-bold text-gold border border-gold/10 uppercase tracking-wider">
                                                {hotel.price}
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <h3 className="text-xl font-serif italic text-navy group-hover:text-gold transition-colors">{hotel.name}</h3>
                                                        <p className="text-gold font-sans text-[10px] uppercase tracking-widest mt-0.5 font-semibold">{hotel.description}</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 mb-4 text-[11px] text-navy/40 font-sans">
                                                    <div className="flex items-center gap-1.5">
                                                        <Clock className="w-3.5 h-3.5 text-gold/60" />
                                                        <span>{hotel.time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <Sparkles className="w-3.5 h-3.5 text-gold/60" />
                                                        <span className="truncate">{hotel.style}</span>
                                                    </div>
                                                </div>

                                                <p className="text-navy/70 text-xs leading-relaxed font-sans mb-6 line-clamp-3">
                                                    {hotel.highlight}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                                {hotel.officialSite ? (
                                                    <a
                                                        href={hotel.officialSite}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center justify-center space-x-2 px-3 py-2 bg-[#1a2b3c] text-white rounded-full text-[10px] uppercase tracking-widest font-sans hover:bg-gold transition-colors text-center"
                                                    >
                                                        <Globe className="w-3 h-3" />
                                                        <span>Site</span>
                                                    </a>
                                                ) : (
                                                    <div className="bg-ivory text-navy/30 rounded-full text-[10px] uppercase tracking-widest font-sans flex items-center justify-center opacity-50 cursor-not-allowed">
                                                        Site
                                                    </div>
                                                )}
                                                <a
                                                    href={hotel.bookingLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2 px-3 py-2 border border-[#1a2b3c] text-[#1a2b3c] rounded-full text-[10px] uppercase tracking-widest font-sans hover:border-gold hover:text-gold transition-colors text-center"
                                                >
                                                    <ExternalLink className="w-3 h-3" />
                                                    <span>Booking</span>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Note about taxi */}
                            <div className="mt-12 text-center text-navy/40 text-[10px] font-sans max-w-lg mx-auto italic uppercase tracking-widest">
                                Les temps de trajet sont indiqués pour un trajet en taxi vers le Palais Tazi.
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
