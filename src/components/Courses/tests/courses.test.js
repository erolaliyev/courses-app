import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../Courses';

describe('SearchBar', () => {
	test('should render button search', async () => {
		const mockedState = {
			user: {
				isAuth: true,
				name: 'Test user',
				email: 'test@email.com',
				token: 'token',
				role: 'user',
			},
			courses: [],
			authors: [],
		};
		const mockedStore = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};

		const MockCourses = () => {
			return (
				<Provider store={mockedStore}>
					<BrowserRouter>
						<Courses />
					</BrowserRouter>
				</Provider>
			);
		};

		render(<MockCourses />);
		expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
	});

	test('should button click search courses', async () => {
		const mockedState = {
			user: {
				isAuth: true,
				name: 'Test user',
				email: 'test@email.com',
				token: 'token',
				role: 'user',
			},
			courses: [],
			authors: [],
		};
		const mockedStore = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};

		const MockCourses = () => {
			return (
				<Provider store={mockedStore}>
					<BrowserRouter>
						<Courses />
					</BrowserRouter>
				</Provider>
			);
		};

		render(<MockCourses />);
		const buttonElement = screen.getByRole('button', { name: 'Search' });
		fireEvent.click(buttonElement);
		const courseCardElement = screen.queryByLabelText('course-card');
		expect(courseCardElement).toBe(null);
	});

	test('should display input for search', async () => {
		const mockedState = {
			user: {
				isAuth: true,
				name: 'Test user',
				email: 'test@email.com',
				token: 'token',
				role: 'user',
			},
			courses: [],
			authors: [],
		};
		const mockedStore = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};

		const MockCourses = () => {
			return (
				<Provider store={mockedStore}>
					<BrowserRouter>
						<Courses />
					</BrowserRouter>
				</Provider>
			);
		};

		render(<MockCourses />);
		expect(
			screen.getByPlaceholderText('Enter course name...')
		).toBeInTheDocument();
	});

	test('should display change of input for search', async () => {
		const mockedState = {
			user: {
				isAuth: true,
				name: 'Test user',
				email: 'test@email.com',
				token: 'token',
				role: 'user',
			},
			courses: [],
			authors: [],
		};
		const mockedStore = {
			getState: () => mockedState,
			subscribe: jest.fn(),
			dispatch: jest.fn(),
		};

		const MockCourses = () => {
			return (
				<Provider store={mockedStore}>
					<BrowserRouter>
						<Courses />
					</BrowserRouter>
				</Provider>
			);
		};

		render(<MockCourses />);
		const inputElement = screen.getByPlaceholderText('Enter course name...');
		fireEvent.change(inputElement, { target: { value: 'Search text' } });
		expect(inputElement.value).toBe('Search text');
	});
});

test('should render button add new course', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: undefined,
			email: 'test@email.com',
			token: 'token',
			role: 'admin',
		},
		courses: [],
		authors: [],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	const MockCourses = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourses />);
	expect(
		screen.getByRole('button', { name: 'Add new course' })
	).toBeInTheDocument();
});

test('should button click navigate to courses add', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: undefined,
			email: 'test@email.com',
			token: 'token',
			role: 'admin',
		},
		courses: [],
		authors: [],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	const MockCourses = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourses />);
	const buttonElement = screen.getByRole('button', { name: 'Add new course' });
	fireEvent.click(buttonElement);
	expect(window.location.pathname).toBe('/courses/add');
});

let originalFetch = global.fetch();

beforeEach(() => {
	global.fetch = jest.fn(() =>
		Promise.resolve({
			json: () =>
				Promise.resolve({ result: ['result-1', 'result-2', 'result-3'] }),
		})
	);
});

afterEach(() => {
	global.fetch = originalFetch;
});

test('should render course card', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test user',
			email: 'test@email.com',
			token: 'token',
			role: 'user',
		},
		courses: [],
		authors: [],
	};
	const mockedStore = {
		getState: () => mockedState,
		subscribe: jest.fn(),
		dispatch: jest.fn(),
	};

	const MockCourses = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourses />);
	expect(fetch).toBeCalledTimes(2);
});
