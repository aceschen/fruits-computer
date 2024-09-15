import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import pay from './pay.jpeg';
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Order() {

  const [state, handleSubmit] = useForm("xwpejrze");
  if (state.succeeded) {
      return <div className="order"><div className="header">Order received!</div>
      <p>Please be ready to wait a long time.</p>
      <p>Optionally, please pay us!</p>
      <img style={{width: '500px'}} src={pay}/>
      <Link to="/" className={"comein"}>go back home</Link>
      {/* <p>YOU ARE HUNGRY FOR THIS:</p> */}
        </div>;
      
  }
  return (
    <div className="order">
    <form className="form" onSubmit={handleSubmit}>
      <div className="header">what do you want</div>
      <label htmlFor="email">
        <div>who are you</div>
        <input
        id="name"
        type="name" 
        name="name"
      />
      </label>

    <div className='menuHeader'>drinks</div>

<label>
        <input
        name="matcha latte"
          type="checkbox"
        />
      <span>?̷̮͇́̑͝?̷͔̫̋̈?̶̪̈́̀͋ matcha latte
        <div className="desc"><span>with classic condensed milk and mysterious bits</span></div>
      </span>
      
      </label>

      <label>
        <input
        name="honey citron sparkler with jelly"
          type="checkbox"
        />

<span>honey citron sparkling something
        <div className="desc"><span>made by honeybee (isbee)</span></div>
      </span>
      </label>

      <label>
        <input
        name="chinese strawberry chrysanthemum sparkler"
          type="checkbox"
        />

<span>chinese strawberry chrysanthemum sparkler
        <div className="desc"><span>ooh... aah... all that glitters is not gold... sometimes it is a strawberry!</span></div>
      </span>

      </label>

      <label>
        <input
        name="southern hemisphere sticky chai latte"
          type="checkbox"
        />
        <span>southern hemisphere sticky chai latte
        <div className="desc"><span>why is it sticky? dare to find out... (it’s the australian beechworth honey!)</span></div>
      </span>
      </label>

      <div className='menuHeader'>bytes</div>


<label>
        <input
        name="adorable chinese apology (cut fruit)"
          type="checkbox"
        />
      <span>adorable chinese apology (cut fruit)
        <div className="desc"><span>我妈说 you need vitamin c! strawberry lobsters, apple crabs, etc. </span></div>
      </span>
      
      </label>


<label>
        <input
        name="classic kiwi mince and cheese pie made by real new zealander"
          type="checkbox"
        />
      <span>classic kiwi mince and cheese pie made by real new zealander
        <div className="desc"><span>very rare once in a life-time opportunities for all u yankees</span></div>
      </span>
      
      </label>


<label>
        <input
        name="asian fruit cabinet cake made by real asian"
          type="checkbox"
        />
      <span>asian fruit cabinet cake made by real asian
        <div className="desc"><span>cream cake with strawberries, grapes, mandarins, and more!</span></div>
      </span>
      
      </label>

      <label>
        <input
        name="steven universe’s social mores"
          type="checkbox"
        />
      <span>steven universe’s social mores
        <div className="desc"><span>or “s’mores”, as some might say </span></div>
      </span>
      
      </label>


      
      <div className='menuHeader'>misc. offerings</div>

      <label>
        <input
        name="isabel will answer a question"
          type="checkbox"
        />
        <span>isabel will answer a question
        <div className="desc"><span>isabel reserves the right to decline</span></div>
      </span>
      </label>



<label>
        <input
        name="isabel will give you a prophecy"
          type="checkbox"
        />
      <span>isabel will give you a prophecy
        <div className="desc"><span>this is legit, 100% hit rate, new world oracle type stuff. order at your own risk! </span></div>
      </span>
      
      </label>


<label>
        <input
        name="isabel will give you a prophecy involving oat milk"
          type="checkbox"
        />
      <span>isabel will give you a prophecy involving oat milk
        <div className="desc"><span>for the lactose intolerant guys in the back (of the public restroom)</span></div>
      </span>
      
      </label>


<label>
        <input
        name="ace will associate you with a number or color"
          type="checkbox"
        />
      <span>ace will associate you with a number or color
        <div className="desc"><span>it’s like manual, high-latency synthesia!</span></div>
      </span>
      
      </label>

      <label>
        <input
        name="YOU will dance a jig for us"
          type="checkbox"
        />
      <span>YOU will dance a jig for us
        <div className="desc"><span>we can pick the song if you’d like!</span></div>
      </span>
      
      </label>


      <label>
        <input
        name="we will NAME YOU"
          type="checkbox"
        />
        <span>we will NAME YOU
        <div className="desc"><span>sick of your name? we have professionals (trans people)</span></div>
      </span>
      </label>

    

<label>
        <input
        name="we will RATE YOU"
          type="checkbox"
        />
      <span>we will RATE YOU
        <div className="desc"><span>based on a secret system! don’t worry, we are very kind and forgiving!</span></div>
      </span>
      
      </label>


<label>
        <input
        name="we will EXTINGUISH YOUR LONELINESS (blind date)"
          type="checkbox"
        />
      <span>we will EXTINGUISH YOUR LONELINESS (blind date)
        <div className="desc"><span>(limited quantity) (market price)</span></div>
      </span>
      
      </label>


<label>
        <input
        name="isabel will interpret a keysmash"
          type="checkbox"
        />
      <span>isabel will interpret a keysmash
        <div className="desc"><span>e.g. dkjshfjsk (don’t know just surely how freely j-han siphons kangaroos)</span></div>
      </span>
      
      </label>




<label >
        <div>any notes or dietary requirements? e.g. dairy-free...key smash for interpretation...</div>
        <textarea
        id="reqs"
        type="reqs" 
        name="reqs"
      />
      </label>
      <button className="comein" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

