import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// Hooks & Services
import useParallax from '../hooks/useParallax';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import notificationService from '../services/notificationService';

// Composants & Assets
import LazyImage from './LazyImage';
import AnimatedSection from './AnimatedSection';
import { profileImage } from '../assets/assets.js';

// Icônes
import { 
  FaHandsHelping, 
  FaBookOpen, 
  FaRocket, 
  FaChartLine, 
  FaCheckCircle, 
  FaQuoteLeft 
} from 'react-icons/fa';

export default function Hero() {
  const scrollY = useParallax();
  const [elementRef] = useIntersectionObserver();
  const navigate = useNavigate();

  const backgrounds = [
    '/background11.jpeg',
    '/background12.jpeg',
    '/background13.jpeg',
  ];
  const [bgIndex, setBgIndex] = useState(0);

  // Slider automatique pour le background
  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  return (
    <div className="bg-white">
      {/* ================= SECTION HERO ================= */}
      <section
        ref={elementRef}
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden"
      >
        {/* Background Slider */}
        <div
          className="absolute inset-0 w-full h-full transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgrounds[bgIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/60 via-transparent to-white z-10" />

        {/* Particules Animées */}
        <div className="absolute inset-0 z-15 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-lime-400' : 'bg-orange-500'}`}
              animate={{ y: [0, -100], opacity: [0, 0.7, 0], scale: [0, 1.5, 0] }}
              transition={{ duration: Math.random() * 5 + 3, repeat: Infinity, delay: Math.random() * 2 }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-20 max-w-5xl">
          {/* Photo de Profil */}
          <AnimatedSection variant="scaleIn" delay={0.2}>
            <div className="mb-8 flex justify-center">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <LazyImage
                  src={profileImage}
                  alt="Verro Malu Beya"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-lime-400 shadow-[0_0_30px_rgba(163,230,53,0.4)] relative z-10"
                  style={{ objectPosition: 'center 30%' }}
                />
                <motion.div
                  className="absolute inset-[-10px] rounded-full border-2 border-orange-500/50 border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Titres & Textes */}
          <AnimatedSection variant="slideUp" delay={0.4}>
            <div className="mb-10 text-center px-2">
              <div className="flex justify-center mb-6">
                <span className="px-4 py-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
                  Coach • Auteur • Entrepreneure
                </span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-orange-400 text-transparent bg-clip-text">
                  Beverly Malu Beya
                </span>
              </h1>
              
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-xl md:text-3xl text-white font-light italic leading-tight">
                  "La voix de la <span className="text-lime-400 font-semibold not-italic">résilience</span> et le guide d'une génération consciente."
                </p>
                <div className="flex justify-center items-center gap-4 my-6">
                  <div className="h-[1px] w-12 bg-orange-500/50"></div>
                  <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                  <div className="h-[1px] w-12 bg-orange-500/50"></div>
                </div>
                <p className="text-base md:text-lg text-gray-300 uppercase tracking-widest font-medium">
                  Expertise : <span className="text-white">Réalités du terrain africain</span>
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Boutons Hero */}
          <AnimatedSection variant="slideUp" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-full font-bold shadow-lg transition-all transform hover:scale-105"
              >
                Me contacter
              </button>
              <button
                onClick={() => navigate('/projet-vite')}
                className="px-8 py-4 bg-white text-green-800 border-2 border-green-700 rounded-full font-bold shadow-lg hover:bg-green-50 transition-all transform hover:scale-105"
              >
                Découvrir le Projet VITE
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ================= SECTION CHIFFRES CLÉS ================= */}
      <section className="py-20 bg-green-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="flex flex-col items-center">
              <FaChartLine className="text-lime-400 mb-4" size={32} />
              <span className="text-5xl font-black mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest text-lime-400/70 font-bold">Ans d'impact</span>
            </div>
            <div className="flex flex-col items-center">
              <FaHandsHelping className="text-lime-400 mb-4" size={32} />
              <span className="text-5xl font-black mb-2">500+</span>
              <span className="text-xs uppercase tracking-widest text-lime-400/70 font-bold">Vies Impactées</span>
            </div>
            <div className="flex flex-col items-center">
              <FaBookOpen className="text-lime-400 mb-4" size={32} />
              <span className="text-5xl font-black mb-2">03</span>
              <span className="text-xs uppercase tracking-widest text-lime-400/70 font-bold">Livres Publiés</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-lime-400 mb-4" size={32} />
              <span className="text-5xl font-black mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-lime-400/70 font-bold">Engagement VITE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION PILIERS / SERVICES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection variant="slideUp">
            <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-4">Mon Champ d'Action</h2>
            <p className="text-gray-500 mb-16 max-w-2xl mx-auto">Transformer l'Afrique par l'éveil de la conscience et l'excellence entrepreneuriale.</p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Coaching */}
            <div className="group p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl hover:shadow-lime-500/10 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-lime-100 group-hover:text-lime-200"><FaHandsHelping size={120} /></div>
              <div className="relative z-10 text-left">
                <div className="w-14 h-14 bg-lime-400 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-lime-400/30">
                  <FaHandsHelping size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Éveil & Coaching</h3>
                <p className="text-gray-600 leading-relaxed">Libérer les consciences et bâtir un leadership civique fort pour la nouvelle génération.</p>
              </div>
            </div>

            {/* Auteur */}
            <div className="group p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-orange-100 group-hover:text-orange-200"><FaBookOpen size={120} /></div>
              <div className="relative z-10 text-left">
                <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                  <FaBookOpen size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Transmission</h3>
                <p className="text-gray-600 leading-relaxed">Capturer l'essence de la résilience dans des ouvrages dédiés au contexte africain.</p>
              </div>
            </div>

            {/* Projet VITE */}
            <div className="group p-10 rounded-[40px] bg-white border border-gray-100 shadow-2xl hover:shadow-green-500/10 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-green-100 group-hover:text-green-200"><FaRocket size={120} /></div>
              <div className="relative z-10 text-left">
                <div className="w-14 h-14 bg-green-700 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-700/30">
                  <FaRocket size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-900">Projet VITE</h3>
                <p className="text-gray-600 leading-relaxed">L'entrepreneuriat au service du changement immédiat et durable sur le terrain.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION CITATION ================= */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FaQuoteLeft className="text-lime-400/30 mx-auto mb-8" size={50} />
          <h2 className="text-2xl md:text-4xl text-green-900 font-light italic leading-relaxed mb-8">
            L’éveil de la conscience est le premier pas vers la libération de notre potentiel africain. Ne fuyons pas nos réalités, transformons-les.
          </h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-green-700 font-bold tracking-widest uppercase">Beverly Malu Beya</p>
        </div>
      </section>
    </div>
  );
}
