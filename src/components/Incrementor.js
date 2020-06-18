import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Incrementor extends React.Component {
	handleIncrement = () => {
		if (!this.props.toggleState) {
			this.props.increment(
				this.props.timer,
				this.props.counter,
				this.props.activeTimer
			);
		}
	};

	handleDecrement = () => {
		if (!this.props.toggleState) {
			this.props.decrement(
				this.props.timer,
				this.props.counter,
				this.props.activeTimer
			);
		}
	};

	render() {
		return (
			<div className='ui segment'>
				<div className='length-label' id={`${this.props.timer}-label`}>
					{this.props.timer === 'session' ? 'Session Length' : 'Break Length'}
				</div>
				<div className='increment-buttons'>
					<i
						className='caret square up big icon'
						id={`${this.props.timer}-increment`}
						onClick={this.handleIncrement}
					></i>
					<div className='timer-length' id={`${this.props.timer}-length`}>
						{this.props.count}
					</div>
					<i
						className='caret square down big icon'
						id={`${this.props.timer}-decrement`}
						onClick={this.handleDecrement}
					></i>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		toggleState: state.toggle,
		counter: state.counter,
	};
};

export default connect(mapStateToProps, { increment, decrement })(Incrementor);
