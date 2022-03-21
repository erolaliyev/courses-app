import * as actions from './actionTypes';

export default function reducer(state = [], action) {
	if (action.type === actions.ADD_AUTHOR) {
		return [
			...state,
			{
				id: action.payload.id,
				name: action.payload.name,
			},
		];
	} else {
		return state;
	}
}
