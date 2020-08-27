import React from 'react';
import "./answersItem.scss";

const AnswersItem = (props) => {
	return (
		<li
			className="answers-item"
			onClick={() => props.onAnswerClick(props.id)}
		>{props.answers}</li>
	);
};

export default AnswersItem;