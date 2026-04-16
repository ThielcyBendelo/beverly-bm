import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar, FaPen, FaBuilding } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const initialTestimonials = [
  {
    name: 'Jean-Luc M.',
    role: 'Fondateur',
    company: 'Startup Innov RDC',
    logo: 'https://flaticon.com', // Remplacez par vos vrais logos
    project: 'Accompagnement VITE',
    date: '2024',
    rating: 5,
    text: "Grâce au coaching de Verro, j'ai enfin transformé mon idée en un projet concret. Sa vision du terrain congolais est unique.",
  },
  {
    name: 'Sarah K.',
    role: 'Responsable RH',
    company: 'Boutique Éveil',
    logo: 'https://flaticon.com',
    project: 'Livre : Réveil de la Conscience',
    date: '2024',
    rating: 5,
    text: "Ce livre a été un véritable déclic pour mon équipe. Nous nous sentons maintenant capables de prendre notre place dans la société.",
  }
];

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', project: '', text: '', rating: 5 });

  const goToPrevious = () => setCurrentIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  const goToNext = () => setCurrentIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTestimonial = { 
      ...form, 
      role: 'Partenaire',
      logo: null, // Par défaut pas de logo pour les nouveaux avis
      date: new Date().getFullYear().toString() 
    };
    setTestimonials([...testimonials, newTestimonial]);
    setShowModal(false);
    setForm({ name: '', company: '', project: '', text: '', rating: 5 });
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-green-950 transition-colors duration-500 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* En-tête */}
        <div className="text-center mb-20">
          <motion.h2 className="text-4xl md:text-6xl font-black text-green-900 dark:text-lime-400 uppercase tracking-tighter">
            Impact & <span className="text-orange-500">Validation</span>
          </motion.h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Slider de Témoignages */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-green-50/50 dark:bg-green-900/30 p-10 md:p-16 rounded-[60px] border border-green-100 dark:border-green-800 relative"
            >
              <FaQuoteLeft className="text-orange-500/10 text-8xl absolute top-10 left-10" />
              
              {/* Logo Entreprise (Flottant en haut à droite) */}
              {testimonials[currentIndex].logo && (
                <div className="absolute top-10 right-10 w-16 h-16 grayscale opacity-50 dark:invert">
                  <img src={testimonials[currentIndex].logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              )}

              <div className="flex justify-center gap-1 mb-10">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-xl" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl text-gray-800 dark:text-green-50 leading-relaxed italic mb-12 font-medium text-center">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex flex-col items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center text-xl font-black shadow-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="text-xl font-black text-green-900 dark:text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-orange-600 dark:text-lime-400 font-bold text-xs uppercase tracking-widest">
                      {testimonials[currentIndex].company || 'Indépendant'}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Boutons de navigation stylisés */}
          <div className="flex justify-center gap-4 mt-12">
            <button onClick={goToPrevious} className="w-12 h-12 rounded-full border-2 border-green-900 dark:border-lime-500 text-green-900 dark:text-lime-500 flex items-center justify-center hover:bg-green-900 hover:text-white dark:hover:bg-lime-500 dark:hover:text-green-950 transition-all">
              <FaChevronLeft />
            </button>
            <button onClick={goToNext} className="w-12 h-12 rounded-full border-2 border-green-900 dark:border-lime-500 text-green-900 dark:text-lime-500 flex items-center justify-center hover:bg-green-900 hover:text-white dark:hover:bg-lime-500 dark:hover:text-green-950 transition-all">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Bouton d'ajout en bas */}
        <div className="mt-20 text-center">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-3 px-10 py-4 bg-orange-600 text-white font-black rounded-2xl shadow-2xl hover:bg-green-900 transition-all uppercase text-sm tracking-widest"
            >
              <FaPen /> Partager mon expérience
            </button>
        </div>
      </div>

      {/* Modal avec champ Entreprise ajouté */}
      {showModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-green-950/90 backdrop-blur-md p-4">
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white dark:bg-green-900 rounded-[40px] p-8 md:p-12 w-full max-w-lg relative border border-green-100 dark:border-green-800">
            <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 font-bold text-2xl">×</button>
            <h3 className="text-3xl font-black text-green-900 dark:text-white mb-8 text-center tracking-tighter">VOTRE TÉMOIGNAGE</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="Nom *" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-green-800 border-none outline-none focus:ring-2 focus:ring-orange-500 dark:text-white" onChange={(e) => setForm({...form, name: e.target.value})} />
                 <input type="text" placeholder="Entreprise" className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-green-800 border-none outline-none focus:ring-2 focus:ring-orange-500 dark:text-white" onChange={(e) => setForm({...form, company: e.target.value})} />
              </div>
              <input type="text" placeholder="Projet concerné (Ex: Coaching VITE)" required className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-green-800 border-none outline-none focus:ring-2 focus:ring-orange-500 dark:text-white" onChange={(e) => setForm({...form, project: e.target.value})} />
              <textarea placeholder="Comment mon accompagnement a changé votre vision ?" required rows={4} className="w-full px-6 py-4 rounded-3xl bg-gray-50 dark:bg-green-800 border-none outline-none focus:ring-2 focus:ring-orange-500 dark:text-white" onChange={(e) => setForm({...form, text: e.target.value})} />
              <button type="submit" className="w-full py-5 bg-orange-500 text-white font-black rounded-2xl shadow-xl hover:bg-green-950 transition-all uppercase tracking-widest">Publier mon avis</button>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
