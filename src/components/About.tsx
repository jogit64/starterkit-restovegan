
import React from 'react';

const About = () => {
  const values = [
    {
      title: "Bio & Local",
      description: "Nos produits proviennent d'agriculteurs locaux engagés dans une démarche biologique respectueuse de l'environnement.",
      icon: "🌱"
    },
    {
      title: "Fait Maison",
      description: "Chaque plat est préparé sur place avec amour, des sauces aux desserts, pour vous garantir fraîcheur et authenticité.",
      icon: "👨‍🍳"
    },
    {
      title: "Engagement",
      description: "Notre cuisine végétalienne contribue à un monde plus durable, sans compromis sur le goût et la générosité.",
      icon: "🌍"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Notre philosophie
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Une cuisine végétalienne créative qui célèbre les produits de saison, 
            dans le respect de la nature et de vos sens.
          </p>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-sage-100 to-peach-100 rounded-full flex items-center justify-center text-4xl group-hover:shadow-lg transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="text-2xl font-cursive font-bold text-sage-800 mb-4">
                {value.title}
              </h3>
              <p className="text-sage-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-sage-50 to-peach-50 rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-cursive font-bold text-sage-800 mb-6">
            Une expérience culinaire unique
          </h3>
          <p className="text-lg text-sage-600 max-w-4xl mx-auto leading-relaxed">
            Notre équipe passionnée vous invite à découvrir une cuisine végétalienne raffinée, 
            où chaque assiette raconte l'histoire des producteurs locaux et de notre savoir-faire artisanal. 
            Nous croyons qu'une alimentation respectueuse peut être synonyme de plaisir et de convivialité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
