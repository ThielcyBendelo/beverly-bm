import React, { useState } from "react";
import QuoteModal from "./QuoteModal"; 
import { FaUsers, FaLightbulb, FaMicrophoneAlt, FaRocket, FaEnvelope, FaCheckCircle } from "react-icons/fa";

const services = [
  {
    title: "Coaching Individuel - Éveil de Conscience",
    icon: <FaLightbulb />,
    description: "Accompagnement personnalisé pour déconstruire les blocages et révéler votre potentiel de leader.",
    template: "Séances privées à Kinshasa ou en ligne, bilan de compétences émotionnelles, exercices de leadership et suivi de progression mensuel.",
    benefits: ["Prise de conscience", "Confiance en soi", "Leadership civique", "Clarté de vision"],
    price: "Sur devis",
  },
  {
    title: "Conférences & Ateliers de Groupe",
    icon: <FaMicrophoneAlt />,
    description: "Interventions dynamiques en milieu scolaire, universitaire ou professionnel pour inspirer le changement.",
    template: "Thématiques sur la résilience africaine, la prise de conscience citoyenne, la gestion du temps et l'entrepreneuriat éthique.",
    benefits: ["Impact collectif", "Motivation forte", "Outils pratiques", "Interaction direct"],
    price: "Sur devis",
  },
  {
    title: "Accompagnement Entrepreneurial (VITE)",
    icon: <FaRocket />,
    description: "Transformer vos idées en projets concrets et générateurs de valeur sur le terrain africain.",
    template: "Analyse de projet, stratégie d'exécution rapide, structuration de l'offre et mentorat sur la réalité du marché congolais.",
    benefits: ["Action immédiate", "Modèle économique", "Réseau local", "Résultats VITE"],
    price: "Sur devis",
  },
  {
    title: "Transmission & Mentorat Auteur",
    icon: <FaUsers />,
    description: "Ateliers d'écriture et de transmission basés sur mes ouvrages pour cultiver la résilience.",
    template: "Cercle de lecture critique, partage d'expérience d'auteur, aide à la structuration de pensée et mentorat pour futurs auteurs.",
    benefits: ["Héritage intellectuel", "Sagesse pratique", "Résilience", "Transmission"],
    price: "Sur devis",
  },
];

// Helper pour la modale - Adapté à vos nouveaux titres
function getServiceKey(title) {
  const t = title.trim();
  if (t.includes("Coaching Individuel")) return "Coaching Individuel";
  if (t.includes("Conférences")) return "Conférences & Ateliers";
  if (t.includes("Accompagnement Entrepreneurial")) return "Accompagnement VITE";
  if (t.includes("Transmission")) return "Mentorat Auteur";
  return "autre";
}

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleQuoteClick = (serviceKey) => {
    setSelectedService(serviceKey);
    setModalOpen(true);
  };

  return (
    <section id="services" className="py-20 px-4 bg-white dark:bg-green-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section rafraîchi */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-green-900 dark:text-lime-400 uppercase tracking-tighter">
            Mes Offres d'Accompagnement
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-4"></div>
          <p className="text-xl text-gray-600 dark:text-green-100 font-medium max-w-3xl mx-auto mt-6 italic">
            "Bâtir des consciences fortes et des projets durables pour transformer l'Afrique aujourd'hui."
          </p>
        </div>

        {/* Grille de services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-green-50/50 dark:bg-green-900/30 rounded-[40px] shadow-sm p-10 flex flex-col border border-green-100 dark:border-green-800 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl text-orange-500 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="px-4 py-1 bg-white dark:bg-green-800 rounded-full text-green-700 dark:text-lime-400 text-xs font-bold shadow-sm">
                  {service.price}
                </div>
              </div>

              <h3 className="text-2xl font-black mb-4 text-green-900 dark:text-white leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-green-100/70 mb-6 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Bloc Template / Approche */}
              <div className="mb-6 p-5 bg-white dark:bg-green-900/50 rounded-3xl text-sm text-green-800 dark:text-lime-300 border border-green-100 dark:border-green-700">
                <span className="block text-gray-400 dark:text-green-500 mb-2 uppercase tracking-widest text-[10px] font-bold">L'approche Verro BM :</span>
                {service.template}
              </div>

              {/* Liste des bénéfices */}
              <div className="mb-8 flex flex-wrap gap-2">
                {service.benefits.map((b, i) => (
                  <span key={i} className="flex items-center gap-1 bg-green-900 dark:bg-lime-500 text-white dark:text-green-950 rounded-lg px-3 py-1.5 text-[10px] font-black uppercase tracking-wider">
                    <FaCheckCircle className="text-[10px]" /> {b}
                  </span>
                ))}
              </div>

              <div className="mt-auto space-y-3">
                {/* Bouton Principal : Devis */}
                <button
                  onClick={() => handleQuoteClick(getServiceKey(service.title))}
                  className="w-full py-4 bg-orange-600 text-white rounded-2xl font-black text-lg shadow-lg hover:bg-green-900 transition-all transform active:scale-95"
                >
                  Démarrer le Coaching
                </button>

                {/* Bouton Secondaire : Contact direct */}
                <a
                  href={`mailto:ingebalouiscar@gmail.com?subject=Information sur le ${service.title}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-green-900 dark:border-lime-500 text-green-900 dark:text-lime-500 rounded-2xl font-bold hover:bg-green-50 dark:hover:bg-green-800 transition-all duration-300"
                >
                  <FaEnvelope /> Échanger par Email
                </a>
              </div>
            </div>
          ))}
        </div>

        <QuoteModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          defaultService={selectedService}
        />
      </div>
    </section>
  );
}
