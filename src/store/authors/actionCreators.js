import * as actions from './actionTypes';

export function ADD_AUTHOR(description) {
	return {
		type: actions.ADD_AUTHOR,
		payload: description,
	};
}
