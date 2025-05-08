import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import MenuPage from './MenuPage';
import OrderPage from './OrderPage';

function Main() {
  return (
    <main>
      <Routes> 
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/menu" element={<MenuPage />}></Route>
        <Route path="/order" element={<OrderPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
