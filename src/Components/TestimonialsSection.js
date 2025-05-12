import React from 'react';
import TestimonialCard from './TestimonialCard';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Emily R.',
      rating: 5,
      review: 'Amazing food and atmosphere! I felt like I was back in Greece.',
    },
    {
      name: 'James D.',
      rating: 4,
      review: 'Delicious dishes with a modern twist. Definitely coming back.',
    },
    {
      name: 'Sophia W.',
      rating: 5,
      review: 'The best lemon dessert I’ve ever had!',
    },
    {
      name: 'Michael K.',
      rating: 4,
      review: 'Warm service and bold flavors. Highly recommend the bruschetta.',
    },
  ];

  return (
    <section className="testimonials-section">
      <h2>What our customers say</h2>
      <div className="testimonial-row">
        {testimonials.map((t, index) => (
          <TestimonialCard
            key={index}
            name={t.name}
            rating={t.rating}
            review={t.review}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
