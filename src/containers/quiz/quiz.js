import React, {Component} from 'react';
import "./quiz.scss";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

class Quiz extends Component {
	state = {
		quizz: [
			{
				answers: [
					{text: 'Question 1'},
					{text: 'Question 2'},
					{text: 'Question 3'},
					{text: 'Question 4'},
				]
			}
		]
	}

	render() {
		return (
			<div className="quiz">
				<div className="quiz-wrapper">
					<h1>Answer for the all questions.</h1>
					<ActiveQuiz
						answers={this.state.quizz[0].answers}
					/>
				</div>
			</div>
		);
	}
};
export default Quiz;