import { DynamoDB } from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies
// import AWS from 'aws-sdk';
require("dotenv").config({ path: "../.env" /* path to your project root folder */ });
let options = {};
console.log('Envoirment -----> ', process.env.IS_OFFLINE)
// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
	console.log('Inside of offline')
	options = {
		region: process.env.AWS_REGION,
		endpoint: 'http://localhost:8000',
	};
}
console.log('Outside')
const dynamoDB = new DynamoDB.DocumentClient(options);

export default dynamoDB;