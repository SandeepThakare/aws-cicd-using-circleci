// import request from "supertest";
// import request from 'supertest';
import { hello } from '../../handler/handler';

describe('handler', () => {

	test('the handler function should work', () => {
		// let err;
		// let response;

		hello({}, {}, (err, response) => {
			expect(response).toBeDefined();
		});
	});

	test('the response should be successful', () => {
		hello({}, {}, (err, response) => {
			expect(response.statusCode).toEqual(200);
		});
	});

	test('the data should be valid', () => {
		hello({}, {}, (err, response) => {
			console.log('Response ---->', response)
			let val = JSON.parse(response.body);
			expect(val.message).toMatch('hello there');
		});
	});
});