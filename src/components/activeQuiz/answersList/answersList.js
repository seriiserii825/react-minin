import React from 'react';
import AnswersItem from "./answersItem/answersItem";

const AnswersList = (props) => {
	return (
		<ul className="answers-list">
			{props.answers.map((item, index) => {
				return (
					<AnswersItem
						key={index}
						answers={item.text}
						id={item.id}
						onAnswerClick={props.onAnswerClick}
						classState={props.classState ? props.classState[item.id] : null}
					/>
				)
			})}
		</ul>
	);
};

export default AnswersList;