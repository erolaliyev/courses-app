import { addAuthor } from '../../services';
import { ADD_AUTHOR } from './actionCreators';

export function createAuthor(name) {
	return function (dispatch) {
		return addAuthor({ name }).then((result) => {
			dispatch(ADD_AUTHOR(result));
		});
	};
}
