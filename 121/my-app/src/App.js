import logo from './logo.svg';
import {Component}  from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World!!!</h2>
}

// const Field = () => {
// 	const holder = 'Enter here';
// 	const styledField = {
// 		width: '300px'
// 	};
// 	return <input 
// 			placeholder={holder} 
// 			type="text" 
// 			style={styledField}/>
// } 

class Field extends Component {
	render() {
		const holder = 'Enter here';
		const styledField = {
			width: '300px'
		};
		return <input 
				placeholder={holder} 
				type="text" 
				style={styledField}/>
	}
}

function Btn() {
	const text = 'Log In';
	const logged = true;
	return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
		<Header/>
		<Field/>
		<Btn/>
    </div>
  );
}

export {Header};
export default App;
