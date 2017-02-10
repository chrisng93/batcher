import React from 'react';
import SignIn from './SignIn';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="app">
				<SignIn />
			</div>
		);
	}
}
