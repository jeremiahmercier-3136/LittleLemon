import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-description">
          We are a family-owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-button">Reserve a Table</button>
      </div>
      <div className="hero-right">
        <img
          src="/images/restaurant-food.jpg" // Replace with the actual image path
          alt="Restaurant"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
