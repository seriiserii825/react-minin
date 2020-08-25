import React from 'react';
import "./quiz.scss";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

const Quiz = () => {
	return (
		<div className="quiz">
			<div className="quiz-wrapper">
				<h1>Quiz</h1>
				<ActiveQuiz/>
			</div>
		</div>
	);
};

export default Quiz;