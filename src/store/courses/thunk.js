import { deleteCourse, changeCourse, createCourse } from '../../services';
import { REMOVE_COURSE, UPDATE_COURSE, ADD_COURSE } from './actionCreators';

export function removeCourse(id) {
	return function (dispatch) {
		return deleteCourse(id).then(() => {
			dispatch(REMOVE_COURSE({ id }));
		});
	};
}

export function updateCourse(id, bodyParams) {
	return function (dispatch) {
		return changeCourse(id, bodyParams).then((result) => {
			dispatch(UPDATE_COURSE(result));
		});
	};
}

export function addCourse(bodyParams) {
	console.log('it is called');
	return function (dispatch) {
		console.log('we are inside');
		return createCourse(bodyParams).then((result) => {
			console.log('inside third layer/dream');
			dispatch(ADD_COURSE(result));
		});
	};
}
