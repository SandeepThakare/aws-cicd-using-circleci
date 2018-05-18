import Common from '../common/common';
import AWS from 'aws-sdk';
import dynamoDB from '../common/dynamodb';

export function addCustomer(event, context, callback) {

	let eventData;
	let email;
	let created_at = new Date().getTime();
	if(!event.body || !event.pathParameters.email) {
		callback(null, new Common().callbackHandler(401, 'Event Body or email is missing !!!'));
		return;
	} else {
		eventData = JSON.parse(event.body);
		email = event.pathParameters.email;
	}

	var params = {
		TableName: process.env.CUSTOMER_INFO,
		Item: {
			email: decodeURIComponent(email),
			created_at: created_at,
			customerData: eventData
		},
	};

	console.log(params);
    
	dynamoDB.put(params, (err, data) => {
		if(err) {
			console.log('Unable to add records in table. Error JSON: ', JSON.stringify(err, undefined, 2));
			callback(null, new Common().callbackHandler(401, err));
			return;
		}

		console.log('Data added successfully', data);
		callback(null, new Common().callbackHandler(200, {email:email, cutsomerData: eventData}));
		return;
	});

}