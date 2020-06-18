import React from 'react';
import { connect } from 'react-redux';
import { toggle, minTick, secTick, swap, reset } from '../actions';

class Display extends React.Component {
	constructor(props) {
		super(props);

		this.audio = React.createRef();
	}

	componentDidMount() {
		setInterval(() => {
			if (this.props.toggleState && this.props.timer === 'session') {
				let activateTick = true;
				if (this.props.seconds === 0 && this.props.minutes.session !== 0) {
					this.props.minTick(this.props.timer);
				} else if (
					this.props.seconds === 0 &&
					this.props.minutes.session === 0
				) {
					this.props.reset(this.props.timer, this.props.counter.session);
					this.props.swap(this.props.timer);
					activateTick = false;
				}

				this.props.secTick(activateTick);
			}
		}, 1000);

		setInterval(() => {
			if (this.props.toggleState && this.props.timer === 'break') {
				let activateTick = true;
				if (this.props.seconds === 0 && this.props.minutes.break !== 0) {
					this.props.minTick(this.props.timer);
				} else if (this.props.seconds === 0 && this.props.minutes.break === 0) {
					this.props.reset(this.props.timer, this.props.counter.break);
					this.props.swap(this.props.timer);
					activateTick = false;
				}
				this.props.secTick(activateTick);
			}
		}, 1000);
	}

	componentDidUpdate(prevProps) {
		if (
			this.props.minutes.session === 0 &&
			this.props.seconds === 0 &&
			prevProps.minutes.session !== 1
		) {
			this.audio.current.play();
		}
		if (
			this.props.minutes.break === 0 &&
			this.props.seconds === 0 &&
			prevProps.minutes.break !== 1
		) {
			this.audio.current.play();
		}
		if (this.props.toggleState !== prevProps.toggleState) {
			this.audio.current.pause();
			this.audio.current.currentTime = 0;
		}
	}

	renderTimer() {
		const { minutes, seconds, timer } = this.props;
		if (timer === 'session') {
			return (
				<div className='time' id='time-left'>
					{minutes.session < 10 ? `0${minutes.session}` : minutes.session}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</div>
			);
		} else if (timer === 'break') {
			return (
				<div className='time' id='time-left'>
					{minutes.break < 10 ? `0${minutes.break}` : minutes.break}:
					{seconds < 10 ? `0${seconds}` : seconds}
				</div>
			);
		}
	}

	render() {
		return (
			<div className='ui segment display'>
				<div className='timer-label' id='timer-label'>
					{this.props.timer === 'session' ? 'Session' : 'Break'}
				</div>
				{this.renderTimer()}
				<audio
					ref={this.audio}
					id='beep'
					src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
				></audio>
			</div>
		);
	}
}

const mapStatetoProps = state => {
	return {
		seconds: state.seconds,
		minutes: state.minutes,
		toggleState: state.toggle,
		timer: state.timer,
		counter: state.counter,
	};
};

export default connect(mapStatetoProps, {
	toggle,
	minTick,
	secTick,
	swap,
	reset,
})(Display);
