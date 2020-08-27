import React, {Component} from 'react';
import "./quiz.scss";
import ActiveQuiz from "../../components/activeQuiz/activeQuiz";

class Quiz extends Component {
	state = {
		activeQuestion: 0,
		quizClasses: null,
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
			},
			{
				question: 'What color are grass?',
				answers: [
					{text: 'Yellow', id: 1},
					{text: 'Magenta', id: 2},
					{text: 'Green', id: 3},
					{text: 'Purple', id: 4},
				],
				rightAnswerId: 3
			}
		]
	}

	onAnswerClick = (id) => {
		if (id === this.state.quizz[this.state.activeQuestion].rightAnswerId) {
			this.setState({
				quizClasses: {
					[id]: 'success'
				}
			})
			const answerTimeout = window.setTimeout(() => {
				if (this.state.activeQuestion + 1 === this.state.quizz.length) {
					console.log('finished');
				}else{
					this.setState({
						activeQuestion: this.state.activeQuestion + 1
					})
					this.setState({
						quizClasses: null
					})
				}
				clearTimeout(answerTimeout);
			}, 1000);
		} else {
			this.setState({
				quizClasses: {
					[id]: 'error'
				}
			})
		}
	}

	render() {
		return (
			<div className="quiz">
				<div className="quiz-wrapper">
					<h1>Answer for the all questions.</h1>
					<ActiveQuiz
						question={this.state.quizz[this.state.activeQuestion].question}
						answers={this.state.quizz[this.state.activeQuestion].answers}
						onAnswerClick={this.onAnswerClick}
						quizLength={this.state.quizz.length}
						activeNumber={this.state.activeQuestion + 1}
						classState={this.state.quizClasses}
					/>
				</div>
			</div>
		);
	}
};
export default Quiz;