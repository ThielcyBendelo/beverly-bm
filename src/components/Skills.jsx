import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Remplacez 'nom-du-fichier.jpg' par le vrai nom de vos images dans le dossier assets
import  ouvrage1  from '../assets/ouvrage1.jpeg';
import  ouvrage2  from '../assets/ouvrage2.jpeg';

import { 
  FaBookOpen, 
  FaShoppingBag, 
  FaQuoteRight, 
  FaCheck, 
  FaArrowRight 
} from 'react-icons/fa';
import QuoteModal from './QuoteModal';

const ouvrages = [
  {
    title: "Le Réveil de la Conscience",
    extractUrl: "/extraits/livre1_extrait.pdf",
    subtitle: "L'éveil pour une transformation durable",
    description: "Un voyage introspectif pour briser les chaînes mentales et s'affirmer dans une société en pleine mutation.",
    details: [
      { label: "Format", value: "Broché & Numérique" },
      { label: "Pages", value: "240 pages" },
      { label: "Thème", value: "Leadership" }
    ],
    points: [
      "Vaincre la peur du regard des autres",
      "Développer une discipline de fer",
      "Comprendre son rôle dans la cité"
    ],
    price: "15.000 FC",
    image: ouvrage1,
  },
  {
    title: "La Voix de la Résilience",
    extractUrl: "/extraits/livre1_extrait.pdf",
    subtitle: "Manuel de survie pour leaders africains",
    description: "Comment transformer chaque obstacle en un tremplin vers le succès entrepreneurial et personnel.",
    details: [
      { label: "Format", value: "Édition Prestige" },
      { label: "Pages", value: "195 pages" },
      { label: "Thème", value: "Entrepreneuriat" }
    ],
    points: [
      "L'art de rebondir après l'échec",
      "Gérer son énergie et non son temps",
      "Bâtir un réseau d'influence solide"
    ],
    price: "20.000 FC",
    image: ouvrage2,
  }
];

export default function Livres() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState("");
  const [previewOpen, setPreviewOpen] = useState(false);
  const [currentExtract, setCurrentExtract] = useState("");

  const handleOrderClick = (title) => {
    setSelectedBook(title);
    setModalOpen(true);
  };

  const handlePreviewClick = (extractUrl) => {
    if(extractUrl !== "#") {
      window.open(extractUrl, '_blank');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.section
      id="livres"
      className="py-24 px-6 bg-gray-50 dark:bg-green-950 transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-green-900 dark:text-lime-400 mb-6 uppercase tracking-tighter">
            Ma Bibliothèque
          </h1>
          <div className="h-2 w-32 bg-orange-500 mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 dark:text-green-100/70 max-w-2xl mx-auto italic">
            "La plume est le prolongement de mon combat pour l'éveil des consciences."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {ouvrages.map((livre, idx) => (
            <motion.div key={idx} variants={cardVariants} className="group bg-white dark:bg-green-900/40 rounded-[50px] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white dark:border-green-800">
              {/* Image Section */}
              <div className="md:w-2/5 relative h-80 md:h-auto">
                <img src={livre.image} alt={livre.title} className="w-full h-full object-cover" />
                <div className="absolute top-6 left-6 bg-green-900 text-lime-400 px-4 py-2 rounded-xl font-black shadow-lg">
                  {livre.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-10 flex flex-col">
                <h2 className="text-3xl font-black text-green-900 dark:text-white mb-2">{livre.title}</h2>
                <h3 className="text-xs uppercase tracking-[0.2em] text-orange-500 font-black mb-6">{livre.subtitle}</h3>

                {/* Details Grid */}
                <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-100 dark:border-green-800">
                  {livre.details.map((det, i) => (
                    <div key={i}>
                      <p className="text-[10px] uppercase text-gray-400 font-bold">{det.label}</p>
                      <p className="text-xs font-black text-green-900 dark:text-white">{det.value}</p>
                    </div>
                  ))}
                </div>

                {/* Points Clés */}
                <div className="space-y-2 mb-8">
                  {livre.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-green-100">
                      <FaCheck className="text-lime-500 text-[10px]" /> <span>{p}</span>
                    </div>
                  ))}
                </div>

                {/* Actions Buttons */}
                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={() => handleOrderClick(livre.title)}
                    className="flex-1 bg-green-900 dark:bg-lime-500 text-white dark:text-green-950 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-500 transition-all shadow-lg"
                  >
                    <FaShoppingBag /> Commander
                  </button>

                  <button 
                    onClick={() => handlePreviewClick(livre.extractUrl)}
                    className="flex-1 group relative border-2 border-green-900/10 dark:border-green-800 text-green-900 dark:text-white py-4 rounded-2xl font-bold transition-all duration-300 hover:border-orange-500 hover:bg-orange-50 dark:hover:bg-orange-500/10 overflow-hidden"
                  >
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      <FaBookOpen className="text-orange-500 group-hover:rotate-12 transition-transform" />
                      <span>Extrait</span>
                    </div>
                    <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-500"></div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <QuoteModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultService={selectedBook}
        />
      </div>
    </motion.section>
  );
}
