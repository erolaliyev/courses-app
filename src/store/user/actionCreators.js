import * as actions from './actionTypes';

export function LOG_IN(description) {
	return {
		type: actions.LOG_IN,
		payload: description,
	};
}

export function LOG_OUT() {
	return {
		type: actions.LOG_OUT,
	};
}

export function SET_USER_ROLE(description) {
	return {
		type: actions.SET_USER_ROLE,
		payload: description,
	};
}
