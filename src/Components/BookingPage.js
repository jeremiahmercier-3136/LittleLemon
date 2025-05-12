import React from 'react';
import './BookingPage.css';

function BookingPage({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, submitForm }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { date, time, guests, occasion };
    console.log(formData);
    submitForm(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label htmlFor="res-date" className="form-label">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="form-input"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <label htmlFor="res-time" className="form-label">Choose time</label>
      <select
        id="res-time"
        className="form-input"
        value={time}
        onChange={e => setTime(e.target.value)}
      >
        {availableTimes.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests" className="form-label">Number of guests</label>
      <input
        type="number"
        id="guests"
        className="form-input"
        min="1"
        max="10"
        value={guests}
        onChange={e => setGuests(e.target.value)}
      />

      <label htmlFor="occasion" className="form-label">Occasion</label>
      <select
        id="occasion"
        className="form-input"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}
      >
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" className="form-submit" aria-label="On Click" />
    </form>
  );
}

export default BookingPage;
