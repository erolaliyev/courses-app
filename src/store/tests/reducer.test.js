import userReducer from '../user/reducer';
import courseReducer from '../courses/reducer';
import authorReducer from '../authors/reducer';

test('should return the initial state for userReducer', () => {
	expect(userReducer(undefined, {})).toEqual({
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	});
});

test('should handle LOG_IN', () => {
	const previousState = {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	};

	const LOG_IN = {
		type: 'LOG_IN',
		payload: { name: 'user', email: 'user@email.com', token: 'Bearer' },
	};

	expect(userReducer(previousState, LOG_IN)).toEqual({
		isAuth: true,
		name: 'user',
		email: 'user@email.com',
		token: 'Bearer',
		role: '',
	});
});

test('should handle LOG_OUT', () => {
	const previousState = {
		isAuth: true,
		name: '',
		email: '',
		token: '',
		role: '',
	};
	const LOG_OUT = {
		type: 'LOG_OUT',
	};
	expect(userReducer(previousState, LOG_OUT)).toEqual({
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	});
});

test('should handle SET_USER_ROLE', () => {
	const previousState = {
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: '',
	};
	const SET_USER_ROLE = {
		type: 'SET_USER_ROLE',
		payload: { role: 'user' },
	};
	expect(userReducer(previousState, SET_USER_ROLE)).toEqual({
		isAuth: false,
		name: '',
		email: '',
		token: '',
		role: 'user',
	});
});

test('should return the initial state for courseReducer', () => {
	expect(courseReducer(undefined, {})).toEqual([]);
});

test('should handle ADD_COURSE to empty list', () => {
	const previousState = [];
	const ADD_COURSE = {
		type: 'ADD_COURSE',
		payload: {
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
	};
	expect(courseReducer(previousState, ADD_COURSE)).toEqual([
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
	]);
});

test('should handle ADD_COURSE to an existing list', () => {
	const previousState = [
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
	];
	const ADD_COURSE = {
		type: 'ADD_COURSE',
		payload: {
			id: '1111-1111-1111',
			title: 'title1',
			description: 'description1',
			creationDate: '02/01/2022',
			duration: 456,
			authors: ['author-3-id', 'author-4-id'],
		},
	};
	expect(courseReducer(previousState, ADD_COURSE)).toEqual([
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
		{
			id: '1111-1111-1111',
			title: 'title1',
			description: 'description1',
			creationDate: '02/01/2022',
			duration: 456,
			authors: ['author-3-id', 'author-4-id'],
		},
	]);
});

test('should handle REMOVE_COURSE', () => {
	const previousState = [
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
		{
			id: '1111-1111-1111',
			title: 'title1',
			description: 'description1',
			creationDate: '02/01/2022',
			duration: 456,
			authors: ['author-3-id', 'author-4-id'],
		},
	];
	const REMOVE_COURSE = {
		type: 'REMOVE_COURSE',
		payload: {
			id: '1111-1111-1111',
		},
	};
	expect(courseReducer(previousState, REMOVE_COURSE)).toEqual([
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
	]);
});

test('should handle UPDATE_COURSE', () => {
	const previousState = [
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
		{
			id: '1111-1111-1111',
			title: 'title1',
			description: 'description1',
			creationDate: '02/01/2022',
			duration: 456,
			authors: ['author-3-id', 'author-4-id'],
		},
	];
	const UPDATE_COURSE = {
		type: 'UPDATE_COURSE',
		payload: {
			id: '1111-1111-1111',
			title: 'title2',
			description: 'description2',
			creationDate: '03/01/2022',
			duration: 789,
			authors: ['author-5-id', 'author-6-id'],
		},
	};
	expect(courseReducer(previousState, UPDATE_COURSE)).toEqual([
		{
			id: '0000-0000-0000',
			title: 'title',
			description: 'description',
			creationDate: '01/01/2022',
			duration: 123,
			authors: ['author-1-id', 'author-2-id'],
		},
		{
			id: '1111-1111-1111',
			title: 'title2',
			description: 'description2',
			creationDate: '03/01/2022',
			duration: 789,
			authors: ['author-5-id', 'author-6-id'],
		},
	]);
});

test('should return the initial state for authorReducer', () => {
	expect(authorReducer(undefined, {})).toEqual([]);
});

test('should handle ADD_AUTHOR to an empty list', () => {
	const previousState = [];
	const ADD_AUTHOR = {
		type: 'ADD_AUTHOR',
		payload: {
			id: '0000-0000-0000',
			name: 'author',
		},
	};
	expect(authorReducer(previousState, ADD_AUTHOR)).toEqual([
		{
			id: '0000-0000-0000',
			name: 'author',
		},
	]);
});

test('should handle ADD_AUTHOR to an existing list', () => {
	const previousState = [
		{
			id: '0000-0000-0000',
			name: 'author',
		},
	];
	const ADD_AUTHOR = {
		type: 'ADD_AUTHOR',
		payload: {
			id: '1111-1111-1111',
			name: 'author1',
		},
	};
	expect(authorReducer(previousState, ADD_AUTHOR)).toEqual([
		{
			id: '0000-0000-0000',
			name: 'author',
		},
		{
			id: '1111-1111-1111',
			name: 'author1',
		},
	]);
});
