import React from 'react';
import './App.css';
import './web-fonts/font.css';
import pay from './pay.jpeg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="order">
      <div className="header">Order received!</div>
      <p>Please be ready to wait a long time.</p>
      <p>Optionally, please donate to us!</p>
      <img alt="isabel's venmo" style={{ width: '500px' }} src={pay} />
      <Link to="/" className={'comein'}>
        go back home
      </Link>
    </div>
  );
}
