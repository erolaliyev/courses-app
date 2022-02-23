import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import store from '../../store/index';
import { ADD_COURSE } from '../../store/courses/actionCreators';
import { ADD_AUTHOR } from '../../store/authors/actionCreators';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedAuthorsList } from '../../constants';

const Courses = () => {
	const dispatch = useDispatch();
	// console.log(dispatch);

	const [filteredCourses, setFilteredCourses] = useState([]);
	const filterCourseList = (updatedCourseList) => {
		setFilteredCourses(updatedCourseList);
	};

	const courses = useSelector((state) => state.courses);
	const authors = useSelector((state) => state.authors);
	console.log(`a`);
	console.log(courses);
	useEffect(() => {
		async function getCoursesList() {
			const requestOptions = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await fetch(
				'http://localhost:3000/courses/all',
				requestOptions
			);
			const data = await response.json();
			// console.log(data.result);
			if (data.successful) {
				console.log(data.result);
				console.log('store courses');
				console.log(store.getState().courses);
				console.log(`dispatch that add course pennypacke`);
				if (store.getState().courses.length === 0) {
					data.result.map((result) => dispatch(ADD_COURSE(result)));
				}
				return;
			} else {
				const errorMessage = `An error has occured: ${data.result}`;
				throw new Error(errorMessage);
			}
		}
		// if(store.getState().courses.len)
		getCoursesList();
	}, [dispatch]);

	useEffect(() => {
		async function getAuthorsList() {
			const requestOptions = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			};
			const response = await fetch(
				'http://localhost:3000/authors/all',
				requestOptions
			);
			const data = await response.json();
			// console.log(data.result);
			if (data.successful) {
				console.log(data.result);
				console.log('store authors');
				console.log(store.getState().authors);
				// console.log(`dispatch that add course pennypacke`);
				if (store.getState().authors.length === 0) {
					data.result.map((result) => dispatch(ADD_AUTHOR(result)));
				}
				return;
			} else {
				const errorMessage = `An error has occured: ${data.result}`;
				throw new Error(errorMessage);
			}
		}
		// if(store.getState().courses.len)
		getAuthorsList();
	}, [dispatch]);
	console.log(store.getState().authors);
	return (
		<div>
			<div className='courses-searchbar'>
				<SearchBar filterCourseList={filterCourseList} />
				<Link to='/courses/add'>
					<Button buttonText='Add new course' />
				</Link>
			</div>
			{courses &&
				courses.map((course) => (
					<CourseCard
						key={course.id}
						id={course.id}
						title={course.title}
						description={course.description}
						authors={authors
							.filter((author) => course.authors.includes(author.id))
							.map((author) => author.name)}
						duration={course.duration}
						creationDate={course.creationDate}
					/>
				))}
		</div>
	);
};

export default Courses;
