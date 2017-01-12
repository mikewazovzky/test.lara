/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("$(\"document\").ready(function() {\t\r\n/******************************* Excecution starts here ************************************************/\r\n\r\n$('#btn-add').click(function(){\r\n\talert('Create button pressed');\r\n});\r\n\r\nfunction errorFn(jqXHR, textStatus, errorThrown) {\r\n\t\r\n\tvar msg = '';\r\n\t\t\r\n\tif (jqXHR.status === 0) {\r\n\t\tmsg = 'Not connected.\\n Verify Network.';\r\n\t} else if (jqXHR.status == 404) {\r\n\t\tmsg = 'Requested page not found. [404]';\r\n\t} else if (jqXHR.status == 500) {\r\n\t\tmsg = 'Internal Server Error [500].';\r\n\t} else if (textStatus === 'parsererror') {\r\n\t\tmsg = 'Requested JSON parse failed.';\r\n\t} else if (textStatus === 'timeout') {\r\n\t\tmsg = 'Time out error.';\r\n\t} else if (textStatus === 'abort') {\r\n\t\tmsg = 'Ajax request aborted.';\r\n\t} else {\r\n\t\tmsg = 'Uncaught Error.\\n' + jqXHR.responseText;\r\n\t}\r\n\r\n\tconsole.log(\"Error: \", msg);\r\n}\r\n\r\nvar myPromise =  new Promise(function(resolve, reject) {\r\n\t$.ajax({\r\n\t\turl: '/tasks/47',\r\n\t\ttype: 'get',\r\n\t\tdataType: 'json',\r\n\t\tsuccess: resolve,\r\n\t\terror: reject\r\n\t});\r\n});\r\n\t\t\r\nmyPromise.then(function(value) {\r\n\tconsole.log(value); // \"Success!\"\r\n\tthrow 'Ups...';\r\n  \r\n}, errorFn).catch(function(e) {\r\n\tconsole.log(e); // \"Ups...\"\r\n\t\r\n}).then(function(){\r\n\tconsole.log('after a catch the chain is restored');\r\n\t\r\n}, function () {\r\n\tconsole.log('Not fired due to the catch');\r\n});\r\n\t\r\n/*********************************************************************************************/\r\n});\t//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rlc3QuanM/MWVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIkKFwiZG9jdW1lbnRcIikucmVhZHkoZnVuY3Rpb24oKSB7XHRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogRXhjZWN1dGlvbiBzdGFydHMgaGVyZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4kKCcjYnRuLWFkZCcpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0YWxlcnQoJ0NyZWF0ZSBidXR0b24gcHJlc3NlZCcpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGVycm9yRm4oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHJcblx0dmFyIG1zZyA9ICcnO1xyXG5cdFx0XHJcblx0aWYgKGpxWEhSLnN0YXR1cyA9PT0gMCkge1xyXG5cdFx0bXNnID0gJ05vdCBjb25uZWN0ZWQuXFxuIFZlcmlmeSBOZXR3b3JrLic7XHJcblx0fSBlbHNlIGlmIChqcVhIUi5zdGF0dXMgPT0gNDA0KSB7XHJcblx0XHRtc2cgPSAnUmVxdWVzdGVkIHBhZ2Ugbm90IGZvdW5kLiBbNDA0XSc7XHJcblx0fSBlbHNlIGlmIChqcVhIUi5zdGF0dXMgPT0gNTAwKSB7XHJcblx0XHRtc2cgPSAnSW50ZXJuYWwgU2VydmVyIEVycm9yIFs1MDBdLic7XHJcblx0fSBlbHNlIGlmICh0ZXh0U3RhdHVzID09PSAncGFyc2VyZXJyb3InKSB7XHJcblx0XHRtc2cgPSAnUmVxdWVzdGVkIEpTT04gcGFyc2UgZmFpbGVkLic7XHJcblx0fSBlbHNlIGlmICh0ZXh0U3RhdHVzID09PSAndGltZW91dCcpIHtcclxuXHRcdG1zZyA9ICdUaW1lIG91dCBlcnJvci4nO1xyXG5cdH0gZWxzZSBpZiAodGV4dFN0YXR1cyA9PT0gJ2Fib3J0Jykge1xyXG5cdFx0bXNnID0gJ0FqYXggcmVxdWVzdCBhYm9ydGVkLic7XHJcblx0fSBlbHNlIHtcclxuXHRcdG1zZyA9ICdVbmNhdWdodCBFcnJvci5cXG4nICsganFYSFIucmVzcG9uc2VUZXh0O1xyXG5cdH1cclxuXHJcblx0Y29uc29sZS5sb2coXCJFcnJvcjogXCIsIG1zZyk7XHJcbn1cclxuXHJcbmxldCBteVByb21pc2UgPSAgbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcblx0JC5hamF4KHtcclxuXHRcdHVybDogJy90YXNrcy80NycsXHJcblx0XHR0eXBlOiAnZ2V0JyxcclxuXHRcdGRhdGFUeXBlOiAnanNvbicsXHJcblx0XHRzdWNjZXNzOiByZXNvbHZlLFxyXG5cdFx0ZXJyb3I6IHJlamVjdFxyXG5cdH0pO1xyXG59KTtcclxuXHRcdFxyXG5teVByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG5cdGNvbnNvbGUubG9nKHZhbHVlKTsgLy8gXCJTdWNjZXNzIVwiXHJcblx0dGhyb3cgJ1Vwcy4uLic7XHJcbiAgXHJcbn0sIGVycm9yRm4pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcclxuXHRjb25zb2xlLmxvZyhlKTsgLy8gXCJVcHMuLi5cIlxyXG5cdFxyXG59KS50aGVuKGZ1bmN0aW9uKCl7XHJcblx0Y29uc29sZS5sb2coJ2FmdGVyIGEgY2F0Y2ggdGhlIGNoYWluIGlzIHJlc3RvcmVkJyk7XHJcblx0XHJcbn0sIGZ1bmN0aW9uICgpIHtcclxuXHRjb25zb2xlLmxvZygnTm90IGZpcmVkIGR1ZSB0byB0aGUgY2F0Y2gnKTtcclxufSk7XHJcblx0XHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbn0pO1x0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvdGVzdC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);