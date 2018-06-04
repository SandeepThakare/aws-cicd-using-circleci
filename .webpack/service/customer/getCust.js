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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(0);

var _createClass3 = _interopRequireDefault(_createClass2);

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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _awsSdk = __webpack_require__(5);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(4).config({ path: '../.env' /* path to your project root folder */ });
// import { DynamoDB } from 'aws-sdk'; // eslint-disable-line import/no-extraneous-dependencies

// const dynamoDB = new AWS.DynamoDB.DocumentClient();
var options = null;
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
var dynamoDB = new _awsSdk2.default.DynamoDB.DocumentClient(options);

exports.default = dynamoDB;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = __webpack_require__(1);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(0);

var _createClass3 = _interopRequireDefault(_createClass2);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(2);

var _stringify2 = _interopRequireDefault(_stringify);

var _common = __webpack_require__(7);

var _common2 = _interopRequireDefault(_common);

var _dynamodb = __webpack_require__(6);

var _dynamodb2 = _interopRequireDefault(_dynamodb);

var _statusCode = __webpack_require__(3);

var _statusCode2 = _interopRequireDefault(_statusCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import AWS from 'aws-sdk';
var statusCode = new _statusCode2.default().getStatusCode();

module.exports.getCust = function (event, context, callback) {
	context.callbackWaitsForEmptyEventLoop = false;
	// console.log('Context ---> ', context);
	// console.log('callback --->', callback);
	var a = new _common2.default();

	var scanParams = new _common2.default().scanParams(process.env.CUSTOMER_INF || 'customer-ino');
	console.log(scanParams);

	_dynamodb2.default.scan(scanParams, function (err, data) {
		if (err) {
			console.log('Unable to scan table. ERROR JSON: ', (0, _stringify2.default)(err, undefined, 2));
			callback(null, a.callbackHandler(statusCode.BAD_REQUEST, err));
			return;
		}

		console.log('Result - ', callback(null, data));
		console.log(a.callbackHandler(statusCode.OK, data));
		// context.succeed();
		callback(null, a.callbackHandler(statusCode.OK, data));
		return;
	});

	var res = {
		StatusCode: 200,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'
		},
		body: (0, _stringify2.default)('Done')
	};
	console.log('Outside callback', res);
	callback(null, res);
	return;
};

/***/ })
/******/ ])));