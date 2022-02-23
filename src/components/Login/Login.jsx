import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

const Login = () => {
	const dispatch = useDispatch();

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
			const loginUser = async () => {
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				};
				const response = await fetch(
					'http://localhost:3000/login',
					requestOptions
				);
				const data = await response.json();
				if (data.successful) {
					localStorage.setItem('loginToken', data.result);
					dispatch({ type: 'LOG_IN', payload: { email: inputs.email } });
					navigate('/courses');
					return;
				} else {
					const errorMessage = `An error has occured: ${data.errors[0]}`;
					throw new Error(errorMessage);
				}
			};
			loginUser();
		} catch (error) {
			console.error('There was an error!', error);
		}
	};

	return (
		<div className='login'>
			<h1>Login</h1>
			<form
				action='http://localhost:3001/login'
				method='post'
				onSubmit={handleSubmit}
			>
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
				<Button type='submit' buttonText='Login' onClick={handleSubmit} />
			</form>
			<p>
				If you don't have an account, you can register{' '}
				<Link to='/registration'>here</Link>
			</p>
		</div>
	);
};

export default Login;
