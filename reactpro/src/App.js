import React, { Component } from 'react';
import './index.scss'

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
		}
	}

	add () {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		return (
			<div>
				<h1 class="count">{this.state.count}</h1>
				<div class="parent">
					<h1>i am child</h1>
				</div>
				<button onClick={() => this.add() }>add 1</button>
			</div>
		)
	}
}