import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../common/Button/Button';
import { getAuthors, getCourses } from '../../selectors';

const CourseInfo = () => {
	let { courseId } = useParams();
	const courses = useSelector(getCourses);
	const courseAuthors = useSelector(getAuthors);

	const selectedCourse = courses.find((course) => course.id === courseId);

	let { id, title, description, creationDate, duration, authors } =
		selectedCourse;

	const calculateHours = () => {
		const hour = Math.trunc(duration / 60);
		if (hour < 10) {
			return ' 0' + hour;
		} else {
			return ' ' + hour;
		}
	};

	const calculateMinutes = () => {
		const minute = duration % 60;
		if (minute < 10) {
			return '0' + minute + ' ';
		} else {
			return minute + ' ';
		}
	};

	return (
		<div className='course-info'>
			<h1>{title}</h1>
			<p>{description}</p>
			<p>
				<span className='bold-text'>ID</span>: {id}
			</p>
			<p>
				<span className='bold-text'>Duration</span>:{' '}
				{` ${calculateHours()}:${calculateMinutes()} hours`}
			</p>
			<p>
				<span className='bold-text'>Created</span>:{' '}
				{creationDate.replaceAll('/', '.')}
			</p>
			<p>
				<span className='bold-text'>Authors</span>:{' '}
				{authors
					.map((id) => courseAuthors.find((author) => author.id === id).name)
					.join(', ')}
			</p>
			<Link to='/courses'>
				<Button buttonText='Back to courses' />
			</Link>
		</div>
	);
};

export default CourseInfo;
