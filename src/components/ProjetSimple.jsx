import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; 
import { 
  FaRocket, FaLightbulb, FaUsers, FaArrowRight, 
  FaCheckDouble, FaCheckCircle, FaMapMarkerAlt, FaChartBar 
} from "react-icons/fa";
import { GiEagleEmblem } from "react-icons/gi";
import QuoteModal from "./QuoteModal";
import { projet1, projet2, projet3, projet4, projet5, projet6 } from "../assets/assets";


// Vos projets de terrain listés
const realisationsVite = [
  {
    title: "Lancement VITE - Kinshasa",
    subtitle: "Autonomisation entrepreneuriale",
    description: "Transformation des idées des jeunes kinois en entreprises viables via un accompagnement de proximité.",
    details: [{ label: "Impact", value: "50 Projets" }, { label: "Lieu", value: "Kinshasa" }, { label: "Type", value: "Action" }],
    points: ["Structuration business", "Mentorat direct", "Formalisation"],
    tag: "Action",
    image: projet1,
  },
  {
    title: "Tournée Éveil des Consciences",
    subtitle: "Leadership & Citoyenneté",
    description: "Série de conférences dans les universités pour stimuler le potentiel de leadership des étudiants.",
    details: [{ label: "Audience", value: "+5000 Jeunes" }, { label: "Portée", value: "National" }, { label: "Outil", value: "Conférence" }],
    points: ["Prise de conscience", "Guides pratiques", "Clubs locaux"],
    tag: "Éducation",
    image: projet2,
  },
  {
    title: "Incubateur VITE - Goma",
    subtitle: "Résilience par l'économie",
    description: "Soutien aux micro-entreprises de transformation pour stabiliser les revenus des familles dans l'Est.",
    details: [{ label: "Focus", value: "Innovation" }, { label: "Région", value: "Nord-Kivu" }, { label: "Statut", value: "Actif" }],
    points: ["Gestion de crise", "Marchés digitaux", "Suivi mensuel"],
    tag: "Résilience",
    image: projet3,
  },
  {
    title: "Manuel : Guide de Résilience",
    subtitle: "De la lecture à l'application",
    description: "Un outil pédagogique complet conçu pour accompagner mes ouvrages et faciliter l'auto-coaching.",
    details: [{ label: "Pages", value: "60 pages" }, { label: "Format", value: "A5 / PDF" }, { label: "Type", value: "Outil" }],
    points: ["Exercices pratiques", "Feuilles de route", "Plan d'action"],
    tag: "Auteur",
    image: projet4,
  },
  {
    title: "Mentorat Femmes Leaders",
    subtitle: "Empowerment au féminin",
    description: "Programme dédié à l'ascension des femmes dans la prise de décision et l'entrepreneuriat social.",
    details: [{ label: "Cible", value: "Femmes" }, { label: "Focus", value: "Leadership" }, { label: "Style", value: "Cercle" }],
    points: ["Confiance en soi", "Prise de parole", "Networking"],
    tag: "Impact",
    image: projet5,
  },
  {
    title: "VITE Digital Hub",
    subtitle: "Formation sans frontières",
    description: "Plateforme centralisée offrant des ressources de formation accessibles partout en Afrique.",
    details: [{ label: "Accès", value: "24/7" }, { label: "Cours", value: "Vidéo/PDF" }, { label: "Portée", value: "Digitale" }],
    points: ["Bibliothèque numérique", "Certification", "Entraide"],
    tag: "Digital",
    image: projet6,
  }
];



export default function ProjetVite() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  const navigate = useNavigate();

  const handleJoinProject = (title) => {
    setSelectedProject(`Partenariat : ${title}`);
    setModalOpen(true);
  };

  const pointsForts = [
    { 
      title: "Vision", 
      desc: "Identifier les opportunités cachées au cœur de la société congolaise.",
      icon: <FaLightbulb className="text-orange-500" /> 
    },
    { 
      title: "Impact", 
      desc: "Créer des solutions génératrices de revenus et d'autonomie pour les jeunes.",
      icon: <FaRocket className="text-lime-500" /> 
    },
    { 
      title: "Terrain", 
      desc: "Une exécution rapide (VITE) basée sur les réalités locales.",
      icon: <GiEagleEmblem className="text-green-700" /> 
    }
  ];

  return (
    <div className="bg-white dark:bg-green-950 min-h-screen transition-colors duration-500">
      {/* 1. HERO SECTION */}
      <section className="relative py-32 bg-green-950 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/10 skew-x-12 transform translate-x-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="max-w-3xl">
            <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-widest shadow-lg">
              L'Entrepreneuriat en Action
            </span>
            <h1 className="text-5xl md:text-8xl font-black mt-8 mb-8 uppercase tracking-tighter leading-none">
              PROJET <span className="text-lime-400 italic">VITE</span>
            </h1>
            <p className="text-xl text-green-100 leading-relaxed mb-10 max-w-xl italic border-l-4 border-lime-500 pl-6">
              "Transformer la résilience en succès économique immédiat."
            </p>
            <button onClick={() => setModalOpen(true)} className="px-10 py-5 bg-lime-500 text-green-950 rounded-2xl font-black hover:bg-white transition-all flex items-center gap-3 shadow-2xl">
              Soutenir l'initiative <FaArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. LES TROIS PILIERS */}
      <section className="py-20 px-6 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {pointsForts.map((item, index) => (
            <motion.div key={index} whileHover={{ y: -10 }} className="p-10 bg-white dark:bg-green-900 rounded-[40px] shadow-2xl border border-gray-100 dark:border-green-800">
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-black text-green-900 dark:text-white mb-4">{item.title}</h3>
              <p className="text-gray-600 dark:text-green-100/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. SECTION RÉALISATIONS (LES PROJETS) */}
      <section className="py-24 bg-white dark:bg-green-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black text-green-900 dark:text-white">
              Actions sur le <span className="text-orange-500">Terrain</span>
            </h2>
            <p className="text-gray-500 dark:text-green-100/60 mt-4 text-lg">Découvrez l'impact concret du Projet VITE à travers la RDC.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {realisationsVite.map((project, idx) => (
              <motion.div key={idx} className="bg-gray-50 dark:bg-green-900/30 rounded-[40px] overflow-hidden border border-gray-100 dark:border-green-800 flex flex-col shadow-xl">
                <div className="relative h-56">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">
                    {project.tag}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-green-900 dark:text-white mb-1">{project.title}</h3>
                  <p className="text-[10px] font-bold text-lime-600 uppercase tracking-widest mb-4">{project.subtitle}</p>
                  
                  <div className="grid grid-cols-3 gap-2 py-4 mb-6 border-y border-gray-200 dark:border-green-800">
                    {project.details.map((det, i) => (
                      <div key={i} className="text-center">
                        <p className="text-[8px] font-bold text-gray-400 uppercase">{det.label}</p>
                        <p className="text-[10px] font-black text-green-800 dark:text-white uppercase">{det.value}</p>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-green-100/70 text-sm mb-6 line-clamp-3 italic">"{project.description}"</p>

                  <ul className="space-y-2 mb-8">
                    {project.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-green-50">
                        <FaCheckCircle className="text-orange-500" /> {p}
                      </li>
                    ))}
                  </ul>

                  <button onClick={() => handleJoinProject(project.title)} className="mt-auto w-full py-4 bg-green-950 dark:bg-lime-500 text-white dark:text-green-950 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-orange-500 transition-all">
                    S'associer <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     {/* 4. APPEL À L'ACTION FINAL */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">
    <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-[50px] p-12 text-center text-white shadow-2xl relative overflow-hidden">
      
      {/* Filigrane Aigle */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <GiEagleEmblem className="text-[300px] -ml-20 -mt-20" />
      </div>

      <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">
        Devenez Partenaire de l'Action
      </h2>
      
      <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto relative z-10 font-medium">
        Que vous soyez un investisseur, une institution ou un mentor, rejoignez le mouvement pour accélérer le changement positif.
      </p>

      {/* GROUPE DE BOUTONS */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
        
        {/* Bouton Principal */}
        <button 
          onClick={() => setModalOpen(true)} 
          className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-green-900 transition-all shadow-xl"
        >
          Collaborer avec VITE
        </button>

        {/* NOUVEAU BOUTON : Voir mes associés */}
        <button 
          onClick={() => navigate('/work')} // Assurez-vous que la route existe ou utilisez un lien d'ancrage
          className="w-full sm:w-auto px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-lime-400 transition-all flex items-center justify-center gap-2 group"
        >
          <FaUsers className="text-lime-400 group-hover:scale-110 transition-transform" />
          Voir mes associés
        </button>

      </div>
    </div>
  </div>
</section>


      <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} defaultService={selectedProject} />
    </div>
  );
}
