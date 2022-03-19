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

import { getCoursesList, getAuthorsList } from '../../services';

const Courses = () => {
	const dispatch = useDispatch();
	// console.log(dispatch);

	const [filteredCourses, setFilteredCourses] = useState([]);
	const filterCourseList = (updatedCourseList) => {
		setFilteredCourses(updatedCourseList);
	};

	const courses = useSelector((state) => state.courses);
	const authors = useSelector((state) => state.authors);
	// console.log(`a`);
	// console.log(courses);
	useEffect(() => {
		// console.log('here');
		getCoursesList().then((result) => {
			if (store.getState().courses.length === 0) {
				result.map((course) => dispatch(ADD_COURSE(course)));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		// if(store.getState().courses.len)
		getAuthorsList().then((result) => {
			if (store.getState().authors.length === 0) {
				result.map((author) => dispatch(ADD_AUTHOR(author)));
			}
		});
	}, [dispatch]);
	// console.log(store.getState().authors);
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
