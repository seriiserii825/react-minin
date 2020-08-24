import React from 'react';
import './App.css';
import Car from "./cars/Car";

class App extends React.Component {
	state = {
		cars: [
			{name: "Ford"},
			{name: "Opel"},
			{name: "Toyota"},
		]
	}

	changeTitle = (name, index) => {
		console.log(name, index);
		const car = this.state.cars[index];
		car.name = name;
		const cars = [...this.state.cars];
		cars[index] = car;
		this.setState({cars});
	}

	render() {
		const cars = this.state.cars.map((item, index) => {
			return (
				<Car key={index} changeTitle={(e) => this.changeTitle(e.target.value, index)} name={item.name}/>
			)
		});
		return (
			<div className="App">
				{cars}
			</div>
		);
	}
}

export default App;
