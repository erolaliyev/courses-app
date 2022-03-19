import * as actions from './actionTypes';

export function ADD_COURSE(description) {
	return {
		type: actions.ADD_COURSE,
		payload: description,
	};
}

export function REMOVE_COURSE(description) {
	console.log('actioncreator here remove one');
	return {
		type: actions.REMOVE_COURSE,
		payload: description,
	};
}
