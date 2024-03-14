import {Component}  from 'react';
import styled from 'styled-components';

import './App.css';

const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);

`;

const Header = styled.h2`
	font-size: 22px;
`;

const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
`;

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
			<EmpItem>			
				<Button onClick={this.nextYear}>{text}</Button>
				<Header>My name is {name}, surname - {surname}, age - {years}, position - {position}</Header>
				<a href={link}>My Profile</a>
				<form>
					<span>
						Введите должность
					</span>
					<input type="text" onChange={(event) => this.commitInputChanges(event, 'some color')}/>
				</form>
			</EmpItem>
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
const Wrapper = styled.div`
	width: 600px;
	margin: 80px auto 0px auto;	
`;

function App() {
  return (
    <Wrapper>      
	  	<WhoAmI 
			name="John" 
			surname="Smith"
			link="facebook.com"/>	
		<WhoAmI 
			name="Alex" 
			surname="Ivanovich"
			link="facebook.com"/>
    </Wrapper>
  );
}
export default App;
