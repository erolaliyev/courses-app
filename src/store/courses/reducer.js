import * as actions from './actionTypes';

export default function reducer(state = [], action) {
	if (action.type === actions.ADD_COURSE) {
		return [
			...state,
			{
				id: action.payload.id,
				title: action.payload.title,
				description: action.payload.description,
				creationDate: action.payload.creationDate,
				duration: action.payload.duration,
				authors: action.payload.authors,
			},
		];
	} else if (action.type === actions.REMOVE_COURSE) {
		return state.filter((course) => course.id !== action.payload.id);
	} else if (action.type === actions.UPDATE_COURSE) {
		let removed = state.filter((course) => course.id !== action.payload.id);
		removed.push(action.payload);
		return removed;
	} else {
		return state;
	}
}
