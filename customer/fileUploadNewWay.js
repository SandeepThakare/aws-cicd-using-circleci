'use strict';
import { S3, DynamoDB } from 'aws-sdk';
import { readFile } from 'fs';
import fileType from 'file-type';
import sha1 from 'sha1';
import Common from '../common/common';
import StatusCode from '../common/statusCode';
import multipart from 'aws-lambda-multipart-parser';
let statusCode = new StatusCode().getStatusCode();
let s3 = new S3();

export function uploadImage(event, context, callback) {

	// console.log('Event body=', JSON.stringify(event.body));
	console.log('Event=', JSON.stringify(event));
	console.log('Event=', event.headers);
	console.log('Event body=', typeof (event.body));
	let createdAt = new Date().toUTCString();
	let etag = null;

	let myBucket = 'aws-poc-image-bucket';
	let url_prefix = 'https://s3.amazonaws.com';

	if (!event.pathParameters || !event.pathParameters.email || !event.pathParameters.filename) {

		callback(null, new Common().callbackHandler(statusCode.BAD_REQUEST, 'Email or File name is missing !'));
		return;
	}

	let fileDetails = multipart.parse(event, true);

	// Begins the upload to the AWS S3
	s3.headBucket({ Bucket: myBucket }, (err, data) => {
		console.log(data);
		if (err) {
			s3.createBucket({ Bucket: myBucket }, (err, data) => {
				console.log(data);
				console.log('Inside create bucket');
				if (err) {
					console.log(err);
					callback(null, callbackHandler(401, err));
					return;
				}

				let params = { 
					Bucket: myBucket, 
					Key: `${event.pathParameters.email}/${event.pathParameters.filename}`, 
					Body: fileDetails.file_buffer.content, 
					ContentEncoding: 'base64', 
					ContentType: fileDetails.file_buffer.contentType, 
					ACL: 'public-read' 
				};

				s3.putObject(params, function (err, data) {
					console.log(data);
					if (err) {
						console.log(JSON.stringify(err. undefined, 2));
						callback(null, new Common().callbackHandler(statusCode.FORBIDDEN, err));
						return;
					} else {
						console.log('Successfully uploaded data to myBucket/myKey');
                        callback(null, new Common().callbackHandler(statusCode.OK, 'Image successfully saved !!!'));
                        return;
					}
				});
			});
		} else {
			console.log('Inside create bucket else');

			let params = { 
				Bucket: myBucket, 
				Key: `${event.pathParameters.email}/${event.pathParameters.filename}`, 
				Body: fileDetails.file_buffer.content, 
				ContentEncoding: 'base64', 
				ContentType: fileDetails.file_buffer.contentType, 
				ACL: 'public-read' 
			};

			s3.putObject(params, function (err, data) {
				console.log(data);
				if (err) {
					console.log(err);
					callback(new Common().callbackHandler(statusCode.FORBIDDEN, err));
					return;
				} else {
					console.log('Successfully uploaded data to myBucket/myKey');
					etag = data.ETag;
                    callback(null, new Common().callbackHandler(statusCode.OK, 'Image successfully saved !!!'));
				}
			});
		}
	});
}