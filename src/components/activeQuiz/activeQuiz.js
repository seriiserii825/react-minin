import React from 'react';
import "./activeQuiz.scss";
import AnswersList from "./answersList/answersList";

const ActiveQuiz = (props) => {
	return (
		<div className="active-quiz">
			<p className="active-quiz__header">
				<span><strong>{props.activeNumber}.</strong> {props.question}</span>
				<small>{props.activeNumber} from {props.quizLength}</small>
			</p>
			<AnswersList
				answers={props.answers}
				onAnswerClick={props.onAnswerClick}
				classState={props.classState}
			/>
		</div>
	);
};

export default ActiveQuiz;