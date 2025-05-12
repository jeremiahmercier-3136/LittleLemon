import React from 'react';
import './OrderPage.css';

function OrderPage() {
  return (
    <div className="order-page">
      <h1 className="order-title">Order Online</h1>
      <p className="order-description">
        Place your order for pickup or delivery. Our delicious meals are just a few clicks away!
      </p>
      <img
        className="order-image"
        src="/images/mario-and-adrian-a.jpg"
        alt="Mario and Adrian preparing food"
      />
    </div>
  );
}

export default OrderPage;
