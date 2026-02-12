"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export default function Countdown() {
    const targetDate = new Date("2026-10-10T00:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <section className="py-20 bg-ivory text-navy flex flex-col items-center justify-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8"
            >
                <h2 className="text-3xl md:text-4xl font-serif italic text-gold">Compte à rebours</h2>
                <div className="grid grid-cols-4 gap-4 md:gap-10">
                    <TimeUnit value={timeLeft.days} label="Jours" />
                    <TimeUnit value={timeLeft.hours} label="Heures" />
                    <TimeUnit value={timeLeft.minutes} label="Minutes" />
                    <TimeUnit value={timeLeft.seconds} label="Secondes" />
                </div>
            </motion.div>
        </section>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-serif text-navy tabular-nums">
                {value < 10 ? `0${value}` : value}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-gold mt-2">
                {label}
            </span>
        </div>
    );
}
