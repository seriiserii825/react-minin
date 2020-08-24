import React from 'react';

const Car = (props) => {
	return (
		<div className="car">
			<h2>{props.name}</h2>
			<input onChange={props.changeTitle} type="text" value={props.name}/>
			<button>Delete</button>
		</div>
	);
};

export default Car;
