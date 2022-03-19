import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { ADD_COURSE } from '../../store/courses/actionCreators';
import { ADD_AUTHOR } from '../../store/authors/actionCreators';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import { mockedAuthorsList, mockedCoursesList } from '../../constants';

const CreateCourse = () => {
	const dispatch = useDispatch();
	const authors = useSelector((state) => state.authors);
	// console.log(authors);
	const [courseTitle, setCourseTitle] = useState('');
	const [courseDescription, setCourseDescription] = useState('');
	const [authorsList, setAuthorsList] = useState(
		authors.map((author) => author.name)
	);
	const [courseAuthorsList, setCourseAuthorsList] = useState([]);
	const [customAuthor, setcustomAuthor] = useState('');
	const [courseDuration, setCourseDuration] = useState('');

	let navigate = useNavigate();

	const handleTitleChange = (event) => {
		setCourseTitle(event.target.value);
	};

	const handleDescriptionChange = (event) => {
		setCourseDescription(event.target.value);
	};

	const handleAddAuthor = (authorName) => {
		const indexOfAuthor = authorsList.indexOf(authorName);
		if (indexOfAuthor > -1) {
			setCourseAuthorsList([
				...courseAuthorsList,
				...authorsList.slice(indexOfAuthor, indexOfAuthor + 1),
			]);
			authorsList.splice(indexOfAuthor, 1);
			setAuthorsList([...authorsList]);
		}
	};

	const handleDeleteAuthor = (authorName) => {
		const indexOfAuthor = courseAuthorsList.indexOf(authorName);
		if (indexOfAuthor > -1) {
			setAuthorsList([
				...authorsList,
				courseAuthorsList.slice(indexOfAuthor, indexOfAuthor + 1),
			]);
			courseAuthorsList.splice(indexOfAuthor, 1);
			setCourseAuthorsList([...courseAuthorsList]);
		}
	};

	const handleCreateAuthor = () => {
		if (customAuthor.length <= 2) {
			alert('Author name length should be at least 2 characters');
		} else {
			setAuthorsList([...authorsList, customAuthor]);
			mockedAuthorsList.push({
				id: uuidv4(),
				name: customAuthor,
			});
			setcustomAuthor('');
			dispatch(ADD_AUTHOR({ name: customAuthor }));
		}
	};

	const handleCustomAuthorChange = (event) => {
		setcustomAuthor(event.target.value);
	};

	const handleCourseDurationChange = (event) => {
		const courseDuration = event.target.value;
		if (!isNaN(courseDuration)) {
			if (+courseDuration === 0 && courseDuration !== '') {
				alert('Course duration should be more than 0 minute');
				setCourseDuration('');
			} else {
				setCourseDuration(courseDuration);
			}
		}
	};

	const calculateHours = () => {
		const hour = Math.trunc(courseDuration / 60);
		if (hour < 10) {
			return ' 0' + hour;
		} else {
			return ' ' + hour;
		}
	};

	const calculateMinutes = () => {
		const minute = courseDuration % 60;
		if (minute < 10) {
			return '0' + minute + ' ';
		} else {
			return minute + ' ';
		}
	};

	const handleCreateCourse = () => {
		if (
			courseTitle === '' ||
			courseDescription === '' ||
			courseDuration === ''
		) {
			alert('Please, fill in all fields');
		} else if (courseDescription.length < 2) {
			alert('Description text length should be at least 2 characters');
		} else if (courseAuthorsList.length === 0) {
			alert('Please, add an author');
		} else {
			mockedCoursesList.push({
				id: uuidv4(),
				title: courseTitle,
				description: courseDescription,
				creationDate:
					new Date().getDate() +
					'/' +
					(new Date().getMonth() + 1) +
					'/' +
					new Date().getFullYear(),
				duration: +courseDuration,
				authors: authors
					.filter((author) => courseAuthorsList.includes(author.name))
					.map((author) => author.id),
			});

			dispatch(
				ADD_COURSE({
					title: courseTitle,
					description: courseDescription,
					creationDate:
						new Date().getDate() +
						'/' +
						(new Date().getMonth() + 1) +
						'/' +
						new Date().getFullYear(),
					duration: +courseDuration,
					authors: authors
						.filter((author) => courseAuthorsList.includes(author.name))
						.map((author) => author.id),
				})
			);
			navigate('/courses');
		}
	};

	return (
		<div>
			<div className='title-details'>
				<div>
					<p>Title</p>
					<Input
						name='courseTitle'
						type='text'
						placeholder='Enter title...'
						minLength='2'
						value={courseTitle}
						onChange={handleTitleChange}
					/>
				</div>

				<Button buttonText='Create course' onClick={handleCreateCourse} />
			</div>
			<div className='description-details'>
				<p>Description</p>
				<textarea
					name='description'
					id='description'
					cols='50'
					rows='5'
					minLength='2'
					placeholder='Enter description...'
					value={courseDescription}
					onChange={handleDescriptionChange}
				></textarea>
			</div>
			<div className='author-details'>
				<div className='new-author'>
					<h3>Add Author</h3>
					<p>Author name</p>
					<div className='create-author'>
						<Input
							name='newCreatedAuthor'
							type='text'
							placeholder='Enter author name...'
							value={customAuthor}
							onChange={handleCustomAuthorChange}
						/>
						<Button buttonText='Create author' onClick={handleCreateAuthor} />
					</div>

					<h3>Duration</h3>
					<p>Duration</p>
					<Input
						name='courseDuration'
						type='text'
						placeholder='Enter duration in minutes...'
						value={courseDuration}
						onChange={handleCourseDurationChange}
					/>
					<p>
						Duration: {calculateHours()}:{calculateMinutes()} hours
					</p>
				</div>
				<div className='existing-author'>
					<h3>Authors</h3>
					{authorsList.map((author, index) => {
						return (
							<div key={index} className='author-name'>
								<p>{author}</p>
								<Button
									buttonText='Add author'
									onClick={() => handleAddAuthor(author)}
								/>
							</div>
						);
					})}
					<h3>Course Authors</h3>
					<div className='course-author'>
						{courseAuthorsList.length ? (
							courseAuthorsList.map((author, index) => {
								return (
									<div key={index} className='author-name'>
										<p>{author}</p>
										<Button
											buttonText='Delete author'
											onClick={() => handleDeleteAuthor(author)}
										/>
									</div>
								);
							})
						) : (
							<p>Author list is empty</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
