import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);

	const filterCourseList = (updatedCourseList) => {
		setFilteredCourses(updatedCourseList);
	};

	return (
		<div>
			<div className='courses-searchbar'>
				<SearchBar filterCourseList={filterCourseList} />
				<Link to='/courses/add'>
					<Button buttonText='Add new course' />
				</Link>
			</div>
			{filteredCourses.map((course) => (
				<CourseCard
					key={course.id}
					title={course.title}
					description={course.description}
					authors={mockedAuthorsList
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
