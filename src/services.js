export async function getCoursesList() {
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
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function getAuthorsList() {
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
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function getCurrentUser() {
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
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function deleteCourse(id) {
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
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function changeCourse(id, bodyParams) {
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
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function createCourse(bodyParams) {
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
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function addAuthor(bodyParams) {
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
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function loginUser(bodyParams) {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(bodyParams),
	};
	const response = await fetch('http://localhost:3000/login', requestOptions);
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}

export async function logoutUser() {
	const requestOptions = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			Authorization: localStorage.getItem('loginToken'),
		},
	};
	const response = await fetch('http://localhost:3000/logout', requestOptions);
	if (!response.ok) {
		console.log(response);
	}
}

export async function registerUser(bodyParams) {
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
	console.log(response);
	const data = await response.json();
	console.log(data);
	if (data.successful) {
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}
