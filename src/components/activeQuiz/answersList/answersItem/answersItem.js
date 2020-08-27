import React from 'react';
import "./answersItem.scss";

const AnswersItem = (props) => {
	let cls = 'answers-item ';
	if(props.classState){
		cls += props.classState
	}
	return (
		<li
			className={cls}
			onClick={() => props.onAnswerClick(props.id)}
		>{props.answers}</li>
	);
};

export default AnswersItem;