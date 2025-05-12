import React from 'react';
import './SpecialCard.css';
import { FaMotorcycle } from 'react-icons/fa';

const SpecialCard = ({ title, description, price, image, link }) => {
  return (
    <div className="special-card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-description">{description}</p>
        <a href={link} className="card-order">
          Order a delivery <FaMotorcycle className="order-icon" />
        </a>
      </div>
    </div>
  );
};

export default SpecialCard;
