import React from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "À qui s'adresse votre accompagnement de coaching ?",
    answer: "Mon coaching s'adresse principalement aux jeunes congolais et africains désireux de prendre conscience de leur potentiel, de déconstruire les complexes et de devenir des acteurs du changement dans leur société.",
  },
  {
    question: "Où peut-on se procurer vos ouvrages ?",
    answer: "Mes livres sont disponibles dans les principales librairies de Kinshasa, ainsi qu'en commande directe via ce site web. Nous proposons également des versions numériques pour la diaspora.",
  },
  {
    question: "Qu'est-ce que le projet VITE concrètement ?",
    answer: "Le projet VITE est une initiative entrepreneuriale visant à transformer la théorie en action immédiate. Il propose des solutions concrètes pour l'autonomisation et la résilience sur le terrain africain.",
  },
  {
    question: "Proposez-vous des conférences ou des ateliers de groupe ?",
    answer: "Absolument. J'interviens dans les universités, les institutions et les entreprises pour des conférences inspirantes et des ateliers pratiques sur le leadership et la prise de conscience.",
  },
  {
    question: "Comment prendre rendez-vous pour une séance de coaching ?",
    answer: "Il vous suffit de cliquer sur le bouton 'Me contacter' ou d'utiliser le formulaire en bas de page. Mon équipe vous répondra sous 24h pour fixer un premier échange.",
  },
];

function FAQSection() {
  return (
    <section className="py-24 px-4 bg-gray-50" id="faq">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de la section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-lime-100 text-lime-600 rounded-full mb-4">
            <FaQuestionCircle size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-4 uppercase tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Vous avez des questions sur mon approche ou mes projets ? Voici les réponses aux interrogations les plus fréquentes.
          </p>
        </div>

        {/* Liste des FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details 
              key={idx} 
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <summary className="flex items-center justify-between font-bold text-green-900 cursor-pointer p-6 list-none">
                <span className="text-lg md:text-xl pr-4">{faq.question}</span>
                <div className="text-orange-500 transition-transform duration-300 group-open:rotate-180">
                  <FaChevronDown />
                </div>
              </summary>
              <div className="px-6 pb-6 text-gray-600 text-lg leading-relaxed border-t border-gray-50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>

        {/* CTA d'aide supplémentaire */}
        <div className="mt-12 text-center p-8 bg-green-900 rounded-[40px] text-white shadow-2xl">
          <h3 className="text-xl font-bold mb-2">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className="text-green-200 mb-6 italic">Je suis à votre écoute pour toute demande particulière.</p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-full font-bold transition-colors"
          >
            Posez votre question
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
