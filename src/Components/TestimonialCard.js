import React from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ name, rating, review }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-rating">⭐️ {rating}/5</div>
      <p className="testimonial-review">"{review}"</p>
      <div className="testimonial-name">– {name}</div>
    </div>
  );
};

export default TestimonialCard;
