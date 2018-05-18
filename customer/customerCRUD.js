import Common from '../common/common';
import AWS from 'aws-sdk';
import dynamoDB from '../common/dynamodb';

export function addCustomer(event, context, callback) {

	let eventData;
	let email;
	let created_at = new Date().getTime();
	if (!event.body || !event.pathParameters.email) {
		callback(null, new Common().callbackHandler(401, 'Event Body or email is missing !!!'));
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

	// var params = {
	// 	TableName: process.env.CUSTOMER_INFO,
	// 	Item: {
	// 		email: decodeURIComponent(email),
	// 		created_at: created_at,
	// 		customerData: eventData
	// 	},
	// };

	console.log(postParams);

	dynamoDB.put(postParams, (err, data) => {
		if (err) {
			console.log('Unable to add records in table. Error JSON: ', JSON.stringify(err, undefined, 2));
			callback(null, new Common().callbackHandler(401, err));
			return;
		}

		console.log('Data added successfully', data);
		callback(null, new Common().callbackHandler(200, { email: decodeURIComponent(email), cutsomerData: eventData }));
		return;
	});

}

export function getCustomersList(event, context, callback) {

	let scanParams = new Common().scanParams(process.env.CUSTOMER_INFO);

	dynamoDB.scan(scanParams, (err, data) => {
		if(err) {
			console.log('Unable to scan table. ERROR JSON: ', JSON.stringify(err, undefined, 2));
			callback(null, new Common().callbackHandler(401, err));
			return;
		}

		console.log('Result - ', data);
		callback(null, new Common().callbackHandler(200, data));
		return;
	});
}

export function getCustomer(event, context, callback) {

	// let email = null;

	// if(!evet.pathParameters || !event.pathParameters) {

	// }
}