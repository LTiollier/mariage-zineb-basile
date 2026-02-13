"use client";

import { motion } from "framer-motion";
import { Info, Map as MapIcon, Shirt } from "lucide-react";
import { useState } from "react";
import HotelModal from "./HotelModal";

export default function Details() {
  const [isHotelModalOpen, setIsHotelModalOpen] = useState(false);

  return (
    <section className="py-24 bg-ivory text-navy px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif italic text-gold">
            Informations Utiles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <DetailCard
            icon={<MapIcon className="w-6 h-6" />}
            title="Le Lieu"
            content="Le Palais Tazi est un joyau architectural niché au cœur de Tanger. Il offre un cadre somptueux et une vue imprenable sur la baie."
            actionText="Voir sur Google Maps"
            actionUrl="https://maps.app.goo.gl/614jX38P2Xqfvvk69"
          />
          <DetailCard
            icon={<Shirt className="w-6 h-6" />}
            title="Dress Code"
            content="Nous serions ravis de vous voir dans vos plus beaux atours. Tenue formelle ou traditionnelle (Caftan pour les dames, Jabador ou costume pour les messieurs)."
          />
          <DetailCard
            icon={<Info className="w-6 h-6" />}
            title="Hébergement"
            content="De nombreux hôtels de charme sont situés à proximité du Palais Tazi. Nous vous recommandons de réserver à l'avance."
            actionText="Voir notre sélection"
            onActionClick={() => setIsHotelModalOpen(true)}
          />
        </div>
      </div>

      <HotelModal
        isOpen={isHotelModalOpen}
        onClose={() => setIsHotelModalOpen(false)}
      />
    </section>
  );
}

function DetailCard({
  icon,
  title,
  content,
  actionText,
  actionUrl,
  onActionClick,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  actionText?: string;
  actionUrl?: string;
  onActionClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10 flex flex-col items-center text-center space-y-4"
    >
      <div className="p-3 bg-ivory rounded-full text-gold">{icon}</div>
      <h3 className="text-2xl font-serif italic text-navy">{title}</h3>
      <p className="text-navy/70 leading-relaxed font-sans text-sm">
        {content}
      </p>
      {actionText && (
        <>
          {actionUrl ? (
            <a
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors rounded-full text-sm font-sans uppercase tracking-widest"
            >
              {actionText}
            </a>
          ) : (
            <button
              onClick={onActionClick}
              className="mt-4 px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-colors rounded-full text-sm font-sans uppercase tracking-widest cursor-pointer"
            >
              {actionText}
            </button>
          )}
        </>
      )}
    </motion.div>
  );
}
