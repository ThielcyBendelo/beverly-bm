import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from 'react-icons/fa';
import { contact } from '../assets/assets.js';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    Email: FaEnvelope,
    LinkedIn: FaLinkedin,
    Instagram: FaInstagram,
    Facebook: FaFacebook,
    WhatsApp: FaWhatsapp,
  };

  return (
    <footer className="bg-gray-50 dark:bg-green-950 text-gray-600 dark:text-gray-300 py-16 mt-auto border-t border-gray-200 dark:border-lime-900/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Bloc 1: Identité & Vision */}
          <div className="col-span-1">
            <h3 className="text-2xl font-black mb-4">
              <span className="bg-gradient-to-r from-green-800 to-green-600 dark:from-lime-400 dark:to-orange-400 text-transparent bg-clip-text uppercase tracking-tighter">
                Beverly BM
              </span>
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
              "Bâtir une génération consciente pour une Afrique résiliente et prospère."
            </p>
            <div className="mt-6 flex gap-3">
              <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-2 bg-lime-500 rounded-full"></div>
            </div>
          </div>

          {/* Bloc 2: Navigation Stratégique */}
          <div className="text-left">
            <h4 className="text-green-900 dark:text-white font-black mb-6 uppercase text-xs tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><Link to="/" className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Ma Vision</Link></li>
              <li><Link to="/coaching" className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Coaching & Éveil</Link></li>
              <li><Link to="/livres" className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Mes Ouvrages</Link></li>
              <li><Link to="/projet-vite" className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Le Projet VITE</Link></li>
            </ul>
          </div>

          {/* Bloc 3: Contact Direct */}
          <div className="text-left">
            <h4 className="text-green-900 dark:text-white font-black mb-6 uppercase text-xs tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-center gap-3">
                <div className="text-orange-500"><FaEnvelope /></div>
                <span className="text-gray-600 dark:text-gray-300 break-all">beverlymalu04@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-lime-600"><FaWhatsapp /></div>
                <span className="text-gray-600 dark:text-gray-300">Kinshasa, RDC</span>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="inline-block px-4 py-2 bg-green-900 dark:bg-orange-500 text-white rounded-xl font-bold text-xs hover:scale-105 transition-transform shadow-md">
                  Prendre rendez-vous →
                </Link>
              </li>
            </ul>
          </div>

          {/* Bloc 4: Communauté & Réseaux */}
          <div className="text-left md:text-right">
            <h4 className="text-green-900 dark:text-white font-black mb-6 uppercase text-xs tracking-[0.2em]">Suivre le mouvement</h4>
            <div className="flex justify-start md:justify-end gap-3">
              {contact.map((item) => {
                const Icon = socialIcons[item.label];
                if (!Icon) return null;
                return (
                  <a
                    key={item.label}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white dark:bg-green-900 border border-gray-200 dark:border-green-800 flex items-center justify-center text-green-900 dark:text-white shadow-sm hover:bg-orange-500 hover:text-white dark:hover:bg-lime-500 dark:hover:text-green-950 transition-all duration-300"
                    title={item.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
            <p className="mt-6 text-[10px] text-gray-400 dark:text-gray-500 uppercase font-bold tracking-widest">
              Plus de 500 jeunes déjà impactés.
            </p>
          </div>
        </div>

        {/* Barre de Copyright Finale */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 dark:text-gray-500 font-bold tracking-[0.2em] uppercase text-center md:text-left leading-relaxed">
            © {currentYear} BEVERLY BM <span className="mx-2 hidden md:inline">|</span> <br className="md:hidden" /> Coach • Auteur • Entrepreneure
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-black text-gray-400 dark:text-gray-600">
            <button className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Mentions</button>
            <button className="hover:text-orange-500 dark:hover:text-lime-400 transition-colors">Confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
