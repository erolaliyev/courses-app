import React, { useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import CourseCard from './components/CourseCard/CourseCard';
import Button from '../../common/Button/Button';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
	const [filteredCourses, setFilteredCourses] = useState(mockedCoursesList);
	const [shouldRenderCreateCourse, setShouldRenderCreateCourse] =
		useState(false);

	const filterCourseList = (updatedCourseList) => {
		setFilteredCourses(updatedCourseList);
	};

	const handleOnClick = () =>
		setShouldRenderCreateCourse(!shouldRenderCreateCourse);

	return (
		<div>
			<div className='courses-searchbar'>
				<SearchBar filterCourseList={filterCourseList} />
				<Button buttonText='Add new course' onClick={handleOnClick} />
			</div>
			{shouldRenderCreateCourse ? (
				<CreateCourse onClick={handleOnClick} />
			) : (
				filteredCourses.map((course) => (
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
				))
			)}
		</div>
	);
};

export default Courses;
