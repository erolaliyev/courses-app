import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_OUT } from '../../store/user/actionCreators';
import { logoutUser } from '../../services';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';
import { getName, getRole, getToken } from '../../selectors';

const Header = () => {
	const dispatch = useDispatch();
	const userRole = useSelector(getRole);
	const userName = useSelector(getName);
	const userToken = useSelector(getToken);

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		logoutUser(userToken);
		dispatch(LOG_OUT());
		navigate('/login');
	};

	if (
		userToken !== '' &&
		location.pathname !== '/Login' &&
		location.pathname !== '/registration'
	) {
		return (
			<div className='header'>
				<Logo />
				<div className='header-user'>
					<span aria-label='username'>
						{userName ?? (userRole === 'admin' ? 'Admin' : '')}
					</span>
					<Button buttonText='Log out' onClick={handleClick} />
				</div>
			</div>
		);
	} else {
		return (
			<div className='header'>
				<Logo />
			</div>
		);
	}
};

export default Header;
