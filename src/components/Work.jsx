import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import { FaHandshake, FaGlobeAfrica, FaUsers, FaArrowRight } from 'react-icons/fa';
import { GiEagleEmblem } from 'react-icons/gi';

const partenaires = [
  {
    nom: "Secteur Public & Institutions",
    description: "Collaboration avec les structures étatiques pour l'intégration de l'éveil civique dans les programmes.",
    icon: <FaGlobeAfrica />,
    couleur: "text-green-600"
  },
  {
    nom: "Organisations Internationales",
    description: "Partenariats stratégiques pour le financement et le déploiement du Projet VITE à grande échelle.",
    icon: <FaHandshake />,
    couleur: "text-orange-500"
  },
  {
    nom: "Universités & Centres de Recherche",
    description: "Synergie intellectuelle pour adapter nos outils de coaching aux réalités de la jeunesse actuelle.",
    icon: <FaUsers />,
    couleur: "text-lime-500"
  },
  {
    nom: "Entreprises du Secteur Privé",
    description: "Réseau d'associés business offrant du mentorat et des opportunités aux jeunes du Projet VITE.",
    icon: <GiEagleEmblem />,
    couleur: "text-green-800"
  }
];

export default function Associes() {
   const navigate = useNavigate();
  return (
    <section id="work" className="py-24 px-6 bg-white dark:bg-green-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs"
          >
            S'unir pour bâtir
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-green-900 dark:text-white mt-4 tracking-tighter"
          >
            Mes <span className="text-lime-500">Associés</span> & Réalisations
          </motion.h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-100/60 mt-8 max-w-3xl mx-auto leading-relaxed">
            La transformation de notre société ne peut se faire seule. Voici les pôles d'expertise et les alliés qui soutiennent ma vision pour l'Afrique.
          </p>
        </div>

        {/* Grille des Partenariats */}
        <div className="grid gap-8 md:grid-cols-2">
          {partenaires.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group p-8 bg-green-50/50 dark:bg-green-900/30 rounded-[40px] border border-green-100 dark:border-green-800 hover:bg-white dark:hover:bg-green-900 hover:shadow-2xl transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white dark:bg-green-800 shadow-lg text-2xl ${partner.couleur} group-hover:scale-110 transition-transform`}>
                  {partner.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl font-black text-green-900 dark:text-white mb-3">
                    {partner.nom}
                  </h3>
                  <p className="text-gray-600 dark:text-green-100/70 leading-relaxed mb-6">
                    {partner.description}
                  </p>
                  
                  <button className="flex items-center gap-2 text-orange-500 font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all">
                    En savoir plus <FaArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section de réassurance (Logo strip discret) */}
        <div className="mt-24 pt-12 border-t border-gray-100 dark:border-green-800 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="w-full text-center text-xs font-black uppercase tracking-[0.4em] text-gray-400 mb-4">Ils soutiennent le mouvement</p>
           <span className="text-xl font-serif text-green-950 dark:text-white">COOPÉRATION X</span>
           <span className="text-xl font-serif text-green-950 dark:text-white">INSTITUT Y</span>
           <span className="text-xl font-serif text-green-950 dark:text-white">MINISTÈRE Z</span>
           <span className="text-xl font-serif text-green-950 dark:text-white">FONDATION W</span>
        </div>

          {/* NOUVEAU : Bouton Lien vers les Partenaires */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <button 
            onClick={() => navigate('/testimonials')} // Redirige vers votre page TeamSection que nous avons codée
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-green-900 dark:bg-lime-500 text-white dark:text-green-950 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-orange-500 dark:hover:bg-white transition-all duration-300 shadow-xl"
          >
            <FaUsers className="text-lime-400 dark:text-green-900 group-hover:text-white transition-colors" />
            Voir nos Partenaires Officiels
            <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            
            {/* Effet de brillance au survol */}
            <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <p className="mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            Découvrez les experts qui nous accompagnent
          </p>
        </motion.div>
      </div>
    </section>
  );
}
