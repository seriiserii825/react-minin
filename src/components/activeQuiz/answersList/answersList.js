import React from 'react';
import AnswersItem from "./answersItem/answersItem";

const AnswersList = (props) => {
	console.log(props);
	return (
		<ul className="answers-list">
			{props.answers.map((item, index) => {
				return (
					<AnswersItem
						key={index}
						answers={item.text}
					/>
				)
			})}
		</ul>
	);
};

export default AnswersList;