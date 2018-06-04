import Common from '../common/common';
// import AWS from 'aws-sdk';
import dynamoDB from '../common/dynamodb';
import StatusCode from '../common/statusCode';
let statusCode = new StatusCode().getStatusCode();

export async function getCust(event, context, callback) {
	context.callbackWaitsForEmptyEventLoop = false;
	// console.log('Context ---> ', context);
	// console.log('callback --->', callback);
	let a = new Common();
	let scanParams = await new Common().scanParams(process.env.CUSTOMER_INFO || 'customer-info');

	// return new Promise((resolve, reject) => {
	// 	console.log(scanParams);
	// 	dynamoDB.scan(scanParams, (err, data) => {
	// 		if (err) {
	// 			console.log('Unable to scan table. ERROR JSON: ', JSON.stringify(err, undefined, 2));
	// 			reject(err);
	// 		}
	// 		resolve('success');
	// 		console.log('Result - ', callback(null, data));
	// 		console.log(a.callbackHandler(statusCode.OK, data));
	// 	});
	// }).then((data) => {
	// 	console.log('Inside then ---> ', data);
	// 	callback(null, a.callbackHandler(statusCode.OK, data));
	// })
	// 	.catch((error) => {
	// 		console.log('Inside catch --->', error);
	// 		a.callbackHandler(statusCode.BAD_REQUEST, error);
	// 	});

	dynamoDB.scan(scanParams, onScan);

	async function onScan(err, data) {
		if (err) {
			console.log('Unable to scan table. ERROR JSON: ', JSON.stringify(err, undefined, 2));
			callback(null, await a.callbackHandler(statusCode.BAD_REQUEST, err));
			return;
		}

		console.log('Result - ', data);
		console.log(a.callbackHandler(statusCode.OK, data));
		callback(null, await a.callbackHandler(statusCode.OK, data));
		return;
	}
}