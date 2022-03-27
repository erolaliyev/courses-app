import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

global.fetch = jest.fn(() => Promise.resolve());

beforeEach(() => {
	fetch.mockClear();
});

test('should render logo image', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	render(<MockHeader />);
	const imageElement = screen.getByRole('img');
	expect(imageElement).toBeInTheDocument();
});

test('should render user name', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const spanElement = screen.getByText('Test User');
	expect(spanElement).toBeInTheDocument();

	localStorage.removeItem('loginToken');
});

test('should render admin', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const username = screen.getByLabelText('username');
	screen.debug(username);
	expect(username).toHaveTextContent('Admin');

	localStorage.removeItem('loginToken');
});

test('should render button', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const buttonElement = screen.getByRole('button');
	expect(buttonElement).toBeInTheDocument();

	localStorage.removeItem('loginToken');
});

test('should button click log out user', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const buttonElement = screen.getByRole('button');
	fireEvent.click(buttonElement);
	expect(fetch).toBeCalledTimes(1);
});

test('should button click navigate to login', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const buttonElement = screen.getByRole('button');
	fireEvent.click(buttonElement);
	expect(window.location.pathname).toBe('/login');
});

test('should button click clear localStorage', async () => {
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

	const MockHeader = () => {
		return (
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	};

	localStorage.setItem('loginToken', 'Token');

	render(<MockHeader />);
	const buttonElement = screen.getByRole('button');
	fireEvent.click(buttonElement);
	expect(localStorage.getItem('loginToken')).toBe(null);
});
