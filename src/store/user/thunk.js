import { getCurrentUser } from '../../services';
import { SET_USER_ROLE } from './actionCreators';

export function getUserRole() {
	return function (dispatch) {
		return getCurrentUser().then((result) => {
			dispatch(SET_USER_ROLE(result));
		});
	};
}
