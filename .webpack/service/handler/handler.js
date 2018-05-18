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
/******/ 	return __webpack_require__(__webpack_require__.s = "./handler/handler.js");
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ \"babel-runtime/helpers/classCallCheck\");\n\nvar _classCallCheck3 = _interopRequireDefault(_classCallCheck2);\n\nvar _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ \"babel-runtime/helpers/createClass\");\n\nvar _createClass3 = _interopRequireDefault(_createClass2);\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar common = function () {\n\tfunction common() {\n\t\t(0, _classCallCheck3.default)(this, common);\n\n\t\tconsole.log('In common js constructor');\n\t}\n\n\t(0, _createClass3.default)(common, [{\n\t\tkey: 'callbackHandler',\n\t\tvalue: function callbackHandler(statusCode, message) {\n\n\t\t\tvar res = {\n\t\t\t\tStatusCode: statusCode,\n\t\t\t\theaders: {\n\t\t\t\t\t'Access-Control-Allow-Origin': '*',\n\t\t\t\t\t'Access-Control-Allow-Headers': '*',\n\t\t\t\t\t'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT'\n\t\t\t\t},\n\t\t\t\tbody: (0, _stringify2.default)(message)\n\t\t\t};\n\n\t\t\treturn res;\n\t\t}\n\t}, {\n\t\tkey: 'postParams',\n\t\tvalue: function postParams(tableName, items) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tItem: items\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'scanParams',\n\t\tvalue: function scanParams(tableName) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName\n\t\t\t};\n\n\t\t\treturn params;\n\t\t}\n\t}, {\n\t\tkey: 'queryParams',\n\t\tvalue: function queryParams(tableName, key, keyvalue) {\n\t\t\tvar params = {\n\t\t\t\tTableName: tableName,\n\t\t\t\tKeyConditionExpression: key + ' = :pk',\n\t\t\t\tExpressionAttributeValues: {\n\t\t\t\t\t':pk': decodeURIComponent(keyvalue)\n\t\t\t\t}\n\t\t\t};\n\t\t\treturn params;\n\t\t}\n\t}]);\n\treturn common;\n}();\n\nexports.default = common;\n\n//# sourceURL=webpack:///./common/common.js?");

/***/ }),

/***/ "./handler/handler.js":
/*!****************************!*\
  !*** ./handler/handler.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.hello = undefined;\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _common = __webpack_require__(/*! ../common/common */ \"./common/common.js\");\n\nvar _common2 = _interopRequireDefault(_common);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar hello = exports.hello = function hello(event, context, callback) {\n\tvar response = {\n\t\tstatusCode: 200,\n\t\tbody: (0, _stringify2.default)({\n\t\t\tmessage: 'hello there'\n\t\t})\n\t};\n\n\tconsole.log(new _common2.default().callbackHandler(200, 'abc'));\n\n\tcallback(null, response);\n};\n// import { common } from '../common/common';\n\n//# sourceURL=webpack:///./handler/handler.js?");

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