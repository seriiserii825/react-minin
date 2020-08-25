import React from 'react';
import './App.css';
import Layout from "./layout/layout";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Layout>
					<h1>Layout</h1>
				</Layout>
			</div>
		);
	}
}
export default App;
