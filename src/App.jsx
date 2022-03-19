import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';

const App = () => {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						localStorage.getItem('loginToken') !== null ? (
							<Courses />
						) : (
							<Login />
						)
					}
				/>
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route path='/courses' element={<Courses />} />
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route path='/courses/add' element={<CourseForm />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
