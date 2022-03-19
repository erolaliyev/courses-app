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
