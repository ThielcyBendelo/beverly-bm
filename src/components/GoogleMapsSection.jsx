import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function GoogleMapsSection() {
  return (
    <section className="py-20 px-4 bg-white" id="localisation">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-green-900 mb-4">
            Siège Professionnel
          </h2>
          <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez-moi à mon cabinet pour vos séances de coaching privées ou pour discuter de vos projets de transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* Bloc Coordonnées - Style Carte de visite */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="p-8 rounded-[40px] bg-green-50 border border-green-100 shadow-sm">
              <h3 className="text-2xl font-bold text-green-900 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
                Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-green-700 rounded-xl shadow-sm">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Adresse</p>
                    <p className="text-gray-600">Kinshasa, RDC</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-orange-500 rounded-xl shadow-sm">
                    <FaPhoneAlt size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Téléphone</p>
                    <p className="text-gray-600">+243 977 644 971</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-lime-600 rounded-xl shadow-sm">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Email</p>
                    <p className="text-gray-600">beverlymalu04@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white text-gray-500 rounded-xl shadow-sm">
                    <FaClock size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-green-900">Heures de réception</p>
                    <p className="text-gray-600">Lundi - Vendredi : 09h00 - 17h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bouton Itinéraire Rapide */}
            <a 
              href="https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block w-full text-center py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-orange-500 transition-colors shadow-lg"
            >
              Obtenir l'itinéraire sur Google Maps
            </a>
          </div>

          {/* Bloc Carte Google Maps avec cadre stylisé */}
          <div className="relative order-1 md:order-2">
            <div className="absolute -inset-4 bg-lime-100 rounded-[50px] -rotate-2 -z-10"></div>
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white h-[450px]">
              <iframe
                title="Google Maps localisation"
                src="https://www.google.com/maps?q=Avenue+Kimwenza+A%2FA25,+Kinshasa,+DR+Congo&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default GoogleMapsSection;
