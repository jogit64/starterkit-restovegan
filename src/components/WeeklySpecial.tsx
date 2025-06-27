import React, { useEffect, useState } from "react";

interface PlatDuJour {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const WeeklySpecial = () => {
  const [plat, setPlat] = useState<PlatDuJour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/plat-du-jour")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        // On récupère le premier résultat de la liste
        const page = data.results[0];
        const props = page.properties;

        // On extrait chaque champ
        const title = props["Nom du plat"].title[0]?.plain_text ?? "—";
        const description =
          props["Description"].rich_text[0]?.plain_text ?? "—";
        const price = props["Prix"].number ?? 0;
        const imageUrl =
          props["Fichiers et médias"].files[0]?.file.url ?? "/placeholder.svg";

        setPlat({ title, description, price, imageUrl });
      })
      .catch((err) => {
        console.error(err);
        setError("Impossible de charger le plat du jour.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p>Chargement du plat du jour…</p>
        </div>
      </section>
    );
  }

  if (error || !plat) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Plat de la semaine
          </h2>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-sage-50 to-peach-50 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square md:aspect-auto">
              <img
                src={plat.imageUrl}
                alt={plat.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-cursive font-bold text-sage-800 mb-4">
                {plat.title}
              </h3>
              <p className="text-sage-600 text-lg mb-6 leading-relaxed">
                {plat.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-peach-600">
                  {plat.price.toFixed(2)}€
                </span>
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
