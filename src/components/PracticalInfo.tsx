
import React from 'react';

const PracticalInfo = () => {
  return (
    <section id="infos" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Infos pratiques
          </h2>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Informations */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-sage-50 to-peach-50 rounded-2xl p-8">
              <h3 className="text-2xl font-cursive font-bold text-sage-800 mb-6 flex items-center">
                <span className="mr-3">📍</span>
                Accès & Localisation
              </h3>
              <div className="space-y-4 text-sage-600">
                <p>
                  <strong>Adresse :</strong><br />
                  123 Rue de la République<br />
                  75000 Votre Ville
                </p>
                <p>
                  <strong>Métro :</strong> Ligne 1, 4, 7 - Arrêt République<br />
                  <strong>Bus :</strong> Lignes 20, 29, 65, 75
                </p>
                <p>
                  <strong>Parking :</strong><br />
                  Parking République (2 min à pied)<br />
                  Places de stationnement disponibles rue adjacente
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-peach-50 to-sage-50 rounded-2xl p-8">
              <h3 className="text-2xl font-cursive font-bold text-sage-800 mb-6 flex items-center">
                <span className="mr-3">🕒</span>
                Horaires d'ouverture
              </h3>
              <div className="space-y-3 text-sage-600">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="font-medium">12h00 - 14h30 • 19h00 - 22h30</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="font-medium">12h00 - 15h00 • 19h00 - 23h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span className="font-medium">12h00 - 15h00</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-sage-50 to-peach-50 rounded-2xl p-8">
              <h3 className="text-2xl font-cursive font-bold text-sage-800 mb-6 flex items-center">
                <span className="mr-3">📞</span>
                Contact & Réservation
              </h3>
              <div className="space-y-3 text-sage-600">
                <p>
                  <strong>Téléphone :</strong> 01 23 45 67 89<br />
                  <strong>Email :</strong> contact@restaurant-vegetal.fr
                </p>
                <p className="text-sm italic">
                  Réservation recommandée, surtout le week-end
                </p>
              </div>
            </div>
          </div>

          {/* Carte */}
          <div className="bg-sage-100 rounded-2xl overflow-hidden shadow-lg">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991441793428!2d2.3628870773267845!3d48.863854871340745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sPlace%20de%20la%20R%C3%A9publique%2C%2075003%20Paris!5e0!3m2!1sfr!2sfr!4v1703123456789!5m2!1sfr!2sfr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;
