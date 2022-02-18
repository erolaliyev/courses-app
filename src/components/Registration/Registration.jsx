import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const Registration = () => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) =>
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const registerUser = async () => {
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				};
				const response = await fetch(
					'http://localhost:3000/register',
					requestOptions
				);
				const data = await response.json();
				if (data.successful) {
					navigate('/login');
					localStorage.setItem('username', inputs.name);
					return;
				} else {
					const errorMessage = `An error has occured: ${data.errors[0]}`;
					throw new Error(errorMessage);
				}
			};
			registerUser();
		} catch (error) {
			console.error('There was an error!', error);
		}
	};

	return (
		<div className='registration'>
			<h1>Registration</h1>
			<form
				action='http://localhost:3001/registration'
				method='post'
				onSubmit={handleSubmit}
			>
				<div>
					<label htmlFor='name'>Name:</label>
					<Input
						name='name'
						type='text'
						placeholder='Enter name'
						value={inputs.name || ''}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='email'>Email</label>
					<Input
						name='email'
						type='email'
						placeholder='Enter email'
						value={inputs.email || ''}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='password'>Password</label>
					<Input
						name='password'
						type='password'
						placeholder='Enter password'
						value={inputs.password || ''}
						onChange={handleChange}
					/>
				</div>
				<Button
					type='submit'
					buttonText='Registration'
					onClick={handleSubmit}
				/>
			</form>
			<p>
				If you have an account you can login <Link to='/login'>here</Link>
			</p>
		</div>
	);
};

export default Registration;
