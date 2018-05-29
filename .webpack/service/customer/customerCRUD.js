(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./customer/customerCRUD.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/common.js":
/*!**************************!*\
  !*** ./common/common.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var common = function () {
	function common() {
		// console.log('In common js constructor');

		(0, _classCallCheck3.default)(this, common);
	}

	(0, _createClass3.default)(common, [{
		key: 'callbackHandler',
		value: function callbackHandler(statusCode, message) {

			var res = {
				StatusCode: statusCode,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Headers': '*',
					'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'
				},
				body: (0, _stringify2.default)(message)
			};

			return res;
		}
	}, {
		key: 'postParams',
		value: function postParams(tableName, items) {
			var params = {
				TableName: tableName,
				Item: items
			};

			return params;
		}
	}, {
		key: 'scanParams',
		value: function scanParams(tableName) {
			var params = {
				TableName: tableName
			};

			return params;
		}
	}, {
		key: 'queryParams',
		value: function queryParams(tableName, key, keyvalue) {
			var params = {
				TableName: tableName,
				KeyConditionExpression: key + ' = :pk',
				ExpressionAttributeValues: {
					':pk': decodeURIComponent(keyvalue)
				}
			};
			return params;
		}
	}]);
	return common;
}();

exports.default = common;

/***/ }),

/***/ "./common/dynamodb.js":
/*!****************************!*\
  !*** ./common/dynamodb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _awsSdk = __webpack_require__(/*! aws-sdk */ "aws-sdk");

__webpack_require__(/*! dotenv */ "dotenv").config({ path: "../.env" /* path to your project root folder */ });
// eslint-disable-line import/no-extraneous-dependencies
// import AWS from 'aws-sdk';
var options = {};
console.log('Envoirment -----> ', process.env.IS_OFFLINE);
// connect to local DB if running offline
if (!process.env.IS_OFFLINE) {
	console.log('Inside of offline');
	options = {
		region: 'us-east-1',
		endpoint: 'http://localhost:8000'
	};
}

console.log('Outside');
var dynamoDB = new _awsSdk.DynamoDB.DocumentClient(options);

exports.default = dynamoDB;

/***/ }),

/***/ "./common/statusCode.js":
/*!******************************!*\
  !*** ./common/statusCode.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ "babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ "babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StatusCode = function () {
	function StatusCode() {
		// console.log('Inside Status code file');

		(0, _classCallCheck3.default)(this, StatusCode);
	}

	(0, _createClass3.default)(StatusCode, [{
		key: 'getStatusCode',
		value: function getStatusCode() {
			var code_status = {
				'OK': 200,
				'CREATED': 201,
				'NO_CONTENT': 204,
				'PARTIAL_CONTENT': 206,
				'NOT_MODIFIED': 304,
				'BAD_REQUEST': 400,
				'UNAUTHORIZED': 401,
				'FORBIDDEN': 403,
				'NOT_FOUND': 404,
				'INTERNAL_SERVER_ERROR': 500
			};

			return code_status;
		}
	}]);
	return StatusCode;
}();

exports.default = StatusCode;

/***/ }),

/***/ "./customer/customerCRUD.js":
/*!**********************************!*\
  !*** ./customer/customerCRUD.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

exports.addCustomer = addCustomer;
exports.getCustomersList = getCustomersList;
exports.getCustomer = getCustomer;

__webpack_require__(/*! source-map-support/register */ "source-map-support/register");

var _common = __webpack_require__(/*! ../common/common */ "./common/common.js");

var _common2 = _interopRequireDefault(_common);

var _awsSdk = __webpack_require__(/*! aws-sdk */ "aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _dynamodb = __webpack_require__(/*! ../common/dynamodb */ "./common/dynamodb.js");

var _dynamodb2 = _interopRequireDefault(_dynamodb);

var _statusCode = __webpack_require__(/*! ../common/statusCode */ "./common/statusCode.js");

var _statusCode2 = _interopRequireDefault(_statusCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var statusCode = new _statusCode2.default().getStatusCode();
// AWS.config.region = 'us-east-1';

function addCustomer(event, context, callback) {

	var eventData = void 0;
	var email = void 0;
	var created_at = new Date().getTime();
	if (!event.body || !event.pathParameters.email) {
		callback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, 'Event Body or email is missing !!!'));
		// callback(null, new Error('Malformed input ...'));
		return;
	} else {
		eventData = JSON.parse(event.body);
		email = event.pathParameters.email;
	}

	var Item = {
		email: decodeURIComponent(email),
		created_at: created_at,
		customerData: eventData
	};

	var postParams = new _common2.default().postParams(process.env.CUSTOMER_INFO, Item);

	console.log(postParams);
	console.log('dasd ----> ', (0, _stringify2.default)(new _common2.default().callbackHandler(statusCode.NO_CONTENT, 'err')));

	_dynamodb2.default.put(postParams, function (err, data) {
		if (err) {
			console.log('Unable to add records in table. Error JSON: ', (0, _stringify2.default)(err, undefined, 2));
			return callback(null, new _common2.default().callbackHandler(statusCode.NO_CONTENT, err));
		}

		console.log('Data added successfully', data);
		callback(null, new _common2.default().callbackHandler(statusCode.OK, { email: decodeURIComponent(email), cutsomerData: eventData }));
	});
}

function getCustomersList(event, context, callback) {
	var _this = this;

	context.callbackWaitsForEmptyEventLoop = false;

	var scanParams = new _common2.default().scanParams(process.env.CUSTOMER_INFO || 'customer-info');
	console.log(scanParams);

	_dynamodb2.default.scan(scanParams, function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(err, data) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!err) {
								_context.next = 3;
								break;
							}

							console.log('Unable to scan table. ERROR JSON: ', (0, _stringify2.default)(err, undefined, 2));
							return _context.abrupt('return', callback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, err)));

						case 3:

							console.log('Result - ', data);
							_context.t0 = console;
							_context.next = 7;
							return new _common2.default().callbackHandler(statusCode.OK, data);

						case 7:
							_context.t1 = _context.sent;

							_context.t0.log.call(_context.t0, _context.t1);

							_context.t2 = callback;
							_context.next = 12;
							return new _common2.default().callbackHandler(statusCode.OK, data);

						case 12:
							_context.t3 = _context.sent;
							(0, _context.t2)(null, _context.t3);
							return _context.abrupt('return');

						case 15:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}));

		return function (_x, _x2) {
			return _ref.apply(this, arguments);
		};
	}());
}

function getCustomer(event, context, callback) {

	var email = null;

	if (!event.pathParameters || !event.pathParameters) {
		console.log('Email is missing!!');
		callback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, 'Email is missing !!!'));
		return;
	} else {
		email = decodeURIComponent(event.pathParameters.email);
	}

	var queryParams = new _common2.default().queryParams(process.env.CUSTOMER_INFO, 'email', email);

	_dynamodb2.default.query(queryParams, function (err, result) {

		if (err) {
			console.log('Unable to scan table. Error JOSN: ', (0, _stringify2.default)(err, undefined, 2));
			callback(null, new _common2.default().callbackHandler(statusCode.BAD_REQUEST, err));
			return;
		}

		if (result.Items.length) {
			console.log('Result - ', result.Items[0]);
			callback(null, new _common2.default().callbackHandler(statusCode.OK, result.Items[0]));
			return;
		} else {
			callback(null, new _common2.default().callbackHandler(statusCode.OK, 'No data associated with this ID'));
			return;
		}
	});
}

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support/register");

/***/ })

/******/ })));
//# sourceMappingURL=customerCRUD.js.map