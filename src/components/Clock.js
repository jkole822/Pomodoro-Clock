import React from 'react';
import Incrementor from './Incrementor';
import Display from './Display';
import Buttons from './Buttons';
import { connect } from 'react-redux';

class Clock extends React.Component {
	render() {
		return (
			<div className='ui container'>
				<h1>Pomodoro Clock</h1>
				<div className='increment-decrement'>
					<Incrementor
						timer={'session'}
						count={this.props.counter.session}
						activeTimer={this.props.timer}
					/>
					<Incrementor
						timer={'break'}
						count={this.props.counter.break}
						activeTimer={this.props.timer}
					/>
				</div>
				<Display />
				<Buttons />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { timer: state.timer, counter: state.counter };
};

export default connect(mapStateToProps)(Clock);
