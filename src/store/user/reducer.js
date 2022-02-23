import * as actions from './actionTypes';

export default function reducer(
	state = { isAuth: false, name: '', email: '', token: '' },
	action
) {
	if (action.type === actions.LOG_IN) {
		return {
			isAuth: true,
			name: localStorage.getItem('username'),
			email: action.payload.email,
			token: localStorage.getItem('loginToken'),
		};
	} else if (action.type === actions.LOG_OUT) {
		return {
			isAuth: false,
			name: '',
			email: '',
			token: '',
		};
	} else {
		return state;
	}
}
