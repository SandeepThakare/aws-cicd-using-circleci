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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar common = function () {\n\tfunction common() {\n\t\t(0, _classCallCheck3.default)(this, common);\n\n\t\tconsole.log('In common js constructor');\n\t}\n\n\t(0, _createClass3.default)(common, [{\n\t\tkey: 'callbackHandler',\n\t\tvalue: function callbackHandler(statusCode, message) {\n\n\t\t\tvar res = {\n\t\t\t\tStatusCode: statusCode,\n\t\t\t\theaders: {\n\t\t\t\t\t'Access-Control-Allow-Origin': '*',\n\t\t\t\t\t'Access-Control-Allow-Headers': '*',\n\t\t\t\t\t'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'\n\t\t\t\t},\n\t\t\t\tbody: (0, _stringify2.default)(message)\n\t\t\t};\n\n\t\t\treturn res;\n\t\t}\n\t}, {\n\t\tkey: 'postParams',\n\t\tvalue: function postParams(tableName, items) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tItem: items\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'scanParams',\n\t\tvalue: function scanParams(tableName) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'queryParams',\n\t\tvalue: function queryParams(tableName, key, keyvalue) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tKeyConditionExpression: 'key = :pk',\n\t\t\t\tExpressionAttributeValues: {\n\t\t\t\t\t':pk': decodeURIComponent(keyvalue)\n\t\t\t\t}\n\t\t\t};\n\t\t\treturn params;\n\t\t}\n\t}]);\n\treturn common;\n}();\n\nexports.default = common;\n\n//# sourceURL=webpack:///./common/common.js?");

/***/ }),

/***/ "./common/dynamodb.js":
/*!****************************!*\
  !*** ./common/dynamodb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\n// eslint-disable-line import/no-extraneous-dependencies\n\nvar options = {};\n\n// connect to local DB if running offline\nif (process.env.IS_OFFLINE) {\n\toptions = {\n\t\tregion: 'localhost',\n\t\tendpoint: 'http://localhost:8000'\n\t};\n}\n\nvar dynamoDB = new _awsSdk.DynamoDB.DocumentClient(options);\n\nexports.default = dynamoDB;\n\n//# sourceURL=webpack:///./common/dynamodb.js?");

/***/ }),

/***/ "./customer/customerCRUD.js":
/*!**********************************!*\
  !*** ./customer/customerCRUD.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nexports.addCustomer = addCustomer;\nexports.getCustomersList = getCustomersList;\nexports.getCustomer = getCustomer;\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _common = __webpack_require__(/*! ../common/common */ \"./common/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\nvar _awsSdk2 = _interopRequireDefault(_awsSdk);\n\nvar _dynamodb = __webpack_require__(/*! ../common/dynamodb */ \"./common/dynamodb.js\");\n\nvar _dynamodb2 = _interopRequireDefault(_dynamodb);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction addCustomer(event, context, callback) {\n\n\tvar eventData = void 0;\n\tvar email = void 0;\n\tvar created_at = new Date().getTime();\n\tif (!event.body || !event.pathParameters.email) {\n\t\tcallback(null, new _common2.default().callbackHandler(401, 'Event Body or email is missing !!!'));\n\t\treturn;\n\t} else {\n\t\teventData = JSON.parse(event.body);\n\t\temail = event.pathParameters.email;\n\t}\n\n\tvar Item = {\n\t\temail: decodeURIComponent(email),\n\t\tcreated_at: created_at,\n\t\tcustomerData: eventData\n\t};\n\n\tvar postParams = new _common2.default().postParams(process.env.CUSTOMER_INFO, Item);\n\n\t// var params = {\n\t// \tTableName: process.env.CUSTOMER_INFO,\n\t// \tItem: {\n\t// \t\temail: decodeURIComponent(email),\n\t// \t\tcreated_at: created_at,\n\t// \t\tcustomerData: eventData\n\t// \t},\n\t// };\n\n\tconsole.log(postParams);\n\n\t_dynamodb2.default.put(postParams, function (err, data) {\n\t\tif (err) {\n\t\t\tconsole.log('Unable to add records in table. Error JSON: ', (0, _stringify2.default)(err, undefined, 2));\n\t\t\tcallback(null, new _common2.default().callbackHandler(401, err));\n\t\t\treturn;\n\t\t}\n\n\t\tconsole.log('Data added successfully', data);\n\t\tcallback(null, new _common2.default().callbackHandler(200, { email: decodeURIComponent(email), cutsomerData: eventData }));\n\t\treturn;\n\t});\n}\n\nfunction getCustomersList(event, context, callback) {\n\n\tvar scanParams = new _common2.default().scanParams(process.env.CUSTOMER_INFO);\n\n\t_dynamodb2.default.scan(scanParams, function (err, data) {\n\t\tif (err) {\n\t\t\tconsole.log('Unable to scan table. ERROR JSON: ', (0, _stringify2.default)(err, undefined, 2));\n\t\t\tcallback(null, new _common2.default().callbackHandler(401, err));\n\t\t\treturn;\n\t\t}\n\n\t\tconsole.log('Result - ', data);\n\t\tcallback(null, new _common2.default().callbackHandler(200, data));\n\t\treturn;\n\t});\n}\n\nfunction getCustomer(event, context, callback) {\n\n\t// let email = null;\n\n\t// if(!evet.pathParameters || !event.pathParameters) {\n\n\t// }\n}\n\n//# sourceURL=webpack:///./customer/customerCRUD.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/classCallCheck":
/*!*******************************************************!*\
  !*** external "babel-runtime/helpers/classCallCheck" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/classCallCheck\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/classCallCheck%22?");

/***/ }),

/***/ "babel-runtime/helpers/createClass":
/*!****************************************************!*\
  !*** external "babel-runtime/helpers/createClass" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/createClass\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/createClass%22?");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");\n\n//# sourceURL=webpack:///external_%22source-map-support/register%22?");

/***/ })

/******/ })));