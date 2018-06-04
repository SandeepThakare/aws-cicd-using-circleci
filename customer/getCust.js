import Common from '../common/common';
// import AWS from 'aws-sdk';
import dynamoDB from '../common/dynamodb';
import StatusCode from '../common/statusCode';
let statusCode = new StatusCode().getStatusCode();

export function getCust(event, context, callback) {
	context.callbackWaitsForEmptyEventLoop = false;

	let scanParams = new Common().scanParams(process.env.CUSTOMER_INFO || 'customer-info');
	console.log(scanParams);

	dynamoDB.scan(scanParams, async (err, data) => {
		if(err) {
			console.log('Unable to scan table. ERROR JSON: ', JSON.stringify(err, undefined, 2));
			return callback(null, new Common().callbackHandler(statusCode.BAD_REQUEST, err));
		}

		console.log('Result - ', data);
		console.log(new Common().callbackHandler(statusCode.OK, data));
		// context.succeed();
		callback(null, await new Common().callbackHandler(statusCode.OK, data));
		return;
	});

	let res = {
		StatusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT' 
		},
		body: JSON.stringify('Done')
	};
	console.log('Outside callback', res);
	callback(null, 'Hello there');
	return;
}