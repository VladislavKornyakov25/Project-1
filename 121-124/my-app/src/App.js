import {Component, StrictMode}  from 'react';
import './App.css';

function WhoAmI({name, surname, link}) { // function WhoAmI(props) - old version
	return (
		<div>
			<h1>My name is {name}, surname - {surname}</h1>
			<a href={link}>My Profile</a>
		</div>
	);
}

function App() {
  return (
    <div className="App">      
	  	<WhoAmI 
			name="John" 
			surname="Smith"
			link="facebook.com"/>	
		<WhoAmI 
			name="Alex" 
			surname="Ivanovich"
			link="facebook.com"/>
    </div>
  );
}
export default App;
