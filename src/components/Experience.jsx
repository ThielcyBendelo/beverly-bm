import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaArrowRight, 
  FaUserCircle,
  FaRegComment,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaShareAlt,
  FaFacebook,
  FaWhatsapp 
} from 'react-icons/fa';

const articles = [
  {
    id: 1,
    title: "L'éveil de la conscience : Premier pas vers la liberté",
    excerpt: "Pourquoi la jeunesse africaine doit-elle impérativement déconstruire les complexes hérités du passé pour bâtir demain ?",
    date: "12 Avril 2024",
    category: "Coaching",
    author: "Verro Malu Beya",
    image: "https://unsplash.com",
  },
  {
    id: 2,
    title: "Le Projet VITE s'installe à Goma",
    excerpt: "Retour sur le lancement de notre dernière initiative entrepreneuriale dans l'Est de la RDC. Une jeunesse prête à agir.",
    date: "05 Mars 2024",
    category: "Actualités",
    author: "L'Équipe VITE",
    image: "https://unsplash.com",
  },
  {
    id: 3,
    title: "Comment la résilience transforme nos échecs",
    excerpt: "Dans mon dernier ouvrage, j'explore comment l'échec n'est pas une fin, mais une matière première pour le succès.",
    date: "20 Février 2024",
    category: "Réflexion",
    author: "Verro Malu Beya",
    image: "https://unsplash.com",
  }
];

const socialPosts = [
  { id: 1, icon: <FaInstagram />, text: "Séance de coaching intense aujourd'hui à Kinshasa...", link: "#" },
  { id: 2, icon: <FaTwitter />, text: "La résilience n'est pas une option, c'est une nécessité. #Afrique #VITE", link: "#" },
];

export default function Blog() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="blog"
      className="py-24 px-6 bg-white dark:bg-green-950 transition-colors duration-500"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center mb-20">
          <motion.h2 className="text-4xl md:text-6xl font-black text-green-900 dark:text-lime-400 uppercase tracking-tighter" variants={itemVariants}>
            Blog & Actualités
          </motion.h2>
          <motion.div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mt-4" variants={itemVariants} />
          <motion.p className="text-xl text-gray-500 dark:text-green-100/60 mt-6 max-w-2xl mx-auto italic" variants={itemVariants}>
            Partager pour inspirer, écrire pour transformer.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          
          {/* GRILLE D'ARTICLES */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-10">
            {articles.map((article) => (
              <motion.article key={article.id} variants={itemVariants} className="group flex flex-col bg-white dark:bg-green-900 shadow-xl rounded-[40px] overflow-hidden border border-gray-100 dark:border-green-800 transition-all hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-bold uppercase">
                    <div className="flex items-center gap-1"><FaCalendarAlt className="text-lime-500" /> {article.date}</div>
                    <div className="flex items-center gap-1"><FaUserCircle className="text-lime-500" /> {article.author}</div>
                  </div>
                  <h3 className="text-2xl font-black text-green-900 dark:text-white mb-4 leading-tight group-hover:text-orange-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 dark:text-green-100/70 mb-8 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  
                  <div className="mt-auto pt-6 border-t border-gray-50 dark:border-green-800 flex justify-between items-center">
                    {/* LIEN LIRE */}
                    <button className="group/read relative flex items-center gap-3 text-green-900 dark:text-lime-400 font-black text-[10px] uppercase tracking-[0.2em] transition-all">
                      <span className="relative">
                        Lire l'article
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover/read:w-full"></span>
                      </span>
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-50 dark:bg-green-800/50 group-hover/read:bg-orange-500 group-hover/read:text-white transition-all duration-300">
                        <FaArrowRight className="group-hover/read:translate-x-1 transition-transform" />
                      </div>
                    </button>

                    {/* MENU PARTAGER CORRIGÉ */}
                    <div className="relative group/share">
                      <button className="p-3 rounded-full bg-gray-50 dark:bg-green-800/30 text-gray-400 hover:text-white hover:bg-orange-500 transition-all duration-300 shadow-sm">
                        <FaShareAlt size={16} />
                      </button>
                      <div className="absolute bottom-full right-0 mb-4 flex flex-col gap-2 opacity-0 translate-y-4 pointer-events-none group-hover/share:opacity-100 group-hover/share:translate-y-0 group-hover/share:pointer-events-auto transition-all duration-300">
                        <a href={`https://wa.me cet article : ${article.title}`} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#25d366] text-white flex items-center justify-center hover:scale-110 transition-transform">
                          <FaWhatsapp size={12} />
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center hover:scale-110 transition-transform">
                          <FaFacebook size={12} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform">
                          <FaLinkedinIn size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* SIDEBAR SOCIALE */}
          <aside className="lg:col-span-1 space-y-8">
            <motion.div variants={itemVariants} className="p-8 bg-green-50 dark:bg-green-900/40 rounded-[40px] border border-green-100 dark:border-green-800">
              <h4 className="text-xl font-black text-green-900 dark:text-white mb-6 flex items-center gap-2">
                <FaInstagram className="text-orange-500" /> Flux Social
              </h4>
              <div className="space-y-4">
                {socialPosts.map(post => (
                  <a key={post.id} href={post.link} className="block p-4 bg-white dark:bg-green-800 rounded-2xl shadow-sm border border-transparent hover:border-orange-500 transition-all">
                    <div className="flex items-center gap-3 text-orange-500 mb-2"><span className="text-[10px] font-black uppercase text-gray-400">@VerroMaluBeya</span></div>
                    <p className="text-sm text-gray-600 dark:text-green-50 italic">"{post.text}"</p>
                  </a>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
