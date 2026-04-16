import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { logoImages } from '../assets/assets.js';
import { GiEagleEmblem } from 'react-icons/gi';

export default function ProfessionalSplashScreen({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const loadingSteps = useMemo(
    () => [
      { label: 'Éveil des consciences...', duration: 800 },
      { label: 'Préparation de votre parcours...', duration: 1000 },
      { label: 'Connexion aux racines...', duration: 600 },
      { label: 'VITE : L’action approche...', duration: 700 },
      { label: 'Bienvenue dans votre univers...', duration: 500 },
    ],
    []
  );

  useEffect(() => {
    let progressInterval;
    let stepTimeout;

    if (currentStep < loadingSteps.length) {
      const step = loadingSteps[currentStep];
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          const stepTarget = (currentStep + 1) * (100 / loadingSteps.length);
          const nextVal = prev + 1;
          return nextVal > stepTarget ? stepTarget : nextVal;
        });
      }, step.duration / 20);

      stepTimeout = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, step.duration);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => onComplete && onComplete(), 800);
      }, 500);
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [currentStep, onComplete, loadingSteps]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-green-950 overflow-hidden"
        >
          {/* Background décoratif */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <GiEagleEmblem className="absolute -bottom-20 -right-20 text-[600px] text-white rotate-[-15deg]" />
          </div>

          <div className="relative z-10 w-full max-w-md px-10 text-center">
            {/* Logo Animé */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="relative inline-block">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border border-lime-400/30 rounded-full"
                />
                <img 
                  src={logoImages} 
                  alt="Logo" 
                  className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-full border-4 border-orange-500 shadow-2xl relative z-10"
                />
              </div>
              <h2 className="text-white font-black text-2xl mt-6 uppercase tracking-[0.3em]">
                Beverly BM
              </h2>
              <div className="h-1 w-12 bg-orange-500 mx-auto mt-2 rounded-full" />
            </motion.div>

            {/* Barre de progression */}
            <div className="space-y-4">
              <div className="h-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStep}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    className="text-lime-400 text-xs font-bold uppercase tracking-widest"
                  >
                    {loadingSteps[currentStep]?.label}
                  </motion.p>
                </AnimatePresence>
              </div>

              <div className="relative h-1 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 to-lime-400"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <span className="text-orange-400 text-sm font-black">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Particules flottantes */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 5 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
