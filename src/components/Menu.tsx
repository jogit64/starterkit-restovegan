
import React from 'react';

const Menu = () => {
  const menuCategories = [
    {
      title: "Entrées",
      items: [
        { name: "Velouté de légumes de saison", description: "Crème de coco, graines torréfiées", price: "8€" },
        { name: "Tartare d'avocat", description: "Tomates cerises, basilic, pain artisanal", price: "10€" },
        { name: "Salade de quinoa", description: "Légumes croquants, vinaigrette aux agrumes", price: "9€" }
      ]
    },
    {
      title: "Plats",
      items: [
        { name: "Curry de légumes", description: "Lait de coco, riz basmati bio", price: "15€" },
        { name: "Lasagnes végétales", description: "Béchamel de cajou, légumes de saison", price: "16€" },
        { name: "Burger végétal", description: "Steak de lentilles, frites de patate douce", price: "14€" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu végétal", description: "Crème de cajou, café bio équitable", price: "7€" },
        { name: "Tarte aux fruits de saison", description: "Pâte sablée maison, crème pâtissière végétale", price: "6€" },
        { name: "Mousse au chocolat", description: "Chocolat noir 70%, avocat, menthe fraîche", price: "6€" }
      ]
    },
    {
      title: "Boissons",
      items: [
        { name: "Jus frais pressés", description: "Orange, pomme-carotte, betterave-gingembre", price: "5€" },
        { name: "Thés & tisanes bio", description: "Sélection de thés verts, noirs et infusions", price: "4€" },
        { name: "Café équitable", description: "Espresso, cappuccino, latte végétal", price: "3€" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-sage-50 to-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Notre menu
          </h2>
          <p className="text-xl text-sage-600 max-w-2xl mx-auto">
            Des plats créatifs et généreux, préparés avec des ingrédients bio et de saison
          </p>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {menuCategories.map((category, index) => (
            <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'animate-slide-in' : 'animate-fade-in'}`}>
              <h3 className="text-2xl font-cursive font-bold text-sage-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-b border-sage-100 pb-4 last:border-b-0">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-sage-800 text-lg">{item.name}</h4>
                      <span className="text-peach-600 font-bold text-lg ml-4 flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-sage-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
