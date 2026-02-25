"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Globe, Clock, Sparkles } from "lucide-react";
import { useEffect } from "react";
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
  bookingLink?: string;
  image: string;
}

const hotels: Hotel[] = [
  {
    name: "Sofitel Rabat Jardin des Roses",
    description: "Luxe & élégance absolue",
    time: "≈ 10 min",
    style: "Palais & Jardins",
    price: "300 € – 550 €",
    highlight:
      "Un écrin de verdure offrant luxe et sérénité à quelques minutes du centre. Idéal pour les invités en quête de calme, d’espace et d’un service cinq étoiles.",
    officialSite: "https://sofitel.accor.com/fr/hotels/6813.html",
    bookingLink:
      "https://www.booking.com/hotel/ma/sofitel-rabat-jardin-des-roses.html",
    image: "/hotels/sofitel-rabat.webp",
  },
  {
    name: "Fairmont Residences La Marina",
    description: "Vue sur la mer & confort haut de gamme",
    time: "≈ 10 min",
    style: "Moderne & Rooftop",
    price: "220 € – 350 €",
    highlight:
      "Une option résolument contemporaine avec une élégante vue sur la marina. Convient à ceux qui privilégient un séjour raffiné et des prestations haut de gamme.",
    officialSite:
      "https://www.fairmont.com/en/hotels/rabat/fairmont-la-marina-rabat-sale.html",
    bookingLink:
      "https://www.booking.com/hotel/ma/fairmont-la-marina-rabat-sale-and-residences.html",
    image: "/hotels/fairmont.webp",
  },
  {
    name: "Braat Hotel",
    description: "Chic & central",
    time: "≈ 5 min",
    style: "Design & Confort",
    price: "90 € – 150 €",
    highlight:
      "Une adresse moderne et pratique en plein centre-ville. Parfaite pour ceux qui veulent confort, accessibilité et excellent rapport qualité-prix durant le week-end.",
    officialSite: "https://braat.ma/",
    bookingLink: "https://www.booking.com/hotel/ma/braat.html",
    image: "/hotels/braat-hotel.webp",
  },
  {
    name: "Riad Sidi Fatah",
    description: "Tradition & Charme marocain",
    time: "≈ 10 min",
    style: "Authentique & Médina",
    price: "90 € – 120 €",
    highlight:
      "Un choix parfait pour séjourner au cœur de la médina dans une atmosphère authentique et chaleureuse. Idéal pour ceux qui recherchent charme, intimité et immersion marocaine.",
    bookingLink: "https://www.booking.com/hotel/ma/riad-sidi-fatah.html",
    image: "/hotels/riad-sidi-fatah.webp",
  },
  {
    name: "Riad Al Bahi",
    description: "Histoire & authenticité",
    time: "≈ 10 min",
    style: "Charme & Histoire",
    price: "100 € – 120 €",
    highlight:
      "Adresse pleine de caractère nichée dans la médina historique. Parfait pour les invités qui souhaitent un cadre traditionnel alliant tranquillité et confort.",
    bookingLink: "https://www.booking.com/hotel/ma/al-bahi.html",
    image: "/hotels/riad-al-bahi.webp",
  },
];

export default function HotelModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (typeof document === "undefined") return null;

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
            className="fixed inset-y-4 md:inset-y-10 lg:inset-y-20 inset-x-4 md:inset-x-10 lg:inset-x-20 max-w-6xl mx-auto bg-ivory rounded-3xl z-[10000] overflow-hidden shadow-2xl flex flex-col border border-gold/20"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gold/10 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif  text-gold">
                  Hébergements
                </h2>
                <p className="text-navy/60 font-sans text-sm md:text-base mt-1">
                  Notre sélection à proximité du Palais Tazi, Rabat
                </p>
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
            <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 w-full">
                {hotels.map((hotel, index) => (
                  <motion.div
                    key={hotel.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="bg-white rounded-2xl border border-gold/5 shadow-sm hover:shadow-md transition-shadow group overflow-hidden flex flex-col sm:flex-row h-full min-w-0"
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
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-serif  text-navy group-hover:text-gold transition-colors">
                              {hotel.name}
                            </h3>
                            <p className="text-gold font-sans text-[10px] uppercase tracking-widest mt-0.5 font-semibold">
                              {hotel.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 mb-4 text-[11px] text-navy/40 font-sans">
                          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
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

                      <div className="flex gap-3 mt-auto">
                        {hotel.officialSite && (
                          <a
                            href={hotel.officialSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 border border-[#1a2b3c] text-[#1a2b3c] rounded-full text-[10px] uppercase tracking-widest font-sans hover:bg-[#1a2b3c] hover:text-white transition-colors text-center"
                          >
                            <Globe className="w-3 h-3" />
                            <span>Site</span>
                          </a>
                        )}
                        {hotel.bookingLink && (
                          <a
                            href={hotel.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 border border-[#1a2b3c] text-[#1a2b3c] rounded-full text-[10px] uppercase tracking-widest font-sans hover:border-gold hover:text-gold transition-colors text-center"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Booking</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Note about taxi */}
              <div className="mt-12 text-center text-navy/40 text-[10px] font-sans max-w-lg mx-auto  uppercase tracking-widest">
                Les temps de trajet sont indiqués pour un trajet en taxi vers le
                Palais Tazi.
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
