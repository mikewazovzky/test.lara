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

eval("/* Object and function Arrow Syntax */\r\n\r\nvar Team = function Team(names) {\n\tif ( names === void 0 ) names = [];\n\r\n\tthis.names = names;\r\n};\r\n\t\r\nTeam.prototype.greet = function greet () {\r\n\tthis.names.forEach(function (name) { return name.greet(); });\t\t\r\n};\r\n\r\nvar Member = function Member(name) {\r\n\tthis.name = name;\r\n};\r\n\t\r\nMember.prototype.greet = function greet () {\r\n\tconsole.log(this.name);\r\n};\r\n\r\nteam = new Team(\r\n\t[new Member('Sulley'), new Member('Mike'), new Member('Boo')]\r\n);\r\n\r\nteam.greet();\r\n\r\n/* Default parameters */\r\n\r\nfunction applyDiscount1(cost, discount) {\r\n\t\r\n\tdiscount = discount || .10;\r\n\treturn cost - (cost * discount);\r\n}\r\n\r\nfunction applyDiscount2(cost, discount) {\n\tif ( discount === void 0 ) discount = .10;\n\r\n\t\r\n\treturn cost - (cost * discount);\r\n}\r\n\r\nfunction calculateDiscount() {\r\n\treturn .20;\r\n}\r\n\r\nfunction applyDiscount(cost, discount) {\n\tif ( discount === void 0 ) discount = calculateDiscount();\n\r\n\t\r\n\treturn cost - (cost * discount);\r\n}\r\n\r\nconsole.log(applyDiscount(100, .30));\r\nconsole.log(applyDiscount(100));\r\n\r\n/* Variable number of arguments - REST and SPREAD operator */\r\n\r\nfunction sum1() {\n\tvar numbers = [], len = arguments.length;\n\twhile ( len-- ) numbers[ len ] = arguments[ len ];\n\r\n\t\r\n\treturn numbers.reduce(function(prev, current){\r\n\t\t\r\n\t\treturn prev + current;\r\n\t\t\r\n\t});\r\n}\r\n\r\nfunction sum() {\n\tvar numbers = [], len = arguments.length;\n\twhile ( len-- ) numbers[ len ] = arguments[ len ];\n\r\n\treturn numbers.reduce(\r\n\t\tfunction (prev, current) { return prev + current; }\r\n\t);\t\t\r\n}\r\n\r\nconsole.log(sum(1,2,3,4,5));\r\n\r\nfunction add(a, b, c) {\t\r\n\treturn a + b + c;\r\n}\r\n\r\nvar arr1 = [1, 2, 3, 4, 5];\r\nvar arr2 = [7, 8];\r\n\r\nconsole.log(add.apply(void 0, arr1)); // returns NaN\r\n\r\n// old JS style html string\r\nvar html = [\r\n\t'<div class=\"alert\">',\r\n\t\t'<p>Foo</p>',\r\n\t'</div>'\r\n].join('');\r\n\r\nconsole.log(html);\r\n\r\n// ES6\r\nvar name = 'Foo';\r\n\r\nvar template = (\"\\n\\t<div class=\\\"alert\\\">\\n\\t\\t<p>\" + name + \"/p>\\n\\t</div>\\n\").trim();\r\n\r\nconsole.log(template);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3Rlc3QuanM/MWVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBPYmplY3QgYW5kIGZ1bmN0aW9uIEFycm93IFN5bnRheCAqL1xyXG5cclxuY2xhc3MgVGVhbSB7XHJcblx0XHJcblx0Y29uc3RydWN0b3IobmFtZXMgPSBbXSkge1xyXG5cdFx0dGhpcy5uYW1lcyA9IG5hbWVzO1xyXG5cdH1cclxuXHRcclxuXHRncmVldCgpIHtcclxuXHRcdHRoaXMubmFtZXMuZm9yRWFjaCgobmFtZSkgPT4gbmFtZS5ncmVldCgpKTtcdFx0XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBNZW1iZXIge1xyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XHJcblx0fVxyXG5cdFxyXG5cdGdyZWV0KCkge1xyXG5cdFx0Y29uc29sZS5sb2codGhpcy5uYW1lKTtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbnRlYW0gPSBuZXcgVGVhbShcclxuXHRbbmV3IE1lbWJlcignU3VsbGV5JyksIG5ldyBNZW1iZXIoJ01pa2UnKSwgbmV3IE1lbWJlcignQm9vJyldXHJcbik7XHJcblxyXG50ZWFtLmdyZWV0KCk7XHJcblxyXG4vKiBEZWZhdWx0IHBhcmFtZXRlcnMgKi9cclxuXHJcbmZ1bmN0aW9uIGFwcGx5RGlzY291bnQxKGNvc3QsIGRpc2NvdW50KSB7XHJcblx0XHJcblx0ZGlzY291bnQgPSBkaXNjb3VudCB8fCAuMTA7XHJcblx0cmV0dXJuIGNvc3QgLSAoY29zdCAqIGRpc2NvdW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwbHlEaXNjb3VudDIoY29zdCwgZGlzY291bnQgPSAuMTApIHtcclxuXHRcclxuXHRyZXR1cm4gY29zdCAtIChjb3N0ICogZGlzY291bnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVEaXNjb3VudCgpIHtcclxuXHRyZXR1cm4gLjIwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhcHBseURpc2NvdW50KGNvc3QsIGRpc2NvdW50ID0gY2FsY3VsYXRlRGlzY291bnQoKSkge1xyXG5cdFxyXG5cdHJldHVybiBjb3N0IC0gKGNvc3QgKiBkaXNjb3VudCk7XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKGFwcGx5RGlzY291bnQoMTAwLCAuMzApKTtcclxuY29uc29sZS5sb2coYXBwbHlEaXNjb3VudCgxMDApKTtcclxuXHJcbi8qIFZhcmlhYmxlIG51bWJlciBvZiBhcmd1bWVudHMgLSBSRVNUIGFuZCBTUFJFQUQgb3BlcmF0b3IgKi9cclxuXHJcbmZ1bmN0aW9uIHN1bTEoLi4ubnVtYmVycykge1xyXG5cdFxyXG5cdHJldHVybiBudW1iZXJzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJyZW50KXtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHByZXYgKyBjdXJyZW50O1xyXG5cdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1bSguLi5udW1iZXJzKSB7XHJcblx0cmV0dXJuIG51bWJlcnMucmVkdWNlKFxyXG5cdFx0KHByZXYsIGN1cnJlbnQpID0+IHByZXYgKyBjdXJyZW50XHJcblx0KTtcdFx0XHJcbn1cclxuXHJcbmNvbnNvbGUubG9nKHN1bSgxLDIsMyw0LDUpKTtcclxuXHJcbmZ1bmN0aW9uIGFkZChhLCBiLCBjKSB7XHRcclxuXHRyZXR1cm4gYSArIGIgKyBjO1xyXG59XHJcblxyXG52YXIgYXJyMSA9IFsxLCAyLCAzLCA0LCA1XTtcclxudmFyIGFycjIgPSBbNywgOF07XHJcblxyXG5jb25zb2xlLmxvZyhhZGQoLi4uYXJyMSkpOyAvLyByZXR1cm5zIE5hTlxyXG5cclxuLy8gb2xkIEpTIHN0eWxlIGh0bWwgc3RyaW5nXHJcbmxldCBodG1sID0gW1xyXG5cdCc8ZGl2IGNsYXNzPVwiYWxlcnRcIj4nLFxyXG5cdFx0JzxwPkZvbzwvcD4nLFxyXG5cdCc8L2Rpdj4nXHJcbl0uam9pbignJyk7XHJcblxyXG5jb25zb2xlLmxvZyhodG1sKTtcclxuXHJcbi8vIEVTNlxyXG5sZXQgbmFtZSA9ICdGb28nO1xyXG5cclxubGV0IHRlbXBsYXRlID0gYFxyXG5cdDxkaXYgY2xhc3M9XCJhbGVydFwiPlxyXG5cdFx0PHA+JHtuYW1lfS9wPlxyXG5cdDwvZGl2PlxyXG5gLnRyaW0oKTtcclxuXHJcbmNvbnNvbGUubG9nKHRlbXBsYXRlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy90ZXN0LmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBS0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);