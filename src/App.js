import React from 'react';
import './App.css';
import Car from "./cars/Car";

class App extends React.Component {
	state = {
		cars: [
			{name: "Ford"},
			{name: "Opel"},
			{name: "Toyota"},
		],
		title: "React components"
	}

	changeTitle = () => {
		this.setState({
			title: 'Title was changed!!!'
		})
	}
	onChangeCarTitle = (carTitle, index) => {
		const cars = [...this.state.cars];
		cars[index].name = carTitle;
		this.setState({cars})
	}

	onResetCar = (e, index) => {
		e.preventDefault();
		const cars = [...this.state.cars];
		cars[index].name = "Auto";
		this.setState({cars});
	}

	onDeleteCar = (index) => {
		const cars = [...this.state.cars];
		cars.splice(index, 1);
		this.setState({cars});
	}

	render() {
		const cars = this.state.cars.map((item, index) => {
			return (
				<Car
					onResetCar={(e) => this.onResetCar(e, index)}
					onChangeCarTitle={(e) => this.onChangeCarTitle(e.target.value, index)} key={index}
					name={item.name}
					onDeleteCar={this.onDeleteCar.bind(this, index)}
				/>
			)
		});
		return (
			<div className="App">
				<h1>{this.state.title}</h1>
				<div className="cars">
					{cars}
				</div>
				<button onClick={this.changeTitle} className="button-change">Change title</button>
			</div>
		);
	}
}

export default App;
