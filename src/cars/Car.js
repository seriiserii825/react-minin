import React from 'react';
import "./Car.scss";

const Car = (props) => {
	return (
		<div className="car" >
			<h2>{props.name}</h2>
			<input onChange={props.onChangeCarTitle} type="text" value={props.name}/>
			<button onClick={props.onDeleteCar}>Delete</button>
			<a href="#" onClick={props.onResetCar}>Clear</a>
		</div>
	);
};

export default Car;
