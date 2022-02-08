import React from 'react';

const Input = ({ type, placeholder, value, onChange, minlength }) => {
	return (
		<div>
			<form>
				<label htmlFor=''>
					<input
						type={type}
						placeholder={placeholder}
						value={value}
						onChange={onChange}
						minLength={minlength ?? 0}
					/>
				</label>
			</form>
		</div>
	);
};

export default Input;
