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
/******/ 	return __webpack_require__(__webpack_require__.s = "./common/dynamodb.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/dynamodb.js":
/*!****************************!*\
  !*** ./common/dynamodb.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\n__webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n\nvar _awsSdk = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n\n// eslint-disable-line import/no-extraneous-dependencies\n// import AWS from 'aws-sdk';\n__webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\").config({ path: \"../.env\" /* path to your project root folder */ });\nvar options = {};\nconsole.log('Envoirment -----> ', process.env.IS_OFFLINE);\n// connect to local DB if running offline\nif (process.env.IS_OFFLINE) {\n\tconsole.log('Inside of offline');\n\toptions = {\n\t\tregion: process.env.AWS_REGION,\n\t\tendpoint: 'http://localhost:8000'\n\t};\n}\nconsole.log('Outside');\nvar dynamoDB = new _awsSdk.DynamoDB.DocumentClient(options);\n\nexports.default = dynamoDB;\n\n//# sourceURL=webpack:///./common/dynamodb.js?");

/***/ }),

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nconst fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\n\n/*\n * Parses a string or buffer into an object\n * @param {(string|Buffer)} src - source to be parsed\n * @returns {Object} keys and values from src\n*/\nfunction parse (src) {\n  const obj = {}\n\n  // convert Buffers before splitting into lines and processing\n  src.toString().split('\\n').forEach(function (line) {\n    // matching \"KEY' and 'VAL' in 'KEY=VAL'\n    const keyValueArr = line.match(/^\\s*([\\w\\.\\-]+)\\s*=\\s*(.*)?\\s*$/)\n    // matched?\n    if (keyValueArr != null) {\n      const key = keyValueArr[1]\n\n      // default undefined or missing values to empty string\n      let value = keyValueArr[2] || ''\n\n      // expand newlines in quoted values\n      const len = value ? value.length : 0\n      if (len > 0 && value.charAt(0) === '\"' && value.charAt(len - 1) === '\"') {\n        value = value.replace(/\\\\n/gm, '\\n')\n      }\n\n      // remove any surrounding quotes and extra spaces\n      value = value.replace(/(^['\"]|['\"]$)/g, '').trim()\n\n      obj[key] = value\n    }\n  })\n\n  return obj\n}\n\n/*\n * Main entry point into dotenv. Allows configuration before loading .env\n * @param {Object} options - options for parsing .env file\n * @param {string} [options.path=.env] - path to .env file\n * @param {string} [options.encoding=utf8] - encoding of .env file\n * @returns {Object} parsed object or error\n*/\nfunction config (options) {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding = 'utf8'\n\n  if (options) {\n    if (options.path) {\n      dotenvPath = options.path\n    }\n    if (options.encoding) {\n      encoding = options.encoding\n    }\n  }\n\n  try {\n    // specifying an encoding returns a string instead of a buffer\n    const parsed = parse(fs.readFileSync(dotenvPath, { encoding }))\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!process.env.hasOwnProperty(key)) {\n        process.env[key] = parsed[key]\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    return { error: e }\n  }\n}\n\nmodule.exports.config = config\nmodule.exports.load = config\nmodule.exports.parse = parse\n\n\n//# sourceURL=webpack:///./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");\n\n//# sourceURL=webpack:///external_%22aws-sdk%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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