import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { LOG_IN } from '../../store/user/actionCreators';
import { loginUser } from '../../services';

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
		loginUser(inputs).then((data) => {
			localStorage.setItem('loginToken', data.result);
			dispatch(LOG_IN(data.user));
			navigate('/courses');
		});
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
