import { useState } from 'react';

import './newApp.css';

function useRandomizer(init) {
  	
	const [value, setValue] = useState(init);

	const incCounter = () => {
		if (value < 50) {
			setValue(value => value + 1)
		}
    }

	const decCounter = () => {
		if (value > -50) {
			setValue(value => value - 1)
		}
    }    
	
	const rnd = async () => {	
		const res = await fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=3&base=10&format=plain&rnd=new');
		const rndInt = await res.json();	
			
			console.log('rndInt = ' + rndInt);
		setValue(rndInt);
	}

	const reset = () => {
		setValue(init);
	}
	
	return {value, rnd, reset, incCounter, decCounter}
}

const Counter = (props) => {
    const btns = useRandomizer(props.counter);    

    return (
		<div className="component">
			<div className="counter">{btns.value}</div>
			<div className="controls">
			<button onClick={btns.incCounter}>INC</button>
			<button onClick={btns.decCounter}>DEC</button>
			<button onClick={btns.rnd}>RND</button>
			<button onClick={btns.reset}>RESET</button>
			</div>
		</div>
    )
}

const RndCounter = (props) => {	
    const btnRnd = useRandomizer(props.counter);

    return (
      <div className="component">
        <div className="counter">{btnRnd.value}</div>
        <div className="controls">
          <button onClick={btnRnd.rnd}>RND</button>
          <button onClick={btnRnd.reset}>RESET</button>
        </div>
      </div>
    )
}

function NewApp(props) {
	    return (
        <div>
            <Counter counter={props.counter}/>
			<RndCounter counter={props.counter}/>
        </div>
    )
}

export default NewApp;