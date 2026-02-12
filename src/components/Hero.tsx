"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover brightness-[0.7]"
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ivory/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <p className="text-gold-light tracking-[0.3em] uppercase text-sm md:text-base font-sans">
                        Nous sommes heureux de vous inviter au mariage de
                    </p>
                    <h1 className="text-white text-5xl md:text-8xl font-serif italic">
                        Zineb <span className="font-sans text-3xl md:text-5xl not-italic">&</span> Basile
                    </h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[1px] w-12 bg-gold-light" />
                        <p className="text-gold-light text-xl md:text-2xl font-serif">
                            10 Octobre 2026
                        </p>
                        <div className="h-[1px] w-12 bg-gold-light" />
                    </div>
                    <p className="text-white/90 text-lg md:text-xl font-serif tracking-wide py-4">
                        Palais Tazi, Tanger, Maroc
                    </p>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent animate-bounce" />
            </motion.div>
        </section>
    );
}
