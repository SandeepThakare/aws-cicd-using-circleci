!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n){e.exports=require("babel-runtime/helpers/createClass")},function(e,n){e.exports=require("babel-runtime/helpers/classCallCheck")},function(e,n){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=u(t(1)),r=u(t(0));function u(e){return e&&e.__esModule?e:{default:e}}var l=function(){function e(){(0,o.default)(this,e)}return(0,r.default)(e,[{key:"getStatusCode",value:function(){return{OK:200,CREATED:201,NO_CONTENT:204,PARTIAL_CONTENT:206,NOT_MODIFIED:304,BAD_REQUEST:400,UNAUTHORIZED:401,FORBIDDEN:403,NOT_FOUND:404,INTERNAL_SERVER_ERROR:500}}}]),e}();n.default=l},function(e,n){e.exports=require("dotenv")},function(e,n){e.exports=require("aws-sdk")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,r=t(5),u=(o=r)&&o.__esModule?o:{default:o};t(4).config({path:"../.env"});var l=null;console.log("Envoirment -----\x3e ",process.env.IS_OFFLINE),process.env.IS_OFFLINE||(console.log("Inside of offline"),l={region:"us-east-1",endpoint:"http://localhost:8000"}),console.log("Outside");var a=new u.default.DynamoDB.DocumentClient(l);n.default=a},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=l(t(2)),r=l(t(1)),u=l(t(0));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){(0,r.default)(this,e)}return(0,u.default)(e,[{key:"callbackHandler",value:function(e,n){return{StatusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Allow-Methods":"GET,HEAD,OPTIONS,POST,PUT"},body:(0,o.default)(n)}}},{key:"postParams",value:function(e,n){return{TableName:e,Item:n}}},{key:"scanParams",value:function(e){return{TableName:e}}},{key:"queryParams",value:function(e,n,t){return{TableName:e,KeyConditionExpression:n+" = :pk",ExpressionAttributeValues:{":pk":decodeURIComponent(t)}}}}]),e}();n.default=a},function(e,n){e.exports=require("babel-runtime/core-js/promise")},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=a(t(2)),r=a(t(8));n.getCust=function(e,n,t){n.callbackWaitsForEmptyEventLoop=!1;var a=new u.default,c=(new u.default).scanParams(process.env.CUSTOMER_INFO||"customer-info");return new r.default(function(e,n){console.log(c),l.default.scan(c,function(r,u){r&&(console.log("Unable to scan table. ERROR JSON: ",(0,o.default)(r,void 0,2)),n(r)),e("success"),console.log("Result - ",t(null,u)),console.log(a.callbackHandler(s.OK,u))})}).then(function(e){console.log("Inside then ---\x3e ",e),t(null,a.callbackHandler(s.OK,e))}).catch(function(e){console.log("Inside catch ---\x3e",e),a.callbackHandler(s.BAD_REQUEST,e)})};var u=a(t(7)),l=a(t(6));function a(e){return e&&e.__esModule?e:{default:e}}var s=(new(a(t(3)).default)).getStatusCode()}]));