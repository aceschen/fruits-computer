import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import pay from './pay.jpeg';
import './App.css'
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
  return (

<div className='order'>
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
		<form
		method="post"
		action="https://sheetdb.io/api/v1/5niyt2gib59g7">
			ID: <input name="data[id]"/>
			Name: <input name="data[name]"/>
			Drink: <input name="data[drink]"/>
			Milk: <input name="data[milk]"/>
			Food: <input name="data[food]"/>
			Special: <input name="data[special]"/>
			<button type="submit">Submit</button>
		</form>
	</div>
  );
}

