import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ name, type, placeholder, value, onChange, minlength }) => {
	return (
		<div>
			<input
				name={name}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				minLength={minlength}
			/>
		</div>
	);
};

Input.defaultProps = {
	minlength: 0,
};

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	minlength: PropTypes.number,
};

export default Input;
