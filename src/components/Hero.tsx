
import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-sage-50 to-sage-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu texte */}
          <div className="lg:pr-12 animate-slide-in">
            <h1 className="text-5xl lg:text-7xl font-cursive font-bold text-sage-800 mb-6 leading-tight">
              Saveurs végétales
              <span className="block text-4xl lg:text-5xl text-peach-500 mt-2">
                & authenticité
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-sage-600 mb-8 leading-relaxed">
              Une cuisine végétalienne généreuse, préparée avec des produits bio et locaux, 
              dans le respect de la nature et de vos papilles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#menu" 
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
              >
                Découvrir le menu
              </a>
              <a 
                href="#infos" 
                className="border-2 border-peach-400 text-peach-600 hover:bg-peach-50 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 text-center"
              >
                Réserver une table
              </a>
            </div>
          </div>
          
          {/* Image avec effet de fondu */}
          <div className="relative lg:ml-12 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/20 to-white/60 z-10 rounded-3xl"></div>
            <div className="aspect-[4/5] bg-gradient-to-br from-sage-200 to-peach-200 rounded-3xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80"
                alt="Devanture du restaurant"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            {/* Éléments décoratifs */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-peach-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage-200 rounded-full opacity-40 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Indicateur de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sage-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
