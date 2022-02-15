import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CreateCourse from './components/CreateCourse/CreateCourse';

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleClick = () => {
		setIsLoggedIn(!isLoggedIn);
		console.log(isLoggedIn);
	};

	return (
		<BrowserRouter>
			<Header isLoggedIn={isLoggedIn} onClick={handleClick} />
			<Routes>
				<Route
					path='/'
					element={
						localStorage.getItem('loginToken') === null ? (
							<Courses />
						) : (
							<Login onClick={handleClick} />
						)
					}
				/>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login onClick={handleClick} />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CreateCourse />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
