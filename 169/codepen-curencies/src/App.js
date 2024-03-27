import { useEffect, useState } from 'react';
import './App.css';
const App = (props) => {
  
  	const [counter, setCounter] = useState(props.counter);
	const [data, setData] = useState();
	
	useEffect(() => {
		const getCurency = async () => {
			const res = await fetch('https://api.nbrb.by/exrates/rates?periodicity=0');
			const cur =  await res.json().then(res => res);	
			setData(cur);
		}
		getCurency();
	}, []);	
		
			
	function bynToCurrensy(prop) {		
		const rate = data.filter(item => item.Cur_Abbreviation === prop);			
		if (prop === 'RUB') {
			setCounter(counter => (props.counter / rate[0].Cur_OfficialRate * 100).toFixed(1)); 
		} else {
			setCounter(counter => (props.counter / rate[0].Cur_OfficialRate).toFixed(1)); 
		}
		    
		 
	}	
  
  
	return (      
		<div className="app">
			<div className="counter">{counter}</div>
			<div className="controls">
				<button onClick={() => bynToCurrensy('USD')}>USD</button>
				<button onClick={() => bynToCurrensy('EUR')}>EUR</button>
				<button onClick={() => bynToCurrensy('RUB')}>RUB</button>
				<button onClick={() => bynToCurrensy('UAH')}>UAH</button>
			</div>
		</div>      
	)
 
}

export default App;
