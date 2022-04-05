import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import store from '../../store/index';
import { ADD_COURSE } from '../../store/courses/actionCreators';
import { ADD_AUTHOR } from '../../store/authors/actionCreators';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { getCoursesList, getAuthorsList } from '../../services';
import { getUserRole } from '../../store/user/thunk';
import { getAuthors, getCourses, getRole, getToken } from '../../selectors';

const Courses = () => {
	const dispatch = useDispatch();

	const [filteredCourses, setFilteredCourses] = useState([]);

	const filterCourseList = (updatedCourseList) => {
		setFilteredCourses(updatedCourseList);
	};

	const courses = useSelector(getCourses);
	const authors = useSelector(getAuthors);
	const userRole = useSelector(getRole);
	const userToken = useSelector(getToken);

	useEffect(() => {
		getCoursesList().then((result) => {
			if (store.getState().courses.length === 0) {
				result.map((course) => dispatch(ADD_COURSE(course)));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		getAuthorsList().then((result) => {
			if (store.getState().authors.length === 0) {
				result.map((author) => dispatch(ADD_AUTHOR(author)));
			}
		});
	}, [dispatch]);

	useEffect(() => {
		dispatch(getUserRole(userToken));
	}, [dispatch, userToken]);

	useEffect(() => setFilteredCourses(courses), [courses]);

	return (
		<div>
			<div className='courses-searchbar'>
				<SearchBar filterCourseList={filterCourseList} />
				{userRole === 'admin' && (
					<Link to='/courses/add'>
						<Button buttonText='Add new course' />
					</Link>
				)}
			</div>
			{filteredCourses.map((course) => (
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
