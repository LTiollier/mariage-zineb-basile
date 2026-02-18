"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

export default function RsvpForm() {
    const [formData, setFormData] = useState({
        attendance: "",
        name: "",
        email: "",
        phone: "",
        hasChildren: "",
        childrenCount: "1",
        dietary: "Non",
        website: "", // Honeypot field
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch("/api/rsvp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to submit RSVP");
            }

            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (err) {
            setIsSubmitting(false);
            setError(err instanceof Error ? err.message : "Une erreur est survenue");
        }
    };

    if (isSubmitted) {
        // Generate confetti particles
        const particles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            angle: (i * 360) / 30, // Evenly distributed or random
            distance: 60 + Math.random() * 40, // 60-100px
            size: 4 + Math.random() * 4, // 4-8px
            color: ['#c5a059', '#8b7346', '#e5d5b0'][Math.floor(Math.random() * 3)], // Gold, Darker Gold, Light Gold
            delay: Math.random() * 0.2
        }));

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-xl text-center border border-gold/20 relative overflow-hidden"
            >
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                    {/* Confetti Explosion */}
                    {particles.map((p) => (
                        <motion.div
                            key={p.id}
                            initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                            animate={{
                                x: Math.cos(p.angle * Math.PI / 180) * p.distance,
                                y: Math.sin(p.angle * Math.PI / 180) * p.distance,
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.2 + p.delay,
                                times: [0, 0.2, 1]
                            }}
                            className="absolute rounded-full"
                            style={{
                                width: p.size,
                                height: p.size,
                                backgroundColor: p.color
                            }}
                        />
                    ))}

                    {/* Animated Checkmark Circle */}
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center z-10"
                    >
                        {/* Drawing Checkmark SVG */}
                        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                d="M10 25 L22 37 L40 13"
                                stroke="#16a34a" // green-600
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                            />
                        </svg>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <h3 className="text-3xl font-serif text-gold mb-4">Merci !</h3>
                    <p className="text-navy/80 font-sans">
                        Votre réponse a bien été enregistrée. Nous avons hâte de vous retrouver.
                    </p>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto bg-white text-navy p-6 md:p-10 rounded-2xl shadow-xl border border-gold/20">
            <form onSubmit={handleSubmit} className="space-y-8 text-left">
                {/* Honeypot field - hidden from users, catches bots */}
                <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    style={{ position: 'absolute', left: '-9999px', width: 1, height: 1 }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                />

                {/* Error message */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                <div className="space-y-3">
                    <label className="block text-navy font-serif text-xl">Serez-vous présent(e) ?</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className={`
              cursor-pointer border rounded-xl p-4 flex items-center justify-center transition-all
              ${formData.attendance === 'oui' ? 'bg-gold/10 border-gold text-navy' : 'border-gray-200 hover:border-gold/50'}
            `}>
                            <input
                                type="radio"
                                name="attendance"
                                value="oui"
                                className="hidden"
                                onChange={handleChange}
                                required
                            />
                            <span className="font-sans text-sm text-center">Oui, je confirme ma présence pour votre grand jour !</span>
                        </label>
                        <label className={`
              cursor-pointer border rounded-xl p-4 flex items-center justify-center transition-all
              ${formData.attendance === 'non' ? 'bg-navy/5 border-navy text-navy' : 'border-gray-200 hover:border-navy/30'}
            `}>
                            <input
                                type="radio"
                                name="attendance"
                                value="non"
                                className="hidden"
                                onChange={handleChange}
                            />
                            <span className="font-sans text-sm text-center">Malheureusement, je ne pourrai pas être présent(e).</span>
                        </label>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-navy/80 font-sans text-sm uppercase tracking-wide">Nom entier</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors font-serif text-lg text-navy placeholder:text-gray-300"
                            placeholder="Prénom et Nom"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-navy/80 font-sans text-sm uppercase tracking-wide">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors font-serif text-lg text-navy placeholder:text-gray-300"
                            placeholder="votre@email.com (optionnel)"
                        />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                        <label htmlFor="phone" className="block text-navy/80 font-sans text-sm uppercase tracking-wide">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold bg-transparent transition-colors font-serif text-lg text-navy placeholder:text-gray-300"
                            placeholder="06 12 34 56 78"
                        />
                    </div>
                </div>

                {/* Children & Dietary - Only show if attending */}
                <AnimatePresence>
                    {formData.attendance === 'oui' && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-8 overflow-hidden"
                        >
                            {/* Children */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <label className="block text-navy font-serif text-xl">Accompagné(e) d&apos;enfants ?</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasChildren"
                                            value="non"
                                            checked={formData.hasChildren === 'non'}
                                            onChange={handleChange}
                                            className="accent-gold w-5 h-5"
                                        />
                                        <span className="font-sans">Non</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="hasChildren"
                                            value="oui"
                                            checked={formData.hasChildren === 'oui'}
                                            onChange={handleChange}
                                            className="accent-gold w-5 h-5"
                                        />
                                        <span className="font-sans">Oui</span>
                                    </label>
                                </div>

                                {formData.hasChildren === 'oui' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center gap-4 mt-2 bg-gray-50 p-4 rounded-lg"
                                    >
                                        <label className="font-sans text-navy/80">Nombre d&apos;enfants :</label>
                                        <div className="relative">
                                            <select
                                                name="childrenCount"
                                                value={formData.childrenCount}
                                                onChange={handleChange}
                                                className="appearance-none bg-white border border-gray-300 rounded px-4 py-1 pr-8 text-navy focus:outline-none focus:border-gold"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            {/* Dietary */}
                            <div className="space-y-4 pt-4 border-t border-gray-100">
                                <label className="block text-navy font-serif text-xl">Êtes-vous végétarien ?</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <label className={`
                    cursor-pointer border rounded-lg p-3 flex items-center justify-between transition-all
                    ${formData.dietary === 'Végétarien' ? 'border-gold bg-gold/5' : 'border-gray-200 hover:border-gray-300'}
                  `}>
                                        <span className="font-sans">Oui</span>
                                        <input
                                            type="radio"
                                            name="dietary"
                                            value="Végétarien"
                                            checked={formData.dietary === 'Végétarien'}
                                            onChange={handleChange}
                                            className="accent-gold"
                                        />
                                    </label>
                                    <label className={`
                    cursor-pointer border rounded-lg p-3 flex items-center justify-between transition-all
                    ${formData.dietary === 'Non' ? 'border-gold bg-gold/5' : 'border-gray-200 hover:border-gray-300'}
                  `}>
                                        <span className="font-sans">Non</span>
                                        <input
                                            type="radio"
                                            name="dietary"
                                            value="Non"
                                            checked={formData.dietary === 'Non'}
                                            onChange={handleChange}
                                            className="accent-gold"
                                        />
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="pt-6">
                    <button
                        type="submit"
                        disabled={isSubmitting || !formData.attendance}
                        className="w-full bg-gold text-white py-4 rounded-full font-sans uppercase tracking-[0.2em] transition-all hover:bg-gold-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 cursor-pointer"
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Envoi en cours...
                            </>
                        ) : (
                            "Confirmer ma réponse"
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}
