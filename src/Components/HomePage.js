import React from 'react';
import ChicagoStore from './ChicagoStore';
import Hero from './Hero';
import SpecialsSection from './SpecialsSection';
import TestimonialsSection from './TestimonialsSection';

function HomePage() {
  return (
    <>
      <Hero />
      <SpecialsSection />
      <TestimonialsSection />
      <ChicagoStore />
    </>
  );
}

export default HomePage;
