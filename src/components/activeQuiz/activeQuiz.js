import React from 'react';
import "./activeQuiz.scss";

const ActiveQuiz = () => {
	return (
		<div className="active-quiz">
			<p className="active-quiz__header">
				<span><strong>2.</strong> How are you?</span>
				<small>4 from 12</small>
			</p>
			<ul>
				<li>1.</li>
				<li>2.</li>
				<li>3.</li>
				<li>4.</li>
			</ul>
		</div>
	);
};

export default ActiveQuiz;