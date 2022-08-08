
import { useState } from 'react'

function App() {
	const [calc, setCalc] = useState("");
	const [result, setResult] = useState("");

	const ops = ['/', '*', '+', '-', '.'];

const operatorworking = () => {
	const calcu = calc + ".";

	let x = "";
	let array = [];

	for (let index = 0; index < calcu.length; index++) {
		if (calcu[index].search ("^[0-9]*$") == 0) {
			x = x + calcu[index]
		} else {
			array.push(x)
			array.push(calcu[index])
			x = ""
		
		}
	} 

	console.log(op(array, "*"));
	console.log(op(array, "/"));
	
}


  const updateCalc = value => {
    setCalc(calc + value);
  }

  const DELETE = () => {
	console.log (typeof calc)
    setCalc(calc.substring(0, calc.length - 1))
  } 

  const op = (array, symbol) =>{

	let multi = array.map((item, ind) => {return item.indexOf(symbol) !== -1 ? ind : ""});
	multi = multi.filter((e)=> e !== "")
	let resu = multi.map((a)=>{
		return toString(array[a-1] * array[a+1]);
	})

	array.forEach((a,i)=>{
		if(a.indexOf(symbol) == 0){
			array.splice(i-1,3, resu[0])
			resu.shift();
		} 
	}) 

	return array;

  }
  

	const createDigits = () => {
		const digits = [];

		for (let i = 1; i < 10; i++) {
			digits.push(
				<button key={i} onClick={() => updateCalc(i)}>{i}</button>
			)	
		}
    return digits
	}

	return (
		<div className="App"> 
			<div className="calculator">
				<div className="display"> 	
					{result ? <span>(0)</span> : ''}{ calc || "0"}
				</div>
				<div className="operators">
					<button onClick={() => updateCalc('/')}>/</button>
					<button onClick={() => updateCalc('*')}>*</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>

					<button onClick={() => DELETE ()}>DEL</button>
				</div>

        <div className="digits">
						{ createDigits() }
						<button onClick={() => updateCalc(0)}>0</button>
						<button onClick={() => updateCalc('.')}>.</button>
						<button onClick={() => operatorworking()}>=</button>
					</div>	
			</div>
		</div>
	);
}

export default App;
