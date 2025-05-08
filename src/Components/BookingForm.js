import React from 'react';

function BookingForm({date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={e => setTime(e.target.value)}
      >
        {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={e => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={e => setOccasion(e.target.value)}
      >
        <option value="">Select</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
}

export default BookingForm;
