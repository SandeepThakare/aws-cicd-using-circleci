// import request from "supertest";
import request from "supertest";
// describe('test handler /handler', function () {

// 	let path = 'http://localhost:3000';

// 	it('respond with json', function (done) {
// 		request(path)
// 			.get('/handler')
// 			.set('Accept', 'application/json')
// 			.expect(200, done);
// 	});
// });

// .expect('Content-Type', /json/)


import { hello } from "../services/handler";

describe('handler', () => {
//   test('the handler function should work', () => {
//     let err;
//     let response;

//     hello({}, {}, (_err, _response) => {
//       err = _err;
//       response = _response;
//     });

//     expect(err).toBeNull();
//     expect(response).toBeDefined();
//   });

  test('the response should be successful', () => {
    hello({}, {}, (err, response) => {
      expect(response.statusCode).toEqual(200);
    });
  });
});