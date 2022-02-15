import React from 'react';

const Input = ({ name, type, placeholder, value, onChange, minlength }) => {
	return (
		<div>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				minLength={minlength ?? 0}
			/>
		</div>
	);
};

export default Input;
