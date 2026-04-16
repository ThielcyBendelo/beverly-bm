import { motion } from 'framer-motion';
import { FaGraduationCap, FaLightbulb, FaHeart, FaMapMarkerAlt, FaQuoteLeft } from 'react-icons/fa';
import { profile1Image as beya1  } from '../assets/assets.js';
import LazyImage from './LazyImage';
import GoogleMapsSection from './GoogleMapsSection';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <motion.section
        id="about"
        className="relative pb-20 pt-16 overflow-hidden bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Éléments de design en arrière-plan */}
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-lime-50/50 to-transparent -z-10" />
        <div className="absolute top-40 right-[-10%] w-96 h-96 bg-orange-100/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-[-5%] w-72 h-72 bg-green-100/40 rounded-full blur-3xl -z-10" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center">
          
          {/* VISUALISATION DE L'IMAGE AMÉLIORÉE */}
          <motion.div variants={itemVariants} className="mb-16 relative">
            {/* Double cercle rotatif en arrière-plan */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-6 border-2 border-dashed border-lime-200 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border-2 border-dotted border-orange-200 rounded-full"
            />
            
            <div className="relative group">
              {/* Ombre portée stylisée */}
              <div className="absolute inset-0 bg-green-900 rounded-[60px] rotate-6 scale-95 opacity-10 group-hover:rotate-12 transition-transform duration-500"></div>
              
              {/* Conteneur Image avec masque de forme moderne (Squircle) */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-[60px] border-8 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-[1.02]">
                <LazyImage
                  src={beya1}
                  alt="Verro Malu Beya"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: 'center 30%' }}
                />
                {/* Overlay de lumière au survol */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Badge d'expérience flottant */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="text-2xl font-black">+</div>
                <div className="text-[10px] uppercase tracking-tighter font-bold">Ans d'impact</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Titre avec lettrine ou style souligné */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Découvrez mon parcours</span>
            <h2 className="text-4xl md:text-6xl font-black text-green-900 mb-6">
              L'histoire derrière la voix
            </h2>
            <div className="flex justify-center items-center gap-2">
               <div className="h-1.5 w-12 bg-lime-400 rounded-full" />
               <div className="h-1.5 w-4 bg-orange-500 rounded-full" />
            </div>
          </motion.div>

          {/* Texte de présentation avec icône Quote */}
          <motion.div variants={itemVariants} className="max-w-4xl text-center mb-20 relative">
            <FaQuoteLeft className="absolute -top-10 left-1/2 -translate-x-1/2 text-gray-100 text-8xl -z-10" />
            <p className="text-xl md:text-3xl text-gray-800 leading-tight italic font-medium">
              "Mon parcours n'est pas une simple ligne droite, c'est un <span className="text-green-700">engagement profond</span> pour la dignité et l'éveil de la jeunesse africaine."
            </p>
          </motion.div>

          {/* Grille de cartes avec effets de verre (Glassmorphism) */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 w-full max-w-5xl"
            variants={itemVariants}
          >
            {[
              { icon: <FaLightbulb />, title: "Éveil de Conscience", text: "J'accompagne les jeunes dans la déconstruction des complexes et la prise de conscience citoyenne.", color: "bg-green-600", light: "bg-green-50" },
              { icon: <FaGraduationCap />, title: "Plume Engagée", text: "À travers mes livres, je transmets des outils de résilience pour naviguer dans les défis de notre société.", color: "bg-orange-500", light: "bg-orange-50" },
              { icon: <FaHeart />, title: "Impact VITE", text: "Le projet VITE crée des solutions immédiates et durables pour l'autonomie financière et sociale.", color: "bg-lime-500", light: "bg-lime-50" },
              { icon: <FaMapMarkerAlt />, title: "Basée à Kinshasa", text: "Présente sur le terrain, j'offre un accompagnement de proximité au cœur de nos communautés.", color: "bg-gray-800", light: "bg-gray-50" }
            ].map((card, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className={`p-10 rounded-[40px] ${card.light} border border-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group`}
              >
                <div className="flex items-start gap-6 relative z-10">
                  <div className={`p-4 ${card.color} text-white rounded-2xl shadow-lg transform group-hover:rotate-12 transition-transform`}>
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{card.text}</p>
                  </div>
                </div>
                {/* Décoration subtile en fond de carte */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 ${card.color} opacity-[0.03] rounded-full`} />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA FINAL AMÉLIORÉ */}
          <motion.div variants={itemVariants} className="mt-24 text-center">
            <div className="inline-block p-1 rounded-full bg-gradient-to-r from-lime-400 to-orange-500">
                <button 
                  onClick={() => document.getElementById('/home').scrollIntoView()}
                  className="px-12 py-5 bg-white hover:bg-transparent hover:text-white text-green-900 rounded-full font-extrabold text-lg transition-all duration-300 shadow-inner"
                >
                  Démarrer la transformation
                </button>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <GoogleMapsSection />
    </>
  );
}
