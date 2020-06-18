import React from 'react';
import { connect } from 'react-redux';
import { toggle, reset, swap } from '../actions';

class Buttons extends React.Component {
	handleToggleClick = () => {
		this.props.toggle();
	};

	handleResetClick = () => {
		this.props.reset('reset');
		this.props.swap('break');
	};

	render() {
		return (
			<div className='start-stop'>
				<i
					className={
						this.props.toggleState ? 'pause large icon' : 'play large icon'
					}
					id='start_stop'
					onClick={this.handleToggleClick}
				></i>
				<i
					className='undo large icon'
					id='reset'
					onClick={this.handleResetClick}
				></i>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { toggleState: state.toggle };
};

export default connect(mapStateToProps, { toggle, reset, swap })(Buttons);
