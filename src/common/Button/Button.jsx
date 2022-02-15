import React from 'react';

const Button = ({ type, buttonText, onClick }) => (
	<button type={type ?? 'button'} onClick={onClick}>
		{buttonText}
	</button>
);

export default Button;
