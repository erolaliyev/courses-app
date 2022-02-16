import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	let navigate = useNavigate();
	let location = useLocation();

	const handleClick = () => {
		navigate('/login');
		localStorage.removeItem('loginToken');
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
