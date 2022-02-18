import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from '../../common/Button/Button';

import { mockedCoursesList, mockedAuthorsList } from '../../constants';

const CourseInfo = () => {
	let { courseId } = useParams();

	const selectedCourse = mockedCoursesList.find(
		(course) => course.id === courseId
	);

	let { id, title, description, creationDate, duration, authors } =
		selectedCourse;

	return (
		<div className='course-info'>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>
				<span className='bold-text'>ID</span>: {id}
			</p>
			<p>
				<span className='bold-text'>Duration</span>:{' '}
				{` ${Math.trunc(duration / 60)}:${
					duration % 60 === 0 ? '00' : duration % 60
				} hours`}
			</p>
			<p>
				<span className='bold-text'>Created</span>:{' '}
				{creationDate.replaceAll('/', '.')}
			</p>
			<p>
				<span className='bold-text'>Authors</span>:{' '}
				{authors
					.map(
						(id) => mockedAuthorsList.find((author) => author.id === id).name
					)
					.join(', ')}
			</p>
			<Link to='/courses'>
				<Button buttonText='Back to courses' />
			</Link>
		</div>
	);
};

export default CourseInfo;
