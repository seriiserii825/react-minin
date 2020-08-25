import React from 'react';
import './App.css';
import Layout from "./layout/layout";
import Quiz from "./containers/quiz/quiz";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<Quiz/>
				</Layout>
			</div>
		);
	}
}
export default App;
