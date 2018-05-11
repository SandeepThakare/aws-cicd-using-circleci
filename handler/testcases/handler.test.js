// import request from "supertest";
const request = require('supertest');
describe('test handler /handler', function () {

	let path = 'http://localhost:3000';

	it('respond with json', function (done) {
		request(path)
			.get('/handler')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);
	});
});
