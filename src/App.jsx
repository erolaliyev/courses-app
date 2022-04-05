import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import CourseForm from './components/CourseForm/CourseForm';

import { PrivateRoute } from './components/PrivateRouter/PrivateRouter';
import { useSelector } from 'react-redux';
import { getToken } from './selectors';

const App = () => {
	const userToken = useSelector(getToken);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={userToken !== '' ? <Courses /> : <Login />} />
				<Route path='/registration' element={<Registration />} />
				<Route path='/login' element={<Login />} />
				<Route
					path='/courses'
					element={userToken !== '' ? <Courses /> : <Login />}
				/>
				<Route path='/courses/:courseId' element={<CourseInfo />} />
				<Route
					path='/courses/update/:courseId'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
				<Route
					path='/courses/add'
					element={
						<PrivateRoute>
							<CourseForm />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
