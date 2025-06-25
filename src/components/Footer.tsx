
import React, { useState } from 'react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    alert('Message envoyé ! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <footer className="bg-gradient-to-b from-sage-800 to-sage-900 text-white">
      {/* Section contact */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div>
            <h3 className="text-2xl font-cursive font-bold mb-6 text-sage-100">
              Nous contacter
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-sage-700/50 border border-sage-600 rounded-lg px-4 py-3 text-white placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-sage-700/50 border border-sage-600 rounded-lg px-4 py-3 text-white placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-sage-700/50 border border-sage-600 rounded-lg px-4 py-3 text-white placeholder-sage-300 focus:outline-none focus:ring-2 focus:ring-peach-400 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-peach-500 hover:bg-peach-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-cursive font-bold mb-6 text-sage-100">
                Coordonnées
              </h3>
              <div className="space-y-4 text-sage-200">
                <p className="flex items-start">
                  <span className="mr-3 mt-1">📍</span>
                  <span>123 Rue de la République<br />75000 Votre Ville</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">📞</span>
                  <span>01 23 45 67 89</span>
                </p>
                <p className="flex items-center">
                  <span className="mr-3">✉️</span>
                  <span>contact@restaurant-vegetal.fr</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-cursive font-bold mb-4 text-sage-100">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-sage-700 hover:bg-peach-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  📘
                </a>
                <a href="#" className="w-10 h-10 bg-sage-700 hover:bg-peach-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  📷
                </a>
                <a href="#" className="w-10 h-10 bg-sage-700 hover:bg-peach-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                  🐦
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <div className="border-t border-sage-700 py-8">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sage-300 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Restaurant Végétalien - Tous droits réservés</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="hover:text-peach-400 transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="hover:text-peach-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="https://johannr.fr" className="hover:text-peach-400 transition-colors duration-300 font-medium">
                Site propulsé par johannr.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
