import React from 'react';

const Button = ({ buttonText, onClick }) => (
	<button onClick={onClick}>{buttonText}</button>
);

export default Button;
