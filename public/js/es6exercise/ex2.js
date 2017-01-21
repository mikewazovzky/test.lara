function fakeAjax(url,cb) {
	var fake_responses = {
		"file1": "The first text",
		"file2": "The middle text",
		"file3": "The last text"
	};
	var randomDelay = (Math.round(Math.random() * 1E4) % 8000) + 1000;

	console.log("Requesting: " + url);

	setTimeout(function(){
		cb(fake_responses[url]);
	},randomDelay);
}

function output(text) {
	console.log(text);
}

// **************************************

function getFile(filename) {
	
	var text;
	var fn;
	
	fakeAjax(filename, function(response) {
		text = response;
		if(fn) return fn(response); 
		else text = response; 
	});
	
	return function(cb) {
		if(text) cb(text);
		else fn = cb;
	};
}

// thunk - функция получающая в качестве единственного аргумента функцию 
var th1 = getFile('file1');		
var th2 = getFile('file2');		
var th3 = getFile('file3');		

th1(function(file1) { 
	output(file1);
	th2(function(file2) {
		output(file2);
		th3(function(file3) {
			output(file3);
			output('Completed');
		});
	});	
});


// request all files at once in "parallel"
// ???
