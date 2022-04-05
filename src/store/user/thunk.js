import { getCurrentUser } from '../../services';
import { SET_USER_ROLE } from './actionCreators';

export function getUserRole(token) {
	return function (dispatch) {
		return getCurrentUser(token).then((result) => {
			dispatch(SET_USER_ROLE(result));
		});
	};
}
