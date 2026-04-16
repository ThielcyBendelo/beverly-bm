import React from "react";
import { motion } from 'framer-motion';
import { FaLinkedin, FaHandshake, FaGlobe } from 'react-icons/fa';

const team = [
  {
    name: "Dr. Marie-Claire M.",
    role: "Partenaire Stratégique - Éducation",
    bio: "Spécialiste en psychologie de l'apprentissage. Elle apporte son expertise pour structurer les programmes d'éveil de conscience destinés aux universités.",
    avatar: "https://randomuser.me",
    linkedin: "#",
    expertise: ["Éducation", "Psychologie", "Leadership"],
    badge: "Sénior",
  },
  {
    name: "Jean-Paul Kabeya",
    role: "Associé Projet VITE - Terrain",
    bio: "Expert en entrepreneuriat local avec 15 ans d'expérience en RDC. Il coordonne l'implémentation opérationnelle de VITE sur le terrain à Kinshasa.",
    avatar: "https://randomuser.me",
    linkedin: "#",
    expertise: ["Logistique", "Entrepreneuriat", "Réseau RDC"],
    badge: "Associé",
  },
  {
    name: "Arlette T. Bukasa",
    role: "Conseillère Mentorat Féminin",
    bio: "Fondatrice de plusieurs initiatives sociales. Elle accompagne Verro BM dans le développement de l'axe 'Mentorat Femmes Leaders'.",
    avatar: "https://randomuser.me",
    linkedin: "#",
    expertise: ["Social", "Mentorat", "Plaidoyer"],
    badge: "Partenaire",
  },
];

function TeamSection() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-green-950 transition-colors duration-500" id="associes">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* En-tête de section */}
        <div className="mb-20">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs">Unir nos forces</span>
          <h2 className="text-4xl md:text-6xl font-black text-green-900 dark:text-white mt-4 tracking-tighter">
            Mes Associés & <span className="text-lime-500">Partenaires</span>
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-6"></div>
          <p className="text-xl text-gray-600 dark:text-green-100/60 mt-8 max-w-3xl mx-auto leading-relaxed italic">
            "Seule on avance, mais ensemble nous transformons l'Afrique. Voici les experts qui partagent ma vision pour une jeunesse consciente."
          </p>
        </div>

        {/* Grille des Associés */}
        <div className="grid gap-10 md:grid-cols-3">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              className="group bg-green-50/50 dark:bg-green-900/30 rounded-[50px] p-8 flex flex-col items-center border border-green-100 dark:border-green-800 hover:bg-white dark:hover:bg-green-900 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              {/* Photo avec effet de cadre */}
              <div className="relative mb-8">
                <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-lime-400 rounded-full blur opacity-20 group-hover:opacity-100 transition duration-500"></div>
                <img src={member.avatar} alt={member.name} className="relative w-32 h-32 rounded-full object-cover border-4 border-white dark:border-green-800 shadow-xl" />
              </div>

              {/* Infos */}
              <div className="mb-4">
                <span className="bg-orange-100 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 text-[10px] px-3 py-1 rounded-full font-black uppercase tracking-widest mb-3 inline-block">
                  {member.badge}
                </span>
                <h3 className="text-2xl font-black text-green-900 dark:text-white leading-tight">{member.name}</h3>
                <p className="text-sm font-bold text-lime-600 dark:text-lime-400 uppercase tracking-tighter mt-1">{member.role}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 dark:text-green-100/70 text-sm leading-relaxed text-center mb-6">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="mb-8 flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill, i) => (
                  <span key={i} className="bg-white dark:bg-green-800 text-green-800 dark:text-green-100 border border-green-100 dark:border-green-700 px-3 py-1 rounded-lg text-[10px] font-bold shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Lien Réseau Social */}
              <div className="mt-auto">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" 
                   className="flex items-center gap-2 text-green-900 dark:text-lime-400 font-black text-xs uppercase tracking-widest hover:text-orange-500 transition-colors">
                  Voir le profil <FaLinkedin size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Partenaires Institutionnels (Optionnel) */}
        <div className="mt-32 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <p className="text-xs font-black uppercase tracking-[0.5em] text-gray-400 mb-8">Ils nous font confiance</p>
           <div className="flex flex-wrap justify-center gap-12 text-2xl font-serif text-green-900 dark:text-white">
              <span>MINISTÈRE X</span>
              <span>UNIVERSITÉ Y</span>
              <span>ONG IMPACT</span>
              <span>FONDATION Z</span>
           </div>
        </div>

      </div>
    </section>
  );
}

export default TeamSection;
