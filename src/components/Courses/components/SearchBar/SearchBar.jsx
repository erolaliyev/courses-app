import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';
import { getCourses } from '../../../../selectors';

const SearchBar = ({ filterCourseList }) => {
	const [searchInput, setSearchInput] = useState('');
	const courses = useSelector(getCourses);

	const searchItems = (event) => {
		if (event.target.value === '') {
			filterCourseList(courses);
		}
		setSearchInput(event.target.value);
	};

	const filterCourses = () => {
		filterCourseList(
			courses.filter((course) =>
				course.title.toLowerCase().includes(searchInput.toLowerCase())
			)
		);
	};

	return (
		<div className='searchBar'>
			<Input
				name='searchInput'
				type='text'
				placeholder='Enter course name...'
				value={searchInput}
				onChange={searchItems}
			/>
			<Button buttonText='Search' onClick={filterCourses} />
		</div>
	);
};

SearchBar.propTypes = {
	filterCourseList: PropTypes.func.isRequired,
};

export default SearchBar;
