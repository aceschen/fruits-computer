import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import pay from './pay.jpeg';
import './App.css';
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';

export default function Order() {
  //   const [state, handleSubmit] = useForm("xwpejrze");
  //   if (state.succeeded) {
  //       return <div className="order"><div className="header">Order received!</div>
  //       <p>Please be ready to wait a long time.</p>
  //       <p>Optionally, please pay us!</p>
  //       <img style={{width: '500px'}} src={pay}/>
  //       <Link to="/" className={"comein"}>go back home</Link>
  //       {/* <p>YOU ARE HUNGRY FOR THIS:</p> */}
  //         </div>;

  //   }
  const navigate = useNavigate();
  function handleSubmit(e) {
    var form = document.getElementById('orderform');
    e.preventDefault();
    fetch(form.action, {
      method: 'POST',
      body: new FormData(document.getElementById('orderform')),
    })
      .then(response => response.json())
      .then(html => {
        navigate('/wearecookingitnow');
      });
  }
  return (
    <div className="order">
      {/* <form	
		method="post"	
		action="https://sheetdb.io/api/v1/5niyt2gib59g7"
		onSubmit={handleSubmit}>
		
		<div className="header">what do you want</div>
		<div>
			name: <input name="data[name]"/>
		</div>
		<div>drink: <input name="data[drink]"/></div>
		<div>food: <input name="data[food]"/></div>

		<label>
			<input
			name="data[milk]"
			type="checkbox"/>
			<span>do u want oat milk?</span>
      	</label>
		<button className="comein" type="submit" disabled={state.submitting}> Submit </button>
		</form> */}
      <div className="form">
        <div className="header">what do you want isabel</div>
        <form
          id="orderform"
          method="post"
          action="https://sheetdb.io/api/v1/5niyt2gib59g7"
          onSubmit={handleSubmit}>
          {/* ID: <input name="data[id]"/> */}
          <div>who are you</div> <input name="data[name]" />
          <div className="menuHeader">potions</div>
          <label>
            <span>
             ★ special sweet limited edition secret menu extravaganza special
              <div className="desc">
                <span>
                  double scoop of matcha with gin, shaken (8)
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[sticky chai hot cocoa]" type="checkbox" />
            <span>
              sticky chai hot cocoa
              <div className="desc">
                <span>
                  beechwood honey, hot chocolate, and clover 🐮 🍀 milk... the
                  most anti-coffee treat ever, with no limits on jumbo
                  marshmallows.
                </span>
              </div>
            </span>
          </label>
          <label>
            <input
              name="data[lavender persimmon matcha latte]"
              type="checkbox"
            />

            <span>
              lavender persimmon matcha latte
              <div className="desc">
                <span>
                  while stocks (ace running out the back to pick lavenders)
                  last. and again... with clover 🐮 🍀 milk...
                </span>
              </div>
            </span>
          </label>
          <label>
            <input
              name="data[apple cider injeolmi float with herbal jelly]"
              type="checkbox"
            />

            <span>
              apple cider injeolmi float with herbal jelly
              <div className="desc">
                <span>
                  this one is for the kids menu... like what even is going on
                  here? order at your own risk (we haven’t taste-tested it yet.)
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[matcha honey citrus sparkler]" type="checkbox" />
            <span>
              ?̷̮͇́̑͝?̷͔̫̋̈?̶̪̈́̀͋ matcha honey citrus sparkler
              <div className="desc">
                <span>
                  so after looking at the previous options you think you want
                  one that is perhaps dairy-free and refreshing... healing honey
                  citrus with a twist
                </span>
              </div>
            </span>
          </label>
          <div className="menuHeader">victuals</div>
          <label>
            <input name="data[mince and cheese pies]" type="checkbox" />
            <span>
              imaginary kiwi mince and cheese pies, home-made by new
              zealander(’s boyfriend)
              <div className="desc">
                <span>
                  vegetarian-friendly this time!! not real meat... i can confirm
                  they are adorable. also contains swiss, carrots, onion, and
                  celery.
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[strawberry tofu tart]" type="checkbox" />
            <span>
              beachside strawberry tofu tart
              <div className="desc">
                <span>
                  we got this cute tart at the grocery store across the street
                  in santa cruz and thought we’d share.{' '}
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[gyoza]" type="checkbox" />
            <span>
              costco pork and chicken gyoza
              <div className="desc">
                <span>
                  we are obsessed with these right now. pick these if your
                  stomach has been secretly singing whale songs but you’re too
                  shy to say it. we will feed you...
                </span>
              </div>
            </span>
          </label>
          <div className="menuHeader">misc. offerings</div>
          <label>
            <span>
             ★ anniversary ultra awesome dating true love extravaganza anniversary special
              <div className="desc">
                <span>
                  wealth of tuner arrangements (7)
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[fortune cookies]" type="checkbox" />
            <span>
              chinese fortune
              <div className="desc">
                <span>
                  in prophetic cookie form. i want to say they are 100% accurate
                  but some are just idioms.
                </span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[red pocket]" type="checkbox" />
            <span>
              lucky red pocket with “real” cash money inside
              <div className="desc">
                <span>gift wrapping for your lucky charm gacha roll.</span>
              </div>
            </span>
          </label>
          <label>
            <input name="data[tarot reading]" type="checkbox" />
            <span>
              mystical tarot reading
              <div className="desc">
                <span>
                  i don’t know what to write here because ace said he got us a
                  cool fortune-telling card game but he wouldn’t tell me what it
                  is. let’s play!
                </span>
              </div>
            </span>
          </label>
          <label>
            <div style={{ marginBottom: '10px' }}>
              any notes or dietary requirements? e.g. oat milk... remove herbal
              jelly... you hate sprinkles...
            </div>
            <textarea
              style={{ width: '100%', minHeight: '100px' }}
              id="reqs"
              type="reqs"
              name="data[notes]"
            />
          </label>
          {/* Drink: <input name="data[drink]" />
          Milk: <input name="data[milk]" />
          Food: <input name="data[food]" />
          Special: <input name="data[special]" /> */}
          <button className="comein" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
