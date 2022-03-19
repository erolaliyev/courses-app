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
	// console.log(data.result);
	if (data.successful) {
		// console.log(data.result);
		// console.log('store courses');
		// console.log(store.getState().courses);
		// console.log(`dispatch that add course pennypacke`);
		// if (store.getState().courses.length === 0) {
		// 	data.result.map((result) => dispatch(ADD_COURSE(result)));
		// }
		// console.log('success');
		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
	// console.log(data);
	// return data;
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
	// console.log(data.result);
	if (data.successful) {
		// console.log(data.result);
		// console.log('store authors');
		// console.log(store.getState().authors);
		// console.log(`dispatch that add course pennypacke`);

		return data.result;
	} else {
		const errorMessage = `An error has occured: ${data.result}`;
		throw new Error(errorMessage);
	}
}
