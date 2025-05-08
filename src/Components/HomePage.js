import React from 'react';
import ChicagoStore from './ChicagoStore';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';

function HomePage() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials />
      <ChicagoStore />
    </>
  );
}

export default HomePage;
