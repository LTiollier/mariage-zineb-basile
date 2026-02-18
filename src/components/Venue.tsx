"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

// Import Map component dynamically to avoid SSR issues with Leaflet
const Map = dynamic(() => import("./Map"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-ivory animate-pulse flex items-center justify-center text-gold font-serif ">
            Chargement de la carte...
        </div>
    ),
});

export default function Venue() {
    return (
        <section className="py-12 bg-white text-navy px-4">
            <div className="max-w-4xl mx-auto space-y-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-3"
                >
                    <div className="space-y-1">
                        <h2 className="text-3xl md:text-4xl font-serif  text-gold">
                            Le lieu
                        </h2>
                        <h3 className="text-xl md:text-2xl font-serif text-navy">
                            Palais Tazi
                        </h3>
                        <p className="text-navy/60 font-sans text-base max-w-xl mx-auto">
                            1 Rue Al-Quds, Rabat 10000, Maroc
                        </p>
                    </div>
                </motion.div>

                {/* Two Column Layout on Desktop to save vertical space */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video md:aspect-auto w-full rounded-2xl overflow-hidden shadow-lg border border-gold/10 min-h-[250px]"
                    >
                        <Image
                            src="/hero_palais.webp"
                            alt="Palais Tazi Rabat"
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>

                    {/* Map Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h-[250px] md:h-auto min-h-[250px] w-full"
                    >
                        <Map center={[34.0163, -6.8406]} />
                    </motion.div>
                </div>

                {/* Action Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://maps.app.goo.gl/614jX38P2Xqfvvk69"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-2.5 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 rounded-full text-xs font-sans uppercase tracking-[0.2em]"
                    >
                        Ouvrir dans Google Maps
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
