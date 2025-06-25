
import React, { useState, useEffect } from 'react';

const PhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const photos = [
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [photos.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sage-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-cursive font-bold text-sage-800 mb-4">
            Nos créations
          </h2>
          <div className="w-24 h-1 bg-peach-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrousel principal */}
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={photo}
                  alt={`Plat ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            
            {/* Boutons de navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-sage-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-sage-800 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              →
            </button>
          </div>

          {/* Indicateurs */}
          <div className="flex justify-center mt-8 space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-peach-500 scale-125' 
                    : 'bg-sage-300 hover:bg-sage-400'
                }`}
              />
            ))}
          </div>

          {/* Miniatures */}
          <div className="grid grid-cols-6 gap-2 mt-8 lg:gap-4">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-3 ring-peach-400 scale-105' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={photo}
                  alt={`Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoCarousel;
