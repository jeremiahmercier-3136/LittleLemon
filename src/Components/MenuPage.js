import React from 'react';
import './MenuPage.css';

function MenuPage() {
  return (
    <div className="menu-page">
      <h1 className="menu-title">Our Menu</h1>
      <p className="menu-description">
        Explore our delicious selection of Mediterranean-inspired dishes made from the freshest, locally-sourced ingredients. From small plates to entrees and desserts, there’s something for every appetite.
      </p>
      <img
        className="menu-image"
        src="/images/mario-and-adrian-a.jpg"
        alt="Delicious food at Little Lemon"
      />
    </div>
  );
}

export default MenuPage;
