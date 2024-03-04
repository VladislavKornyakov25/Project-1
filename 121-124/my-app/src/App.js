import {Component, StrictMode}  from 'react';
import './App.css';

class WhoAmI extends Component { 
	constructor (props) {
		super(props);
		this.state = {
			years: 27,
			text: '+++',
			position: ''
		}
	}

	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}));
		
	}

	commitInputChanges = (event, color) => {
		
		this.setState({
			position: event.target.value
		});
	}

	render () {
		const {name, surname, link} = this.props;
		const {years, position, text} = this.state;
		return (
			<div>
				<button onClick={this.nextYear}>{text}</button>
				<h1>My name is {name}, surname - {surname}, age - {years}, position - {position}</h1>
				<a href={link}>My Profile</a>
				<form>
					<span>
						Введите должность
					</span>
					<input type="text" onChange={(event) => this.commitInputChanges(event, 'some color')}/>
				</form>
			</div>
		);
	}
	
}


// function WhoAmI({name, surname, link}) { // function WhoAmI(props) - old version
// 	return (
// 		<div>
// 			<h1>My name is {name}, surname - {surname}</h1>
// 			<a href={link}>My Profile</a>
// 		</div>
// 	);
// }

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
