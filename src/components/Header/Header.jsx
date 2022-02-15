import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = ({ isLoggedIn, onClick }) => {
	// const [isLoggedIn, setIsLoggedIn] = useState(true);

	let navigate = useNavigate();

	const handleClick = () => {
		if (isLoggedIn) {
			navigate('/login');
			localStorage.removeItem('loginToken');
		}
		onClick();
	};

	if (isLoggedIn) {
		return (
			<div className='header'>
				<Logo />
				<div className='header-user'>
					{/* {isLoggedIn && <span>Erol</span>}
					{isLoggedIn && <Button buttonText='Log out' onClick={handleClick} />} */}
					<span>Erol</span>
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
