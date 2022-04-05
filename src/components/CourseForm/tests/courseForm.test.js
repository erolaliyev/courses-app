import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseForm from '../CourseForm';

test('should display input for title ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(screen.getByPlaceholderText('Enter title...')).toBeInTheDocument();
});

test('should display change of input for title ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	const inputElement = screen.getByPlaceholderText('Enter title...');
	fireEvent.change(inputElement, { target: { value: 'Title' } });
	expect(inputElement.value).toBe('Title');
});

test('should display button create course', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(
		screen.getByRole('button', { name: 'Create course' })
	).toBeInTheDocument();
});

test('should display input for description', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(
		screen.getByPlaceholderText('Enter description...')
	).toBeInTheDocument();
});

test('should display change of input for description ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	const inputElement = screen.getByPlaceholderText('Enter description...');
	fireEvent.change(inputElement, { target: { value: 'Description' } });
	expect(inputElement.value).toBe('Description');
});

test('should display input for duration ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(
		screen.getByPlaceholderText('Enter duration in minutes...')
	).toBeInTheDocument();
});

test('should display change of input for duration', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	const inputElement = screen.getByPlaceholderText(
		'Enter duration in minutes...'
	);
	fireEvent.change(inputElement, { target: { value: 123 } });
	expect(inputElement.value).toBe('123');
});

test('should display input for author ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(
		screen.getByPlaceholderText('Enter author name...')
	).toBeInTheDocument();
});

test('should display change of input for author ', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	const inputElement = screen.getByPlaceholderText('Enter author name...');
	fireEvent.change(inputElement, { target: { value: 'Author' } });
	expect(inputElement.value).toBe('Author');
});

test('should display button create author', async () => {
	const mockedState = {
		user: {
			isAuth: true,
			name: 'Test User',
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

	const MockCourseForm = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseForm />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseForm />);
	expect(
		screen.getByRole('button', { name: 'Create author' })
	).toBeInTheDocument();
});
