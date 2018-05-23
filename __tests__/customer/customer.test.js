// import { hello } from '../../handler/handler';
import { getCustomer, getCustomersList, addCustomer } from '../../customer/customerCRUD';

describe('getCustomersList', () => {

	test('the getCustomersList function should work', () => {
		// let err;
		// let response;

		getCustomersList({}, {}, (err, response) => {
			expect(response).toBeDefined();
		});
	});

	test('the response should be successful', () => {
		getCustomersList({}, {}, (err, response) => {
			expect(response.statusCode).toEqual(200);
		});
	});

	test('the data should be valid', () => {
		getCustomersList({}, {}, (err, response) => {
			console.log('Body --', response.body);
			let val = JSON.parse(response.body);
			expect(val.ScannedCount).toEqual(2);
		});
	});
});