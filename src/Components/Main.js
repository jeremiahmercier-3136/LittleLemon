import React, { useReducer, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';
import { fetchAPI, submitAPI } from '../api';

function initializeTimes() {
  const today = new Date();
  return fetchAPI(today);
}

function updateTimes(state, selectedDate) {
  return  fetchAPI(new Date(selectedDate));
}

function Main() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState('');
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={
          <BookingPage
            date={date}
            setDate={d => {setDate(d); dispatch(d);}}
            time={time}
            setTime={setTime}
            guests={guests}
            setGuests={setGuests}
            occasion={occasion}
            setOccasion={setOccasion}
            availableTimes={availableTimes}
            submitForm={submitForm}
          />}>
        </Route>
        <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </main>
  );
}

export { initializeTimes, updateTimes };
export default Main;
