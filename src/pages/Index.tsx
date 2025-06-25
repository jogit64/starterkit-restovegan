
import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import WeeklySpecial from '../components/WeeklySpecial';
import Menu from '../components/Menu';
import About from '../components/About';
import PhotoCarousel from '../components/PhotoCarousel';
import PracticalInfo from '../components/PracticalInfo';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WeeklySpecial />
      <Menu />
      <About />
      <PhotoCarousel />
      <PracticalInfo />
      <Footer />
    </div>
  );
};

export default Index;
