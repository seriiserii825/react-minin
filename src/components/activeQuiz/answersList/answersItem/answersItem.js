import React from 'react';
import "./answersItem.scss";

const AnswersItem = (props) => {
	return (
		<div className="answers-item">{props.answers}</div>
	);
};

export default AnswersItem;