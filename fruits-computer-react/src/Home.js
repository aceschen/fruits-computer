
import React from 'react'
import './App.css'
import './web-fonts/font.css'
import worm from './worm.png'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Home() {


  const locale = 'en';
  const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

  React.useEffect(() => {
      const timer = setInterval(() => { // Creates an interval which will update the current data every minute
      // This will trigger a rerender every component that uses the useDate hook.
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
    }
  }, []);

  const day = today.toLocaleDateString(locale, { weekday: 'long' });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

  const hour = today.getHours();
  const min = today.getMinutes();

  var wish = ''

  if (hour == 10 && min >= 5) {
    wish = 'you are HOT / SEXY / BEAUTIFUL'
  } else if (hour == 10) {
    wish = "you are ugly"

  } else if (hour == 11 && min >= 30) {
    wish = "you often wear hats"

   } else if (hour == 11) {
    wish = "you met us when we were 19 OR 22"
  
    } else if (hour == 12 && min >= 30) {
    wish = "you can draw miku from memory"
  
     } else if (hour == 12) {
    wish = "you are under 5’6”"

    } else if (hour == 13 && min >= 30) {
    wish = "you have good fashion taste"

    } else if (hour == 13) {
    wish = "can speak chinese"

  } else if (hour == 14 && min >= 30) {
    wish = "you knew we were dating before feb 19"

    } else if (hour == 14) {
    wish = "everyone can come (dei initiative)"

  } else {
    wish = "we are closed for business..."
  }


  const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });


return (
  <div className="page">
    <div className="time">the time is currently: 
      <div className={"actualtime"}>{time}</div> <div>{wish}</div></div>
    <img src={worm} style={{width: 500}}/>

    <Link to="/eat" className={"comein"}>come in!</Link>
    {/* <button>our business stats</button> */}
  </div>
);
}

