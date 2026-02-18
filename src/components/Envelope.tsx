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
                            scale: 2, // Zoom significantly to feel like passing through
                            filter: "blur(20px)", // More intense blur
                            transition: { duration: 1.2, ease: "easeInOut" }
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

                            {/* The Letter inside */}
                            <div
                                className="absolute inset-[5%] z-10 bg-[#fffdfa] rounded-sm shadow-md p-10 flex flex-col gap-6"
                                style={{
                                    backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                                }}
                            >
                                {/* Blurred writing lines to simulate the invitation */}
                                <div className="space-y-4 pt-4">
                                    <div className="w-3/4 h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                    <div className="w-full h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                    <div className="w-5/6 h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                    <div className="w-full h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                    <div className="w-4/5 h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                    <div className="w-2/3 h-2 bg-black/5 rounded-full blur-[1.5px]" />
                                </div>

                                {/* A small "seal" or signature area */}
                                <div className="mt-auto flex justify-end">
                                    <div className="w-16 h-16 bg-black/5 rounded-full blur-[2px]" />
                                </div>
                            </div>

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
                                <div className="relative w-28 h-28 flex items-center justify-center">
                                    {/* Drop shadow underneath — warm red-brown */}
                                    <div
                                        className="absolute inset-0 rounded-[45%_55%_52%_48%_/_48%_45%_55%_52%]"
                                        style={{
                                            background: "rgba(120, 30, 10, 0.4)",
                                            filter: "blur(8px)",
                                            transform: "translate(4px, 6px) scale(0.93)",
                                        }}
                                    />
                                    {/* Main wax body — warm terracotta-red, like the reference */}
                                    <div
                                        className="absolute inset-0 rounded-[45%_55%_50%_50%_/_50%_45%_55%_50%]"
                                        style={{
                                            background: `radial-gradient(ellipse at 42% 38%, #e05540 0%, #c1392b 40%, #a82d22 100%)`,
                                            boxShadow: `
                                                inset 0 4px 10px rgba(255, 160, 120, 0.3),
                                                inset 0 -5px 12px rgba(80, 10, 0, 0.35),
                                                inset 3px 0 8px rgba(80, 10, 0, 0.2),
                                                inset -3px 0 8px rgba(80, 10, 0, 0.15),
                                                3px 5px 16px rgba(120, 30, 10, 0.55)
                                            `,
                                        }}
                                    />
                                    {/* Outer raised rim — like the border ring of a real wax seal */}
                                    <div
                                        className="absolute rounded-full"
                                        style={{
                                            inset: "5px",
                                            border: "2px solid rgba(180, 60, 40, 0.6)",
                                            boxShadow: `
                                                inset 0 2px 4px rgba(255, 160, 120, 0.2),
                                                inset 0 -2px 4px rgba(80, 10, 0, 0.3),
                                                0 0 0 1px rgba(255, 120, 80, 0.15)
                                            `,
                                        }}
                                    />
                                    {/* Inner engraved ring */}
                                    <div
                                        className="absolute rounded-full"
                                        style={{
                                            inset: "14px",
                                            border: "1px solid rgba(160, 50, 30, 0.5)",
                                            boxShadow: "inset 0 1px 3px rgba(80,10,0,0.4), 0 1px 1px rgba(255,120,80,0.15)",
                                        }}
                                    />
                                    {/* Glossy specular highlight — top-left, strong like real wax */}
                                    <div
                                        className="absolute"
                                        style={{
                                            width: "38%",
                                            height: "26%",
                                            top: "12%",
                                            left: "16%",
                                            background: "radial-gradient(ellipse, rgba(255, 230, 210, 0.7) 0%, rgba(255,200,170,0.2) 60%, transparent 100%)",
                                            filter: "blur(4px)",
                                            transform: "rotate(-25deg)",
                                            borderRadius: "50%",
                                        }}
                                    />
                                    {/* Z & B initials — debossed, same red family, slightly darker */}
                                    <div
                                        className="relative z-10 flex items-center justify-center"
                                        style={{
                                            fontFamily: "'Playfair Display', serif",
                                            fontSize: "1.1rem",
                                            fontWeight: 700,
                                            letterSpacing: "0.12em",
                                            color: "#8a2318",
                                            textShadow: `
                                                0 1px 1px rgba(255, 140, 100, 0.4),
                                                0 -1px 2px rgba(60, 5, 0, 0.5)
                                            `,
                                            userSelect: "none",
                                        }}
                                    >
                                        Z&nbsp;&amp;&nbsp;B
                                    </div>
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
                                    <p className="font-serif  text-[#8b1d1d]/40 text-sm tracking-widest uppercase">
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
                    filter: !showSite ? "blur(30px)" : "blur(0px)",
                    scale: !showSite ? 0.85 : 1, // Start from smaller scale for entrance
                    opacity: !showSite ? 0 : 1,
                    y: !showSite ? 30 : 0
                }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
                {children}
            </motion.main>
        </div>
    );
};
