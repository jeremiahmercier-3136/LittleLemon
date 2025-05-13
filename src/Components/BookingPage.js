import React from 'react';
import './BookingPage.css';
import BookingForm from './BookingForm';

function BookingPage(props) {
  return (
    <div className="booking-page">
      <h1 className="booking-title">Reserve a Table</h1>
      <p className="booking-description">
        Book your table at Little Lemon. Select a date, time, and let us know how many guests to expect!
      </p>
      <BookingForm {...props} />
    </div>
  );
}

export default BookingPage;
