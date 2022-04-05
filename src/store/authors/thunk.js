import { addAuthor } from '../../services';
import { ADD_AUTHOR } from './actionCreators';

export function createAuthor(token, name) {
	return function (dispatch) {
		return addAuthor(token, { name }).then((result) => {
			dispatch(ADD_AUTHOR(result));
		});
	};
}
