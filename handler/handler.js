
// import { common } from '../common/common';
import Common from '../common/common';

export const hello = async (event, context, callback) => {
	const response = {
		statusCode: 200,
		body: JSON.stringify({
			message: 'hello there',
		}),
	};

	console.log(new Common().callbackHandler(200, 'abc'));

	callback(null, await new Common().callbackHandler(200, 'hello there	'));
};

