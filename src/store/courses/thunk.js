import { deleteCourse, changeCourse, createCourse } from '../../services';
import { REMOVE_COURSE, UPDATE_COURSE, ADD_COURSE } from './actionCreators';

export function removeCourse(id, token) {
	return function (dispatch) {
		return deleteCourse(id, token).then(() => {
			dispatch(REMOVE_COURSE({ id }));
		});
	};
}

export function updateCourse(token, id, bodyParams) {
	return function (dispatch) {
		return changeCourse(token, id, bodyParams).then((result) => {
			dispatch(UPDATE_COURSE(result));
		});
	};
}

export function addCourse(token, bodyParams) {
	return function (dispatch) {
		return createCourse(token, bodyParams).then((result) => {
			dispatch(ADD_COURSE(result));
		});
	};
}
