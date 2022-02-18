import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../../../common/Input/Input';
import Button from '../../../../common/Button/Button';

import { mockedCoursesList } from '../../../../constants';

const SearchBar = ({ filterCourseList }) => {
	const [searchInput, setSearchInput] = useState('');

	const searchItems = (event) => {
		if (event.target.value === '') {
			filterCourseList(mockedCoursesList);
		}
		setSearchInput(event.target.value);
	};

	const filterCourses = () => {
		filterCourseList(
			mockedCoursesList.filter((course) => {
				return (
					course.title.toLowerCase().includes(searchInput.toLowerCase()) ||
					course.id.includes(searchInput.toLocaleLowerCase())
				);
			})
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
