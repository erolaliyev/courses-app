import { v4 as uuidv4 } from 'uuid';

import * as actions from './actionTypes';

export default function reducer(state = [], action) {
	if (action.type === actions.ADD_AUTHOR) {
		return [
			...state,
			{
				id: action.payload.id ?? uuidv4(),
				name: action.payload.name,
			},
		];
	} else {
		return state;
	}
}
