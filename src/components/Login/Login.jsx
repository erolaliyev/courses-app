import React, { useState } from 'react';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ onClick }) => {
	const [inputs, setInputs] = useState({});

	const handleChange = (e) =>
		setInputs((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));

	let navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Clicked on button');
		try {
			const loginUser = async () => {
				const requestOptions = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(inputs),
				};
				console.log('inside loginUser');
				const response = await fetch(
					'http://localhost:3000/login',
					requestOptions
				);
				const data = await response.json();
				if (data.successful) {
					navigate('/courses');
					onClick();
					console.log(data.result);
					localStorage.setItem('loginToken', data.result);
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
