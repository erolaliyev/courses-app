import React from 'react';

const iconPath = process.env.PUBLIC_URL + '/assets/';

const Logo = () => <img src={`${iconPath}logo.png`} alt='logo' />;

export default Logo;
