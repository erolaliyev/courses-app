import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { REMOVE_COURSE } from '../../../../store/courses/actionCreators';

import Button from '../../../../common/Button/Button';

const CourseCard = ({
	id,
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
	const dispatch = useDispatch();
	const handleDelete = () => {
		dispatch(REMOVE_COURSE({ id }));
	};

	return (
		<div className='course-card'>
			<div className='main-info'>
				<h2 className='title'>{title}</h2>
				<p>{description}</p>
			</div>
			<div className='helper-info'>
				<p className='author-info'>
					<span className='text-info'>Authors:</span>
					<span className='author-names'>{authors && authors.join(', ')}</span>
				</p>
				<p>
					<span className='text-info'>Duration:</span>
					{` ${Math.trunc(duration / 60)}:${
						duration % 60 === 0 ? '00' : duration % 60
					} hours`}
				</p>
				<p>
					<span className='text-info'>Created:</span>{' '}
					{creationDate && creationDate.replaceAll('/', '.')}
				</p>
				<div className='buttons'>
					<Button buttonText='Show course' />
					<Button buttonText='Update' />
					<Button buttonText='Delete' onClick={handleDelete} />
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
