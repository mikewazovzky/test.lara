var state = 0;

function add(x, y, callback) {
	setTimeout(function() {
		state = callback(x + y);
		console.log('result = ' + state);		
	}, 2000);
}

// checks the state every at regular time intervals (delay) while state is 0
// 
function timer(delay, max) {
	setTimeout(function() {
		console.log('Hi there! state = ' + state + ', max = ' + max);
		if(state == 0 && max > 0) {
			timer(delay, max - delay);
		}
	}, delay);	
}

function makeThunk(fn) {
	var args = [].slice.call(arguments, 1);
	return function(cb) {
		args.push(cb);
		fn.apply(null, args);
	};
}

// var thunk = function(cb) {
	// add(10, 15, cb);
// }

var thunk = makeThunk(add, 10, 15);

console.log('start');

thunk(function(param) {
	return param;
});

timer(500, 7000);

console.log('finish');

// Meaning of life
console.log('-- Meaning of life --');

function getData(data, cb) {
	setTimeout(function() { cb(data)}, 1000);
}

getData(10, function(num1) {
	var x = 1 + num1;
	getData(30, function(num2) {
		var y = 1 + num2;
		getData('Meaning of life (callback): ' + (x + y), function(answer) {
			console.log(answer);
		});
	});	
});

// Meaning of life
console.log('-- Meaning of life with Thunks --');

var get10 = makeThunk(getData, 10);
var get30 = makeThunk(getData, 30);

get10(function (num1) {
	var x = 1 + num1;
	get30(function(num2) {
		var y = 1 + num2;
		var getAnswer = makeThunk(getData, 'Meaning of life (thunk): ' + (x + y));
		getAnswer(function(answer) {
			console.log(answer);
		});
	});
});



