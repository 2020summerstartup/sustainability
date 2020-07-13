import React from "react";

import "./Leaderboard3.css";

class Leaderboard extends React.Component {
	render() {
		var data = this.props.data || [];
			//rows = []; // Don't need to initialize rows
		var rows = new Array(data.length > 10 ? 10 : data.length).fill(0).map((z, i) => {
			var un = data[i].dorm,
				en = data[i].points
			return (
				<li key={i}>
					<img alt = '' src={'data:image/png;base64,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'} onError={e => e.target.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'} />
					<mark>{un}</mark>
					<small>{en}</small>
				</li>
			);
		});
		return (
			<div className='leaderboard'>
				<h1>{this.props.title || 'Leaderboard'}</h1>
				<ol>{rows}</ol>
			</div>
		)
	}
}

class Leaderboard3 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
		setTimeout(() => this.update([
			{ userId: 1, dorm: 'Case', points: 500},
			{ userId: 2, dorm: 'East', points: 475},
			{ userId: 3, dorm: 'South', points: 450},
			{ userId: 4, dorm: 'West', points: 400},
			{ userId: 5, dorm: 'Sontag', points: 380},
			{ userId: 6, dorm: 'Drinkward', points: 350},
			{ userId: 7, dorm: 'Atwood', points: 300},
			{ userId: 8, dorm: 'Linde', points: 120},
			{ userId: 9, dorm: 'North', points: 100}
		]), 500);
	}

	update(data) {
		this.setState({ data: data });
	}

	render() {
        return <Leaderboard title='Dorm Leaderboard' data={this.state.data} />
	}

}

export default Leaderboard3;