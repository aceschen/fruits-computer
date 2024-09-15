
import React from 'react'
import './App.css'
import Home from './Home';
import Order from './Order';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";

export default function App() {



return (

    <Routes>
        <Route index path='' element={<Home/>} />
        <Route  path='/eat' element={<Order/>} />
    </Routes>

);
}
