import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import { createAuthor } from '../../store/authors/thunk';
import { updateCourse, addCourse } from '../../store/courses/thunk';
import { getAuthors, getCourses, getToken } from '../../selectors';

const CourseForm = () => {
	const dispatch = useDispatch();
	const { courseId } = useParams();
	const allAuthors = useSelector(getAuthors);
	const courses = useSelector(getCourses);
	const userToken = useSelector(getToken);

	function findCourse() {
		return courses.filter((course) => course.id === courseId)[0];
	}

	const [courseTitle, setCourseTitle] = useState(
		courseId === undefined ? '' : findCourse().title
	);
	const [courseDescription, setCourseDescription] = useState(
		courseId === undefined ? '' : findCourse().description
	);
	const [authorsList, setAuthorsList] = useState(
		courseId === undefined
			? allAuthors.map((author) => author.name)
			: allAuthors
					.filter((el) => !findCourse().authors.includes(el.id))
					.map((author) => author.name)
	);
	const [courseAuthorsList, setCourseAuthorsList] = useState(
		courseId === undefined
			? []
			: findCourse().authors.map(
					(id) => allAuthors.filter((author) => author.id === id)[0].name
			  )
	);
	const [customAuthor, setcustomAuthor] = useState('');
	const [courseDuration, setCourseDuration] = useState(
		courseId === undefined ? '' : findCourse().duration.toString()
	);

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
			setcustomAuthor('');
			dispatch(createAuthor(userToken, customAuthor));
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

	const handleButtonClick = () => {
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
		} else if (courseId) {
			dispatch(
				updateCourse(userToken, courseId, {
					title: courseTitle,
					description: courseDescription,
					duration: +courseDuration,
					authors: allAuthors
						.filter((author) => courseAuthorsList.includes(author.name))
						.map((author) => author.id),
				})
			);
			navigate('/courses');
		} else {
			dispatch(
				addCourse(userToken, {
					title: courseTitle,
					description: courseDescription,
					duration: +courseDuration,
					authors: allAuthors
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

				<Button
					buttonText={
						courseId === undefined ? 'Create course' : 'Update course'
					}
					onClick={handleButtonClick}
				/>
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

export default CourseForm;
