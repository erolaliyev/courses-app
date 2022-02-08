import React from 'react';
import Button from '../../../../common/Button/Button';

const CourseCard = ({
	title,
	description,
	authors,
	duration,
	creationDate,
}) => {
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
				<Button buttonText='Show course' />
			</div>
		</div>
	);
};

export default CourseCard;
