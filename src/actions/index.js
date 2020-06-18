import {
	TOGGLE,
	SECTICK,
	MINTICK,
	RESET,
	INCREMENT,
	DECREMENT,
	SWAP,
} from './types';

export const toggle = () => {
	return {
		type: TOGGLE,
	};
};

export const secTick = boolean => {
	return {
		type: SECTICK,
		payload: boolean,
	};
};

export const minTick = timer => {
	return {
		type: MINTICK,
		payload: timer,
	};
};

export const reset = (timer, counter) => {
	return {
		type: RESET,
		payload: timer,
		payloadTwo: counter,
	};
};

export const increment = (thisTimer, minutes, activeTimer) => {
	return {
		type: INCREMENT,
		payload: thisTimer,
		payloadTwo: minutes,
		payloadThree: activeTimer,
	};
};

export const decrement = (thisTimer, minutes, activeTimer) => {
	return {
		type: DECREMENT,
		payload: thisTimer,
		payloadTwo: minutes,
		payloadThree: activeTimer,
	};
};

export const swap = timer => {
	return {
		type: SWAP,
		payload: timer,
	};
};
