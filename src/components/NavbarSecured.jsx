import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Services
import notificationService from '../services/notificationService';
import audioService from '../services/audioService';
import analyticsService from '../services/analyticsService';
import authService from '../services/authService';

// Icônes
import { GiEagleEmblem, GiLoveInjection } from 'react-icons/gi';
import { 
  FaTachometerAlt, FaHome, FaUser, FaBook, 
  FaBars, FaTimes, FaMoon, FaSun, FaVolumeUp, FaVolumeMute,
  FaEnvelope // <--- Ajoutez ceci
} from 'react-icons/fa';
;

export default function NavbarSecured() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(audioService.isEnabled());
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [theme, setTheme] = useState(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch { return 'light'; }
  });

  useEffect(() => {
    authService.initialize().then(() => {
      setIsAuthenticated(authService.isLoggedIn());
      setCurrentUser(authService.getCurrentUser());
    });

    const interval = setInterval(() => {
      setIsAuthenticated(authService.isLoggedIn());
      setCurrentUser(authService.getCurrentUser());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    audioService.playClick();
    notificationService.info(`Mode ${newTheme === 'dark' ? 'sombre' : 'clair'} activé`, { autoClose: 2000 });
  };

  const toggleAudio = () => {
    const newState = audioService.toggle();
    setAudioEnabled(newState);
    newState ? notificationService.success('🔊 Sons activés') : notificationService.info('🔇 Sons désactivés');
  };

  const handleNavClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);
    audioService.playNavigate();
    navigate(href);
  };

  const navItems = [
    { href: '/', label: 'Accueil', icon: <FaHome /> },
    { href: '/about', label: 'Ma Vision', icon: <FaUser /> },
    { href: '/services', label: 'Coaching', icon: <GiLoveInjection /> },
    // { href: '/skills', label: 'Livres', icon: <FaBook /> },
    // { href: '/projects', label: 'Projets', icon: <GiEagleEmblem /> },
    // { href: '/experience', label: 'Blog', icon: <FaEnvelope size={14}/> },
    // { href: '/work', label: 'Associés', icon: <FaUser /> },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 bg-white/80 dark:bg-green-950/90 backdrop-blur-md border-b border-gray-100 dark:border-green-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* LOGO DYNAMIQUE */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex flex-col cursor-pointer"
              onClick={() => navigate('/')}
            >
              <span className="text-2xl font-black bg-gradient-to-r from-green-800 to-lime-500 dark:from-lime-400 dark:to-orange-400 text-transparent bg-clip-text font-serif">
                Beverly BM
              </span>
              <span className="text-[9px] uppercase tracking-[3px] text-gray-500 dark:text-lime-500/70 font-bold">
                Éveil • Impact • Action
              </span>
            </motion.div>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="px-4 py-2 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-lime-400 transition-all rounded-full hover:bg-gray-50 dark:hover:bg-green-900/50"
                >
                  <span className="opacity-50 group-hover:opacity-100">{item.icon}</span>
                  {item.label}
                </button>
              ))}

              <div className="h-6 w-[1px] bg-gray-200 dark:bg-green-800 mx-4" />

              {/* OUTILS : THEME & AUDIO */}
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleAudio}
                  className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-green-900 transition-colors"
                >
                  {audioEnabled ? <FaVolumeUp /> : <FaVolumeMute />}
                </button>
                
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-100 dark:bg-green-900 text-orange-500 dark:text-lime-400 hover:rotate-12 transition-all"
                >
                  {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
                </button>

                {isAuthenticated ? (
                  <button 
                    onClick={() => navigate('/dashboard')}
                    className="ml-2 w-10 h-10 rounded-full bg-green-800 text-white flex items-center justify-center shadow-lg hover:bg-orange-500 transition-all"
                  >
                    <FaTachometerAlt />
                  </button>
                ) : (
                  <button 
                    onClick={() => navigate('/login')}
                    className="ml-2 px-6 py-2 bg-green-900 dark:bg-lime-500 text-white dark:text-green-950 rounded-full text-sm font-bold shadow-md hover:shadow-lime-500/20 transition-all"
                  >
                    Connexion
                  </button>
                )}
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={toggleTheme} className="text-orange-500 dark:text-lime-400">
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>
              <button onClick={() => setIsOpen(!isOpen)} className="text-green-900 dark:text-white text-2xl">
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAV DROPDOWN */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white dark:bg-green-950 border-b border-gray-100 dark:border-green-900"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="w-full flex items-center gap-4 px-4 py-4 text-gray-700 dark:text-gray-200 border-b border-gray-50 dark:border-green-900/50"
                  >
                    <span className="text-orange-500">{item.icon}</span>
                    <span className="font-bold">{item.label}</span>
                  </button>
                ))}
                <button 
                  onClick={() => { setIsOpen(false); navigate('/login'); }}
                  className="w-full mt-4 py-4 bg-green-900 text-white rounded-2xl font-bold"
                >
                  Espace Membre
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
