
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Accueil', href: '#' },
    { name: 'Menu', href: '#menu' },
    { name: 'À propos', href: '#about' },
    { name: 'Photos', href: '#photos' },
    { name: 'Infos', href: '#infos' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-cursive font-bold transition-colors duration-300 ${
              isScrolled ? 'text-sage-800' : 'text-white'
            }`}>
              Restaurant Végétal
            </h1>
          </div>

          {/* Menu desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-peach-500 ${
                    isScrolled ? 'text-sage-700' : 'text-white'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Bouton réservation */}
          <div className="hidden md:block">
            <button className="bg-peach-500 hover:bg-peach-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105">
              Réserver
            </button>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-sage-800' : 'text-white'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-lg shadow-lg mt-2 py-4">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-sage-700 hover:text-peach-500 hover:bg-sage-50 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-peach-500 hover:bg-peach-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300">
                Réserver
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
