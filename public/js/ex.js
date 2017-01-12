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

eval("function fakeAjax(url,cb) {\n\tvar fake_responses = {\n\t\t\"file1\": \"The first text\",\n\t\t\"file2\": \"The middle text\",\n\t\t\"file3\": \"The last text\"\n\t};\n\tvar randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;\n\n\tconsole.log(\"Requesting: \" + url);\n\n\tsetTimeout(function(){\n\t\tcb(fake_responses[url]);\n\t},randomDelay);\n}\n\nfunction output(text) {\n\tconsole.log(text);\n}\n\n// **************************************\n// The old-n-busted callback way\n\nvar response = {};\nfunction length(obj) {\n\tvar l = 0;\n\tobj.forEach(function(item){\n\t\tl++;\n\t});\n\treturn l;\n}\n\nfunction getFile(file) {\n\tfakeAjax(file,function(text){\n\t\t// what do we do here?\n\n\t\tresponse[file] = text;\n\t\toutput(length(response));\n\t\t\n\t\tif(response.length == 3) {\n\t\t\toutput(((response.file1) + \" - \" + (response.file2) + \" - \" + (response.file3)));\t\n\t\t}\n\n\t});\n}\n\n// request all files at once in \"parallel\"\ngetFile(\"file1\");\ngetFile(\"file2\");\ngetFile(\"file3\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2V4LmpzPzkwNzUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZmFrZUFqYXgodXJsLGNiKSB7XG5cdHZhciBmYWtlX3Jlc3BvbnNlcyA9IHtcblx0XHRcImZpbGUxXCI6IFwiVGhlIGZpcnN0IHRleHRcIixcblx0XHRcImZpbGUyXCI6IFwiVGhlIG1pZGRsZSB0ZXh0XCIsXG5cdFx0XCJmaWxlM1wiOiBcIlRoZSBsYXN0IHRleHRcIlxuXHR9O1xuXHR2YXIgcmFuZG9tRGVsYXkgPSAoTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMUU0KSAlIDgwMDApICsgMTAwMDtcblxuXHRjb25zb2xlLmxvZyhcIlJlcXVlc3Rpbmc6IFwiICsgdXJsKTtcblxuXHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0Y2IoZmFrZV9yZXNwb25zZXNbdXJsXSk7XG5cdH0scmFuZG9tRGVsYXkpO1xufVxuXG5mdW5jdGlvbiBvdXRwdXQodGV4dCkge1xuXHRjb25zb2xlLmxvZyh0ZXh0KTtcbn1cblxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoZSBvbGQtbi1idXN0ZWQgY2FsbGJhY2sgd2F5XG5cbnZhciByZXNwb25zZSA9IHt9O1xuZnVuY3Rpb24gbGVuZ3RoKG9iaikge1xuXHR2YXIgbCA9IDA7XG5cdG9iai5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuXHRcdGwrKztcblx0fSk7XG5cdHJldHVybiBsO1xufVxuXG5mdW5jdGlvbiBnZXRGaWxlKGZpbGUpIHtcblx0ZmFrZUFqYXgoZmlsZSxmdW5jdGlvbih0ZXh0KXtcblx0XHQvLyB3aGF0IGRvIHdlIGRvIGhlcmU/XG5cblx0XHRyZXNwb25zZVtmaWxlXSA9IHRleHQ7XG5cdFx0b3V0cHV0KGxlbmd0aChyZXNwb25zZSkpO1xuXHRcdFxuXHRcdGlmKHJlc3BvbnNlLmxlbmd0aCA9PSAzKSB7XG5cdFx0XHRvdXRwdXQoYCR7cmVzcG9uc2UuZmlsZTF9IC0gJHtyZXNwb25zZS5maWxlMn0gLSAke3Jlc3BvbnNlLmZpbGUzfWApO1x0XG5cdFx0fVxuXG5cdH0pO1xufVxuXG4vLyByZXF1ZXN0IGFsbCBmaWxlcyBhdCBvbmNlIGluIFwicGFyYWxsZWxcIlxuZ2V0RmlsZShcImZpbGUxXCIpO1xuZ2V0RmlsZShcImZpbGUyXCIpO1xuZ2V0RmlsZShcImZpbGUzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);