export const hello = (event, context, callback) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello there',
		}),
	};

	callback(null, response);
};

