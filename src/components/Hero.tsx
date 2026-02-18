"use client";

import { motion } from "framer-motion";

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
            Vous êtes invités au mariage de
          </p>
          <h1 className="text-white text-5xl md:text-8xl font-serif ">
            Zineb{" "}
            <span className="font-sans text-3xl md:text-5xl">&</span>{" "}
            Basile
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col items-center gap-4 py-6"
          >
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-8 md:w-16 bg-gold-light/40" />
              <p className="text-white text-3xl md:text-6xl font-serif  tracking-wide">
                10 Octobre 2026
              </p>
              <div className="h-[1px] w-8 md:w-16 bg-gold-light/40" />
            </div>
            <p className="text-gold-light text-xs md:text-sm font-sans tracking-[0.5em] uppercase">
              Palais Tazi • Rabat
            </p>
          </motion.div>
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
