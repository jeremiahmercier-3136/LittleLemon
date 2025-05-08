import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';

function initializeTimes() {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function updateTimes(state, selectedDate) {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function Main() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={
          <BookingPage
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={availableTimes}
          />}>
        </Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
