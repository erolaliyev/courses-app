import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../common/Button/Button';
import { removeCourse } from '../../../../store/courses/thunk';
import { getRole, getToken } from '../../../../selectors';

const CourseCard = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const userRole = useSelector(getRole);
	const userToken = useSelector(getToken);

	const handleUpdate = () => {
		navigate('/courses/update/' + id);
	};

	const handleDelete = () => {
		dispatch(removeCourse(id, userToken));
	};

	const handleShowCourse = () => {
		navigate('/courses/' + id);
	};

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
		<div className='course-card' aria-label='course-card'>
			<div className='main-info'>
				<h2 className='title' aria-label='title'>
					{title}
				</h2>
				<p aria-label='description'>{description}</p>
			</div>
			<div className='helper-info'>
				<p className='author-info' aria-label='authors-info'>
					<span className='text-info'>Authors:</span>
					<span className='author-names'>{authors && authors.join(', ')}</span>
				</p>
				<p aria-label='duration'>
					<span className='text-info'>Duration:</span>
					{` ${calculateHours()}:${calculateMinutes()} hours`}
				</p>
				<p aria-label='creation-date'>
					<span className='text-info'>Created:</span>{' '}
					{creationDate && creationDate.replaceAll('/', '.')}
				</p>
				<div className='buttons'>
					<Button buttonText='Show course' onClick={handleShowCourse} />
					{userRole === 'admin' && (
						<Button buttonText='Update' onClick={handleUpdate} />
					)}

					{userRole === 'admin' && (
						<Button buttonText='Delete' onClick={handleDelete} />
					)}
				</div>
			</div>
		</div>
	);
};

CourseCard.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	duration: PropTypes.number.isRequired,
	creationDate: PropTypes.string.isRequired,
};

export default CourseCard;
