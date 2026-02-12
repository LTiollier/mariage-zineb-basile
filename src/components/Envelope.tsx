"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedBackground = () => {
    // Generate deterministic values for particles based on their index
    const particles = React.useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
        id: i,
        // Spread particles across the screen
        left: `${(i * 19) % 100}%`,
        top: `${(i * 13) % 100}%`,
        // Vary sizes significantly for visibility
        size: (i % 5) * 2 + 6, // 6px to 14px
        // Different animation durations and delays
        duration: 15 + (i % 8),
        delay: i * 0.3,
    })), []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Subtle Gradient Pulse - Slightly darker/visible */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.5, 0.3],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-[#f8f6f2] via-[#ebe5ce] to-[#f8f6f2]"
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-[#c5a059]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                    }}
                    animate={{
                        y: [-40, 40, -40],
                        x: [-30, 30, -30],
                        opacity: [0.1, 0.6, 0.1], // Higher max opacity
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
};

export const Envelope = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [showSite, setShowSite] = useState(false);

    // Disable scrolling while envelope is visible
    useEffect(() => {
        if (!isAnimationComplete) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isAnimationComplete]);

    const handleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            // Reveal the site content slightly before the envelope fully fades out
            setTimeout(() => setShowSite(true), 800);
            // Start the full removal sequence
            setTimeout(() => setIsAnimationComplete(true), 1500);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#fdfcf8]">
            <AnimatePresence mode="wait">
                {!isAnimationComplete && (
                    <motion.div
                        key="envelope-overlay"
                        initial={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                            scale: 1.05,
                            filter: "blur(10px)",
                            transition: { duration: 1, ease: "easeInOut" }
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#fdfcf8] perspective-[1500px]"
                    >
                        <AnimatedBackground />

                        {/* The Envelope Container */}
                        <motion.div
                            layout
                            initial={{ y: 0 }}
                            animate={{
                                y: [0, -15, 0],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ transformStyle: "preserve-3d" }}
                            className="relative w-[90vw] max-w-[600px] aspect-[1.4/1] cursor-pointer"
                            onClick={handleOpen}
                        >
                            {/* Main Envelope Body (Back) */}
                            <div
                                className="absolute inset-0 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#f9f7f0]"
                                style={{
                                    backgroundImage: `
                    radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8) 0%, transparent 100%),
                    url('https://www.transparenttextures.com/patterns/paper-fibers.png')
                  `,
                                    backgroundBlendMode: 'soft-light'
                                }}
                            />

                            {/* Top Flap (Lid) */}
                            <motion.div
                                initial={{ rotateX: 0 }}
                                animate={{ rotateX: isOpen ? 180 : 0 }}
                                transition={{ duration: 1.2, ease: "easeInOut" }}
                                style={{
                                    transformOrigin: "top",
                                    zIndex: 50, // Always keep on top
                                    transformStyle: "preserve-3d",
                                }}
                                className="absolute inset-x-0 top-0 h-1/2"
                            >
                                {/* Front face (exterior) - Visible when closed */}
                                <div
                                    className="absolute inset-0 bg-[#f4f1e6] shadow-[inset_0_-10px_20px_rgba(0,0,0,0.05)]"
                                    style={{
                                        clipPath: "polygon(0 0, 50% 98%, 100% 0)",
                                        backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%), url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                        backfaceVisibility: "hidden"
                                    }}
                                />

                                {/* Back face (interior) - Visible when open */}
                                <div
                                    className="absolute inset-0 bg-[#efead9]"
                                    style={{
                                        clipPath: "polygon(0 0, 50% 98%, 100% 0)",
                                        transform: "rotateY(180deg)",
                                        backfaceVisibility: "hidden",
                                        backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 50%), url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                    }}
                                />
                            </motion.div>

                            {/* Side Flaps */}
                            <div
                                className="absolute inset-0 z-20 bg-[#f0ede1]"
                                style={{
                                    clipPath: "polygon(0 0, 50% 50%, 0 100%)",
                                    backgroundImage: `linear-gradient(90deg, rgba(200,190,170,0.1) 0%, transparent 20%), url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                }}
                            />
                            <div
                                className="absolute inset-0 z-20 bg-[#f0ede1]"
                                style={{
                                    clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
                                    backgroundImage: `linear-gradient(-90deg, rgba(200,190,170,0.1) 0%, transparent 20%), url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                }}
                            />

                            {/* Bottom Flap */}
                            <div
                                className="absolute inset-0 z-30 bg-[#ece7d8] shadow-[0_-5px_15px_rgba(0,0,0,0.03)]"
                                style={{
                                    clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
                                    backgroundImage: `linear-gradient(0deg, rgba(200,190,170,0.05) 0%, transparent 30%), url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                }}
                            />

                            {/* Wax Seal */}
                            <motion.div
                                animate={{
                                    scale: isOpen ? 0.8 : 1,
                                    opacity: isOpen ? 0 : 1,
                                    y: isOpen ? 40 : 0,
                                    rotate: isOpen ? 5 : 0
                                }}
                                transition={{ duration: 0.6, ease: "easeIn" }}
                                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
                            >
                                <div className="relative w-24 h-24 flex items-center justify-center">
                                    <div
                                        className="absolute inset-0 bg-[#e8e2d4] rounded-[45%_55%_50%_50%_/_50%_45%_55%_50%] shadow-[4px_4px_10px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.5),inset_2px_2px_4px_rgba(0,0,0,0.1)] border border-[#d8d0c0]"
                                    />
                                    <div className="absolute inset-3 border-[1.5px] border-[#c0b8a8]/40 rounded-full shadow-[inset_1px_1px_3px_rgba(0,0,0,0.1)] flex items-center justify-center">
                                        <div
                                            className="text-3xl font-serif text-[#a8a090] font-normal tracking-[0.2em] opacity-80"
                                            style={{
                                                fontFamily: "'Playfair Display', serif",
                                                textShadow: "0.5px 0.5px 1px rgba(255,255,255,0.8), -0.5px -0.5px 1px rgba(0,0,0,0.1)"
                                            }}
                                        >
                                            Z&B
                                        </div>
                                    </div>
                                    <div className="absolute top-2 left-6 w-8 h-4 bg-white/20 blur-md rounded-full rotate-[-20deg]" />
                                </div>
                            </motion.div>

                            {/* Instruction Text */}
                            {!isOpen && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.5, duration: 1.5 }}
                                    className="absolute -bottom-28 md:-bottom-16 left-1/2 -translate-x-1/2 text-center"
                                >
                                    <p className="font-serif italic text-[#8b1d1d]/40 text-sm tracking-widest uppercase">
                                        Cliquez pour ouvrir
                                    </p>
                                    <motion.div
                                        animate={{ y: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="w-px h-6 bg-[#8b1d1d]/20 mx-auto mt-2"
                                    />
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.main
                initial={false}
                animate={{
                    filter: !showSite ? "blur(20px)" : "blur(0px)",
                    scale: !showSite ? 0.98 : 1,
                    opacity: !showSite ? 0 : 1,
                    y: !showSite ? 20 : 0
                }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.main>
        </div>
    );
};
