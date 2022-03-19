import { v4 as uuidv4 } from 'uuid';

import * as actions from './actionTypes';

export default function reducer(state = [], action) {
	if (action.type === actions.ADD_COURSE) {
		return [
			...state,
			{
				id: action.payload.id ?? uuidv4(),
				title: action.payload.title,
				description: action.payload.description,
				creationDate: action.payload.creationDate,
				duration: action.payload.duration,
				authors: action.payload.authors,
			},
		];
	} else if (action.type === actions.REMOVE_COURSE) {
		console.log(action.payload.id);
		return state.filter((course) => course.id !== action.payload.id);
	} else {
		return state;
	}
}
