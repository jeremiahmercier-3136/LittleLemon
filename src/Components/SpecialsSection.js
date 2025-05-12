import React from 'react';
import SpecialCard from './SpecialCard';
import './SpecialsSection.css';

const SpecialsSection = () => {
  return (
    <section className="specials-section">
      <div className="specials-header">
        <h2>This week's specials!</h2>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-cards">
        <SpecialCard
          title="Greek Salad"
          description="Crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Served with garlic bread."
          price="$12.99"
          image="/images/greek-salad.jpg"
          link="#"
        />
        <SpecialCard
          title="Bruschetta"
          description="Grilled bread smeared with garlic and topped with tomatoes, olive oil, and basil."
          price="$9.99"
          image="/images/bruschetta.svg"
          link="#"
        />
        <SpecialCard
          title="Lemon Dessert"
          description="Authentic homemade lemon dessert with rich flavor and light texture."
          price="$7.99"
          image="/images/lemon-dessert.jpg"
          link="#"
        />
      </div>
    </section>
  );
};

export default SpecialsSection;
