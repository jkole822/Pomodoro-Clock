import { combineReducers } from 'redux';
import {
	TOGGLE,
	SECTICK,
	MINTICK,
	RESET,
	INCREMENT,
	DECREMENT,
	SWAP,
} from '../actions/types';

const secondsReducer = (state = 0, action) => {
	if (action.type === RESET) {
		if (action.payload === 'reset') {
			return 0;
		}
	} else if (action.type === SECTICK) {
		if (action.payload === true) {
			if (state > 0) {
				return state - 1;
			} else {
				return 59;
			}
		}
	} else if (action.type === INCREMENT || action.type === DECREMENT) {
		if (action.payload === action.payloadThree) {
			return 0;
		}
	}

	return state;
};

const minutesReducer = (state = { session: 25, break: 5 }, action) => {
	if (action.type === RESET) {
		if (action.payload === 'session') {
			let resetSession = action.payloadTwo;
			return { ...state, session: resetSession };
		} else if (action.payload === 'break') {
			let resetBreak = action.payloadTwo;
			return { ...state, break: resetBreak };
		}
		return { session: 25, break: 5 };
	} else if (action.type === MINTICK) {
		if (action.payload === 'session') {
			let updatedSession = state.session - 1;
			return { ...state, session: updatedSession };
		} else if (action.payload === 'break') {
			let updatedBreak = state.break - 1;
			return { ...state, break: updatedBreak };
		}
	} else if (action.type === INCREMENT) {
		if (action.payload === 'session' && state.session < 60) {
			if (action.payloadTwo.session !== state.session && state.session !== 59) {
				let updatedSession = state.session + 2;
				return { ...state, session: updatedSession };
			} else {
				let updatedSession = state.session + 1;
				return { ...state, session: updatedSession };
			}
		} else if (action.payload === 'break' && state.break < 60) {
			if (action.payloadTwo.break !== state.break && state.break !== 59) {
				let updatedBreak = state.break + 2;
				return { ...state, break: updatedBreak };
			} else {
				let updatedBreak = state.break + 1;
				return { ...state, break: updatedBreak };
			}
		}
	} else if (action.type === DECREMENT) {
		if (action.payload === 'session' && state.session > 1) {
			if (action.payloadTwo.session !== state.session) {
				return state;
			} else {
				let updatedSession = state.session - 1;
				return { ...state, session: updatedSession };
			}
		} else if (action.payload === 'break' && state.break > 1) {
			if (action.payloadTwo.break !== state.break) {
				return state;
			} else {
				let updatedBreak = state.break - 1;
				return { ...state, break: updatedBreak };
			}
		}
	}
	return state;
};

const counterReducer = (state = { session: 25, break: 5 }, action) => {
	if (action.type === RESET) {
		if (action.payload === 'reset') {
			return { session: 25, break: 5 };
		}
	} else if (action.type === INCREMENT) {
		if (action.payload === 'session' && state.session < 60) {
			let updatedSession = state.session + 1;
			return { ...state, session: updatedSession };
		} else if (action.payload === 'break' && state.break < 60) {
			let updatedBreak = state.break + 1;
			return { ...state, break: updatedBreak };
		}
	} else if (action.type === DECREMENT) {
		if (action.payload === 'session' && state.session > 1) {
			let updatedSession = state.session - 1;
			return { ...state, session: updatedSession };
		} else if (action.payload === 'break' && state.break > 1) {
			let updatedBreak = state.break - 1;
			return { ...state, break: updatedBreak };
		}
	}

	return state;
};

const toggleReducer = (state = false, action) => {
	if (action.type === TOGGLE) {
		return !state;
	} else if (action.type === RESET) {
		if (action.payload === 'reset') {
			return false;
		}
	}

	return state;
};

const timerReducer = (state = 'session', action) => {
	if (action.type === SWAP) {
		if (action.payload === 'session') {
			return 'break';
		} else if (action.payload === 'break') {
			return 'session';
		}
	}

	return state;
};

export default combineReducers({
	seconds: secondsReducer,
	minutes: minutesReducer,
	toggle: toggleReducer,
	counter: counterReducer,
	timer: timerReducer,
});
