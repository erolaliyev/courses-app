export default function reducer(
	state = { isAuth: false, name: '', email: '', token: '' },
	action
) {
	if (action.type === 'LOG_IN') {
		return {
			isAuth: true,
			name: localStorage.getItem('username'),
			email: action.payload.email,
			token: localStorage.getItem('loginToken'),
		};
	} else if (action.type === 'LOG_OUT') {
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
