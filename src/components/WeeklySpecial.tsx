
import React from 'react';

const WeeklySpecial = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Plat de la semaine
          </h2>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sage-50 to-peach-50 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square md:aspect-auto">
              <img 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80"
                alt="Plat de la semaine"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-cursive font-bold text-sage-800 mb-4">
                Buddha Bowl Automnal
              </h3>
              <p className="text-sage-600 text-lg mb-6 leading-relaxed">
                Un bol généreux aux saveurs de saison : quinoa bio, courge butternut rôtie, 
                avocat, graines de grenade, noix et notre sauce tahini maison aux herbes fraîches.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-peach-600">16€</span>
                <a 
                  href="#menu"
                  className="bg-sage-600 hover:bg-sage-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Voir le menu
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklySpecial;
