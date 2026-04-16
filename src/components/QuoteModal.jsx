import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import emailService from '../services/emailService';
import { 
  FaUser, FaEnvelope, FaPhone, FaBook, FaCalendarAlt, 
  FaPaperPlane, FaTimes, FaQuoteLeft, FaMoneyBillWave,
  FaBuilding, FaBriefcase
} from 'react-icons/fa';

const SERVICES = [
  { value: 'Coaching Individuel', label: 'Coaching Individuel - Éveil' },
  { value: 'Conférences & Ateliers', label: 'Conférences & Ateliers' },
  { value: 'Projet VITE', label: 'Accompagnement Projet VITE' },
  { value: 'Livre: Le Réveil de la Conscience', label: 'Livre: Le Réveil de la Conscience' },
  { value: 'Livre: La Voix de la Résilience', label: 'Livre: La Voix de la Résilience' },
];

const TIMELINES = [
  { value: 'immediat', label: "Immédiat / ASAP" },
  { value: '1-2-semaines', label: '1-2 semaines' },
  { value: 'flexible', label: 'Flexible' },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '', // Réintégré
  sector: '',  // Réintégré
  projectType: '',
  budget: '',  // Réintégré
  timeline: '',
  message: '',
};

const QuoteModal = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState({ ...initialState, projectType: defaultService || '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormData({ ...initialState, projectType: defaultService || '' });
      setResult(null);
    }
  }, [isOpen, defaultService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nom requis';
    if (!formData.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = 'Email valide requis';
    if (!formData.projectType) newErrors.projectType = 'Sélection requise';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    
    setLoading(true);
    try {
      const res = await emailService.sendQuoteRequest(formData, []);
      setResult(res);
      if (res.success) {
        setTimeout(() => onClose(), 2500);
      }
    } catch {
      setResult({ success: false, message: "Erreur lors de l'envoi." });
    }
    setLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-center justify-center bg-green-950/90 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="bg-white dark:bg-green-900 rounded-[40px] shadow-2xl p-6 md:p-10 w-full max-w-2xl relative overflow-y-auto max-h-[90vh] border border-green-100 dark:border-green-800"
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
          >
            <button className="absolute top-6 right-6 text-gray-400 hover:text-orange-500 transition-all" onClick={onClose}>
              <FaTimes size={24} />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex p-3 bg-lime-100 dark:bg-lime-500/20 rounded-2xl text-green-700 dark:text-lime-400 mb-4">
                <FaQuoteLeft size={20} />
              </div>
              <h2 className="text-3xl font-black text-green-900 dark:text-white uppercase tracking-tighter">Votre Demande</h2>
              <p className="text-gray-500 dark:text-green-100/60 mt-1">Complétez les détails pour un accompagnement sur mesure.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* LIGNE 1 : NOM & EMAIL */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <FaUser className="absolute left-4 top-4 text-orange-500" />
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Nom complet *" />
                </div>
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-4 text-orange-500" />
                  <input type="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Email *" />
                </div>
              </div>

              {/* LIGNE 2 : TELEPHONE & SOCIETE */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <FaPhone className="absolute left-4 top-4 text-orange-500" />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Téléphone (WhatsApp)" />
                </div>
                <div className="relative">
                  <FaBuilding className="absolute left-4 top-4 text-orange-500" />
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Organisation / Société" />
                </div>
              </div>

              {/* LIGNE 3 : SERVICE & BUDGET/PRIX */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <FaBook className="absolute left-4 top-4 text-orange-500" />
                  <select name="projectType" value={formData.projectType} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none appearance-none focus:ring-2 focus:ring-orange-500 dark:text-white">
                    <option value="">Sélectionnez *</option>
                    {SERVICES.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <FaMoneyBillWave className="absolute left-4 top-4 text-orange-500" />
                  <input type="text" name="budget" value={formData.budget} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Budget ou Prix estimé" />
                </div>
              </div>

              {/* LIGNE 4 : DELAI & SECTEUR */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <FaCalendarAlt className="absolute left-4 top-4 text-orange-500" />
                  <select name="timeline" value={formData.timeline} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none appearance-none focus:ring-2 focus:ring-orange-500 dark:text-white">
                    <option value="">Délai souhaité</option>
                    {TIMELINES.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                  </select>
                </div>
                <div className="relative">
                  <FaBriefcase className="absolute left-4 top-4 text-orange-500" />
                  <input type="text" name="sector" value={formData.sector} onChange={handleChange}
                    className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                    placeholder="Votre Secteur d'activité" />
                </div>
              </div>

              {/* MESSAGE */}
              <textarea name="message" value={formData.message} onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-green-800/50 border border-gray-100 dark:border-green-700 rounded-[30px] p-5 h-28 outline-none focus:ring-2 focus:ring-orange-500 dark:text-white transition-all"
                placeholder="Dites-m'en plus sur vos attentes ou précisez l'adresse de livraison..." />

              {result && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className={`p-4 rounded-2xl text-center font-bold ${result.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {result.message}
                </motion.div>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-5 bg-green-900 dark:bg-lime-500 text-white dark:text-green-950 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-orange-500 hover:shadow-orange-500/20 transition-all shadow-xl disabled:opacity-50"
              >
                {loading ? "Envoi en cours..." : <><FaPaperPlane /> Envoyer ma demande officielle</>}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default QuoteModal;
