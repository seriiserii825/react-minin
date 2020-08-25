import React from 'react';
import "./activeQuiz.scss";
import AnswersList from "./answersList/answersList";

const ActiveQuiz = (props) => {
	return (
		<div className="active-quiz">
			<p className="active-quiz__header">
				<span><strong>2.</strong> How are you?</span>
				<small>4 from 12</small>
			</p>
			<AnswersList
				answers={props.answers}
			/>
		</div>
	);
};

export default ActiveQuiz;