import { DynamoDB } from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies
// import AWS from 'aws-sdk';
let options = {};
// AWS.config.region = 'us-east-1';

// if (!AWS.config.region) {
// 	AWS.config.update({
// 		region: 'us-east-1'
// 	});
// }

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
	console.log('Inside is offline')
	options = {
		region: process.env.AWS_REGION,
		endpoint: 'http://localhost:8000',
	};
}

const dynamoDB = new DynamoDB.DocumentClient(options);

export default dynamoDB;