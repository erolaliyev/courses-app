import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LOG_OUT } from '../../store/user/actionCreators';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	const dispatch = useDispatch();

	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		dispatch(LOG_OUT());
		navigate('/login');
		localStorage.removeItem('loginToken');
		localStorage.removeItem('username');
	};

	if (
		localStorage.getItem('loginToken') &&
		location.pathname !== '/Login' &&
		location.pathname !== '/registration'
	) {
		return (
			<div className='header'>
				<Logo />
				<div className='header-user'>
					<span>
						{localStorage.getItem('username')
							? localStorage.getItem('username')
							: ''}
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
