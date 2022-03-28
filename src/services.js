export async function getCoursesList() {
	try {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const response = await fetch(
			'http://localhost:3000/courses/all',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function getAuthorsList() {
	try {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const response = await fetch(
			'http://localhost:3000/authors/all',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function getCurrentUser() {
	try {
		const requestOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
		};
		const response = await fetch(
			'http://localhost:3000/users/me',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function deleteCourse(id) {
	try {
		const requestOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
		};
		const response = await fetch(
			'http://localhost:3000/courses/' + id,
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function changeCourse(id, bodyParams) {
	try {
		const requestOptions = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
			body: JSON.stringify(bodyParams),
		};
		const response = await fetch(
			'http://localhost:3000/courses/' + id,
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function createCourse(bodyParams) {
	try {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
			body: JSON.stringify(bodyParams),
		};
		const response = await fetch(
			'http://localhost:3000/courses/add',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function addAuthor(bodyParams) {
	try {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
			body: JSON.stringify(bodyParams),
		};
		const response = await fetch(
			'http://localhost:3000/authors/add',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}

export async function loginUser(bodyParams) {
	try {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyParams),
		};
		const response = await fetch('http://localhost:3000/login', requestOptions);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}

export async function logoutUser() {
	try {
		const requestOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: localStorage.getItem('loginToken'),
			},
		};
		await fetch('http://localhost:3000/logout', requestOptions);
	} catch (error) {
		console.error(error);
	}
}

export async function registerUser(bodyParams) {
	try {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(bodyParams),
		};
		const response = await fetch(
			'http://localhost:3000/register',
			requestOptions
		);
		const data = await response.json();
		return data.result;
	} catch (error) {
		console.error(error);
	}
}
