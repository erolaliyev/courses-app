import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CourseCard from '../CourseCard';

test('should render course card', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['Test Author 1', 'Test Author 2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('course-card')).toBeInTheDocument();
});

test('should display title', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['Test Author 1', 'Test Author 2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('title')).toHaveTextContent('Test Title');
});

test('should display description', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['Test Author 1', 'Test Author 2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('description')).toHaveTextContent(
		'Test Description'
	);
});

test('should display authors', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['Test Author 1', 'Test Author 2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('authors-info')).toHaveTextContent(
		'Test Author 1, Test Author 2'
	);
});

test('should display duration', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('duration')).toHaveTextContent('02:03');
});

test('should display creation date', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByLabelText('creation-date')).toHaveTextContent(
		'01.01.2022'
	);
});

test('should display show course button', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(
		screen.getByRole('button', { name: 'Show course' })
	).toBeInTheDocument();
});

test('should navigate to url if show course button clicked', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	const buttonElement = screen.getByRole('button', { name: 'Show course' });
	fireEvent.click(buttonElement);
	expect(window.location.pathname).toBe('/courses/0000-0000-0000');
});

test('should display update button if user is admin', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByRole('button', { name: 'Update' })).toBeInTheDocument();
});

test('should not display update button if user is not admin', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.queryByRole('button', { name: 'Update' })).toEqual(null);
});

test('should navigate to url if update button clicked', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	const buttonElement = screen.getByRole('button', { name: 'Update' });
	fireEvent.click(buttonElement);
	expect(window.location.pathname).toBe('/courses/update/0000-0000-0000');
});

test('should display delete button if user is admin', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.getByRole('button', { name: 'Delete' })).toBeInTheDocument();
});

test('should not display delete button if user is not admin', async () => {
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

	const MockCourseCard = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<CourseCard
						id='0000-0000-0000'
						title='Test Title'
						description='Test Description'
						authors={['test-author-1', 'test-author-2']}
						duration={123}
						creationDate='01/01/2022'
					/>
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockCourseCard />);
	expect(screen.queryByRole('button', { name: 'Delete' })).toEqual(null);
});
