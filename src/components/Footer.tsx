
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

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
    <footer className="bg-gradient-to-b from-sage-50 to-sage-100 text-sage-800">
      {/* Section contact */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div>
            <h3 className="text-2xl font-cursive font-bold mb-6 text-sage-800">
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
                  className="bg-white border border-sage-200 rounded-lg px-4 py-3 text-sage-800 placeholder-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white border border-sage-200 rounded-lg px-4 py-3 text-sage-800 placeholder-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300"
                />
              </div>
              <textarea
                name="message"
                placeholder="Votre message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-white border border-sage-200 rounded-lg px-4 py-3 text-sage-800 placeholder-sage-500 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-cursive font-bold mb-6 text-sage-800">
                Coordonnées
              </h3>
              <div className="space-y-4 text-sage-700">
                <p className="flex items-start">
                  <MapPin className="mr-3 mt-1 w-5 h-5 text-sage-600" />
                  <span>123 Rue de la République<br />75000 Votre Ville</span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3 w-5 h-5 text-sage-600" />
                  <span>01 23 45 67 89</span>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-3 w-5 h-5 text-sage-600" />
                  <span>contact@restaurant-vegetal.fr</span>
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-cursive font-bold mb-4 text-sage-800">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white hover:bg-sage-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Facebook className="w-5 h-5 text-sage-600 hover:text-sage-800" />
                </a>
                <a href="#" className="w-10 h-10 bg-white hover:bg-sage-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Instagram className="w-5 h-5 text-sage-600 hover:text-sage-800" />
                </a>
                <a href="#" className="w-10 h-10 bg-white hover:bg-sage-100 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-md">
                  <Twitter className="w-5 h-5 text-sage-600 hover:text-sage-800" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <div className="border-t border-sage-200 py-8 bg-sage-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sage-600 text-sm">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Restaurant Végétalien - Tous droits réservés</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="hover:text-sage-800 transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="hover:text-sage-800 transition-colors duration-300">
                Politique de confidentialité
              </a>
              <a href="https://johannr.fr" className="hover:text-sage-800 transition-colors duration-300 font-medium">
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
