import React from 'react';

import Logo from './components/Logo/Logo';
import Button from '../../common/Button/Button';

const Header = () => {
	return (
		<div className='header'>
			<Logo />
			<div className='header-user'>
				<p className='header-userName'>Erol</p>
				<Button buttonText='Logout' />
			</div>
		</div>
	);
};

export default Header;
