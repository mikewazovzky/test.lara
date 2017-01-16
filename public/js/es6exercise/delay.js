var state = 0;

function add(x, y, callback) {
	setTimeout(function() {
		state = callback(x + y);
		console.log('result = ' + state);		
	}, 3000);
}

var thunk = function(cb) {
	add(10, 15, cb);
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

console.log('start');

thunk(function(param) {
	return param;
});


timer(500, 7000);

console.log('finish');




