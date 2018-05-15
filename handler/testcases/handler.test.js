// import request from "supertest";
import request from "supertest";
describe('test handler /handler', function () {

	let path = 'http://localhost:3000';

	it('respond with json', function (done) {
		request(path)
			.get('/handler')
			.set('Accept', 'application/json')
			.expect(200, done);
	});
});

// .expect('Content-Type', /json/)
