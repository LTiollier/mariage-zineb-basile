"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star, ExternalLink, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Hotel {
    name: string;
    description: string;
    price: string;
    highlight: string;
    reason: string;
    officialSite: string;
    bookingLink: string;
}

const hotels: Hotel[] = [
    {
        name: "Villazancot",
        description: "Maison d'hôtes - Marshan",
        reason: "Situé à deux pas du Palais Tazi, c'est l'option la plus charmante et la mieux notée du quartier.",
        price: "75 € - 85 €",
        highlight: "Le coup de cœur authentique et accueil exceptionnel.",
        officialSite: "https://villazancot.com",
        bookingLink: "https://www.booking.com/hotel/ma/villazancot.fr.html"
    },
    {
        name: "Dar Tanja Boutique Hotel",
        description: "Calme & Piscine",
        reason: "Une magnifique demeure un peu plus au sud, idéale pour se reposer au bord de l'eau.",
        price: "80 € - 95 €",
        highlight: "Sensation d'être dans une villa privée avec un magnifique jardin.",
        officialSite: "https://dartanja.com",
        bookingLink: "https://www.booking.com/hotel/ma/dar-tanja.fr.html"
    },
    {
        name: "Fredj Hotel & Spa",
        description: "Moderne & Vue",
        reason: "Un hôtel contemporain avec une superbe terrasse surplombant la ville et la mer.",
        price: "65 € - 80 €",
        highlight: "Vue imprenable sur la baie et emplacement stratégique.",
        officialSite: "https://fredjhotel.com",
        bookingLink: "https://www.booking.com/hotel/ma/fredj-spa.fr.html"
    },
    {
        name: "Hôtel Rembrandt",
        description: "Économique & Central",
        reason: "Une institution historique au cœur de Tanger avec un jardin tropical et une piscine.",
        price: "55 € - 65 €",
        highlight: "Charme rétro et proximité immédiate du centre-ville.",
        officialSite: "https://rembrandt-tangier.hotel-rn.com",
        bookingLink: "https://www.booking.com/hotel/ma/rembrandt-tangier.fr.html"
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
                                <h2 className="text-3xl md:text-4xl font-serif italic text-gold">Notre sélection d'hôtels</h2>
                                <p className="text-navy/60 font-sans text-sm md:text-base mt-1">À proximité du Palais Tazi, Tanger</p>
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
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                                {hotels.map((hotel, index) => (
                                    <motion.div
                                        key={hotel.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                        className="bg-white p-6 rounded-2xl border border-gold/5 shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-serif italic text-navy group-hover:text-gold transition-colors">{hotel.name}</h3>
                                                <p className="text-gold font-sans text-xs uppercase tracking-widest mt-1 font-semibold">{hotel.description}</p>
                                            </div>
                                            <div className="bg-ivory px-3 py-1 rounded-full text-navy/60 text-xs font-sans whitespace-nowrap border border-gold/10 ml-4">
                                                ~{hotel.price}
                                            </div>
                                        </div>

                                        <p className="text-navy/80 text-sm leading-relaxed font-sans mb-6">
                                            {hotel.reason}
                                        </p>

                                        <div className="flex flex-col space-y-3 mt-auto">
                                            <div className="p-3 bg-ivory rounded-xl flex items-start space-x-3 mb-4">
                                                <div className="p-1.5 bg-gold/10 rounded-lg text-gold mt-0.5 shrink-0">
                                                    <Star className="w-3.5 h-3.5 fill-gold/20" />
                                                </div>
                                                <p className="text-xs text-navy/70 italic font-serif leading-snug">
                                                    <span className="font-sans uppercase tracking-[0.05em] text-[10px] text-gold font-bold block mb-1">Le petit plus</span>
                                                    {hotel.highlight}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <a
                                                    href={hotel.officialSite}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2 px-4 py-2.5 bg-[#1a2b3c] text-white rounded-full text-[11px] uppercase tracking-widest font-sans hover:bg-gold transition-colors"
                                                >
                                                    <Globe className="w-3.5 h-3.5" />
                                                    <span>Site Officiel</span>
                                                </a>
                                                <a
                                                    href={hotel.bookingLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center space-x-2 px-4 py-2.5 border border-[#1a2b3c] text-[#1a2b3c] rounded-full text-[11px] uppercase tracking-widest font-sans hover:border-gold hover:text-gold transition-colors"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                    <span>Booking</span>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Note about taxi */}
                            <div className="mt-12 text-center text-navy/40 text-[10px] font-sans max-w-lg mx-auto italic uppercase tracking-widest">
                                La plupart de ces établissements sont accessibles en moins de 10 minutes en taxi ou à pied depuis le Palais Tazi.
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
}
