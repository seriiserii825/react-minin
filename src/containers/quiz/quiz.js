import React, {Component} from 'react';
import "./quiz.scss";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

class Quiz extends Component {
	state = {
		quizz: [
			{
				question: 'What color are sky?',
				answers: [
					{text: 'Red', id: 1},
					{text: 'Blue', id: 2},
					{text: 'Maroon', id: 3},
					{text: 'Lime', id: 4},
				],
				rightAnswerId: 2
			}
		]
	}

	onAnswerClick = (id) => {
		console.log(id);
	}

	render() {
		return (
			<div className="quiz">
				<div className="quiz-wrapper">
					<h1>Answer for the all questions.</h1>
					<ActiveQuiz
						question={this.state.quizz[0].question}
						answers={this.state.quizz[0].answers}
						onAnswerClick={this.onAnswerClick}
					/>
				</div>
			</div>
		);
	}
};
export default Quiz;