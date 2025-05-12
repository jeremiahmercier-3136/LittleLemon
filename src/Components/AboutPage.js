import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Little Lemon</h1>
      <p className="about-description">
        Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We focus on locally-sourced ingredients and seasonal dishes prepared with love.
      </p>
      <img
        className="about-image"
        src="/images/mario-and-adrian-a.jpg"
        alt="Little Lemon owners Mario and Adrian"
      />
    </div>
  );
}

export default AboutPage;
