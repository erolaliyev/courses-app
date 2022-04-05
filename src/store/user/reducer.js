import * as actions from './actionTypes';

export default function reducer(
	state = { isAuth: false, name: '', email: '', token: '', role: '' },
	action
) {
	if (action.type === actions.LOG_IN) {
		return {
			...state,
			isAuth: true,
			name: action.payload.name,
			email: action.payload.email,
			token: action.payload.token,
		};
	} else if (action.type === actions.LOG_OUT) {
		return {
			...state,
			isAuth: false,
			token: '',
		};
	} else if (action.type === actions.SET_USER_ROLE) {
		return {
			...state,
			role: action.payload.role,
		};
	} else {
		return state;
	}
}
