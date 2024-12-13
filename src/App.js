import React from 'react';
import './App.css';
import Home from './Home';
import Order from './Order';
import OrderLucky from './OrderLucky';
import { Route, Routes } from 'react-router-dom';
import Confirmation from './Confirmation';

export default function App() {
  return (
    <Routes>
      <Route index path="" element={<Home />} />
      <Route path="/eat" element={<OrderLucky />} />
      <Route path="/wearecookingitnow" element={<Confirmation />} />
      <Route path="/eatold" element={<Order />} />
    </Routes>
  );
}
