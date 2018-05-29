import Common from '../common/common';
import AWS, { CostExplorer } from 'aws-sdk';
import dynamoDB from '../common/dynamodb';
import StatusCode from '../common/statusCode';
let statusCode = new StatusCode().getStatusCode();
// AWS.config.region = 'us-east-1';

export function addCustomer(event, context, callback) {

	let eventData;
	let email;
	let created_at = new Date().getTime();
	if (!event.body || !event.pathParameters.email) {
		callback(null, new Common().callbackHandler(statusCode.BAD_REQUEST, 'Event Body or email is missing !!!'));
		// callback(null, new Error('Malformed input ...'));
		return;
	} else {
		eventData = JSON.parse(event.body);
		email = event.pathParameters.email;
	}

	let Item = {
		email: decodeURIComponent(email),
		created_at: created_at,
		customerData: eventData
	};

	let postParams = new Common().postParams(process.env.CUSTOMER_INFO, Item);

	console.log(postParams);
	console.log('dasd ----> ', JSON.stringify(new Common().callbackHandler(statusCode.NO_CONTENT, 'err')));

	dynamoDB.put(postParams, async (err, data) => {
		if (err) {
			console.log('Unable to add records in table. Error JSON: ', JSON.stringify(err, undefined, 2));
			return callback(null, await new Common().callbackHandler(statusCode.NO_CONTENT, err));
		}

		console.log('Data added successfully', data);
		return callback(null, await new Common().callbackHandler(statusCode.OK, { email: decodeURIComponent(email), cutsomerData: eventData }));
	});

}

export const getCustomersList = async (event, context, callback) => {

	let scanParams = await new Common().scanParams(process.env.CUSTOMER_INFO);
	console.log(scanParams);
	console.log(new Common().callbackHandler(statusCode.BAD_REQUEST, err))

	dynamoDB.scan(scanParams, async (err, data) => {
		if(err) {
			console.log('Unable to scan table. ERROR JSON: ', JSON.stringify(err, undefined, 2));
			return callback(null, await new Common().callbackHandler(statusCode.BAD_REQUEST, err));
		}

		console.log('Result - ', data);
		callback(null, {
			StatusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
				'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT' 
			},
			body: JSON.stringify('No data')
		});
	});
}

export function getCustomer(event, context, callback) {

	let email = null;

	if(!event.pathParameters || !event.pathParameters) {
		console.log('Email is missing!!');
		callback(null, new Common().callbackHandler(statusCode.BAD_REQUEST, 'Email is missing !!!'));
		return;
	} else {
		email = decodeURIComponent(event.pathParameters.email);
	}

	let queryParams = new Common().queryParams(process.env.CUSTOMER_INFO, 'email', email);

	dynamoDB.query(queryParams, (err, result) => {
        
		if(err) {
			console.log('Unable to scan table. Error JOSN: ', JSON.stringify(err, undefined, 2));
			return callback(null, new Common().callbackHandler(statusCode.BAD_REQUEST,err));
			// return;
		}

		if(result.Items.length) {
			console.log('Result - ', result.Items[0]);
			return callback(null, new Common().callbackHandler(statusCode.OK, result.Items[0]));
			// return;
		} else {
			return callback(null, new Common().callbackHandler(statusCode.OK, 'No data associated with this ID'));
			// return;
		}
	});
}